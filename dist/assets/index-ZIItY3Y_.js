import{d as t,c as a,a as i,o as n}from"./index-YZy2HEBW.js";const o={class:"markdown-body"},r={},c="",d=t({__name:"index",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(l,e)=>(n(),a("div",o,e[0]||(e[0]=[i(`<h1>WebMIS-Python</h1><p>采用Python3+Flask开发，包括HMVC模块化管理、Token验证、Redis缓存等</p><ul><li>网站-API( <a href="https://python.webmis.vip/">https://python.webmis.vip/</a> )</li><li>前端-API( <a href="https://python.webmis.vip/api/">https://python.webmis.vip/api/</a> )</li><li>后台-API( <a href="https://python.webmis.vip/admin/">https://python.webmis.vip/admin/</a> )</li></ul><br><h2>一、下载</h2><pre><code class="language-bash"># 克隆项目
git clone https://github.com/webmiss/webmis-flask.git flask
git clone https://github.com/webmiss/webmis-tools.git tools
# 修改权限(linux)
chmod -R 777 flask/public/upload
</code></pre><ul><li>数据库: tools/database/data.sql</li><li>修改密码: user表password字段，md5加密即可</li><li>管理员账号: admin 密码:123456</li></ul><br><h2>二、运行</h2><h4>Bash命令</h4><pre><code class="language-bash"># 依赖包
./bash install
# 运行
./bash serve
</code></pre><h4>Cmd命令</h4><pre><code class="language-bash"># 依赖包
.\\cmd install
# 运行
.\\cmd serve
</code></pre><p><br><br></p>`,14)])))}});export{d as default,c as excerpt,r as frontmatter};
