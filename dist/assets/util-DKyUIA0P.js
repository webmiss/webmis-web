import{d as t,c as r,a as n,o as i}from"./index-DZw22l5y.js";const o={class:"markdown-body"},g={},d="",p=t({__name:"util",setup(s,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(l,e)=>(i(),r("div",o,e[0]||(e[0]=[n(`<h2>引入</h2><pre><code class="language-java">import webmis.util.Util;
</code></pre><h2>执行Linux命令</h2><pre><code class="language-java">Util.Exec(String cmd);
</code></pre><h2>字符串长度</h2><pre><code class="language-java">Util.Len(String val);
</code></pre><h2>格式化时间</h2><pre><code class="language-java">Util.Date(
  String format,    //yyyy-MM-dd HH:mm:ss
  String timestamp, //0
);
Util.DateFormat(
  String format,    //格式: yyyy-MM-dd HH:mm:ss
  String duration,  //-1d: 年(y)、月(m)、周(w)、日(d)、时(h)、分(i)、秒(s)
);
</code></pre><h2>时间戳</h2><pre><code class="language-java">Util.Time();
</code></pre><h2>日期转时间戳</h2><pre><code class="language-java">Util.StrToTime(String day);
Util.StrToTime(String day, String format);
</code></pre><h2>Gmt时间格式</h2><pre><code class="language-java">Util.GmtISO8601(long timestamp);
</code></pre><h2>去首尾空格</h2><pre><code class="language-java">Util.Trim(String str);
Util.Trim(String str, String charlist);
</code></pre><h2>拆分字符串为数组</h2><pre><code class="language-java">Util.Explode(String delimiter, String string);
</code></pre><h2>数组合成字符串</h2><pre><code class="language-java">Util.Implode(String glue, ArrayList&lt;String&gt; pieces);
Util.Implode(String glue, JSONArray pieces);
</code></pre><h2>Json转换</h2><pre><code class="language-java">// 编码
Util.JsonEncode(Object arr);
// 解码
Util.JsonDecode(String str);
Util.JsonDecodeArray(String str);
</code></pre><h2>合并数组</h2><pre><code class="language-java">Util.ArrayMerge(HashMap&lt;String, Object&gt;... arrays);
</code></pre>`,24)])))}});export{p as default,d as excerpt,g as frontmatter};
