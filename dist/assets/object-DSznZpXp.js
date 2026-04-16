import{d as t,c as p,e as n,o as r}from"./vendor-oTex03eR.js";const s={class:"markdown-body"},l={},y="",d=t({__name:"object",setup(a,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(i,e)=>(r(),p("div",s,e[0]||(e[0]=[n("h1",null,"目录结构",-1),n("pre",null,[n("code",{class:"language-plaintext"},`webmis-python/
├── app
│    ├── config                   // 配置文件
│    ├── librarys                 // 第三方类
│    └── modules                  // 模块
│    │    ├── admin              // 后台
│    │    ├── api                // 应用
│    │    └── web               // 网站
│    ├── task                     // 任务类
│    └── views                    // 视图文件
├── core
│    ├── Base.py                  // 基础类
│    ├── Controller.py            // 基础控制器
│    ├── Model.py                 // 基础模型
│    ├── MySQLConnectionPool.py   // MySQL 连接池
│    ├── Redis.py                 // 缓存数据库( 连接池 )
│    ├── Router.py                // HMVC 路由
│    ├── RouterCli.py             // Cli 路由
│    ├── Server.py                // Web 服务类
│    └── View.py                  // 基础视图
├── public                         // 静态资源
├── uwsgi                          // uWsgi 配置
├── bash                           // Linux/MacOS 脚本
├── cmd.bat                        // Windows 脚本
├── cli.py                         // 命令行: python cli.py 控制器 函数 参数...
├── run_dev.py                     // 热重载( 开发环境 ): python run_dev.py
└── run.py                         // Web启动文件
`)],-1)])))}});export{d as default,y as excerpt,l as frontmatter};
