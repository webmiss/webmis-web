import{d as o,c as r,a as n,o as a}from"./index-YZy2HEBW.js";const l={class:"markdown-body"},c={},p="",h=o({__name:"install",setup(s,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(i,e)=>(a(),r("div",l,e[0]||(e[0]=[n(`<h1>Flutter开发环境</h1><h2>ArchLinux</h2><h4>1) 安装Git</h4><pre><code class="language-bash">pacman -S git
</code></pre><h4>2) 安装JavaJdk</h4><pre><code class="language-bash">pacman -S jdk-openjdk jre-openjdk maven
# 查看
java -version
javac -version
</code></pre><h4>3) 安装AndroidSdk</h4><pre><code class="language-bash">pacman -S android-studio
</code></pre><p><strong>环境变量</strong> ( vi /etc/profile )</p><pre><code class="language-bash">export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH
</code></pre><p><strong>刷新</strong></p><pre><code class="language-bash">source /etc/profile
</code></pre><p><strong>SDK Manager</strong> 打开 AndroidStudio &gt; More Actions &gt; SDK Manager</p><pre><code class="language-bash"># SDK Location
/opt/android-sdk
# SDK Platforms
Android 10.0
Android 6.0
# SDK Tools
Android SDK Build-Tools
Android SDK Command-line Tools
Android Emulator
Android SDK Platform-Tools
</code></pre><h4>4) 模拟器</h4><pre><code class="language-bash"># 安装
pacman -S genymotion

# ARM Translation Tool
adb push Genymotion-ARM-Translation_for_9.0.zip /sdcard/Download
adb shell flash-archive.sh /sdcard/Download/Genymotion-ARM-Translation_for_9.0.zip
# 效验是否成功
adb shell getprop ro.product.cpu.abilist
</code></pre><ul><li>Custom Phone 6.0 480x854 160-MDPI</li><li><a href="https://github.com/m9rco/Genymotion_ARM_Translation/tree/master/package">https://github.com/m9rco/Genymotion_ARM_Translation/tree/master/package</a></li></ul><h4>5) 安装Flutter</h4><pre><code class="language-bash">pacman -S flutter dart
# 目录权限
chmod -R 777 /opt/flutter
</code></pre><p><strong>中国镜像</strong> ( vi /etc/profile )</p><pre><code class="language-bash">export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
</code></pre><h4>6) 依赖</h4><pre><code class="language-bash">flutter doctor -v
</code></pre><h2>UI自动化工具</h2><h4>1)安装</h4><pre><code class="language-bash"># App
pip install uiautomator2 weditor
# 浏览器
pip install selenium requests
</code></pre><ul><li>火狐浏览器: <a href="http://www.firefox.com.cn/">http://www.firefox.com.cn/</a></li><li>浏览器驱动: <a href="https://github.com/mozilla/geckodriver/releases">https://github.com/mozilla/geckodriver/releases</a></li></ul><h4>2)使用</h4><pre><code class="language-bash"># 已连接设备
adb devices
# 当前运行应用
uiautomator2 current
# 定位元素
python -m weditor
</code></pre><br><h2>Windows</h2><h4>1) 安装Git</h4><ul><li>下载 <a href="https://git-scm.com/download/win">Git</a></li><li>安装: 64位版 &gt; 重启系统</li><li>VsCode: “ctrl+\`” &gt; “终端” &gt; “powershell” &gt; “选择默认 shell” &gt; “Git Bash” &gt; 重启</li><li>终端输入: “cmd” 和 “bash” 可相互切换</li></ul><h4>2) 安装JavaJdk</h4><ul><li><a href="https://jdk.java.net/java-se-ri/8-MR3">OpenJdk8</a></li><li>解压: “openjdk-8u41-b04-windows-i586-14_jan_2020.zip” 到 “D:\\server\\jdk8”</li><li>搜索: “环境变量” &gt; “新建” &gt; 变量名: “JAVA_HOME” 变量值: “D:\\server\\jdk”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “%JAVA_HOME%\\bin”</li><li>查看: “java –version” 和 “javac –version”</li></ul><h4>3) 安装AndroidSdk</h4><ul><li><a href="http://developer.android.com/sdk/index.html">AndroidStudio</a></li><li>安装: “android-studio-ide-191.5977832-windows.exe” 到 “D:\\server\\Android Studio”</li><li>配置: “Configure” &gt; “Settings” &gt; “System Settings” &gt; “HTTP Proxy” &gt; Automatic = “mirrors.neusoft.edu.cn:80”</li><li>配置: “Configure” &gt; “Settings” &gt; “System Settings” &gt; “Android SDK” &gt; “D:\\server\\android-sdk”</li><li>搜索: “环境变量” &gt; “新建” &gt; 变量名: “ANDROID_HOME” 变量值: “D:\\server\\android-sdk”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “%ANDROID_HOME%\\tools”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “%ANDROID_HOME%\\platform-tools”</li></ul><h4>4) 模拟器</h4><ul><li><a href="https://www.genymotion.com/download/">Genymotion</a></li></ul><h4>5) 安装Flutter</h4><pre><code class="language-bash">cd D:
cd server
git clone https://github.com/flutter/flutter.git -b stable --depth 1
</code></pre><p><strong>环境变量</strong></p><ul><li>搜索: “环境变量” &gt; “新建” &gt; 变量名: “PUB_HOSTED_URL” 变量值: “<a href="https://pub.flutter-io.cn">https://pub.flutter-io.cn</a>”</li><li>搜索: “环境变量” &gt; “新建” &gt; 变量名: “FLUTTER_STORAGE_BASE_URL” 变量值: “<a href="https://storage.flutter-io.cn">https://storage.flutter-io.cn</a>”</li><li>搜索: “环境变量” &gt; “Path” &gt; “添加” &gt; “D:\\server\\flutter\\bin”</li></ul><h4>6) 依赖</h4><pre><code class="language-bash">flutter doctor -v
</code></pre><br><h2>MacOS</h2><h4>1) 安装Git</h4><pre><code class="language-bash">git
</code></pre><h4>2) 安装XCode</h4><ul><li>应用商店下载</li></ul><h4>3) 模拟器</h4><pre><code class="language-bash">open -a Simulator
</code></pre><h4>4) Flutter</h4><pre><code class="language-bash">cd $HOME
git clone https://github.com/flutter/flutter.git -b stable --depth 1
</code></pre><p><strong>环境变量</strong>( vi $HOME/.bash_profile )</p><pre><code class="language-bash">export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH=PATH_TO_FLUTTER_GIT_DIRECTORY/flutter/bin:$PATH
export PATH=\`pwd\`/flutter/bin:$PATH
</code></pre><p><strong>开机启动</strong>( vi $HOME/.zshrc )</p><pre><code class="language-bash">source $HOME/.bash_profile
</code></pre><h4>5) 依赖</h4><pre><code class="language-bash"># 检测环境
flutter doctor -v
# xcode依赖
sudo gem install cocoapods
</code></pre><h4>6) 运行</h4><pre><code class="language-bash">flutter run
# 或者
flutter run -d 设备ID
# 查看设备ID
flutter doctor -v
</code></pre><p><br><br></p>`,64)])))}});export{h as default,p as excerpt,c as frontmatter};
