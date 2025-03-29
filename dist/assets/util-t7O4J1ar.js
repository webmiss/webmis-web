import{d as o,c as r,a as n,o as a}from"./index-C8nBvhCm.js";const s={class:"markdown-body"},d={},i="",h=o({__name:"util",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(l,e)=>(a(),r("div",s,e[0]||(e[0]=[n(`<h2>引入</h2><pre><code class="language-python">from util.util import Util
</code></pre><h2>执行Linux命令</h2><pre><code class="language-python">Util.Exec(cmd: str)
</code></pre><h2>格式化时间</h2><pre><code class="language-python">Util.Date(format: str = &#39;%Y-%m-%d %H:%M:%S&#39;, timestamp: float = None)
Util.DateFormat(
  format: str = &#39;%Y-%m-%d %H:%M:%S&#39;,  #格式
  duration: str = &#39;-1d&#39;,              #年(y)、月(m)、周(w)、日(d)、时(h)、分(i)、秒(s)
)
</code></pre><h2>时间戳</h2><pre><code class="language-python">Util.Time()
</code></pre><h2>日期转时间戳</h2><pre><code class="language-python">Util.Strtotime(day: str=None, format: str=&#39;%Y-%m-%d %H:%M:%S&#39;)
</code></pre><h2>Gmt时间格式</h2><pre><code class="language-python">Util.GmtISO8601(timestamp: int)
</code></pre><h2>去首尾空格</h2><pre><code class="language-python">Util.Trim(content, charlist: str = None)
</code></pre><h2>拆分字符串为数组</h2><pre><code class="language-python">Util.Explode(delimiter: str, string: str)
</code></pre><h2>数组合成字符串</h2><pre><code class="language-python">Util.Implode(glue: str, pieces: list)
</code></pre><h2>Json转换</h2><pre><code class="language-python"># 编码
Util.JsonEncode(data)
# 解码
Util.JsonDecode(data: str)
</code></pre><h2>合并数组</h2><pre><code class="language-python">Util.ArrayMerge(*arrays: dict)
</code></pre><h2>URL参数</h2><pre><code class="language-python">Util.UrlToArray(url: str)
</code></pre>`,24)])))}});export{h as default,i as excerpt,d as frontmatter};
