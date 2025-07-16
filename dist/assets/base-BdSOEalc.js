import{d as a,c as s,a as o,o as r}from"./index-BNT8ip_b.js";const t={class:"markdown-body"},l={},g="",h=a({__name:"base",setup(c,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(p,e)=>(r(),s("div",t,e[0]||(e[0]=[o(`<h2>引入</h2><pre><code class="language-php">use Service\\Base;
</code></pre><h4>返回数据</h4><pre><code class="language-php">Base::GetJSON(array $data=[]);
</code></pre><h4>获取参数</h4><pre><code class="language-php">// Get、Post
Base::Get(string $name);
Base::Post(string $name);
// JSON方式
$json = Base::Json();
self::JsonName($json, string $name);
</code></pre><h4>输出</h4><pre><code class="language-php">// 打印信息
Base::Print(...$content);
// 测试数度
Base::MicroBegin();
Base::MicroEnd();
</code></pre><h4>异常错误</h4><pre><code class="language-php">// 抛出异常
Base::Error($msg);
</code></pre>`,10)])))}});export{h as default,g as excerpt,l as frontmatter};
