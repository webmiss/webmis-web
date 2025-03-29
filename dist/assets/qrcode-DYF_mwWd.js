import{d as r,c as t,b as e,o as a}from"./index-C8nBvhCm.js";const c={class:"markdown-body"},p={},u="",m=r({__name:"qrcode",setup(l,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(s,o)=>(a(),t("div",c,o[0]||(o[0]=[e("h2",null,"引入",-1),e("pre",null,[e("code",{class:"language-python"},`from library.qrcode import Qrcode
`)],-1),e("h2",null,"生成",-1),e("pre",null,[e("code",{class:"language-python"},`Qrcode.Create(
  'text': '',     #内容
  'size': 5,      #大小
  'border': 2,    #边距
)
`)],-1),e("h2",null,"识别",-1),e("pre",null,[e("code",{class:"language-python"},`Qrcode.Scan('public/upload/qrcode/demo.png')
`)],-1)])))}});export{m as default,u as excerpt,p as frontmatter};
