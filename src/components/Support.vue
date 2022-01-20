<template>
  <div class="Support">
    <ul>
      <li><a href="">常见问题</a><i>></i></li>
      <li><a href="">官网介绍</a><i>></i></li>
      <li><a href="">联系客服</a><i>></i></li>
      <li><a href="">检查更新DEC Hub</a></li>
    </ul>
    <div class="version">DEC Hub 1.0</div>
  </div>
  
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.Support{
  width: 392px;
  padding: 36px 40px 30px 20px;
  
  ul{
    li{
      margin-bottom: 28px;
      display: flex;
      a{
        flex: 1;
      }
    }
  }
  .version{
    text-align: center;
    position: absolute;
    left: 60%;
    transform: translate(-50%,0);
    bottom: 50px;
  }
}
</style>