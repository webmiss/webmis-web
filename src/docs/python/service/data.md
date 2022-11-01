## 引入
```python
from service.data import Data
```

## 薄雾算法
```python
Data.Mist(redisName: str)
```

## 雪花算法
```python
Data.Snowflake()
```

## 图片地址
```python
Data.Img(img: str)
```

## 分区-获取ID
```python
Data.PartitionID(
  date: str,            #日期: 2022-10-01 00:00:00
  table: str,           #数据表: logs
  column: str='ctime'   #字段: ctime
)
```

## 分区-获取名称
```python
Data().PartitionName(
  stime: int,   #开始时间: 1661961600
  etime: int    #结束时间: 1664553600
)
```
