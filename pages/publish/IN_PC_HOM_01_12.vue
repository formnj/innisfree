<template>
  <div class="qr_wrap">
    <div class="box off">
      <span>실시간 이니스프리<br>이야기</span>
    </div>
    <div class="box on">
      <h3>대학생 에디터들의 뷰티팁을<br>에디터에서 만나보세요.</h3>
      <div class="qr"><img src="/assets/images/sam/sample_qrcode.gif"></div>
      <p>휴대폰으로 QR코드를 스캔하여<br>모바일로 이동해주세요.</p>
    </div>
    <Button txt="닫기" class="btn_close" @click="qr_menu" />
  </div>

  <div class="title_wrap" :data-layout="props.layoutType">
    <div class="prd_tit">
      <h2>쇼케이스</h2>
      <p>봄맞이 핑크템으로<br>생기를 더하세요!</p>
    </div>

    <!-- 공유 레이어 -->
    <div class="share_wrap">
      <button class="btn_share" @click="modal.open('modal_share', 'layer')"></button>
      <!-- 공유 모달 -->
      <div id="modal_share" class="modal_wrap">
        <div class="modal_container">
            <div class="modal_header">
                <h2>공유하기</h2>
                <button class="btn_close" @click="modal.close(this);">닫기</button>
            </div>
            <div class="modal_content">
              <div class="img">
                <a href="#none"><img src="/assets/images/sam/icon_sns_facebook.png"></a>
                <a href="#none"><img src="/assets/images/sam/icon_share_url.png"></a>
              </div>
            </div>
        </div>
        <div class="overlay" @click="modal.close(this);"></div>
      </div>
      <!-- 공유 모달 -->
    </div>
    <!-- //공유 레이어 -->
  </div>

  <div class="inner">
    <div class="prd_wrap">
      <div><img src="/assets/images/sam/pinkdoc1.jpg"></div>
      <div>
        <img src="/assets/images/sam/pinkdoc2.jpg">
        <div class="video"><img src="/assets/images/sam/colored.gif"></div>
        <div class="overlay"><img src="/assets/images/sam/lipstick.png"></div>
      </div>
    </div>

    <div class="swiper_wrap">
      <swiper
        :slides-per-view="'auto'"
        :space-between="20"
        :loop="true"
        :auto-height="true"
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

    <div class="banner_wrap">
      <ul>
        <li v-for="(item,idx) in banner_list" :key="idx">
          <a href="#none">
            <div class="img">
              <img :src="item.img">
            </div>
            <span>{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="paging">
      <div>
          <a href="#none" class="first">처음으로</a>
          <a href="#none">1</a>
          <a href="#none">2</a>
          <a href="#none" class="active">3</a>
          <a href="#none">4</a>
          <a href="#none">5</a>
          <a href="#none" class="last">마지막으로</a>
      </div>
  </div>
</template>
<script setup>
import { sample_goods } from '~/test/data/dummyData'
import { modal } from '~/assets/js/common-ui'
import SwiperCore, { Navigation, Pagination, A11y, Controller } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, A11y, Controller]);

definePageMeta({
	layout: 'pc-category'
});

onMounted(() => {
  setTimeout(() => {
    document.querySelector('.qr_wrap').classList.add('close');
  }, 3000);
});

const props = defineProps({
    layoutType: {
      type:String,
      default:'default'
    }
});

