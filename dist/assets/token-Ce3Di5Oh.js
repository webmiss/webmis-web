import{d as t,c as r,b as e,o as s}from"./index-B-lAKudI.js";const a={class:"markdown-body"},p={},c="",m=t({__name:"token",setup(l,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(d,n)=>(s(),r("div",a,n[0]||(n[0]=[e("h2",null,"引入",-1),e("pre",null,[e("code",{class:"language-php"},`use Service\\AdminToken;
`)],-1),e("h4",null,"Token",-1),e("pre",null,[e("code",{class:"language-php"},`// 验证
AdminToken::Verify(string $token, string $urlPerm);
// 生成
AdminToken::Create(array $data);
// 解析
AdminToken::Token(string $token);
`)],-1),e("h4",null,"菜单权限",-1),e("pre",null,[e("code",{class:"language-php"},`// 保存
AdminToken::savePerm($uid, string $perm);
// 拆分
AdminToken::getPerm(string $token);
`)],-1)])))}});export{m as default,c as excerpt,p as frontmatter};
