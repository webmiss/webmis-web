## 引入
```java
import webmis.service.Data;
```

## 薄雾算法
```java
Data.Mist(String redisName);
```

## 雪花算法
```java
Data.Snowflake();
```

## 图片地址
```java
Data.Img(Object img);
```

## 分区-获取ID
```java
Data.PartitionID(
  String date,    //日期: 2022-10-01 00:00:00
  String table,   //数据表: logs
  String column   //字段: ctime
);
```

## 分区-获取名称
```java
(new Data()).PartitionName(
  int stime,  //开始时间: 1661961600
  int etime   //结束时间: 1664553600
);
```
