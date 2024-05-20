<template>
  <div class="main">
    <!-- visual -->
    <div class="visual">
      <swiper
        v-bind="swieprOpt.visual"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :navigation="navigation"
      >
        <swiper-slide v-for="(item, idx) in mainSam.visual" :key="idx">
          <a href="#none" class="item">
            <!-- visual tag -->
            <div class="tag-card">
              <span class="cardSt_1">{{item.tag[0]}}</span>
              <span class="cardSt_2">{{item.tag[1]}}</span>
            </div>
            <!-- //visual tag -->

            <!-- item text content -->
            <div class="cont">
              <p class="name">
                <strong>{{item.name[0]}}</strong>
                <span>{{item.name[1]}}</span>
              </p>
              <p class="price">{{item.price[0]}}
                <em>{{item.price[1]}}</em>
              </p>
            </div>
            <!-- //item text content -->

            <!-- visual image -->
            <span class="thumb">
              <em><img :src="item.img"></em>
            </span>
            <!-- //visual image -->
          </a>
        </swiper-slide>

        <button class="swiper-button-next">Next</button>
        <button class="swiper-button-prev">Prev</button>
        <!-- customer pagination -->
        <div class="custom_pagination">
          <div class="current">
            <em class="idx_01"></em>
            <em class="idx_02"></em>
          </div>
          <strong class="total"></strong>

          <Button class="swiper-button-next" :data="swiper_status" :txt="swiper_status" @click="swiper_control" />

          <!-- <button class="swiper-button-next" style="flex:1;" @click="swiper_control">Button</button> -->
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

      <div class="module_01">
        <ul>
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
      </div>
    </section>

    <section class="narrow event">
      <div class="swiper_wrap">
        <swiper
          v-bind="swieprOpt.recommend01"
          :navigation="navigation"
        >
          <swiper-slide v-for="(item, idx) in sample_event" :key="idx">
            <EventItem :item="item" />
          </swiper-slide>
          <button class="swiper-button-next">Next</button>
          <button class="swiper-button-prev">Prev</button>
        </swiper>
      </div>
    </section>

    <section class="recommend">
      <h2>
        <a href="#none">오늘의 추천 제품</a>
      </h2>

      <div class="swiper_wrap">
        <swiper class="module_02"
          v-bind="swieprOpt.recommend02"
          :navigation="navigation"
        >
          <swiper-slide v-for="(item, idx) in mainSam.recommend02" :key="idx">
            <EventItem :item="item" />
            <GoodsItem :item="item.goods" :link="item.link" />
          </swiper-slide>
          <button class="swiper-button-next">Next</button>
          <button class="swiper-button-prev">Prev</button>
        </swiper>
      </div>
    </section>

    <section class="narrow combi">
      <div class="inner">
        <div class="main_thumb">
          <a href="#none">
            <span class="thumb">
              <em><img src="/public/images/sam/3425_0.jpg" alt="" /></em>
            </span>
            <div class="cont">
              <strong>23년 공식몰 어워즈<br/> 이 제품 아직 안샀눈사람~</strong>
              <p>18:21:01</p>
            </div>
          </a>
        </div>
        <swiper
          v-bind="swieprOpt.recommend03"
        >
          <swiper-slide v-for="(item, idx) in sample_goods.slice(3,6)" :key="idx">
            <a href="#none" class="item">
              <GoodsItem :item="item" :link="item.link" />
            </a>
          </swiper-slide>
          <!-- bar형태로 변경 예정 -->
          <div class="custom-pagination"></div>
          <!-- //bar형태로 변경 예정 -->
        </swiper>
      </div>
    </section>
    <!-- //오늘의 추천 제품 -->

    <!-- 이 제품 어때요 -->
    <section>
      <h2>
        <a href="#none"><strong>주소희</strong> 님, 이 제품 어때요?</a>
      </h2>
      <div class="swiper_wrap">
        <swiper
          v-bind="swieprOpt.recommend04"
          :navigation="navigation"
        >
          <swiper-slide v-for="(item, idx) in sample_goods" :key="idx">
            <GoodsItem :item="item" />
          </swiper-slide>
          <button class="swiper-button-next">Next</button>
          <button class="swiper-button-prev">Prev</button>
        </swiper>
      </div>
    </section>
    <!-- //이 제품 어때요 -->

    <!-- 혜택 -->
    <section class="benefit">
      <swiper
        v-bind="swieprOpt.benefit"
      >
        <swiper-slide v-for="(item, idx) in sample_event" :key="idx">
          <EventItem :item="item" />
        </swiper-slide>
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

      <div class="swiper_wrap">
        <swiper
          v-bind="swieprOpt.ranking"
          :navigation="navigation"
        >
          <swiper-slide v-for="(item, idx) in sample_goods" :key="idx">
            <GoodsItem :item="item" />
          </swiper-slide>
          <button class="swiper-button-next">Next</button>
          <button class="swiper-button-prev">Prev</button>
        </swiper>
      </div>
    </section>
    <!-- //랭킹 -->
  </div>
