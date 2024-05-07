<template>
  <div class="prod_swiper_wrap">
    <ProductDetailSwiper />
    <div class="swiper-notify"><strong>7명의 고객님</strong> 동시에 확인중 <button type="button" class="btn_close">닫기</button></div>
  </div>
  <ProductDetailInfo />
  <ProductDetailBenefit />

  <p class="text_notify">증정품의 한정수량 소진 시 조기 품절될 수 있습니다.</p>
  <ProductDetailTab />
</template>
<script setup>
definePageMeta({
  layout:'mo-product'
})
</script>
<style lang="scss" scoped>
.swiper-notify {
    height: 30px;
    padding: 0 10px;
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    background-color: #000;
    align-items: center;
    bottom: 0;
    right: 70px;
    position: absolute;
    z-index: 2;
    display: inline-flex;

    strong {
      color: #00BC70;
    }

    .btn_close {
      width: 16px;
      height: 16px;
      margin-left: 10px;
      font-size: 0;
      background: url('/assets/mo_images/common/icon_split.png') -105px -70px / 250px auto no-repeat;
    }
  }

  .custom_pagination {
    width: 70px;
    height: 30px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
    position: absolute;
    left: unset;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;

    .pagination_total {
      opacity: .5;

      &::before {
        content: '';
        width: 0.1rem;
        height: 0.8rem;
        margin: 0 0.8rem;
        background-color: rgba(255, 255, 255, 0.2);
        display: inline-flex;
      }
    }
  }
</style>
