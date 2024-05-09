<template>
  <div v-if="isModal == false" class="review" @click="modal.open('modal_review','full')">
    <p v-if="item.option.is" class="option_name">옵션) {{ item.option.name }}</p>
    <ul class="review_photo_list">
      <li v-for="(img, idx) in item.imgs" :key="idx" :class="idx == 5 ? 'last' : '' ">
        <a href="#none"><img :src="img" :class="item.user" alt=""></a>
      </li>
    </ul>
    <p class="txt">
      <span v-if="item.usedAmonth" class="mark_month">한달사용</span>{{ item.txt }}
    </p>
  </div>

  <div v-if="isModal == true" class="review">
    <p v-if="item.option.is" class="option_name">옵션 <em>{{ item.option.name }}</em></p>

    <div class="review_photo_swiper">
      <swiper
        :slides-per-view="1" :navigation="navigation">
        <swiper-slide v-for="(img, idx) in item.imgs" :key="idx">
          <img :src="img" :class="item.user" alt="">
        </swiper-slide>
      </swiper>
      <div class="custom_nav">
        <button type="button" class="nav_prev">prev</button>
        <button type="button" class="nav_next">next</button>
      </div>
    </div>

    <p class="txt">
      <span v-if="item.usedAmonth" class="mark_month">한달사용</span>{{ item.txt }}
    </p>
  </div>
</template>
<script setup>
import { modal } from '~/assets/js/common-ui'
import SwiperCore, { Autoplay, Pagination, A11y, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Autoplay, Pagination, A11y, Navigation, Thumbs]);

const props = defineProps({
  item: {},
  isModal: {  //리뷰 모달 여부
    type: Boolean,
    default: false
  }
})

const navigation = {
  prevEl: ".nav_prev",
  nextEl: ".nav_next",
  type: "custom",
}
</script>
<style lang="scss" scoped>
.review {
  .option_name {
    margin: 10px 0 30px;
    font-weight: 600;
    color: #333;
  }


  .review_photo_list {
    display: flex;
    gap: 3px;
    margin-bottom: 30px;

    li {
      width: 120px;
      height: 120px;
      position: relative;

      a {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
      }

      &.last {
        a {
          &:before {
            content:'';
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
          }

          &:after {
            content: '';
            width: 24px;
            height: 24px;
            margin: 0 auto 10px;
            background: url("~/assets/images/common/icon_split.png") -460px -70px no-repeat;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
        }
      }
    }
  }

  .txt {
    line-height: 24px;
    color: #333333;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    .mark_month {
      height: 22px;
      margin-right: 10px;
      padding: 0 5px;
      font-size: 12px;
      color: #FFFFFF;
      background-color: #00BC70;
      display: inline-block;
    }
  }
}

.review_photo_swiper {
  width: 480px;
  margin: 0 auto 25px;
  padding: 0 60px;
  position: relative;

  .swiper-slide {
    height: 270px;
    text-align: center;
    background-color: #000;
  }

  img {
    width: auto;
    height: 100%;
    margin: auto;
  }

  .custom_nav {
    button {
      width: 24px;
      height: 24px;
      font-size: 0;
      background: url('/assets/images/common/icon_split.png') -180px -60px / 250px auto no-repeat;
      position: absolute;
      top: 50%;
      transform: rotate(90deg) translateY(-50%);
      z-index: 2;

      &.nav_prev {
        left: 0;
        transform: rotate(-90deg) translateY(50%);
      }

      &.nav_next {
        right: 0;
      }
    }
  }
}
</style>
