<template>
  <Button class="btn_heart" txt="좋아요 버튼" @click="setFilter" />
</template>

<script setup>
import { setFilter } from '/assets/js/common-ui'
</script>

<style lang="scss" scoped>
.btn_heart {
  em {
    width: 32px;
    height: 32px;
    padding: 0;
    background-image: url('/_nuxt/assets/images/common/icon_split.png');
    background-repeat: no-repeat;
    background-position: -220px 0;
  }

  &.active {
    em{
      background-position: -300px -120px;
    }
  }
}
</style>
