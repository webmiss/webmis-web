import{d as a,c as e,a as i,o as u}from"./index-YZy2HEBW.js";const l={class:"markdown-body"},s={},q="",d=a({__name:"macos",setup(n,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(r,t)=>(u(),e("div",l,t[0]||(t[0]=[i(`<h1>VirtualBox-安装MacOS</h1><h4>&gt; <a href="https://sysin.org/article/Download-VMware-macOS-Catalina-iso/">下载ISO文件</a></h4><br><h3>一、创建虚拟机</h3><h4>新建</h4><ul><li>名称: Catalina</li><li>类型: Mac OS X</li><li>版本: Mac OS X（64位）</li></ul><h4>内存</h4><ul><li>大小: 4096</li></ul><h4>硬盘</h4><ul><li>现在创建硬盘</li></ul><h4>文件类型</h4><ul><li>VDI</li></ul><h4>存储方式</h4><ul><li>固定大小</li></ul><h4>大小( 安装XCode、自动更新 )</h4><ul><li>80.00 GB</li></ul><br><h2>二、配置虚拟机</h2><h4>系统</h4><ul><li>主板: 去除“软驱”</li><li>处理器: 2</li></ul><h4>显示</h4><ul><li>显存大小: 128 MB</li></ul><h4>存储</h4><ul><li>选择Catalina.iso，然后“确定”</li></ul><h2>三、模拟环境</h2><pre><code class="language-bash"># CPU
VBoxManage modifyvm MacOS --cpu-profile &quot;Intel Core i7-6700K&quot;
# MacBookPro
VBoxManage modifyvm &quot;MacOS&quot; --cpuidset 00000001 000306a9 04100800 7fbae3ff bfebfbff
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/efi/0/Config/DmiSystemProduct&quot; &quot;MacBookPro11,3&quot;
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/efi/0/Config/DmiSystemVersion&quot; &quot;1.0&quot;
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/efi/0/Config/DmiBoardProduct&quot; &quot;Mac-2BD1B31983FE1663&quot;
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/smc/0/Config/DeviceKey&quot; &quot;ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc&quot;
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC&quot; 1
# iMac
VBoxManage modifyvm &quot;MacOS&quot; --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff 
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/efi/0/Config/DmiSystemProduct&quot; &quot;iMac11,3&quot; 
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/efi/0/Config/DmiSystemVersion&quot; &quot;1.0&quot; 
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/efi/0/Config/DmiBoardProduct&quot; &quot;Iloveapple&quot; 
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/smc/0/Config/DeviceKey&quot; &quot;ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc&quot; 
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC&quot; 1
</code></pre><ul><li>windows用户cd到VBox安装目录或配置系统环境变量</li></ul><br><h2>四、安装系统</h2><ul><li>语言: 简体中文</li><li>磁盘工具: “VBOX HARDDISK Media” &gt; APFS(必须文件格式) &gt; 抹掉 &gt; 关闭</li><li>重新安装macOS &gt; 继续 &gt; 同意条款</li><li>选择硬盘 &gt; 安装 &gt; 配置</li><li>设置 &gt; 硬盘 &gt; Catalina.iso &gt; 从虚拟驱动器中删除磁盘</li><li>如果正常重启后看到登录界面</li></ul><br><h2>五、设置分辨率( 尝试失败! )</h2><pre><code class="language-bash"># 查看
VBoxManage getextradata &quot;MacOS&quot; VBoxInternal2/EfiGraphicsResolution
# 设置
VBoxManage setextradata &quot;MacOS&quot; &quot;VBoxInternal2/EfiGopMode&quot; 4
VBoxManage setextradata &quot;MacOS&quot; VBoxInternal2/EfiGraphicsResolution 1920*1080
VBoxManage setextradata &quot;MacOS&quot; VBoxInternal2/EfiGraphicsResolution HxV
</code></pre><ul><li>1 800×600</li><li>2 1024×768</li><li>3 1280×1024</li><li>4 1440×900</li><li>5 1920×1200</li></ul><p><br><br></p>`,35)])))}});export{d as default,q as excerpt,s as frontmatter};
