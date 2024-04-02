<template>
  <div id="wrap" class="PC">
    <HeaderPublish device="PC" />
    <div id="container">
      <slot device="PC" />
    </div>
    <FooterPublish device="PC" />
    <Actionbar device="PC" />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
#wrap {
  &.MO {
    width: 620px;
    margin: 0 auto;
  }
}

#container {
  padding-bottom: 100px;
}
</style>
