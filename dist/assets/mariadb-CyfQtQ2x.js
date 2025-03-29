import{d as t,c as a,a as s,o as l}from"./index-DZw22l5y.js";const r={class:"markdown-body"},d={},p="",T=t({__name:"mariadb",setup(o,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(E,n)=>(l(),a("div",r,n[0]||(n[0]=[s(`<h2>优化( mysql -uroot -p )</h2><pre><code class="language-bash"># 开启表InnoDB: 1开启、0关闭
SET GLOBAL innodb_file_per_table = 1;
# 缓冲池(kb): 查询专用(物理内存*75%)、默认(134217728=128M)
SET GLOBAL innodb_buffer_pool_size = 8*1024*1024*1024*0.75;

# MyISAM
SET GLOBAL read_buffer_size = 33554432; 				# 32M
SET GLOBAL sort_buffer_size = 33554432; 				# 32M
SET GLOBAL key_buffer_size = 2147483648; 			    # 2G
SET GLOBAL bulk_insert_buffer_size = 536870912; 		# 512M
SET GLOBAL myisam_sort_buffer_size = 536870912; 		# 512M
SET GLOBAL myisam_max_sort_file_size = 549755813888;	# 512G

# 最大连接数: 小网站(100~200)、中型(500~800)、大型(1000~2000)
SET GLOBAL max_connections = 512;
# 查询缓存容量
SET GLOBAL query_cache_type = ON;                       # 开启
SET GLOBAL query_cache_size = 536870912; 			    # 512M
SET GLOBAL query_cache_limit = 16777216;		        # 16M
SET GLOBAL query_cache_min_res_unit = 4096;			    # 4KB
# 临时表容量和内存表最大容量
SET GLOBAL tmp_table_size = 8589934592;                 # 8G
SET GLOBAL max_heap_table_size = 8589934592;            # 8G
# 检查空闲连接: 建议(90秒/次)
SET GLOBAL wait_timeout = 90;
SET GLOBAL interactive_timeout = 90;
# Got timeout reading communication packets
SET GLOBAL max_allowed_packet = 536870912; 			    # 512M
</code></pre><h4>配置文件( vi /etc/my.cnf.d/mariadb-server.cnf )</h4><pre><code class="language-bash">[mysqld]
# 禁用DNS反向查询
skip-name-resolve
# 慢查询
slow-query-log=ON
long_query_time=1
# 日志文件
server-id=1
log-bin=mysql-bin
binlog-format=Row
expire_logs_days=7
</code></pre><h4>其他</h4><pre><code class="language-bash"># 避免使用交换空间
sysctl vm.swappiness
sysctl -w vm.swappiness=0
</code></pre><br><h2>常用命令</h2><h3>设置root账户</h3><pre><code class="language-bash"># 新密码
mysql_secure_installation

# 登陆
mysql -uroot -p

# 设置新密码
mysqladmin -u root -password &lt;新密码&gt;

# 修改密码
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;&lt;新密码&gt;&#39;;

# 查看配置
show global variables like &#39;innodb_file_per_table&#39;;
show global status like &#39;innodb_file_per_table&#39;;

# 更改配置
SET GLOBAL innodb_file_per_table = 1;
</code></pre><h3>创建用户</h3><pre><code class="language-bash"># 创建新用户
CREATE USER &#39;&lt;用户名&gt;&#39;@&#39;&lt;localhost&gt;&#39; IDENTIFIED BY &#39;&lt;密码&gt;&#39;;

# 添加权限
GRANT ALL PRIVILEGES ON &#39;&lt;指定数据库&gt;.*&#39; TO &#39;&lt;用户名&gt;&#39;@&#39;&lt;localhost&gt;&#39;;
FLUSH PRIVILEGES;

# 显示所有用户
select host,user from mysql.user;

# 删除用户
drop user &#39;&lt;用户名&gt;&#39;@&#39;localhost&#39;;
</code></pre><h3>数据库</h3><pre><code class="language-bash"># 查看
show databases;

# 使用
use \`&lt;数据库名&gt;\`;

# 查看-数据库编码
show variables like &#39;character_set_database&#39;;
# 查看-最大连接数
show variables like &#39;%max_connection%&#39;;
# 查看-当前连接
show processlist;

# 新建数据库
create database \`&lt;数据库名&gt;\`;
# 新建数据库并设置编码
create database \`&lt;数据库名&gt;\` default character set &lt;utf8&gt; collate &lt;utf8_general_ci&gt;;
# 更改数据库编码
alter database \`&lt;数据库名&gt;\` default character set &lt;utf8&gt; collate &lt;utf8_general_ci&gt;;

# 删除
drop database \`&lt;数据库名&gt;\`;
</code></pre><h3>数据表</h3><pre><code class="language-bash"># 查看
show tables;

# 创建数据表
create table \`&lt;数据库名&gt;\`.\`&lt;表名&gt;\`;

# 查看编码
show create table \`&lt;表名&gt;\`;
# 修改编码格式
alter table \`&lt;表名&gt;\` character set &lt;utf8&gt;;

# 删除
drop table \`&lt;表名&gt;\`;

# 优化表
OPTIMIZE TABLE \`&lt;表名1&gt;\`,\`&lt;表名2&gt;\`;
</code></pre><h3>字段</h3><pre><code class="language-bash"># 查看
show create table \`&lt;表名&gt;\`;
# 字段列信息
show columns from \`&lt;表名&gt;\`

# 添加
alter table \`&lt;表名&gt;\` add \`&lt;字段名&gt;\` varchar(6) not null COMMENT &#39;&lt;备注&gt;&#39; AFTER \`&lt;字段后&gt;\`;

# 修改
alter table \`&lt;表名&gt;\` change \`&lt;字段名&gt;\` \`&lt;字段名&gt;\` varchar(12) character set utf8 COLLATE utf8_general_ci NOT NULL COMMENT &#39;&lt;备注&gt;&#39;;

# 删除
alter table \`&lt;表名&gt;\` drop \`&lt;字段名&gt;\`;
</code></pre><h3>索引</h3><pre><code class="language-bash"># 索引信息
show index from \`&lt;表名&gt;\`

# 添加索引
alter table \`&lt;数据库名&gt;\`.\`&lt;表名&gt;\` ADD PRIMARY KEY (\`&lt;字段1&gt;\`(长度), \`&lt;字段2&gt;\`(长度));
# - PRIMARY 主键，唯一不能为空。
# - INDEX 索引，普通的。
# - UNIQUE 唯一索引，不允许有重复可以为空。
# - FULLTEXT 是全文索引，用于在一篇文章中，检索文本信息的。

# 删除索引
alter table \`&lt;表名&gt;\` DROP INDEX \`&lt;字段&gt;\`;
</code></pre><h3>分区</h3><pre><code class="language-bash"># 用户表
CREATE TABLE \`test\`.\`user\` (
    \`id\` INT (10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT &#39;ID&#39;,
    \`username\` VARCHAR (32) NOT NULL COMMENT &#39;用户名&#39;,
    \`password\` VARCHAR (32) NOT NULL COMMENT &#39;密码&#39;,
    \`state\` ENUM (&#39;0&#39;, &#39;1&#39;) NOT NULL DEFAULT &#39;1&#39; COMMENT &#39;状态(0禁用,1正常)&#39;,
    PRIMARY KEY (\`id\`)
) ENGINE = InnoDB;

# 添加数据
INSERT INTO
    \`user\` (\`id\`, \`username\`, \`password\`, \`state\`)
VALUES
    (NULL, &#39;user1&#39;, &#39;123456&#39;, &#39;1&#39;),
    (NULL, &#39;user2&#39;, &#39;123456&#39;, &#39;1&#39;),
    (NULL, &#39;user3&#39;, &#39;123456&#39;, &#39;1&#39;);

# 分区-添加字段
ALTER table \`user\` ADD \`pdate\` date NOT NULL DEFAULT &#39;1970-01-01&#39; COMMENT &#39;分区时间&#39;;

# 分区-添加主键
ALTER TABLE \`user\` ADD PRIMARY KEY \`id_pdate\` (\`id\`, \`pdate\`), DROP INDEX \`PRIMARY\`;

# 分区-按月份
ALTER TABLE \`user\` partition BY RANGE(YEAR(pdate) * 100 + MONTH(pdate))(
    partition p2412 VALUES LESS THAN (202501),
    partition p2501 VALUES LESS THAN (202502)
);

# 分区-更新数据
UPDATE \`user\` SET \`pdate\`=FROM_UNIXTIME(ctime, &quot;%Y-%m-%d&quot;) WHERE pdate=&quot;1970-01-01&quot;;

# 分区-测试
UPDATE erp_goods SET pdate=&quot;2025-02-10&quot; WHERE id=1;
SELECT * FROM \`user\` PARTITION(p2502) WHERE id=1;

# 分区-查看
EXPLAIN PARTITIONS SELECT * FROM \`user\`;

# 分区-添加（RANGE）
ALTER TABLE \`user\` ADD partition(
    partition plast VALUES LESS THAN maxvalue
);

# 分区-拆分
ALTER TABLE \`user\` REORGANIZE partition plast into(
    partition p2502 VALUES LESS THAN (202503),
    partition plast VALUES LESS THAN maxvalue
);

# 分区-合并
ALTER TABLE \`user\` REORGANIZE partition p2502,plast into(
    partition plast VALUES LESS THAN maxvalue
);

# 分区-移除(恢复非分区状态)
ALTER TABLE \`user\` REMOVE partitioning;

# 分区-删除(包括数据)
ALTER TABLE \`user\` DROP partition plast;

</code></pre><h3>外键</h3><pre><code class="language-bash"># 创建数据库
create database \`test\` default character set utf8 collate utf8_general_ci;

# 用户基础表
CREATE TABLE \`test\`.\`user\` (
	\`id\` SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT &#39;ID&#39; ,
	\`name\` VARCHAR(12) NOT NULL COMMENT &#39;姓名&#39; ,
	\`sex\` ENUM(&#39;男&#39;,&#39;女&#39;) NOT NULL DEFAULT &#39;男&#39; COMMENT &#39;性别&#39; ,
	\`age\` TINYINT(3) NOT NULL DEFAULT 20 COMMENT &#39;年龄&#39; ,
	PRIMARY KEY (\`id\`)
) ENGINE = InnoDB;

# 用户信息表
CREATE TABLE \`test\`.\`user_info\` (
	\`id\` SMALLINT(6) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT &#39;ID&#39; ,
	\`uid\` SMALLINT(6) UNSIGNED NOT NULL COMMENT &#39;UID&#39; ,
	\`content\` TEXT NOT NULL DEFAULT &#39;&#39; COMMENT &#39;内容&#39; ,
	PRIMARY KEY (\`id\`),
) ENGINE = InnoDB;

# 添加索引
alter table \`test\`.\`user_info\` ADD PRIMARY KEY (\`uid\`);

# 添加外键
ALTER TABLE \`user\` ADD CONSTRAINT \`&lt;外键名称&gt;\` FOREIGN KEY (\`id\`) REFERENCES \`user_info\`(\`uid\`) ON DELETE RESTRICT ON UPDATE RESTRICT;
# - CASCADE 在父表上update/delete记录时，同步update/delete掉子表的匹配记录 
# - SET NULL 在父表上update/delete记录时，将子表上匹配记录的列设为null (要注意子表的外键列不能为not null)  
# - NO ACTION 如果子表中有匹配的记录,则不允许对父表对应候选键进行update/delete操作  
# - RESTRICT 同no action, 都是立即检查外键约束

# 删除外键
alter table test.user DROP FOREIGN KEY \`&lt;外键名称&gt;\`;
</code></pre><h3>数据</h3><pre><code class="language-bash"># 查询
SELECT * FROM \`user\` WHERE id=1;

# 添加
INSERT INTO \`user\`( \`name\`, \`sex\`, \`age\`) VALUES (&#39;张三&#39;,&#39;1&#39;,25);

# 更新
UPDATE \`user\` SET \`name\`=&#39;李四&#39;,\`sex\`=&#39;2&#39;,\`age\`=20 WHERE id=1;

# 删除
DELETE FROM \`user\` WHERE id=1;
</code></pre><h2>备份和恢复</h2><pre><code class="language-bash">vi /home/mysql.sh
</code></pre><h3>1) MySQL备份</h3><pre><code class="language-bash">#!/bin/bash
uname=root
passwd=***
dbname=***
path=***_\`date &#39;+%Y-%m-%d&#39;\`.sql
mysqldump -u$uname -p$passwd --databases $dbname --lock-all-tables --flush-logs &gt; $path
</code></pre><h3>2) MySQL恢复</h3><pre><code class="language-bash">#!/bin/bash
mysql -u$uname -p$passwd $dbname &lt; $path
</code></pre><h3>3) 定时执行(每天23:30执行备份)</h3><pre><code class="language-bash"># 添加定时
crontab -e
# 内容
30 23 * * * sh /home/mysql.sh
</code></pre><h3>4) 备份差异到本地目录</h3><pre><code class="language-bash">rsync -rvu --delete root@IP:/home/test/ /home/test
</code></pre><h3>5) 数据恢复</h3><pre><code class="language-bash">mysql -u 用户名 -p密码 数据库名 &lt; 备份的数据库.sql
</code></pre><h3>6) 文件分段</h3><pre><code class="language-bash"># 分段
mkdir tmp &amp;&amp; split -b 1G xxx.sql tmp/db_
# 传输
scp -C tmp/db_aa root@IP:/home/db/tmp
# 合并
cat tmp/db_* &gt; xxx.sql
</code></pre><h3>7) 数据文件修复</h3><pre><code class="language-bash"># 停止
systemctl stop mariadb
# 修复文件
myisamchk -r xxx.MYI
# 启动
systemctl start mariadb
</code></pre><h2>SSH免密码登录</h2><h3>方法一：</h3><pre><code class="language-bash"># 生成公钥
ssh-keygen -t rsa
# 将公钥放到服务器上
scp ~/.ssh/id_rsa.pub root@IP:~/.ssh/authorized_keys
</code></pre><h3>方法二：</h3><pre><code class="language-bash">pacman -S sshpass
sshpass -p &#39;你的密码&#39; ssh root@IP
</code></pre>`,47)])))}});export{T as default,p as excerpt,d as frontmatter};
