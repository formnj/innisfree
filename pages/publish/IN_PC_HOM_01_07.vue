<template>
  <div class="inner">
    <!-- title washed -->
    <div class="title_wrap" :data-layout="props.layoutType">
      <div>
        <h2>
          실시간 랭킹
          <div class="renewal">
            3분전 갱신
            <img src="/assets/images/common/icon_renewal.png" @click="modal.open('modal_renewal', 'layer tooltip')">
            <div id="modal_renewal" class="modal_wrap">
              <div class="modal_container">
                <button class="btn_close" @click="modal.close(this);">닫기</button>
                <div class="modal_content">
                  <h2>랭킹 기준 안내</h2>
                  <ul class="bul_list">
                    <li>판매실적과 조회수에 가중치를 반영한 순위입니다.</li>
                  </ul>
                </div>
              </div>
              <div class="overlay" @click="modal.close(this);"></div>
            </div>
          </div>
        </h2>
      </div>
    </div>
    <!-- //title washed -->
  </div>

  <div class="inner">
    <div class="sort_tab_wrap">
      <div class="sub_tab">
        <Tabs tabType="type_02" :item="[{txt:'전체'},{txt:'스킨케어'},{txt:'메이크업'},{txt:'남성'},{txt:'헤어/바디/펫'},{txt:'기획 세트'},{txt:'미용소품'}]" :tabidx="0" />
      </div>
    </div>

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
    <div class="inner">
      <swiper
        :slides-per-view="3"
        :space-between="20"
        :pagination="{
          type: 'progressbar'
        }"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }"
      >
        <swiper-slide v-for="(item, idx) in sample_event" :key="idx" class="item">
          <EventItem :item="item" :type="item.type" />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
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
</template>

<script setup>
import {
  sample_goods,
  sample_event
} from '~/test/data/publish/dummyData';
import { modal } from '~/assets/js/common-ui.js';

// import Swiper core and required components
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

definePageMeta({
	layout:'pc-sub'
});

const props = defineProps({
    layoutType: {
      type:String,
      default:'default'
    }
});

</script>

<style lang="scss" scoped>
.best_banner {
  margin:100px 0;
  padding:100px 0;
  background-color:#f5f5f5;
}

:deep(.swiper) {
  .swiper-wrapper {
    padding-bottom: 30px;
  }

  .swiper-pagination {
    height: 1px;
    background-color: #DDD;
    top: unset;
    bottom: 0;

    span {
      background-color: #000;
    }
  }
}

.sort_tab_wrap {
  .sub_tab {
    margin-top: 30px;
  }
}

.inner {
  position: relative;

  .swiper-button-prev, .swiper-button-next {
    &:after {
      content: '';
      width: 32px;
      height: 32px;
      background: url('~/assets/images/common/icon_split.png') no-repeat -60px -200px;
      background-size: 250px auto;
    }
  }

  .swiper-button-prev {
    left: -48px;
    transform: rotate(-180deg);
  }

  .swiper-button-next {
    right: -48px;
  }
}

.bul_list {
  li {
    &:before {
      border-radius: 50%;
    }
  }
}
</style>
