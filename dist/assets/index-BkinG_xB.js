import{d as t,c as p,a as n,o as a}from"./index-B-lAKudI.js";const i={class:"markdown-body"},c={},r="",m=t({__name:"index",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(l,e)=>(a(),p("div",i,e[0]||(e[0]=[n(`<h1>WebMIS-Phalcon</h1><p>采用PHP7+Laveral、Phalcon5开发，包括HMVC模块化管理、自动路由、CLI命令行、Socket通信、redis缓存、Token机制等功能，提供支付宝、微信、文件上传、图像处理、二维码等常用类。</p><p><strong>PHP</strong></p><ul><li>网站-API( <a href="https://php.webmis.vip/">https://php.webmis.vip/</a> )</li><li>前端-API( <a href="https://php.webmis.vip/api/">https://php.webmis.vip/api/</a> )</li><li>后台-API( <a href="https://php.webmis.vip/admin/">https://php.webmis.vip/admin/</a> )</li></ul><br><h2>一、下载</h2><pre><code class="language-bash"># PHP8
git clone https://github.com/webmiss/webmis-php.git php
# Phalcon5
git clone https://github.com/webmiss/webmis-phalcon.git phalcon
# 数据库
git clone https://github.com/webmiss/webmis-tools.git tools
# 修改权限(linux)
chmod -R 777 php/public/upload
</code></pre><ul><li>数据库: tools/database/data.sql</li><li>修改密码: user表password字段，md5加密即可</li><li>管理员账号: admin 密码:123456</li></ul><br><h2>二、运行</h2><h4>Bash命令</h4><pre><code class="language-bash"># 依赖包
./bash install
# 运行
./bash serve
# 数据库工具
cd ../tools
./bash adminer
</code></pre><h4>Cmd命令</h4><pre><code class="language-bash"># 依赖包
.\\cmd install
# 运行
.\\cmd serve
# 数据库工具
cd ../tools
.\\cmd adminer
</code></pre><p><br><br></p>`,15)])))}});export{m as default,r as excerpt,c as frontmatter};
