<template>
  <div class="flex items-center justify-between p-4 border-b">
    <button class="p-2">☰</button>
    <div>서버 리퀘스트 (레디스 적용됨)</div>
    <div class="space-x-4">
      <button>🔍</button>
      <button>🛍️</button>
    </div>
  </div>

  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProductListView :product-list="productList"></ProductListView>
    </div>
  </div>
</template>
<script setup lang="ts">
// TODO useFetch wrapper function(CSR vs SSR)
const { redisUse } = useRoute().query

const { data: productList } = await useFetch<any>('/api/product-list-service', {
  query: { redisUse }
})
</script>
<style></style>
