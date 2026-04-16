# 生产环境

### Ubuntu
```bash
# Nginx、MariaDB、Redis
apt install -y nginx mariadb-server redis-server
# Python3( 依赖包 )
apt install python3-pymysql python3-redis python3-jwt -y
# 运行
./bash start
# 停止
./bash stop
```

### Nginx
```bash
upstream python {
    server localhost:9010;
    keepalive 1000;
}
server {
    server_name  python.webmis.vip;
    set $root_path /home/www/webmis/python/public;
    root $root_path;
    index index.html;

    location / {
        proxy_pass http://python;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        # 请求头
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        # 代理超时配置
        proxy_connect_timeout 5s;
        proxy_read_timeout 30s;
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