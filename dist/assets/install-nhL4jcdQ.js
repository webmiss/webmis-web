import{d as n,c as i,a as l,o as t}from"./index-Dldsk6pd.js";const r={class:"markdown-body"},c={},p="",v=n({__name:"install",setup(o,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(h,a)=>(t(),i("div",r,a[0]||(a[0]=[l(`<h1>Java开发环境</h1><h2>ArchLinux</h2><h4>1) 安装Git</h4><pre><code class="language-bash">pacman -S git
</code></pre><h4>2) 安装JavaJDK</h4><pre><code class="language-bash">pacman -S jdk-openjdk jre-openjdk
# 查看
java --version
javac --version
</code></pre><h4>3) 安装Maven</h4><pre><code class="language-bash">pacman -S maven
# 查看
mvn –v
</code></pre><br><h2>Windows</h2><h4>1) 安装Git</h4><ul><li>下载: <a href="https://git-scm.com/download/win">Git</a></li><li>安装: 64位版 &gt; 重启系统</li><li>VsCode: “ctrl+\`” &gt; “终端” &gt; “powershell” &gt; “选择默认 shell” &gt; “Git Bash” &gt; 重启</li><li>终端输入: “cmd” 和 “bash” 可相互切换</li></ul><h4>2) 安装JavaJDK</h4><ul><li>下载: <a href="http://jdk.java.net/15/">OpenJdk</a></li><li>解压: “openjdk-15.0.1_windows-x64_bin.zip” 到 “D:\\server\\jdk”</li><li>搜索: “环境变量” &gt; “新建” &gt; 变量名: “JAVA_HOME” 变量值: “D:\\server\\jdk”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “%JAVA_HOME%\\bin”</li><li>CMD: “java –version” 和 “javac –version”</li></ul><h4>3) 安装Maven</h4><ul><li>下载: <a href="https://maven.apache.org/download.cgi">Maven</a></li><li>解压: “apache-maven-3.6.3-bin.zip” 到 “D:\\server\\maven”</li><li>搜索: “环境变量” &gt; “新建” &gt; 变量名: “MAVEN_HOME” 变量值: “D:\\server\\maven”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “%MAVEN_HOME%\\bin”</li><li>查看: “mvn –v”</li><li>CMD: “java –version” 和 “javac –version”</li></ul><br><h2>MacOS</h2><h4>1) 安装Git</h4><pre><code class="language-bash">git
</code></pre><h4>2) 安装JavaJDK</h4><ul><li>下载: <a href="http://jdk.java.net/15/">OpenJdk</a></li></ul><h4>3) 安装Maven</h4><ul><li>下载: <a href="https://maven.apache.org/download.cgi">Maven</a></li></ul><p><br><br></p>`,25)])))}});export{v as default,p as excerpt,c as frontmatter};
