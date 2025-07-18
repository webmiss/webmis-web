import{d as a,c as o,a as r,o as s}from"./index-AbO7opoS.js";const t={class:"markdown-body"},m={},u="",h=a({__name:"index",setup(l,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(d,e)=>(s(),o("div",t,e[0]||(e[0]=[r(`<h1>Shell 基础知识</h1><h3>环境变量</h3><pre><code class="language-bash"># 系统环境变量
env
export VAR_NAME=&quot;value&quot;
source ~/.bashrc
# 系统变量和函数
set
# 树形显示所有进程
pstree
# 自定义变量
vi /etc/profile    #系统环境变量
vi /etc/bashrc    #用户环境变量
</code></pre><ul><li>.bash_profile #定义了用户的个人化路径与环境变量的文件名称。</li><li>.bashrc #该文件包含专用于你的shell的bash信息。</li><li>.bash_history #记录命令历史用的。</li><li>.bash_logout #当退出shell时,会执行该文件。可以把一些清理的工作放到这个文件中。</li></ul><br><h3>特殊符号</h3><pre><code class="language-bash">#!/bin/bash
*	#代表零个或多个字符或数字。
?	#只代表一个任意的字符。
!	#惊叹号通常它代表反逻辑的作用,譬如条件侦测中,用 != 来代表&quot;不等于&quot;。
~	#用户的家目录,如果是root则是 /root ,普通用户则是 /home/username。
#	#这个符号在linux中表示注释说明的意思,即”#”后面的内容linux忽略掉。
\\	#脱意字符,将后面的特殊符号(例如”*” )还原为普通字符。
|	#管道符,前面多次说过,它的作用在于将符号前面命令的结果丢给符号后面的命令。
$	#除了用于变量前面的标识符外,还有一个妙用,就是和’!’结合起来使用。
,	#逗点常运用在运算当中当做&quot;区隔&quot;用途。
;	#不管command1是否执行成功都会执行command2
&amp;&amp;	#逻辑符号,代表 or 逻辑的符号。
||	#逻辑符号,代表 and 逻辑的符号。
;;	#连续分号专用在 case 的选项
[]	#中括号,中间为字符组合,代表中间字符中的任意一个 如：ls test[a-z]
&#39;&#39;	#被单引号用括住的内容,将被视为单一字串。在引号内的代表变数的$符号,没有作用。
&quot;&quot;	#被双引号用括住的内容,将被视为单一字串。它防止通配符扩展,但允许变量扩展。
\`\`	#在倒引号内的 date +%F 会被视为指令,执行的结果会带入 fdv 变数中。fdv=\`date +%F\`echo \\&quot;Today $fdv\\&quot;
{}	#大括号。
</code></pre><br><h3>通配符扩展</h3><pre><code class="language-bash"># 创建目录userA-home、userA-bin、userB-home、userB-bin
mkdir {userA,userB}-{home,bin}
</code></pre><br><h3>参数扩展</h3><pre><code class="language-bash">#!/bin/bash
\${name:-default}	#使用一个默认值(一般是空值)来代替那些空的或者没有赋值的变量name;
\${name:=default}	#使用指定值来代替空的或者没有赋值的变量name;
\${name:?message}	#如果变量为空或者未赋值,那么就会显示出错误信息并中止脚本的执行同时返回退出码1
\${#name}			#给出name的长度
\${name%word}		#从name的尾部开始删除与word匹配的最小部分,然后返回剩余部分
\${name%%word}		#从name的尾部开始删除与word匹配的最长部分,然后返回剩余部分
\${name#word}		#从name的头部开始删除与word匹配的最小部分,然后返回剩余部分
\${name##word}		#从name的头部开始删除与word匹配的最长部分,然后返回剩余部分

# 注: name为变量名,word为要匹配的字符串!
</code></pre><h3>常用工具</h3><pre><code class="language-bash"># 域名DNS
dnslookup webmis.vip
# 查看连接数
netstat -an | grep :80 | wc -l
netstat -an | grep :443 | wc -l
</code></pre><p><br><br></p>`,16)])))}});export{h as default,u as excerpt,m as frontmatter};
