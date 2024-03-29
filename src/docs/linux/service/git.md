# Git 服务器搭建

## 一、服务器配置
#### 1) 创建账号
```bash
groupadd git
useradd git -g git
passwd git
```

#### 2) 修改权限
```bash
vi /etc/passwd
```
-- git:x:1001:1001::/home/git:/bin/git-shell

<br/>

## 二、证书登录
#### 1) 公钥文件(一次)
```bash
mkdir -p /home/git/.ssh
touch /home/git/.ssh/authorized_keys
chmod 644 /home/git/.ssh/authorized_keys
```

#### 2) RSA密钥
```bash
# 本地-生成密钥
ssh-keygen -t rsa
# 本地-上传公钥
scp .ssh/id_rsa.pub root@服务器IP:/home/git/
# 服务器-导入公钥
cat id_rsa.pub >> .ssh/authorized_keys
```

## 三、Git仓库
#### 1) 创建空仓库
```bash
# 创建目录
mkdir /home/git/gitrepo
chown git:git /home/git/gitrepo
chmod -R 774 /home/git
cd /home/git/gitrepo
# 配置
git config --global init.defaultBranch main
git config --global user.name "webmis"
git config --global user.email "klingsoul@163.com"
# 创建仓库
git init --bare test.git
chown -R git:git test.git
```

#### 2) 初始化仓库
```bash
mkdir /home/www/test
cd /home/www/test
# 初始化
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin webmis@127.0.0.1:/home/git/gitrepo/test.git
git push -u origin "main"
```

#### 3) 克隆仓库
```bash
git clone git@服务IP:/home/git/gitrepo/test.git
```
