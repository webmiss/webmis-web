import{d as n,c as t,a,o as d}from"./index-YZy2HEBW.js";const s={class:"markdown-body"},p={},m="",h=n({__name:"select",setup(r,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(c,e)=>(d(),t("div",s,e[0]||(e[0]=[a(`<h3>查询</h3><pre><code class="language-python">  # 首页
  def index(self):
    # 查询
    model = Demo()
    model.Columns(&#39;uid&#39;,&#39;title&#39;)
    model.Where(&#39;title LIKE %s&#39;,&#39;%查询%&#39;)
    data = model.Find()
    # 返回
    return self.getJSON({&#39;code&#39;:0,&#39;msg&#39;:&#39;Web&#39;, &#39;data&#39;:data})
</code></pre><h3>多条</h3><pre><code class="language-python">model.Find()
</code></pre><h3>单条</h3><pre><code class="language-python">model.FindFirst()
</code></pre><h3>返回类型</h3><pre><code class="language-python">model.ResType()
</code></pre><h3>生成SQL</h3><pre><code class="language-python">sql, args = model.SelectSQL()
</code></pre>`,10)])))}});export{h as default,m as excerpt,p as frontmatter};
