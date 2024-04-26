<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>베스트</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <div class="sort_tab_wrap">
      <Tabs :item="[{txt:'실시간 베스트'},{txt:'주간 베스트'},{txt:'월간 베스트'}]" :tabidx="0" />

      <div class="sub_tab">
        <Tabs tabType="type_02" :item="[{txt:'전체'},{txt:'스킨케어'},{txt:'메이크업'},{txt:'남성'},{txt:'헤어/바디/펫'},{txt:'기획 세트'},{txt:'전체'},{txt:'스킨케어'},{txt:'메이크업'},{txt:'남성'},{txt:'헤어/바디/펫'},{txt:'기획 세트'},{txt:'미용소품'},{txt:'스킨케어'},{txt:'메이크업'},{txt:'남성'},{txt:'헤어/바디/펫'},{txt:'기획 세트'},{txt:'전체'},{txt:'스킨케어'},{txt:'메이크업'},{txt:'남성'},{txt:'헤어/바디/펫'},{txt:'기획 세트'}]" :tabidx="0" />
        <span>2024.03.29 ~ 2024.04.04 기준</span>
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
      <swiper-container slides-per-view="2" autoplay-delay="3000">
        <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx" class="item">
          <img :src="item.img">
        </swiper-slide>
      </swiper-container>
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
definePageMeta({
	layout: 'pc-category'
});

const props = defineProps({
    layoutType: {
      type:String,
      default:'default'
    }
});

import {
  sample_goods,
  sampleSlide
} from '~/test/data/publish/dummyData'

</script>

<style lang="scss">
.best_banner {
  margin:100px 0;
  padding:100px 0;
  background-color:#f5f5f5;
  position:relative;
}
</style>
