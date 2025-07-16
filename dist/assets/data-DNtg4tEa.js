import{d as t,c as o,a as n,o as r}from"./index-BNT8ip_b.js";const s={class:"markdown-body"},g={},d="",m=t({__name:"data",setup(c,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(i,e)=>(r(),o("div",s,e[0]||(e[0]=[n(`<h2>引入</h2><pre><code class="language-go">import &quot;webmis/service&quot;
</code></pre><h2>薄雾算法</h2><pre><code class="language-go">(&amp;service.Data{}).Mist(redisName string)
</code></pre><h2>雪花算法</h2><pre><code class="language-go">(&amp;service.Data{}).Snowflake()
</code></pre><h2>图片地址</h2><pre><code class="language-go">(&amp;service.Data{}).Img(img interface{})
</code></pre><h2>分区-获取ID</h2><pre><code class="language-go">(&amp;service.Data{}).PartitionID(
  date string,    //日期: 2022-10-01 00:00:00
  table string,   //数据表: logs
  column string   //字段: ctime
)
</code></pre><h2>分区-获取名称</h2><pre><code class="language-go">(&amp;service.Data{}).PartitionName(
  stime int,    //开始时间: 1661961600
  etime int     //结束时间: 1664553600
)
</code></pre>`,12)])))}});export{m as default,d as excerpt,g as frontmatter};
