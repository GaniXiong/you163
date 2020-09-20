<template>
  <div class="header">
        <van-icon name="wap-home-o"  @click="backHome"/>
        <span>值得买</span>
        <van-icon name="search" />
        <van-icon name="shopping-cart-o" />
  </div>
</template>

<script>
export default {
    methods:{
        backHome(){
            this.$router.push("/index")
        }
    }
}
</script>

<style lang="less" scoped>
    .header{
        height:.88rem;
        width:100%;
        padding:0 .24rem;
        background:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border:1px solid #ccc;
        position:fixed;
        top:0;
        left:0;
        z-index:9999;
        .van-icon{
            font-size:.4rem;
        }
        span{
            margin:0 1.1rem 0 2rem;
            font-size:.4rem;
            font-family:"华文新魏"
        }
    }
</style>