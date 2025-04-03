import{d as e,c as n,b as t,o}from"./index-YZy2HEBW.js";const s={class:"markdown-body"},m={},i="",c=e({__name:"export",setup(l,{expose:r}){return r({frontmatter:{},excerpt:void 0}),(p,a)=>(o(),n("div",s,a[0]||(a[0]=[t("h2",null,"引入",-1),t("pre",null,[t("code",{class:"language-java"},`import webmis.library.Export;
`)],-1),t("h2",null,"导出Excel",-1),t("pre",null,[t("code",{class:"language-java"},`HashMap<String, Object> params = new HashMap<String, Object>();
param.put("borderColor", "#E2E4E8");      //边框颜色
param.put("titleColor", "#666");          //标题颜色
param.put("titleBgColor", "#F2F2F2");     //标题背景
Export.Excel(ArrayList<ArrayList<Object>> data, HashMap<String, Object> params);
`)],-1),t("h2",null,"案例",-1),t("pre",null,[t("code",{class:"language-java"},`ArrayList<Object> tmp;
ArrayList<ArrayList<Object>> data = new ArrayList<>();
tmp = new ArrayList<>();
tmp.add("ID");
tmp.add("名称");
data.add(tmp);
tmp = new ArrayList<>();
tmp.add(1);
tmp.add("测试");
data.add(tmp);
String html = Export.Excel(data);
FileEo.Root = Env.root_dir;
FileEo.Writer("upload/"+Util.Date("yyyyMMddHHmmss")+".xlsx", html);
`)],-1)])))}});export{c as default,i as excerpt,m as frontmatter};
