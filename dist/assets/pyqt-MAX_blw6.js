import{d as t,c as a,a as p,o}from"./index-B-lAKudI.js";const i={class:"markdown-body"},r={},y="",d=t({__name:"pyqt",setup(s,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(c,n)=>(o(),a("div",i,n[0]||(n[0]=[p(`<h2>安装PYQT5</h2><pre><code class="language-bash">#ArchLinux
pacman -S python-pyqt5 qt5-base
pacman -S python-pyqt5-webengine
pacman -S qt5-tools

# Windows
pip install PyQt5
pip install PyQtWebEngine
pip install PyQt5-tools

# 打包
pip install pyinstaller
</code></pre><h2>打包</h2><pre><code class="language-bash"># 静态库
pyinstaller -F -w -i=logo.ico main.py
pyinstaller main.spec

# 图片资源
pyrcc5 -o favicon.py favicon.qrc

</code></pre><h2>VSCode</h2><ul><li>安装 pyqt integration</li><li>配置 &gt; 扩展设置</li><li>Pyuic:Cmd “pyuic5”</li><li>Qtdesigner:Path “designer”</li></ul><h2>ArchLinux 重新安装</h2><pre><code class="language-bash"># 卸载
pacman -Rsc python-pyqt5 qt5-base
# 清理文件
rm -fr /usr/lib/python3.10/site-packages/PyQt5
# 安装
pacman -S python-pyqt5 qt5-base
</code></pre>`,8)])))}});export{d as default,y as excerpt,r as frontmatter};
