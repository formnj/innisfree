<template>
  <div class="prod_swiper">
    <swiper-container
      slides-per-view="1"
      pagination-type="fraction"
    >
      <swiper-slide v-for="(item, idx) in prodImgData" :key="idx">
        <img :src="item.img">
      </swiper-slide>
      <div class="custom-pagination">
        <span class="current">1</span>
        <span class="total">2</span>
      </div>
    </swiper-container>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import { prodImgData } from '../test/data/dummyData';
register();
</script>

<style lang="scss" scoped>
</style>
