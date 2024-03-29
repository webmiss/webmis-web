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
dnf install php-fpm php-cli php-mysqlnd php-pdo php-gd php-xml php-mbstring -y
# 查看模块
php -m
# 启动
systemctl enable php-fpm
systemctl start php-fpm
```

#### 3) 添加扩展
```bash
# Phalcon
dnf install php-phalcon5 -y
# Redis
dnf install php-pecl-redis5 -y
# 查看模块
php -m
```

#### 4) PHP配置
```bash
vi /etc/php.ini
```
- date.timezone = "Asia/Shanghai"
- session.save_path = "/tmp"

#### 5) PHP-FPM配置
```bash
vi /etc/php-fpm.d/www.conf
```
- user = nginx
- group = nginx
- listen = /run/php-fpm/www.sock
#### 进程数
- pm = static
- pm.max_children = 256

#### 6) Session问题
```bash
chmod -R 777 /var/lib/php/session
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
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
```
**重启**
```bash
systemctl restart nginx
```

<br/><br/>