</template>
<script setup>
// import Swiper core and required components
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

/* swiper options */
const swieprOpt = {
  visual:  {
    slidesPerView: "auto",
    slidesPerGroup: 2,
    spaceBetween: 40,
    loop: true,
    // navigation,
    pagination: {
      type:'fraction'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    slidesOffsetBefore: -330
  },
  recommend01: {
    slidesPerView:2,
    spaceBetween: 40,
    loop: true,
  },
  recommend02: {
    slidesPerView:3,
    spaceBetween: 40,
    loop: true
  },
  recommend03: {
    slidesPerView:3,
    spaceBetween: 22,
    loop: true,
    // pagination: {
    //   type:'progressbar'
    // },
    pagination: {
      type:'fraction',
      clickable: true,
      renderCustom: function (index, className) {
        return '<span class="' + className + '">' + (index + 2) + '</span>';
      }
    }
  },
  recommend04: {
    slidesPerView:6,
    spaceBetween:22,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  },
  benefit: {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    slidesOffsetBefore: -20
  },
  ranking: {
    slidesPerView:5,
    spaceBetween:20,
  }
}

const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
}
/* //swiper options */

// const onSwiper = (swiper) => {
//   const total = swiper.loopedSlides,
//   current = swiper.realIndex+1;

//   if(total < 10) {
//     document.querySelector('.custom_pagination .current .idx_01').textContent = '0'+current;

//     if((current+1) > total) {
//       document.querySelector('.custom_pagination .current .idx_02').textContent = '0'+((total - current)+1);
//     } else {
//       document.querySelector('.custom_pagination .current .idx_02').textContent = '0'+(current+1);
//     }

//     document.querySelector('.custom_pagination strong.total').textContent = '0'+total;
//   }

//   if(swiper_status.value == 'pause') {
//     swiper.autoplay.stop();
//   } else {
//     swiper.autoplay.start();
//   }
// };

// const onSlideChange = (swiper) => {
//   const total = swiper.loopedSlides,
//   current = swiper.realIndex+1;

//   if(total < 10) {
//     document.querySelector('.custom_pagination .current .idx_01').textContent = '0'+current;

//     if((current+1) > total) {
//       document.querySelector('.custom_pagination .current .idx_02').textContent = '0'+((total - current)+1);
//     } else {
//       document.querySelector('.custom_pagination .current .idx_02').textContent = '0'+(current+1);
//     }

//     document.querySelector('.custom_pagination strong.total').textContent = '0'+total;
//   }

//   if(swiper_status.value == 'pause') {
//     swiper.autoplay.stop();
//   } else {
//     swiper.autoplay.start();
//   }
// };

const swiper_status = ref('play');
const swiper_control = (e) => {
  if(swiper_status.value == 'play'){
    swiper_status.value='pause'
  } else {
    swiper_status.value='play';
  }
}

const test = () => {
  console.log('a');
}

import {
  sampleSlide,
  mainSam,
  sample_goods,
  sample_event
} from '~/test/data/publish/dummyData'

