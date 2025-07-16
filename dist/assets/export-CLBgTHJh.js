import{d as a,c as o,b as e,o as r}from"./index-BNT8ip_b.js";const l={class:"markdown-body"},d={},u="",m=a({__name:"export",setup(s,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(p,n)=>(r(),o("div",l,n[0]||(n[0]=[e("h2",null,"引入",-1),e("pre",null,[e("code",{class:"language-php"},`use Library\\Export;
`)],-1),e("h2",null,"导出Excel",-1),e("pre",null,[e("code",{class:"language-php"},`// 内容
$html = Export::Excel(
  array $data=[],                   //数据
  array $param=[
    'borderColor'=>'#E2E4E8',       //边框颜色
    'titleColor'=> '#666',          //标题颜色
    'titleBgColor'=> '#F2F2F2',     //标题背景
  ]
);
`)],-1),e("h2",null,"案例",-1),e("pre",null,[e("code",{class:"language-php"},`// 内容
$data = [['ID','名称'],[1, '测试']];
$html = Export::Excel($data);
// 保存到文件
FileEo::Writer('upload/'.date('YmdHis').'.xlsx', $html);
`)],-1)])))}});export{m as default,u as excerpt,d as frontmatter};
