import{d as t,c as s,b as e,o as l}from"./index-B-lAKudI.js";const a={class:"markdown-body"},p={},m="",u=t({__name:"delete",setup(r,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(d,o)=>(l(),s("div",a,o[0]||(o[0]=[e("h3",null,"删除",-1),e("pre",null,[e("code",{class:"language-php"},`use Model\\Demo;
// 对象
$demo = new Demo();
$demo->Where('uid=?', $id);
$demo->Delete();
`)],-1),e("h3",null,"生成SQL",-1),e("pre",null,[e("code",{class:"language-php"},`list($sql, $args) = $demo->DeleteSQL();
`)],-1)])))}});export{u as default,m as excerpt,p as frontmatter};
