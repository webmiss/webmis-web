import{d as o,c as r,e,o as t}from"./vendor-oTex03eR.js";const s={class:"markdown-body"},i={},c="",_=o({__name:"build",setup(l,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(d,n)=>(t(),r("div",s,n[0]||(n[0]=[e("h1",null,"生产环境",-1),e("h3",null,"Ubuntu",-1),e("pre",null,[e("code",{class:"language-bash"},`# Nginx、MariaDB、Redis
apt install -y nginx mariadb-server redis-server
# Java
apt install -y default-jre
# 打包
./bash build
# 运行
./bash start
# 停止
./bash stop
`)],-1),e("h3",null,"Nginx",-1),e("pre",null,[e("code",{class:"language-bash"},`upstream java {
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
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
        if ($request_method = 'OPTIONS') { return 204; }
    }
}
`)],-1),e("h3",null,"SSL证书",-1),e("pre",null,[e("code",{class:"language-bash"},`certbot --nginx
`)],-1)])))}});export{_ as default,c as excerpt,i as frontmatter};
