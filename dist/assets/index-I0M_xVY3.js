import{d as e,c as t,a as i,o}from"./index-BtLdrSTu.js";const n={class:"markdown-body"},b={},d="",c=e({__name:"index",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(l,a)=>(o(),t("div",n,a[0]||(a[0]=[i(`<h1>WebMIS-Java</h1><p>采用Java + SpringBoot开发，包括HMVC模块化管理、Token验证、Redis缓存等</p><ul><li>网站-API( <a href="https://java.webmis.vip/">https://java.webmis.vip/</a> )</li><li>前端-API( <a href="https://java.webmis.vip/api/">https://java.webmis.vip/api/</a> )</li><li>后台-API( <a href="https://java.webmis.vip/admin/">https://java.webmis.vip/admin/</a> )</li></ul><br><h2>一、下载</h2><pre><code class="language-bash"># 克隆项目
git clone https://github.com/webmiss/webmis-springboot.git springboot
git clone https://github.com/webmiss/webmis-tools.git tools
# 修改权限(linux)
chmod -R 777 springboot/public/upload springboot/tmp
</code></pre><ul><li>数据库: tools/database/data.sql</li><li>修改密码: user表password字段，md5加密即可</li><li>管理员账号: admin 密码:123456</li></ul><br><h2>二、运行</h2><h4>Bash命令</h4><pre><code class="language-bash"># 依赖包
./bash install
# 运行
./bash serve
# 打包
./bash build
</code></pre><h4>Cmd命令</h4><pre><code class="language-bash"># 依赖包
.\\cmd install
# 运行
.\\cmd serve
# 打包
.\\cmd build
</code></pre><p><br><br></p>`,14)])))}});export{c as default,d as excerpt,b as frontmatter};
