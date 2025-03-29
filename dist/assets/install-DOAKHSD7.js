import{d as s,c as r,a,o}from"./index-DZw22l5y.js";const l={class:"markdown-body"},h={},c="",d=s({__name:"install",setup(t,{expose:p}){return p({frontmatter:{},excerpt:void 0}),(i,e)=>(o(),r("div",l,e[0]||(e[0]=[a(`<h1>Phalcon开发环境</h1><h2>ArchLinux</h2><h4>1) 安装Git</h4><pre><code class="language-bash">pacman -S git
</code></pre><h4>2) 安装PHP7</h4><pre><code class="language-bash">pacman -S php php-fpm php-gd
# 查看
php -v
# 安装Composer
pacman -S composer
# 国内镜像
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
</code></pre><h4>3) 安装MariaDB</h4><pre><code class="language-bash">pacman -S mariadb
# 启动
systemctl start mysqld
</code></pre><h4>4) 安装Redis</h4><pre><code class="language-bash">pacman -S redis php-redis
# 启动
systemctl start redis
</code></pre><h4>5) Phalcon框架</h4><pre><code class="language-bash">pacman -S yay
yay -S php-phalcon
</code></pre><br><h2>Windows</h2><h4>1) 安装Git</h4><ul><li>下载 <a href="https://git-scm.com/download/win">Git</a></li><li>安装: 64位版 &gt; 重启系统</li><li>VsCode: “ctrl+\`” &gt; “终端” &gt; “powershell” &gt; “选择默认 shell” &gt; “Git Bash” &gt; 重启</li><li>终端输入: “cmd” 和 “bash” 可相互切换</li></ul><h4>2) 安装PHP7</h4><ul><li><a href="https://windows.php.net/download#php-7.4">PHP7.4</a></li><li>解压: “php-7.4.13-nts-Win32-vc15-x64.zip” 到 “D:\\server\\php”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “D:\\server\\php”</li><li>配置: “D:\\server\\php\\php.ini” , 如果没有复制&quot;php.ini-development&quot;或&quot;php.ini-production&quot;</li><li>扩展目录: extension_dir = “D:/server/php/ext”</li><li>CMD: php -v <strong>安装Composer</strong></li><li><a href="https://getcomposer.org/Composer-Setup.exe">Composer</a></li></ul><h3>3) 安装MariaDB</h3><ul><li><a href="https://downloads.mariadb.org/">MariaDB</a></li><li>安装: “mariadb-10.5.9-winx64.msi” 到 “D:\\server\\MariaDB”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “D:\\server\\MariaDB\\bin”</li><li>扩展: “extension=mysqli” 和 “extension=pdo_mysql”</li><li>CMD: php -m</li><li>PHP数据库工具: <a href="https://github.com/vrana/adminer/releases/">Adminer</a></li></ul><h4>4) 安装Redis</h4><ul><li><a href="https://github.com/MicrosoftArchive/redis/releases">Redis</a> 、<a href="http://pecl.php.net/package/redis/5.3.2/windows">php-redis</a></li><li>解压: “Redis-x64-3.2.100.zip” 到 “D:\\server\\redis”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “D:\\server\\redis”</li><li>启动: “redis-server”</li><li>解压: “php_redis.dll” 到 “D:\\server\\php\\ext”</li><li>扩展: “extension=redis”</li><li>CMD: php -m</li></ul><h4>5) Phalcon框架</h4><ul><li><a href="https://windows.php.net/download#php-7.4">Phalcon4</a> 、<a href="https://pecl.php.net/package/psr/1.0.1/windows">php-psr</a></li><li>解压: “php_phalcon.dll” 到 “D:\\server\\php\\ext”</li><li>解压: “php_psr.dll” 到 “D:\\server\\php\\ext”</li><li>扩展: “extension=psr” 和 “extension=phalcon”</li><li>CMD: php -m</li></ul><br><h2>MacOS</h2><h4>1) 安装Git</h4><pre><code class="language-bash">git
</code></pre><h4>2) 安装PHP7</h4><pre><code class="language-bash">php
# 查看
php -v
# 安装Composer
php -r &quot;copy(&#39;https://install.phpcomposer.com/installer&#39;, &#39;composer-setup.php&#39;);&quot;
php composer-setup.php
</code></pre><h4>3) 安装MacPorts</h4><ul><li>下载: <a href="https://www.macports.org/install.php">MacPorts</a></li><li>查看: “port version” <strong>环境变量</strong>( sudo vi /etc/profile )</li></ul><pre><code class="language-bash">export PATH=/opt/local/bin:$PATH
export PATH=/opt/local/sbin:$PATH
</code></pre><p><strong>清华镜像源</strong>( sudo vi /opt/local/etc/macports/macports.conf )</p><pre><code class="language-bash">rsync_server        mirrors.tuna.tsinghua.edu.cn
rsync_dir           macports/release/base/
</code></pre><p><strong>sudo vi /opt/local/etc/macports/sources.conf</strong></p><pre><code class="language-bash">rsync://mirrors.tuna.tsinghua.edu.cn/macports/release/ports/ [default]
</code></pre><p><strong>刷新</strong></p><pre><code class="language-bash">sudo port -v sync
sudo port -v selfupdate
</code></pre><h4>4) Phalcon框架</h4><pre><code class="language-bash">sudo port install php73-phalcon4
</code></pre><p><br><br></p>`,42)])))}});export{d as default,c as excerpt,h as frontmatter};
