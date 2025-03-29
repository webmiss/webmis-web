import{d as a,c as o,b as e,o as s}from"./index-Dldsk6pd.js";const r={class:"markdown-body"},m={},p="",u=a({__name:"insert",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(d,n)=>(s(),o("div",r,n[0]||(n[0]=[e("h3",null,"插入",-1),e("pre",null,[e("code",{class:"language-java"},`import webmis.model.Demo;
// 对象
Demo demo = new Demo();
// 数据
HashMap<String,Object> data = new HashMap<String,Object>();
data.put("uid", 0);
data.put("title", "Java-添加");
demo.Values(data);
// 执行
demo.Insert();
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-java"},`// sql、args
Object[] sql = db.InsertSQL()
`)],-1)])))}});export{u as default,p as excerpt,m as frontmatter};
