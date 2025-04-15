import{d as n,c as e,a as g,o as l}from"./index-5_hhwz4s.js";const s={class:"markdown-body"},h={},c="",p=n({__name:"install",setup(a,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(i,o)=>(l(),e("div",s,o[0]||(o[0]=[g(`<h1>Go开发环境</h1><h2>ArchLinux</h2><h4>1) 安装Git</h4><pre><code class="language-bash">pacman -S git
</code></pre><h4>2) 安装Go</h4><pre><code class="language-bash">pacman -S go
# 查看
go version
</code></pre><h4>3) 国内镜像</h4><pre><code class="language-bash">export GO111MODULE=on
export GOPROXY=https://goproxy.cn

go env -w GOPROXY=https://goproxy.cn
</code></pre><h4>4) 热启动</h4><pre><code class="language-bash"># golang.org/x 超时问题
mkdir -p $GOPATH/src/golang.org/x
cd $GOPATH/src/golang.org/x
git clone https://github.com/golang/net.git
git clone https://github.com/golang/sys.git
git clone https://github.com/golang/text.git
git clone https://github.com/golang/tools.git
# 工具
go get github.com/pilu/fresh
# 链接
ln -s $GOPATH/bin/fresh /usr/bin/
# 运行
fresh
</code></pre><h2>Windows</h2><h4>1) 安装Git</h4><ul><li>下载: <a href="https://git-scm.com/download/win">Git</a></li><li>安装: 64位版 &gt; 重启系统</li><li>VsCode: “ctrl+\`” &gt; “终端” &gt; “powershell” &gt; “选择默认 shell” &gt; “Git Bash” &gt; 重启</li><li>终端输入: “cmd” 和 “bash” 可相互切换</li></ul><h4>2) 安装Go</h4><ul><li>下载: <a href="https://golang.google.cn/dl/">go.windows-amd64.msi</a></li><li>解压: “go1.15.8.windows-amd64.msi” 到 “D:\\server\\go”</li><li>搜索: “环境变量” &gt; “新建” &gt; 变量名: “GOROOT” 变量值: “D:\\server\\go”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “%GOROOT%\\bin”</li><li>CMD: “go version”</li></ul><br><h2>MacOS</h2><h4>1) 安装Git</h4><pre><code class="language-bash">git
</code></pre><h4>2) 安装Go</h4><ul><li>下载: <a href="https://golang.google.cn/dl/">go.darwin-amd64.pkg</a></li></ul><p><br><br></p>`,22)])))}});export{p as default,c as excerpt,h as frontmatter};
