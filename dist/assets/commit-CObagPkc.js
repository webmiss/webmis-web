import{d as s,c as t,b as n,o as c}from"./index-C8nBvhCm.js";const r={class:"markdown-body"},d={},i="",p=s({__name:"commit",setup(m,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(l,e)=>(c(),t("div",r,e[0]||(e[0]=[n("h3",null,"事务",-1),n("pre",null,[n("code",{class:"language-python"},`from model.demo import Demo

model = Demo()
conn = model.DBConn()
try:
  # 开始
  conn.begin()
  cs = conn.cursor()
  # SQL1
  m1 = Demo()
  m1.Values({'uid':None,'title':'Python-事件'})
  sql, args = demo.InsertSQL()
  cs.execute(sql, args)
  id = model.LastInsertId(cs)
  # SQL2
  m2 = Demo()
  m2.Where('uid=%s', id)
  sql, args = m2.DeleteSQL()
  cs.execute(sql, args)
  # 提交
  cs.close()
  conn.commit()
except Exception as e:
  conn.rollback()
finally :
  conn.close()

`)],-1)])))}});export{p as default,i as excerpt,d as frontmatter};
