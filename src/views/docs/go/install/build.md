# 生产环境

### Ubuntu
```bash
# 安装 Golang
apt install golang-go -y
# 打包
./bash build
# 运行
./bash start
```

### 交换分区( 编译时内存不足 )
```bash
# 创建文件
fallocate -l 4G /swapfile
# 设置权限
chmod 600 /swapfile
# 格式化
mkswap /swapfile
# 启用
swapon /swapfile
# 优化
echo 'vm.swappiness=10' >> /etc/sysctl.conf
sysctl -p
# 查看交换空间信息
free -m
```
- 开机启动: 编辑 /etc/fstab 文件，添加内容: /swapfile none swap sw 0 0

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