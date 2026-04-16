import{d as n,c as a,H as o,o as r}from"./vendor-oTex03eR.js";const s={class:"markdown-body"},l={},c="",d=n({__name:"db",setup(u,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(m,e)=>(r(),a("div",s,e[0]||(e[0]=[o(`<h1>数据库</h1><h3>创建模型</h3><pre><code class="language-java">package vip.webmis.mvc.models;

import vip.webmis.mvc.core.Model;

/* 用户表 */
public class User extends Model {

  /* 构造函数 */
  public User() {
    this.DBConn(&quot;default&quot;);
    this.Table(&quot;user&quot;);
  }

}
</code></pre><h3>查询</h3><pre><code class="language-java">User m = new User();
m.Columns(&quot;id&quot;, &quot;uname&quot;);
m.Where(&quot;uname LIKE ?&quot;, &quot;%WebMIS%&quot;);
List&lt;HashMap&lt;String, Object&gt;&gt; data = m.Find();  // 多条
HashMap&lt;String, Object&gt; data = m.FindFirst();   // 单条
</code></pre><h3>查询-链表</h3><pre><code class="language-java">User m = new User();
m.Table(&quot;user as a&quot;)
m.Join(&quot;user_info as b&quot;, &quot;a.id=b.uid&quot;)
m.Columns(&quot;a.id, b.name&quot;)
List&lt;HashMap&lt;String, Object&gt;&gt; data = m.Find();
</code></pre><h3>插入</h3><pre><code class="language-java">// 单条数据
Map&lt;String, Object&gt; param1 = new HashMap&lt;&gt;();
param1.put(&quot;uname&quot;, &quot;WebMIS&quot;);

// 多条数据
Map&lt;String, Object&gt; tmp;
List&lt;Map&lt;String, Object&gt;&gt; param2 = new ArrayList&lt;&gt;();
param2.add(Map.of(&quot;uname&quot;, &quot;WebMIS1&quot;));
param2.add(Map.of(&quot;uname&quot;, &quot;WebMIS2&quot;));

// 模型
User m = new User();
m.Values(param1);         // 单条
m.ValuesAll(param2);      // 多条
int id = m.Insert();      // 自增ID
</code></pre><h3>更新</h3><pre><code class="language-java">Map&lt;String, Object&gt; param = new HashMap&lt;&gt;();
param.put(&quot;uname&quot;, &quot;WebMIS&quot;);
User m = new User();
m.Set(param);
m.Where(&quot;id=?&quot;, 1);
m.Update();
</code></pre><h3>删除</h3><pre><code class="language-java">User m = new User();
m.Where(&quot;id=?&quot;, 2);
m.Delete();
</code></pre><h3>其它</h3><pre><code class="language-java">m.DBConn(&quot;default&quot;);                 // 数据库连接
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
m.Partition(&quot;plast&quot;);                // 分区
m.Group();                           // 分组
m.Having();                          // 筛选
m.Order();                           // 排序
m.Limit();                           // 限制
m.Page();                            // 分页
// 获取SQL语句和参数: res[0], res[1]
Object[] res = m.SelectSQL();        // 查询
Object[] res = m.InsertSQL();        // 插入
Object[] res = m.UpdateSQL();        // 更新
Object[] res = m.DeleteSQL();        // 删除
</code></pre><br>`,16)])))}});export{d as default,c as excerpt,l as frontmatter};
