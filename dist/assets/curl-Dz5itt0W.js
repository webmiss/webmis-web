import{d as a,c as t,b as e,o as l}from"./index-B-lAKudI.js";const o={class:"markdown-body"},i={},p="",u=a({__name:"curl",setup(s,{expose:r}){return r({frontmatter:{},excerpt:void 0}),(c,n)=>(l(),t("div",o,n[0]||(n[0]=[e("h2",null,"引入",-1),e("pre",null,[e("code",{class:"language-go"},`import "webmis/library"
`)],-1),e("h2",null,"发送请求",-1),e("pre",null,[e("code",{class:"language-go"},`(&library.Curl{}).Request(
  url string,                       //请求地址
  data []byte,                      //请求数据
  method string,                    //请求方式
  header map[string]interface{}     //Headers参数
)
`)],-1),e("h2",null,"URL参数",-1),e("pre",null,[e("code",{class:"language-go"},`// 生成
param := (&library.Curl{}).UrlEncode(map[string]interface{}{
  "id":   1,
  "name": "测试",
})
r.Print(param)
// 解析
data := (&library.Curl{}).UrlDecode(param)
r.Print(data)
`)],-1)])))}});export{u as default,p as excerpt,i as frontmatter};
