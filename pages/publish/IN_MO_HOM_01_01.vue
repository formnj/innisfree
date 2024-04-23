<template>
  <div class="main">
    <!-- visual -->
    <div class="visual">
      <swiper
        v-bind="swieprOpt.visual"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
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

    <section>
      <ul class="list_wrap type_column">
        <li v-for="(item, idx) in mainSam.event_mo" :key="idx">
          <EventItem :item="item" :link="item.link"/>
        </li>
      </ul>
    </section>

    <section class="recommend">
      <h2>
        <a href="#none">오늘의 추천 제품</a>
      </h2>

      <div class="swiper_wrap">
        <swiper class="module_02"
          v-bind="swieprOpt.recommend02"
        >
          <swiper-slide v-for="(item, idx) in mainSam.recommend02" :key="idx">
            <EventItem :item="item" />
            <GoodsItem :item="item.goods" :link="item.link" />
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="combi">
      <h2>
        <a href="#none">23년 공식몰 어워즈<br/> 이 제품 아직 안샀눈사람~
        </a>
        <span class="date">03:00 기준</span>
      </h2>
      <ul class="list_wrap type_grid">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem class="type_02" :item="item" :link="item.link" />
        </li>
      </ul>
    </section>
    <!-- //오늘의 추천 제품 -->

    <section class="event">
        <ul class="list_wrap type_column02">
          <li v-for="(item, idx) in mainSam.event_mo" :key="idx">
            <EventItem :item="item" />
          </li>
        </ul>
    </section>

    <!-- 이 제품 어때요 -->
    <section>
      <h2>
        <a href="#none"><strong>주소희</strong> 님,<br/> 이 제품 어때요?</a>
      </h2>
      <div class="swiper_wrap type_01">
        <swiper
          v-bind="swieprOpt.recommend04"
        >
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0,5)" :key="idx">
            <GoodsItem class="type_02" :item="item" />
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- //이 제품 어때요 -->

    <!-- 랭킹 -->
    <section class="ranking">
      <h2>
        <a href="#none">랭킹</a>
        <span class="date">03:00 기준</span>
      </h2>
      <div class="inner">
        <div class="update_wrap">
          <Tabs tabType="type_txt" :item="rankingTabs"  :tabidx="0" />
        </div>
      </div>

      <swiper
        v-bind="swieprOpt.ranking"
      >
        <swiper-slide>
          <ul class="list_wrap">
            <li v-for="(item, idx) in sample_goods.slice(0,5)" :key="idx">
              <span class="badge">{{idx+1}}</span>
              <GoodsItem class="type_column" :item="item" :link="item.link" />
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="list_wrap">
            <li v-for="(item, idx) in sample_goods.slice(5,10)" :key="idx">
              <span class="badge">{{idx+6}}</span>
              <GoodsItem :item="item" :link="item.link" />
            </li>
          </ul>
        </swiper-slide>
      </swiper>
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

/* swiper options */
const swieprOpt = {
  visual:  {
    slidesPerView: 1,
    loop: true,
    pagination: {
      type:'fraction'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  },
  recommend02: {
    slidesPerView:'auto',
    spaceBetween: 20,
    loop: false
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
    slidesPerView:'auto',
    spaceBetween:3,
    loop: false,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
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
    slidesPerView:1,
    pagination: true,
  }
}

const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
}
/* //swiper options */

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
  sample_goods,
  sample_event
} from '~/test/data/dummyData'

