import{d as p,c as a,a as s,o as l}from"./index-5_hhwz4s.js";const i={class:"markdown-body"},c={},r="",m=p({__name:"lnmp",setup(t,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(o,e)=>(l(),a("div",i,e[0]||(e[0]=[s(`<h1>LNMP 环境搭建</h1><h2>Nginx</h2><h4>1) 安装</h4><pre><code class="language-bash">dnf install nginx -y
# 开机启动
systemctl enable nginx
systemctl start nginx
</code></pre><h4>2) 配置 ( vi /etc/nginx/nginx.conf )</h4><pre><code class="language-nginx">
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
</code></pre><h4>3) 虚拟主机</h4><pre><code class="language-bash"># 创建目录
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
</code></pre><h4>4) 测试( <a href="http://IP/index.html">http://IP/index.html</a> )</h4><pre><code class="language-bash"># 创建文件
mkdir -p /home/www
echo &#39;&lt;h1&gt;WebMIS&lt;/h1&gt;&#39; &gt; /home/www/index.html
chmod -R 777 /home/www/index.html
# 重启Nginx
systemctl restart nginx
</code></pre><h4>5) Nginx 系统环境变量( vi /etc/nginx/fastcgi_params )</h4><pre><code class="language-bash">fastcgi_param   OSS_ACCESS_KEY_ID       xxx;
fastcgi_param   OSS_ACCESS_KEY_SECRET   xxx;
# 重启服务
systemctl reload nginx
</code></pre><br><h2>MariaDB</h2><h4>1) 安装</h4><pre><code class="language-bash"># 安装
dnf install mariadb mariadb-server -y
# 开机启动
systemctl enable mariadb
systemctl start mariadb
# 查看运行
netstat -tap | grep mysql
</code></pre><h4>2) 设置密码</h4><pre><code class="language-bash">mysql_secure_installation
</code></pre><h4>3) 数据库工具</h4><ul><li><a href="https://github.com/vrana/adminer/releases/">Adminer</a></li></ul><h4>4) 允许Root远程访问</h4><pre><code class="language-bash"># 登录
mysql -uroot -p
# 设置权限
GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39;IDENTIFIED BY &#39;登录密码&#39; WITH GRANT OPTION;
# 刷新
flush privileges;
</code></pre><h2>Redis</h2><pre><code class="language-bash"># 安装
dnf install redis -y
# 启动
systemctl enable redis
systemctl start redis
# 远程访问
vi /etc/redis/redis.conf
</code></pre><ul><li>远程访问: (1)注释 # bind 127.0.0.1 (2)protected-mode no</li><li>设置密码: requirepass 新密码</li></ul><h2>PHP</h2><h4>1) 软件仓库</h4><pre><code class="language-bash">dnf install http://rpms.remirepo.net/enterprise/remi-release-9.rpm -y
</code></pre><h4>2) 安装PHP</h4><pre><code class="language-bash"># PHP8
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
</code></pre><h4>3) 添加扩展</h4><pre><code class="language-bash"># Redis
dnf install php-pecl-redis5 -y
dnf install php83-php-pecl-redis6 -y
# Pecl
dnf install php-pear php-devel -y
# 查看模块
php -m
</code></pre><h4>Swoole</h4><pre><code class="language-bash">pecl install swoole
# 配置文件
vi /etc/php.d/50-swoole.ini
</code></pre><ul><li>; Enable swoole extension module</li><li>extension = swoole.so</li></ul><h4>4) PHP配置</h4><pre><code class="language-bash">vi /etc/php.ini
vi /etc/opt/remi/php83/php.ini

</code></pre><ul><li>date.timezone = “Asia/Shanghai”</li><li>session.save_path = “/tmp”</li></ul><h4>5) PHP-FPM配置</h4><pre><code class="language-bash">vi /etc/php-fpm.d/www.conf
vi /etc/opt/remi/php83/php-fpm.d/www.conf
</code></pre><ul><li>user = nginx</li><li>group = nginx</li><li>listen = /run/php-fpm/www.sock</li><li>listen = /var/opt/remi/php83/run/php-fpm/www.sock</li></ul><h4>强制定期重启子进程</h4><ul><li>pm.max_requests = 1000 # 每处理1000请求后重启‌</li><li>slowlog = /var/log/php-fpm/slow.log</li><li>request_slowlog_timeout = 10s # 记录超过10秒的请求‌</li></ul><h4>Opcache</h4><pre><code class="language-bash">/etc/php.d/10-opcache.ini
</code></pre><ul><li>opcache.enable=1</li><li>opcache.memory_consumption=2048</li><li>opcache.max_accelerated_files=10000</li></ul><h4>6) Session问题</h4><pre><code class="language-bash">chmod -R 777 /var/lib/php/session
chmod -R 777 /var/opt/remi/php83/lib/php/session
</code></pre><h4>7) 探针</h4><pre><code class="language-bash">echo &#39;&lt;?php phpinfo(); ?&gt;&#39; &gt; /home/www/phpinfo.php
chmod -R 774 /home/www/phpinfo.php
</code></pre><h4>8) Nginx调用PHP-FPM</h4><p>vi /home/vhosts/default.conf</p><pre><code class="language-bash">    # PHP-FPM
    location ~ \\.php$ {
        #fastcgi_pass   127.0.0.1:9000;
        fastcgi_pass   unix:/run/php-fpm/www.sock;
        #fastcgi_pass   unix:/var/opt/remi/php83/run/php-fpm/www.sock;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
</code></pre><p><strong>重启</strong></p><pre><code class="language-bash">systemctl restart nginx
</code></pre><p><br><br></p>`,58)])))}});export{m as default,r as excerpt,c as frontmatter};
