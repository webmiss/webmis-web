import{d as n,c as t,a as r,o as s}from"./index-C8nBvhCm.js";const a={class:"markdown-body"},m={},p="",g=n({__name:"model",setup(c,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(d,e)=>(s(),t("div",a,e[0]||(e[0]=[r(`<h3>创建模型</h3><p><strong>model/demo.go</strong></p><pre><code class="language-go">package model

type Demo struct {
	Model
}

/* 构造函数 */
func (m *Demo) New() *Demo {
	m.Table(&quot;test&quot;)
	return m
}
</code></pre><h3>使用</h3><pre><code class="language-go">import &quot;webmis/model&quot;
// 对象
model := (&amp;models.Demo{}).New()
</code></pre><h3>连接</h3><pre><code class="language-go">model.DBConn()
</code></pre><h3>查询</h3><pre><code class="language-go">model.Query(conn *sql.DB, sql string, args []interface{})
</code></pre><h3>执行</h3><pre><code class="language-go">model.Exec(conn *sql.DB, sql string, args []interface{})
</code></pre>`,11)])))}});export{g as default,p as excerpt,m as frontmatter};
