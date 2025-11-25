import{d as n,c as r,a as t,o}from"./index-B-lAKudI.js";const s={class:"markdown-body"},i={},l="",g=n({__name:"safety",setup(c,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(p,e)=>(o(),r("div",s,e[0]||(e[0]=[t(`<h2>引入</h2><pre><code class="language-go">import &quot;webmis/library&quot;
</code></pre><h2>正则-公共</h2><pre><code class="language-go">(&amp;library.Safety{}).IsRight(
  name string,  //uname,passwd,tel,email,idcard
  val string    //内容
)
</code></pre><h2>正则-验证</h2><pre><code class="language-go">(&amp;library.Safety{}).Test(
  reg string,   //正则: &quot;^1\\d{10}$&quot;
  val string    //内容
)
</code></pre><h2>Base64-加密</h2><pre><code class="language-go">(&amp;library.Safety{}).Encode(
  param map[string]interface{}  //数据
)
</code></pre><h2>Base64-解密</h2><pre><code class="language-go">(&amp;library.Safety{}).Decode(
  token string  //Token
)
</code></pre>`,10)])))}});export{g as default,l as excerpt,i as frontmatter};
