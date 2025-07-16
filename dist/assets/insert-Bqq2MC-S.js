import{d as t,c as s,b as e,o as r}from"./index-BNT8ip_b.js";const a={class:"markdown-body"},c={},i="",p=t({__name:"insert",setup(l,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(d,n)=>(r(),s("div",a,n[0]||(n[0]=[e("h3",null,"插入",-1),e("pre",null,[e("code",{class:"language-go"},`import "webmis/model"
// 对象
demo := (&model.Demo{}).New()
demo.Values(map[string]interface{}{
  "uid":   nil,
  "title": "Go-添加",
})
demo.Insert()
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-go"},`sql,args := db.InsertSQL()
`)],-1)])))}});export{p as default,i as excerpt,c as frontmatter};
