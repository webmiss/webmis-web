import{d as n,c as o,b as e,o as s}from"./index-Dldsk6pd.js";const d={class:"markdown-body"},m={},p="",i=n({__name:"update",setup(r,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(l,a)=>(s(),o("div",d,a[0]||(a[0]=[e("h3",null,"更新",-1),e("pre",null,[e("code",{class:"language-java"},`import webmis.model.Demo;
// 对象
Demo demo = new Demo();
// 数据
HashMap<String,Object> data = new HashMap<String,Object>();
data.put("title", "Java-更新");
demo.Set(data);
demo.Where("uid=?", id);
// 执行
demo.Update();
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-java"},`// sql、args
Object[] sql = db.UpdateSQL()
`)],-1)])))}});export{i as default,p as excerpt,m as frontmatter};
