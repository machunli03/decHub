<template>
  <div class="Code">
    <div class="iphone">
      <i></i>
      <el-input v-model="input" placeholder="输入手机号" clearable />
    </div>
    <div class="validation">
      <i></i>
      <input class="dety" type="text"  placeholder="输入6位短信验证码" autocomplete="off" value="" maxlength="25" />
      <button>获取验证码</button>
    </div>
    <button class="btn">登 录</button>
    
  </div>
  <div class="clause">手机验证后自动登录，登录既代表同意<a href="">【用户隐私协议】</a>和<a href="">【服务条款】</a></div>
    <div class="clause">还没有帐号？去<a href="">注册</a></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')

</script>

<style lang="scss" scoped>
.Code{
   width: 330px;
  margin: 0 auto;
  input{
    -webkit-app-region: no-drag;
  }
  .iphone,.validation{
    margin-top: 40px;
    display: flex;
    input{
      border: none;
      background: none;
    }
  }
  .iphone{
    
    i{
      width:17px;
      height:23px;
      display: block;
      background: url(@/assets/images/icon-iphone.png) no-repeat;
      margin-right: 12px;
    }
    input{
      width: 100%;
      display: block;
      border-bottom: 1px solid #8ca6ae;
    }
  }
  .validation{
    margin-bottom: 50px;
    i{
      width:16px;
      height:22px;
      display: block;
      background: url(@/assets/images/icon-ver.png) no-repeat;
      margin-right: 12px;
    }
    input{
      flex:1;
    }
    button{
      width: 80px;
      height:24px;
      display: block;
      border: 1px solid $blue;
      color: $blue;
      border-radius: 6px;
    }
  }
  .btn{
    width: 236px;
      height:40px;
      margin: 0 auto;
      line-height: 40px;
      text-align: center;
      display: block;
      background: $blue;
      color: #fff;
      border-radius: 20px;
      font-size: 16px;
      margin-bottom: 40px;
  }
  
}
.clause{
  text-align: center;
  font-size: 12px;
  color: $gray2;
  margin-bottom: 20px;
  a{
    color: $blue;
    -webkit-app-region: no-drag;
  }
}
</style>