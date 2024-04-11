<template>
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
    <div class="inner"></div>
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
definePageMeta({
layout: 'mo-category'
});

const props = defineProps({
  layoutType: {
    type:String,
    default:'default'
  }
});

import {
sample_goods
} from '~/test/data/dummyData'

</script>

<style lang="scss">
@import "~/assets/scss/_mo_mixin";

@include mobile {
  .best_banner {
    margin:0 -20px;
    padding:3.0rem 0 5.5rem;
  }
  .list_wrap {
    .ranking {
      width: 2.4rem;
      height: 2.4rem;
      font-size: 1.2rem;
      line-height:2.4rem;
      top:20px;
      left:15px;
    }
  }
  .goods_list {
    margin-top:-20px;
    margin-left:-15px;
    > li {
      width:50%;
      padding-top:20px;
      padding-left:15px;
      .img_wrap {
        .thumb {
          height:auto;
          padding-top:133.333%;
        }
      }
    }
  }
}
</style>
