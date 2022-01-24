<template>
  <div class="login">
    <h2 class="loginTitle">欢迎使用 DEC Hub</h2>
    <div class="loginTabs">
      <ul>
        <li @click="num=0" :class="{active : num == 0}">验证码登录<i></i></li>
        <li @click="num=1" :class="{active : num == 1}">帐号登录<i></i></li>
        <li @click="num=2" :class="{active : num == 2}">局域网登录<i></i></li>
      </ul>
      <div class="line"></div>
      <div class="tab-content">
        <div v-show="num==0"><Code/></div>
        <div v-show="num==1"><Iphone/></div>
        <div v-show="num==2"><Lan/></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Code from '@/components/login/Code.vue'
import Iphone from '@/components/login/Iphone.vue'
import Lan from '@/components/login/Lan.vue'
import { onMounted, ref } from '@vue/runtime-core'
import {getLoginInfo} from '../../api/common'
import type {ILoginInfo} from '../../api/types/common'
const list = ref<ILoginInfo['slide']>([])
onMounted(() => {
   getLoginInfo().then(data => {
    list.value = data.slide
  })
})
const num = ref(0);
</script>

<style lang="scss" scoped>
.login{
 
  .loginTitle{
    text-align: center;
    color: $blue;
    font-size: 16px;
    padding: 40px 0;
  }
  .loginTabs{
    overflow: hidden;
    ul{
      width:330px;
      text-align: center;
      position: relative;
      padding-bottom: 10px;
      display: flex;
      margin: 0 auto;
      li{
        -webkit-app-region: no-drag;
        cursor: pointer;
        color: $gray1;
        margin-right: 28px;
        width: 90px;
        text-align: center;
      }
      li:last-child{
        margin-right: 0;
      }
      .active{
        font-weight: bold;
        color: $blue;
        i{
          width: 90px;
          height: 4px;
          background: $blue;
          display: block;
          position:absolute;
          bottom: -3px;
        }
      }
    }
    .line{
      width:330px;
      margin: 0 auto;
      height: 4px;
      background: #c8e8fa;
    }
    .tab-content{
       &:deep(input){
        -webkit-app-region: no-drag;
        border: none;
        background: none;
        border-bottom: 1px solid #8ca6ae;
        border-radius: 0;
        height: 25px;
        line-height: 25px;
      }
       &:deep(input)::-webkit-input-placeholder{
         color: $gray2;
       }
    }
  }

}
</style>
