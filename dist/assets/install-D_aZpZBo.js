import{d as n,c as s,a as o,o as a}from"./index-BNT8ip_b.js";const l={class:"markdown-body"},d={},p="",g=n({__name:"install",setup(t,{expose:r}){return r({frontmatter:{},excerpt:void 0}),(i,e)=>(a(),s("div",l,e[0]||(e[0]=[o(`<h1>Vue开发环境</h1><h2>ArchLinux</h2><h4>1) 安装Git</h4><pre><code class="language-bash">pacman -S git
</code></pre><h4>2) 安装NodeJS</h4><pre><code class="language-bash">pacman -S nodejs-lts-gallium
</code></pre><h4>3) 安装Yarn</h4><pre><code class="language-bash">pacman -S yarn
yarn -v
</code></pre><h4>4) 安装Vue3</h4><pre><code class="language-bash">yarn cache clean
yarn global add @vue/cli
# 查看
vue -V
</code></pre><br><h2>Windows</h2><h4>1) 安装Git</h4><ul><li>下载: <a href="https://git-scm.com/download/win">Git</a></li><li>安装: 64位版 &gt; 重启系统</li><li>VsCode: “ctrl+\`” &gt; “终端” &gt; “powershell” &gt; “选择默认 shell” &gt; “Git Bash” &gt; 重启</li><li>终端输入: “cmd” 和 “bash” 可相互切换</li></ul><h4>2) 安装NodeJS</h4><ul><li>下载 <a href="https://nodejs.org/en/download/">Node.js</a></li><li>安装: “node-v14.15.1-x64.msi” 到 “D:\\server\\nodejs”</li><li>查看: “node –v”</li></ul><h4>3) 安装Yarn</h4><pre><code class="language-bash">npm install -g yarn
# 查看
yarn -v
</code></pre><h4>4) 安装Vue3</h4><pre><code class="language-bash">yarn global add @vue/cli
# 查看
vue -V
</code></pre><br><h2>MacOS</h2><h4>1) 安装Git</h4><pre><code class="language-bash">git
</code></pre><h4>2) 安装NodeJS</h4><ul><li>下载 <a href="https://nodejs.org/en/download/">Node.js</a></li></ul><pre><code class="language-bash">node –v
</code></pre><h4>3) 安装Yarn</h4><pre><code class="language-bash">sudo npm install -g yarn
# 查看
yarn -v
</code></pre><h4>4) 安装Vue3</h4><pre><code class="language-bash">sudo npm install -g cnpm
sudo cnpm install -g @vue/cli
# 查看
vue -V
</code></pre><h2>Vue3项目</h2><pre><code class="language-bash">vue create demo
</code></pre><ul><li>◉ Choose Vue version</li><li>◉ Babel</li><li>◉ TypeScript</li><li>◯ Progressive Web App (PWA) Support</li><li>◉ Router</li><li>◉ Vuex</li><li>◉ CSS Pre-processors</li><li>◉ Linter / Formatter</li><li>◯ Unit Testing</li><li>◯ E2E Testing</li></ul><p>? Use class-style component syntax? <strong>Yes</strong><br> ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? <strong>Yes</strong><br> ? Use history mode for router? (Requires proper server setup for index fallback in production) <strong>Yes</strong><br> ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): <strong>Less</strong><br> ? Pick a linter / formatter config: <strong>Basic</strong><br> ? Pick additional lint features: <strong>Lint on save</strong><br> ? Where do you prefer placing config for Babel, ESLint, etc.? <strong>In package.json</strong><br> ? Save this as a preset for future projects? (y/N) <strong>n</strong><br></p><p><br><br></p>`,36)])))}});export{g as default,p as excerpt,d as frontmatter};
