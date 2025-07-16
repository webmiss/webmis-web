import{d as t,c as n,a as o,o as r}from"./index-BNT8ip_b.js";const s={class:"markdown-body"},l={},i="",g=t({__name:"safety",setup(c,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(d,e)=>(r(),n("div",s,e[0]||(e[0]=[o(`<h2>引入</h2><pre><code class="language-java">import webmis.library.Safety;
</code></pre><h2>正则-公共</h2><pre><code class="language-java">Safety.isRight(
  String name,  //uname,passwd,tel,email,idcard
  String val    //内容
);
</code></pre><h2>正则-验证</h2><pre><code class="language-java">Safety.test(
  String reg,  //正则 &quot;^1\\d{10}$&quot;
  String val   //内容
);
</code></pre><h2>Base64-加密</h2><pre><code class="language-java">Safety.encode(
  HashMap&lt;String,Object&gt; data  //数据
);
</code></pre><h2>Base64-解密</h2><pre><code class="language-java">Safety.decode(
  String token  //Token
);
</code></pre>`,10)])))}});export{g as default,i as excerpt,l as frontmatter};
