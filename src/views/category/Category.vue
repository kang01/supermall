<template>
  <!-- ref/children -->
  <div class="wrapper" ref="">
    <ul class="content">
      <button class="btn">按钮</button>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  import PullDown from '@better-scroll/pull-down'

  BScroll.use(Pullup) 
  BScroll.use(PullDown) 
  export default {
    name:'',
    mounted() {
      //默认情况下BScroll是不实时的监听滚动位置
      //probe 侦测
      //0,1都是不侦测实时的位置
      //2.在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
      //3.只要是滚动，都侦测
      let bs = new BScroll('.wrapper',{
        probeType: 3,
        click: false,
        pullUpLoad: true,
        pullDownRefresh: true
      })
      bs.on('scroll',(position) => {
        // console.log(position);
      })
      bs.on('pullingUp',() => {
        console.log("上拉加载更多！")
        // 此方法可以上拉加载多次 标识一次上拉加载动作结束。
        bs.finishPullUp()
      })
      bs.on('pullingDown', () => {
        console.log("下拉加载更多！")
      })

      document.querySelector(".btn").addEventListener('click',function(){
        alert("-------");
        
      })
    }
  }
</script>

<style  scoped>
.wrapper{
  height: 150px;
  border: 1px solid red;
  overflow: hidden;
}
</style>