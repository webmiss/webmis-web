import{d as t,c as s,b as e,o as l}from"./index-5_hhwz4s.js";const r={class:"markdown-body"},c={},p="",u=t({__name:"delete",setup(a,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(d,o)=>(l(),s("div",r,o[0]||(o[0]=[e("h3",null,"删除",-1),e("pre",null,[e("code",{class:"language-go"},`import "webmis/model"
// 对象
demo := (&model.Demo{}).New()
demo.Where("uid=?", id)
demo.Delete()
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-go"},`sql,args := db.DeleteSQL()
`)],-1)])))}});export{u as default,p as excerpt,c as frontmatter};
