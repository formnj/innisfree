<template>
  <div class="title_wrap" :data-layout="props.layoutType"></div>
  <Button txt="리뷰 모달" @click="modal.open('modal_review','full modal_review');" />
  <ProductReviewModal /> <!-- 리뷰보기 모달 -->
</template>
<script setup>
import { modal } from '~/assets/js/common-ui'
definePageMeta({
  layout:'pc-category'
});

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
});
</script>