const banner_list = [
  {img: '/_nuxt/assets/images/sam/banner01.jpg', text: '4월은 지구의 달\n공병수거하며 지구를 지켜요!'},
  {img: '/_nuxt/assets/images/sam/banner02.jpg', text: '꾸준히 사랑받는 한란 라인\n활용TIP!'},
  {img: '/_nuxt/assets/images/sam/banner03.jpg', text: '지구 환경도 챙기고\n뷰티포인트도 챙기자!'},
  {img: '/_nuxt/assets/images/sam/banner04.jpg', text: '추운 겨울 내 파우치 속 필수템\n취향따라 골라쓰는 퍼퓸드 핸드크림!'},
  {img: '/_nuxt/assets/images/sam/banner05.jpg', text: '겨울철 가려움, 각질 고민\n완벽 케어 솔루션!'},
  {img: '/_nuxt/assets/images/sam/banner06.jpg', text: '새해맞이!\n안티에이징 홈 케어 제품 추천!'},
  {img: '/_nuxt/assets/images/sam/banner07.jpg', text: '돌아온 보습 레전드\n올리브 라인'},
  {img: '/_nuxt/assets/images/sam/banner08.jpg', text: '이니스프리 직원 추천템\n#이니찐템'},
  {img: '/_nuxt/assets/images/sam/banner09.jpg', text: '반려견들을 위한 산책 뷰티템\n이니스프리 그린펫클럽'},
  {img: '/_nuxt/assets/images/sam/banner10.jpg', text: '이니스프리 FOAM 미쳤다!\n이니스프리 클렌징폼'},
  {img: '/_nuxt/assets/images/sam/banner11.jpg', text: '눈여겨봐야 할\n신상 아이템! UTILITY BAG'},
]

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

const qr_menu = (e) => {
  e.target.closest('.qr_wrap').classList.toggle('close');
};
</script>
<style lang="scss" scoped>
.qr_wrap {
  width: 300px;
  height: 290px;
  margin-left: 650px;
  padding: 40px 0 43px;
  border: 1px solid #000;
  text-align: center;
  background: #fff;
  box-sizing: border-box;
  overflow: hidden;
  position: fixed;
  right: 40px;
  top: 417px;
  z-index: 2;
  transition: 0.4s ease-in-out;
  * {
    transition: 0.4s ease-in-out;
  }
  .box {
    width:100%;
    position:absolute;
    top:40px;
    left:50%;
    transform:translateX(-50%);
    &.off {
      line-height:1.43;
      opacity:0;
      top:20px;
    }
    &.on {
      h3 {
        color:#000;
        font-size:14px;
      }
      .qr {
        margin:15px auto;
      }
      p {
        color:#999;
        font-size:12px;
      }
    }
  }
  .btn_close {
    width:24px;
    height:24px;
    background:url('/_nuxt/assets/images/common/icon_split.png') no-repeat -210px -170px;
    background-size:250px auto;
    position:absolute;
    left:10px;
    bottom:10px;
    ::v-deep em {
      padding:0;
      font-size:0;
    }
  }
  &.close {
    width:160px;
    height:104px;
    .off {
      opacity:1;
    }
    .on {
      > * {
        opacity:0;

      }
    }
  }
}

.title_wrap {
  padding: 60px 20px 30px;
  justify-content:space-between;
  z-index:unset;
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

.share_wrap {
  right:20px;
  bottom:30px;
}

.prd_wrap {
  border-top:1px solid #EEEEEE;
  padding-top:60px;
  >div {
    max-width:780px;
    margin:0 auto;
    position:relative;
    img {
      vertical-align:top;
    }
    .video {
      position:absolute;
      top:0;
      left:0;
      z-index: 1;
    }
    .overlay {
      position:absolute;
      top:0;
      left:0;
      z-index: 2;
    }
  }
}

.swiper_wrap {
  width:1280px;
  padding:100px 0;
  margin:0 auto;
  position:relative;
  ::v-deep .swiper-container {
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

.banner_wrap {
  ul {
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    li {
      width:calc(50% - 10px);
      > a {
        position:relative;
        .img {
          position:relative;
          img {
            vertical-align:top;
          }
          &:after {
            content:'';
            width:100%;
            height:100%;
            background:#000;
            opacity:0.25;
            position:absolute;
            top:0;
            left:0;
          }
        }
        span {
          color:#fff;
          font-size:18px;
          font-weight:600;
          line-height:24px;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
          white-space:pre-line;
          position:absolute;
          top:50%;
          left:30px;
          right:30px;
          transform:translateY(-50%);
        }
      }
    }
  }
}
</style>
