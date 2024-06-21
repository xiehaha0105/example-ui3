<script setup lang="ts">
import {onMounted} from "vue";
import {useUserStore} from "@/store/useUserStore.js";

onMounted(() => {
  console.log("dom加载完成")

  //获取pinia
  const userStore = useUserStore()
  console.log(userStore.name)
  //修改count值，调用userStore中的setInfo(data)
  console.log(userStore.count)
})
</script>

<template>
<h1>哈哈哈</h1>
</template>

<style scoped>

</style>
