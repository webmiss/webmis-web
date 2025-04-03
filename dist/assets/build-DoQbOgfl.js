import{d as a,c as o,a as r,o as t}from"./index-YZy2HEBW.js";const s={class:"markdown-body"},l={},h="",i=a({__name:"build",setup(p,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(c,e)=>(t(),o("div",s,e[0]||(e[0]=[r(`<h1>服务器环境</h1><h2>JRE</h2><pre><code class="language-bash"># CentOS
dnf install java-latest-openjdk -y
# Ubuntu
apt install openjdk-17-jre -y
# 查看版本
java --version
</code></pre><h2>运行</h2><pre><code class="language-bash"># 进入项目
cd /xxx/java
mkdir public/upload
chmod -R 777 public/upload
# 启动
./bash start
</code></pre><h2>开机启动</h2><pre><code class="language-bash"># 权限
chmod +x /etc/rc.d/rc.local
# 编辑文件
vi /etc/rc.d/rc.local
</code></pre><ul><li>cd /xxx/java/ &amp;&amp; ./bash start</li></ul><br><h2>Nginx</h2><pre><code class="language-nginx">upstream java {
    server localhost:9020;
}
map $http_upgrade $connection_upgrade {
    default upgrade;
    &#39;&#39; close;
}

server {
    listen       80;
    listen       [::]:80;
    server_name  java.webmis.vip;
    set $root_path /home/www/base/java/public;
    root $root_path;
    index index.html;

    charset utf-8;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://java;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }

    location ~* ^/(upload|favicon.png)/(.+)$ {
        root $root_path;
    }

}
</code></pre><h2>SSL证书</h2><pre><code class="language-bash">certbot --nginx
</code></pre><p><br><br></p>`,14)])))}});export{i as default,h as excerpt,l as frontmatter};
