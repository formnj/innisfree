<template>
  <div class="icon_menu">
      <a :href="url" :class="cls">{{ txt }}
          <em v-if="cls === 'cart'">{{ cnt }}</em>
      </a>
  </div>
</template>

<script setup>
const props = defineProps({
  cls: String,
  txt: String,
  cnt: String,
  url: {
    type: String,
    default: '#none'
  },
})
</script>

<style lang="scss" scoped>
.icon_menu {
  margin-right:10px;
  display:flex;
  a {
    width:32px;
    height:32px;
    background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
    background-repeat:no-repeat;
    background-size:250px auto;
    position:relative;
    display:block;
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
      background-image:url('/_nuxt/assets/mo_images/common/ico_home.png');
      background-position:0;
      background-size:100% 100%;
    }
    &.share {
      background-image:url('/_nuxt/assets/mo_images/common/ico_share.png');
      background-position:0;
      background-size:100% 100%;
    }
    &.back {
      background-image:url('/_nuxt/assets/mo_images/common/ico_back.png');
      background-position:0;
      background-size:100% 100%;
    }
  }
}
</style>
