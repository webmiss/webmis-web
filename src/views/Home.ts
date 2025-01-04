import { Options } from 'vue-class-component';
import Base from '../service/Base'
/* UI组件 */

@Options({
  components: {},
})
export default class Home extends Base {

  /* 创建成功 */
  created(): void {
  }

  /* 创建完成 */
  mounted(): void {
  }
  activated(): void {
    this.loadData();
  }

  /* 加载数据 */
  loadData(): void {
  }

}