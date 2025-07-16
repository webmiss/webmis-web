import{d as r,c as t,a as i,o as n}from"./index-BNT8ip_b.js";const o={class:"markdown-body"},h={},c="",d=r({__name:"build",setup(s,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(l,e)=>(n(),t("div",o,e[0]||(e[0]=[i(`<h2>一、打包</h2><h4>Bash命令</h4><pre><code class="language-bash">./bash build
</code></pre><h4>Yarn命令</h4><pre><code class="language-bash">yarn build
# 升级依赖包
yarn upgrade-interactive --latest
</code></pre><h3>HBuilder 云打包</h3><ul><li><a href="https://www.dcloud.io/hbuilderx.html">HBuilder X</a></li><li>打包: 打开&quot;dist&quot;目录 &gt; 发布 &gt; 原生App-云打包</li><li>配置文件: public/manifest.json <br></li></ul><h2>二、本地预览</h2><h4>Bash命令</h4><pre><code class="language-bash">./bash http
</code></pre><h4>Yarn命令</h4><pre><code class="language-bash"># 安装
yarn global add http-server
# 运行
http-server ./dist
</code></pre><br><h2>三、发布</h2><pre><code class="language-bash">vi /home/vhosts/webmis.www.conf
</code></pre><h4>内容</h4><pre><code class="language-nginx">server {
    listen       80;
    server_name  webmis.vip www.webmis.vip;
    root /home/www/webmis/web/dist;
    index index.html;

    charset utf-8;

    location / {
        add_header Cache-Control &quot;no-cache, no-store&quot;;
        try_files $uri $uri/ /index.html;
    }

    location ~ /\\.ht {
        deny  all;
    }
}
</code></pre><h2>Android</h2><p><strong>证书</strong></p><pre><code class="language-bash"># 生成签名文件
keytool -genkey -v -keystore appName.keystore -alias appName.keystore -keyalg RSA -validity 20000
# 签名包
jarsigner -verbose -keystore appName.keystore -signedjar ./android-release.apk ./android-debug.apk appName.keystore
# 查看签名（SHA1）
keytool -v -list -keystore appName.keystore
</code></pre><h2>iOS</h2><ul><li><a href="https://developer.apple.com/">苹果开发者中心</a></li><li>无苹果电脑可参考 Linux &gt; <a href="/docs/linux/shell/macos">VirtualBox-MacOS</a></li></ul><h3>1) P12证书</h3><ul><li>钥匙串访问 &gt; 证书助理 &gt; 从证书颁发结构请求证书 &gt; 储存到本地</li><li>苹果开发者 &gt; 创建证书 &gt; iOS Distribution &gt; 上传刚生成到密钥 &gt; 下载证书 &gt; 导入到登录</li><li>钥匙串访问 &gt; 登录 &gt; 证书 &gt; 右键导出</li></ul><h3>2) 证书管理( Certificates, Identifiers &amp; Profiles )</h3><ul><li>Certificates // 创建证书 例如: iOS Development(开发版)、iOS Distribution(发行版)</li><li>Identifiers // 创建AppID 例如: com.xxx.项目名称</li><li>Devices // 调试设备UDID 例如: 79dd895e0e6733603914a81af4f6d94544a2acba</li><li>Profiles // 描述文件 例如: iOS App Development(开发版)、App Store(应用商店)</li></ul><h3>3) 上架资料</h3><ul><li><a href="https://appstoreconnect.apple.com/">AppStore</a></li></ul><h3>4) AppStore</h3><ul><li>打包提交： xcode &gt; Product &gt; Archive</li><li>软件方式: Transporter</li></ul><h3>5) Transporter问题</h3><p>Transporter 安装上第一次打开后，会在硬盘 ~/Library/Caches/com.apple.amp.itmstransporter 目录下下载一些缓存文件，这些缓存文件没有下载完，或者下载失败没下载完时，使用Transporter去提交应用这个页面就会卡住或者这个页面很慢。</p><pre><code class="language-bash"># 下载
/Applications/Transporter.app/Contents/itms/bin/iTMSTransporter
# 大小
du -sh ~/Library/Caches/com.apple.amp.itmstransporter
</code></pre><ul><li>如果失败删除com.apple.amp.itmstransporter目录，再重试</li></ul><p><br><br></p>`,35)])))}});export{d as default,c as excerpt,h as frontmatter};
