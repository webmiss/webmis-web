import{d as t,c as s,b as e,o as a}from"./index-5_hhwz4s.js";const r={class:"markdown-body"},p={},c="",u=t({__name:"update",setup(d,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(l,o)=>(a(),s("div",r,o[0]||(o[0]=[e("h3",null,"更新",-1),e("pre",null,[e("code",{class:"language-python"},`from model.demo import Demo
# 对象
demo = Demo()
demo.Set({'title':'Python-更新'})
demo.Where('uid=%s', id)
num = demo.Update()
self.Print(num)
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-python"},`sql, args = db.UpdateSQL()
`)],-1)])))}});export{u as default,c as excerpt,p as frontmatter};
