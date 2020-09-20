<template>
  <div class="buy">
      <Header></Header>
      <div class="nav-tit">
        <h2>
          <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
          严选好物,用心生活
        </h2>
        <div class="bgc">
            <img src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png">
        </div>
      </div>
      <div class="nav-box">
        <div class="nav-items">
          <section v-for="(item,index) in navs" :key="index">
            <img :src="item.picUrl" alt="">
            <h4>{{item.mainTitle}}</h4>
            <h5>{{item.viceTitle}}</h5>
          </section>
        </div>
      </div>
      <div class="waterfall">
        <div class="fenlei"  v-for="(item,index) in information" :key="index">
          <section v-for="(item1,index1) in  item.topics" :key="index1">
            <div class="img-box">
              <img :src="item1.picUrl" >
            </div>
            <p>{{item1.title}}</p>
            <h6>{{item1.nickname}}</h6>
          </section>
        </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/buy/header'
import Footer from '../components/Footer'

export default {
  data(){
    return{
      navs:[],
      information:[],
    }
  },
  components:{
    Header,
    Footer,
  },
  created(){
    //请求导航的数据
    let url = 'hehe/topic/v1/know/navWap.json'
    axios.get(url)
    .then((res)=>{
        // console.log(res.data.data.navList)
        this.navs = res.data.data.navList
    })
    .catch((err)=>{
      console.log(err)
    })

    //请求瀑布流图片和文字数据
    let url2 = 'hehe/topic/v1/find/recAuto.json?page=1&size=5&exceptIds='
    axios.get(url2)
    .then((res)=>{
      // console.log(res.data.data.result)
      this.information = res.data.data.result
    })
  }
}
</script>

<style lang="less" scoped>
  .buy{
    min-height:615%;
    width:100%;
    background:#eee;
    padding-top:.88rem;
    .nav-tit{
      position:relative;
      h2{
        height:.5rem;
        line-height:.4rem;
        width:100%;
        font-size:.24rem;
        color:#fff;
        position:absolute;
        top:.6rem;
        padding-left:.1rem;
        img{
          height:.5rem;
          display:inline-block;
          vertical-align:bottom;
        }
      }
      .bgc{
        img{
          height:4rem;
          width:100%;
        }
      }
    }
    .nav-box{
      height:5.4rem;
      width:7.1rem;
      border-radius:.1rem;
      background:#fff;
      position:absolute;
      top:2.2rem;
      left:50%;
      margin-left:-3.55rem;
      overflow-x:auto;
      .nav-items{
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        width:200%;
        height:100%;
        section{
          width:1.775rem;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          img{
            height:1.2rem;
          }
          h4{
            font-size:.26rem;
            margin:5px 0;
          }
          h5{
            font-size:.18rem;
            color:#999999;
          }
        }
      }
    }
    .waterfall{
      width: 100%;
      margin-top:3rem;
      padding:0 .2rem;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      section{
        width:3.4rem;
        height:4.6rem;
        margin-bottom:.2rem;
        background:#fff;
        border-radius:.2rem;
        overflow:hidden;
        .img-box{
          img{
            width:3.4rem;
            height:2.8rem;
          }
        }
        p{
          width:3.4rem;
          font-size:.28rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin:.16rem 0;
          padding:0 .1rem;
        }
        h6{
          font-size:.22rem;
          color:#7f7f7f;
          padding:0 .1rem;
        }
      }
    }
  }
  .fenlei{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
  }
</style>