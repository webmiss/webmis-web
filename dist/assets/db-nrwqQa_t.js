import{d as t,c as a,H as s,o as m}from"./vendor-oTex03eR.js";const g={class:"markdown-body"},p={},l="",d=t({__name:"db",setup(r,{expose:n}){return n({frontmatter:{},excerpt:void 0}),($,e)=>(m(),a("div",g,e[0]||(e[0]=[s(`<h1>数据库</h1><h3>创建模型</h3><pre><code class="language-php">&lt;?php
namespace App\\Model;

use Core\\Model;

/* 用户表 */
class User extends Model {

  /* 构造函数 */
  function __construct() {
    $this-&gt;DBConn(&#39;default&#39;);
    $this-&gt;Table(&#39;user&#39;);
  }

}
</code></pre><h3>查询</h3><pre><code class="language-php">$m = new User();
$m-&gt;Columns(&#39;id&#39;,&#39;uname&#39;);
$m-&gt;Where(&#39;uname LIKE ?&#39;, &#39;%WebMIS%&#39;);
$data = $m-&gt;Find();                       // 多条
$data = $m-&gt;FindFirst();                  // 单条
</code></pre><h3>查询-链表</h3><pre><code class="language-php">$m = new User();
$m-&gt;Table(&#39;user as a&#39;);
$m-&gt;Join(&#39;user_info as b&#39;, &#39;a.id=b.uid&#39;);
$m-&gt;Columns(&#39;a.id, b.name&#39;);
$data = $m-&gt;Find();
</code></pre><h3>插入</h3><pre><code class="language-php">// 单条数据
$param1 = [&#39;uname&#39;=&gt;&#39;WebMIS&#39;];
// 多条数据
$param2 = [
  [&#39;uname&#39;=&gt;&#39;WebMIS1&#39;],
  [&#39;uname&#39;=&gt;&#39;WebMIS2&#39;]
];
// 模型
$m = new User();
$m-&gt;Values($param1);      // 单条
$m-&gt;ValuesAll($param2);   // 多条
$id = $m-&gt;Insert();       // 自增ID
</code></pre><h3>更新</h3><pre><code class="language-php">$m = new User();
$m-&gt;Set([&#39;uname&#39;=&gt;&#39;WebMIS&#39;]);
$m-&gt;Where(&#39;id=?&#39;, 1);
$m-&gt;Update();
</code></pre><h3>删除</h3><pre><code class="language-php">$m = new User();
$m-&gt;Where(&#39;id=?&#39;, 2);
$m-&gt;Delete();
</code></pre><h3>其它</h3><pre><code class="language-php">$m-&gt;DBConn(&#39;default&#39;);                    // 数据库连接
$m-&gt;Exec($conn, $sql, $args);             // 执行SQL语句
// 获取数据
$m-&gt;GetSql();                             // 获取已执行SQL语句
$m-&gt;GetID();                              // 获取自增ID
$m-&gt;GetNums();                            // 获取影响行数
// 关联条件
$m-&gt;LeftJoin();                           // 左
$m-&gt;RightJoin();                          // 右
$m-&gt;FullJoin();                           // 全
// 查询条件
$m-&gt;Partition(&#39;plast&#39;);                   // 分区
$m-&gt;Group();                              // 分组
$m-&gt;Having();                             // 筛选
$m-&gt;Order();                              // 排序
$m-&gt;Limit();                              // 限制
$m-&gt;Page();                               // 分页
// 获取SQL语句和参数
list($sql, $args) = $m-&gt;SelectSQL();      // 查询
list($sql, $args) = $m-&gt;InsertSQL();      // 插入
list($sql, $args) = $m-&gt;UpdateSQL();      // 更新
list($sql, $args) = $m-&gt;DeleteSQL();      // 删除
</code></pre><br>`,16)])))}});export{d as default,l as excerpt,p as frontmatter};
