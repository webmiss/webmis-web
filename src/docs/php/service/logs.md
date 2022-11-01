## 引入
```php
use Service\Logs;
```

## 日志-文件
```php
Logs::File(
  string $file='',    //文件路径: upload/log/test.json
  string $content=''  //文件内容
);
```

## 日志-生产者
```php
Logs::Logs(
  array $data     //数据: 数组
);
```

## 日志-消费者
```bash
# 运行
$ php cli.php Logs
# 挂载
nohup php cli.php Logs 2>&1 &
```
