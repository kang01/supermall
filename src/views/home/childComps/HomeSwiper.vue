<template>
  <div>
    <!-- v-if="banners.length > 0"  -->
    <swiper :options="swiperOption">
      <!-- <swiper-slide v-for="(slide, index) in banners" :key="index">
        <a>
          <img :src="slide.image" alt style="width:100%" @load="imageLoad"/>
        </a>
      </swiper-slide> -->
      <swiper-slide>
        <a>
          <img src="../../../assets/img/home/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg" alt style="width:100%" @load="imageLoad"/>
         </a>
      </swiper-slide>
      <swiper-slide>
        <a>
          <img src="../../../assets/img/home/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg" alt style="width:100%" @load="imageLoad"/>
          </a>
      </swiper-slide>
      <swiper-slide>
        <a>
          <img src="../../../assets/img/home/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg" alt style="width:100%" @load="imageLoad"/>
          </a>
      </swiper-slide>
      <swiper-slide>
        <a>
          <img src="../../../assets/img/home/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg" alt style="width:100%" @load="imageLoad"/>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
    <!-- <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
      </swiper-item>
    </swiper>-->
  </div>
</template>

<script>
// import { Swiper, SwiperItem } from 'components/common/swiper'
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "ChildComps",
  data() {
    return {
      swiperOption: {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
　　    observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        loop:true,
　　    autoplay: {
  　　　  delay: 2000,
  　　    disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination"
        },
        // 环路
        // loop: true,
        // 切换效果 默认：slide
        // effect: "slide"
      },
      isLoad: false
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
      
    }
  }
};
</script>

<style  scoped>
</style>