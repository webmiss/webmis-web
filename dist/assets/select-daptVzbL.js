import{d as t,c as n,a,o as d}from"./index-AbO7opoS.js";const c={class:"markdown-body"},l={},p="",m=t({__name:"select",setup(s,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(r,e)=>(d(),n("div",c,e[0]||(e[0]=[a(`<h3>查询</h3><pre><code class="language-go">func Index(c *gin.Context) {
	// 查询
	model := (&amp;model.Demo{}).New()
	model.Columns(&quot;uid&quot;, &quot;title&quot;)
	model.Where(&quot;title LIKE ?&quot;, &quot;%查询%&quot;)
	data := model.Find()
	// 返回
	c.JSON(200, gin.H{&quot;code&quot;: 0, &quot;msg&quot;: &quot;Web&quot;, &quot;data&quot;: data})
}
</code></pre><h3>多条</h3><pre><code class="language-go">demo.Find()
</code></pre><h3>单条</h3><pre><code class="language-go">demo.FindFirst()
</code></pre><h3>返回类型</h3><pre><code class="language-go">demo.ResType()
</code></pre><h3>生成SQL</h3><pre><code class="language-go">sql,args := db.SelectSQL()
</code></pre>`,10)])))}});export{m as default,p as excerpt,l as frontmatter};
