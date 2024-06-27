<template>
  <div class="card">
    <button type="button" @click="countOpHandel">count is {{ count }}</button>
    <button type="button" @click="countOpHandel2">count is {{ count }}</button>
  </div>

</template>

<script setup>
import { ref, onMounted, watch  } from 'vue'
import {useUserStore} from "@/store/useUserStore.js";

//父组件传的元素
defineProps({
  msg: String,
})

const count = ref(0)

onMounted(() => {
  console.log("dom加载完成")

  //获取pinia
  const userStore = useUserStore()
  //修改count值，调用userStore中的setInfo(data)
  console.log(userStore.name)
  console.log(userStore.count)

  userStore.name = "xie哈哈"
})

//定义方法一
const countOpHandel = () => {
  count.value++;
  console.log(count.value)
}

//定义方法二
function countOpHandel2(){
  console.log("方法二")
  count.value++;
  console.log(count.value)
}

//数据监听
watch(count, (newVal, oldVal) => {
  console.log("监听count的值新值：" + newVal + "--旧值" + oldVal);

});

</script>

<style scoped>

</style>
