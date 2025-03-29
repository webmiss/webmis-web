import{d as o,c as t,a as s,o as a}from"./index-Dldsk6pd.js";const r={class:"markdown-body"},l={},m="",g=o({__name:"model",setup(c,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(p,e)=>(a(),t("div",r,e[0]||(e[0]=[s(`<h3>创建模型</h3><p><strong>model/Demo.php</strong></p><pre><code class="language-php">&lt;?php
namespace Model;

class Demo extends Model {

  /* 构造函数 */
  function __construct(){
    $this-&gt;Table(&#39;test&#39;);
  }

}
</code></pre><h3>使用</h3><pre><code class="language-php">use Model\\Demo;
// 对象
$model = new Demo();
</code></pre><h3>查询</h3><pre><code class="language-php">$model-&gt;Query($conn, string $sql, array $args=[]);
</code></pre><h3>执行</h3><pre><code class="language-php">$model-&gt;Exec($conn, string $sql, array $args=[]);
</code></pre>`,9)])))}});export{g as default,m as excerpt,l as frontmatter};
