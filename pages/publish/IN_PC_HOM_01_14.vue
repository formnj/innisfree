<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>라이브</h2>
    </div>
  </div>
  <!-- //title washed -->

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
  </div>
    <!-- //라이브 콘텐츠 -->

  <!-- title washed -->
  <div class="sub_title_wrap">
    <h3>이니슾라이브 다시보기</h3>
  </div>
  <!-- //title washed -->
  <div class="inner">
    <div class="swiper_wrap">
      <swiper
        :slides-per-view="'auto'"
        :space-between="20"
        :loop="true"
        :pagination="{
          type:'fraction'
        }"
        @swiper="onSwiper"
      >
        <swiper-slide>
          <div class="list_wrap">
            <ul class="goods_list">
              <li v-for="(item, idx) in sample_live.slice(0,10)" :key="idx">
                <LiveItem :item="item" />
              </li>
            </ul>
          </div>
        </swiper-slide>
        <swiper-slide>
          <ul class="goods_list">
            <li v-for="(item, idx) in sample_live.slice(10,20)" :key="idx">
              <LiveItem :item="item" />
            </li>
          </ul>
        </swiper-slide>
      </swiper>
      <div class="navigation">
        <button class="swiper-button-prev" @click="swiper_nav.prev"></button>
        <button class="swiper-button-next" @click="swiper_nav.next">Next</button>
      </div>
    </div>
  </div>

  <!-- title washed -->
  <div class="sub_title_wrap">
    <h3>라이브 다시보기</h3>
  </div>
  <!-- //title washed -->
  <div class="inner">
    <div class="swiper_wrap">
      <swiper
        :slides-per-view="'auto'"
        :space-between="20"
        :loop="true"
        :pagination="{
          type:'fraction'
        }"
        @swiper="onSwiper"
      >
        <swiper-slide>
          <div class="list_wrap">
            <ul class="goods_list">
              <li v-for="(item, idx) in sample_live.slice(0,10)" :key="idx">
                <LiveItem :item="item" />
              </li>
            </ul>
          </div>
        </swiper-slide>
        <swiper-slide>
          <ul class="goods_list">
            <li v-for="(item, idx) in sample_live.slice(10,20)" :key="idx">
              <LiveItem :item="item" />
            </li>
          </ul>
        </swiper-slide>
      </swiper>
      <div class="navigation">
        <button class="swiper-button-prev" @click="swiper_nav.prev"></button>
        <button class="swiper-button-next" @click="swiper_nav.next">Next</button>
      </div>
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
	layout:'pc-category'
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
  width:1280px;
  margin:0 auto;
  position:relative;
  ::v-deep .swiper-container {
    padding-bottom:61px;
    div[role="button"] {
      &:after {
        color:#000000;
        font-size:24px;
      }
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
  .liveVisual_none {
    position: relative;
    height: 550px;
    padding: 40px 0 0;
    text-align: center;
    background: linear-gradient(180deg, #F5F5F5 0%, #E8E8E8 100%);
    &:before, &:after {
      width:100%;
      content:'';
      position:absolute;
      display:inline-block;
    }
    &:before {
      height: 280px;
      background: url('~/assets/images/ui/bg_live_typo.png') no-repeat 50% 50%;
      left: 0;
      bottom: 64px;
    }
    &:after {
      height: 354px;
      background: url('~/assets/images/ui/bg_live_mockup.png') no-repeat 50% bottom;
      left: 0;
      bottom: 0;
    }
    .imgTitle {
      width: 190px;
      height: 40px;
      margin-bottom: 20px;
      font-size:0;
      background: url('~/assets/images/ui/img_InniLive.png') no-repeat 50% 50%;
      display: inline-block;
    }
    .notice {
      line-height:1.38;
    }
  }
  .snsBox {
    padding: 20px 0;
    letter-spacing: -0.01em;
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    .txt {
      margin-right: 30px;
      font-weight: 600;
      font-size: 20px;
      line-height: 1;
    }
  }
  .innarea {
    padding: 60px 0;
    border-bottom: 1px solid #eee;
    position: relative;
    text-align: center;
    .title {
      margin: 0 0 10px;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.33;
    }
    .desc {
      color: #666;
      font-size: 18px;
      line-height: 1.33em;
    }
  }
}
</style>
