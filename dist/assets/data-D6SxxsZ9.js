import{d as a,c as n,a as o,o as r}from"./index-CBd8jn0T.js";const s={class:"markdown-body"},i={},l="",m=a({__name:"data",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(p,e)=>(r(),n("div",s,e[0]||(e[0]=[o(`<h2>引入</h2><pre><code class="language-python">from service.data import Data
</code></pre><h2>薄雾算法</h2><pre><code class="language-python">Data.Mist(redisName: str)
</code></pre><h2>雪花算法</h2><pre><code class="language-python">Data.Snowflake()
</code></pre><h2>图片地址</h2><pre><code class="language-python">Data.Img(img: str)
</code></pre><h2>分区-获取ID</h2><pre><code class="language-python">Data.PartitionID(
  date: str,            #日期: 2022-10-01 00:00:00
  table: str,           #数据表: logs
  column: str=&#39;ctime&#39;   #字段: ctime
)
</code></pre><h2>分区-获取名称</h2><pre><code class="language-python">Data().PartitionName(
  stime: int,   #开始时间: 1661961600
  etime: int    #结束时间: 1664553600
)
</code></pre>`,12)])))}});export{m as default,l as excerpt,i as frontmatter};
