import{d as r,c as n,a as t,o as p}from"./index-5_hhwz4s.js";const g={class:"markdown-body"},c={},i="",l=r({__name:"redis",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(a,e)=>(p(),n("div",g,e[0]||(e[0]=[t(`<h2>Redis 使用</h2><pre><code class="language-php">use Library\\Redis;
// 对象
$redis = new Redis();
// 关闭
$redis-&gt;Close();
</code></pre><p><strong>Conn-连接</strong></p><pre><code class="language-php">$redis-&gt;Conn();
</code></pre><p><strong>Set-添加</strong></p><pre><code class="language-php">$redis-&gt;Set(string $key, string $val);
</code></pre><p><strong>Get-获取</strong></p><pre><code class="language-php">$redis-&gt;Get(string $key);
</code></pre><p><strong>Get-删除</strong></p><pre><code class="language-php">$redis-&gt;Del(string ...$key);
</code></pre><p><strong>Exist-是否存在</strong></p><pre><code class="language-php">$redis-&gt;Exist(string $key);
</code></pre><p><strong>设置过期时间(秒)</strong></p><pre><code class="language-php">$redis-&gt;Expire(string $key, int $ttl);
</code></pre><p><strong>获取过期时间(秒)</strong></p><pre><code class="language-php">$redis-&gt;Ttl(string $key);
</code></pre><p><strong>获取长度</strong></p><pre><code class="language-php">$redis-&gt;StrLen(string $key);
</code></pre><h2>哈希(Hash)</h2><p><strong>HSet-添加</strong></p><pre><code class="language-php">$redis-&gt;HSet(string $name, string $key, $val);
$redis-&gt;HMSet(string $name, array $obj);
</code></pre><p><strong>HGet-获取</strong></p><pre><code class="language-php">$redis-&gt;HGet(string $name, string $key);
$redis-&gt;HMGet(string $name, string $key);
</code></pre><p><strong>Hdel-删除</strong></p><pre><code class="language-php">$redis-&gt;HDel(string $name, string $key);
</code></pre><p><strong>HExist-是否存在</strong></p><pre><code class="language-php">$redis-&gt;HExist(string $name, string $key);
</code></pre><p><strong>HLen-Key个数</strong></p><pre><code class="language-php">$redis-&gt;HLen(string $name);
</code></pre>`,29)])))}});export{l as default,i as excerpt,c as frontmatter};
