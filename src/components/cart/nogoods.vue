<template>
  <div class="nogoods">
      <div class="img-box">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" >
      </div>
       <van-button type="primary" block color="#ca342e" @click="toLogin">登录</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
import Vue from 'vue';
Vue.use(Button);

export default {
  methods:{
    toLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang=less scoped>
.img-box{
    margin-top:3.6rem;
    img{
        margin:0 auto;
        height:2.48rem;
    }
}
.van-button{
    width:70%;
    margin:0 auto;
}
</style>