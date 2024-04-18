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
</style>
