<template>
  <div class="title_wrap">
    <div class="renewal">
      8분전 갱신
      <img src="/assets/images/common/icon_renewal.png" @click="modal.open('modal_renewal', 'layer tooltip')">
    </div>
  </div>
  <div class="inner">

    <div class="list_wrap">
      <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
              <span class="ranking" v-if="idx < 9">{{ '0'+(idx+1) }}</span>
              <span class="ranking" v-else>{{ idx+1 }}</span>
              <GoodsItem :item="item" :link="item.link" />
          </li>
      </ul>
    </div>
  </div>

  <!-- swiper -->
  <div class="best_banner">
    <swiper v-bind="swieprOpt.events">
      <swiper-slide v-for="(item, idx) in sample_event.slice(0,5)" :key="idx">
        <EventItem :item="item" :link="item.link" type="type_column" />
      </swiper-slide>
    </swiper>
  </div>
  <!-- //swiper -->

  <div class="inner">
    <div class="list_wrap">
      <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
              <span class="ranking" v-if="idx < 9">{{ '0'+(idx+1) }}</span>
              <span class="ranking" v-else>{{ idx+1 }}</span>
              <GoodsItem :item="item" :link="item.link" />
          </li>
      </ul>
    </div>
  </div>

  <div id="modal_renewal" class="modal_wrap" @click="modal.close(this);">
    <div class="modal_container">
      <button class="btn_close" @click="modal.close(this);">닫기</button>
      <div class="modal_content">
        <div class="bubble_wrap">
          <div class="bubble">
            <p>판매실적과 조회수에<br>가중치를 반영한 순위입니다.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>

<script setup>
import {
  sample_goods,
  sample_event,
} from '~/test/data/publish/dummyData'
import { modal } from '~/assets/js/common-ui'

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

const swieprOpt = {
  events: {
    slidesPerView:'auto',
    loop:false,
    pagination:{
      type:'bullets'
    },
    centeredSlides:true,
    slidesOffsetBefore:1
  },
};

definePageMeta({
layout:'mo-category'
});

const props = defineProps({
  layoutType: {
    type:String,
    default:'default'
  }
});

</script>

<style lang="scss" scoped>
.title_wrap {
  h2 {
    .renewal {
      position: unset;
    }
  }
}

.best_banner {
  padding: 3.5rem 0;
  margin: 4rem 0;
  position:relative;
  &:before, &:after {
    content:'';
    width:calc(100% + 4.2rem);
    height:0.5rem;
    margin: 0 -2.1rem;
    background:#F5F5F5;
    position: absolute;
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }

  :deep(.swiper) {
    padding-bottom: 2.5rem;
    .swiper-pagination {
      bottom:0;
      span {
        width: 0.5rem;
        height: 0.5rem;
        background:#eee;
        opacity:1;
        &.swiper-pagination-bullet-active {
          background:#000;
        }
      }
    }

    .event_item {
      .item {
        gap:2rem;
        .thumb{
          height: 10.6rem;
        }

        .cont {
          .date {
            margin-top: 1.6rem;
          }
        }
      }
    }
  }
}

.modal_wrap.tooltip {
  top: 20rem;
  left: 2.1rem;
  right: unset;
  bottom: unset;
  .modal_container {
    background: unset;
    box-shadow: none;

    .modal_content {
      padding: 0;
    }
  }
}

.bubble_wrap {
  padding-top: .6rem;
  position: relative;

  .bubble {
    padding: 1.2rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #00BC70;

    &:before {
      content: '';
      width: 1rem;
      border: 0.6rem solid #00BC70;
      border-top-color: transparent;
      border-right-color: transparent;
      border-left-color: transparent;
      position:absolute;
      top: -0.6rem;
      left: 5.7rem;
    }

    p {
      line-height: 1.6rem;
      white-space: nowrap;
    }
  }
}
</style>
