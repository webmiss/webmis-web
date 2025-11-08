# GNOME3桌面

## 连接网络
``` bash
systemctl start dhcpcd
```

## 显卡驱动
``` bash
# 查看显卡
lspci | grep VGA
# Intel
pacman -S mesa xf86-video-intel
# AMD/ATI
pacman -S mesa xf86-video-amdgpu
# ‌nVidia
pacman -S nvidia xf86-video-vesa
# nVidia‌ (GeForce 6/7/8)
pacman -S xf86-video-nouveau
# nVidia‌ (GeForce 9)
pacman -S nvidia nvidia-utils
```
- 驱动安装完了，但是不知道如何使用。建议先sudo mkinitcpio -P再重启后，才会启动驱动。

## 安装
``` bash
# 桌面环境
pacman -S gnome
# 登陆管理器
systemctl enable gdm
```
- 如果是VBox虚拟机需安装“virtualbox-guest-utils”

<br/>

#### 1) 创建桌面用户
``` bash
useradd -m webmis
passwd webmis
```

#### 2) 安装字体
``` bash
pacman -S wqy-zenhei wqy-microhei
```

#### 3) 配置网络管理
``` bash
pacman -S networkmanager
# NetworkManager添加vpn拨号
pacman -S networkmanager-pptp

# 开机启动
systemctl disable dhcpcd
systemctl enable NetworkManager
```

#### 4) 蓝牙
``` bash
pacman -S bluez bluez-utils
# 开机启动
systemctl enable bluetooth
systemctl start bluetooth
```

#### 5) 重启系统
``` bash
reboot
```

<br/>

## 键盘快捷键
- 系统配置->键盘->自定义快捷键->添加
- 终端( gnome-terminal )

<br/>

## 输入法
``` bash
pacman -S ibus ibus-libpinyin
```
- 注:注销后“系统设置->键盘->输入源”,添加 中文(智能拼音)

<br/>

## 软件仓库
**vim /etc/pacman.conf**
```bash
	[archlinuxcn]
	SigLevel = Optional TrustAll
	Server = https://mirrors.aliyun.com/archlinuxcn/$arch
```
**安装**
```bash
# 密钥
pacman -Sy archlinux-keyring archlinuxcn-keyring
# 包管理器
pacman -Syu yay
# 编译环境
pacman -S linux-headers dkms fakeroot
# 添加用户权限
pacman -S sudo
vim /etc/sudoers
```
- root ALL=(ALL:ALL) ALL
- webmis ALL=(ALL:ALL) ALL

## 美化桌面
``` bash
# 优化工具
pacman -S gnome-tweaks
pacman -S gnome-shell-extensions
```
- 扩展 > User Themes > 开启
- 下载: [Shell主题](https://github.com/webmiss/gnome-shell) 放入主目录
- 主题: 优化工具 > 外观 > shell > "WebMIS"
- 字体: 将微软雅黑字体拷贝到 /usr/share/fonts/WindowsFonts
- 界面: 优化工具 > 字体 > "Microsoft YaHei UI Regular"
- 开启: User Themes > https://extensions.gnome.org/extension/19/user-themes


<br/>

## 常用软件
#### 1) 浏览器
``` bash
# Firefox
pacman -S firefox firefox-i18n-zh-cn
# Chrome 开源版
pacman -S chromium
# 视频解码
pacman -S gst-libav
```

#### 2) 声音
**ls /lib/firmware/intel/sof**
``` bash
pacman -S sof-firmware
```

#### 3) WEB开发工具
``` bash
# Sublime
yay -S sublime-text-dev
# vsCode
yay -S visual-studio-code-bin
```
- 扩展: Code Runner, Vetur, vscode-json

#### 4) VirtualBox虚拟机
``` bash
# 安装
pacman -S virtualbox virtualbox-guest-utils virtualbox-host-dkms virtualbox-guest-iso
systemctl enable --now vboxservice
# 升级内核无法启动虚拟机
modprobe -a vboxnetadp vboxnetflt vboxdrv
```

#### 5) FFMPEG
``` bash
# 安装
pacman -S ffmpeg
# TS合成Mp4
ffmpeg -i "concat:0.ts|1.ts" -c copy test.mp4
ffmpeg -i https://dh5.cntv.kcdnvip.com/asp/h5e/hls/2000/0303000a/3/default/49354b5f20674f5fa80d6ccefa076182/2000.m3u8 -vcodec copy -acodec copy test.mp4
# 合并Mp4
ffmpeg -i 0.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts 0.ts
ffmpeg -i 1.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts 1.ts
ffmpeg -i "concat:0.ts|1.ts" -c copy -bsf:a aac_adtstoasc test.mp4
# 转成MP4
ffmpeg -i xxx -y -c:v libx264 -c:a aac -strict -2 test.mp4
# 缩放: 320×240、640×360、hd480、hd720、hd1080
ffmpeg -i test.mp4 -s hd480 480.mp4
# Mp4转HLS：优化方案
ffmpeg -y -i 480.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb 480.ts
ffmpeg -i 480.ts -c copy -map 0 -f segment -segment_time 10 -segment_list vod/index.m3u8 vod/10s_%3d.ts
# Mp4转HLS：简单低效
ffmpeg -i test.mp4 -c:v libx264 -c:a aac -strict -2 -f hls -bsf:v h264_mp4toannexb -hls_time 10 vod/index.m3u8
```

#### 6) 其它工具
``` bash
# 远程桌面工具
pacman -S remmina
pacman -S vinagre
# 多线程下载工具
pacman -S axel
# 图片处理
pacman -S gimp
# 3D建模
pacman -S blender

# SSH工具箱 (包括 ssh, scp)
pacman -S openssh

# 域名检测
yay -S dnslookup

# 禁用Vino加密
gsettings set org.gnome.Vino require-encryption false

# 解压软件
pacman -S p7zip file-roller unrar

# 文件系统
pacman -S ntfs-3g dosfstools

# 无线AP
pacman -S dnsmasq linux-wifi-hotspot
# 查看无线网卡
ifconfig
# 是否支持AP
iw list
# 启动
create_ap wlo1 wlo1 webmisAP 12345678

# 网络测速
pacman -S speedtest-cli
speedtest
# 路由响应
tracepath baidu.com
```

<br/><br/>