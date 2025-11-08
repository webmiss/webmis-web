import{d as t,c as r,b as e,o}from"./index-BtLdrSTu.js";const l={class:"markdown-body"},d={},p="",m=t({__name:"export",setup(i,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(s,a)=>(o(),r("div",l,a[0]||(a[0]=[e("h2",null,"引入",-1),e("pre",null,[e("code",{class:"language-go"},`import "webmis/library"
`)],-1),e("h2",null,"导出Excel",-1),e("pre",null,[e("code",{class:"language-go"},`Excel(
  data [][]interface{},           //数据
  params map[string]interface{}{
    "borderColor":"#E2E4E8",      //边框颜色
    "titleColor": "#666",         //标题颜色
    "titleBgColor": "#F2F2F2",    //标题背景
  }
) string {}
`)],-1),e("h2",null,"案例",-1),e("pre",null,[e("code",{class:"language-go"},`data := [][]interface{}{}
data = append(data, []interface{}{"ID", "名称"})
data = append(data, []interface{}{1, "测试"})
html := (&library.Export{}).Excel(data, nil)
(&library.FileEo{}).New(config.Env().RootDir)
(&library.FileEo{}).Writer("upload/"+util.Date("20060102150405")+".xlsx", html)
`)],-1)])))}});export{m as default,p as excerpt,d as frontmatter};
