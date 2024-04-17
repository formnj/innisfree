<template>
  <div class="prod_swiper">
    <swiper
        :slides-per-view="'1'"
        :loop="true"
        :pagination="pagination"
        :autoplay="autoplay"
        :speed="500"
      >
        <swiper-slide v-for="(item, idx) in prodImgData" :key="idx">
          <img :src="item.img">
        </swiper-slide>
        <div class="custom-pagination"></div>
        <div class="swiper-notify"><strong>7명의 고객님</strong> 동시에 확인중 <button type="button" class="btn_close">닫기</button></div>
      </swiper>
  </div>
</template>

<script setup>
import SwiperCore, { Autoplay, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { prodImgData } from '../../test/data/dummyData';

SwiperCore.use([Autoplay, Pagination, A11y]);

const pagination = {
  el: ".custom-pagination",
  type: "custom",
  renderCustom: function(swiper, current, total) {
    return "<span class='pagination-current'>0" + current + "</span><span class='pagination-total'>0" + total + "</span>";
  }
}

const autoplay = {
  delay: 5000
}
</script>

<style lang="scss" scoped>
:deep(.swiper-container) {
  position: relative;

  .swiper-slide {
    img {
      vertical-align: top;
    }
  }

  .custom-pagination {
    width: 70px;
    height: 30px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
    position: absolute;
    left: unset;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;

    .pagination-total {
      opacity: .5;

      &::before {
        content: '';
        width: 0.1rem;
        height: 0.8rem;
        margin: 0 0.8rem;
        background-color: rgba(255, 255, 255, 0.2);
        display: inline-flex;
      }
    }
  }

  .swiper-notify {
    height: 30px;
    padding: 0 10px;
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    background-color: #000;
    align-items: center;
    bottom: 0;
    right: 70px;
    position: absolute;
    z-index: 2;
    display: inline-flex;

    strong {
      color: #00BC70;
    }

    .btn_close {
      width: 16px;
      height: 16px;
      margin-left: 10px;
      font-size: 0;
      background: url('/assets/mo_images/common/icon_split.png') -105px -70px / 250px auto no-repeat;
    }
  }
}
</style>
