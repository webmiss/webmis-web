import{d as n,c as o,a,o as s}from"./index-BtLdrSTu.js";const d={class:"markdown-body"},p={},g="",i=n({__name:"select",setup(r,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(c,e)=>(s(),o("div",d,e[0]||(e[0]=[a(`<h3>查询</h3><pre><code class="language-php">static function Index() {
  // 查询
  $model = new Demo();
  $model-&gt;Columns(&#39;uid&#39;,&#39;title&#39;);
  $model-&gt;Where(&#39;title LIKE ?&#39;,&#39;%查询%&#39;);
  $data = $model-&gt;Find();
  // 返回
  return self::getJSON([&#39;code&#39;=&gt;0, &#39;msg&#39;=&gt;&#39;Web&#39;, &#39;data&#39;=&gt;$data]);
}
</code></pre><h3>查询结果</h3><pre><code class="language-php">// 多条
$model-&gt;Find();
// 单条
$model-&gt;FindFirst();
</code></pre><h3>返回类型</h3><pre><code class="language-php">// string、int、float
$model-&gt;ResType([&#39;id&#39;=&gt;&#39;string&#39;]);
</code></pre><h3>生成SQL</h3><pre><code class="language-php">list($sql, $args) = $model-&gt;SelectSQL();
</code></pre>`,8)])))}});export{i as default,g as excerpt,p as frontmatter};
