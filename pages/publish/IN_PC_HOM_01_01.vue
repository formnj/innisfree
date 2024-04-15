<template>
  <div class="main">
    <!-- visual -->
    <div class="visual">
      <swiper
        :slides-per-view="'auto'"
        :space-between="40"
        :loop="true"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :centered-slides="true"
        :slides-offset-before="-310"
      >
        <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx">
          <div class="item">
            <strong></strong>
            <img :src="item.img">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- //visual -->

    <!-- 오늘의 추천 제품 -->
    <section>
      <h2>
        <a href="#none">오늘의 추천 제품</a>
      </h2>
    </section>
    <!-- //오늘의 추천 제품 -->

    <!-- 공식어워즈 -->
    <section class="award">
      <div class="inner">
        공식어워즈
      </div>
    </section>
    <!-- //공식어워즈 -->

    <!-- 이 제품 어때요 -->
    <section>
      <h2>
        <a href="#none"><strong>주소희</strong> 님, 이 제품 어때요?</a>
      </h2>
    </section>
    <!-- //이 제품 어때요 -->

    <!-- 혜택 -->
    <section class="benefit">혜택</section>
    <!-- //혜택 -->

    <!-- 랭킹 -->
    <section>
      <h2>
        <a href="#none">랭킹</a>
      </h2>
      <div class="inner">
        <div class="update_wrap">
          <Tabs tabType="type_txt" :item="rankingTabs"  :tabidx="0" />
          <span class="date">03:00 기준</span>
        </div>
      </div>
    </section>
    <!-- //랭킹 -->
  </div>
</template>
<script setup>
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

import {
  sampleSlide
} from '~/test/data/dummyData'

definePageMeta({
  layout: 'pc-default'
})

const rankingTabs = [
  {txt:'전체'},
  {txt:'스킨케어'},
  {txt:'메이크업'},
  {txt:'남성'},
  {txt:'헤어/바디'},
  {txt:'기획 세트'},
  {txt:'미용소품'}
]

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>
<style lang="scss" scoped>
    .main {
      .visual {
        ::v-deep .swiper-slide {
          width:620px !important;
          filter:grayscale(1);

          &.swiper-slide-active {
            filter:grayscale(0);
          }
          &.swiper-slide-active + .item {
            filter:grayscale(0);
          }
        }
      }
      section {
        padding:100px 0;
        &.award {
          padding:80px 0;
        }
        &.benefit {
          background-color:#f5f5f5;
        }
        .inner {
          max-width:1320px;
          margin:0 auto;
          padding:0 20px;
        }
        h2 {
          margin-bottom:40px;
          text-align:center;
          a {
            padding-right:60px;
            color:#000;
            font-size:32px;
            font-weight:600;
            position:relative;
            display:inline-block;
            &:after {
              width:40px;
              height:40px;
              background:url('~/assets/images/common/icon_split.png') 0 -130px no-repeat;
              background-size:250px auto;
              content:'';
              position:absolute;
              top:50%;
              right:0;
              display:block;
              transform:translateY(-50%);
            }
            strong {
              color:#00BC70;
            }
          }
        }
      }
      .update_wrap {
        position:relative;
        .date {
          color:#999;
          font-size:16px;
          font-weight:600;
          position:absolute;
          top:0;
          right:0;
        }
      }
    }
</style>
