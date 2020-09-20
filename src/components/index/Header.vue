<template>
  <div class="header">
      <div class="h_search">
          <span>网易严选</span>
          <div class="inp" @click="changeRouter">
            <van-icon name="search" />
            <em>搜索商品，共18888件好物</em>
          </div>
          <b @click="toLogin">登录</b>
      </div>
      <div class="h_navs">
        <div class="navs">
            <div class="wrapper" ref="wrapper">
            <ul class="content">
                <li
                v-for="(item,index) in navs"
                :key="index"
                :class="showIndex===index?'active':''"
                @click="clickNavs(index,$event)"
                >{{item}}</li>
            </ul>
            </div>
        </div>
        <p @click="clickDown">
            <van-icon :class="toggleRotate?'rotate':''" name="arrow-down" />
            <van-popup :overlay-style="{'top':'0.88rem'}" v-model="toggleRotate" position="top" duration="0" :style="{ height: '30%' }">
            <h3>全部频道</h3>
            <ul>
                <li v-for="(item,index) in navs"
                    :key="index"
                    >
                    {{item}}</li>
            </ul>
            </van-popup>
        </p>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import BScroll from 'better-scroll'
import { Popup } from 'vant'
Vue.use(Popup)
Vue.use(Icon);
export default {
    data () {
        return {
            navs: ['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','严选全球'],
            showIndex: 0,
            toggleRotate: false
        }
    },
    methods:{
        changeRouter(){
            this.$router.push('/search')
        },
        toLogin(){
            this.$router.push('/login')
        },
        clickNavs (index,e) {
            this.showIndex = index
            this.scroll.scrollToElement(e.target,0,0)
        },
        clickDown () {
            this.toggleRotate = !this.toggleRotate
        },
    },
    mounted(){
        // 初始化btter-scroll
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true,
            scrollX: true // 沿着x轴滚动
        }) 
    }
}
</script>

<style lang="less" scoped>
.header{
    width:100%;
    background:#fff;
    position:fixed;
    top:0;
    z-index:99999;
    .h_search{
        height:.88rem;
        width:100%;
        display:flex;
        align-items:center;
        border-bottom:1px solid #ccc;
        span{
            width:1.88rem;
            text-align:center;
            font-family:"华文新魏";
        }
        .inp{
            display:inline-block;
            width:4.42rem;
            height:.56rem;
            line-height:.56rem;
            background:#ededed;
            border-radius:5px;
            padding-left:10px;
            font-size:.26rem;
            color:#7d7d7d;
            display:flex;
            align-items:center;
            .van-icon-search{
                font-size:.28rem;
                margin-right:.1rem;
            }
        }
        b{
            width:.74rem;
            height:.4rem;
            line-height:.4rem;
            border:1px solid #ca342e;
            font-size:.2rem;
            text-align: center;
            border-radius:4px;
            margin-left:.28rem;
            color:#ca342e;
        }
    }
    .h_navs{
        position: relative;
        .navs{
            overflow: hidden;
            padding-left: 0.4rem;
            .wrapper{
                width: 6.5rem;
                height: 0.6rem;
                .content{
                    width: 235%;
                    height: 0.6rem;
                    display: flex;
                    align-items: center;
                    li{
                        margin-right: 0.5rem;
                        line-height: 0.6rem;
                        font-size: 0.3rem;
                        color: #666;
                    }
                    li.active{
                        border-bottom: 5px solid #dd1a21;
                    }
                }
            }
        }
        p{
            position: absolute;
            right: 0;
            top: 0;
            z-index: 9999;
            width: 1.2rem;
            height: 0.6rem;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            i{
                transition: all .3s;
                z-index: 9999;
            }
            .rotate{
                transform: rotate(180deg);
            }
            .van-popup--top{
                top: 0.88rem;
                border-top: 1px solid #eee;
            }
            .van-overlay{
                top: 0.88rem;
            }
            h3{
                padding:0 .2rem;
                font-size:.26rem;
                margin-top:.05rem;
            }
            ul{
                padding:0 .2rem;
                display:flex;
                flex-wrap:wrap;
                li{
                    border:1px solid #ccc;
                    padding:5px;
                    margin:.2rem .2rem;
                    font-size:.24rem;
                }
            }
        }
    }
    
}
</style>