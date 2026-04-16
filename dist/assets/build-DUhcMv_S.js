import{d as a,c as o,e as n,o as s}from"./vendor-oTex03eR.js";const r={class:"markdown-body"},c={},d="",h=a({__name:"build",setup(p,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(l,e)=>(s(),o("div",r,e[0]||(e[0]=[n("h1",null,"生产环境",-1),n("h3",null,"Ubuntu",-1),n("pre",null,[n("code",{class:"language-bash"},`# 安装
apt install composer
# Nginx
apt install -y nginx
# MariaDB
apt install -y mariadb-server
# Redis
apt install -y redis-server
# PHP( 依赖包 )
apt install php-fpm php-cli php-mysql php-gd php-xml php-mbstring -y
`)],-1),n("h3",null,"Nginx",-1),n("pre",null,[n("code",{class:"language-bash"},`server {
    server_name  php.webmis.vip;
    set $root_path /home/www/webmis/php/public;
    root $root_path;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?_url=$uri&$args;
    }
    location ~* ^/(upload|favicon.png)/(.+)$ {
        root $root_path;
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
        if ($request_method = 'OPTIONS') { return 204; }
    }

    location ~ \\.php$ {
        fastcgi_pass   unix:/run/php/php8.3-fpm.sock;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
`)],-1),n("h3",null,"SSL证书",-1),n("pre",null,[n("code",{class:"language-bash"},`certbot --nginx
`)],-1)])))}});export{h as default,d as excerpt,c as frontmatter};
