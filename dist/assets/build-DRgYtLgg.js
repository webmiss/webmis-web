import{d as o,c as r,a as t,o as s}from"./index-B-lAKudI.js";const p={class:"markdown-body"},d={},h="",l=o({__name:"build",setup(a,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(c,e)=>(s(),r("div",p,e[0]||(e[0]=[t(`<h1>服务器环境</h1><h2>Composer</h2><pre><code class="language-bash"># PHP命令
ln -s /usr/bin/php8.3 /usr/bin/php
# 安装
apt install composer
</code></pre><h2>运行</h2><pre><code class="language-bash"># 进入项目
cd /xxx/php
chmod -R 777 public
# 依赖包
composer install
</code></pre><br><h2>Nginx虚拟主机</h2><pre><code class="language-bash">vi /home/vhosts/webmis.php.conf
</code></pre><h4>内容</h4><pre><code class="language-nginx">upstream php_websocket {
    server 127.0.0.1:9001;
}

server {
    listen       80;
    listen       [::]:80;
    server_name  php.webmis.vip;
    set $root_path /home/www/webmis/php/public;
    root $root_path;
    index index.php;

    charset utf-8;

    try_files $uri $uri/ @rewrite;
    location @rewrite {
        rewrite ^/(.*)$ /index.php?_url=/$1;
    }
    location ~* ^/(upload|favicon.png)/(.+)$ {
        root $root_path;
        add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;
        add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS&#39;;
        add_header &#39;Access-Control-Allow-Headers&#39; &#39;Content-Type, Authorization&#39;;
        if ($request_method = &#39;OPTIONS&#39;) { return 204; }
    }
    location /wss {
        proxy_pass http://php_websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection &quot;Upgrade&quot;;
        proxy_set_header Connection &quot;keep-alive&quot;;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location ~ \\.php$ {
        fastcgi_pass   unix:/run/php-fpm/www.sock;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
</code></pre><h2>SSL证书</h2><pre><code class="language-bash">certbot --nginx
</code></pre><p><br><br></p>`,13)])))}});export{l as default,h as excerpt,d as frontmatter};
