import{d as t,c as s,H as a,o}from"./vendor-oTex03eR.js";const i={class:"markdown-body"},c={},h="",d=t({__name:"lnmp",setup(l,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(p,e)=>(o(),s("div",i,e[0]||(e[0]=[a(`<h1>LNMP 环境搭建</h1><h2>Nginx</h2><h4>1) 安装</h4><pre><code class="language-bash">apt install nginx -y
apt autoremove -y
# 查看
systemctl status nginx
</code></pre><h4>2) 配置 ( vi /etc/nginx/nginx.conf )</h4><pre><code class="language-nginx">user www-data
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
    map $host $root_path {default &quot;&quot;;}
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
    map $time_iso8601 $logdate {
        &#39;~^(?&lt;ymd&gt;\\d{4}-\\d{2}-\\d{2})&#39; $ymd;
        default &#39;date-not-found&#39;;
    }
    access_log  /var/log/nginx/access-$logdate.log  main;

    # 配置文件
    #include /etc/nginx/conf.d/*.conf;
    include /home/vhosts/*.conf;
}
</code></pre><p>*** 追加内容( vi /etc/sysctl.conf ) ***</p><pre><code class="language-bash"># 提升系统最大打开文件数
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
</code></pre><ul><li>立即生效: sysctl -p</li></ul><h4>3) 虚拟主机</h4><pre><code class="language-bash"># 创建目录
mkdir -p /home/vhosts
# 编辑配置文件
vi /home/vhosts/default.conf
</code></pre><p><strong>文件内容</strong></p><pre><code class="language-nginx">server {
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
</code></pre><h4>4) 测试</h4><pre><code class="language-bash"># 创建文件
mkdir -p /home/www
echo &#39;&lt;h1&gt;WebMIS&lt;/h1&gt;&#39; &gt; /home/www/index.html
chown -R www-data:www-data /home/www/index.html
# 重启Nginx
systemctl restart nginx
</code></pre><ul><li>预览: <a href="http://IP/index.html">http://IP/index.html</a></li></ul><h2>MariaDB</h2><h4>1) 安装</h4><pre><code class="language-bash"># 安装
apt install mariadb-server -y
# 查看
systemctl status mariadb
# 查看运行
netstat -tap | grep mysql
</code></pre><h4>2) 设置密码</h4><pre><code class="language-bash">mysql_secure_installation
</code></pre><ul><li>Enter current password for root (enter for none): enter</li><li>Switch to unix_socket authentication: Y</li><li>Change the root password?: Y</li><li>Remove anonymous users?: Y</li><li>Disallow root login remotely?: Y</li><li>Remove test database and access to it?: Y</li><li>Reload privilege tables now?: Y</li></ul><h4>3) 数据库工具( <a href="https://www.adminer.org/en/">https://www.adminer.org/en/</a> )</h4><pre><code class="language-bash"># 上传到服务器
scp adminer.php root@webmis.vip:/home/www/
# 访问权限
chown -R nginx:nginx /home/www/adminer.php
</code></pre><h4>4) 允许Root远程访问</h4><pre><code class="language-bash"># 登录
mysql -uroot -p
# 设置权限
GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39;IDENTIFIED BY &#39;登录密码&#39; WITH GRANT OPTION;
# 刷新
flush privileges;
# 查看
select user,host,password from mysql.user;
# 修改配置
vi /etc/mysql/mariadb.conf.d/50-server.cnf
</code></pre><ul><li>修改&quot;bind-address = 0.0.0.0&quot;</li><li>重启服务&quot;systemctl restart mariadb&quot;</li></ul><h2>Redis</h2><pre><code class="language-bash"># 安装
apt install redis-server -y
# 查看
systemctl status redis
# 远程访问
vi /etc/redis/redis.conf
# 重启
systemctl restart redis
</code></pre><ul><li>远程访问: (1)注释 # bind 127.0.0.1 (2)protected-mode no</li><li>设置密码: requirepass 新密码</li></ul><h2>PHP</h2><h4>1) 安装PHP8</h4><pre><code class="language-bash"># 安装PHP8.3
apt install php-fpm php-cli php-mysql php-gd php-xml php-mbstring -y
# 安装Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
</code></pre><h4>2) 添加扩展</h4><pre><code class="language-bash"># Redis
sudo apt install php-redis

# Phalcon
curl -s https://packagecloud.io/install/repositories/phalcon/stable/script.deb.sh | sudo bash
apt install php-psr php8.3-phalcon -y
</code></pre><h4>3) PHP配置</h4><pre><code class="language-bash">vi /etc/php/8.3/fpm/php.ini
</code></pre><ul><li>date.timezone = “Asia/Shanghai”</li><li>session.save_path = “/tmp”</li><li></li></ul><h4>4) PHP-FPM配置</h4><pre><code class="language-bash">vi /etc/php/8.3/fpm/pool.d/www.conf
</code></pre><ul><li>user = www-data</li><li>group = www-data</li><li>listen = /run/php/php8.3-fpm.sock</li></ul><h4>5) Session问题</h4><pre><code class="language-bash">chmod -R 777 /var/lib/php/sessions
</code></pre><h4>7) 探针</h4><pre><code class="language-bash">echo &#39;&lt;?php phpinfo(); ?&gt;&#39; &gt; /home/www/phpinfo.php
chown -R www-data:www-data /home/www/phpinfo.php
</code></pre><h4>8) Nginx调用PHP-FPM</h4><p>vi /home/vhosts/default.conf</p><pre><code class="language-bash">    # PHP-FPM
    location ~ \\.php$ {
        fastcgi_pass   unix:/run/php/php8.3-fpm.sock;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
</code></pre><p><strong>重启</strong></p><pre><code class="language-bash">systemctl restart nginx
</code></pre>`,50)])))}});export{d as default,h as excerpt,c as frontmatter};
