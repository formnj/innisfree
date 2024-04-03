<template>
  <div class="eventlist">
    <div class="inner">
      Event list
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'publish'
});
const props = defineProps({
  device: {
    type: String
  }
});

</script>

<style>

</style>