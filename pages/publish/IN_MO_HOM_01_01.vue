<template>
  <div class="main">
    <!-- visual -->
    <div class="visual" :style="'top:'+stickyTop+'px'"><!-- Edit 24.06.13 JH visual sticky top -->
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
          </div>
          <strong class="total"></strong>

          <Button class="swiper_controler" @click="modal.open('visual_modal', 'fullMo');" />
        </div>
        <!-- //customer pagination -->
      </swiper>
    </div>
    <!-- //visual -->

    <div class="main_cont_wrap"><!-- add 24.06.13 : visual sticky로 추가 -->
      <!-- quick menu -->
      <section class="category">
        <div class="swiper_wrap">
          <swiper class="module_02"
            v-bind="swieprOpt.category"
          >
            <swiper-slide v-for="item in categoryForSearchLayerData" :key="item">
              <a href="#none">
                <span class="thumb" :class="item.type"><!-- 관리자 강조 등록 시 point 클래스 추가 -->
                  <em><img :src="item.imageUrl" /></em>
                </span>
                <p>{{ item.text }}</p>
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </section>
      <!-- //quick menu -->

      <!-- 혜택 슬라이드 -->
      <div class="text_banner">
        <div class="swiper_wrap">
          <swiper :slides-per-view="1" :loop="true" :space-between="40"
            :autoplay="{
              delay: 3000,
            }"
            @swiper="onSwiper2"
            @slideChange="onSlideChange2"
          >
            <swiper-slide>
              <a href="#none">현대카드 결제시 20% 할인혜택</a><!-- default : #ccc / 관리자에서 직접 색상값 지정할 수 있음 -->
            </swiper-slide>
            <swiper-slide>
              <a href="#none" style="background:#B7E8CB;">네이버페이 10,000원 혜택</a>
            </swiper-slide>
            <swiper-slide>
              <a href="#none" style="color:#fff; background:purple;">네이버페이 10,000원 혜택</a>
            </swiper-slide>

            <!-- customer pagination -->
            <div class="custom_pagination">
              <Button class="btn_swiper_cont" data="play" />

              <div class="current">
                <em class="idx_01"></em>
              </div>
              <strong class="total"></strong>
            </div>
            <!-- //customer pagination -->
          </swiper>
        </div>
      </div>
      <!-- //혜택 슬라이드 -->

      <section>
        <ul class="list_wrap type_column">
          <li v-for="(item, idx) in mainSam.event_mo" :key="idx">
            <EventItem :item="item" :link="item.link" type="type_02"/>
          </li>
        </ul>
      </section>

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
          <span class="date">18:21:01</span>
        </h2>
        <ul class="goods_list col_3">
          <li v-for="(item, idx) in sample_goods.slice(0,6)" :key="idx">
            <GoodsItem class="type_cart" :item="item" :link="item.link" :useScore="false" />
          </li>
        </ul>
      </section>
      <!-- //오늘의 추천 제품 -->

      <section class="event">
          <ul class="list_wrap type_column02">
            <li v-for="(item, idx) in mainSam.event_mo" :key="idx">
              <EventItem :item="item" type="type_column" />
            </li>
          </ul>
      </section>

      <!-- 이 제품 어때요 -->
      <section>
        <h2>
          <a href="#none"><strong>주소희</strong> 님,<br/> 이 제품 어때요?</a>
        </h2>
        <div class="swiper_wrap">
          <swiper
            v-bind="swieprOpt.recommend04"
          >
            <swiper-slide v-for="(item, idx) in sample_goods.slice(0,5)" :key="idx" class="goods_slide">
              <GoodsItem class="type_cart" :item="item" :useHash="true" />
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
                <GoodsItem class="type_column type_cart" :item="item" :link="item.link" />
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="list_wrap">
              <li v-for="(item, idx) in sample_goods.slice(5,10)" :key="idx">
                <span class="badge">{{idx+6}}</span>
                <GoodsItem class="type_column" :item="item" :link="item.link" />
              </li>
            </ul>
          </swiper-slide>
        </swiper>
      </section>
      <!-- //랭킹 -->
    </div>

    <!-- AI케어 -->
    <ServiceBanner />
    <!-- //AI케어 -->
  </div>

  <div class="modal_wrap" id="visual_modal">
    <div class="modal_container">
        <div class="modal_header">
            <h2>전체보기</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <ul class="visual_list">
            <li v-for="(item, idx) in mainSam.visual" :key="idx">
              <a href="#none" class="item">
                <!-- item text content -->
                <div class="cont">
                  <p class="name">
                    <strong>{{item.name[0]}}</strong>
                    <span>{{item.name[1]}}</span>
                  </p>
                </div>
                <!-- //item text content -->

                <!-- visual image -->
                <span class="thumb">
                  <em><img :src="item.img"></em>
                </span>
                <!-- //visual image -->
              </a>
            </li>
          </ul>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
