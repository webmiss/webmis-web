# 项目结构

### 目录结构
```plaintext
webmis-php/
├── app
│    ├── config                 // 配置文件
│    ├── librarys               // 第三方类
│    ├── models                 // 模型
│    └── modules                // 模块
│    │    ├── admin            // 后台
│    │    ├── api              // 应用
│    │    └── web              // 网站
│    ├── service                // 项目服务类
│    ├── task                   // 任务类
│    ├── util                   // 工具类
│    └── views                  // 视图文件
├── core
│    ├── Base.php               // 基础类
│    ├── Controller.php         // 基础控制器
│    ├── Model.php              // 基础模型
│    ├── Redis.php              // 缓存数据库
│    ├── Router.php             // HMVC 路由
│    ├── RouterCli.php          // Cli 路由
│    └── View.php               // 基础视图
├── public                       // 静态资源
│    ├── upload                 // 上传目录
│    └── index.php              // 人口文件
├── bash                         // Linux/MacOS 脚本
├── cmd.bat                      // Windows 脚本
├── cli.php                      // 命令行: php cli.php 控制器 函数 参数...
└── composer.json                // Composer 配置文件
```
