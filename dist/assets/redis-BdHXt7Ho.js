import{d as s,c as n,a as t,o}from"./index-CG-Hq01z.js";const g={class:"markdown-body"},i={},d="",l=s({__name:"redis",setup(a,{expose:r}){return r({frontmatter:{},excerpt:void 0}),(p,e)=>(o(),n("div",g,e[0]||(e[0]=[t(`<h2>Redis 使用</h2><pre><code class="language-go">import &quot;webmis/library&quot;
# 对象
redis := (&amp;library.Redis{}).New(&quot;&quot;)
# 关闭
redis.Close()
</code></pre><p><strong>Conn-连接</strong></p><pre><code class="language-go">redis.Conn()
</code></pre><p><strong>Set-添加</strong></p><pre><code class="language-go">redis.Set(key string, val interface{})
</code></pre><p><strong>Get-获取</strong></p><pre><code class="language-go">redis.Get(key string)
</code></pre><p><strong>Get-删除</strong></p><pre><code class="language-go">redis.Get(keys ...interface{})
</code></pre><p><strong>Exist-是否存在</strong></p><pre><code class="language-go">redis.Exist(key string)
</code></pre><p><strong>设置过期时间(秒)</strong></p><pre><code class="language-go">redis.Expire(key string, ttl int64)
</code></pre><p><strong>获取过期时间(秒)</strong></p><pre><code class="language-go">redis.Ttl(key string)
</code></pre><p><strong>获取长度</strong></p><pre><code class="language-go">redis.StrLen(key string)
</code></pre><h2>哈希(Hash)</h2><p><strong>HSet-添加</strong></p><pre><code class="language-go">redis.HSet(name string, key string, val interface{})
redis.HMSet(name string, obj interface{})
</code></pre><p><strong>HGet-获取</strong></p><pre><code class="language-go">redis.HGet(name string, key string)
redis.HMGet(name string, keys ...string)
</code></pre><p><strong>Hdel-删除</strong></p><pre><code class="language-go">redis.HDel(name string, key ...string)
</code></pre><p><strong>HExist-是否存在</strong></p><pre><code class="language-go">redis.HExist(name string, key string)
</code></pre><p><strong>HLen-Key个数</strong></p><pre><code class="language-go">redis.HLen(name string)
</code></pre>`,29)])))}});export{l as default,d as excerpt,i as frontmatter};
