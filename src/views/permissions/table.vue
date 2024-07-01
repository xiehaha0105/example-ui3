<template>
  <el-tree
      ref="treeRef"
      style="max-width: 600px"
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :props="defaultProps"
  />
  <div class="buttons">
    <el-button @click="getCheckedKeys">获取选中的key</el-button>
    <el-button @click="useAllChecked">选择部分</el-button>
    <el-button @click="resetChecked">全不选</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { genTableTree } from "@/api/api.ts";
import { ElTree } from 'element-plus'
const defaultProps = {
  label: 'name',
  children: 'tableColumns'
}

//选择节点
const treeRef = ref<InstanceType<typeof ElTree>>()
const data = ref([]);

onMounted(() => {
  //获取所有的表及结构
  genTableTree().then(res => {
    data.value = res.data;
  })
})

const getCheckedKeys = () => {
  console.log(treeRef.value!.getCheckedKeys(false))
}

/**
 * 全选
 */
const useAllChecked = () => {
  //选择部分
  treeRef.value!.setCheckedKeys(["7b50d707291f45d7b4023dedd34d7a50"], false)
}
/**
 * 全不选
 */
const resetChecked = () => {
  treeRef.value!.setCheckedKeys([], false)
}


</script>

<style scoped>

</style>
