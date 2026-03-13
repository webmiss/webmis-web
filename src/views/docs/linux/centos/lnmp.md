# LNMP 环境搭建

## Nginx
#### 1) 安装
```bash
# 选择版本
dnf module list nginx
dnf module reset nginx
dnf module enable nginx:1.26
# 安装
dnf install nginx -y
# 开机启动
systemctl enable nginx
systemctl start nginx
```
#### 2) 配置 ( vi /etc/nginx/nginx.conf )
```nginx

user root;                              # 系统用户
worker_processes auto;                  # CPU核心数
worker_rlimit_nofile 65535;             # 最大打开文件数

events {
    worker_connections  10240;          # 最大连接数
    use epoll;                          # Linux专属，并发性能提升数倍
    multi_accept on;                    # 一次性接收所有新连接，减少连接等待
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    client_body_buffer_size 20M;        # 内存缓冲区大小
    client_max_body_size 50M;           # 允许上传文件大小

    # 开启长连接
    keepalive_timeout 75;               # 长连接保持65秒
    keepalive_requests 10000;           # 单个长连接最多处理10000个请求
    tcp_nodelay on;                     # 关闭Nagle算法，减少TCP延迟
    tcp_nopush on;                      # 合并TCP包发送，提升传输效率

    # 提升HTTPS握手速度
    ssl_session_cache shared:SSL:10m;   # 开启SSL会话缓存
    ssl_session_timeout 10m;            # SSL会话缓存有效期
    ssl_protocols TLSv1.3 TLSv1.2;      # 只保留高性能的TLS协议，禁用低版本
    ssl_prefer_server_ciphers on;       # 优先使用服务器端加密套件，提升握手效率
    ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;

    # 限制请求队列，避免过载
    client_header_timeout 10s;
    client_body_timeout 10s;
    send_timeout 10s;

    # 定义缓存区
    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m use_temp_path=off;
    fastcgi_buffer_size 512k;           # 增加单个缓冲区大小
    fastcgi_buffers 8 512k;             # 增加缓冲区数量和大小
    fastcgi_busy_buffers_size 1024k;    # 增加繁忙缓冲区大小
    fastcgi_temp_file_write_size 512k;  # 增加临时文件写入大小

    # 优化Nginx处理性能，减少阻塞
    sendfile        on;
    gzip  on;                           # 开启gzip压缩
    gzip_min_length 10;
    gzip_types text/plain text/css text/javascript application/json application/xml application/javascript application/octet-stream application/pdf image/gif image/jpeg image/png image/svg+xml image/x-icon;

    # 日志-按天
    map $host $root_path {default "";}
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    map $time_iso8601 $logdate {
        '~^(?<ymd>\d{4}-\d{2}-\d{2})' $ymd;
        default 'date-not-found';
    }
    access_log  /var/log/nginx/access-$logdate.log  main;

    # 配置文件
    #include /etc/nginx/conf.d/*.conf;
    include /home/vhosts/*.conf;
}
```
*** 追加内容( vi /etc/sysctl.conf ) ***
```bash
# 提升系统最大打开文件数
fs.file-max = 655350
fs.nr_open = 655350

# TCP连接优化-核心解决TIME_WAIT堆积、端口不足
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 0
net.ipv4.tcp_fin_timeout = 30
net.ipv4.ip_local_port_range = 1024 65535

# TCP队列优化-解决连接排队阻塞
net.ipv4.tcp_max_syn_backlog = 16384
net.core.somaxconn = 16384
net.core.netdev_max_backlog = 16384

# 内存优化-提升TCP缓存
net.core.rmem_default = 262144
net.core.wmem_default = 262144
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
```
- 立即生效: sysctl -p 


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
chown -R nginx:nginx /home/www/index.html
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
# 选择版本
dnf module list mariadb
dnf module reset mariadb
dnf module enable mariadb:10.11
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
```

## Redis
```bash
# 选择版本
dnf module list redis
dnf module reset redis
dnf module enable redis:7
# 安装
dnf install redis -y
# 启动
systemctl enable redis
systemctl start redis
# 远程访问
vi /etc/redis/redis.conf
# 重启
systemctl restart redis
```
- 远程访问: (1)注释 # bind 127.0.0.1  (2)protected-mode no
- 设置密码: requirepass 新密码


## PHP
#### 1) 软件仓库
```bash
# 选择版本
dnf module list php
dnf module reset php
dnf module enable php:8.3
# 其它版本
dnf install http://rpms.remirepo.net/enterprise/remi-release-9.rpm -y
# 查看模块
dnf module list php
dnf module reset php
dnf module enable php:remi-8.4
```

#### 2) 安装PHP
```bash
# PHP8
dnf install php-fpm php-cli php-mysqlnd php-pdo php-gd php-xml php-mbstring php-opcache -y
# 查看模块
php -m
# 启动
systemctl enable php-fpm
systemctl start php-fpm
```

#### 3) 添加扩展
```bash
# Redis
dnf install php-pecl-redis6 -y
# Pecl
dnf install php-pear php-devel -y
# 查看模块
php -m
```
#### Phalcon
```bash
pecl install psr
pecl install phalcon
# 配置文件
vi /etc/php.d/50-phalcon.ini
```
- extension=psr
- extension=phalcon
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
chown -R nginx:nginx /var/lib/php/session
chown -R nginx:nginx /var/opt/remi/php83/lib/php/session
```

#### 7) 探针
```bash
echo '<?php phpinfo(); ?>' > /home/www/phpinfo.php
chown -R nginx:nginx /home/www/phpinfo.php
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
