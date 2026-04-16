# 生产环境

### Ubuntu
```bash
# 安装
apt install composer
# Nginx
apt install -y nginx
# MariaDB
apt install -y mariadb-server
# Redis
apt install -y redis-server
# PHP( 依赖包 )
apt install php-fpm php-cli php-mysql php-gd php-xml php-mbstring -y
```

### Nginx
```bash
server {
    server_name  php.webmis.vip;
    set $root_path /home/www/webmis/php/public;
    root $root_path;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?_url=$uri&$args;
    }
    location ~* ^/(upload|favicon.png)/(.+)$ {
        root $root_path;
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
        if ($request_method = 'OPTIONS') { return 204; }
    }

    location ~ \.php$ {
        fastcgi_pass   unix:/run/php/php8.3-fpm.sock;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```

### SSL证书
```bash
certbot --nginx
```