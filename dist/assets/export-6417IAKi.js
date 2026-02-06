import{d as n,c as l,e,o as r}from"./vendor-BCPY0tYI.js";const a={class:"markdown-body"},d={},i="",m=n({__name:"export",setup(s,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(p,o)=>(r(),l("div",a,o[0]||(o[0]=[e("h2",null,"引入",-1),e("pre",null,[e("code",{class:"language-python"},`from library.export import Export
`)],-1),e("h2",null,"导出Excel",-1),e("pre",null,[e("code",{class:"language-python"},`Excel(
  data: list=[],                  #数据
  param: dict={
    'borderColor':'#E2E4E8',      #边框颜色
    'titleColor': '#666',         #标题颜色
    'titleBgColor': '#F2F2F2',    #标题背景
  }
)
`)],-1),e("h2",null,"案例",-1),e("pre",null,[e("code",{class:"language-python"},`data = [['ID','名称'],[1, '测试']]
html = Export.Excel(data)
FileEo.Root = Env.root_dir
FileEo.Writer('upload/'+Util.Date('%Y%m%d%H%M%S')+'.xlsx', html, 'w')
`)],-1)])))}});export{m as default,i as excerpt,d as frontmatter};
