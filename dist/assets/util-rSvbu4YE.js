import{d as a,c as n,a as r,o}from"./index-AbO7opoS.js";const s={class:"markdown-body"},g={},d="",p=a({__name:"util",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(l,e)=>(o(),n("div",s,e[0]||(e[0]=[r(`<h2>引入</h2><pre><code class="language-go">import &quot;webmis/util&quot;
</code></pre><h2>执行Linux命令</h2><pre><code class="language-go">util.Exec(cmd string)
</code></pre><h2>字符串长度</h2><pre><code class="language-go">util.Len(val string)
</code></pre><h2>是否为空</h2><pre><code class="language-go">util.Empty(val interface{})
</code></pre><h2>是否存在KEY</h2><pre><code class="language-go">util.InKey(name string, data map[string]interface{})
</code></pre><h2>是否存在于数组</h2><pre><code class="language-go">util.InArray(needle string, haystack []string)
</code></pre><h2>三元表达式</h2><pre><code class="language-go">util.If(val bool, tVal interface{}, fVal interface{})
</code></pre><h2>格式化时间</h2><pre><code class="language-go">util.Date(format string, timestamp ...interface{})
util.DateFormat(
  format string,    //格式: yyyy-MM-dd HH:mm:ss
  duration string,  //-1d: 年(y)、月(m)、日(d)、时，分、秒(5h30m40s)
)
</code></pre><h2>时间戳</h2><pre><code class="language-go">util.Time()
</code></pre><h2>日期转时间戳</h2><pre><code class="language-go">util.Strtotime(day string, format string)
</code></pre><h2>Gmt时间格式</h2><pre><code class="language-go">util.GmtISO8601(timestamp int64)
</code></pre><h2>去首尾空格</h2><pre><code class="language-go">util.Trim(str interface{}, charlist ...string)
</code></pre><h2>拆分字符串为数组</h2><pre><code class="language-go">util.Explode(delimiter string, str string)
</code></pre><h2>数组合成字符串</h2><pre><code class="language-go">util.Implode(glue string, pieces []string)
</code></pre><h2>Json转换</h2><pre><code class="language-go">// 编码
util.JsonEncode(arr interface{})
// 解码
util.JsonDecode(str interface{}, res interface{})
</code></pre><h2>合并数组</h2><pre><code class="language-go">util.ArrayMerge(arrays ...map[string]interface{})
</code></pre><h2>截取小数位数</h2><pre><code class="language-go">// 四舍五入
util.FloatRound(f float64, n int)
// 不四舍五入
util.FloatFloor(f float64, n int)
</code></pre>`,34)])))}});export{p as default,d as excerpt,g as frontmatter};
