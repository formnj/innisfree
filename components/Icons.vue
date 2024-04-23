<template>
  <button type="button" :class="`${props.class}`">
    <em>{{ props.txt }}</em>
  </button>
</template>

<script setup>
const props = defineProps({
  class: String,
  txt: String,
})

</script>

<style lang="scss" scoped>
button {
  width:32px;
  height:32px;
  background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
  background-repeat:no-repeat;
  background-size:250px auto;
  background-color:unset;
  position:relative;
  display:block;
  > em {
    font-size:0;
  }
  &.cart {
    background-position:-40px 0;
    em {
      height:17px;
      padding:0 5px;
      color:#fff;
      font-size:10px;
      font-weight:600;
      line-height:17px;
      background-color:#000;
      border-radius:100px;
      position:absolute;
      right:-5px;
      bottom:-5px;
      display:flex;
      align-items:center;
      justify-content:center;
    }
  }
  &.home {
    background-position:-130px 0;
  }
  &.share {
    background-position:-170px 0;
  }
  &.back {
    background-position:-40px -70px;
  }
  &.btn_search {
    background-position:0 0;
  }
  &.barcode {
    background-position:-209px -64px;
  }
  &.tooltip {
    width: 16px;
    height: 16px;
    margin-left: 5px;
    background-position:-230px -20px;
    display: inline-block;
  }
}
</style>