</div>

<ProductListCartModal /><!-- 장바구니/바로구매 모달 -->
</template>
<script setup>
import { modal } from '~/assets/js/common-ui.js'

// import Swiper core and required components
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Scrollbar]);

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
  category: {
    slidesPerView:'auto',
    spaceBetween: 12,
    loop: false
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

const stickyTop = ref(null); //visual sticky top값

onMounted(() => {
  console.log(document.querySelector('.navGnb').offsetHeight);
  stickyTop.value = document.querySelector('.navGnb').offsetHeight;
  console.log(stickyTop.value);
})

const onSwiper = (swiper) => {

  const total = swiper.wrapperEl.children.length,
  current = swiper.realIndex+1;

  if(total < 10) {
    swiper.wrapperEl.parentNode.querySelector('.custom_pagination .current .idx_01').textContent = '0'+current;
    swiper.wrapperEl.parentNode.querySelector('.custom_pagination strong.total').textContent = '0'+total;
  }
};

const onSlideChange = (swiper) => {
  const current = swiper.realIndex+1;

  if(current < 10) {
    swiper.wrapperEl.parentNode.querySelector('.custom_pagination .current .idx_01').textContent = '0'+current;
  }
};

const onSwiper2 = (swiper) => {

  const total = swiper.wrapperEl.children.length,
  current = swiper.realIndex+1;

  swiper.wrapperEl.parentNode.querySelector('.custom_pagination .current .idx_01').textContent = current;
  swiper.wrapperEl.parentNode.querySelector('.custom_pagination strong.total').textContent = total;

  swiper.wrapperEl.parentNode.querySelector('.custom_pagination button').addEventListener('click', ()=>{
    if(event.currentTarget.getAttribute('data') == 'play'){
      swiper.autoplay.stop();
      event.currentTarget.setAttribute('data','pause');
    } else {
      swiper.autoplay.start();
      event.currentTarget.setAttribute('data','play');
    }
  });
};

const onSlideChange2 = (swiper) => {
  const current = swiper.realIndex+1;

  swiper.wrapperEl.parentNode.querySelector('.custom_pagination .current .idx_01').textContent = current;
};

import {
  sampleSlide,
  mainSam,
  sample_goods,
  sample_event,
  categoryForSearchLayerData,
} from '~/test/data/publish/dummyData'

definePageMeta({
  layout:'mo-main'
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
      position:sticky;
      .swiper {
        :deep(.swiper-pagination) {
          display:none;
        }
        .custom_pagination {
          padding:0.8rem;
          background-color:rgba(0,0,0,0.6);
          position:absolute;
          right:0;
          bottom:0;
          z-index:1;
          display:flex;
          align-items:center;
          justify-content:center;
          * {
            color:#fff;
            font-size:1rem;
          }
          em {
            font-weight:600;
          }
          strong {
            margin-right:0.8rem;
            font-weight:400;
            display:flex;
            align-items:center;
            &:before {
              height:0.8rem;
              margin-left:0.4rem;
              padding-right:0.4rem;
              border-left:1px solid rgba(255,255,255,0.2);
              content:'';
              display:block;
            }
          }
          button {
            width:1.2rem;
            height:1.2rem;
            font-size:0;
            position:relative;
            &:before, &:after {
              border-top:1px solid #fff;
              content:'';
              position:absolute;
              top:50%;
              right:0.2rem;
              left:0.2rem;
            }
            &:after {
              transform:rotate(90deg);
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
    .main_cont_wrap {
      padding-top:3.2rem;
      padding-bottom:10rem;
      background-color:#fff;
      position:relative;
      > section:first-child {
        margin-top:0;
      }
    }
    section {
      margin-top:10rem;
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
        .swiper{
          padding:0 2.1rem;
        }
      }
      &.category {
        margin:0 0 2.4rem;
        .swiper-slide {
          width:5.7rem;
          text-align:center;
          .thumb {
            position:relative;
            display:block;
            &.point:after {
              width:0.5rem;
              height:0.5rem;
              background-color:#00BC70;
              border-radius:50%;
              content:'';
              position:absolute;
              top:0.3rem;
              right:0.3rem;
              display:block;
            }
          }
          p {
            margin-top:0.8rem;
            color:#888;
            font-size:1.2rem;
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
        .module_01 {
          margin-bottom:10rem;
          > ul {
            > li {
              & + li {
                margin-top:2rem;
              }
              > a {
                display:flex;
                gap:2rem;
                .thumb {
                  width:9rem;
                  height:12rem;
                  img {
                    width:100%;
                  }
                }
                .cont {
                  flex:1;
                  strong {
                    font-size:1.6rem;
                  }
                  p {
                    margin-top:1rem;
                    color:#888;
                    font-size:1.2rem;
                  }
                  :deep(.hash) {
                    margin-top:1rem;
                    button {
                      padding:0.6rem 0.8rem;
                      display:flex;
                      align-items:center;
                      &:before {
                        margin-right:0.3rem;
                        content:'#';
                        display:block;
                      }
                    }
                  }
                }
              }
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
              margin-top:0;
              margin-bottom:2rem;
              padding:1.6rem 2rem 0 0;
              strong {
                font-size:1.6rem;
                line-height:28px;
              }
            }
          }
          :deep(.goods_item) {
            width:100%;
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
                  display: inline;
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
          justify-content: space-between;
          .date {
            color:#ddd;
            font-size:2.4rem;
          }
        }
        :deep(.goods_list) {
          margin-top:-2rem;
          margin-left:-0.3rem;
          gap:0;
          & > li {
            width:33.3333%;
            padding-top:2rem;
            padding-left:0.3rem;
            .goods_item {
              width:100%;
            }
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
        .swiper {
          padding-bottom:30px;
          :deep(.swiper-pagination) {
            bottom:0;
            .swiper-pagination-bullet {
              width:0.8rem;
              height:0.8rem;
              &.swiper-pagination-bullet-active {
                background-color:#000;
              }
            }
          }
        }
        :deep(.goods_item) {
          padding-bottom:0.3rem;
          position:relative;
          display:flex;
          gap: 0 1.5rem;
          .img_wrap {
            width:6.9rem;
            flex-shrink: 0;
            .thumb {
              width:100%;
              height:9.2rem;
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
    .text_banner {
      .swiper {
        padding:0 2.1rem;
      }
      a {
        height:40px;
        padding:0 30px;
        font-size:12px;
        font-weight:600;
        line-height:40px;
        background-color:#ccc;
        border-radius:100px;
        display:block;
      }
      .custom_pagination {
        height:2rem;
        padding:0 0.8rem;
        color:#fff;
        font-size:10px;
        font-weight:400;
        background-color:rgba(0,0,0,0.2);
        border-radius:10rem;
        position:absolute;
        top:50%;
        right:3.5rem;
        z-index:1;
        display:flex;
        align-items:center;
        transform:translateY(-50%);
        .idx_01, .total {
          width:1.2rem;
          line-height:1.2rem;
          text-align:right;
          position:relative;
          display:block;
        }
        .total {
          margin-left:0.4rem;
          font-weight:400;
          opacity:0.5;
          &:before {
            content:'/';
            position:absolute;
            top:50%;
            left:-0.2rem;
            display:block;
            transform:translateY(-50%);
          }
        }
        :deep(button) {
          width:1.2rem;
          height:1.2rem;
          margin-right:0.2rem;
          background-color:transparent;
          background-image:url('~/assets/mo_images/common/icon_split.png');
          background-repeat:no-repeat;
          background-size:25rem auto;
          em {
            padding:0;
            font-size:0;
          }
          &[data="play"] {
            background-position:-4rem -32rem;
          }
          &[data="pause"] {
            background-position:-6rem -32rem;
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
          &::-webkit-scrollbar {
            display:none;
          }
          li > * {
            padding:0 1rem 1.5rem;
            font-size:1.4rem;
            white-space:nowrap;
            em {
              padding-bottom:1.5rem;
              font-size:1.4rem;
            }
          }
          li.current button:after {
            right:1rem;
            left:1rem;
          }
        }
      }
    }

    .list_wrap {
      &.type_column{
        margin:0 -2.1rem;
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
          .thumb {
            height: 8.5rem;
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
  }

  :deep(.svc_banner) {
    padding:1.2rem 2rem;
    background-image:url('~/assets/images/ui/bg_ai_bottom_bann.png');
    background-size:cover;
    position:relative;
    justify-content:center;
    gap:1.2rem;
    p {
      padding-left:0;
      font-size:1.4rem;
      font-weight:600;
    }
    .btn_ui_wrap {
      span.btn {
        font-size:1.3rem;
        font-weight:600;
        box-shadow:0 0.8rem 1rem 0 rgba(0,0,0,0.15);
      }
      span.bubble {
        font-weight:700;
      }
    }
  }

  /* modal */
  .visual_list {
    display:flex;
    flex-wrap:wrap;
    gap:0.1rem;
    > li {
      width:calc(50% - 0.05rem);
      a {
       position:relative;
       .thumb img {
        vertical-align:top;
       }
       .cont {
        position:absolute;
        bottom:3rem;
        left:2.1rem;
        .name {
          color:#fff;
          font-size:1.3rem;
          font-weight:600;
          line-height:1.38rem;
          > * {
            display:block;
          }
        }
       }
      }
    }
  }
</style>
