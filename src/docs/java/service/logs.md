## 引入
```java
import webmis.service.Logs;
```

## 日志-文件
```java
Logs.File(
  String file,    //文件路径: upload/log/test.json
  String content  //文件内容
);
```

## 日志-生产者
```java
Logs.Log(
  Object data   //数据: 数组
);
```

## 日志-消费者
```bash
# 挂载并运行
middleware/Cli.java
```
