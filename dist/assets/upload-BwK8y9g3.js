import{d as o,c as n,a as e,o as p}from"./index-AbO7opoS.js";const u={class:"markdown-body"},l={},i="",q=o({__name:"upload",setup(r,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(d,t)=>(p(),n("div",u,t[0]||(t[0]=[e(`<h2>引入</h2><pre><code class="language-java">import webmis.library.Upload;
</code></pre><h2>单文件</h2><pre><code class="language-java">// 参数
HashMap&lt;String, Object&gt; params = new HashMap&lt;String, Object&gt;();
params.put(&quot;path&quot;, &quot;upload/&quot;);  //上传目录
params.put(&quot;filename&quot;, &quot;&quot;);     //文件名
ArrayList&lt;String&gt; bind = new ArrayList&lt;String&gt;();
bind.add(&quot;jpg&quot;);
bind.add(&quot;jpeg&quot;);
bind.add(&quot;png&quot;);
bind.add(&quot;gif&quot;);
bind.add(&quot;mov&quot;);
bind.add(&quot;mp4&quot;);
bind.add(&quot;wav&quot;);
bind.add(&quot;mp3&quot;);
params.put(&quot;bind&quot;, bind);   //允许格式

Upload.File(
  MultipartFile file,               //文件流
  HashMap&lt;String, Object&gt; params    //参数
);
</code></pre><h2>Base64</h2><pre><code class="language-java">// 参数
HashMap&lt;String, Object&gt; params = new HashMap&lt;String, Object&gt;();
params.put(&quot;path&quot;, &quot;upload/&quot;); //上传目录
params.put(&quot;base64&quot;, &quot;&quot;);      //文件内容
params.put(&quot;filename&quot;, &quot;&quot;);    //文件名
params.put(&quot;ext&quot;, &quot;png&quot;);      //后缀

Upload.Base64(
  HashMap&lt;String, Object&gt; params  //参数
);
</code></pre><h2>图片回收</h2><pre><code class="language-java">Upload.HtmlImgClear(String html, String dir);
</code></pre><h2>文件名-生成</h2><pre><code class="language-java">Upload.GetFileName();
</code></pre><h2>图片地址-获取HTML</h2><pre><code class="language-java">Upload.GetHtmlFile(String html);
</code></pre>`,12)])))}});export{q as default,i as excerpt,l as frontmatter};
