# WebMIS-前端基础框架
采用 Vite + Vue3 + TypeScript 开发，包括Web(网站)、VueApp(H5+混合型APP)、Api(接口调试工具)、Admin(后台管理)，运用模块化开发思路，封装基础UI组件
- Web(文档)：[https://webmis.vip](https://webmis.vip)
- App(H5+混合型APP)：[https://app.webmis.vip](https://app.webmis.vip)
- Admin(后台管理)：[https://admin.webmis.vip](https://admin.webmis.vip)

<br/>

## 一、下载
```bash
# 克隆仓库
git clone https://github.com/webmiss/webmis-web.git web
git clone https://github.com/webmiss/webmis-app.git app
git clone https://github.com/webmiss/webmis-admin.git admin

# node模块提示版本不兼容问题
yarn config set ignore-engines true
```
- 项目: WebMIS-Base > web, app, admin

<br/>

## 二、运行
```bash
# 依赖包
yarn install
# 运行
yarn dev
# 打包
yarn build
# SSL证书
openssl req -x509 -newkey rsa:2048 -nodes -keyout ssl/key.pem -out ssl/cert.pem -days 365 -subj "/CN=localhost"
```

<br/><br/>