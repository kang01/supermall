<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control class="tab-control" 
      :titles="['流行','新款','精品']"
      @tabClick="tabClick" ref="tabControl1" 
      v-show="isTabShow"
      />
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3"
    :is-pull-up-load="true" 
    @scroll="contentClick"
    @pullingUp="pullingUpLoadMoreClick"
    >
      <home-swiper class="home-swiper" 
      :banners="banners" 
      @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control 
      :titles="['流行','新款','精品']"
      @tabClick="tabClick" ref="tabControl2" 
      />
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

  import { debounce } from 'common/utils'
  // 数据
  import { getHomeMultidata, getHomeGoods } from 'network/home/home'
  
  export default {
    name:'',
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
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabShow: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    
    created(){
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      
    },
    mounted() {
      //事件总线 图片加载完的事件监听
      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('itemImageLoad', () => {
          // this.$refs.scroll.refresh()
          refresh()
      })
    },
    destroyed() {
      console.log("Home Destroy");
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    // 离开时
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      // 轮播图图片监听事件
      swiperImageLoad() {
        // 获取tabControl的offsetTop 组件没有offsetTop
        // 所有的组件都有一个属性$el：用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        console.log(this.$refs.tabControl2.$el.offsetTop);
      },
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
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0,44,500)
         this.isShowBackTop = false
      },
      // 监听滚动的位置
      contentClick(position) {
        // 判断backTop是否显示
        this.isShowBackTop = position.y < -500

        // if(position.y < -500) {
        //   this.isShowBackTop = true
        // } else {
        //   this.isShowBackTop = false
        // }
        // 决定tabControl是否吸顶（position: fixed）
        this.isTabShow = position.y < -this.tabOffsetTop

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
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;

  /* position: fixed;
  left:0;
  right: 0;
  top: 0;
  z-index: 2; */
}
/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 3;
} */
.tab-control{
  position: relative;;
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