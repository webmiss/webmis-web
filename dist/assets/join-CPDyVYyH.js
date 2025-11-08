import{d as t,c as a,b as e,o as s}from"./index-BtLdrSTu.js";const l={class:"markdown-body"},i={},c="",p=t({__name:"join",setup(m,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(d,n)=>(s(),a("div",l,n[0]||(n[0]=[e("h3",null,"连表",-1),e("pre",null,[e("code",{class:"language-java"},`import webmis.model.Demo;
// 对象
Demo demo = new Demo();
demo.Table("test1 as a");
demo.LeftJoin("test2 as b", "a.id=b.uid");
demo.Columns("a.title", "b.name");
String sql = demo.SelectSQL();
Print(sql);
`)],-1),e("h3",null,"其他",-1),e("pre",null,[e("code",{class:"language-java"},`// INNER JOIN 
demo.Join()
// LEFT JOIN
demo.LeftJoin()
// RIGHT JOIN
demo.RightJoin()
// FULL JOIN
demo.FullJoin()
`)],-1)])))}});export{p as default,c as excerpt,i as frontmatter};
