## 引入
```javascript
import wmDialog from '@/components/dialog/index.vue'
```

## 对话框
```html
<wm-dialog></wm-dialog>
```
- show: {type: Boolean, default: false},          //是否显示
- title: {type: String, default: ''},             //标题
- width: {type: String, default: '420px'},        //宽
- height: {type: String, default: 'auto'},        //高
- header: {type: Number, default: 0},             //头部高度
- footer: {type: Number, default: 32},            //底部高度
- margin: {type: Number, default: 16},            //上下边距
- titleAlign: {type: String, default: 'center'},  //标题对齐方式
- footerAlign: {type: String, default: 'center'}, //底部对齐方式
- bgColor: {type: String, default: '#FFF'},       //内容背景颜色
- bgClose: {type: Boolean, default: false},       //点击背景关闭
- tabsActive: {type: String, default: ''},        //Tabs-默认选择
- tabs: {type:Array, default:[]},                 //Tabs-数据: [{label:'Tab1', name:'tab1'},{label:'Tab2', name:'tab2'}]
- @update:show //事件

