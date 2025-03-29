import{d as n,c as t,a as o,o as r}from"./index-DZw22l5y.js";const s={class:"markdown-body"},l={},h="",y=n({__name:"safety",setup(c,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(p,e)=>(r(),t("div",s,e[0]||(e[0]=[o(`<h2>引入</h2><pre><code class="language-python">from library.safety import Safety
</code></pre><h2>正则-公共</h2><pre><code class="language-python">Safety.isRight(
  name: str,  #uname,passwd,tel,email,idcard
  val: any    #内容
)
</code></pre><h2>正则-验证</h2><pre><code class="language-python">Safety.test(
  reg=r&#39;^1\\d{10}$&#39;,  #正则
  val: any           #内容
)
</code></pre><h2>Base64-加密</h2><pre><code class="language-python">Safety.encode(
  param: dict={}   #数据
)
</code></pre><h2>Base64-解密</h2><pre><code class="language-python">Safety.decode(
  token: str=&#39;&#39;   #Token
)
</code></pre>`,10)])))}});export{y as default,h as excerpt,l as frontmatter};
