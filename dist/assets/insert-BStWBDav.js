import{d as l,c as s,b as e,o as t}from"./index-Dldsk6pd.js";const a={class:"markdown-body"},c={},u="",p=l({__name:"insert",setup(r,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(d,n)=>(t(),s("div",a,n[0]||(n[0]=[e("h3",null,"插入单条",-1),e("pre",null,[e("code",{class:"language-php"},`use Model\\Demo;
// 对象
$demo = new Demo();
$demo->Values(['uid'=>null,'title'=>'PHP-添加']);
$demo->Insert();
`)],-1),e("h3",null,"插入多条",-1),e("pre",null,[e("code",{class:"language-php"},`use Model\\Demo;
// 对象
$demo = new Demo();
$demo->ValuesAll([
  ['uid'=>null,'title'=>'PHP-添加'],
]);
$demo->Insert();
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-php"},`// 获取参数
list($sql, $args) = $demo->InsertSQL();
// 执行
$conn = $demo->DBConn();
$demo->Exec($conn, $sql, $args);
`)],-1)])))}});export{p as default,u as excerpt,c as frontmatter};
