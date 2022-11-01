## 引入
```go
import "webmis/service"
```

## 薄雾算法
```go
(&service.Data{}).Mist(redisName string)
```

## 雪花算法
```go
(&service.Data{}).Snowflake()
```

## 图片地址
```go
(&service.Data{}).Img(img interface{})
```

## 分区-获取ID
```go
(&service.Data{}).PartitionID(
  date string,    //日期: 2022-10-01 00:00:00
  table string,   //数据表: logs
  column string   //字段: ctime
)
```

## 分区-获取名称
```go
(&service.Data{}).PartitionName(
  stime int,    //开始时间: 1661961600
  etime int     //结束时间: 1664553600
)
```