definePageMeta({
  layout:'pc-default'
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
      min-max-width:1320px;
      .visual {
        margin-top:40px;
        .swiper-container {
          padding-bottom:40px;
          :deep(.swiper-pagination) {
            display:none;
          }
          [class*="swiper-button-"] {
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
            .swiper-button-next {
              width:20px;
              height:20px;
              margin:0;
              position:static;
              display:block;
              transform:rotate(0);
              :deep(em) {
                font-size:0;
              }
              &[data="play"] {
                background-position:-130px -250px;
              }
              &[data="pause"] {
                background-position:-100px -250px;
              }
            }
          }
        }
        :deep(.swiper-slide) {
          width:620px;
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
            z-index:1;
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
        &.narrow {
          padding:80px 0;
        }
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
        .swiper_wrap {
          .swiper-container{
            max-width:1480px;
            padding:0 100px;
            &:before {
              width:100px;
              background-color:#fff;
              content:'';
              position:absolute;
              top:0;
              bottom:0;
              left:0;
              z-index:2;
              display:block;
            }
            &:after {
              width:100px;
              background-color:#fff;
              content:'';
              position:absolute;
              top:0;
              right:0;
              bottom:0;
              z-index:2;
              display:block;
            }
            :deep([class*="swiper-button-"]) {
              width:60px;
              height:60px;
              margin-top:-50px;
              font-size:0;
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
        }
        &.recommend {
          .module_01 {
            > ul {
              margin-left:-30px;
              display:flex;
              > li {
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
          .module_02 {
            :deep(.event_item) {
              .cont {
                height:auto;
                margin-bottom:20px;
                strong {
                  font-size:20px;
                  line-height:28px;
                }
              }
            }
            :deep(.goods_item) {
              padding-top:20px;
              border-top:1px solid #eee;
              position:relative;
              display:flex;
              .img_wrap {
                width:61px;
                margin-right:20px;
                position:static;
                .thumb {
                  height:auto;
                  padding-top:132.786885%;
                }
                & + a {
                  flex:1;
                }
                .btnIconBox {
                  background-color:transparent;
                  top:25px;
                  bottom:initial;
                  left:initial;
                  transform:translateY(0);
                  button {
                    display:none;
                    &.btn_cart {
                      padding:4px;
                      border:1px solid #eee;
                      border-radius:50%;
                      display:block;
                      em{
                        width:24px;
                        height:24px;
                        background-position:-170px -140px;
                        background-size:250px auto;
                      }
                    }
                  }
                }
              }
              .cont {
                margin-top:0;
                .name {
                  margin-top:5px;
                  padding-right:42px;
                  strong {
                    height:36px;
                    color:#000;
                    font-weight:300;
                    display:block;
                  }
                }
                .review_score {
                  display:none;
                }
                .price {
                  margin-top:12px;
                  margin-bottom:0;
                  > * {
                    font-size:14px;
                  }
                  em {
                    font-size:12px;
                  }
                  span {
                    margin-right:10px;
                  }
                }
              }
            }
          }
        }
        &.event {
          :deep(.thumb){
            padding-top:53.225806%;
          }
          :deep(.cont) {
            height:auto;
            margin-top:40px;
            display:flex;
            flex-direction:column-reverse;
            strong {
              margin-top:0;
              display:flex;
              align-items:center;
              justify-content:space-between;
              &:after {
                width:32px;
                height:32px;
                background:url('~/assets/images/common/icon_split.png') -60px -200px no-repeat;
                background-size:250px auto;
                content:'';
                display:block;
              }
            }
            .date {
              margin-top:16px;
            }
          }
        }
        &.combi {
          .inner {
            display:flex;
            flex-wrap:wrap;
            .main_thumb {
              width:628px;
              a, .thumb {
                display:block;
              }
              .cont {
                margin-top:30px;
                strong {
                  font-size:32px;
                  font-weight:600;
                  display:flex;
                  align-items:center;
                  justify-content:space-between;
                  &:after {
                    width:40px;
                    height:40px;
                    margin-right:40px;
                    background:url('~/assets/images/common/icon_split.png') 0 -130px no-repeat;
                    background-size:250px auto;
                    content:'';
                    display:block;
                  }
                }
                p {
                  margin-top:10px;
                  color:#ddd;
                  font-size:32px;
                  font-weight:700;
                }
              }
            }
            .swiper-container {
              padding-left:22px;
              flex:1;
            }
          }
        }
        &.benefit {
          :deep(.swiper-slide) {
            width:400px;
            .event_item {
              .thumb {
                padding-top:53.25%;
              }
              .cont {
                height:auto;
                margin-top:0;
                padding:20px;
                background-color:#fff;
                display:flex;
                flex-direction:column-reverse;
                strong {
                  height:48px;
                  margin-top:0;
                  margin-bottom:8px;
                  font-size:20px;
                }
              }
            }
          }
        }
      }
      .update_wrap {
        margin-bottom:40px;
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
