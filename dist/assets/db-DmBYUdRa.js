import{d as a,c as s,H as m,o as r}from"./vendor-oTex03eR.js";const o={class:"markdown-body"},p={},c="",i=a({__name:"db",setup(t,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(l,e)=>(r(),s("div",o,e[0]||(e[0]=[m(`<h1>数据库</h1><h3>创建模型</h3><pre><code class="language-python">from core.Model import Model

# 用户表
class User(Model):

  # 构造函数
  def __init__(self):
    self.DBConn(&#39;default&#39;)
    self.Table(&#39;user&#39;)
</code></pre><h3>查询</h3><pre><code class="language-python">m = User()
m.Columns(&#39;id&#39;,&#39;uname&#39;)
m.Where(&#39;uname LIKE %s&#39;, &#39;%WebMIS%&#39;)
data = m.Find()                       # 多条
data = m.FindFirst()                  # 单条
</code></pre><h3>查询-链表</h3><pre><code class="language-python">m = new User()
m.Table(&#39;user as a&#39;)
m.Join(&#39;user_info as b&#39;, &#39;a.id=b.uid&#39;)
m.Columns(&#39;a.id, b.name&#39;)
data = m.Find()
</code></pre><h3>插入</h3><pre><code class="language-python"># 单条数据
param1 = {&#39;uname&#39;: &#39;WebMIS&#39;}
# 多条数据
param2 = [
  {&#39;uname&#39;: &#39;WebMIS1&#39;},
  {&#39;uname&#39;: &#39;WebMIS2&#39;}
]
# 模型
m = User()
m.Values(param1)           # 单条
m.ValuesAll(param2)        # 多条
id = m.Insert()            # 自增ID
</code></pre><h3>更新</h3><pre><code class="language-python">m = User()
m.Set({&#39;uname&#39;:&#39;WebMIS&#39;})
m.Where(&#39;id=%s&#39;, 1)
m.Update()
</code></pre><h3>删除</h3><pre><code class="language-python">m = User()
m.Where(&#39;id=%s&#39;, 2)
m.Delete()
</code></pre><h3>其它</h3><pre><code class="language-python">m.DBConn(&#39;default&#39;)              # 数据库连接
m.Exec(conn, sql, args)          # 执行SQL语句
# 获取数据
m.GetSql()                       # 获取已执行SQL语句
m.GetID()                        # 获取自增ID
m.GetNums()                      # 获取影响行数
# 关联条件
m.LeftJoin()                     # 左
m.RightJoin()                    # 右
m.FullJoin()                     # 全
# 查询条件
m.Partition(&#39;plast&#39;)             # 分区
m.Group()                        # 分组
m.Having()                       # 筛选
m.Order()                        # 排序
m.Limit()                        # 限制
m.Page()                         # 分页
# 获取SQL语句和参数
sql, args = m.SelectSQL()        # 查询
sql, args = m.InsertSQL()        # 插入
sql, args = m.UpdateSQL()        # 更新
sql, args = m.DeleteSQL()        # 删除
</code></pre><br>`,16)])))}});export{i as default,c as excerpt,p as frontmatter};
