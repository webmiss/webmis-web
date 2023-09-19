## 引入
```php
use Service\AdminToken;
```

#### Token
```php
// 验证
AdminToken::Verify(string $token, string $urlPerm);
// 生成
AdminToken::Create(array $data);
// 解析
AdminToken::Token(string $token);
```

#### 菜单权限
```php
// 保存
AdminToken::savePerm($uid, string $perm);
// 拆分
AdminToken::getPerm(string $token);
```

