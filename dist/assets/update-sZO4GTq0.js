import{d as t,c as a,b as e,o as s}from"./index-B-lAKudI.js";const r={class:"markdown-body"},c={},p="",i=t({__name:"update",setup(d,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(l,n)=>(s(),a("div",r,n[0]||(n[0]=[e("h3",null,"更新",-1),e("pre",null,[e("code",{class:"language-go"},`import "webmis/model"
// 对象
demo := (&model.Demo{}).New()
demo.Set(map[string]interface{}{
  "title": "Go-更新",
})
demo.Where("uid=?", id)
num := demo.Update()
self.Print(num)
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-go"},`sql,args := db.UpdateSQL()
`)],-1)])))}});export{i as default,p as excerpt,c as frontmatter};
