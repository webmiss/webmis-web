import{d as n,c as t,a as s,o as a}from"./index-YZy2HEBW.js";const o={class:"markdown-body"},d={},c="",l=n({__name:"redis",setup(g,{expose:r}){return r({frontmatter:{},excerpt:void 0}),(p,e)=>(a(),t("div",o,e[0]||(e[0]=[s(`<h2>Redis 使用</h2><pre><code class="language-java">import webmis.library.Redis;
// 对象
Redis redis = new Redis(&quot;&quot;);
// 关闭
redis.Close();
</code></pre><p><strong>Conn-连接</strong></p><pre><code class="language-java">redis.Conn();
</code></pre><p><strong>Set-添加</strong></p><pre><code class="language-java">redis.Set(String key, String val);
</code></pre><p><strong>Get-获取</strong></p><pre><code class="language-java">redis.Get(String key);
</code></pre><p><strong>Get-删除</strong></p><pre><code class="language-java">redis.Del(String... key);
</code></pre><p><strong>Exist-是否存在</strong></p><pre><code class="language-java">redis.Exist(String key);
</code></pre><p><strong>设置过期时间(秒)</strong></p><pre><code class="language-java">redis.Expire(String key, int ttl);
</code></pre><p><strong>获取过期时间(秒)</strong></p><pre><code class="language-java">redis.Ttl(String key);
</code></pre><p><strong>获取长度</strong></p><pre><code class="language-java">redis.StrLen(String key);
</code></pre><h2>哈希(Hash)</h2><p><strong>HSet-添加</strong></p><pre><code class="language-java">redis.HSet(String name, String key, String val);
redis.HMSet(String name, Map&lt;String, String&gt; obj);
</code></pre><p><strong>HGet-获取</strong></p><pre><code class="language-java">redis.HGet(String name, String key);
redis.HMGet(String name, String... key);
</code></pre><p><strong>Hdel-删除</strong></p><pre><code class="language-java">redis.HDel(String name, String... key);
</code></pre><p><strong>HExist-是否存在</strong></p><pre><code class="language-java">redis.HExist(String name, String key);
</code></pre><p><strong>HLen-Key个数</strong></p><pre><code class="language-java">redis.HLen(String name);
</code></pre>`,29)])))}});export{l as default,c as excerpt,d as frontmatter};
