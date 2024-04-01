<template lang="">
  <div class="flex items-center justify-between p-4 border-b">
    <button class="p-2">☰</button>
    <div>상단 부분 SSR / 하단 부분 CSR (and lazy)</div>
    <div class="space-x-4">
      <button>🔍</button>
      <button>🛍️</button>
    </div>
  </div>

  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>product list1</div>
      <ProductListView :product-list="productList1"></ProductListView>
    </div>
    <ClientOnly>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>product list2</div>
        <ProductListView :product-list="productList2"></ProductListView>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>product list3</div>
        <ProductListView :product-list="productList3"></ProductListView>
      </div>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
const productList2 = ref([])
const productList3 = ref([])

const { data: productList1 } = await useFetch<any>('/api/product-list-service', {
  query: { redisUse: 'N' }
})

onMounted(async () => {
  productList2.value = await $fetch('/api/product-list-service', {
    query: { redisUse: 'N' }
  })

  productList3.value = await $fetch('/api/product-list-service', {
    query: { redisUse: 'N' }
  })
})
</script>
<style lang=""></style>
