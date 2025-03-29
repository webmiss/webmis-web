import{d as a,c as l,a as s,o as t}from"./index-Dldsk6pd.js";const c={class:"markdown-body"},i={},d="",f=a({__name:"config",setup(o,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(r,e)=>(t(),l("div",c,e[0]||(e[0]=[s(`<h2>软件仓库</h2><pre><code class="language-bash"># Epel源
dnf install epel-release -y
# PHP8
dnf install http://rpms.remirepo.net/enterprise/remi-release-9.rpm -y
</code></pre><h2>包管理器(<a href="https://anaconda.org/">https://anaconda.org/</a>)</h2><pre><code class="language-bash"># conda
dnf install conda -y
# 初始化
conda init base
# 创建虚拟环境
conda create -p /home/soft/ffmpeg6
# 激活虚拟环境
source activate /home/soft/ffmpeg6
conda activate /home/soft/ffmpeg6
# 查看虚拟环境
conda env list
# 安装ffmpeg
conda install -c conda-forge ffmpeg
# 配置环境变量( vi /etc/profile )
export PATH=/home/soft/ffmpeg6/bin:$PATH
source /etc/profile
# 转码
ffmpeg -i input.mp4 -f hls -c:v libx264 -c:a aac -hls_list_size 0 -hls_time 3 -force_key_frames &quot;expr:gte(t,n_forced*3)&quot; -s 1080x1920 -r 25 -hls_segment_filename output_%02d.ts output.m3u8
</code></pre><pre><code class="language-bash"># 退出虚拟环境
source deactivate base
source deactivate /home/soft/ffmpeg6
dnf remove conda -y
</code></pre><h2>交换空间</h2><pre><code class="language-bash"># 查看
swapon --show
free -m
# 创建
fallocate -l 8G /swapfile
# 权限
chmod 600 /swapfile
# 设置、激活
mkswap /swapfile
swapon /swapfile
# 开机挂载
vi /etc/fstab
</code></pre><ul><li>末尾添加&quot;/swapfile swap swap defaults 0 0&quot;</li></ul><h4>阿里云服务器</h4><pre><code class="language-bash">vi /etc/sysctl.conf
</code></pre><ul><li>vm.swappiness = 60</li><li>reboot</li></ul><h2>防火墙( Firewall )</h2><pre><code class="language-bash"># 开机启动
systemctl enable firewalld
# 启动
systemctl start firewalld
# 重启
firewall-cmd --reload
</code></pre><h4>1) 服务</h4><pre><code class="language-bash"># 允许
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --permanent --zone=public --add-service=mysql
# 禁用
firewall-cmd --permanent --zone=public --remove-service=mysql
</code></pre><h4>2) 端口</h4><pre><code class="language-bash"># 允许
firewall-cmd --permanent --zone=public --add-port=8080/tcp
# 禁用
firewall-cmd --permanent --zone=public --remove-port=8080/tcp
</code></pre><h4>3) 查看</h4><pre><code class="language-bash"># 所以规则
firewall-cmd --zone=public --list-all
# 永久选项所支持的服务
firewall-cmd --permanent --get-services
# 支持的永久区域
firewall-cmd --permanent --get-zones
# 默认区域
firewall-cmd --get-default-zone
# 服务状态
firewall-cmd --query-service=http
</code></pre>`,19)])))}});export{f as default,d as excerpt,i as frontmatter};
