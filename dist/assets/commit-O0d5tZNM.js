import{d as o,c as r,b as e,o as s}from"./index-DZw22l5y.js";const m={class:"markdown-body"},i={},c="",p=o({__name:"commit",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(a,n)=>(s(),r("div",m,n[0]||(n[0]=[e("h3",null,"事务",-1),e("pre",null,[e("code",{class:"language-go"},`import "webmis/model"

// 对象
db := (&model.Demo{}).New()
conn := db.DBConn()
// 开始
tx, _ := conn.Begin()
// SQL1
m1 := (&model.Demo{}).New()
m1.Values(map[string]interface{}{"uid": nil, "title": "Go-事件"})
sql, args := m1.InsertSQL()
rs, err1 := tx.Exec(sql, args...)
id := db.LastInsertId(rs)
// SQL2
m2 := (&model.Demo{}).New()
m2.Where("uid=?", id)
sql, args = m2.DeleteSQL()
_, err2 := tx.Exec(sql, args...)
if err1 != nil || err2 != nil {
  tx.Rollback()
} else {
  // 提交
  tx.Commit()
}
`)],-1)])))}});export{p as default,c as excerpt,i as frontmatter};
