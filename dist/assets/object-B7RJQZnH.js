import{d as t,c as a,e as n,o as s}from"./vendor-oTex03eR.js";const i={class:"markdown-body"},m={},p="",d=t({__name:"object",setup(r,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(l,o)=>(s(),a("div",i,o[0]||(o[0]=[n("h1",null,"目录结构",-1),n("pre",null,[n("code",{class:"language-plaintext"},`webmis-go/
├── app
│    ├── config                   // 配置文件
│    ├── librarys                 // 第三方类
│    ├── models                   // 模型
│    └── modules                  // 模块
│    │    ├── admin              // 后台
│    │    ├── api                // 应用
│    │    └── home               // 网站
│    ├── service                  // 项目服务类
│    ├── task                     // 任务类
│    ├── util                     // 工具类
│    └── views                    // 视图文件
├── cli
│    └── main.go                  // 命令行入口: 路由配置
├── core
│    ├── Base.go                  // 基础类
│    ├── Controller.go            // 基础控制器
│    ├── Model.go                 // 基础模型
│    ├── MySQLConnectionPool.go   // MySQL 连接池
│    └── Redis.go                 // 缓存数据库( 连接池 )
├── public                         // 静态资源
│    ├── upload                   // 上传目录
│    └── favicon.png              // 图标
├── tmp                            // 热加载缓存( go install github.com/air-verse/air@latest )
├── bash                           // Linux/MacOS 脚本
├── cmd.bat                        // Windows 脚本
└── main.go                        // 入口文件: 路由配置
`)],-1)])))}});export{d as default,p as excerpt,m as frontmatter};
