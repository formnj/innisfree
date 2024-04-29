<template>
  <div class="inner">
    <span></span>
    <p>신청하신 입고 알림 내역이 없습니다</p>
    <div class="btn_wrap">
      <Button  class="btn_min_outline" txt="특가 상품 쇼핑하기" />
      <Button  class="btn_min_outline" txt="개인정보 수정하기"/>
    </div>
  </div>




</template>

<script setup>
definePageMeta({
layout:'mo-category'
});



const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});



onMounted(() => {


})

</script>

<style lang="scss" scoped>
  .inner {
    text-align:center;
    span {
      width:65px;
      height:65px;
      margin-top:10rem;
      background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
      background-repeat:no-repeat;
      background-size:250px;
      background-position:-63px -98px;
      display:inline-block;
    }
    p {
      padding:2.0rem 0 2rem;
      font-size:1.6rem;
      font-weight:600;
    }
    .btn_wrap {
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
      .btn_min_outline {
        border: 0.1rem solid #999 !important;
        ::v-deep em {
          padding:0 1.5rem;
          color:#999 !important;
          font-size:1.1rem;
          font-weight:600;
          line-height: 3rem;
        }
      }
    }
  }
</style>
