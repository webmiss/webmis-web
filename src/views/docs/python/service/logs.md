## 引入
```python
from service.logs import Logs
```

## 日志-文件
```python
Logs.File(
  file: str,      #文件路径: upload/log/test.json
  content: str    #文件内容
)
```

## 日志-生产者
```python
Logs.Log(
  data: dict    #数据: 字典
)
```

## 日志-消费者
```bash
# 运行
python cli.py Logs
# 挂载
nohup python cli.py Logs 2>&1 &
```
