import{d as $,c as l,b as n,o as s}from"./index-5_hhwz4s.js";const t={class:"markdown-body"},a={},d="",i=$({__name:"commit",setup(c,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(m,e)=>(s(),l("div",t,e[0]||(e[0]=[n("h2",null,"事务-PHP",-1),n("pre",null,[n("code",{class:"language-php"},`use Model\\Demo;

$model = new Demo();
$conn = $model->DBConn();
try {
  // 开始
  $conn->beginTransaction();
  // SQL1
  $m1 = new Demo();
  $m1->Values(['uid'=>null,'title'=>'PHP-事件']);
  list($sql, $args) = $m1->InsertSQL();
  $res1 = $model->Exec($conn, $sql, $args);
  $id = $model->GetID();
  // SQL2
  $m2 = new Demo();
  $m2->Where('uid=?', $id);
  list($sql, $args) = $m2->DeleteSQL();
  $res2 = $model->Exec($conn, $sql, $args);
  // 提交
  if($res1 && $res2) $conn->commit();
} catch (\\Exception $e) {
  $conn->rollBack();
}
`)],-1),n("h2",null,"事务-Phalcon",-1),n("pre",null,[n("code",{class:"language-php"},`use Model\\Demo;

$model = new Demo();
$conn = $model->DBConn();
try {
  // 开始
  $conn->begin();
  // SQL1
  $m1 = new Demo();
  $m1->Values(['uid'=>null,'title'=>'PHP-事件']);
  list($sql, $args) = $m1->InsertSQL();
  $conn->execute($sql, $args);
  $id = $model->LastInsertId($conn);
  // SQL2
  $m2 = new Demo();
  $m2->Where('uid=?', $id);
  list($sql, $args) = $m2->DeleteSQL();
  $conn->execute($sql, $args);
  // 提交
  $conn->commit();
} catch (\\Exception $e) {
  $conn->rollback();
}
`)],-1)])))}});export{i as default,d as excerpt,a as frontmatter};
