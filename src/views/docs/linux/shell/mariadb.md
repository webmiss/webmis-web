## 优化( mysql -uroot -p )
```bash
# 开启表InnoDB: 1开启、0关闭
SET GLOBAL innodb_file_per_table = 1;
# 缓冲池(kb): 查询专用(物理内存*75%)、默认(134217728=128M)
SET GLOBAL innodb_buffer_pool_size = 8*1024*1024*1024*0.75;

# MyISAM
SET GLOBAL key_buffer_size = 8*1024*1024*1024;      # 缓冲区大小
SET GLOBAL max_connections = 512;                   # 最大连接数量
SET GLOBAL thread_cache_size = 256;                 # 线程数量
# 缓冲区状态
show global variables like 'key_buffer_size%';
show global status like 'Key_%';
- Key_blocks_unused                                 # 未使用
- Key_blocks_used                                   # 已使用
- Key_read_requests                                 # 读取索引的次数
- Key_reads                                         # 从磁盘中读取索引的次数
- Key_write_requests                                # 写入到key buffer(请求数)
- Key_writes                                        # 写入到磁盘
# 连接状态
show global status like 'Max_used_%';
- Max_used_connections                              # 当前连接数
# 线程状态
show global variables like 'Thread_%';
show global status like 'Thread_%';
- Threads_cached                                    # 空余线程数
- Threads_connected                                 # 已绑定线程数
- Threads_created                                   # 已创建线程数
- Threads_running                                   # 正在运行线程数

```

#### 配置文件( vi /etc/my.cnf.d/mariadb-server.cnf )
```bash
[mysqld]
# 禁用DNS反向查询
skip-name-resolve
# 检查空闲连接
wait_timeout = 120
interactive_timeout = 120
# 单个查询或数据包最大大小
max_allowed_packet = 536870912
# 慢查询
slow-query-log=ON
long_query_time=10
# 日志文件
server-id=1
log-bin=mysql-bin
binlog-format=Row
expire_logs_days=7
```

#### 其他
```bash
# 避免使用交换空间
sysctl vm.swappiness
sysctl -w vm.swappiness=0
```

<br/>

## 常用命令
### 设置root账户
``` bash
# 新密码
mysql_secure_installation

# 登陆
mariadb -uroot -p
mariadb -h 服务器IP -uwebmis -p --ssl=false

# 设置新密码
mysqladmin -u root -password <新密码>

# 修改密码
ALTER USER 'root'@'localhost' IDENTIFIED BY '<新密码>';

# 查看配置
show global variables like 'innodb_file_per_table';
show global status like 'innodb_file_per_table';

# 更改配置
SET GLOBAL innodb_file_per_table = 1;
```
### 创建用户
``` bash
# 创建新用户
CREATE USER '<用户名>'@'<localhost>' IDENTIFIED BY '<密码>';

# 添加权限
GRANT ALL PRIVILEGES ON '<指定数据库>.*' TO '<用户名>'@'<localhost>';
FLUSH PRIVILEGES;

# 允许Root远程访问( 注释或删除 bind-address = 127.0.0.1 )
GRANT ALL PRIVILEGES ON webmis.* TO 'webmis'@'%'IDENTIFIED BY '登录密码' WITH GRANT OPTION;
FLUSH PRIVILEGES;

# 显示所有用户
select host,user from mysql.user;

# 删除用户
drop user '<用户名>'@'localhost';
```

### 数据库
``` bash
# 查看
show databases;

# 使用
use `<数据库名>`;

# 查看-数据库编码
show variables like 'character_set_database';
# 查看-最大连接数
show variables like '%max_connection%';
# 查看-当前连接
show processlist;

# 新建数据库
create database `<数据库名>`;
# 新建数据库并设置编码
create database `<数据库名>` default character set <utf8> collate <utf8_general_ci>;
# 更改数据库编码
alter database `<数据库名>` default character set <utf8> collate <utf8_general_ci>;

# 删除
drop database `<数据库名>`;
```

### 数据表
``` bash
# 查看
show tables;

# 创建数据表
create table `<数据库名>`.`<表名>`;

# 查看编码
show create table `<表名>`;
# 修改编码格式
alter table `<表名>` character set <utf8>;

# 删除
drop table `<表名>`;

# 优化表
OPTIMIZE TABLE `<表名1>`,`<表名2>`;
```

### 字段
``` bash
# 查看
show create table `<表名>`;
# 字段列信息
show columns from `<表名>`

# 添加
alter table `<表名>` add `<字段名>` varchar(6) not null COMMENT '<备注>' AFTER `<字段后>`;

# 修改
alter table `<表名>` change `<字段名>` `<字段名>` varchar(12) character set utf8 COLLATE utf8_general_ci NOT NULL COMMENT '<备注>';

# 删除
alter table `<表名>` drop `<字段名>`;
```

### 索引
``` bash
# 索引信息
show index from `<表名>`

# 添加索引
alter table `<数据库名>`.`<表名>` ADD PRIMARY KEY (`<字段1>`(长度), `<字段2>`(长度));
# - PRIMARY 主键，唯一不能为空。
# - INDEX 索引，普通的。
# - UNIQUE 唯一索引，不允许有重复可以为空。
# - FULLTEXT 是全文索引，用于在一篇文章中，检索文本信息的。

# 删除索引
alter table `<表名>` DROP INDEX `<字段>`;
```

