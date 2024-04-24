<template>
  <button type="button" :class="`${props.class}`">
    <em>{{ props.txt }}</em>
  </button>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  txt: {
    type: String,
    default: '',
  },
})

</script>

<style lang="scss" scoped>
button {
  width:3.2rem;
  height:3.2rem;
  background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
  background-repeat:no-repeat;
  background-size:25rem auto;
  background-color:unset;
  position:relative;
  display:block;
  > em {
    font-size:0;
  }
  &.cart {
    background-position:-4rem 0;
    em {
      height:1.7rem;
      padding:0 0.5rem;
      color:#fff;
      font-size:1rem;
      font-weight:600;
      line-height:1.7rem;
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
    background-position:-13rem 0;
  }
  &.share {
    background-position:-17rem 0;
  }
  &.back {
    background-position:-4rem -7rem;
  }
  &.btn_search {
    background-position:0 0;
  }
  &.barcode {
    background-position:0 -18rem;
  }
  &.tooltip {
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 0.5rem;
    background-position:-23rem -2rem;
    display: inline-block;
  }
}
</style>
