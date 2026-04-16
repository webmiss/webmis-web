import{d as o,c as a,H as t,o as s}from"./vendor-oTex03eR.js";const r={class:"markdown-body"},c={},h="",i=o({__name:"build",setup(l,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(d,e)=>(s(),a("div",r,e[0]||(e[0]=[t(`<h1>生产环境</h1><h3>Ubuntu</h3><pre><code class="language-bash"># 安装 Golang
apt install golang-go -y
# 打包
./bash build
# 运行
./bash start
</code></pre><h3>交换分区( 编译时内存不足 )</h3><pre><code class="language-bash"># 创建文件
fallocate -l 4G /swapfile
# 设置权限
chmod 600 /swapfile
# 格式化
mkswap /swapfile
# 启用
swapon /swapfile
# 优化
echo &#39;vm.swappiness=10&#39; &gt;&gt; /etc/sysctl.conf
sysctl -p
# 查看交换空间信息
free -m
</code></pre><ul><li>开机启动: 编辑 /etc/fstab 文件，添加内容: /swapfile none swap sw 0 0</li></ul><h3>Nginx</h3><pre><code class="language-bash">upstream java {
    server localhost:9020;
}
server {
    server_name  java.webmis.vip;
    set $root_path /home/www/webmis/java/public;
    root $root_path;
    index index.html;

    location / {
        proxy_pass http://java;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    location ~* ^/(upload|favicon.png)/(.+)$ {
        root $root_path;
        add_header &#39;Access-Control-Allow-Origin&#39; &#39;*&#39;;
        add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS&#39;;
        add_header &#39;Access-Control-Allow-Headers&#39; &#39;Content-Type, Authorization&#39;;
        if ($request_method = &#39;OPTIONS&#39;) { return 204; }
    }
}
</code></pre><h3>SSL证书</h3><pre><code class="language-bash">certbot --nginx
</code></pre>`,10)])))}});export{i as default,h as excerpt,c as frontmatter};
