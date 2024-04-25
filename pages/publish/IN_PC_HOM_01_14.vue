<template>
  <div class="title_wrap">
    <div class="prd_tit">
      <h2>라이브</h2>
    </div>
  </div>

  <div class="inner">
    <!-- 라이브 콘텐츠 -->
    <section class="live_cont liveWarp">
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
          <button type="button" class="btnXS09" onclick="eventInfoCheck('C');">알림 받는 중</button>
      </div>
      <div class="snsBox" id="btnLiveAlarm">
          <!-- 알림받기 -->
          <p class="txt">이니라이브 <strong>알림 신청</strong>하고 <strong>라이브 혜택 받기</strong></p>
          <button type="button" class="btnXS03" onclick="eventInfoCheck('R');">알림 받기</button>
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

    <section>
      <h3>이니슾라이브 다시보기</h3>

      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_live.slice(0,6)" :key="idx">
            <LiveItem :item="item" />
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h3>라이브 다시보기</h3>

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
    </section>
  </div>
</template>
<script setup>
import { sample_live } from '~/test/data/dummyData'

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
	// layout: 'pc-category'
  layout: 'pc-mypage'
});

onMounted(() => {
});

// const props = defineProps({
//     layoutType: {
//       type:String,
//       default:'default'
//     }
// });
</script>
<style lang="scss" scoped>

.title_wrap {
  padding: 60px 20px 30px;
  justify-content:space-between;
  .prd_tit {
    h2 {
      margin-bottom:30px;
      font-size:38px;
      font-weight:300;
    }
    p {
      color:#000;
      font-size:24px;
      font-weight:600;
      line-height:31px;
    }
  }
}

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

.liveVisual{position:relative;}
.liveVisual .visualImg{position:relative;}
.liveVisual .visualImg::before{content:"";position:absolute;left:0;top:0;display:block;width:50%;height:100%;background:linear-gradient(90deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%);;}
.liveVisual .notice{position:absolute;left:60px;top:50px;width:520px;padding:0 0 20px;border-bottom:1px solid #fff;font-weight:600;font-size:20px;line-height:1.2;color:#fff;}
.liveVisual .infoBox{position:absolute;left:60px;bottom:160px;color:#fff;}
.liveVisual .infoBox .state{display:inline-block;margin:0 0 15px;padding:4px 10px;font-weight:600;font-size:13px;line-height:1.23;color:#fff;border-radius:80px;background:rgba(0, 0, 0, 0.45);}
.liveVisual .infoBox .state.ing{padding-right:4px;background:rgba(255, 0, 0, 0.8);}
.liveVisual .infoBox .state.ing .ani{position:relative;display:inline-block;width:2px;height:3.5px;margin-right:10px;;margin-left:10px;background:#fff;animation:aniLive 1s infinite ease;animation-delay:0.4s;}
.liveVisual .infoBox .state.ing .ani::before,
.liveVisual .infoBox .state.ing .ani::after{content:"";position:absolute;bottom:0;display:block;width:2px;height:3.5px;background:#fff;animation:aniLive 1s infinite ease;}
.liveVisual .infoBox .state.ing .ani::before{left:-100%;margin-left:-1.5px;animation-delay:0.2s;}
.liveVisual .infoBox .state.ing .ani::after{right:-100%;margin-right:-1.1px;animation-delay:0.6s;}
.liveVisual .title{display:block;margin-bottom:17px;font-weight:600;font-size:28px;line-height:1.29;color:#fff;}
@keyframes aniLive {
    0%,100%{height:3.5px}
    50%{height:8px}
    25%,75%{height:5.5px}
}
.liveVisual .infoBox .date{font-weight:500;font-size:14px;line-height:1.43;color:#fff;}
.liveVisual .infoBox .date::before{display:inline-block;content:'';width:16px;height:16px;margin-right:5px;vertical-align:sub;background:url('../images/ui/ico_live_time.png') no-repeat 50% 50%;}
.liveVisual .btBox{position:absolute;left:60px;bottom:60px;}
.liveVisual .btBox .dday{position:absolute;right:0;top:-24px;padding:4px 8px;z-index:10;font-weight:600;font-size:12px;line-height:1.33;color:#fff;background:#00BC70;}
.liveVisual .btBox .dday::after{display:inline-block;content:'';position:absolute;right:8px;bottom:-6px;width:0;height:0;border-bottom:0 solid transparent;border-top:7px solid #00BC70;border-left:6px solid transparent;border-right:6px solid transparent;}
.liveVisual .btBox .btnSetBox{display:flex;width:400px;}
.liveVisual .btBox .btnSetBox [class*="btn"]{flex:1;font-size:16px;}

.liveVisual_none{position:relative;height:550px;padding:40px 0 0;text-align:center;background:linear-gradient(180deg, #F5F5F5 0%, #E8E8E8 100%) ;}
.liveVisual_none::before{display:inline-block;content:'';position:absolute;left:0;bottom:64px;width:100%;height:280px;background:url('../images/ui/bg_live_typo.png') no-repeat 50% 50%;}
.liveVisual_none::after{display:inline-block;content:'';position:absolute;left:0;bottom:0;width:100%;height:354px;background:url('https://images.innisfree.co.kr/resources/web2/images/ui/bg_live_mockup.png') no-repeat 50% bottom;}
.liveVisual_none .imgTitle{display:inline-block;width:190px;height:40px;margin-bottom:20px;background:url('https://images.innisfree.co.kr/resources/web2/images/ui/img_InniLive.png') no-repeat 50% 50%;}
.liveVisual_none .notice{line-height:1.38;color:#000;}

.liveWarp .snsBox{display:flex;justify-content:center;align-items:center;padding:20px 0;letter-spacing:-0.01em;border:1px solid #eee;}
.liveWarp .snsBox .txt{margin-right:30px;font-weight:600;font-size:20px;line-height:1;}
.liveWarp .snsBox .txt strong{font-weight:600;}
/* .liveWarp .snsBox .txt:before{display:inline-block;content:'';width:20px;height:20px;margin-right:10px;vertical-align:middle;background:url('../images/ui/ico_sns_kko.png') no-repeat 50% 50%;} */
.liveWarp .snsBox .btnXS03{height:30px;font-size:12px;padding:0 20px;}
.liveWarp .innarea{position:relative;padding:60px 0;border-bottom:1px solid #eee;text-align:center;}
.liveWarp .innarea .title{margin:0 0 10px;font-weight:600;font-size:24px;line-height:1.33;}
.liveWarp .innarea .desc{font-size:18px;line-height:1.33em;color:#666;}
</style>
