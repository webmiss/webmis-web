import{d as o,c as a,a as n,o as s}from"./index-DZw22l5y.js";const r={class:"markdown-body"},l={},p="",g=o({__name:"select",setup(d,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(c,e)=>(s(),a("div",r,e[0]||(e[0]=[n(`<h3>查询</h3><pre><code class="language-java">@RequestMapping(&quot;&quot;)
String index() {
  ArrayList&lt;HashMap&lt;String,Object&gt;&gt; data = null;
  // 查询
  Demo model = new Demo();
  model.Columns(&quot;uid&quot;, &quot;title&quot;);
  model.Where(&quot;title LIKE ?&quot;, &quot;%查询%&quot;);
  data = model.Find();
  // 返回数据
  HashMap&lt;String,Object&gt; res = new HashMap&lt;String,Object&gt;();
  res.put(&quot;code&quot;,0);
  res.put(&quot;msg&quot;,&quot;Web&quot;);
  res.put(&quot;data&quot;,data);
  return GetJSON(res);
}
</code></pre><h3>多条</h3><pre><code class="language-java">demo.Find();
</code></pre><h3>单条</h3><pre><code class="language-java">demo.FindFirst();
</code></pre><h3>返回类型</h3><pre><code class="language-java">demo.ResType();
</code></pre><h3>生成SQL</h3><pre><code class="language-java">// sql、args
Object[] sql = demo.SelectSQL();
</code></pre>`,10)])))}});export{g as default,p as excerpt,l as frontmatter};
