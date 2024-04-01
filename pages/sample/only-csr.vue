<template lang="">
  <div class="flex items-center justify-between p-4 border-b">
    <button class="p-2">☰</button>
    <div>only CSR render</div>
    <div class="space-x-4">
      <button>🔍</button>
      <button>🛍️</button>
    </div>
  </div>

  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProductListView :product-list="productList1"></ProductListView>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProductListView :product-list="productList2"></ProductListView>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProductListView :product-list="productList3"></ProductListView>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data: productList1 } = await useFetch<any>('/api/product-list-service', {
  query: { redisUse: 'N' }
})
const { data: productList2 } = await useFetch<any>('/api/product-list-service', {
  query: { redisUse: 'N' }
})
const { data: productList3 } = await useFetch<any>('/api/product-list-service', {
  query: { redisUse: 'N' }
})
</script>
<style lang=""></style>
