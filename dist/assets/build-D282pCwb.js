import{d as o,c as i,a as s,o as l}from"./index-C8nBvhCm.js";const r={class:"markdown-body"},u={},c="",d=o({__name:"build",setup(n,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(p,e)=>(l(),i("div",r,e[0]||(e[0]=[s(`<h2>Project</h2><h4>模板( AdobeXD )</h4><ul><li>project/设计图/APP.xd</li><li>project/设计图/Screen.xd</li></ul><h4>使用技巧</h4><ul><li>推荐“AdobeXD”设计APP，图标制作成矢量，便于导出 SVG 格式</li><li>安装 Adobe Flutter 插件，复制 SVG 内容到 “lib/library/ui/ui-icons.dart” 方便使用</li><li>在“APP.xd”设计图标和启动画面，复制到“Screen.xd”缩放成各种尺寸，Ctrl+e选择目录，覆盖对应文件 <br><br></li></ul><h2>Android</h2><h4>1) 证书</h4><pre><code class="language-bash"># 存放目录
cd android/app/

# 生成签名文件(jks)
keytool -genkey -v -keystore key.jks -alias key -keyalg RSA -keysize 2048 -validity 20000

# 查看签名(sha1)
keytool -v -list -keystore key.jks

# keystore转jks
keytool -importkeystore -srckeystore XXX.keystore  -srcstoretype JKS -deststoretype PKCS12 -destkeystore key.p12
keytool -v -importkeystore -srckeystore key.p12  -srcstoretype PKCS12 -destkeystore key.jks -deststoretype JKS
keytool -importkeystore -srckeystore key.jks -destkeystore key.jks -deststoretype pkcs12
</code></pre><p><strong>配置打包</strong>( android/key.properties )</p><pre><code class="language-bash">storePassword=123456
keyPassword=123456
keyAlias=key
storeFile=key.jks
</code></pre><h4>2) 打包</h4><pre><code class="language-bash">flutter build apk
</code></pre><br><h2>IOS</h2><h4>1) 相关文档</h4><ul><li>系统: <a href="/docs/linux/archlinux/macos">安装&amp;配置</a></li><li>证书: <a href="/docs/vue/install/build">VueAPP &gt; 打包&amp;发布 &gt; iOS</a></li></ul><h4>2) 打包&amp;上架</h4><ul><li>编译: flutter build ios --release</li><li>Xcode打开: flutter &gt; ios &gt; Runner.xcworkspace</li><li>Profile: Signings &amp; Capabilities &gt; 填写BundleID和选择证书Profile文件</li><li>证书: Build Signings &gt; Code Signing &gt; Release &gt; 选择&quot;开发或生产&quot;</li><li>测试IPA: Product &gt; Archive &gt; Ad Hoc &gt; Export( 导出ipa文件 )</li><li>提交上架: Product &gt; Archive &gt; iOS App Store &gt; Upload( 提交到AppStore )</li><li>切换账户: Xcode &gt; Preferences &gt; Accounts</li></ul><h4>MinimumOSVersion问题</h4><ul><li>flutter clean</li><li>flutter build ios --release</li><li>Xcode &gt; Runner &gt; Flutter &gt; AppFrameworkInfo.plist ( MinimumOSVersion: 10.0 )</li><li>Xcode &gt; Runner &gt; Runner &gt; Info.plist ( MinimumOSVersion: 10.0 )</li><li>Xcode &gt; Runner &gt; info &gt; Deployment Target &gt; ( 10.0 )</li></ul><h4>UniversalLink( 通用链接 )</h4><p><strong><a href="https://webmis.vip/.well-known/apple-app-site-association">https://webmis.vip/.well-known/apple-app-site-association</a></strong></p><pre><code class="language-json">{
  &quot;applinks&quot;: {
    &quot;apps&quot;: [],
    &quot;details&quot;: [
      {
        &quot;appID&quot;: &quot;ABCDE12345(团队ID).com.example.app(包名)&quot;,
        &quot;paths&quot;: [&quot;/app/*&quot;]
      }
    ]
  }
}
</code></pre><p><strong>xcode &gt; Capabilities &gt; Associated Domains</strong></p><pre><code class="language-text">applinks:webmis.vip
applinks:www.webmis.vip
</code></pre><ul><li>从这里填入的域名请求文件 apple-app-site-association</li><li>测试: 发短信 “<a href="https://webmis.vip/app/">https://webmis.vip/app/</a>” &gt; 点击打开APP &gt; 成功</li></ul>`,26)])))}});export{d as default,c as excerpt,u as frontmatter};
