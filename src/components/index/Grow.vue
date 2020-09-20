<template>
  <div class="grow">
      <span>
          <van-icon name="free-postage" />
          <em>网易自营品牌</em>
      </span>
      <span>
          <van-icon name="free-postage" />
          <em>30天无忧退货</em>
      </span>
      <span>
          <van-icon name="free-postage" />
          <em>48小时快速退款</em>
      </span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.grow{
    height:.48rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    span{
        display:flex;
        align-items:center;
        font-size:.18rem;
        em{
            margin-left:.1rem;
        }
    }
}
</style>