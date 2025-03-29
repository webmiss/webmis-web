import{d as s,c as a,a as p,o as t}from"./index-DZw22l5y.js";const o={class:"markdown-body"},c={},h="",d=s({__name:"lnmp",setup(l,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(r,e)=>(t(),a("div",o,e[0]||(e[0]=[p(`<h1>LNMP 环境搭建</h1><h2>Nginx</h2><h4>1) 安装</h4><pre><code class="language-bash">apt install nginx -y
apt autoremove -y
# 查看
systemctl status nginx
</code></pre><h4>2) 配置 ( vi /etc/nginx/nginx.conf )</h4><pre><code class="language-nginx">
    user www-data

    keepalive_timeout 30;

    # Gzip压缩
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 4 8k;
    gzip_min_length 1k;
    gzip_http_version 1.0;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/octet-stream application/pdf image/gif image/jpeg image/png image/x-icon;

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
chmod -R 777 /home/www/index.html
# 重启Nginx
systemctl restart nginx
</code></pre><ul><li>预览: <a href="http://IP/index.html">http://IP/index.html</a></li></ul><h2>MariaDB</h2><h4>1) 安装</h4><pre><code class="language-bash"># 安装
apt install mariadb-server -y
# 开机启动
systemctl status mariadb
# 查看运行
netstat -tap | grep mysql
</code></pre><h4>2) 设置密码</h4><pre><code class="language-bash">mysql_secure_installation
</code></pre><h4>3) 数据库工具</h4><ul><li><a href="https://github.com/vrana/adminer/releases/">Adminer</a></li></ul><h4>4) 允许Root远程访问</h4><pre><code class="language-bash"># 登录
mysql -uroot -p
# 设置权限
GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39;IDENTIFIED BY &#39;登录密码&#39; WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;localhost&#39;IDENTIFIED BY &#39;EC12webmis@&#39; WITH GRANT OPTION;
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
vi /etc/redis.conf
</code></pre><ul><li>远程访问: (1)注释 # bind 127.0.0.1 (2)protected-mode no</li><li>设置密码: requirepass 新密码</li></ul><h2>PHP</h2><h4>1) 安装PHP8</h4><pre><code class="language-bash"># 卸载PHP
sudo apt-get autoremove php7*
sudo find /etc -name &quot;*php*&quot; |xargs  rm -rf
sudo apt purge \`dpkg -l | grep php| awk &#39;{print $2}&#39; |tr &quot;\\n&quot; &quot; &quot;\`
dpkg -l | grep php7.0
# 添加软件库
sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt update
# 安装PHP8.1
sudo apt install php8.1-fpm php8.1-cli php8.1-mysql php8.1-curl php8.1-gd -y
# 安装Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
</code></pre><h4>2) 添加扩展</h4><pre><code class="language-bash"># Redis
sudo apt install php8.1-redis

# Phalcon
curl -s https://packagecloud.io/install/repositories/phalcon/stable/script.deb.sh | sudo bash
apt install php-psr php7.4-phalcon -y
</code></pre><h4>3) PHP配置</h4><pre><code class="language-bash">vi /etc/php/7.4/fpm/php.ini
</code></pre><ul><li>date.timezone = “Asia/Shanghai”</li><li>session.save_path = “/tmp”</li><li></li></ul><h4>4) PHP-FPM配置</h4><pre><code class="language-bash">vi /etc/php/7.4/fpm/pool.d/www.conf
</code></pre><ul><li>user = www-data</li><li>group = www-data</li><li>listen = /run/php/php7.4-fpm.sock</li></ul><h4>5) Session问题</h4><pre><code class="language-bash">chmod -R 777 /var/lib/php/sessions
</code></pre><h4>7) 探针</h4><pre><code class="language-bash">echo &#39;&lt;?php phpinfo(); ?&gt;&#39; &gt; /home/www/phpinfo.php
chmod -R 777 /home/www/phpinfo.php
</code></pre><h4>8) Nginx调用PHP-FPM</h4><p>vi /home/vhosts/default.conf</p><pre><code class="language-bash">    # PHP-FPM
    location ~ \\.php$ {
        #fastcgi_pass   127.0.0.1:9000;
        fastcgi_pass   unix:/run/php/php7.4-fpm.sock;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
</code></pre><p><strong>重启</strong></p><pre><code class="language-bash">systemctl restart nginx
</code></pre>`,46)])))}});export{d as default,h as excerpt,c as frontmatter};
