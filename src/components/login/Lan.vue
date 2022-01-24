<template>
  <div class="Code">
    <div class="iphone">
      <i></i>
      <el-input v-model="input" placeholder="请输入登录地址" clearable />
    </div>
    <button class="btn">登 录</button>
    
  </div>
  <div class="clause">登录既代表同意<a href="">【用户隐私协议】</a>和<a href="">【服务条款】</a></div>
</template>

<script lang="ts" setup>


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
    margin-bottom: 60px;
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
      margin-bottom: 60px;
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