### 分区
``` bash
# 用户表
CREATE TABLE `test`.`user` (
    `id` INT (10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `username` VARCHAR (32) NOT NULL COMMENT '用户名',
    `password` VARCHAR (32) NOT NULL COMMENT '密码',
    `state` ENUM ('0', '1') NOT NULL DEFAULT '1' COMMENT '状态(0禁用,1正常)',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

# 添加数据
INSERT INTO
    `user` (`id`, `username`, `password`, `state`)
VALUES
    (NULL, 'user1', '123456', '1'),
    (NULL, 'user2', '123456', '1'),
    (NULL, 'user3', '123456', '1');

# 分区-添加字段
ALTER table `user` ADD `pdate` date NOT NULL DEFAULT '1970-01-01' COMMENT '分区时间';

# 分区-添加主键
ALTER TABLE `user` ADD PRIMARY KEY `id_pdate` (`id`, `pdate`), DROP INDEX `PRIMARY`;

# 分区-按月份
ALTER TABLE `user` partition BY RANGE(YEAR(pdate) * 100 + MONTH(pdate))(
    partition p2412 VALUES LESS THAN (202501),
    partition p2501 VALUES LESS THAN (202502)
);

# 分区-更新数据
UPDATE `user` SET `pdate`=FROM_UNIXTIME(ctime, "%Y-%m-%d") WHERE pdate="1970-01-01";

# 分区-测试
UPDATE erp_goods SET pdate="2025-02-10" WHERE id=1;
SELECT * FROM `user` PARTITION(p2502) WHERE id=1;

# 分区-查看
EXPLAIN PARTITIONS SELECT * FROM `user`;

# 分区-添加（RANGE）
ALTER TABLE `user` ADD partition(
    partition plast VALUES LESS THAN maxvalue
);

# 分区-拆分
ALTER TABLE `user` REORGANIZE partition plast into(
    partition p2502 VALUES LESS THAN (202503),
    partition plast VALUES LESS THAN maxvalue
);

# 分区-合并
ALTER TABLE `user` REORGANIZE partition p2502,plast into(
    partition plast VALUES LESS THAN maxvalue
);

# 分区-移除(恢复非分区状态)
ALTER TABLE `user` REMOVE partitioning;

# 分区-删除(包括数据)
ALTER TABLE `user` DROP partition plast;

```

### 外键
``` bash
# 创建数据库
create database `test` default character set utf8 collate utf8_general_ci;

# 用户基础表
CREATE TABLE `test`.`user` (
	`id` SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID' ,
	`name` VARCHAR(12) NOT NULL COMMENT '姓名' ,
	`sex` ENUM('男','女') NOT NULL DEFAULT '男' COMMENT '性别' ,
	`age` TINYINT(3) NOT NULL DEFAULT 20 COMMENT '年龄' ,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

# 用户信息表
CREATE TABLE `test`.`user_info` (
	`id` SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID' ,
	`uid` SMALLINT(6) UNSIGNED NOT NULL COMMENT 'UID' ,
	`content` TEXT NOT NULL DEFAULT '' COMMENT '内容' ,
	PRIMARY KEY (`id`),
) ENGINE = InnoDB;

# 添加索引
alter table `test`.`user_info` ADD PRIMARY KEY (`uid`);

# 添加外键
ALTER TABLE `user` ADD CONSTRAINT `<外键名称>` FOREIGN KEY (`id`) REFERENCES `user_info`(`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT;
# - CASCADE 在父表上update/delete记录时，同步update/delete掉子表的匹配记录 
# - SET NULL 在父表上update/delete记录时，将子表上匹配记录的列设为null (要注意子表的外键列不能为not null)  
# - NO ACTION 如果子表中有匹配的记录,则不允许对父表对应候选键进行update/delete操作  
# - RESTRICT 同no action, 都是立即检查外键约束

# 删除外键
alter table test.user DROP FOREIGN KEY `<外键名称>`;
```

### 数据
``` bash
# 查询
SELECT * FROM `user` WHERE id=1;

# 添加
INSERT INTO `user`( `name`, `sex`, `age`) VALUES ('张三','1',25);

# 更新
UPDATE `user` SET `name`='李四',`sex`='2',`age`=20 WHERE id=1;

# 删除
DELETE FROM `user` WHERE id=1;
```

## 备份和恢复
``` bash
vi /home/mysql.sh
```
### 1) MySQL备份
``` bash
#!/bin/bash
uname=root
passwd=***
dbname=***
path=***_`date '+%Y-%m-%d'`.sql
mysqldump -u$uname -p$passwd --databases $dbname --lock-all-tables --flush-logs > $path
```
### 2) MySQL恢复
``` bash
#!/bin/bash
mysql -u$uname -p$passwd $dbname < $path
```

### 3) 定时执行(每天23:30执行备份)
``` bash
# 添加定时
crontab -e
# 内容
30 23 * * * sh /home/mysql.sh
```

### 4) 备份差异到本地目录
``` bash
rsync -rvu --delete root@IP:/home/test/ /home/test
```

### 5) 数据恢复
``` bash
mysql -u 用户名 -p密码 数据库名 < 备份的数据库.sql
```

### 6) 文件分段
``` bash
# 分段
mkdir tmp && split -b 1G xxx.sql tmp/db_
# 传输
scp -C tmp/db_aa root@IP:/home/db/tmp
# 合并
cat tmp/db_* > xxx.sql
```

### 7) 数据文件修复
``` bash
# 停止
systemctl stop mariadb
# 修复文件
myisamchk -r xxx.MYI
# 启动
systemctl start mariadb
```

## SSH免密码登录
### 方法一：
``` bash
# 生成公钥
ssh-keygen -t rsa
# 将公钥放到服务器上
scp ~/.ssh/id_rsa.pub root@IP:~/.ssh/authorized_keys
```
### 方法二：
``` bash
pacman -S sshpass
sshpass -p '你的密码' ssh root@IP
```