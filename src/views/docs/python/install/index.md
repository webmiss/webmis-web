# WebMIS-Python
采用Python3+Flask开发，包括HMVC模块化管理、Token验证、Redis缓存等
- 网站-API( [https://python.webmis.vip/](https://python.webmis.vip/) )
- 前端-API( [https://python.webmis.vip/api/](https://python.webmis.vip/api/) )
- 后台-API( [https://python.webmis.vip/admin/](https://python.webmis.vip/admin/) )

<br/>

## 一、下载
```bash
# 克隆项目
git clone https://github.com/webmiss/webmis-flask.git flask
git clone https://github.com/webmiss/webmis-tools.git tools
# 修改权限(linux)
chmod -R 777 flask/public/upload
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
```

#### Cmd命令
```bash
# 依赖包
.\cmd install
# 运行
.\cmd serve
```

<br/><br/>