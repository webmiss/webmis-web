import{d as a,c as s,a as t,o}from"./index-BNT8ip_b.js";const i={class:"markdown-body"},r={},m="",d=a({__name:"gnome",setup(c,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(l,e)=>(o(),s("div",i,e[0]||(e[0]=[t(`<h1>GNOME3桌面</h1><h2>显卡驱动</h2><pre><code class="language-bash"># Intel
pacman -S mesa xf86-video-intel vulkan-intel
pacman -S libva-intel-driver libvdpau-va-gl intel-compute-runtime
pacman -S lib32-vulkan-intel lib32-mesa intel-gpu-tools
# Nvidia
pacman -S nvidia nvidia-prime nvidia-settings nvidia-utils opencl-nvidia
pacman -S lib32-nvidia-utils lib32-opencl-nvidia libva-vdpau-driver
# AMD
pacman -S mesa xf86-video-amdgpu vulkan-radeon libva-mesa-driver mesa-vdpau
pacman -S opencl-mesa lib32-vulkan-radeon lib32-mesa
</code></pre><ul><li>驱动安装完了，但是不知道如何使用。建议先sudo mkinitcpio -P再重启后，才会启动驱动。</li></ul><h2>安装</h2><pre><code class="language-bash"># 桌面环境
pacman -S gnome
# 登陆管理器
systemctl enable gdm
</code></pre><ul><li>如果是VBox虚拟机需安装“virtualbox-guest-utils”</li></ul><br><h4>1) 创建桌面用户</h4><pre><code class="language-bash">useradd -m webmis
passwd webmis
</code></pre><h4>2) 安装字体</h4><pre><code class="language-bash">pacman -S wqy-zenhei wqy-microhei
</code></pre><h4>3) 配置网络管理</h4><pre><code class="language-bash">pacman -S networkmanager
# NetworkManager添加vpn拨号
pacman -S networkmanager-pptp

# 开机启动
systemctl disable dhcpcd
systemctl enable NetworkManager
</code></pre><h4>4) 蓝牙</h4><pre><code class="language-bash">pacman -S bluez bluez-utils
# 开机启动
systemctl enable bluetooth
systemctl start bluetooth
</code></pre><h4>5) 重启系统</h4><pre><code class="language-bash">reboot
</code></pre><br><h2>键盘快捷键</h2><ul><li>系统配置-&gt;键盘-&gt;自定义快捷键-&gt;添加</li><li>终端( gnome-terminal )</li></ul><br><h2>输入法</h2><pre><code class="language-bash">pacman -S ibus ibus-libpinyin
</code></pre><ul><li>注:然后到“系统设置-&gt;键盘-&gt;输入源”,添加 中文(智能拼音) 后注销并重新登录!</li></ul><br><h2>软件仓库</h2><p><strong>vi /etc/pacman.conf</strong></p><pre><code class="language-bash">	[archlinuxcn]
	SigLevel = Optional TrustAll
	Server = https://mirrors.aliyun.com/archlinuxcn/$arch
</code></pre><p><strong>安装</strong></p><pre><code class="language-bash"># 密钥
pacman -S archlinux-keyring archlinuxcn-keyring
# 包管理器
pacman -Syu yay
# 编译环境
pacman -S linux-headers dkms fakeroot
</code></pre><h2>美化桌面</h2><pre><code class="language-bash"># 优化工具
pacman -S gnome-tweaks
</code></pre><ul><li>字体: 将微软雅黑字体拷贝到 /usr/share/fonts/WindowsFonts</li><li>界面: 优化工具 &gt; 字体 &gt; “Microsoft YaHei UI Regular”</li><li>扩展: Firefox浏览器 &gt; <a href="https://extensions.gnome.org">https://extensions.gnome.org</a></li><li>插件: pacman -S chrome-gnome-shell</li><li>开启: User Themes &gt; <a href="https://extensions.gnome.org/extension/19/user-themes">https://extensions.gnome.org/extension/19/user-themes</a></li><li>下载: <a href="https://github.com/webmiss/gnome-shell">Shell主题</a> 放入主目录</li><li>主题: 优化工具 &gt; 外观 &gt; shell &gt; “WebMIS”</li></ul><br><h2>常用软件</h2><h4>1) 浏览器</h4><pre><code class="language-bash"># Firefox
pacman -S firefox firefox-i18n-zh-cn
# Chrome 开源版
pacman -S chromium
# 视频解码
pacman -S gst-libav
</code></pre><h4>3) 扩展VI和文本编辑器</h4><pre><code class="language-bash">pacman -S vim gedit
</code></pre><h4>4) WEB开发工具</h4><pre><code class="language-bash"># Sublime
yay -S sublime-text-dev
# vsCode
yay -S visual-studio-code-bin
</code></pre><ul><li>扩展: Code Runner, Vetur, vscode-json</li></ul><h4>5) VirtualBox虚拟机</h4><pre><code class="language-bash"># 安装
pacman -S virtualbox virtualbox-guest-utils virtualbox-host-dkms virtualbox-guest-iso
systemctl enable --now vboxservice
# 升级内核无法启动虚拟机
modprobe -a vboxnetadp vboxnetflt vboxdrv
</code></pre><h4>6) FFMPEG</h4><pre><code class="language-bash"># 安装
pacman -S ffmpeg
# TS合成Mp4
ffmpeg -i &quot;concat:0.ts|1.ts&quot; -c copy test.mp4
ffmpeg -i https://dh5.cntv.kcdnvip.com/asp/h5e/hls/2000/0303000a/3/default/49354b5f20674f5fa80d6ccefa076182/2000.m3u8 -vcodec copy -acodec copy test.mp4
# 合并Mp4
ffmpeg -i 0.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts 0.ts
ffmpeg -i 1.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts 1.ts
ffmpeg -i &quot;concat:0.ts|1.ts&quot; -c copy -bsf:a aac_adtstoasc test.mp4
# 转成MP4
ffmpeg -i xxx -y -c:v libx264 -c:a aac -strict -2 test.mp4
# 缩放: 320×240、640×360、hd480、hd720、hd1080
ffmpeg -i test.mp4 -s hd480 480.mp4
# Mp4转HLS：优化方案
ffmpeg -y -i 480.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb 480.ts
ffmpeg -i 480.ts -c copy -map 0 -f segment -segment_time 10 -segment_list vod/index.m3u8 vod/10s_%3d.ts
# Mp4转HLS：简单低效
ffmpeg -i test.mp4 -c:v libx264 -c:a aac -strict -2 -f hls -bsf:v h264_mp4toannexb -hls_time 10 vod/index.m3u8
</code></pre><h4>7) 其它工具</h4><pre><code class="language-bash"># 多线程下载工具
pacman -S axel
# 下载视频
pip install you-get

# SSH工具箱 (包括 ssh, scp)
pacman -S openssh

# 域名检测
yay -S dnslookup

# 远程桌面工具
pacman -S freerdp remmina
pacman -S vinagre
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
</code></pre><p><br><br></p>`,50)])))}});export{d as default,m as excerpt,r as frontmatter};
