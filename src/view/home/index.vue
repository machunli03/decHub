<template>
  <div class="home">
    <header>
      <h1>DEC Hub</h1>
    </header>
    <div class="tabs">
      <ul>
        <li
          @click="num=0"
          :class="{active : num == 0}"
        >
          DEC服务
        </li>
        <li
          @click="num=1"
          :class="{active : num == 1}"
        >
          设备管理
        </li>
        <li
          @click="num=2"
          :class="{active : num == 2}"
        >
          帮助中心
        </li>
      </ul>
      <div class="tab-content">
        <div v-show="num==0">
          <DecService />
        </div>
        <div v-show="num==1">
          <DeviceManage />
        </div>
        <div v-show="num==2">
          <Support />
        </div>
      </div>
      <!--<div>{{ $t('message.hello') }}</div>-->
      <!-- <el-tabs :tab-position="tabPosition" style="height: 200px">
        <el-tab-pane label="DEC服务"><DecService/></el-tab-pane>
        <el-tab-pane label="设备管理">{{mes}}</el-tab-pane>
        <el-tab-pane label="帮助中心">3</el-tab-pane>
      </el-tabs> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DecService from '@/components/DecService.vue'
import DeviceManage from '@/components/DeviceManage.vue'
import Support from '@/components/Support.vue'
const tabPosition = ref('left')

const mes = ref(67)
const tabsCon = ref('DecService')
const num = ref(0)
</script>

<style lang="scss" scoped>

.home{
  color: $gray2;

  header{
    height:79px;
    border-bottom: 1px solid #D8E6EF;
    margin: 0 30px;
  }
  h1{
    font-size: 26px;
    text-align: left;
    padding-top:32px;
  }
  .tabs{
    ul{
      width:116px;
      height: 385px;
      border-right: 1px solid #D8E6EF;
      padding-left:20px;
      font-family: Microsoft YaHei;
      float:left;
      text-align: center;
      -webkit-app-region: no-drag;
      li{
        -webkit-app-region: no-drag;
        cursor: pointer;
        margin-bottom: 52px;
        color: $gray1;
      }
      .active{
        font-weight: bold;
        color: $blue;
      }
      li:first-child{
        margin-top:35px;
      }
    }
    .tab-content{
      float:left;
      position: relative;
      height: 390px;
    }
  }

}
</style>
