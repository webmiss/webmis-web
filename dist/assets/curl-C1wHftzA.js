import{d as a,c as n,a as r,o}from"./index-AbO7opoS.js";const l={class:"markdown-body"},p={},d="",u=a({__name:"curl",setup(s,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(c,t)=>(o(),n("div",l,t[0]||(t[0]=[r(`<h2>引入</h2><pre><code class="language-java">import webmis.library.Curl;
</code></pre><h2>发送请求</h2><pre><code class="language-java">Curl.Request(
  String url,                       //请求地址
  String data,                      //请求数据
  String method,                    //请求方式
  HashMap&lt;String, Object&gt; header    //Headers参数
);
</code></pre><h2>URL参数</h2><pre><code class="language-java">// 生成
HashMap&lt;String, Object&gt; obj = new HashMap&lt;String, Object&gt;();
obj.put(&quot;id&quot;, 1);
obj.put(&quot;name&quot;, &quot;测试&quot;);
String param = Curl.UrlEncode(obj);
Print(param);
// 解析
HashMap&lt;String, String&gt; data = Curl.UrlDecode(param);
Print(data);
</code></pre><ul><li>name=%E6%B5%8B%E8%AF%95&amp;id=1</li><li>{name=测试, id=1}</li></ul>`,7)])))}});export{u as default,d as excerpt,p as frontmatter};
