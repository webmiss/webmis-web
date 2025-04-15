# LNMP 环境搭建

## Nginx
#### 1) 安装
```bash
dnf install nginx -y
# 开机启动
systemctl enable nginx
systemctl start nginx
```
#### 2) 配置 ( vi /etc/nginx/nginx.conf )
```nginx

    user root

    keepalive_timeout 30;
    client_body_buffer_size 2048k;

    # 定义缓存区
    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m use_temp_path=off;

    # Gzip压缩
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_min_length 1k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/octet-stream application/pdf image/gif image/jpeg image/png image/svg+xml image/x-icon;

    #include /etc/nginx/conf.d/*.conf;
    include /home/vhosts/*.conf;
```

#### 3) 虚拟主机
```bash
# 创建目录
mkdir -p /home/vhosts
# 编辑配置文件
vi /home/vhosts/default.conf
```
**文件内容**
```nginx
server {
    listen       80 default_server;
    listen       [::]:80 default_server;
    server_name  _;
    root         /home/www/;
    index index.html;

    location / {
        # 使用缓存
        proxy_cache my_cache;
        proxy_cache_valid 200 302 6h;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 1m;
        expires 30d;
        # 添加缓存控制头
        add_header X-Proxy-Cache $upstream_cache_status;
    }

    error_page 404 /404.html;
    location = /40x.html {
    }
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }
}
```

#### 4) 测试( http://IP/index.html )
```bash
# 创建文件
mkdir -p /home/www
echo '<h1>WebMIS</h1>' > /home/www/index.html
chmod -R 777 /home/www/index.html
# 重启Nginx
systemctl restart nginx
```

#### 5) Nginx 系统环境变量( vi /etc/nginx/fastcgi_params )
```bash
fastcgi_param   OSS_ACCESS_KEY_ID       xxx;
fastcgi_param   OSS_ACCESS_KEY_SECRET   xxx;
# 重启服务
systemctl reload nginx
```
<br/>

## MariaDB
#### 1) 安装
```bash
# 安装
dnf install mariadb mariadb-server -y
# 开机启动
systemctl enable mariadb
systemctl start mariadb
# 查看运行
netstat -tap | grep mysql
```
#### 2) 设置密码
```bash
mysql_secure_installation
```
#### 3) 数据库工具
- [Adminer](https://github.com/vrana/adminer/releases/)

#### 4) 允许Root远程访问
```bash
# 登录
mysql -uroot -p
# 设置权限
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'IDENTIFIED BY '登录密码' WITH GRANT OPTION;
# 刷新
flush privileges;
```

## Redis
```bash
# 安装
dnf install redis -y
# 启动
systemctl enable redis
systemctl start redis
# 远程访问
vi /etc/redis/redis.conf
```
- 远程访问: (1)注释 # bind 127.0.0.1  (2)protected-mode no
- 设置密码: requirepass 新密码


## PHP
#### 1) 软件仓库
```bash
dnf install http://rpms.remirepo.net/enterprise/remi-release-9.rpm -y
```

#### 2) 安装PHP
```bash
# PHP8
dnf install php-fpm php-cli php-mysqlnd php-pdo php-gd php-xml php-mbstring php-opcache -y
# PHP8.3
dnf install php83-php-fpm php83-php-cli php83-php-mysqlnd php83-php-pdo php83-php-gd php83-php-xml php83-php-mbstring -y
# 查看模块
php -m
# 启动
systemctl enable php-fpm
systemctl start php-fpm
systemctl enable php83-php-fpm
systemctl start php83-php-fpm
```

#### 3) 添加扩展
```bash
# Redis
dnf install php-pecl-redis5 -y
dnf install php83-php-pecl-redis6 -y
# Pecl
dnf install php-pear php-devel -y
# 查看模块
php -m
```
#### Swoole
```bash
pecl install swoole
# 配置文件
vi /etc/php.d/50-swoole.ini
```
- ; Enable swoole extension module
- extension = swoole.so


#### 4) PHP配置
```bash
vi /etc/php.ini
vi /etc/opt/remi/php83/php.ini

```
- date.timezone = "Asia/Shanghai"
- session.save_path = "/tmp"

#### 5) PHP-FPM配置
```bash
vi /etc/php-fpm.d/www.conf
vi /etc/opt/remi/php83/php-fpm.d/www.conf
```
- user = nginx
- group = nginx
- listen = /run/php-fpm/www.sock
- listen = /var/opt/remi/php83/run/php-fpm/www.sock
#### 强制定期重启子进程
- pm.max_requests = 1000                    # 每处理1000请求后重启‌
- slowlog = /var/log/php-fpm/slow.log
- request_slowlog_timeout = 10s             # 记录超过10秒的请求‌
#### Opcache
```bash
/etc/php.d/10-opcache.ini
```
- opcache.enable=1
- opcache.memory_consumption=2048
- opcache.max_accelerated_files=10000

#### 6) Session问题
```bash
chmod -R 777 /var/lib/php/session
chmod -R 777 /var/opt/remi/php83/lib/php/session
```

#### 7) 探针
```bash
echo '<?php phpinfo(); ?>' > /home/www/phpinfo.php
chmod -R 774 /home/www/phpinfo.php
```

#### 8) Nginx调用PHP-FPM
vi /home/vhosts/default.conf
```bash
    # PHP-FPM
    location ~ \.php$ {
        #fastcgi_pass   127.0.0.1:9000;
        fastcgi_pass   unix:/run/php-fpm/www.sock;
        #fastcgi_pass   unix:/var/opt/remi/php83/run/php-fpm/www.sock;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
```
**重启**
```bash
systemctl restart nginx
```

<br/><br/>
