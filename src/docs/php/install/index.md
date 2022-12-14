# WebMIS-Phalcon
采用PHP7+Laveral、Phalcon5开发，包括HMVC模块化管理、自动路由、CLI命令行、Socket通信、redis缓存、Token机制等功能，提供支付宝、微信、文件上传、图像处理、二维码等常用类。

**PHP**
- 网站-API( [https://php.webmis.vip/](https://php.webmis.vip/) )
- 前端-API( [https://php.webmis.vip/api/](https://php.webmis.vip/api/) )
- 后台-API( [https://php.webmis.vip/admin/](https://php.webmis.vip/admin/) )

<br/>

## 一、下载
```bash
# PHP8
git clone https://github.com/webmiss/webmis-php.git php
# Phalcon5
git clone https://github.com/webmiss/webmis-phalcon.git phalcon
# 数据库
git clone https://github.com/webmiss/webmis-tools.git tools
# 修改权限(linux)
chmod -R 777 php/public/upload
```
- 数据库: tools/database/data.sql
- 修改密码: user表password字段，md5加密即可
- 管理员账号: admin 密码:123456

<br/>

## 二、运行
#### Bash命令
```bash
# 依赖包
./bash install
# 运行
./bash serve
# 数据库工具
cd ../tools
./bash adminer
```

#### Cmd命令
```bash
# 依赖包
.\cmd install
# 运行
.\cmd serve
# 数据库工具
cd ../tools
.\cmd adminer
```

<br/><br/>