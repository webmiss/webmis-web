import{d as t,c as s,a,o as n}from"./index-C8nBvhCm.js";const c={class:"markdown-body"},l={},g="",d=t({__name:"github",setup(r,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(i,e)=>(n(),s("div",c,e[0]||(e[0]=[a(`<h1>Github-SSH方式</h1><h2>用户名、邮箱</h2><pre><code class="language-bash">git config --global user.name &quot;webmis&quot;
git config --global user.email &quot;klingsoul@163.com&quot;
</code></pre><h2>RSA密钥</h2><pre><code class="language-bash">ssh-keygen -t rsa -C &quot;klingsoul@163.com&quot;
</code></pre><ul><li>将&quot;~/.ssh/id_rsa.pub&quot; 拷贝到 Github &gt; SSH and GPG keys</li></ul><h2>克隆项目</h2><pre><code class="language-bash">git clone git@github.com:webmiss/base.git ./base
</code></pre>`,8)])))}});export{d as default,g as excerpt,l as frontmatter};
