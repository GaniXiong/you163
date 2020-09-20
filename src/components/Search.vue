<template>
  <div class="search">
      <form action="/">
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
        />
      </form>
      <div class="con">
        <h3>热搜内容</h3>
        <ul>
          <li v-for="(item,index) in hots"
           :key="index"
           :class="item.highlight?'high':''"
           >{{item.keyword}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant'
import axios from 'axios'

Vue.use(Search);
export default {
  data() {
    return {
      value: '',
      hots:[]
    }
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      this.$router.push("/")
    },
  },
  created(){
    // 请求热词数据
    let url = '/hehe/xhr/search/init.json'
    axios.post(url)
    .then((res)=>{
      // console.log(res.data.data.hotKeywordVOList)
      this.hots = res.data.data.hotKeywordVOList
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
</script>

<style lang="less" scoped>
.search{
  height:100vh;
  width:100%;
  background:#eee;
  .con{
    height:3.2rem;
    width:100%;
    background:#fff;
    padding:.1rem .3rem;
    h3{
      font-size:.28rem;
      color:#ccc;
      margin-bottom:.1rem;
    }
    ul{
      display:flex;
      flex-wrap:wrap;
      li{
        border:1px solid #ccc;
        padding:5px;
        margin:.1rem .1rem;
        font-size:.24rem;
      }
      .high{
        color:#dd1a21;

      }
    }
  }
}

</style>