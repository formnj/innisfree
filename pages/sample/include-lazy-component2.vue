<template lang="">
  <div>include-lazy-component</div>
  <div>
    <LazySampleComponent v-if="lazyShow" />
    <button v-if="!lazyShow" @click="lazyShow = true">[Click to lazy load component]</button>
  </div>
</template>
<script setup>
const lazyShow = ref(false)
</script>
<style lang=""></style>
