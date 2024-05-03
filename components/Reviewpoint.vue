<template>
  <div class="review_point">
    <span :style="'width:'+props.width">{{props.width}}</span>
  </div>
</template>

<script setup>
  const props = defineProps({
    width:{
      type:String,
      default:'0%'
    }
  });
</script>
<style lang="scss" scoped>
.review_point {
  width:72px;
  height:16px;
  background:url('~/assets/images/common/bg_reviewPoint.png') 0 0 no-repeat;
  position:relative;
  span {
    font-size:0;
    background:url('~/assets/images/common/bg_reviewPoint.png') 0 -26px no-repeat;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    display:inline-block;
  }
}
</style>
