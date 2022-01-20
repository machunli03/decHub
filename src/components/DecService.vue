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
    <div class="tips">
      <p>专业版服务：正在使用</p>
      <button class="btnNew">续费</button>
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
  .tips{
    overflow: hidden;
    p{
      color: $gray2;
      float:left;
    }
    .btnNew{
      width: 70px;
      height: 20px;
      border: 1px solid #FB855E;
      border-radius: 3px;
      display: block;
      color: #FB855E;
      font-size: 12px;
      line-height: 13px;
      float: right;
    }
  }
  .banner{
    display: none;
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
    display: block;
    background: $blue;
    border-radius: 20px;
    margin: 0 auto;
    font-size: 16px;
    color:#ffffff;
    margin-top: 50px;
    margin-bottom: 19px;
  }
  .freeD{
    display: none;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: $blue;
    text-align: center;
    margin-bottom: 29px;  
  }
  .state{
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #8E9699;
    text-align: center;
  }
}
</style>