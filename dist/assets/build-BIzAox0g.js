import{d as o,c as t,a,o as r}from"./index-B-lAKudI.js";const s={class:"markdown-body"},l={},_="",h=o({__name:"build",setup(p,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(d,e)=>(r(),t("div",s,e[0]||(e[0]=[a(`<h1>服务器环境</h1><h2>安装Go</h2><pre><code class="language-bash"># CentOS
dnf install golang -y
# Ubunut
apt install golang -y
# 查看版本
go version
</code></pre><h2>运行</h2><pre><code class="language-bash"># 进入项目
cd /xxx/gin
mkdir public/upload
chmod -R 777 public/upload
# 安装依赖包
./bash install
# 打包
./bash build
# 启动
./bash start
</code></pre><h2>开机启动</h2><pre><code class="language-bash"># 权限
chmod +x /etc/rc.d/rc.local
# 编辑文件
vi /etc/rc.d/rc.local
</code></pre><ul><li>cd /xxx/java/ &amp;&amp; ./bash start</li></ul><br><h2>Nginx虚拟主机</h2><pre><code class="language-nginx">upstream go {
    server localhost:9030;
}
upstream go_websocket {
    server localhost:9031;
}
map $http_upgrade $connection_upgrade {
    default upgrade;
    &#39;&#39; close;
}

server {
    listen       80;
    listen       [::]:80;
    server_name  go.webmis.vip;
    set $root_path /home/www/base/gin/public;
    root $root_path;
    index index.html;

    charset utf-8;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://go;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }

    location ~* ^/(upload|favicon.png)/(.+)$ {
        root $root_path;
    }

    location /wss {
        proxy_pass http://go_websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection &quot;Upgrade&quot;;
        proxy_set_header Connection &quot;keep-alive&quot;;
        proxy_set_header X-Real-IP $remote_addr;
    }

}
</code></pre><h2>SSL证书</h2><pre><code class="language-bash">certbot --nginx
</code></pre><p><br><br></p>`,14)])))}});export{h as default,_ as excerpt,l as frontmatter};
