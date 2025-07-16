import{d as p,c as n,a as t,o}from"./index-AbO7opoS.js";const l={class:"markdown-body"},c={},g="",h=p({__name:"upload",setup(r,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(s,e)=>(o(),n("div",l,e[0]||(e[0]=[t(`<h2>引入</h2><pre><code class="language-php">use Library\\Upload;
</code></pre><h2>单文件</h2><pre><code class="language-php">Upload::File([
  &#39;upName&#39;=&gt;&#39;up&#39;,  //上传名称
  &#39;path&#39;=&gt;&#39;upload/&#39;,  //上传目录
  &#39;filename&#39;=&gt;&#39;&#39;, //文件名
  &#39;bind&#39;=&gt;[&#39;jpg&#39;,&#39;jpeg&#39;,&#39;png&#39;,&#39;gif&#39;,&#39;mov&#39;,&#39;mp4&#39;,&#39;wav&#39;,&#39;mp3&#39;], //允许格式
]);
</code></pre><h2>Base64</h2><pre><code class="language-php">Upload::Base64([
  &#39;path&#39;=&gt;&#39;upload/&#39;,  //上传目录
  &#39;base64&#39;=&gt;&#39;&#39;,  //文件内容
  &#39;filename&#39;=&gt;&#39;&#39;, //文件名
  &#39;ext&#39;=&gt;&#39;png&#39;, //后缀
]);
</code></pre><h2>图片回收</h2><pre><code class="language-php">Upload::HtmlImgClear(string $html, string $dir);
</code></pre><h2>文件名-生成</h2><pre><code class="language-php">Upload::GetFileName();
</code></pre><h2>图片地址-获取HTML</h2><pre><code class="language-php">Upload::GetHtmlFile(string $html);
</code></pre>`,12)])))}});export{h as default,g as excerpt,c as frontmatter};
