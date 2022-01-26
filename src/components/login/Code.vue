<template>
  <div class="Code">
    <div class="iphone">
      <i></i>
      <el-input v-model="loginForm.iphoneNumber" placeholder="输入手机号" clearable onkeyup="this.value=this.value.replace(/\D/g,'')" maxlength="11" />
    </div>
    <div class="validation">
      <i></i>
      <el-input v-model="loginForm.iphoneCode" placeholder="输入6位短信验证码" clearable onkeyup="this.value=this.value.replace(/\D/g,'')" maxlength="6" />
      <button @click="obtainCode">获取验证码</button>
    </div>
    <div class="validation2">
      <i></i>
      <el-input v-model="loginForm.iphoneCode" placeholder="请输入验证码" clearable onkeyup="this.value=this.value.replace(/\D/g,'')" maxlength="4" />
      <span></span>
    </div>
    <!-- <div class="conBox">
      <div class="concon">
        <block v-for="(item,index) in verCodeNumber" :key="index">
            <input  
            :value="inputValue.length >= index+1 ? inputValue[index] : '' "
            class='conNum' 
            disabled 
            @tap='Tap' />
        </block>
        <input 
            class="hiddenInput"
            type="number" 
            name="" 
            :maxlength="verCodeNumber" 
            v-model="inputValue" 
            bindinput="Focus"
            :focus="isFocus" 
            @input="!Focus"
        />
      </div>
      <div class="sendAgain" @click="handleClickSendAgainBtn">{{verCodeNumber}}</div>
    </div> -->
    <button class="btn">登 录</button>
    
  </div>
  <div class="clause">手机验证后自动登录，登录既代表同意<a href="">【用户隐私协议】</a>和<a href="">【服务条款】</a></div>
    <div class="clause">还没有帐号？去<a href="">注册</a></div>
</template>

<script lang="ts" setup>
import { ref, reactive ,watch, onMounted  } from 'vue'
import { verificationCode } from "../../api/common";
import { smsCode } from "../../api/common";
import { mobileCodeLogin } from "../../api/common";
const loginForm = reactive ({
  iphoneNumber: '',
  iphoneCode: ''
});
const imgCode = ref( false );
const obtainCode = () => {
  console.log('获取验证码');
  verificationCode(
  //  params:{

  //  }
  ).then((res) => {
    console.log(res);
    if (res.code == -1) {
      ElMessage.error("登录失败");
    } else {
      let data = res.data;
      Cookies.set("token", data.access_token);
      router.push({ path: "/" });
    }
  });
  
  return {
    obtainCode,
  };
}
// const verCodeNumber = ref( 4 );
// const inputValue = ref( '' );
// const isFocus = ref( false );
// const second = ref( '' );
// const phoneNum = ref( '' );
// const canClickAgainSend = ref( true );
// watch(inputValue.value,(newValue,oldValue) => {
//     console.log(newValue)
//     console.log(oldValue)
//     if(newValue == ""){ //为空 关闭键盘 失去焦点
//       isFocus.value = false;
//     }else if(newValue.length >= verCodeNumber.value){
//       isFocus.value = false
//       console.log("输入完成")
//     }
// });

</script>

<style lang="scss" scoped>
.Code{
   width: 330px;
  margin: 0 auto;
  input{
    -webkit-app-region: no-drag;
  }
  .iphone{
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
    margin-top: 40px;
    overflow: hidden;
    i{
      width:16px;
      height:22px;
      display: block;
      background: url(@/assets/images/icon-ver.png) no-repeat;
      margin-right: 12px;
      float:left;
    }
    .el-input{
      float:left;
      width: 212px;
      margin-right: 10px;
    }
    &:deep(input){

    }
    button{
      width: 80px;
      height:24px;
      display: block;
      border: 1px solid $blue;
      color: $blue;
      border-radius: 6px;
      float:left;
      cursor: pointer;
    }
  }
  .validation2{
    margin-bottom: 50px;
    margin-top: 40px;
    overflow: hidden;
    i{
      width:96px;
      height:40px;
      display: block;
      background: #8ca6ae;
      margin-right: 12px;
      float:left;
    }
    .el-input{
      float:left;
      width: 160px;
      margin-right: 10px;
    }
  }
  .btn{
    -webkit-app-region: no-drag;
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
      cursor: pointer;
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