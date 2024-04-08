<template>
  <div v-for="(product, index) in props.productList" :key="index" class="bg-gray-100 p-4 flex flex-col items-center">
    <img :src="product.photoUrl" :alt="product.title" loading="lazy" height="auto" />
    <h3 class="text-lg font-semibold">{{ product.title }}</h3>
    <div class="text-sm text-gray-500 mb-2">{{ product.description }}</div>
    <div class="flex items-center">
      <span class="text-xl font-bold text-gray-800 mr-2">{{ product.salePrice }}</span>
      <span class="text-sm font-semibold text-red-500 line-through">{{ product.price }}</span>
    </div>
    <div class="text-green-600 text-xs mt-1">{{ product.discountPercentage }}% OFF</div>
    <div class="flex items-center mt-2">
      <span class="text-yellow-400 text-sm mr-1">★ {{ product.rating }}</span>
      <span class="text-gray-500 text-xs">({{ product.reviewCount }})</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  productList: { type: Array, required: true }
})
</script>
<style></style>
