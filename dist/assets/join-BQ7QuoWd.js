import{d as t,c as s,b as e,o as a}from"./index-BtLdrSTu.js";const l={class:"markdown-body"},i={},c="",p=t({__name:"join",setup(m,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(d,n)=>(a(),s("div",l,n[0]||(n[0]=[e("h3",null,"连表",-1),e("pre",null,[e("code",{class:"language-python"},`from model.demo import Demo
# 对象
demo = Demo()
demo.Table('test1 as a')
demo.LeftJoin('test2 as b', 'a.id=b.uid')
demo.Columns('a.title', 'b.name')
sql, args = demo.SelectSQL()
self.Print(sql, args)
`)],-1),e("h3",null,"其他",-1),e("pre",null,[e("code",{class:"language-python"},`# INNER JOIN 
demo.Join()
# LEFT JOIN
demo.LeftJoin()
# RIGHT JOIN
demo.RightJoin()
# FULL JOIN
demo.FullJoin()
`)],-1)])))}});export{p as default,c as excerpt,i as frontmatter};
