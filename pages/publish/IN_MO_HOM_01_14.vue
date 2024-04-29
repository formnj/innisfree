<template>
  <div class="inner">
    <!-- 라이브 콘텐츠 -->
    <section class="live_box">
      <div class="liveVisual_none">
          <div class="imgTitle"><span class="ir">innilive</span></div>
          <p class="notice">
              멤버십/빅세일, 신제품 등 이니스프리의 소식을<br>
              가장 먼저 좋은 구성으로 라이브에서 만나보세요!<br>
              라이브 단독 경품과 혜택까지!
          </p>
      </div>
      <div class="snsBox" id="btnLiveAlarmIng">
          <p class="txt">이니라이브 <strong>알림 받는 중</strong></p>
          <Button class="btn_min" txt="알림 받는 중" />
      </div>
      <div class="snsBox" id="btnLiveAlarm">
          <!-- 알림받기 -->
          <p class="txt">이니라이브 <strong>알림 신청</strong>하고 <strong>라이브 혜택 받기</strong></p>
          <Button class="btn_min" txt="알림 받기" />
      </div>
      <div class="innarea">
          <p class="title">이니슾라이브</p>
          <p class="desc">
            FUN한 라이브! 이니슾라이브에서 만나보세요.<br>
            이니슾라이브만의 특별한 쇼핑 혜택에 FUN한 콘텐츠까지!<br><br>
            이니슾라이브는 매 월 여러분들을 찾아갑니다!
          </p>
      </div>
    </section>
    <!-- //라이브 콘텐츠 -->

    <!-- title washed -->
    <div class="sub_title_wrap">
      <div>
        <h3>이니슾라이브 다시보기</h3>
      </div>
      <a href="#none" class="btn_link_arrw"></a>
    </div>
    <!-- //title washed -->

    <div class="swiper_wrap">
      <swiper
        :slides-per-view="'auto'"
        :loop="false"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(item, idx) in sample_live" :key="idx">
          <LiveItem :item="item" />
        </swiper-slide>
      </swiper>
    </div>

    <!-- title washed -->
    <div class="sub_title_wrap">
      <div>
        <h3>라이브 다시보기</h3>
      </div>
      <a href="#none" class="btn_link_arrw"></a>
    </div>
    <!-- //title washed -->
    <div class="swiper_wrap">
      <swiper
        :slides-per-view="'auto'"
        :loop="false"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(item, idx) in sample_live" :key="idx">
          <LiveItem :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { sample_live } from '~/test/data/publish/dummyData'

import SwiperCore, { Navigation, Pagination, A11y, Controller } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, A11y, Controller]);

/* swiper custom navigation */
const setSwiper = ref(null);
const onSwiper = (swiper) => setSwiper.value = swiper;
const swiper_nav = {
  prev: () => {
    setSwiper.value.slidePrev();
  },
  next: () => {
    setSwiper.value.slideNext();
  },
};
/* swiper custom navigation */

definePageMeta({
	layout:'mo-category'
});

onMounted(() => {
});

const props = defineProps({
    layoutType: {
      type:String,
      default:'default'
    }
});
</script>
<style lang="scss" scoped>
.swiper_wrap {
  margin-right:-20px;
  margin-left:-20px;
  :deep(.swiper-container) {
    padding-right:20px;
    padding-left:20px;
    .swiper-wrapper {
      margin-left:-0.3rem
    }
    .swiper-slide {
      width:16.5rem;
      padding-left:0.3rem;
    }
  }
  .navigation {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    top:50%;
    left:0;
    transform:translateY(-50%);
    button {
      color:#000;
      font-size:0;
      position:absolute;
      &:after {
        font-size:22px;
      }
      &.swiper-button-prev {
        left:-65px;
        &:after {
          content:'prev';
        }
      }
      &.swiper-button-next {
        right:-65px;
        &:after {
          content:'next';
        }
      }
    }
  }
}

.live_box {
  margin-right:-20px;
  margin-left:-20px;
  .liveVisual_none {
    position: relative;
    height: 46rem;
    padding: 4.5rem 0 0;
    text-align: center;
    background: linear-gradient(180deg, #F5F5F5 0%, #E8E8E8 100%);
    &:before, &:after {
      width:100%;
      content:'';
      position:absolute;
      display:inline-block;
    }
    &:before {
      height: 21rem;
      background: url('~/assets/images/ui/bg_live_typo.png') no-repeat 50% 50%;
      background-size:33.3rem 21rem;
      left: 0;
      bottom: 7.5rem;
    }
    &:after {
      height: 26.5rem;
      background: url('~/assets/images/ui/bg_live_mockup.png') no-repeat 50% bottom;
      background-size:17rem 26.5rem;
      left: 0;
      bottom: 0;
    }
    .imgTitle {
      width: 13.6rem;
      height: 2.9rem;
      margin-bottom: 1.6rem;
      font-size:0;
      background: url('~/assets/images/ui/img_InniLive.png') no-repeat 50% 50%;
      background-size:13.6rem 2.9rem;
      display: inline-block;
    }
    .notice {
      font-size:1.3rem;
      line-height:2rem;
    }
  }
  .snsBox {
    padding: 1.8rem 2.1rem;
    letter-spacing: -0.01em;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .txt {
      font-weight: 600;
    }
    :deep(button) {
      height:2.4rem;
      border-radius:0.1rem;
      em {
        padding:0 0.8rem;
        font-size:1rem;
        font-weight:600;
        line-height:2.4rem;
      }
    }
  }
  .innarea {
    padding:3rem 20px;
    border-bottom: 1px solid #eee;
    position: relative;
    .title {
      margin: 0 0 10px;
      font-size:1.6rem;
      font-weight:600;
      line-height:1.25;
    }
    .desc {
      margin-top:0.5rem;
      color: #666;
      font-size: 1.2rem;
      line-height: 1.54;
    }
  }
}
</style>
