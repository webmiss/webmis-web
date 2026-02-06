import{d as t,c as l,H as a,o as i}from"./vendor-BCPY0tYI.js";const s={class:"markdown-body"},h={},c="",p=t({__name:"install",setup(r,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(n,e)=>(i(),l("div",s,e[0]||(e[0]=[a(`<h1>Go开发环境</h1><h2>ArchLinux</h2><h4>1) 安装Git</h4><pre><code class="language-bash">pacman -S git
</code></pre><h4>2) 安装Go</h4><pre><code class="language-bash">pacman -S go
# 查看
go version
</code></pre><h4>3) 配置( vim ~/.bashrc )</h4><pre><code class="language-bash"># Go 环境变量配置
export GOPATH=$HOME/go
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct
export GOBIN=$GOPATH/bin
export PATH=$PATH:$GOBIN
</code></pre><ul><li>生效: source ~/.bashrc</li><li>验证: go env GOPATH GO111MODULE GOPROXY GOBIN</li></ul><h4>4) 热启动</h4><pre><code class="language-bash">go install github.com/air-verse/air@latest
</code></pre><h2>Windows</h2><h4>1) 安装Git</h4><ul><li>下载: <a href="https://git-scm.com/download/win">Git</a></li><li>安装: 64位版 &gt; 重启系统</li><li>VsCode: “ctrl+\`” &gt; “终端” &gt; “powershell” &gt; “选择默认 shell” &gt; “Git Bash” &gt; 重启</li><li>终端输入: “cmd” 和 “bash” 可相互切换</li></ul><h4>2) 安装Go</h4><ul><li>下载: <a href="https://golang.google.cn/dl/">go.windows-amd64.msi</a></li><li>解压: “go1.15.8.windows-amd64.msi” 到 “D:\\server\\go”</li><li>搜索: “环境变量” &gt; “新建” &gt; 变量名: “GOROOT” 变量值: “D:\\server\\go”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “%GOROOT%\\bin”</li><li>CMD: “go version”</li></ul><br><h2>MacOS</h2><h4>1) 安装Git</h4><pre><code class="language-bash">git
</code></pre><h4>2) 安装Go</h4><ul><li>下载: <a href="https://golang.google.cn/dl/">go.darwin-amd64.pkg</a></li></ul><p><br><br></p>`,23)])))}});export{p as default,c as excerpt,h as frontmatter};
