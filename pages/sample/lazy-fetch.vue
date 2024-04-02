<template lang="">
  <div class="innitemSlide">lazy fetch page</div>
  <div v-if="!pending">로딩 끝</div>
</template>
<script setup>
const { pending } = await useLazyFetch('https://dev-inm-gateway.apddev.com/product/getProducts?productId=3000')
</script>
<style></style>
