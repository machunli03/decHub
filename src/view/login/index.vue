<template>
  <h2>登录</h2>
</template>

<script lang="ts" setup>
import { onMounted } from '@vue/runtime-core'
import {getLoginInfo} from '../../api/common'
onMounted(() => {
   getLoginInfo().then(res => {
    
  })
})
</script>

<style lang="scss" scoped>

</style>
