import { Options } from 'vue-class-component';
import { useStore } from 'vuex';
/* UI组件 */
import Base from '@/service/Base'
import Env from '@/config/Env';
/* JS组件 */
import Html from '@/library/html'
/* 组件 */
import wmPopup from '@/components/popup/index.vue'
/* 菜单 */
import Menus from '@/docs/Menus'
import { marked } from "marked";
import printJS from 'print-js'

@Options({
  components: {wmPopup},
})
export default class App extends Base {

  // 状态
  private store: any = useStore();
  state: any = this.store.state;
  // 配置
  cfg: any = new Env;
  // 登录
  login: any = {show: false};
  isShow: boolean = true;
  // 菜单
  sea: any = {key:'', list:[]};
  menus: any = {nav: Menus.all(), list:[]};
  pos: any = ['vue', 'install', 'index'];
  // 内容
  addr: string = '';
  docHtml: any = '';

  /* 创建成功 */
  created(): void {
    // 监听
    this.$watch('$route', (to: any, from: any, next: any)=>{
      const arr: Array<string> = to.path.split('/').filter(Boolean);
      this.pos = arr.length==3?arr:['vue', 'install', 'index'];
      // @ts-ignore
      if(window._hmt) window._hmt.push(['_trackPageview',to.fullPath]);
    }, { deep: true });
    this.$watch('state.isLogin', (val: boolean)=>{
    }, { deep: true });
  }

  /* 创建完成 */
  mounted(): void {
    setTimeout(()=>{
      this.login.show = true;
      this.menusClick(this.pos);
    }, 400);
  }

  /* 搜索 */
  seaInput(): void {
    if(!this.sea.key) {
      this.sea.list = [];
      return ;
    }
    // 数据
    let data = [];
    const reg =new RegExp(this.sea.key);
    for(let x in this.menus){
      for(let y in this.menus[x].children){
        if(reg.test(this.menus[x].children[y].key)){
          this.menus[x].children[y].url = this.menus[x].value;
          data.push(this.menus[x].children[y])
        }
      }
    }
    this.sea.list = data;
  }

  /* 菜单 */
  menusClick(pos: Array<string>): void {
    this.pos = pos;
      // 数据
      for(let v1 of this.menus.nav){
        if(v1.value==pos[0]){
          v1.checked = true;
          this.menus.list = v1.children;
          for(let v2 of v1.children) {
            v2.checked = v2.value==pos[1]?true:false;
          }
        } else {
          v1.checked = false;
        }
      }
      // 路由
      const url: string = '/'+pos[0]+'/'+pos[1]+'/'+pos[2];
      this.$router.push(url);
      // 读取文件
      this.openDocs(url);
  }

  /* 打开文档 */
  openDocs(url: string): void {
    this.docHtml = '';
    try {
      const html = require(`@/docs${url}.md`);
      this.$nextTick(()=>{
        marked.use({pedantic: false, gfm: true});
        this.docHtml = marked.parse(html);
        // 样式
        Html.load(['/docs/print.css', '/docs/prism.css', '/docs/prism.js'], true);
      });
    } catch (e) {
      this.docHtml = '没有文件!';
    }
  }

  /* 打印 */
  clickPrint(): void {
    printJS({printable:'Print', type:'html', scanStyles:false, css:'/docs/print.css'});
  }

  /* 跳转 */
  openUrl(url: string): void {
    window.location.href = url;
  }

}