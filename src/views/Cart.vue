<template>
  <div class="cart">
      <header>
        <span>购物车</span>
        <i>领券</i>
      </header>
      <div class="grow">
          <span>
              <i></i>
              <em>网易自营品牌</em>
          </span>
          <span>
              <i></i>
              <em>30天无忧退货</em>
          </span>
          <span>
              <i></i>
              <em>48小时快速退款</em>
          </span>
      </div>
      <nogoods></nogoods>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import nogoods from '../components/cart/nogoods'
export default {
  components:{
    Footer,
    nogoods
  },
}
</script>

<style lang="less" scoped>
  .cart{
    height:100%;
    width:100%;
    background:#f4f4f4;
    header{
      height:.88rem;
      padding:0 .4rem;
      display:flex;
      justify-content:space-between;
      background:#fff;
      span{
        font-size:.32rem;
        line-height:.88rem;
      }
      i{
        font-size:.28rem;
        color:#d04948;
        line-height:.88rem;
        margin-right:.2rem;
      }
    }
    .grow{
      height:.7rem;
      background:#eee;
      display:flex;
      justify-content:space-around;
      align-items:center;
      span{
          display:flex;
          align-items:center;
          font-size:.18rem;
          i{
            height:.1rem;
            width:.1rem;
            border-radius:50%;
            background:#ccc;
          }
          em{
            margin-left:.1rem;
          }
      }
    }
  }
</style>