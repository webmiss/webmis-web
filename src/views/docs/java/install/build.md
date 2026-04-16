# 生产环境

### Ubuntu
```bash
# Nginx、MariaDB、Redis
apt install -y nginx mariadb-server redis-server
# Java
apt install -y default-jre
# 打包
./bash build
# 运行
./bash start
# 停止
./bash stop
```

### Nginx
```bash
upstream java {
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
```

### SSL证书
```bash
certbot --nginx
```