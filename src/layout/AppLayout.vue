<template>
  <div class="common-layout">
    <el-container>
      <el-header>DEC Hub</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
  
</template>

<script lang="ts" setup>
import AppTabs from './AppTabs.vue'
</script>

<style lang="scss" scoped>

.common-layout {
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
  }
.el-container{
  height: 100vh;
}
}
</style>

