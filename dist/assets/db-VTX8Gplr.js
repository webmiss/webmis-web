import{d as o,c as t,H as a,o as u}from"./vendor-oTex03eR.js";const m={class:"markdown-body"},d={},l="",c=o({__name:"db",setup(r,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(s,e)=>(u(),t("div",m,e[0]||(e[0]=[a(`<h1>数据库</h1><h3>创建模型</h3><pre><code class="language-go">package models

import &quot;webmis/core&quot;

/* 用户模型 */
type User struct {
	core.Model
}

/* 构造函数 */
func (m *User) New() *User {
	m.DBConn(&quot;default&quot;)
	m.Table(&quot;user&quot;)
	return m
}
</code></pre><h3>查询</h3><pre><code class="language-go">m := (&amp;models.User{}).New()
m.Columns(&quot;id&quot;, &quot;uname&quot;)
m.Where(&quot;uname LIKE ?&quot;, &quot;%WebMIS%&quot;)
data := m.Find(&quot;&quot;)                     // 多条
data := m.FindFirst(&quot;&quot;)                // 单条
</code></pre><h3>查询-链表</h3><pre><code class="language-go">m := (&amp;models.User{}).New()
m.Table(&quot;user as a&quot;)
m.Join(&quot;user_info as b&quot;, &quot;a.id=b.uid&quot;)
m.Columns(&quot;a.id, b.name&quot;)
data := m.Find(&quot;&quot;);
</code></pre><h3>插入</h3><pre><code class="language-go">// 单条数据
param1 := map[string]interface{}{&quot;uname&quot;: &quot;WebMIS&quot;}
// 多条数据
param2 := []map[string]interface{}{{&quot;uname&quot;: &quot;WebMIS1&quot;}, {&quot;uname&quot;: &quot;WebMIS2&quot;}}
// 模型
m := (&amp;models.User{}).New()
m.Values(param1)                // 单条
m.ValuesAll(param2)             // 多条
id := m.Insert(data)            // 自增ID
</code></pre><h3>更新</h3><pre><code class="language-go">m := (&amp;models.User{}).New()
m.Set(map[string]interface{}{&quot;uname&quot;: &quot;WebMIS&quot;})
m.Where(&quot;id=?&quot;, 1)
m.Update()
</code></pre><h3>删除</h3><pre><code class="language-go">m := (&amp;models.User{}).New()
m.Where(&quot;id=?&quot;, 2)
m.Delete()
</code></pre><h3>其它</h3><pre><code class="language-go">m.DBConn(&quot;default&quot;);                 // 数据库连接
m.Exec(conn, sql, args);             // 执行SQL语句
// 获取数据
m.GetSql();                          // 获取已执行SQL语句
m.GetID();                           // 获取自增ID
m.GetNums();                         // 获取影响行数
// 关联条件
m.LeftJoin();                        // 左
m.RightJoin();                       // 右
m.FullJoin();                        // 全
// 查询条件
m.Partition(&quot;plast&quot;)                 // 分区
m.Group();                           // 分组
m.Having();                          // 筛选
m.Order();                           // 排序
m.Limit();                           // 限制
m.Page();                            // 分页
// 获取SQL语句和参数
sql, args := m.SelectSQL();          // 查询
sql, args := m.InsertSQL();          // 插入
sql, args := m.UpdateSQL();          // 更新
sql, args := m.DeleteSQL();          // 删除
</code></pre><br>`,16)])))}});export{c as default,l as excerpt,d as frontmatter};
