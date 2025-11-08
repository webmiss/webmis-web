# ArchLinux系统安装

## USB启动盘
``` bash
# 制作U盘启动盘(win下直接拷贝ISO里的文件）
dd if=xxx.iso of=/dev/sda bs=1M && sync
# 恢复U盘容量
dd if=/dev/zero of=/dev/sda bs=1M count=1
# 将ARCH_201603换成U盘分区的卷名(分区名)
vi loader\entries\archiso-x86_64.conf
```
- 镜像文件: https://www.archlinux.org/download/
- USB刻录: https://sourceforge.net/p/usbwriter/wiki/Documentation/

<br/>

## 设置EFI模式( F10 )
``` bash
1) 电脑启动模式设置成“UEFI Mode”
2) 禁用安全启动(Secure Boot)
```

<br/>

## GPT分区
``` bash
parted /dev/sda
# 建立GPT分区表(MBR msdos)
mklabel gpt
# 建立ESP分区
mkpart primary 2048s  512M
# 标志为boot
set 1 boot on
# 退出
q
```
<br/>

## Linux分区
#### 1) 工具(MBR : cfdisk、fdisk; GPT : fdisk)
``` bash
fdisk -l
```
设备 起点 末尾 扇区 大小 类型<br>
/dev/nvme0n1p1 2048 1050623 1048576 300M EFI System<br>
/dev/nvme0n1p2 609640448 618029055 8388608 32G Linux swap<br>
/dev/nvme0n1p3 618029056 659972095 41943040 120G Linux /<br>
/dev/nvme0n1p4 659972096 976773134 316801039 483.6 Linux /home<br>

#### 2) 格式化(注意根据自己的事实分区操作)
``` bash
# 格式化
mkfs -t ext4 /dev/nvme0n1p3
mkfs -t ext4 /dev/nvme0n1p4

# 如果是自己创建的EFI分区
mkfs -t vfat /dev/nvme0n1p1

# 交换分区
mkswap /dev/nvme0n1p2
swapon /dev/nvme0n1p2
```
<br/>

## 挂载(/、home、efi)
``` bash
# 挂载
mount /dev/nvme0n1p3 /mnt
mkdir /mnt/home && mount /dev/nvme0n1p4 /mnt/home
mkdir -p /mnt/boot/efi && mount /dev/nvme0n1p1 /mnt/boot/efi
```
<br/>

## 连接网络
```bash
# 有线
dhcpcd

# Wifi
iwctl
device list
station wlan0 connect TP-LINK_45DF
exit
```

## 安装系统
#### 1) 编辑更新源
``` bash
vim /etc/pacman.d/mirrorlist
```
Server = https://mirrors.aliyun.com/archlinux/$repo/os/$arch

#### 2) 安装基础系统
``` bash
pacstrap /mnt base base-devel linux linux-firmware
```

#### 3) 生成磁盘挂载列表
``` bash
genfstab -U /mnt >> /mnt/etc/fstab
```

#### 4) 进入新系统
``` bash
arch-chroot /mnt
pacman -S vim dhcpcd
```
<br/>

## 基础配置
``` bash
# 添加主机名
echo webmis > /etc/hostname

# 键盘映射和字体
echo KEYMAP=us > /etc/vconsole.conf

# 时区
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# 硬件时钟同步
hwclock --systohc --utc

# 字符编码
echo LANG=en_US.UTF-8 > /etc/locale.conf
vim /etc/locale.gen
	en_US.UTF8 UTF-8
	zh_CN.UTF8 UTF-8
# 更新编码
locale-gen
```
<br/>

## 启动器
#### 1) EFI模式
``` bash
# 安装Grub2
pacman -S grub efibootmgr
# 安装到EFI分区
grub-install --target=x86_64-efi --recheck --efi-directory=/boot/efi --boot-directory=/boot
# Warning: os-prober will not
echo GRUB_DISABLE_OS_PROBER=false >> /etc/default/grub
# 生成引导文件
grub-mkconfig -o /boot/grub/grub.cfg
```
- 引导: BIOS调整引导模式(HP无引导: 开机F9 > 从EFI文启动 > 硬盘 > 上一步 > arch > ...)
- 分区: 硬盘分区为gpt模式，多个主分区

#### 2) Legacy模式( 不推荐 )
``` bash
# 安装Grub2
pacman -S grub os-prober
# 安装到sda
grub-install --target=i386-pc /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
```
- 引导: 早期电脑BIOS引导模式，只能1个主引导(双系统重装后会覆盖其他系统引导，导致无法正常启动)
- 分区: 硬盘分区为mbr模式，2主分区、1扩张分区、多个逻辑分区

<br/>

## 完成
```bash
# 设置root密码
passwd root
# 退出系统
exit
# 取消挂载
umount /mnt/boot/efi
umount /mnt/{home,}
# 重启系统
reboot
```
