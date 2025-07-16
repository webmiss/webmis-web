import{d as n,c as a,a as t,o as s}from"./index-AbO7opoS.js";const o={class:"markdown-body"},c={},i="",m=n({__name:"curl",setup(l,{expose:r}){return r({frontmatter:{},excerpt:void 0}),(p,e)=>(s(),a("div",o,e[0]||(e[0]=[t(`<h2>引入</h2><pre><code class="language-php">use Library\\Curl;
</code></pre><h2>发送请求</h2><pre><code class="language-php">Curl::Request(
  string $url,                //请求地址
  string $data=&#39;&#39;,            //请求数据
  string $method=&#39;GET&#39;,       //请求方式
  array $headers=[],          //Headers参数
  string $resType=&#39;json&#39;      //返回类型
);
</code></pre><h2>URL参数</h2><pre><code class="language-php">// 生成
$param = Curl::UrlEncode(
  [&#39;id&#39;=&gt;1, &#39;name&#39;=&gt;&#39;测试&#39;]
);
self::Print($param);
// 解析
$data = Curl::UrlDecode($param);
self::Print($data);
</code></pre><ul><li>id=1&amp;name=%E6%B5%8B%E8%AF%95</li><li>{“id”:“1”,“name”:“测试”}</li></ul>`,7)])))}});export{m as default,i as excerpt,c as frontmatter};
