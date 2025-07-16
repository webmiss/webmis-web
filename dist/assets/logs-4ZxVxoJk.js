import{d as n,c as s,a as p,o as a}from"./index-AbO7opoS.js";const t={class:"markdown-body"},d={},g="",h=n({__name:"logs",setup(r,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(c,e)=>(a(),s("div",t,e[0]||(e[0]=[p(`<h2>引入</h2><pre><code class="language-php">use Service\\Logs;
</code></pre><h4>日志-文件</h4><pre><code class="language-php">Logs::File(
  string $file=&#39;&#39;,    //文件路径: upload/log/test.json
  string $content=&#39;&#39;  //文件内容
);
</code></pre><h4>日志-生产者</h4><pre><code class="language-php">Logs::Logs(
  array $data     //数据: 数组
);
</code></pre><h4>日志-消费者</h4><pre><code class="language-bash"># 运行
$ php cli.php Logs
# 挂载
nohup php cli.php Logs 2&gt;&amp;1 &amp;
</code></pre>`,8)])))}});export{h as default,g as excerpt,d as frontmatter};
