import{d as r,c as a,b as e,o as t}from"./index-DZw22l5y.js";const l={class:"markdown-body"},p={},i="",u=r({__name:"qrcode",setup(s,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(c,n)=>(t(),a("div",l,n[0]||(n[0]=[e("h2",null,"引入",-1),e("pre",null,[e("code",{class:"language-go"},`import "webmis/library"
`)],-1),e("h2",null,"生成",-1),e("pre",null,[e("code",{class:"language-go"},`(&library.Qrcode{}).Create(map[string]interface{}{
  "text": "",  //内容
	"size": 200, //大小
})
`)],-1),e("h2",null,"识别",-1),e("pre",null,[e("code",{class:"language-go"},`(&library.Qrcode{}).Scan("public/upload/qrcode/demo.png")
`)],-1)])))}});export{u as default,i as excerpt,p as frontmatter};
