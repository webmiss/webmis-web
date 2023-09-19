## 引入
```php
use Service\Base;
```

#### 返回数据
```php
Base::GetJSON(array $data=[]);
```

#### 获取参数
```php
// Get、Post
Base::Get(string $name);
Base::Post(string $name);
// JSON方式
$json = Base::Json();
self::JsonName($json, string $name);
```

#### 输出
```php
// 打印信息
Base::Print(...$content);
// 测试数度
Base::MicroBegin();
Base::MicroEnd();
```

#### 异常错误
```php
// 抛出异常
Base::Error($msg);
```
