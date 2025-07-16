import{d as a,c as t,a as s,o}from"./index-BNT8ip_b.js";const p={class:"markdown-body"},c={},h="",d=a({__name:"lnmp",setup(i,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(l,e)=>(o(),t("div",p,e[0]||(e[0]=[s(`<h1>LNMP 环境搭建</h1><h2>Nginx</h2><h4>1) 安装</h4><pre><code class="language-bash">apt install nginx -y
apt autoremove -y
# 查看
systemctl status nginx
</code></pre><h4>2) 配置 ( vi /etc/nginx/nginx.conf )</h4><pre><code class="language-nginx">
    user www-data

    keepalive_timeout 30;
    client_body_buffer_size 2048k;

    # 日志-按天
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
    map $time_iso8601 $logdate {
        &#39;~^(?&lt;ymd&gt;\\d{4}-\\d{2}-\\d{2})&#39; $ymd;
        default &#39;date-not-found&#39;;
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
</code></pre>`,47)])))}});export{d as default,h as excerpt,c as frontmatter};
