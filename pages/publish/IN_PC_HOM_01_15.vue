<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <div class="prd_tit">
      <h2>FOR ME</h2>
      <h3><em>주소희</em>님께 추천해요<a class="btn_link_arrw">피부정보 등록</a></h3>
      <span>가장 많이 등록된 피부정보 기준으로 보여드려요.</span>
      <Button txt="건성피부" class="btn_min" @click="modal.open('shopping_log', 'detailSearch')" />
      <Button txt="모공 / 주름 / 탄력" class="btn_min" @click="modal.open('shopping_log', 'detailSearch')" />
    </div>
  </div>

  <div class="inner">
    <h3><em>찜</em> 리스트부터 확인하세요</h3>

    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods.slice(0,2)" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { sample_goods } from '~/test/data/publish/dummyData'
import SwiperCore, { Navigation, Pagination, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, A11y, Controller]);

/* swiper custom navigation */
/* swiper custom navigation */

definePageMeta({
  layout: 'pc-category'
});

onMounted(() => {
});

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
});
</script>
<style lang="scss" scoped></style>
