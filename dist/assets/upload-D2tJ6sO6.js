import{d as t,c as a,a as n,o as r}from"./index-BNT8ip_b.js";const l={class:"markdown-body"},i={},c="",d=t({__name:"upload",setup(p,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(u,e)=>(r(),a("div",l,e[0]||(e[0]=[n(`<h2>引入</h2><pre><code class="language-go">import &quot;webmis/library&quot;
</code></pre><h2>单文件</h2><pre><code class="language-go">(&amp;library.Upload{}).File(
  c *gin.Context,
  file *multipart.FileHeader,
  map[string]interface{}{
    &quot;path&quot;:     &quot;upload/&quot;,      //上传目录
    &quot;filename&quot;: &quot;&quot;,             //文件名
    &quot;bind&quot;:     []string{},     //后缀
  },
)
</code></pre><ul><li>bind: “svg”, “jpg”, “jpeg”, “png”, “gif”, “mov”, “mp4”, “wav”, “mp3”</li></ul><h2>Base64</h2><pre><code class="language-go">(&amp;library.Upload{}).Base64(map[string]interface{}{
  &quot;param&quot;:    &quot;upload/&quot;, //上传目录
  &quot;base64&quot;:   &quot;&quot;,        //文件内容
  &quot;filename&quot;: &quot;&quot;,        //文件名
  &quot;ext&quot;:      &quot;png&quot;,     //后缀
})
</code></pre><h2>图片回收</h2><pre><code class="language-go">(&amp;library.Upload{}).HtmlImgClear(html string, dir string)
</code></pre><h2>文件名-生成</h2><pre><code class="language-go">(&amp;library.Upload{}).GetFileName()
</code></pre><h2>图片地址-获取HTML</h2><pre><code class="language-go">(&amp;library.Upload{}).GetHtmlFile(html string)
</code></pre>`,13)])))}});export{d as default,c as excerpt,i as frontmatter};
