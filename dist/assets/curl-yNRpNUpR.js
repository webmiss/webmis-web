import{d as n,c as a,a as t,o}from"./index-YZy2HEBW.js";const s={class:"markdown-body"},p={},i="",m=n({__name:"curl",setup(c,{expose:r}){return r({frontmatter:{},excerpt:void 0}),(d,e)=>(o(),a("div",s,e[0]||(e[0]=[t(`<h2>引入</h2><pre><code class="language-python">from library.curl import Curl
</code></pre><h2>发送请求</h2><pre><code class="language-python">Curl.Request(
  url: str,               #请求地址
  data: str=&#39;&#39;,           #请求数据
  method: str=&#39;GET&#39;,      #请求方式
  header: dict={},        #Headers参数
  resType: str=&#39;json&#39;     #返回类型
)
</code></pre><h2>URL参数</h2><pre><code class="language-python"># 生成
param = Curl.UrlEncode(
  {&#39;id&#39;:1, &#39;name&#39;: &#39;测试&#39;}
)
print(param)
# 解析
data = Curl.UrlDecode(param)
print(data)
</code></pre><ul><li>id=1&amp;name=%E6%B5%8B%E8%AF%95</li><li>{“id”:“1”,“name”:“测试”}</li></ul>`,7)])))}});export{m as default,i as excerpt,p as frontmatter};
