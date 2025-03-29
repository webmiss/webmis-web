import{d as o,c as a,b as e,o as r}from"./index-C8nBvhCm.js";const p={class:"markdown-body"},d={},u="",m=o({__name:"qrcode",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(s,n)=>(r(),a("div",p,n[0]||(n[0]=[e("h2",null,"引入",-1),e("pre",null,[e("code",{class:"language-php"},`use Library\\Qrcode;
`)],-1),e("h2",null,"生成",-1),e("pre",null,[e("code",{class:"language-php"},`Qrcode::create([
  'text'=> '',  //内容
  'type'=>'qr',  //类型: upc-a、code-39、qr、dmtx等
  'tmpPath'=>'upload/tmp/', //缓存目录
  'filename'=>self::_getName().'.png', //文件名
  'options'=>['f'=>'png','p'=>-20,'w'=>200,'h'=>200], //配置
]);
`)],-1),e("h2",null,"识别",-1),e("pre",null,[e("code",{class:"language-php"},`Qrcode::scan($file);
`)],-1)])))}});export{m as default,u as excerpt,d as frontmatter};
