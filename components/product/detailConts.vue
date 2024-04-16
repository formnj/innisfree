<template>
  <div class="prod_detail_conts">
    <!-- 상품 상세 영역, 개발시 삭제 -->
    <div class="temp_area">
      <img src="https://www.innisfree.com/kr/ko/upload/pdtDetailRB/makeup/face/concealer/myConcealer_darkCircle_cover/img01.jpg" alt="">
    </div>
    <!-- //상품 상세 영역 -->
    <div class="btn_more_area">
      <button type="button" @click="showCont()">제품정보 더보기</button>
    </div>
  </div>
</template>
<script setup>
const showCont = () => {
  console.log(1);
}
</script>
<style lang="scss" scoped>
.prod_detail_conts {
  height:840px;
  overflow:hidden;
  position:relative;
  .btn_more_area {
    width:100%;
    height:230px;
    padding:0 21px 30px;
    background:linear-gradient(rgba(255, 255, 255, 0), rgba(255,255,255));
    position:absolute;
    bottom:0;
    left:0;
    display:flex;
    align-items:flex-end;
    button {
      width:100%;
      height:40px;
      line-height:40px;
      font-size:13px;
      background-color:#fff;
      border:1px solid #000;
      align-items:center;
      justify-content:center;
      display:flex;
      &::after {
        content:'';
        width:16px;
        height:16px;
        margin-left:10px;
        background:url('/assets/mo_images/common/icon_split.png') 0 -70px;
        background-size:250px auto;
        display:inline-block;
      }
    }
  }
}
</style>


