import{d as t,c as n,a as o,o as r}from"./index-Dldsk6pd.js";const s={class:"markdown-body"},d={},l="",g=t({__name:"data",setup(c,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(p,e)=>(r(),n("div",s,e[0]||(e[0]=[o(`<h2>引入</h2><pre><code class="language-php">use Service\\Data;
</code></pre><h4>薄雾算法</h4><pre><code class="language-php">Data::Mist(string $redisName);
</code></pre><h4>雪花算法</h4><pre><code class="language-php">Data::Snowflake();
</code></pre><h4>图片地址</h4><pre><code class="language-php">Data::Img(string $img);
</code></pre><h4>分区-获取ID</h4><pre><code class="language-php">Data::PartitionID(
  string $date,           //日期: 2022-10-01 00:00:00
  string $table,          //数据表: logs
  string $column=&#39;ctime&#39;  //字段: ctime
);
</code></pre><h4>分区-获取名称</h4><pre><code class="language-php">Data::PartitionName(
  int $stime,   //开始时间: 1661961600
  int $etime    //结束时间: 1664553600
);
</code></pre>`,12)])))}});export{g as default,l as excerpt,d as frontmatter};
