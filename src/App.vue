<template>
  <!-- Top -->
  <div class="app_top_body">
    <div class="body app_top flex">
      <div class="app_logo"></div>
      <div class="app_nav_body">
        <ul class="app_nav">
          <li
            v-for="(v,k) in menus.nav"
            :key="k"
            :class="v.value==pos[0]?'active':''"
            @click="menusClick([v.value, v.children[0].value, v.children[0].children[1].value])"
          >{{ v.label }}</li>
        </ul>
      </div>
      <ul class="app_top_tool flex">
        <li>
          <div class="ico center" @click="openUrl('https://github.com/webmiss')"><i class="icon ico_github"></i></div>
        </li>
        <li class="qrcode">
          <div class="ico center"><i class="icon ico_qrcode"></i></div>
          <div class="app_qrcode_box">
            <div class="app_qrcode_body">
              <div class="arrow arrow_up"></div>
              <img :src="cfg.apiUrl+'index/qrcode/docs'" />
              <p>手机扫描二维码</p>
            </div>
          </div>
        </li>
        <li class="menus">
          <div class="ico center" @click="isShow=!isShow"><i class="icon ico_menus"></i></div>
        </li>
      </ul>
    </div>
  </div>
  <!-- Top End -->
  <!-- Content -->
  <div class="app_body">
    <div class="app_content body flex">
      <!-- BG -->
      <div class="app_menus_bg" :style="{display:isShow?'block':'none'}" @click="isShow=!isShow"></div>
      <!-- Left -->
      <div class="app_left" :style="{display:isShow?'block':'none'}">
        <!-- Search -->
        <div class="app_sea_body">
          <wmInput v-model:value="sea.key" @update:value="seaInput()" height="32px" lineHeight="32px" icon="ui ui_search" padding="0 10px 0 40px" placeholder="请输入关键字"></wmInput>
          <!-- <i class="ui ui_search"></i> -->
          <!-- <input type="text" placeholder="请输入关键字" v-model="sea.key" @input="seaInput()" /> -->
        </div>
        <ul class="app_sea_list" v-if="sea.list.length>0">
          <li v-for="(v,k) in sea.list" :class="v.url==pos[1]&&v.value==pos[2]?'active':''" @click="menusClick([pos[0], v.url, v.value])">
            {{ v.label }}
          </li>
        </ul>
        <!-- Menus -->
        <div class="app_menus_body scrollbar" v-else>
          <template v-for="(v1,k1) in menus.list" :key="k1">
            <div class="app_menus_title flex" @click="v1.checked=!v1.checked">
              <h2>{{ v1.label }}</h2>
              <span :style="{transform: v1.checked?'rotate(-0deg)':'rotate(-180deg)'}">
                <i class="icon ico_arrow_down center"></i>
              </span>
            </div>
            <div v-show="v1.checked">
              <div v-for="(v2,k2) in v1.children" class="app_menus_li" :class="v1.value==pos[1]&&v2.value==pos[2]?'active':''" @click="menusClick([pos[0], v1.value, v2.value])">
                <h3>{{ v2.label }}</h3>
              </div>
            </div>
          </template>
        </div>
        <!-- Menus End -->
      </div>
      <!-- Left End -->
      <!-- Right -->
      <div class="app_right">
        <div class="app_addr flex">
          <span>{{ addr }}</span>
          <span class="app_print" @click="clickPrint">打印/下载</span>
        </div>
        <div class="app_html scrollbar">
           <div id="Print" class="doc_html">
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" :key="$route.name" />
              </keep-alive>
            </router-view>
           </div>
        </div>
      </div>
      <!-- Right End -->
    </div>
    <div class="app_copy">{{ cfg.copy }}</div>
  </div>
  <!-- Content End -->
</template>

<style lang="less">
/* 表单缩放问题 */
@media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
  select:focus, textarea:focus, input:focus { font-size: 16px !important; }
}
/* 样式 */
@import url('./assets/style/icon.less');
@import url('./assets/style/ui.less');
@import url('./assets/style/app.less');
</style>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
/* UI组件 */
import Env from './config/Env';
/* JS组件 */
import Html from './library/html'
/* 组件 */
import wmInput from './components/form/input/index.vue';
/* 菜单 */
import Menus from './views/docs/Menus'
import printJS from 'print-js'

// 状态
const store = useStore();
const state = store.state;
const route = useRoute();
const router = useRouter();
// 配置
const cfg: any = Env;
// 登录
const isShow = ref(true);
// 菜单
const sea = ref({key: '', list: <any>[]});
const menus = ref({nav: Menus.all(), list: <any>[]});
const pos = ref(<any>[]);
// 地址栏
const addr = ref('');

watch(()=>route, (to: any)=>{
  const arr: Array<string> = to.path.split('/').filter(Boolean);
  pos.value = arr.length==3?arr:['vue', 'install', 'index'];
  menusClick(pos.value);
  // @ts-ignore
  if(window._hmt) window._hmt.push(['_trackPageview', to.fullPath]);
},{ deep: true });

/* 加载完成 */
onMounted(()=>{
});

/* 搜索 */
const seaInput = (): void => {
  if(!sea.value.key) {
    sea.value.list = [];
    return ;
  }
  // 数据
  let data: any = [];
  const reg =new RegExp(sea.value.key);
  for(let x in menus.value.list){
    for(let y in menus.value.list[x].children){
      if(reg.test(menus.value.list[x].children[y].key)){
        menus.value.list[x].children[y].url = menus.value.list[x].value;
        data.push(menus.value.list[x].children[y])
      }
    }
  }
  sea.value.list = data;
}

/* 菜单 */
const menusClick = (tmp: Array<any>): void => {
  pos.value = tmp;
  // 数据
  for(let v1 of menus.value.nav){
    if(v1.value==tmp[0]){
      v1.checked = true;
      menus.value.list = v1.children;
      for(let v2 of v1.children) {
        if(v2.value==tmp[1]) addr.value = v1.label+' > '+v2.label;
        v2.checked = v2.value==tmp[1]?true:false;
      }
    } else {
      v1.checked = false;
    }
  }
  // 路由
  const url: string = '/'+tmp[0]+'/'+tmp[1]+'/'+tmp[2];
  const resolved = router.resolve(url);
  if(resolved.matched.length>0) router.push({path: url});
  // 读取文件
  nextTick(()=>{
    Html.loadFile(['/docs/print.css', '/docs/prism.css', '/docs/prism.js'], true);
  });
}

/* 打印 */
const clickPrint = (): void => {
  printJS({printable:'Print', type:'html', scanStyles:false, css:'/docs/print.css'});
}

/* 跳转 */
const openUrl = (url: string): void => {
  window.location.href = url;
}

</script>
