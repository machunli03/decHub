<template>
  <div class="DecService">
    <div class="topInformation">
      <div class="headPortrait">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F88%2F08%2F85%2Fd3cf476e_E880885_46de2f2a.png%21%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fpng&refer=http%3A%2F%2Fimg.51miz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645696601&t=3018556facedb77d70b0fe9099dc8be6" alt="" />
      </div>
      <div class="joinusRt">
        <div class="userName">
          <p>135778876y66</p>
          <img v-if="state.isIplogin" src="@/assets/images/icon-exit.png" alt="" />
        </div>
        <p>{{state.userInfo.serviceType}}用户</p>
      </div>
      <div class="surplusMath" v-if="state.isIplogin">剩余30个月</div>
    </div>
    <div class="tips">
      <p>专业版服务：正在使用</p>
      <button class="btnNew" v-if="state.isIplogin">续费</button>
    </div>
    <div class="banner">
      <a href="">了解更多>></a>
    </div>
    <button class="button">开启DEC1.0</button>
    <div class="freeD">开启免费版DEC</div>
    <div class="state">DEC1.0支持MAYA2016及以上版本</div>
  </div>
</template>

<script lang="ts" setup>
import { getUserInfo } from "../api/common";
import { ref, reactive, onMounted } from "vue";
const state = reactive({
  isIplogin: false,
  userInfo:{}
});
onMounted(() => {
  getUserInfo().then((res) => {
    state.userInfo = res.data
  });
});
</script>

<style lang="scss" scoped>
.DecService {
  box-sizing: border-box;
  width: 446px;
  padding: 36px 30px 32px 25px;
  overflow: hidden;
  .topInformation {
    overflow: hidden;
    margin-bottom: 20px;
    .headPortrait {
      float: left;
      margin-right: 10px;
      margin-top: 5px;
      img {
        width: 36px;
        height: 36px;
        display: block;
        background: rgba(213, 216, 217, 0.3);
        border: 1px solid #8c9092;
        border-radius: 50%;
      }
    }
    .joinusRt {
      float: left;
      .userName {
        overflow: hidden;
        margin-bottom: 5px;
        p {
          font-size: 14px;
          color: $gray1;
          float: left;
          margin-right: 10px;
        }
        img {
          width: 16px;
          height: 15px;
          display: block;
          float: left;
          cursor: pointer;
        }
      }
    }
    .surplusMath {
      float: right;
      margin-top: 10px;
    }
  }
  .tips {
    overflow: hidden;
    p {
      color: $gray2;
      float: left;
    }
    .btnNew {
      width: 70px;
      height: 20px;
      border: 1px solid #fb855e;
      border-radius: 3px;
      display: block;
      color: #fb855e;
      font-size: 12px;
      line-height: 13px;
      float: right;
    }
  }
  .banner {
    display: none;
    width: 410px;
    height: 100px;
    background: url(@/assets/images/banner.jpg) no-repeat;
    a {
      float: right;
      margin-top: 40px;
      margin-right: 5px;
      color: #fff;
    }
  }
  .button {
    width: 236px;
    height: 40px;
    display: block;
    background: $blue;
    border-radius: 20px;
    margin: 0 auto;
    font-size: 16px;
    color: #ffffff;
    margin-top: 50px;
    margin-bottom: 19px;
  }
  .freeD {
    display: none;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: $blue;
    text-align: center;
    margin-bottom: 29px;
  }
  .state {
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #8e9699;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
  }
}
</style>