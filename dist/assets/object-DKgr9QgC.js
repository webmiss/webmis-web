import{d as o,c as s,e as n,o as t}from"./vendor-oTex03eR.js";const r={class:"markdown-body"},p={},m="",d=o({__name:"object",setup(c,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(i,e)=>(t(),s("div",r,e[0]||(e[0]=[n("h1",null,"目录结构",-1),n("pre",null,[n("code",{class:"language-plaintext"},`webmis-java/
├── public                                 // 根目录
├── src/main/java/vip/webmis/mvc
│    ├── config                           // 配置文件
│    ├── core
│    │    ├── Base.java                  // 基础类
│    │    ├── ControllerBase.java        // 基础控制器
│    │    ├── GlobalCorsConfig.java      // 跨域配置
│    │    ├── Model.java                 // 基础模型
│    │    ├── MySQLConnectionPool.java   // MySQL 连接池
│    │    ├── NotFoundException.java     // 404 错误响应
│    │    └── Redis.java                 // 缓存数据库( 连接池 )
│    └── librarys                         // 第三方类
│    └── models                           // 模型
│    └── modules                          // 模块
│    │    ├── admin                      // 后台
│    │    ├── api                        // 应用
│    │    └── web                        // 网站
│    ├── task                             // 任务类
│    └── views                            // 视图文件
├── src/main/resources
│    ├── static                           // 静态资源
│    ├── templates                        // 视图模板
│    └── application.properties           // 项目配置文件
├── bash                                   // Linux/MacOS 脚本
├── cmd.bat                                // Windows 脚本
├── pom.xml                                // Maven 配置文件
└── run.py                                 // Web启动文件
`)],-1)])))}});export{d as default,m as excerpt,p as frontmatter};
