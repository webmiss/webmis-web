import{d as t,c as s,b as e,o as a}from"./index-BtLdrSTu.js";const d={class:"markdown-body"},m={},c="",u=t({__name:"update",setup(l,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(r,n)=>(a(),s("div",d,n[0]||(n[0]=[e("h3",null,"更新",-1),e("pre",null,[e("code",{class:"language-php"},`use Model\\Demo;
// 对象
$demo = new Demo();
$demo->Set(['title'=>'PHP-更新']);
$demo->Where('uid=?', $id);
$num = $demo->Update();
self::Print($num);
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-php"},`list($sql, $args) = $demo->UpdateSQL();
`)],-1)])))}});export{u as default,c as excerpt,m as frontmatter};
