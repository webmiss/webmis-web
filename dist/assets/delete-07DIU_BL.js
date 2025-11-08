import{d as t,c as s,b as e,o as r}from"./index-BtLdrSTu.js";const l={class:"markdown-body"},c={},p="",u=t({__name:"delete",setup(a,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(d,o)=>(r(),s("div",l,o[0]||(o[0]=[e("h3",null,"删除",-1),e("pre",null,[e("code",{class:"language-python"},`from model.demo import Demo
# 对象
demo = Demo()
demo.Where('uid=%s', id)
demo.Delete()
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-python"},`sql, args = db.DeleteSQL()
`)],-1)])))}});export{u as default,p as excerpt,c as frontmatter};
