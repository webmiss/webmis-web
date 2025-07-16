# LNMP 环境搭建

## Nginx
#### 1) 安装
```bash
apt install nginx -y
apt autoremove -y
# 查看
systemctl status nginx
```
#### 2) 配置 ( vi /etc/nginx/nginx.conf )
```nginx

    user www-data

    keepalive_timeout 30;
    client_body_buffer_size 2048k;

    # 日志-按天
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    map $time_iso8601 $logdate {
        '~^(?<ymd>\d{4}-\d{2}-\d{2})' $ymd;
        default 'date-not-found';
    }
    access_log  /var/log/nginx/access-$logdate.log  main;

    # Gzip压缩
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_min_length 1k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/octet-stream application/pdf image/gif image/jpeg image/png image/x-icon;

    # 定义缓存区
    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m use_temp_path=off;

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

#### 4) 测试
```bash
# 创建文件
mkdir -p /home/www
echo '<h1>WebMIS</h1>' > /home/www/index.html
chown -R www-data:www-data /home/www/index.html
# 重启Nginx
systemctl restart nginx
```
- 预览: http://IP/index.html


## MariaDB
#### 1) 安装
```bash
# 安装
apt install mariadb-server -y
# 查看
systemctl status mariadb
# 查看运行
netstat -tap | grep mysql
```
#### 2) 设置密码
```bash
mysql_secure_installation
```
- Enter current password for root (enter for none): enter
- Switch to unix_socket authentication: Y
- Change the root password?: Y
- Remove anonymous users?: Y
- Disallow root login remotely?: Y
- Remove test database and access to it?: Y
- Reload privilege tables now?: Y

#### 3) 数据库工具( https://www.adminer.org/en/ )
```bash
# 上传到服务器
scp adminer.php root@webmis.vip:/home/www/
# 访问权限
chown -R nginx:nginx /home/www/adminer.php
```

#### 4) 允许Root远程访问
```bash
# 登录
mysql -uroot -p
# 设置权限
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'IDENTIFIED BY '登录密码' WITH GRANT OPTION;
# 刷新
flush privileges;
# 查看
select user,host,password from mysql.user;
# 修改配置
vi /etc/mysql/mariadb.conf.d/50-server.cnf
```
- 修改"bind-address = 0.0.0.0"
- 重启服务"systemctl restart mariadb"


## Redis
```bash
# 安装
apt install redis-server -y
# 查看
systemctl status redis
# 远程访问
vi /etc/redis/redis.conf
# 重启
systemctl restart redis
```
- 远程访问: (1)注释 # bind 127.0.0.1  (2)protected-mode no
- 设置密码: requirepass 新密码


## PHP
#### 1) 安装PHP8
```bash
# 安装PHP8.3
apt install php-fpm php-cli php-mysql php-gd php-xml php-mbstring -y
# 安装Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```
#### 2) 添加扩展
```bash
# Redis
sudo apt install php-redis

# Phalcon
curl -s https://packagecloud.io/install/repositories/phalcon/stable/script.deb.sh | sudo bash
apt install php-psr php8.3-phalcon -y
```

#### 3) PHP配置
```bash
vi /etc/php/8.3/fpm/php.ini
```
- date.timezone = "Asia/Shanghai"
- session.save_path = "/tmp"
- 

#### 4) PHP-FPM配置
```bash
vi /etc/php/8.3/fpm/pool.d/www.conf
```
- user = www-data
- group = www-data
- listen = /run/php/php8.3-fpm.sock

#### 5) Session问题
```bash
chmod -R 777 /var/lib/php/sessions
```

#### 7) 探针
```bash
echo '<?php phpinfo(); ?>' > /home/www/phpinfo.php
chown -R www-data:www-data /home/www/phpinfo.php
```

#### 8) Nginx调用PHP-FPM
vi /home/vhosts/default.conf
```bash
    # PHP-FPM
    location ~ \.php$ {
        fastcgi_pass   unix:/run/php/php8.3-fpm.sock;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
```
**重启**
```bash
systemctl restart nginx
```