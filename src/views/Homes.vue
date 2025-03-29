<template>
  Home
</template>

<style lang="less" scoped>
</style>

<script setup lang="ts">
import { ref, watch, onMounted, onActivated } from 'vue';
import { useStore } from 'vuex';

// 是否加载
const isLoad = ref(false);
// 状态
const store = useStore();
const state = store.state;

/* 创建完成 */
onMounted(()=>{
});
onActivated(()=>{
});

</script>