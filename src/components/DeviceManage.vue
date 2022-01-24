<template>
  <div class="Manage">
    <div class="firmVersions">
      <div class="validity">
        <p>服务有效期至：<span>2022-02-01</span></p>
        <a href="">点击续费</a>
      </div>
      <div class="lanLog">
        <p>局域网登录地址：123.456.789.015:89523</p>
        <a href=""></a>
      </div>
      <div class="reditNum">今日已授权设备：3</div>
      <ul class="reditName">
        <li>
          <span>设备昵称</span>
          <em>授权时间：9日22时8分</em>
        </li>
        <li>
          <span>设备昵称</span>
          <em>授权时间：9日22时8分</em>
        </li>
        <li>
          <span>设备昵称</span>
          <em>授权时间：9日22时8分</em>
        </li>
      </ul>
    </div>
    <div class="professionVersions">
      <div class="validity">
        <p>已购服务剩余月数：0.34</p>
        <a href="">点击续费</a>
      </div>
      <div class="validity2">
        <p>本月每日可授权设备数：1</p>
        <a href="">增加每日授权设备数</a>
      </div>
      <div class="describe">每月最多支持每日授权50台设备，设置本月每日授权设备数后，同区域网用户可使用管理员的登录地址登录DEC Hub，每日授权设备将会在次日0点刷新，区域网用户可通过使用IP+端口号来重新获取设备授权</div>
      <div class="lanLog">
        <p>局域网登录地址：123.456.789.015:89523</p>
        <a href=""></a>
      </div>
      <div class="nextMouth">
        <p>下月每日可授权设备数：1</p>
        <a href=""></a>
        <div class="lackPay">余额不足支持下月扣费，请调整下月设备数或者前往官网购买</div>
      </div>
      
      <div class="reditNum">今日已授权设备：3</div>
      <ul class="reditName">
        <li>
          <span>设备昵称</span>
          <em>授权时间：9日22时8分</em>
        </li>
        <li>
          <span>设备昵称</span>
          <em>授权时间：9日22时8分</em>
        </li>
        <li>
          <span>设备昵称</span>
          <em>授权时间：9日22时8分</em>
        </li>
      </ul>
    </div>
    
    <div class="state">DEC1.0支持MAYA2016及以上版本</div>
  </div>
  
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.Manage{
 width: 400px;
 padding-top: 35px;
 padding-left: 30px;

  .firmVersions{
    display: none;
  }
  .validity{
    margin-bottom: 30px;
    display: flex;
    p{
      flex: 1;
      span{
        color: $orange;
      }
    }
    a{
      width: 70px;
      height: 20px;
      display: block;
      text-align: center;
      line-height: 20px;
      color: $orange;
      border: 1px solid $orange;
      border-radius: 3px;
      font-size: 12px;
    }
  }
  
  .lanLog{
    margin-bottom: 30px;
    display: flex;
    a{
      width: 14px;
      height: 18px;
      display: block;
      background: url(@/assets/images/icon-iphone.png) no-repeat;
      margin-left: 5px;
    }
  }
  .reditNum{
    margin-bottom: 3px;
  }
  .reditName{
    width: 100%;
    height: 183px;
    overflow: auto;
    background: #e8f1f5;
    border-radius: 3px;
    padding: 5px 7px;
    font-size: 12px;
    li{
      display: flex;
      line-height: 20px;
      color: $gray3;
      span{
        flex: 1;
      }
      em{
        font-style: normal;
      }
    }
    
  }
  .professionVersions{
    
    .validity{
      margin-bottom: 17px;
    }
    .validity2{
      display: flex;
      margin-bottom: 5px;
      p{
        flex: 1;
      }
    }
    .lanLog{
      margin-bottom: 17px;
    }
    .describe{
      background: #e8f1f5;
      border-radius: 3px;
      font-size: 12px;
      padding: 5px 7px;
      margin-bottom: 20px;
      color: $gray3;
    }
    .nextMouth{
      margin-bottom: 30px;
      display: flex;
      position: relative;
      a{
        width: 16px;
        height: 15px;
        display: block;
        background: url(@/assets/images/icon-exit.png) no-repeat;
        margin-left: 5px;
      }
    }
    .lackPay{
      position: absolute;
      color: #faa765;
      top: 18px;
      font-size: 12px;
    }
    .reditName{
      height: 70px;
    }
  }
  .state{
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #8E9699;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    bottom: 0px;
  }
}
</style>