## 引入
```php
use Service\Data;
```

## 薄雾算法
```php
Data::Mist(string $redisName);
```

## 雪花算法
```php
Data::Snowflake();
```

## 图片地址
```php
Data::Img(string $img);
```

## 分区-获取ID
```php
Data::PartitionID(
  string $date,           //日期: 2022-10-01 00:00:00
  string $table,          //数据表: logs
  string $column='ctime'  //字段: ctime
);
```

## 分区-获取名称
```php
Data::PartitionName(
  int $stime,   //开始时间: 1661961600
  int $etime    //结束时间: 1664553600
);
```
