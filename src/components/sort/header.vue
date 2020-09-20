<template>
  <div class="header">
      <div class="search" @click="changeRouter">
          <van-icon name="search" />
          <span>搜索商品，共18888件好物</span>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        changeRouter(){
            this.$router.push('/search')
        },
    }
}
</script>

<style scoped lang="less">
    .header{
        height:.88rem;
        border-bottom:1px solid #eee;
        display:flex;
        justify-content:center;
        align-items:center;
        .search{
            height:.56rem;
            width:6.88rem;
            background:#ededed;
            border-radius:.1rem;
            display:flex;
            justify-content:center;
            align-items:center;
            span{
                font-size:.26rem;
                color:#868686;
            }
        }
    }
</style>