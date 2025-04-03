import{d as o,c as a,a as r,o as t}from"./index-YZy2HEBW.js";const s={class:"markdown-body"},l={},h="",p=o({__name:"install",setup(c,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(d,e)=>(t(),a("div",s,e[0]||(e[0]=[r(`<h1>ArchLinux系统安装</h1><h2>EFI模式</h2><pre><code class="language-bash">1) 电脑启动模式设置成“UEFI Mode”
2) 禁用安全启动(Secure Boot)
</code></pre><h2>USB启动盘</h2><pre><code class="language-bash"># 制作U盘启动盘(win下直接拷贝ISO里的文件）
dd if=xxx.iso of=/dev/sdb bs=1M &amp;&amp; sync
# 恢复U盘容量
dd if=/dev/zero of=/dev/sdb bs=1M count=1
# 将ARCH_201603换成U盘分区的卷名(分区名)
vi loader\\entries\\archiso-x86_64.conf
</code></pre><ul><li>镜像文件: <a href="https://www.archlinux.org/download/">https://www.archlinux.org/download/</a></li><li>USB刻录: <a href="https://sourceforge.net/p/usbwriter/wiki/Documentation/">https://sourceforge.net/p/usbwriter/wiki/Documentation/</a></li></ul><br><h2>GPT分区</h2><pre><code class="language-bash">parted /dev/sda
# 建立GPT分区表(MBR msdos)
mklabel gpt
# 建立ESP分区
mkpart primary 2048s  512M
# 标志为boot
set 1 boot on
# 退出
q
</code></pre><br><h2>Linux分区</h2><h4>1) 工具(MBR : cfdisk、fdisk; GPT : fdisk)</h4><pre><code class="language-bash">fdisk -l
</code></pre><p>设备 起点 末尾 扇区 大小 类型<br> /dev/sda1 2048 1050623 1048576 100M EFI 系统<br> /dev/sda2 609230848 609640447 409600 200M Linux /boot<br> /dev/sda3 609640448 618029055 8388608 4G Linux swap<br> /dev/sda4 618029056 659972095 41943040 20G Linux /<br> /dev/sda5 659972096 976773134 316801039 151.1G Linux /home<br></p><h4>2) 格式化(注意根据自己的事实分区操作)</h4><pre><code class="language-bash"># 格式化
mkfs -t ext4 /dev/sda2
mkfs -t ext4 /dev/sda4
mkfs -t ext4 /dev/sda5

# 如果是自己创建的EFI分区
mkfs -t vfat /dev/sda1

# 交换分区
mkswap /dev/sda3
swapon /dev/sda3
</code></pre><br><h2>挂载(/、boot、home)</h2><pre><code class="language-bash"># 挂载
mount /dev/sda4 /mnt
mkdir /mnt/boot &amp;&amp; mount /dev/sda2 /mnt/boot
mkdir /mnt/home &amp;&amp; mount /dev/sda5 /mnt/home

# 如果是EFI(需要把EFI分区挂载到boot目录下)
mkdir /mnt/boot/efi &amp;&amp; mount /dev/sda1 /mnt/boot/efi
</code></pre><br><h2>连接网络</h2><pre><code class="language-bash"># 有线
dhcpcd

# Wifi
iwctl
device list
station wlan0 connect TP-LINK_45DF
exit
</code></pre><h2>安装系统</h2><h4>1) 编辑更新源</h4><pre><code class="language-bash">vi /etc/pacman.d/mirrorlist
</code></pre><p>Server = <a href="http://mirrors.aliyun.com/archlinux/$repo/os/$arch">http://mirrors.aliyun.com/archlinux/$repo/os/$arch</a></p><h4>2) 安装基础系统</h4><pre><code class="language-bash">pacstrap /mnt base base-devel linux linux-firmware
</code></pre><h4>3) 生成磁盘挂载列表</h4><pre><code class="language-bash">genfstab -U -p /mnt &gt;&gt; /mnt/etc/fstab
</code></pre><h4>4) 进入新系统</h4><pre><code class="language-bash">arch-chroot /mnt
</code></pre><br><h2>基础配置</h2><pre><code class="language-bash"># 添加主机名
echo webmis &gt; /etc/hostname

# 键盘映射和字体
echo KEYMAP=us &gt; /etc/vconsole.conf

# 时区
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# 硬件时钟同步
hwclock --systohc --utc

# 字符编码
echo LANG=en_US.UTF-8 &gt; /etc/locale.conf
vi /etc/locale.gen
	en_US.UTF8 UTF-8
	zh_CN.UTF8 UTF-8
# 更新编码
locale-gen
</code></pre><br><h2>启动器</h2><h4>1) EFI模式</h4><pre><code class="language-bash"># 安装Grub2
pacman -S grub efibootmgr
# 安装到EFI分区
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=ArchLinux_Grub --recheck
# Warning: os-prober will not
echo GRUB_DISABLE_OS_PROBER=false &gt;&gt; /etc/default/grub
# 生成引导文件
grub-mkconfig -o /boot/grub/grub.cfg
</code></pre><ul><li>引导: 现在BIOS引导模式，多个系统引导文件可共享1个分区下(双系统重装不会覆盖其他系统引导，可调整启动顺序)</li><li>分区: 硬盘分区为gpt模式，多个主分区</li></ul><h4>2) Legacy模式( 不推荐 )</h4><pre><code class="language-bash"># 安装Grub2
pacman -S grub os-prober
# 安装到sda
grub-install --target=i386-pc /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
</code></pre><ul><li>引导: 早期电脑BIOS引导模式，只能1个主引导(双系统重装后会覆盖其他系统引导，导致无法正常启动)</li><li>分区: 硬盘分区为mbr模式，2主分区、1扩张分区、多个逻辑分区</li></ul><br><h2>完成</h2><pre><code class="language-bash"># 设置root密码
passwd root
# 退出系统
exit
# 取消挂载
umount /mnt/boot/efi
umount /mnt/{boot,home,}
# 重启系统
reboot
</code></pre>`,46)])))}});export{p as default,h as excerpt,l as frontmatter};
