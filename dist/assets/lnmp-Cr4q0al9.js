import{d as s,c as o,a,o as p}from"./index-CBd8jn0T.js";const c={class:"markdown-body"},r={},h="",d=s({__name:"lnmp",setup(t,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(l,n)=>(p(),o("div",c,n[0]||(n[0]=[a(`<h2>安装Nginx</h2><pre><code class="language-bash">pacman -S nginx
systemctl start nginx
</code></pre><p><strong>配置</strong>( /etc/nginx/nginx.conf )</p><pre><code class="language-bash"> # 403拒绝访问问题
user root;  #必须Root
http {
	keepalive_timeout  65;

	#gzip  on;

	#vhost
	include /home/webmis/works/vhosts/*.conf;

	# 导入数据库文件限制
	client_max_body_size 150m;
}
</code></pre><br><h2>安装MariaDB</h2><pre><code class="language-bash">pacman -S mariadb
mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
systemctl start mysqld
</code></pre><p><strong>设置root密码</strong></p><pre><code class="language-bash">mysql_secure_installation
</code></pre><p><strong>允许远程访问</strong></p><pre><code class="language-bash">mysql -u root -p
GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39;IDENTIFIED BY &#39;123456&#39; WITH GRANT OPTION;
flush privileges;
</code></pre><br><h2>安装PHP</h2><pre><code class="language-bash">pacman -S php-fpm
systemctl start php-fpm
</code></pre><h4>1) 配置PHP( /etc/php/php.ini )</h4><pre><code class="language-bash"># CGI
cgi.fix_pathinfo=0
# 数据库
extension=mysqli
extension=pdo_mysql
# 时区
date.timezone = &quot;Asia/Shanghai&quot;
# 加速 PHP
zend_extension=opcache
opcache.enable=1
opcache.enable_cli=1
opcache.file_cache=/tmp
</code></pre><h4>2) 配置PHP-FPM( vi /etc/php/php-fpm.d/www.conf )</h4><pre><code class="language-bash"># 系统用户
user = webmis #系统账户
group = webmis  #账户组名
# 链接方式( 文件、TCP )
listen = /run/php-fpm/php-fpm.sock
;listen = 127.0.0.1:9000
</code></pre><h4>3) 扩展</h4><pre><code class="language-bash"># Composer
pacman -S composer
# Pecl
yay -S php-pear base-devel
pecl channel-update pecl.php.net
# Redis
pacman -S redis php-redis
</code></pre><h4>Phalcon</h4><pre><code class="language-bash">pecl install phalcon
# 配置文件
vi /etc/php/conf.d/phalcon.ini
</code></pre><ul><li>extension=psr</li><li>extension=phalcon</li></ul><h4>Swoole</h4><pre><code class="language-bash">pecl install swoole
# 配置文件
vi /etc/php/conf.d/swoole.ini
</code></pre><ul><li>; Enable swoole extension module</li><li>extension=swoole</li></ul><br><h2>虚拟主机</h2><pre><code class="language-bash">mkdir -p /home/webmis/works/vhosts/
vi /home/webmis/vhosts/webmis.conf
</code></pre><p><strong>文件内容</strong></p><pre><code class="language-bash"># nginx
server {
	listen 80 default_server;
	server_name localhost;
	root &#39;/home/webmis/www/&#39;;
	index index.php index.html;

	# 目录预览
	autoindex on;
	autoindex_exact_size off;
	autoindex_localtime on;

	location /{
	}

	# PHP
	location ~ \\.php$ {
		fastcgi_pass   unix:/run/php-fpm/php-fpm.sock;
		#fastcgi_pass 127.0.0.1:9000;
		fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
		include        fastcgi_params;
	}
	# deny access to .htaccess files, if Apache&#39;s document root
	location ~ /\\.ht {
		deny all;
	}

}
</code></pre><p><br><br></p>`,32)])))}});export{d as default,h as excerpt,r as frontmatter};
