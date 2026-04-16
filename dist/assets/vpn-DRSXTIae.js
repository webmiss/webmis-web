import{d as t,c as s,H as a,o as r}from"./vendor-oTex03eR.js";const o={class:"markdown-body"},u={},i="",d=t({__name:"vpn",setup(p,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(c,e)=>(r(),s("div",o,e[0]||(e[0]=[a(`<h1>VPN 服务器</h1><h2>安装软件</h2><pre><code class="language-bash"># CentOS
dnf update -y
dnf install -y openvpn easy-rsa
# Ubuntu
apt update &amp;&amp; sudo apt upgrade -y
apt install -y openvpn easy-rsa
</code></pre><h4>1) 创建PKI目录</h4><pre><code class="language-bash">mkdir -p /etc/openvpn/easy-rsa
cp -r /usr/share/easy-rsa/* /etc/openvpn/easy-rsa/
cd /etc/openvpn/easy-rsa
</code></pre><h4>2) 配置文件( vars )</h4><pre><code class="language-bash">echo &#39;set_var EASYRSA_REQ_COUNTRY &quot;CN&quot;&#39; &gt;&gt; vars
echo &#39;set_var EASYRSA_REQ_PROVINCE &quot;YunNan&quot;&#39; &gt;&gt; vars
echo &#39;set_var EASYRSA_REQ_CITY &quot;KunMing&quot;&#39; &gt;&gt; vars
echo &#39;set_var EASYRSA_REQ_ORG &quot;WebMIS&quot;&#39; &gt;&gt; vars
echo &#39;set_var EASYRSA_REQ_OU &quot;WebMIS&quot;&#39; &gt;&gt; vars
echo &#39;set_var EASYRSA_REQ_EMAIL &quot;klingsoul@163.com&quot;&#39; &gt;&gt; vars
</code></pre><h4>3) 生成证书</h4><pre><code class="language-bash"># 初始化(根证书)
./easyrsa init-pki
./easyrsa build-ca nopass

# 服务器证书
./easyrsa gen-req server nopass       # Easy-RSA CA: webmis
./easyrsa sign-req server server      # confirm request details: yes
./easyrsa gen-dh

# 生成 TLS 加密密钥（防止重放攻击）
openvpn --genkey --secret /etc/openvpn/tls-auth.key

# 复制证书
cp pki/ca.crt pki/issued/server.crt pki/private/server.key /etc/openvpn/
cp pki/dh.pem /etc/openvpn/
</code></pre><h4>4) 账号密码</h4><pre><code class="language-bash">useradd -m -s /bin/bash webmis
passwd webmis
</code></pre><h4>6) 服务端配置文件( vi /etc/openvpn/server.conf )</h4><p>*** cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf /etc/openvpn/server.conf ***</p><pre><code class="language-bash"># 基础配置
port 1180
proto udp
dev tun
ca ca.crt
cert server.crt
key server.key
dh dh.pem

# TLS加密
tls-auth tls-auth.key 0  # TLS加密（0表示服务端）
cipher AES-256-GCM # 加密算法（与你日志中的TLS_AES_256_GCM_SHA384匹配）
auth SHA384        # 认证算法
tls-version-min 1.3 # 强制TLS 1.3（提升安全性）

# 核心：账号密码认证
plugin /usr/lib/x86_64-linux-gnu/openvpn/plugins/openvpn-plugin-auth-pam.so login
verify-client-cert none
username-as-common-name

# 网络配置（分配 VPN 网段，转发所有流量）
server 10.8.0.0 255.255.255.0
push &quot;redirect-gateway def1 bypass-dhcp&quot;
push &quot;dhcp-option DNS 8.8.8.8&quot;
push &quot;dhcp-option DNS 8.8.4.4&quot;

# 优化配置
keepalive 10 120
persist-key
persist-tun
log /var/log/openvpn/openvpn.log
verb 3
</code></pre><h4>7) 创建启动程序( vi /lib/systemd/system/openvpn@.service )</h4><pre><code class="language-bash">[Unit]
Description=OpenVPN %I
After=network.target
[Service]
Type=notify
PrivateTmp=true
ExecStart=/usr/sbin/openvpn --cd /etc/openvpn/ --config %i.conf
[Install]
WantedBy=multi-user.target
</code></pre><h4>8) 启动服务</h4><pre><code class="language-bash"># 创建用户组
groupadd -r openvpn
# 启动
systemctl start openvpn@server
systemctl enable openvpn@server
# 查看日志
journalctl -u openvpn@server -e
cat /var/log/openvpn/openvpn.log
# 检查状态
netstat -tulpn | grep openvpn
</code></pre><h2>客户端工具</h2><h4>1) Gnome桌面</h4><pre><code class="language-bash"># 安装软件
pacman -S openvpn networkmanager-openvpn
# 下载证书
mkdir ssl &amp;&amp; cd ssl
scp root@webmis.vip:/etc/openvpn/ca.crt ./
scp root@webmis.vip:/etc/openvpn/tls-auth.key ./
</code></pre><h4>2) 配置文件( vi client.ovpn )</h4><pre><code class="language-bash"># 配置
client
dev tun
proto udp
remote 47.82.115.221 1180
resolv-retry infinite
nobind
persist-key
persist-tun
remote-cert-tls server
# 认证配置（用户名密码）
auth-user-pass
auth-nocache
# TLS加密
cipher AES-256-GCM
auth SHA384
tls-auth tls-auth.key 1
tls-version-min 1.3
verb 3
# 证书
ca ca.crt
key-direction 1
</code></pre><h4>3) 连接</h4><pre><code class="language-bash"># 命令行方式
sudo openvpn --config client.ovpn
</code></pre><ul><li>NetworkManager : 添加VPN &gt; 从文件导入 &gt; 选择&quot;client.ovpn&quot;</li><li>Windows : <a href="https://openvpn.net/community/">OpenVPN GUI</a> &gt; 勾选「Launch OpenVPN GUI」 &gt; 右下角图标 &gt; 右键「Import file」 &gt; 选择&quot;client.ovpn&quot;</li></ul><h2>实现上网功能</h2><pre><code class="language-bash"># 开启IP转发
echo net.ipv4.ip_forward=1 &gt;&gt; /etc/sysctl.conf
echo net.ipv6.conf.default.forwarding=1 &gt;&gt; /etc/sysctl.conf
sysctl -p
</code></pre><h2>防火墙配置</h2><h3>1) Firewalld</h3><pre><code class="language-bash"># 添加端口
firewall-cmd --permanent --zone=public --add-port=1194/tcp
# 添加包转发
firewall-cmd --permanent --zone=public --add-rich-rule=&#39;rule family=&quot;ipv4&quot; source address=&quot;10.8.0.0/24&quot; masquerade&#39;
# 重启防火墙
firewall-cmd --reload
</code></pre><h3>2) Ufw</h3><pre><code class="language-bash"># 添加端口
ufw allow 1180/udp
# 添加包转发( 外网网卡名称eth0 )
ufw route allow in on tun0 out on eth0
ufw route allow in on eth0 out on tun0
# 重启服务
ufw enable
ufw reload
# 查看状态
ufw status verbose
</code></pre><p>*** 添加包转发( vi /etc/ufw/before.rules ) ***</p><pre><code class="language-bash"># 文件开头的 *filter 之前
*nat
:POSTROUTING ACCEPT [0:0]
-A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
COMMIT
</code></pre><h3>3) Iptables</h3><pre><code class="language-bash"># 添加端口
iptables -I INPUT -p tcp --dport 1194 -j ACCEPT
# 添加包转发
iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
# 保存规则
service iptables save
# 重启服务
service iptables restart
</code></pre>`,37)])))}});export{d as default,i as excerpt,u as frontmatter};
