<template>
  <div class="DecService">
    <div class="topInformation">
      <div class="headPortrait"><img src="https://img.yasuotu.com/yasuotu/images/logo.png" alt=""/></div>
      <div class="joinusRt">
        <div class="userName">
          <p>135778876y66</p>
          <img src="@/assets/images/icon-exit.png" alt=""/>
        </div>
        <p>免费版用户</p>
      </div>
      <div class="surplusMath">
        剩余30个月
      </div>
    </div>
    <div class="banner">
      <a href="">了解更多>></a>
    </div>
    <button class="button">开启DEC1.0</button>
  </div>
  
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.DecService{
  box-sizing:border-box;
  width: 446px;
  padding: 36px 30px 32px 25px;
  overflow: hidden;
  .topInformation{
    overflow: hidden;
    margin-bottom: 20px;
    .headPortrait{
      float:left;
      margin-right:10px;
      margin-top:5px;
      img{
        width:36px;
        height:36px;
        display: block;
        background: rgba(213, 216, 217, 0.3);
        border: 1px solid #8C9092;
        border-radius: 50%;

      }
    }
    .joinusRt{
      float:left;
      .userName{
        overflow: hidden;
        margin-bottom: 5px;
        p{
          font-size: 14px;
          color: $gray1;
          float: left;
          margin-right: 10px;
        }
        img{
          width: 16px;
          height: 15px;
          display: block;
          float: left;
          cursor: pointer;
        }
      }
      
    }
    .surplusMath{
      float:right;
      margin-top: 10px;
    }
  }
  .banner{
    width:410px;
    height:100px;
    background: url(@/assets/images/banner.jpg) no-repeat;
    a{
      float: right;
      margin-top: 40px;
      margin-right: 5px;
      color: #fff;
    }
  }
  .button{
    width: 236px;
    height: 40px;
    background: $blue;
    border-radius: 20px;
    margin: 0 auto;
    position: absolute;
    bottom: 128px;
    left: 234px;
    font-size: 16px;
    color:#ffffff;
  }
}
</style>