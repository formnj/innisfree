<template>
  <div class="main_swiper">
    <swiper
      :slides-per-view="'1'" :loop="loopYN" :pagination="pagination" :autoplay="autoplayYN" :speed="500" :navigation="navigation" :thumbs="{ swiper: thumbsSwiper }">
      <swiper-slide v-for="(item, idx) in prodImgData" :key="idx">
        <img :src="item.img">
      </swiper-slide>
      <!-- <div class="custom_pagination"></div> -->
    </swiper>
  </div>

  <div v-if="thumbYN" class="thumb_swiper">
    <swiper
      :slides-per-view="5" :space-between="5" :navigation="navigation" watch-slides-progress @swiper="setThumbsSwiper">
      <swiper-slide v-for="(item, idx) in prodImgData" :key="idx">
        <img :src="item.img">
      </swiper-slide>
    </swiper>
    <div class="custom_nav">
      <button type="button" class="nav_prev">prev</button>
      <button type="button" class="nav_next">next</button>
    </div>
  </div>
</template>

<script setup>
import SwiperCore, { Autoplay, Pagination, A11y, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import { prodImgData } from '~/test/data/publish/dummyData';

SwiperCore.use([Autoplay, Pagination, A11y, Navigation, Thumbs]);


const props = defineProps({
  autoplayYN: { //autoplay 여부
    type: Boolean,
    default: false
  },
  loopYN: { //loop 여부
    type: Boolean,
    default: false
  },
  thumbYN: { //loop 여부
    type: Boolean,
    default: true
  }
});

// const pagination = {
//   el: ".custom-pagination",
//   type: "custom",
//   renderCustom: function (swiper, current, total) {
//     return "<span class='pagination_current'>0" + current + "</span><span class='pagination_total'>0" + total + "</span>";
//   }
// }

const navigation = {
  prevEl: ".nav_prev",
  nextEl: ".nav_next",
  type: "custom",
}

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<style lang="scss" scoped>
:deep(.swiper-container) {
  position: relative;

  .swiper-slide {
    img {
      vertical-align: top;
    }
  }
}

.thumb_swiper {
  margin: 30px 0;
  position: relative;

  & :deep(.swiper-container) {
    width: 430px;

    .swiper-slide {
      cursor: pointer;
    }
  }

  .custom_nav {
    button {
      width: 24px;
      height: 24px;
      font-size: 0;
      background: url('/assets/images/common/icon_split.png') -420px -30px no-repeat;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;

      &.nav_prev {
        left: 0;
        transform: rotate(180deg) translateY(50%);
      }

      &.nav_next {
        right: 0;
      }
    }
  }
}
</style>
