<template>
  <h2>登录</h2>
</template>

<script lang="ts" setup>
import { onMounted, ref } from '@vue/runtime-core'
import {getLoginInfo} from '../../api/common'
import type {ILoginInfo} from '../../api/types/common'
const list = ref<ILoginInfo['slide']>([])
onMounted(() => {
   getLoginInfo().then(data => {
    list.value = data.slide
  })
})
</script>

<style lang="scss" scoped>

</style>
