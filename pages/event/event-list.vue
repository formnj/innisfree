<template>
  <!-- Product Detail Page -->
  <div class="max-w-screen-lg mx-auto">
    <!-- Navigation and search -->
    <div class="flex items-center justify-between p-4">
      <div>🔍</div>
      <div>👜</div>
    </div>

    <!-- Product Offer -->
    <div class="bg-white p-4 shadow rounded-lg">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold text-gray-800">Innisfree</h1>
        <div class="flex items-center py-2">
          <span class="text-lg font-semibold text-gray-500 line-through mr-2"
            >₩76,000</span
          >
          <span class="text-xl font-bold text-green-500">₩49,400</span>
        </div>
        <p class="text-sm text-gray-600">Vitamin C Green Tea Enzyme</p>
      </div>
    </div>
    <!-- Events Page -->
    <div class="mt-6">
      <h2 class="text-xl font-bold text-gray-800 px-4">Events</h2>
      <div class="grid grid-cols-1 gap-4 p-4">
        <EventListView :event-list="eventList"></EventListView>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// const { data: {value: { data: productsAndEvents } }} = await useFetch<any>('https://dev-inm-gateway.apddev.com/product/getProductsAndEvent')
// console.log(productsAndEvents.value)
const {
  data: {
    value: { data: eventList }
  }
} = await useFetch<any>('https://dev-inm-gateway.apddev.com/event/getEvents')
</script>
<style></style>
