/* 时间比较 */
export default (t1: number | string | Date, t2?: number | string | Date)=>{
  const last = new Date(t1).getTime();
  const now = t2?new Date(t2).getTime():new Date().getTime();
  let t = now-last;
  return t!=0?t/1000:0;
}