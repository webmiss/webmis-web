## 引入
```go
import "webmis/service"
```

## 日志-文件
```go
(&service.Logs{}).File(
  file string,      //文件路径: upload/log/test.json
  content string    //文件内容
)
```

## 日志-生产者
```go
(&service.Logs{}).Log(
  data interface{}    //数据: 数组
)
```

## 日志-消费者
```bash
# 运行
go run cli/main.go logs log
# 挂载
nohup go run cli/main.go logs log 2>&1 &
```
