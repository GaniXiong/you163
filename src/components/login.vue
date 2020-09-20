<template>
  <div class="login">
      <header>
         <van-icon name="wap-home-o"  @click="backHome"/>
         <span>网易严选</span>
         <van-icon name="search" />
         <van-icon name="shopping-cart-o" />
      </header>
      <div class="logo">
          <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <van-button type="primary" block><van-icon name="phone-circle-o" />手机号快捷登录</van-button>
      <van-button type="primary" block class="num2"><van-icon name="envelop-o" />邮箱账号登录</van-button>
      <footer>
          <van-icon name="user-o" /><span>微信</span> |
          <van-icon name="user-o" /><span>微信</span> |
          <van-icon name="user-o" /><span>微信</span> |
      </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
export default {
    methods:{
        backHome(){
            this.$router.push("/")
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    width:100%;
    height:100vh;
    background:#f2f4f4;
    header{
        height:.88rem;
        width:100%;
        padding:0 .24rem;
        background:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border:1px solid #ccc;
        .van-icon{
            font-size:.4rem;
        }
        span{
            margin:0 1.1rem 0 2rem;
            font-size:.4rem;
            font-family:"华文新魏"
        }
    }
    .logo{
        margin:1.72rem 0 2.4rem;
        img{
            height:.8rem;
            margin:0 auto;
        }
    }
    .van-button{
        width:90%;
        background:#ca342e;
        margin:.2rem auto;
        border:none;
        .van-icon{
            margin-right:.2rem;
            vertical-align:center;
            font-size:.36rem;
        }
    }
    .num2{
        background:#f2f4f4;
        color:#ca342e;
        border:1px solid #ca342e;
    }
    footer{
        height:.4rem;
        margin-top:4.2rem;
        text-align:center;
        span{
            margin-right:.2rem;
        }
        .van-icon{
            margin-left:.2rem;
        }
    }
}
</style>