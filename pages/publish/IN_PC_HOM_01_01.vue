<template>
  <div class="main">
    <!-- visual -->
    <div class="visual">
      <swiper
        v-bind="swiperOptions"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx">
          <a href="#none" class="item">
            <!-- visual tag -->
            <div class="tag-card">
              <span class="cardSt_1">28%</span>
              <span class="cardSt_2">특가</span>
            </div>
            <!-- //visual tag -->

            <!-- item text content -->
            <div class="cont">
              <p class="name">
                <strong>단숨에 차오르는 수분</strong>
                <span>그린티 씨드 히알루론산 세럼</span>
              </p>
              <p class="price">24,800
                <em>31,000</em>
              </p>
            </div>
            <!-- //item text content -->

            <!-- visual image -->
            <span class="thumb">
              <img :src="item.img">
            </span>
            <!-- //visual image -->
          </a>
        </swiper-slide>
        <!-- customer pagination -->
        <div class="custom_pagination">
          <div class="current">
            <em class="idx_01"></em>
            <em class="idx_02"></em>
          </div>
          <strong class="total"></strong>

          <Button class="swiper_controler" :data="swiper_status" :txt="swiper_status" @click="swiper_control" />
        </div>
        <!-- //customer pagination -->
      </swiper>
    </div>
    <!-- //visual -->

    <!-- 오늘의 추천 제품 -->
    <section class="recommend">
      <h2>
        <a href="#none">오늘의 추천 제품</a>
      </h2>

      <ul class="list_wrap">
        <li v-for="(item, idx) in mainSam.recommend" :key="idx">
          <a href="#none" class="item">
            <span class="thumb">
              <img :src="item.img" alt="" />
            </span>
            <div class="cont">
              <strong v-html="item.title"></strong>
              <p v-html="item.txt"></p>
              <Hash :item="item.hash" />
            </div>
          </a>
        </li>
      </ul>

      <swiper
        v-bind="swiperOptions"
      >
        <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx">
          <a href="#none" class="item">
            <!-- visual tag -->
            <div class="tag-card">
              <span class="cardSt_1">28%</span>
              <span class="cardSt_2">특가</span>
            </div>
            <!-- //visual tag -->

            <!-- item text content -->
            <div class="cont">
              <p class="name">
                <strong>단숨에 차오르는 수분</strong>
                <span>그린티 씨드 히알루론산 세럼</span>
              </p>
              <p class="price">24,800
                <em>31,000</em>
              </p>
            </div>
            <!-- //item text content -->

            <!-- visual image -->
            <span class="thumb">
              <img :src="item.img">
            </span>
            <!-- //visual image -->
          </a>
        </swiper-slide>
        <!-- customer pagination -->
        <div class="custom_pagination">
          <div class="current">
            <em class="idx_01"></em>
            <em class="idx_02"></em>
          </div>
          <strong class="total"></strong>

          <Button class="swiper_controler" :data="swiper_status" :txt="swiper_status" @click="swiper_control" />
        </div>
        <!-- //customer pagination -->
      </swiper>
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
      <ul class="event_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
              <a href="#none">
                  <div>
                      <img :src="item.img">
                      <em class="type04">{{ item.cate }}</em>
                  </div>
                  <dl>
                      <dt>{{ item.data }}</dt>
                      <dd v-if="item.title_01">{{item.title_01}}</dd>
                      <dd v-if="item.title_02">{{item.title_02}}</dd>
                  </dl>
              </a>
          </li>
      </ul>
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
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

/* test */
const swiperOptions = {
  slidesPerView: "auto",
  slidesPerGroup: 2,
  spaceBetween: 40,
  loop: true,
  // navigation,
  pagination: {
    type:'fraction'
  },
  autoplay: {
    delay: 300,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  slidesOffsetBefore: -330
  }
/* test */

const onSwiper = (swiper) => {

  console.log('swiper : ',swiper);
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

  if(swiper_status.value == 'pause') {
    swiper.autoplay.stop();
    console.log(' / slide : ',swiper.autoplay)
  } else {
    swiper.autoplay.start();
  }
};

const onSlideChange = (swiper) => {
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

  console.log(swiper_status.value);

  if(swiper_status.value == 'pause') {
    swiper.autoplay.stop();
    console.log(' / slide : ',swiper.autoplay)
  } else {
    swiper.autoplay.start();
  }
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
  sampleSlide,
  mainSam,
  sample_goods
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
      min-width:1320px;
      .visual {
        margin-top:40px;
        .swiper-container {
          padding-bottom:40px;
          :deep(.swiper-pagination) {
            display:none;
          }
          .custom_pagination {
            position:absolute;
            right:0;
            bottom:0;
            left:0;
            display:flex;
            justify-content:center;
            em {
              font-weight:600;
              & + em:before {
                margin:0 3px;
                content:'/';
              }
            }
            strong {
              margin:0 10px;
              color:#888;
              font-weight:400;
              display:flex;
              align-items:center;
              &:before {
                height:8px;
                margin-right:10px;
                border-left:1px solid rgba(0,0,0,0.2);
                content:'';
                display:block;
              }
            }
          }
        }
        :deep(.swiper-slide) {
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
        :deep([class*="swiper-button-"]) {
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
        .item {
          position:relative;
          .thumb {
            position:relative;
            display:block;
            &:after {
              padding-top:36.774193%;
              background:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
              content:'';
              position:absolute;
              right:0;
              bottom:0;
              left:0;
              display:block;
            }
          }
          .tag-card {
            position:absolute;
            top:20px;
            left:20px;
            &:after {
              clear:both;
              content:'';
              display:block;
            }
            & > * {
              padding:6px 10px;
              font-size:14px;
              background-color:#000;
              color:#fff;
              float:left;
              display:block;
              & + * {
                margin-left:1px;
              }
              &.cardSt_1 {
                color:#000;
                font-weight:600;
                background-color:#FFFF82;
              }
            }
          }
          .cont {
            color:#fff;
            position:absolute;
            bottom:40px;
            left:40px;
            z-index:1;
            .name {
              & > * {
                margin-top:5px;
                font-size:32px;
                display:block;
              }
            }
            .price {
              margin-top:15px;
              font-size:32px;
              font-weight:700;
              display:flex;
              align-items:center;
              em {
                margin-left:10px;
                font-size:20px;
                font-weight:300;
                text-decoration:line-through;
              }
            }
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
        &.recommend {
          .list_wrap {
            margin-left:-30px;
            display:flex;
            li {
              width:33.3333%;
              margin-left:30px;
              .item {
                padding:39px;
                border:1px solid #eee;
                box-shadow:0 4px 3px 0 rgba(0,0,0,0.03);
                display:flex;
                .thumb {
                  width:150px;
                  margin-right:40px;
                  img {
                    vertical-align:top;
                  }
                }
                .cont {
                  padding:12px 0;
                  display:flex;
                  flex:1;
                  flex-direction:column;
                  & > * {
                    letter-spacing:-0.1em;
                  }
                  strong {
                    font-size:24px;
                    font-weight:600;
                    line-height:32px;
                  }
                  p {
                    height:40px;
                    margin-top:16px;
                    color:#888;
                    font-size:16px;
                    font-weight:300;
                    line-height:20px;
                    flex:1;
                  }
                }
                :deep(.hash) {
                  button {
                    padding:3px 10px;
                    font-size:12px;
                    background-color:#fff;
                    border:1px solid #009D5E;
                    display:flex;
                    align-items:center;
                    &:before {
                      content:'#';
                    }
                  }
                }
              }
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
