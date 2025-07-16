import{d as n,c as t,a as r,o as s}from"./index-BNT8ip_b.js";const o={class:"markdown-body"},l={},i="",g=n({__name:"safety",setup(p,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(c,e)=>(s(),t("div",o,e[0]||(e[0]=[r(`<h2>引入</h2><pre><code class="language-php">use Library\\Safety;
</code></pre><h2>正则-公共</h2><pre><code class="language-php">Safety::isRight(
  string $name=&#39;&#39;,  //uname,passwd,tel,email,idcard
  string $val=&#39;&#39;    //内容
);
</code></pre><h2>正则-验证</h2><pre><code class="language-php">Safety::test(
  string $reg=&#39;^1\\d{10}$&#39;,  //正则
  mixed $val=&#39;&#39;             //内容
);
</code></pre><h2>Base64-加密</h2><pre><code class="language-php">Safety::encode(
  array $param=[]  //数据
);
</code></pre><h2>Base64-解密</h2><pre><code class="language-php">Safety::decode(
  string $token=&#39;&#39; //Token
);
</code></pre>`,10)])))}});export{g as default,i as excerpt,l as frontmatter};
