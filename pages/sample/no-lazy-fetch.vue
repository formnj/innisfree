<template lang="">
  <div class="pdtInfoWrap">lazy fetch page</div>
  <div v-if="!pending">로딩 끝</div>
</template>
<script setup>
const { pending } = await useFetch('https://dev-inm-gateway.apddev.com/product/getProducts?productId=3000')
</script>
<style></style>
