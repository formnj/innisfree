<template>
<div class="inner">
  <ProductBottomButtons />  <!-- 기본(장바구니/바로구매) -->
  <ProductBottomButtons :useStock="true" /> <!-- 입고알림 신청 -->
  <ProductBottomButtons :useDisabled="true" /> <!-- 구매불가 -->
</div>
</template>

<script setup>
import { modal } from '~/assets/js/common-ui'
definePageMeta({
  layout:'mo-default'
});
</script>

<style lang="scss" scoped>
.inner {
  :deep(.btn_wrap) {
    margin-bottom: 2rem;
  }
}
</style>
