import{d as a,c as l,a as n,o}from"./index-YZy2HEBW.js";const t={class:"markdown-body"},r={},u="",d=a({__name:"config",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,e)=>(o(),l("div",t,e[0]||(e[0]=[n(`<h2>开启远程登录</h2><pre><code class="language-bash"> vi /etc/ssh/sshd_config
</code></pre><ul><li>PasswordAuthentication yes</li><li>systemctl restart ssh</li></ul><h2>Sudo权限</h2><pre><code class="language-bash">chmod +w /etc/sudoers
vi /etc/sudoers
</code></pre><ul><li>webmis ALL=(ALL:ALL) NOPASSWD: ALL</li></ul><h2>交换空间</h2><pre><code class="language-bash"># 查看
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
</code></pre><ul><li>vm.swappiness = 60</li><li>reboot</li></ul><h2>防火墙( ufw )</h2><pre><code class="language-bash"># 添加端口
ufw allow 22/tcp
# 添加服务
ufw allow http
ufw allow https
ufw allow 3306
# 查看状态
ufw status
# 开机启动
systemctl enable ufw
</code></pre>`,14)])))}});export{d as default,u as excerpt,r as frontmatter};
