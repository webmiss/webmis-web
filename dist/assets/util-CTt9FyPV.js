import{d as n,c as a,a as r,o as s}from"./index-CG-Hq01z.js";const o={class:"markdown-body"},l={},d="",h=n({__name:"util",setup(p,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(c,e)=>(s(),a("div",o,e[0]||(e[0]=[r(`<h2>引入</h2><pre><code class="language-php">use Util\\Util;
</code></pre><h2>执行Linux命令</h2><pre><code class="language-php">Util::Exec(string $cmd);
</code></pre><h2>格式化时间</h2><pre><code class="language-php">Util::Date(string $format=&#39;Y-m-d H:i:s&#39;, int $timestamp=0)
Util::DateFormat(
  string $format=&#39;Y-m-d H:i:s&#39;, //格式
  string $duration=&#39;0s&#39;         //年(y)、月(m)、周(w)、日(d)、时(h)、分(i)、秒(s)
)
</code></pre><h2>字符串长度</h2><pre><code class="language-php">Util::Len(string $val);
</code></pre><h2>日期转时间戳</h2><pre><code class="language-php">Util::StrToTime(string $day);
</code></pre><h2>Gmt时间格式</h2><pre><code class="language-php">Util::GmtISO8601(int $timestamp);
</code></pre><h2>Json转换</h2><pre><code class="language-php">// 编码
Util::JsonEncode(array $json);
// 解码
Util::JsonDecode(string $json);
</code></pre><h2>URL参数</h2><pre><code class="language-php">Util::UrlToArray(string $url);
</code></pre>`,16)])))}});export{h as default,d as excerpt,l as frontmatter};
