/* Trim */
export default (str: any, glue: string='\\s')=>{
  const reg = new RegExp('(^'+glue+'*)|('+glue+'*$)', 'gi');
  return str.toString().replace(reg, '');
}