import{d as t,c as s,b as e,o as r}from"./index-BtLdrSTu.js";const a={class:"markdown-body"},c={},p="",u=t({__name:"insert",setup(l,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(m,o)=>(r(),s("div",a,o[0]||(o[0]=[e("h3",null,"插入",-1),e("pre",null,[e("code",{class:"language-python"},`from model.demo import Demo
# 对象
demo = Demo()
demo.Values({'uid': None, 'title':'添加'})
demo.Insert()
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-python"},`sql, args = demo.InsertSQL()
`)],-1)])))}});export{u as default,p as excerpt,c as frontmatter};
