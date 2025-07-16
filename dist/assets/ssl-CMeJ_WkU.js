import{d as s,c as t,a as l,o as a}from"./index-BNT8ip_b.js";const r={class:"markdown-body"},p={},h="",d=s({__name:"ssl",setup(c,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(o,e)=>(a(),t("div",r,e[0]||(e[0]=[l(`<h1>Let’s Encrypt免费证书</h1><h2>证书工具</h2><h3>CentOS</h3><pre><code class="language-bash"># CentOS
dnf install epel-release -y
dnf install python3-certbot-nginx -y
# Ubuntu
apt install python3-certbot-nginx -y
# 验证
certbot -h
</code></pre><h2>Nginx</h2><pre><code class="language-nginx">server {
    listen 80;
    listen       [::]:80;
    server_name webmis.vip www.webmis.vip;
    root /home/www/base/web/dist;
    index index.html;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.html;
        # cache
        proxy_cache my_cache;
        proxy_cache_valid 200 302 6h;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 1m;
        expires 30d;
        add_header X-Proxy-Cache $upstream_cache_status;
    }
    location ~ /\\.ht {
        deny  all;
    }
}
</code></pre><ul><li>注意：不能使用中文注释，不要重启Nginx!</li></ul><br><h2>获取证书</h2><pre><code class="language-bash"># 生成
certbot --nginx
# 重启Nginx
systemctl restart nginx
</code></pre><br><h2>定时续期证书</h2><pre><code class="language-bash"># 定时器
crontab -e
</code></pre><ul><li>0 2 28 * * sh /home/shell/ssl.sh &gt; /dev/null 2&gt;&amp;1 &amp;</li><li>每月28号2点更新证书后重启Nginx</li></ul><p><strong>/home/sh/ssl.sh</strong></p><pre><code class="language-bash">#!/bin/bash
# find / -name &#39;.certbot.lock&#39; -exec rm {} \\;
/usr/local/bin/certbot renew --force-renewal
systemctl reload nginx
</code></pre><h2>iOS缓慢问题</h2><h4>1) OCSP( iOS缓慢问题 )</h4><pre><code class="language-bash">vi /etc/hosts
</code></pre><ul><li>23.44.51.27 ocsp.int-x3.letsencrypt.org</li></ul><h4>2) OCSP( iOS缓慢问题 )</h4><pre><code class="language-nginx">    #SSL
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout  10m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4:!DH:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_certificate /etc/letsencrypt/live/demo.webmis.vip/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/demo.webmis.vip/privkey.pem;
</code></pre>`,22)])))}});export{d as default,h as excerpt,p as frontmatter};
