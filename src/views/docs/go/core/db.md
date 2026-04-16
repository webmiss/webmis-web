# 数据库

### 创建模型
```go
package models

import "webmis/core"

/* 用户模型 */
type User struct {
	core.Model
}

/* 构造函数 */
func (m *User) New() *User {
	m.DBConn("default")
	m.Table("user")
	return m
}
```

### 查询
```go
m := (&models.User{}).New()
m.Columns("id", "uname")
m.Where("uname LIKE ?", "%WebMIS%")
data := m.Find("")                     // 多条
data := m.FindFirst("")                // 单条
```

### 查询-链表
```go
m := (&models.User{}).New()
m.Table("user as a")
m.Join("user_info as b", "a.id=b.uid")
m.Columns("a.id, b.name")
data := m.Find("");
```

### 插入
```go
// 单条数据
param1 := map[string]interface{}{"uname": "WebMIS"}
// 多条数据
param2 := []map[string]interface{}{{"uname": "WebMIS1"}, {"uname": "WebMIS2"}}
// 模型
m := (&models.User{}).New()
m.Values(param1)                // 单条
m.ValuesAll(param2)             // 多条
id := m.Insert(data)            // 自增ID
```

### 更新
```go
m := (&models.User{}).New()
m.Set(map[string]interface{}{"uname": "WebMIS"})
m.Where("id=?", 1)
m.Update()
```

### 删除
```go
m := (&models.User{}).New()
m.Where("id=?", 2)
m.Delete()
```

### 其它
```go
m.DBConn("default");                 // 数据库连接
m.Exec(conn, sql, args);             // 执行SQL语句
// 获取数据
m.GetSql();                          // 获取已执行SQL语句
m.GetID();                           // 获取自增ID
m.GetNums();                         // 获取影响行数
// 关联条件
m.LeftJoin();                        // 左
m.RightJoin();                       // 右
m.FullJoin();                        // 全
// 查询条件
m.Partition("plast")                 // 分区
m.Group();                           // 分组
m.Having();                          // 筛选
m.Order();                           // 排序
m.Limit();                           // 限制
m.Page();                            // 分页
// 获取SQL语句和参数
sql, args := m.SelectSQL();          // 查询
sql, args := m.InsertSQL();          // 插入
sql, args := m.UpdateSQL();          // 更新
sql, args := m.DeleteSQL();          // 删除
```

<br/>
