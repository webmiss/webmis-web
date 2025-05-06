import{d as a,c as n,a as t,o as s}from"./index-CBd8jn0T.js";const c={class:"markdown-body"},l={},m="",g=a({__name:"model",setup(r,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(d,e)=>(s(),n("div",c,e[0]||(e[0]=[t(`<h3>创建模型</h3><p><strong>model/Demo.java</strong></p><pre><code class="language-java">package webmis.model;

public class Demo extends Model {

  /* 构造函数 */
  public Demo() {
    this.Table(&quot;test&quot;);
  }
  
}
</code></pre><h3>使用</h3><pre><code class="language-java">import webmis.model.Demo;
// 对象
Demo model = new Demo();
</code></pre><h3>连接</h3><pre><code class="language-java">model.DBConn()
</code></pre><h3>生成SQL</h3><pre><code class="language-java">PreparedStatement ps = model.Bind(Connection conn, Object sql, Object args)
</code></pre><h3>查询</h3><pre><code class="language-java">model.Query(PreparedStatement ps)
</code></pre><h3>执行</h3><pre><code class="language-java">model.Exec(PreparedStatement ps)
</code></pre>`,13)])))}});export{g as default,m as excerpt,l as frontmatter};
