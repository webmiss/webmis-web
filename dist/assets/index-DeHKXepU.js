import{d as s,c as i,a as n,o as p}from"./index-B-lAKudI.js";const a={class:"markdown-body"},l={},b="",c=s({__name:"index",setup(o,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,e)=>(p(),i("div",a,e[0]||(e[0]=[n(`<h1>WebMIS-前端基础框架</h1><p>采用 Vite + Vue3 + TypeScript 开发，包括Web(网站)、VueApp(H5+混合型APP)、Api(接口调试工具)、Admin(后台管理)，运用模块化开发思路，封装基础UI组件</p><ul><li>Web(文档)：<a href="https://webmis.vip">https://webmis.vip</a></li><li>App(H5+混合型APP)：<a href="https://app.webmis.vip">https://app.webmis.vip</a></li><li>Admin(后台管理)：<a href="https://admin.webmis.vip">https://admin.webmis.vip</a></li></ul><br><h2>一、下载</h2><pre><code class="language-bash"># 克隆仓库
git clone https://github.com/webmiss/webmis-web.git web
git clone https://github.com/webmiss/webmis-app.git app
git clone https://github.com/webmiss/webmis-admin.git admin

# node模块提示版本不兼容问题
yarn config set ignore-engines true
</code></pre><ul><li>项目: WebMIS-Base &gt; web, app, admin</li></ul><br><h2>二、运行</h2><pre><code class="language-bash"># 依赖包
yarn install
# 运行
yarn dev
# 打包
yarn build
# SSL证书
openssl req -x509 -newkey rsa:2048 -nodes -keyout ssl/key.pem -out ssl/cert.pem -days 365 -subj &quot;/CN=localhost&quot;
</code></pre><p><br><br></p>`,11)])))}});export{c as default,b as excerpt,l as frontmatter};
