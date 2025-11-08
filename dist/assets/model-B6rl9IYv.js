import{d as n,c as t,a as s,o as r}from"./index-BtLdrSTu.js";const a={class:"markdown-body"},p={},m="",g=n({__name:"model",setup(l,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(d,e)=>(r(),t("div",a,e[0]||(e[0]=[s(`<h3>创建模型</h3><p><strong>model/demo.py</strong></p><pre><code class="language-python">from model.model import Model

# 测试表
class Demo(Model) :

  # 构造函数
  def __init__(self):
    self.Table(&#39;test&#39;)
</code></pre><h3>使用</h3><pre><code class="language-python">from model.demo import Demo
# 对象
model = Demo()
</code></pre><h3>查询</h3><pre><code class="language-python">model.Query(conn, sql: str, args: tuple)
</code></pre><h3>执行</h3><pre><code class="language-python">model.Exec(conn, sql: str, args: tuple)
</code></pre>`,9)])))}});export{g as default,m as excerpt,p as frontmatter};
