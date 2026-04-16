import{d as p,c as i,H as n,o as s}from"./vendor-oTex03eR.js";const a={class:"markdown-body"},r={},l="",m=p({__name:"index",setup(o,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(h,e)=>(s(),i("div",a,e[0]||(e[0]=[n(`<h1>webmis-php</h1><p>采用PHP8 + Redis + MariaDB开发的轻量级HMVC基础框架，目录结构清晰，支持CLI方式访问资料方便执行定时脚本。包括HMVC模块化管理、自动路由、CLI命令行、Socket通信、redis缓存、Token机制等功能，提供支付宝、微信、文件上传、图像处理、二维码等常用类。</p><p><strong>演示</strong></p><ul><li>使用文档( <a href="https://webmis.vip/php/install/index">https://webmis.vip/</a> )</li><li>网站-API( <a href="https://php.webmis.vip/">https://php.webmis.vip/</a> )</li><li>前端-API( <a href="https://php.webmis.vip/api">https://php.webmis.vip/api</a> )</li><li>后台-API( <a href="https://php.webmis.vip/admin">https://php.webmis.vip/admin</a> )</li></ul><h2>安装</h2><pre><code class="language-bash"># 下载
git clone https://github.com/webmiss/webmis-php.git
cd webmis-php

# Linux、MacOS
./bash install

# Windows 11 (自动环境安装和配置)
.\\cmd install
</code></pre><h2>开发环境</h2><pre><code class="language-bash"># Linux、MacOS
./bash serve
./bash socketServer

# Windows 11
.\\cmd serve
.\\cmd socketServer

# 测试Socket
php cli.php socket client admin &#39;{&quot;type&quot;:&quot;&quot;,&quot;msg&quot;:&quot;\\u6d4b\\u8bd5&quot;}&#39;

# 命令行: 控制器-&gt;方法(参数...)
php cli.php main index params
</code></pre><ul><li>浏览器访问 <a href="http://127.0.0.1:9000/">http://127.0.0.1:9000/</a></li><li>测试Socket ws://127.0.0.1:9001/?channel=admin&amp;token=Token</li></ul>`,9)])))}});export{m as default,l as excerpt,r as frontmatter};
