<template>
  <div class="Code">
    <div class="iphone">
      <i></i>
      <el-input v-model="input" placeholder="输入邮箱或者手机号" clearable />
      <!--<input class="dety" type="text"  placeholder="输入手机号" autocomplete="off" value="" maxlength="25" />-->
    </div>
    <div class="validation">
      <i></i>
      <div class="password">
        <el-input
          v-model="input"
          type="password"
          placeholder="输入密码"
          show-password
        />
        <!--<input class="dety" type="password"  placeholder="输入密码" autocomplete="off" value="" maxlength="25" />
        <a href="javascript:;" class="paHide paShow"></a>-->
      </div>
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
      width:23px;
      height:21px;
      display: block;
      background: url(@/assets/images/icon-user.png) no-repeat;
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
      width: 22px;
      height: 24px;
      display: block;
      background: url(@/assets/images/icon-passward.png) no-repeat;
      margin-right: 12px;
    }
    .password{
      width: 100%;
      //border-bottom: 1px solid #8ca6ae;
      display: flex;
      input{
        flex: 1;
      }
      .paHide{
        width: 18px;
        height: 6px;
        display: block;
        background: url(@/assets/images/icon-hide.png) no-repeat;
      }
      .paShow{
        width: 18px;
        height: 6px;
        display: block;
        background: url(@/assets/images/icon-show.png) no-repeat;
      }
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