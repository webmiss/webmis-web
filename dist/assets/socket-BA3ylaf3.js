import{d as o,c as s,b as e,o as a}from"./index-AbO7opoS.js";const c={class:"markdown-body"},p={},m="",i=o({__name:"socket",setup(r,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(l,n)=>(a(),s("div",c,n[0]||(n[0]=[e("h2",null,"服务器",-1),e("pre",null,[e("code",{class:"language-bash"},`# 运行
./bash socket
# 启动
./bash socketStart
`)],-1),e("h2",null,"群发",-1),e("pre",null,[e("code",{class:"language-python"},`from library.socket import Socket

Socket.Send('admin', {
  'code': 0,
  'type': 'msg',
  'data': {
    'title': '测试',
    'content': '测试内容',
  },
})
`)],-1)])))}});export{i as default,m as excerpt,p as frontmatter};
