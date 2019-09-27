<template>
  <div>
    <swiper v-if="banners.length > 0" :options="swiperOption">
      <swiper-slide v-for="(slide, index) in banners" :key="index">
        <a>
          <img :src="slide.image" alt style="width:100%" />
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
      }
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
  }
};
</script>

<style  scoped>
</style>