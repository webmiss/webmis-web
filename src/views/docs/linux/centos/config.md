## 软件仓库
```bash
# Epel源
dnf install epel-release -y
# Epel-阿里源
sed -i \
  -e 's!^metalink=!#metalink=!g' \
  -e 's!^#baseurl=!baseurl=!g' \
  -e 's!https\?://download\.fedoraproject\.org/pub/epel!https://mirrors.aliyun.com/epel!g' \
  -e 's!https\?://download\.example/pub/epel!https://mirrors.aliyun.com/epel!g' \
  /etc/yum.repos.d/epel*.repo
# 更新缓存
dnf clean all && sudo dnf makecache
# Remi源
dnf install http://rpms.remirepo.net/enterprise/remi-release-9.rpm -y
```

## 包管理器(https://anaconda.org/)
```bash
# conda
dnf install conda -y
# 初始化
conda init base
# 创建虚拟环境
conda create -p /home/soft/ffmpeg6
# 激活虚拟环境
source activate /home/soft/ffmpeg6
conda activate /home/soft/ffmpeg6
# 查看虚拟环境
conda env list
# 安装ffmpeg
conda install -c conda-forge ffmpeg
# 配置环境变量( vi /etc/profile )
export PATH=/home/soft/ffmpeg6/bin:$PATH
source /etc/profile
# 转码
ffmpeg -i input.mp4 -f hls -c:v libx264 -c:a aac -hls_list_size 0 -hls_time 3 -force_key_frames "expr:gte(t,n_forced*3)" -s 1080x1920 -r 25 -hls_segment_filename output_%02d.ts output.m3u8
```

```bash
# 退出虚拟环境
source deactivate base
source deactivate /home/soft/ffmpeg6
dnf remove conda -y
```

## 交换空间
```bash
# 查看
swapon --show
free -m
# 创建
fallocate -l 8G /swapfile
# 权限
chmod 600 /swapfile
# 设置、激活
mkswap /swapfile
swapon /swapfile
# 开机挂载
vi /etc/fstab
```
- 末尾添加"/swapfile swap swap defaults 0 0"
#### 阿里云服务器
```bash
vi /etc/sysctl.conf
```
- vm.swappiness = 60
- reboot

## 防火墙( Firewall )
```bash
# 开机启动
systemctl enable firewalld
# 启动
systemctl start firewalld
# 重启
firewall-cmd --reload
```

#### 1) 服务
```bash
firewall-cmd --add-service={http,https,mysql} --permanent
# 允许
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --permanent --zone=public --add-service=mysql
# 禁用
firewall-cmd --permanent --zone=public --remove-service=mysql
```

#### 2) 端口
```bash
# 允许
firewall-cmd --permanent --zone=public --add-port=8080/tcp
# 禁用
firewall-cmd --permanent --zone=public --remove-port=8080/tcp
```

#### 3) 查看
```bash
# 所以规则
firewall-cmd --zone=public --list-all
# 永久选项所支持的服务
firewall-cmd --permanent --get-services
# 支持的永久区域
firewall-cmd --permanent --get-zones
# 默认区域
firewall-cmd --get-default-zone
# 服务状态
firewall-cmd --query-service=http
```