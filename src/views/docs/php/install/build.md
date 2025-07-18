# 服务器环境

## Composer
```bash
# PHP命令
ln -s /usr/bin/php8.3 /usr/bin/php
# 安装
apt install composer
```

## 运行
```bash
# 进入项目
cd /xxx/php
chmod -R 777 public
# 依赖包
composer install
```
<br/>

## Nginx虚拟主机
```bash
vi /home/vhosts/webmis.php.conf
```
#### 内容
```nginx
upstream php_websocket {
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
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
        if ($request_method = 'OPTIONS') { return 204; }
    }
    location /wss {
        proxy_pass http://php_websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Connection "keep-alive";
        proxy_set_header X-Real-IP $remote_addr;
    }

    location ~ \.php$ {
        fastcgi_pass   unix:/run/php-fpm/www.sock;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```

## SSL证书
```bash
certbot --nginx
```

<br/><br/>