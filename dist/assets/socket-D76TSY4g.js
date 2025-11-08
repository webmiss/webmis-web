import{d as n,c as s,b as t,o}from"./index-BtLdrSTu.js";const r={class:"markdown-body"},l={},m="",i=n({__name:"socket",setup(c,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(p,a)=>(o(),s("div",r,a[0]||(a[0]=[t("h2",null,"服务器",-1),t("pre",null,[t("code",{class:"language-bash"},`# 运行
./bash start
`)],-1),t("h2",null,"群发",-1),t("pre",null,[t("code",{class:"language-java"},`import webmis.library.Socket;

HashMap<String,Object> data = new HashMap<String,Object>();
data.put("code", 0);
data.put("type", "msg");
HashMap<String,Object> msg = new HashMap<String,Object>();
msg.put("title", "测试");
msg.put("content", "测试内容");
data.put("data", msg);
Socket.Send("admin", data);
`)],-1)])))}});export{i as default,m as excerpt,l as frontmatter};
