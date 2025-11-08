import{d as n,c as l,b as o,o as r}from"./index-BtLdrSTu.js";const a={class:"markdown-body"},d={},i="",m=n({__name:"export",setup(s,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(p,t)=>(r(),l("div",a,t[0]||(t[0]=[o("h2",null,"引入",-1),o("pre",null,[o("code",{class:"language-python"},`from library.export import Export
`)],-1),o("h2",null,"导出Excel",-1),o("pre",null,[o("code",{class:"language-python"},`Excel(
  data: list=[],                  #数据
  param: dict={
    'borderColor':'#E2E4E8',      #边框颜色
    'titleColor': '#666',         #标题颜色
    'titleBgColor': '#F2F2F2',    #标题背景
  }
)
`)],-1),o("h2",null,"案例",-1),o("pre",null,[o("code",{class:"language-python"},`data = [['ID','名称'],[1, '测试']]
html = Export.Excel(data)
FileEo.Root = Env.root_dir
FileEo.Writer('upload/'+Util.Date('%Y%m%d%H%M%S')+'.xlsx', html, 'w')
`)],-1)])))}});export{m as default,i as excerpt,d as frontmatter};
