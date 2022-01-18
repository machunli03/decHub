
<template>

  <el-tabs :tab-position="tabPosition" style="height: 200px">
    <el-tab-pane label="Dec服务">Dec服务</el-tab-pane>
    <el-tab-pane label="帮助中心">帮助中心</el-tab-pane>
    <el-tab-pane label="设备管理">设备管理</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref('left')
</script>