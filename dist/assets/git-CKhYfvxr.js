import{d as o,c as i,a as n,o as s}from"./index-CG-Hq01z.js";const g={class:"markdown-body"},c={},d="",m=o({__name:"git",setup(a,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(h,t)=>(s(),i("div",g,t[0]||(t[0]=[n(`<h1>Git 服务器搭建</h1><h2>一、服务器配置</h2><h4>1) 创建账号</h4><pre><code class="language-bash">groupadd git
useradd git -g git
passwd git
</code></pre><h4>2) 修改权限</h4><pre><code class="language-bash">vi /etc/passwd
</code></pre><p>– git:x:1001:1001::/home/git:/bin/git-shell</p><br><h2>二、证书登录</h2><h4>1) 公钥文件(一次)</h4><pre><code class="language-bash">mkdir -p /home/git/.ssh
touch /home/git/.ssh/authorized_keys
chmod 644 /home/git/.ssh/authorized_keys
</code></pre><h4>2) RSA密钥</h4><pre><code class="language-bash"># 本地-生成密钥
ssh-keygen -t rsa
# 本地-上传公钥
scp .ssh/id_rsa.pub root@服务器IP:/home/git/
# 服务器-导入公钥
cat id_rsa.pub &gt;&gt; .ssh/authorized_keys
</code></pre><h2>三、Git仓库</h2><h4>1) 创建空仓库</h4><pre><code class="language-bash"># 创建目录
mkdir /home/git/gitrepo
chown git:git /home/git/gitrepo
chmod -R 774 /home/git
cd /home/git/gitrepo
# 配置
git config --global init.defaultBranch main
git config --global user.name &quot;webmis&quot;
git config --global user.email &quot;klingsoul@163.com&quot;
# 创建仓库
git init --bare test.git
chown -R git:git test.git
</code></pre><h4>2) 初始化仓库</h4><pre><code class="language-bash">mkdir /home/www/test
cd /home/www/test
# 初始化
git init
touch README.md
git add README.md
git commit -m &quot;first commit&quot;
git remote add origin webmis@127.0.0.1:/home/git/gitrepo/test.git
git push -u origin &quot;main&quot;
</code></pre><h4>3) 克隆仓库</h4><pre><code class="language-bash">git clone git@服务IP:/home/git/gitrepo/test.git
</code></pre>`,20)])))}});export{m as default,d as excerpt,c as frontmatter};
