import{d as o,c as s,b as n,o as a}from"./index-BNT8ip_b.js";const l={class:"markdown-body"},d={},p="",u=o({__name:"socket",setup(r,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(c,e)=>(a(),s("div",l,e[0]||(e[0]=[n("h2",null,"服务器",-1),n("pre",null,[n("code",{class:"language-bash"},`# 运行
./bash socket
# 启动
./bash socketStart
`)],-1),n("ul",null,[n("li",null,"数据: service/scoket.go"),n("li",null,"发送: library/scoket.go")],-1),n("h2",null,"群发",-1),n("pre",null,[n("code",{class:"language-go"},`import "library"

go (&library.Socket{}).Send(
  "admin",
  gin.H{
    "code": 0,
    "type": "msg",
    "data": gin.H{
      "title":   "测试",
      "content": "测试内容",
    },
  },
)
`)],-1)])))}});export{u as default,p as excerpt,d as frontmatter};
