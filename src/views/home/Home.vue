<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3"
    :is-pull-up-load="true" 
    @scroll="contentClick"
    @pullingUp="pullingUpLoadMoreClick"
    >
      <home-swiper :banners="banners" class="home-swiper"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精品']"
      @tabClick="tabClick"></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    
  </div>
</template>

<script>
  import HomeSwiper  from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  //  公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'
  // 数据
  import { getHomeMultidata, getHomeGoods } from 'network/home/home'
  
  export default {
    name:'',
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop': {page:0,list: []},
          'new': {page:0,list: []},
          'sell': {page:0,list: []},
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      Scroll,
      TabControl,
      GoodList,
      BackTop
    },
    created(){
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      
    },
    mounted() {
      //事件总线 
      this.$bus.$on('itemImageLoad', () => {
          this.$refs.scroll.refresh()
          
      })
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1: 
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0,44,500)
         this.isShowBackTop = false
      },
      // 监听滚动的位置
      contentClick(position) {
        if(position.y < -500) {
          this.isShowBackTop = true
        } else {
          this.isShowBackTop = false
        }
      },
      // 上拉加载数据
      pullingUpLoadMoreClick() {
         console.log("上拉加载更多！")
        this.getHomeGoods(this.currentType)
      },
      /**
       * 网络请求接口
       */ 
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        },err=> {
          console.log(err);
        })
      },
      // 获取商品
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
          
        },err =>{
          console.log(err);
        })
      }
      
    }
  }
</script>

<style  scoped>
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left:0;
  right: 0;
  top: 0;
  z-index: 2;
}
.home-swiper{
  /* margin-top: 44px; */
}
.tab-control{
  position:sticky;
  top: 44px;
  z-index: 1;
}
.content {
  /* height: 400px; */
  /* height: calc(100% - 93px); */
  overflow: hidden;

  position:absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0; 
}
</style>