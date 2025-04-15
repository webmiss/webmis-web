import{d as t,c as n,a as o,o as r}from"./index-5_hhwz4s.js";const c={class:"markdown-body"},p={},l="",g=t({__name:"data",setup(s,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(i,e)=>(r(),n("div",c,e[0]||(e[0]=[o(`<h2>引入</h2><pre><code class="language-java">import webmis.service.Data;
</code></pre><h2>薄雾算法</h2><pre><code class="language-java">Data.Mist(String redisName);
</code></pre><h2>雪花算法</h2><pre><code class="language-java">Data.Snowflake();
</code></pre><h2>图片地址</h2><pre><code class="language-java">Data.Img(Object img);
</code></pre><h2>分区-获取ID</h2><pre><code class="language-java">Data.PartitionID(
  String date,    //日期: 2022-10-01 00:00:00
  String table,   //数据表: logs
  String column   //字段: ctime
);
</code></pre><h2>分区-获取名称</h2><pre><code class="language-java">(new Data()).PartitionName(
  int stime,  //开始时间: 1661961600
  int etime   //结束时间: 1664553600
);
</code></pre>`,12)])))}});export{g as default,l as excerpt,p as frontmatter};
