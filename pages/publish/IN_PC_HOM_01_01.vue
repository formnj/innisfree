<template>
  <div class="main">
    <!-- visual -->
    <div class="visual">
      <swiper class="name"
        :slides-per-view="'auto'"
        :space-between="40"
        :loop="true"
        navigation
        :pagination="{
          type:'fraction'
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :centered-slides="true"
        :slides-offset-before="-330"

        ref="mySwiper"
      >
        <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx">
          <div class="item">
            <strong>{{idx+1}}</strong>
            <img :src="item.img">
          </div>
        </swiper-slide>
        <!-- customer pagination -->
        <div class="custom_pagination">
          <div class="current">
            <em class="idx_01"></em> /
            <em class="idx_02"></em> /
          </div>
          <strong class="total"></strong>

          <Button class="swiper_controler" :data="swiper_status" :txt="swiper_status" @click="swiper_control" />
        </div>
        <!-- //customer pagination -->
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
    <section class="benefit">

      <swiper
        :slides-per-view="'auto'"
        :space-between="40"
        :loop="true"
        navigation
        :pagination="{
          type:'fraction'
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :centered-slides="true"
        :slides-offset-before="-330"

        ref="mySwiper"
      >
        <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx">
          <div class="item">
            <strong>{{idx+1}}</strong>
            <img :src="item.img">
          </div>
        </swiper-slide>
        <!-- customer pagination -->
        <div class="custom_pagination">
          <div class="current">
            <em class="idx_01"></em> /
            <em class="idx_02"></em> /
          </div>
          <strong class="total"></strong>

          <Button class="swiper_controler" :data="swiper_status" :txt="swiper_status" @click="swiper_control" />
        </div>
        <!-- //customer pagination -->
      </swiper>
    </section>
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
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Autoplay, Navigation, Pagination]);

const onSwiper = (swiper) => {
  console.log(swiper.el)

  /* pagination reset */
  const total = swiper.loopedSlides,
  current = swiper.realIndex+1;

  if(total < 10) {
    document.querySelector('.custom_pagination .current .idx_01').textContent = '0'+current;
    if((current+1) > total) {
      document.querySelector('.custom_pagination .current .idx_02').textContent = '0'+((total - current)+1);
    } else {
      document.querySelector('.custom_pagination .current .idx_02').textContent = '0'+(current+1);
    }
    document.querySelector('.custom_pagination strong.total').textContent = '0'+total;
  }
  /* //pagination reset */
};

const onSlideChange = (swiper) => {

  /* pagination reset */
  const total = swiper.loopedSlides,
  current = swiper.realIndex+1;

  if(total < 10) {
    document.querySelector('.custom_pagination .current .idx_01').textContent = '0'+current;

    if((current+1) > total) {
      document.querySelector('.custom_pagination .current .idx_02').textContent = '0'+((total - current)+1);
    } else {
      document.querySelector('.custom_pagination .current .idx_02').textContent = '0'+(current+1);
    }
    document.querySelector('.custom_pagination strong.total').textContent = '0'+total;
  }
  /* //pagination reset */
};

const swiper_status = ref('play');
const swiper_control = (e) => {
  if(swiper_status.value == 'play'){
    swiper_status.value='pause'
  } else {
    swiper_status.value='play';
  }
}


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
</script>
<style lang="scss" scoped>
    .main {
      .visual {
        .swiper-container {
          padding-bottom:40px;
          ::v-deep .swiper-pagination {
            display:none;
          }
          .custom_pagination {
            position:absolute;
            right:0;
            bottom:0;
            left:0;
            display:flex;
            justify-content:center;
          }
        }
        ::v-deep .swiper-slide {
          width:620px !important;
          opacity:0.2;
          filter:grayscale(1);
          transition:opacity 0.25s;

          &.swiper-slide-active {
            opacity:1;
            filter:grayscale(0);
          }
          &.swiper-slide-active + .swiper-slide {
            opacity:1;
            filter:grayscale(0);
          }
        }
        ::v-deep [class*="swiper-button-"] {
          width:60px;
          height:60px;
          margin-top:-50px;
          background:url('~/assets/images/common/icon_split.png') 0 -190px no-repeat;
          background-size:250px auto;
          &:after {
            display:none;
          }
          &.swiper-button-next {
            transform:rotate(180deg);
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
