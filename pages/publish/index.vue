<template>
  <div class="main">
    <div class="inner">
      <swiper-container
        slides-per-view="auto"
        loop="true"
        loop-additional-slides="1"
        centered-slides="true"                
        grab-cursor="true"
        slides-offset-before="-310"        
      >
        <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx" class="item">
          <img :src="item.img">{{  idx  }}
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'publish'
})


import { register } from 'swiper/element/bundle';
register();

const sampleSlide = [
  {
    img: ("https://images.innisfree.co.kr/upload/event/3481_0.jpg?T202404030957"),
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3463_0.png?T202404030957"),
  },  
  {
    img: ("https://images.innisfree.co.kr/upload/event/3463_0.png?T202404030957"),
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3481_0.jpg?T202404030957"),
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3481_0.jpg?T202404030957"),
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3463_0.png?T202404030957"),
  }
];
</script>
<style lang="scss" scoped>
    .main {
      .inner {
        max-width: 1920px;
        margin: 0 auto;
        .item {
          width: 620px !important;
          filter:grayscale(1);
          margin: 0 20px;

          &.swiper-slide-active {
            filter:grayscale(0);
          }
          &.swiper-slide-active + .item {
            filter:grayscale(0);
          }
        }
      }
    }
</style>