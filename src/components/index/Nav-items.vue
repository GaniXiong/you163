<template>
  <div class="nav-items">
      <section>
          <div class="box">
              <img src="../../assets/images/bag.png" alt="">
          </div>
          <p>新品首发</p>
      </section>
      <section>
          <div class="box">
              <img src="../../assets/images/2.png" alt="">
          </div>
          <p>居家生活</p>
      </section>
      <section>
          <div class="box">
              <img src="../../assets/images/3.png" alt="">
          </div>
          <p>服饰鞋包</p>
      </section>
      <section>
          <div class="box">
              <img src="../../assets/images/4.png" alt="">
          </div>
          <p>美食酒水</p>
      </section>
      <section>
          <div class="box">
              <img src="../../assets/images/5.png" alt="">
          </div>
          <p>个护清洁</p>
      </section>
      <section>
          <div class="box">
              <img src="../../assets/images/bag.png" alt="">
          </div>
          <p>新品首发</p>
      </section>
      <section>
          <div class="box">
              <img src="../../assets/images/2.png" alt="">
          </div>
          <p>居家生活</p>
      </section>
      <section>
          <div class="box">
              <img src="../../assets/images/3.png" alt="">
          </div>
          <p>服饰鞋包</p>
      </section>
      <section>
          <div class="box">
              <img src="../../assets/images/4.png" alt="">
          </div>
          <p>美食酒水</p>
      </section>
      <section>
          <div class="box">
              <img src="../../assets/images/5.png" alt="">
          </div>
          <p>个护清洁</p>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.nav-items{
    height:3.75rem;
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    section{
        height:1.6rem;
        width:1rem;
        margin:0 10px;
        .box{
            img{
                height:1rem;
            }
        }
        p{
            width:1rem;
            height:.22rem;
            font-size:.22rem;
            line-height:.22rem;
            text-align:center;
            margin-top:.1rem;
        }
    }
}
</style>