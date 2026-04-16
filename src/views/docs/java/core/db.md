# 数据库

### 创建模型
```java
package vip.webmis.mvc.models;

import vip.webmis.mvc.core.Model;

/* 用户表 */
public class User extends Model {

  /* 构造函数 */
  public User() {
    this.DBConn("default");
    this.Table("user");
  }

}
```

### 查询
```java
User m = new User();
m.Columns("id", "uname");
m.Where("uname LIKE ?", "%WebMIS%");
List<HashMap<String, Object>> data = m.Find();  // 多条
HashMap<String, Object> data = m.FindFirst();   // 单条
```

### 查询-链表
```java
User m = new User();
m.Table("user as a")
m.Join("user_info as b", "a.id=b.uid")
m.Columns("a.id, b.name")
List<HashMap<String, Object>> data = m.Find();
```

### 插入
```java
// 单条数据
Map<String, Object> param1 = new HashMap<>();
param1.put("uname", "WebMIS");

// 多条数据
Map<String, Object> tmp;
List<Map<String, Object>> param2 = new ArrayList<>();
param2.add(Map.of("uname", "WebMIS1"));
param2.add(Map.of("uname", "WebMIS2"));

// 模型
User m = new User();
m.Values(param1);         // 单条
m.ValuesAll(param2);      // 多条
int id = m.Insert();      // 自增ID
```

### 更新
```java
Map<String, Object> param = new HashMap<>();
param.put("uname", "WebMIS");
User m = new User();
m.Set(param);
m.Where("id=?", 1);
m.Update();
```

### 删除
```java
User m = new User();
m.Where("id=?", 2);
m.Delete();
```

### 其它
```java
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
m.Partition("plast");                // 分区
m.Group();                           // 分组
m.Having();                          // 筛选
m.Order();                           // 排序
m.Limit();                           // 限制
m.Page();                            // 分页
// 获取SQL语句和参数: res[0], res[1]
Object[] res = m.SelectSQL();        // 查询
Object[] res = m.InsertSQL();        // 插入
Object[] res = m.UpdateSQL();        // 更新
Object[] res = m.DeleteSQL();        // 删除
```

<br/>
