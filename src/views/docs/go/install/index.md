# webmis-go
采用Go + Redis + MariaDB开发的轻量级HMVC基础框架，目录结构清晰，支持CLI方式访问资料方便执行定时脚本。包括HMVC模块化管理、自动路由、CLI命令行、Socket通信、redis缓存、Token机制等功能，提供支付宝、微信、文件上传、图像处理、二维码等常用类。

**演示**
- 使用文档( [https://webmis.vip/](https://webmis.vip/go/install/index) )
- 网站-API( [https://go.webmis.vip/](https://go.webmis.vip/) )
- 前端-API( [https://go.webmis.vip/api](https://go.webmis.vip/api) )
- 后台-API( [https://go.webmis.vip/admin](https://go.webmis.vip/admin) )

## 安装
```bash
# 下载
$ git clone https://github.com/webmiss/webmis-go.git
$ cd webmis-go

# Linux、MacOS
./bash install

# Windows 11 (自动环境安装和配置)
.\cmd install
```

## 开发环境
```bash
# Linux、MacOS
./bash serve
./bash socketServer

# Windows 11
.\cmd serve
.\cmd socketServer
```
- 浏览器访问 http://127.0.0.1:9030/