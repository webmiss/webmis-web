import{d as r,c as n,a as t,o}from"./index-BNT8ip_b.js";const p={class:"markdown-body"},g={},l="",i=r({__name:"redis",setup(a,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,e)=>(o(),n("div",p,e[0]||(e[0]=[t(`<h2>Redis 使用</h2><pre><code class="language-python">from library.redis import Redis
# 对象
redis = Redis()
# 关闭
redis.Close()
</code></pre><p><strong>Conn-连接</strong></p><pre><code class="language-python">redis.Conn()
</code></pre><p><strong>Set-添加</strong></p><pre><code class="language-python">redis.Set(key: str, val: str)
</code></pre><p><strong>Get-获取</strong></p><pre><code class="language-python">redis.Get(key: str)
</code></pre><p><strong>Get-删除</strong></p><pre><code class="language-python">redis.Get(*key: str)
</code></pre><p><strong>Exist-是否存在</strong></p><pre><code class="language-python">redis.Exist(key: str)
</code></pre><p><strong>设置过期时间(秒)</strong></p><pre><code class="language-python">redis.Expire(key: str, ttl: int)
</code></pre><p><strong>获取过期时间(秒)</strong></p><pre><code class="language-python">redis.Ttl(key: str)
</code></pre><p><strong>获取长度</strong></p><pre><code class="language-python">redis.StrLen(key: str)
</code></pre><h2>哈希(Hash)</h2><p><strong>HSet-添加</strong></p><pre><code class="language-python">redis.HSet(name: str, key, val)
redis.HMSet(name: str, obj)
</code></pre><p><strong>HGet-获取</strong></p><pre><code class="language-python">redis.HGet(name: str, key)
redis.HMGet(name: str, key)
</code></pre><p><strong>Hdel-删除</strong></p><pre><code class="language-python">redis.HDel(name: str, *key)
</code></pre><p><strong>HExist-是否存在</strong></p><pre><code class="language-python">redis.HExist(name: str, key)
</code></pre><p><strong>HLen-Key个数</strong></p><pre><code class="language-python">redis.HLen(name: str)
</code></pre>`,29)])))}});export{i as default,l as excerpt,g as frontmatter};
