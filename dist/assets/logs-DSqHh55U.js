import{d as n,c as a,a as s,o as t}from"./index-BtLdrSTu.js";const r={class:"markdown-body"},l={},i="",d=n({__name:"logs",setup(c,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(g,e)=>(t(),a("div",r,e[0]||(e[0]=[s(`<h2>引入</h2><pre><code class="language-go">import &quot;webmis/service&quot;
</code></pre><h2>日志-文件</h2><pre><code class="language-go">(&amp;service.Logs{}).File(
  file string,      //文件路径: upload/log/test.json
  content string    //文件内容
)
</code></pre><h2>日志-生产者</h2><pre><code class="language-go">(&amp;service.Logs{}).Log(
  data interface{}    //数据: 数组
)
</code></pre><h2>日志-消费者</h2><pre><code class="language-bash"># 运行
go run cli/main.go logs log
# 挂载
nohup go run cli/main.go logs log 2&gt;&amp;1 &amp;
</code></pre>`,8)])))}});export{d as default,i as excerpt,l as frontmatter};
