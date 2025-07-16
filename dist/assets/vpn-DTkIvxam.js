import{d as s,c as t,a,o as p}from"./index-BNT8ip_b.js";const r={class:"markdown-body"},i={},u="",d=s({__name:"vpn",setup(o,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(c,e)=>(p(),t("div",r,e[0]||(e[0]=[a(`<h1>VPN 服务器</h1><h2>安装软件</h2><pre><code class="language-bash"># 安装
dnf install openvpn -y
# 证书软件
dnf install easy-rsa -y
</code></pre><h4>1) 证书目录</h4><pre><code class="language-bash">mkdir /etc/openvpn/easy-rsa
cp -r /usr/share/easy-rsa/3.1.6/* /etc/openvpn/easy-rsa/
cd /etc/openvpn/easy-rsa
# 初始化
./easyrsa init-pki
</code></pre><h4>2) 配置文件( vi pki/vars )</h4><pre><code class="language-bash">set_var EASYRSA_DN              &quot;cn_only&quot;
set_var EASYRSA_REQ_COUNTRY     &quot;CN&quot;
set_var EASYRSA_REQ_PROVINCE    &quot;YN&quot;
set_var EASYRSA_REQ_CITY        &quot;KunMing&quot;
set_var EASYRSA_REQ_ORG         &quot;WebMIS&quot;
set_var EASYRSA_REQ_EMAIL       &quot;klingsoul@163.com&quot;
set_var EASYRSA_REQ_OU          &quot;WebMIS&quot;
</code></pre><h4>3) 生成证书</h4><pre><code class="language-bash"># 根证书
./easyrsa build-ca nopass
# Server端
./easyrsa gen-req server nopass
./easyrsa sign server server          # confirm request details:时,输入yes
./easyrsa gen-dh
# Client端
./easyrsa gen-req client nopass
./easyrsa sign client client          # confirm request details:时,输入yes
# 认证密钥
openvpn --genkey --secret ta.key
# 查看
tree
</code></pre><h4>4) 服务端配置文件( vi /etc/openvpn/server.conf )</h4><pre><code class="language-bash"># 监听本机ip地址
local 10.0.8.10
# 监听本机ip地址
port 1194
# 协议 tcp udp
proto tcp
# 隧道模式 tun tap
dev tun
# ca证书
ca /etc/openvpn/easy-rsa/pki/ca.crt
# 服务端公钥
cert /etc/openvpn/easy-rsa/pki/issued/server.crt
# 服务端私钥
key /etc/openvpn/easy-rsa/pki/private/server.key
# 证书校验算法 
dh /etc/openvpn/easy-rsa/pki/dh.pem
# 开启TLS-auth，使用ta.key
# tls-auth /etc/openvpn/easy-rsa/ta.key 0
# 加密认证算法
cipher AES-256-GCM
# 给客户端分配的地址池
server 10.8.0.0 255.255.255.0
# 保留上次分配的IP地址
ifconfig-pool-persist ipp.txt
# 自动推送客户端上的网关及DHCP(使用服务器代理上网)
push &quot;redirect-gateway def1 bypass-dhcp&quot;
# 指定DNS
push &quot;dhcp-option DNS 8.8.8.8&quot;
push &quot;dhcp-option DNS 8.8.4.4&quot;
# 允许客户端访问的内网网段
# push &quot;route 172.16.1.0 255.255.255.0&quot;
# 允许客户端与客户端之间通信
client-to-client
# 允许同一个客户端证书多次登录
duplicate-cn
# 存活时间，10秒ping一次，120秒如果未收到响应则视为短线
keepalive 10 120
# 启动lzo数据压缩格式
comp-lzo
# 最多允许100个客户端连接
max-clients 100
# 用户和用户组
user openvpn
group openvpn
# 重新启动状态
persist-key
persist-tun
# 日志位置，记录openvpn状态
status /var/log/openvpn-status.log                         
log /var/log/openvpn.log
log-append /etc/openvpn/log/openvpn.log
# openvpn版本
verb 3
# 20条相同信息不记录日志
mute 20
# 设置TLS最低版本
tls-version-min 1.3
</code></pre><h4>5) 创建启动程序( vi /lib/systemd/system/openvpn@.service )</h4><pre><code class="language-bash">[Unit]
Description=OpenVPN %I
After=network.target
[Service]
Type=notify
PrivateTmp=true
ExecStart=/usr/sbin/openvpn --cd /etc/openvpn/ --config %i.conf
[Install]
WantedBy=multi-user.target
</code></pre><h4>6) 启动服务</h4><pre><code class="language-bash">systemctl start openvpn@server
systemctl enable openvpn@server
</code></pre><h2>客户端工具</h2><pre><code class="language-bash"># 安装软件
pacman -S openvpn networkmanager-openvpn
# 下载证书
mkdir ssl &amp;&amp; cd ssl
scp root@43.155.59.183:/etc/openvpn/easy-rsa/pki/ca.crt ./
scp root@43.155.59.183:/etc/openvpn/easy-rsa/pki/issued/client.crt ./
scp root@43.155.59.183:/etc/openvpn/easy-rsa/pki/private/client.key ./
</code></pre><ul><li>端口 1194</li><li>数据压缩 LZO</li><li>使用TCP连接</li><li>虚拟设备类型 TUN</li><li>IPv6 tun 链路</li></ul><h2>实现上网功能</h2><pre><code class="language-bash"># 开启IP转发
echo net.ipv4.ip_forward=1 &gt;&gt; /etc/sysctl.conf
sysctl -p
</code></pre><h2>防火墙配置</h2><h3>1) Firewalld</h3><pre><code class="language-bash"># 添加端口
firewall-cmd --permanent --zone=public --add-port=1194/tcp
# 添加包转发
firewall-cmd --permanent --zone=public --add-rich-rule=&#39;rule family=&quot;ipv4&quot; source address=&quot;10.8.0.0/24&quot; masquerade&#39;
# 重启防火墙
firewall-cmd --reload
</code></pre><h3>2) Iptables</h3><pre><code class="language-bash"># 添加端口
iptables -I INPUT -p tcp --dport 1194 -j ACCEPT
# 添加包转发
iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
# 保存规则
service iptables save
# 重启服务
service iptables restart
</code></pre>`,25)])))}});export{d as default,u as excerpt,i as frontmatter};
