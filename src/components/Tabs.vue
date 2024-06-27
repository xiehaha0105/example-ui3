<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleChange">
    <el-tab-pane label="首页" name="/"></el-tab-pane>
    <el-tab-pane label="页面一" name="/hello"></el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
// const route = useRoute()

const activeName = ref('/')

function handleChange(page){
  //console.log(route)
  //console.log(activeName.value)
  router.push(page)
}
</script>

<style scoped>

</style>
