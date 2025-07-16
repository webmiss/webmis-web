import{d as a,c as s,a as c,o}from"./index-AbO7opoS.js";const n={class:"markdown-body"},h={},i="",d=a({__name:"elasticsearch",setup(l,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(r,t)=>(o(),s("div",n,t[0]||(t[0]=[c(`<h2>安装</h2><pre><code class="language-bash">wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
apt install apt-transport-https
echo &quot;deb https://artifacts.elastic.co/packages/7.x/apt stable main&quot; | sudo tee /etc/apt/sources.list.d/elastic-7.x.list
apt update &amp;&amp; apt install elasticsearch
</code></pre><h2>配置( vi /etc/elasticsearch/elasticsearch.yml )</h2><pre><code class="language-bash">cluster.name: my-application
node.name: node-1
cluster.initial_master_nodes: [&quot;node-1&quot;]
network.host: 0.0.0.0
http.port: 9200
path.data: /home/elasticsearch/data
path.logs: /home/elasticsearch/log
</code></pre><h2>启动</h2><pre><code class="language-bash"># 修改权限
chmod -R 777 /home/elasticsearch/*
# 启动服务
systemctl start elasticsearch
# 测试
curl localhost:9200
</code></pre><ul><li>外网访问 <a href="http://47.108.105.202:9200/">http://47.108.105.202:9200/</a></li></ul>`,7)])))}});export{d as default,i as excerpt,h as frontmatter};
