import{d as t,c as r,b as a,o}from"./index-B-lAKudI.js";const p={class:"markdown-body"},m={},d="",u=t({__name:"qrcode",setup(l,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(c,e)=>(o(),r("div",p,e[0]||(e[0]=[a("h2",null,"引入",-1),a("pre",null,[a("code",{class:"language-java"},`import webmis.library.Qrcode;
`)],-1),a("h2",null,"生成",-1),a("pre",null,[a("code",{class:"language-java"},`HashMap<String, Object> param = new HashMap<String, Object>();
param.put("text", "");                      //内容
param.put("size", 200);                     //大小
param.put("tmpPath", "upload/tmp/");        //缓存目录
param.put("filename", _getName()+".png");   //文件名
Qrcode.Create(param)
`)],-1),a("h2",null,"识别",-1),a("pre",null,[a("code",{class:"language-java"},`Qrcode.Scan("public/upload/qrcode/demo.png");
`)],-1)])))}});export{u as default,d as excerpt,m as frontmatter};
