import{d as o,c as n,a as p,o as t}from"./index-BtLdrSTu.js";const l={class:"markdown-body"},c={},m="",h=o({__name:"upload",setup(r,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(d,e)=>(t(),n("div",l,e[0]||(e[0]=[p(`<h2>引入</h2><pre><code class="language-python">from library.upload import Upload
</code></pre><h2>单文件</h2><pre><code class="language-python">Upload.File(
  &#39;upName&#39;: &#39;up&#39;,     #上传名称
  &#39;path&#39;:&#39;upload/&#39;,   #上传目录
  &#39;filename&#39;:&#39;&#39;,      #文件名
  &#39;bind&#39;:[&#39;jpg&#39;,&#39;jpeg&#39;,&#39;png&#39;,&#39;gif&#39;,&#39;mov&#39;,&#39;mp4&#39;,&#39;wav&#39;,&#39;mp3&#39;], #允许格式
)
</code></pre><h2>Base64</h2><pre><code class="language-python">Upload.File(
  &#39;path&#39;:&#39;upload/&#39;,   #上传目录
  &#39;base64&#39;:&#39;&#39;,        #文件内容
  &#39;filename&#39;:&#39;&#39;,      #文件名
  &#39;ext&#39;:&#39;png&#39;,        #后缀
)
</code></pre><h2>图片回收</h2><pre><code class="language-python">Upload.HtmlImgClear(html: str, dir: str)
</code></pre><h2>文件名-生成</h2><pre><code class="language-python">Upload.GetFileName()
</code></pre><h2>图片地址-获取HTML</h2><pre><code class="language-python">Upload.GetHtmlFile(html: str)
</code></pre>`,12)])))}});export{h as default,m as excerpt,c as frontmatter};
