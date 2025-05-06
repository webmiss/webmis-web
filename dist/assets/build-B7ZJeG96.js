import{d as t,c as o,a as s,o as a}from"./index-CBd8jn0T.js";const r={class:"markdown-body"},l={},h="",d=t({__name:"build",setup(p,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(c,n)=>(a(),o("div",r,n[0]||(n[0]=[s(`<h1>服务器环境</h1><h2>CentOS</h2><pre><code class="language-bash"># Python3
dnf install python3-devel -y
pip3 install uwsgi
# 命令
ln -s /usr/bin/python3 /usr/bin/python
ln -s /usr/bin/pip3 /usr/bin/pip
# 查看版本
python -V
</code></pre><h2>Ubuntu</h2><pre><code class="language-bash">apt install python3-dev -y
pip install uwsgi
</code></pre><h2>运行</h2><pre><code class="language-bash"># 进入项目
cd /xxx/python
mkdir public/upload
chmod -R 777 public/upload
# 依赖包
./bash install
# 启动
./bash start
</code></pre><h2>开机启动</h2><pre><code class="language-bash"># 权限
chmod +x /etc/rc.d/rc.local
# 编辑文件
vi /etc/rc.d/rc.local
</code></pre><ul><li>cd /xxx/python/ &amp;&amp; ./bash start</li></ul><br><h2>Nginx虚拟主机</h2><pre><code class="language-nginx">upstream flask {
    server unix:///home/www/base/python/tmp/web.sock;
}
upstream python_websocket {
    server 127.0.0.1:9011;
}

server {
    listen       80;
    listen       [::]:80;
    server_name  python.webmis.vip;
    set $root_path /home/www/base/python/public;
    root $root_path;
    index index.html;

    charset utf-8;

    location / {
        uwsgi_pass  flask;
        uwsgi_send_timeout 60;
        uwsgi_connect_timeout 60;
        uwsgi_read_timeout 60;
        include /etc/nginx/uwsgi_params;
    }
    location ~* ^/(upload|favicon.png)/(.+)$ {
        root $root_path;
    }
    location /wss {
        proxy_pass http://python_websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection &quot;Upgrade&quot;;
        proxy_set_header Connection &quot;keep-alive&quot;;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
</code></pre><h2>SSL证书</h2><pre><code class="language-bash">certbot --nginx
</code></pre><p><br><br></p>`,16)])))}});export{d as default,h as excerpt,l as frontmatter};
