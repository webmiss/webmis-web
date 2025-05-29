import{d as n,c as t,a as s,o as a}from"./index-CG-Hq01z.js";const c={class:"markdown-body"},d={},g="",h=n({__name:"logs",setup(p,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(r,e)=>(a(),t("div",c,e[0]||(e[0]=[s(`<h2>引入</h2><pre><code class="language-python">from service.logs import Logs
</code></pre><h2>日志-文件</h2><pre><code class="language-python">Logs.File(
  file: str,      #文件路径: upload/log/test.json
  content: str    #文件内容
)
</code></pre><h2>日志-生产者</h2><pre><code class="language-python">Logs.Log(
  data: dict    #数据: 字典
)
</code></pre><h2>日志-消费者</h2><pre><code class="language-bash"># 运行
python cli.py Logs
# 挂载
nohup python cli.py Logs 2&gt;&amp;1 &amp;
</code></pre>`,8)])))}});export{h as default,g as excerpt,d as frontmatter};
