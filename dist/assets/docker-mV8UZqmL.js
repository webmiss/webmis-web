import{d as o,c as r,a,o as s}from"./index-YZy2HEBW.js";const c={class:"markdown-body"},l={},g="",h=o({__name:"docker",setup(t,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(d,e)=>(s(),r("div",c,e[0]||(e[0]=[a(`<h2>Docker容器</h2><p>是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的<code class="">Linux</code>机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。</p><h3>1.1 安装</h3><pre><code class="language-bash"># CentOS
yum install docker
# 开机启动
systemctl enable docker
# 启动
systemctl start docker
systemctl start containerd
</code></pre><p><strong>配置</strong></p><pre><code class="language-bash"># 创建组
sudo groupadd docker 
# 添加当前用户到组
sudo usermod -aG docker $USER
# 激活
newgrp docker
# 重启系统
reboot
</code></pre><p><strong>国内镜像</strong></p><pre><code class="language-bash">sudo vi /etc/docker/daemon.json
</code></pre><pre><code class="language-bash">{
  &quot;registry-mirrors&quot;: [&quot;https://xxx.mirror.aliyuncs.com&quot;]
}
</code></pre><p><strong>重启</strong></p><pre><code class="language-bash">sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><h3>1.2 镜像管理</h3><pre><code class="language-bash"># 搜索
docker search centos
# 下载
docker pull centos
# 查看
docker images
# 删除
docker rmi centos
</code></pre><h3>1.3 运行镜像</h3><pre><code class="language-bash"># 运行
docker run -it centos

# 运行一个新容器，同时为它命名、端口映射、文件夹映射
docker run --name redmine -p 9003:80 -p 9023:22 -d -v /var/redmine/files:/redmine/files -v /var/redmine/mysql:/var/lib/mysql centos

# 退出并停止
exit

# 如何退出容器而不停止容器？
Ctrl+P+Q
</code></pre><h3>1.4 容器管理</h3><pre><code class="language-bash"># 查看/停止/启动/杀死/移除
docker ps -a
docker stop 容器ID
docker start 容器ID
docker kill 容器ID
docker rm 容器ID

# 查看容器信息
docker inspect 容器ID

# 进入正在运行的容器
docker attach 容器ID

# 在运行的容器中执行命令
docker exec -it 容器ID /bin/bash

# 将容器储存为镜像
docker commit 容器ID 名称
</code></pre><h3>1.5 镜像迁移</h3><pre><code class="language-bash"># 保存
docker save 镜像名称 &gt; /home/save.tar
# 复制的服务器
scp /home/save.tar root@IP:/home/
# 导入到镜像
docker load &lt; /home/save.tar
</code></pre><h3>1.6 容器-导出/导入</h3><pre><code class="language-bash">docker export 容器ID &gt; /home/export.tar
docker import export.tar
</code></pre><h3>1.7 容器内部文件-拷贝/删除</h3><pre><code class="language-bash">docker cp 容器ID:路径 ./
docker rm 容器ID:路径 ./
</code></pre><h2>案例：Ubuntu+Nginx+Go</h2><h3>Dockerfile</h3><pre><code class="language-bash">FROM ubuntu:latest

MAINTAINER webmis.vip

# 升级系统、访问https
RUN apt update &amp;&amp; apt install ca-certificates curl -y
# 安装Nginx
RUN apt install nginx -y
# 安装Go
RUN apt install golang -y
RUN go env -w GO111MODULE=on &amp;&amp; go env -w GOPROXY=https://goproxy.cn,direct
</code></pre><h3>构建镜像</h3><pre><code class="language-bash">docker build -t nginx:go .
</code></pre><h3>运行新容器</h3><pre><code class="language-bash">docker run -itd --name ubuntu-go
</code></pre><p><strong>启动Nginx</strong></p><pre><code class="language-bash">service nginx start
</code></pre>`,32)])))}});export{h as default,g as excerpt,l as frontmatter};
