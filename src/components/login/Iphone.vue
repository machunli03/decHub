<template>
  <div class="Code">
    <div class="iphone">
      <i></i>
      <el-input v-model="loginForm.number" placeholder="输入邮箱或者手机号" clearable />
    </div>
    <div class="validation">
      <i></i>
      <div class="password">
        <el-input
          v-model="loginForm.passward"
          type="password"
          placeholder="输入密码"
          show-password
        />
      </div>
    </div>

    <button class="btn" @click="evetnLogin">登 录</button>
  </div>
  <div class="clause">
    手机验证后自动登录，登录既代表同意<a href="">【用户隐私协议】</a>和<a
      href=""
      >【服务条款】</a
    >
  </div>
  <div class="clause">还没有帐号？去<a href="">注册</a></div>
</template>

<script lang="ts" setup>
import Cookies from "js-cookie";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { emailLogin } from "../../api/common";
import { phoneLogin } from "../../api/common";
import { ElMessage } from "element-plus";
import func from "vue-temp/vue-editor-bridge";
const loginForm = reactive ({
  number: '',
  passward: ''
});
const router = useRouter();
const evetnLogin = () => {
  console.log(loginForm.number);
  console.log(loginForm.passward);
  const iphoneReg = /^[0-9]+.?[0-9]*$/; 
  const numReg = /^[0-9]*$/;
  const numRe = new RegExp(numReg);
  if(!loginForm.number){
    ElMessage.error("帐号不能为空");
    return;
  }
  if (numRe.test(loginForm.number)) { 
    console.log('iphone~~~');
    if ( loginForm.number.length !== 11 ) { 
      ElMessage.error("请输入正确手机号");
      return; 
    }
    if (!iphoneReg.test(loginForm.number)) { 
      ElMessage.error("请输入正确手机号");
      return; 
    }
    phoneLogin(
      `mobile=${loginForm.number}&password=${loginForm.passward}`
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
  } else {
    console.log('email~~~~');
    var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!regEmail.test(loginForm.number)) {
      ElMessage.error("邮箱格式不正确");
      return; 
    }
    emailLogin(
      `email=${loginForm.number}&password=${loginForm.passward}`
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
  }
  if(!loginForm.passward){
    ElMessage.error("密码不能为空");
    return;
  }
  return {
    evetnLogin,
  };
};
</script>

<style lang="scss" scoped>
.Code {
  width: 330px;
  margin: 0 auto;
  input {
    -webkit-app-region: no-drag;
  }
  .iphone,
  .validation {
    margin-top: 40px;
    display: flex;
    input {
      border: none;
      background: none;
    }
  }
  .iphone {
    i {
      width: 23px;
      height: 21px;
      display: block;
      background: url(@/assets/images/icon-user.png) no-repeat;
      margin-right: 12px;
    }
    input {
      width: 100%;
      display: block;
      border-bottom: 1px solid #8ca6ae;
    }
  }
  .validation {
    margin-bottom: 50px;
    i {
      width: 22px;
      height: 24px;
      display: block;
      background: url(@/assets/images/icon-passward.png) no-repeat;
      margin-right: 12px;
    }
    .password {
      width: 100%;
      //border-bottom: 1px solid #8ca6ae;
      display: flex;
      input {
        flex: 1;
      }
      .paHide {
        width: 18px;
        height: 6px;
        display: block;
        background: url(@/assets/images/icon-hide.png) no-repeat;
      }
      .paShow {
        width: 18px;
        height: 6px;
        display: block;
        background: url(@/assets/images/icon-show.png) no-repeat;
      }
    }
  }
  .btn {
    -webkit-app-region: no-drag;
    width: 236px;
    height: 40px;
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
.clause {
  text-align: center;
  font-size: 12px;
  color: $gray2;
  margin-bottom: 20px;
  a {
    color: $blue;
    -webkit-app-region: no-drag;
  }
}
</style>