definePageMeta({
  layout: 'mo-default'
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
        :deep(.swiper-pagination) {
          display:none;
        }
        .custom_pagination {
          padding:8px;
          background-color:rgba(0,0,0,0.6);
          position:absolute;
          right:0;
          bottom:0;
          z-index:1;
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
          padding-top:90.666666%;
          position:relative;
          display:block;
          &:after {
            padding-top:43.2%;
            background:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
            content:'';
            position:absolute;
            right:0;
            bottom:0;
            left:0;
            display:block;
          }
          em {
            position:absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
            img {
              width:100%;
              height:100%;
              object-fit:cover;
            }
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
            padding:3px 10px;
            font-size:12px;
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
          left:30px;
          z-index:1;
          .name {
            & > * {
              margin-top:5px;
              font-size:20px;
              display:block;
            }
          }
          .price {
            margin-top:5px;
            font-size:20px;
            font-weight:700;
            display:flex;
            align-items:center;
            em {
              margin-left:10px;
              font-size:14px;
              font-weight:300;
              text-decoration:line-through;
            }
          }
        }
      }
    }
    section {
      margin:10rem 0;
      padding:0 2.1rem;
      h2 {
        margin-bottom:2rem;
        padding-right:2.6rem;
        position:relative;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        a {
          padding-right:1rem;
          color:#000;
          font-size:2rem;
          font-weight:600;
          position:relative;
          display:block;
          strong {
            color:#00BC70;
          }
        }
        &:after {
          width:1.6rem;
          height:1.6rem;
          background:url('~/assets/mo_images/common/icon_split.png') 0 -7rem no-repeat;
          background-size:25rem auto;
          content:'';
          position:absolute;
          top:50%;
          right:0;
          display:block;
          transform:translateY(-50%) rotate(-90deg);
        }
        .date {
          padding:0.5rem 0;
          color:#999;
          font-size:1.6rem;
          font-weight:600;
        }
      }
      .swiper_wrap {
        margin:0 -2.1rem;
        .swiper-container{
          padding:0 2.1rem;
        }
        &.type_01 {
          .swiper-slide {
            width:14rem;
          }
        }
      }
      &.recommend {
        h2 {
          padding-bottom:1.2rem;
          border-bottom:1px solid #000;
          &:after {
            display:none;
          }
          a {
            &:after {
              display:none;
            }
          }
        }
        .module_02 {
          .swiper-slide {
            width:26.5rem;
          }
          :deep(.event_item) {
            .item {
              display:block;
              .thumb {
                width:100%;
                padding-top:120.754716%;
                border-radius:1rem;
                em {
                  position:absolute;
                  top:0;
                  right:0;
                  bottom:0;
                  left:0;
                }
              }
            }
            .cont {
              height:auto;
              margin-bottom:2rem;
              padding:1.6rem 2rem 0 0;
              strong {
                font-size:1.6rem;
                line-height:28px;
              }
            }
          }
          :deep(.goods_item) {
            padding-top:1.5rem;
            border-top:1px solid #eee;
            position:relative;
            display:flex;
            .img_wrap {
              width:6.1rem;
              margin-right:2rem;
              position:static;
              .thumb {
                width:6.1rem;
                height:auto;
                padding-top:132.786885%;
              }
              & + a {
                flex:1;
              }
              .btnIconBox {
                background-color:transparent;
                top:2rem;
                bottom:initial;
                left:initial;
                gap:0;
                transform:translateY(0);
                button {
                  display:none;
                  &.btn_cart {
                    padding:0.4rem;
                    border:1px solid #eee;
                    border-radius:50%;
                    display:block;
                    em{
                      width:2.4rem;
                      height:2.4rem;
                      background-position:-14rem -10rem;
                      background-size:25rem auto;
                    }
                  }
                }
              }
            }
            .cont {
              margin-top:0;
              .name {
                margin-top:0.5rem;
                padding-right:4.2rem;
                strong {
                  height:3.2rem;
                  color:#000;
                  font-size:1.3rem;
                  font-weight:300;
                  display:block;
                }
              }
              .review_score {
                display:none;
              }
              .price {
                margin-top:1.5rem;
                margin-bottom:0;
                > * {
                  font-size:1.2rem;
                }
                em {
                  font-size:1rem;
                }
                span {
                  margin-right:0.5rem;
                }
              }
            }
          }
        }
      }
      &.combi {
        h2 {
          .date {
            color:#ddd;
            font-size:2.4rem;
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
      &.ranking {
        .swiper-container {
          padding-bottom:30px;
          :deep(.swiper-pagination) {
            bottom:0;
          }
        }
        :deep(.goods_item) {
          padding-bottom:0.3rem;
          position:relative;
          display:flex;
          .img_wrap {
            width:6.9rem;
            margin-right:1.5rem;
            .thumb {
              width:100%;
              height:9.2rem;
            }
            .btnIconBox {
              right:0;
              bottom:3rem;
              left:initial;
              gap:0;
              button {
                display:none;
                &.btn_cart {
                  display:block;
                }
              }
            }
            & + * {
              flex:1;
            }
          }
          .cont {
            margin-top:0;
            .name {
              strong {
                font-size:1.3rem;
              }
            }
          }
          .review_score {
            display:none;
          }
        }
        .list_wrap {
          > li {
            position:relative;
            .badge {
              width:1.8rem;
              height:1.8rem;
              color:#fff;
              font-size:1rem;
              background-color:#000;
              position:absolute;
              top:0;
              left:0;
              z-index:2;
              display:flex;
              align-items:center;
              justify-content:center;
            }
          }
        }
      }
    }
    .update_wrap {
      margin-right:-2.1rem;
      margin-bottom:3rem;
      margin-left:-2.1rem;
      border-bottom:1px solid #eee;
      overflow:hidden;
      :deep(.tab_wrap) {
        .type_txt {
          margin-right:-1rem;
          margin-left:-1rem;
          padding-right:2.1rem;
          padding-left:2.1rem;
          overflow-x:auto;
          &:after {
            display:none;
          }
          li > * {
            padding:0 1rem;
            font-size:1.4rem;
            white-space:nowrap;
            em {
              padding-bottom:1.5rem;
              font-size:1.4rem;
            }
          }
        }
      }
    }

    .list_wrap {
      &.type_column{
        margin:0 -21px;
        > li + li {
          margin-top:2rem;
        }
        :deep(.event_item) {
          .item {
            display:block;
            .thumb {
              width:auto;
              padding-top:53.333333%;
              em {
                position:absolute;
                top:0;
                right:0;
                bottom:0;
                left:0;
              }
            }
            .cont {
              height:auto;
              margin-top:2rem;
              margin-bottom:2rem;
              display:flex;
              flex-direction:column-reverse;
              strong {
                margin-top:0;
                font-size:1.6rem;
                display:flex;
                align-items:center;
                justify-content:space-between;
                &:after {
                  width:3.2rem;
                  height:3.2rem;
                  background:url('~/assets/images/common/icon_split.png') -6rem -20rem no-repeat;
                  background-size:25rem auto;
                  content:'';
                  display:block;
                }
              }
              .date {
                margin-top:1.6rem;
              }
            }
          }
        }
      }

      &.type_column02 {
        > li + li {
          margin-top:1.6rem;
          padding-top:1.6rem;
          border-top:1px solid #eee;
        }
        :deep(.event_item) {
          .item {
            .thumb {
              width:16rem;
              height:8.5rem;
              margin-right:1.6rem;
              em {
                position:absolute;
                top:0;
                right:0;
                bottom:0;
                left:0;
              }
            }
            .cont {
              height:auto;
              margin-top:0.035rem;
              margin-bottom:0.035rem;
              padding:0;
              display:flex;
              flex-direction:column-reverse;
              strong {
                margin-top:0;
                font-size:1.4rem;
                display:flex;
                align-items:center;
                justify-content:space-between;
              }
              .date {
                margin-top:0.8rem;
              }
            }
          }
        }
      }

      &.type_grid {
        display:flex;
        flex-wrap:wrap;
        gap:0.3rem;
        li {
          width:calc(33.3333% - 0.3rem);
          :deep(.goods_item) {
            padding-bottom:2rem;
            .img_wrap {
              .thumb {
                padding-top:133.027522%;
              }
            }
            .cont {
              margin-top:1rem;
              .name {
                strong {
                  font-size:1.2rem;
                }
              }
            }
          }
        }
      }
    }

    :deep(.goods_item) {
      &.type_02 {
        .img_wrap {
          position:relative;
          .thumb {
            width:100%;
            height:auto;
            padding-top:135%;
          }
          .btnIconBox {
            right:0.8rem;
            bottom:0.8rem;
            left:initial;
            gap:0;
            button {
              display:none;
              &.btn_cart {
                display:block;
              }
            }
          }
        }
        .cont {
          .name {
            strong {
              font-size:1.4rem;
            }
          }
        }
      }
    }
  }
</style>
