<template>
  <div id="wrap">
    <HeaderPc />
    <div id="container">
        <!-- breadcrumb -->
        <Breadcrumb :item="breadcrumbData" />
        <div class="content_wrap">
            <div class="content">
                <router-view />
            </div>
            <!-- payment -->
            <div class="payment">
              <div class="inner">
                <div>
                  <h4>결제정보</h4>
                  <dl>
                    <dt>주문금액</dt>
                    <dd>
                      <strong>103,200</strong>원
                    </dd>
                  </dl>
                  <dl>
                    <dt>배송비</dt>
                    <dd>무료</dd>
                  </dl>
                  <dl>
                    <dt>적립 예정 뷰티포인트
                        <Icons class="tooltip" txt="툴팁" @click="modal.open('accum_point', 'layer')" />
                        <div class="layer_wrap">
                          <!-- layer modal -->
                          <div class="modal_wrap" id="accum_point">
                              <div class="modal_container">
                                  <div class="modal_header">
                                      <h2>뷰티포인트 적립 혜택 안내</h2>
                                      <button class="btn_close" @click="modal.close(this);">닫기</button>
                                  </div>
                                  <div class="modal_content">
                                      <ul class="bullet_list">
                                        <li>뷰티포인트는 수취확인 후 <strong>15일 이후</strong>에 적립됩니다.</li>
                                        <li>아모레퍼시픽 뷰티포인트 비회원인 경우 적립되지 않습니다.</li>
                                        <li>멤버십데이 쿠폰 사용 시 뷰티포인트는 적립되지 않습니다.</li>
                                        <li>일부 쿠폰은 사용 시 뷰티포인트는 적립되지 않습니다.</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="overlay" @click="modal.close(this);"></div>
                          </div>
                          <!-- //layer modal -->
                        </div>
                    </dt>
                    <dd>
                      <strong>1,021</strong> P
                    </dd>
                  </dl>
                  <div class="total_price">
                    <dl>
                      <dt>결제 예정 금액</dt>
                      <dd>
                        <strong>103,200</strong>원
                      </dd>
                    </dl>
                  </div>
                </div>

                <Button txt="주문하기" />
              </div>
            </div>
            <!-- //payment -->
        </div>

        <!-- 연관 상품 -->
        <div class="sub_title_wrap">
          <div>
            <h3>함께 사면 좋은 제품</h3>
          </div>
        </div>
        <div class="inner relation_goods">
          <div class="swiper_wrap">
            <swiper
              :slides-per-view="'auto'"
              :space-between="20"
              :loop="true"
              :pagination="{
                type:'progressbar'
              }"
              @swiper="onSwiper"
            >
              <swiper-slide v-for="(item, idx) in sample_goods" :key="idx">
                <GoodsItem :item="item" :link="item.link" />
              </swiper-slide>
            </swiper>
            <div class="navigation">
              <button class="swiper-button-prev" @click="swiper_nav.prev"></button>
              <button class="swiper-button-next" @click="swiper_nav.next">Next</button>
            </div>
          </div>
        </div>
        <!-- //연관 상품 -->
    </div>
    <FooterPc />
  </div>
</template>


<script setup>
import {
  breadcrumbData,
  sample_goods
} from '~/test/data/publish/dummyData'
import { modal } from '~/assets/js/common-ui.js'

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

const layoutType = ref(true);

let lnb_click = (event)=>{
  const target = event.currentTarget;
  let target_parent =target.parentNode;
  let all_li = target_parent.querySelectorAll('li')
  all_li.forEach((a)=>{
    a.classList.remove('active');
  })
  target.classList.add('active')
  // 전체 li에 active 클래스 제거
  //클릭한 대상에게 active 클래스 추가
}

/* 개발에 맞게 수정해주세요 : 하위페이지의 data-layout 값이 default이면 lnb 비노출 */
onMounted(()=>{
  if(document.querySelector('.title_wrap').getAttribute('data-layout') == 'default'){
    layoutType.value = false;
  }
})
/* //개발에 맞게 수정해주세요 */
</script>

<style lang="scss" scoped>
#wrap {
    min-height:100vh;
    max-width:100%;
    margin:0 auto;
    position:relative;
    display:flex;
    flex-direction:column;
}

#container {
  padding-bottom:100px;
  flex:1 auto;
  :deep(.inner) {
    max-width:1320px;
    margin:0 auto;
    padding:0 20px;
  }
}

.content_wrap {
  max-width:1320px;
  margin:0 auto;
  display:flex;
  flex-wrap:wrap;
  .content {
    flex:1;
    :deep(.customBen) {
      margin: 100px 0 0;
      overflow:hidden;
      position: relative;
      .img {
        img {
          vertical-align:top;
        }
      }
      .textWrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        .text {
          height: 100%;
          margin: 0 375px 0 80px;
          color: #fff;
          font-size: 28px;
          line-height: 1.43;
          letter-spacing: -0.7px;
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: left;
          .t1, .t2 {
            white-space: nowrap;
          }
        }
      }
    }
  }
  .payment {
    width:360px;
    height:100%;
    margin-top:165px;
    margin-left:30px;
    position:sticky;
    top:100px;
    h4 {
      margin-bottom:20px;
      font-size:22px;
      font-weight:600;
    }
    .inner {
      display:flex;
      flex-direction:column;
      gap:15px;
      > div {
        padding:30px 25px 35px;
        border:1px solid #eee;
        flex:1;
        dl {
          color:#333;
          font-size:16px;
          display:flex;
          justify-content:space-between;
          & + dl {
            margin-top:15px;
          }
          dt {
            display:flex;
            align-items:center;
            .tooltip {
              width:16px;
              height:16px;
              margin-left:6px;
              background-position:0 -260px;
              vertical-align:top;
            }
          }
          dd {
            strong {
              font-weight:500;
            }
          }
          .modal_container {
            white-space:nowrap;
            top:100%;
            right:0;
            left:initial;
          }
        }
        .total_price {
          margin-top:25px;
          padding-top:20px;
          border-top:1px solid #eee;
          dt {
            color:#000;
          }
          dd {
            color:#ff0000;
            font-size:18px;
            font-weight:600;
            strong {
              font-size:24px;
              font-weight:700;
            }
          }
        }
      }
    }
  }
}

.relation_goods {
  position:relative;
  .swiper_wrap {
    width:1280px;
    padding:0;
    margin:0 auto;
    position:relative;
    :deep(.swiper-container) {
      padding-bottom:61px;
      .swiper-pagination {
        height:2px;
        bottom:0;
        top:unset;
        background:#DDDDDD;
        span {
          background:#000000;
        }
      }
      div[role="button"] {
        &:after {
          color:#000000;
          font-size:24px;
        }
      }
      .swiper-slide {
        width:240px;
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
}

</style>
