<template>

  <div class="inner">
    <!-- cart list -->
    <div class="list_wrap">
      <div class="allChk_wrap">
        <Inputs _type="checkbox" _text="전체선택" />
        <div class="btnSection">
          <Button class="btn_min_outline" txt="선택삭제" />
        </div>
      </div>

      <!-- no data --
      <ul class="cart_list">
        <li>
          <div class="no_data">
            <strong>장바구니에 담긴 제품이 없습니다.</strong>
            <span>특가혜택 제품과 실시간 가장 인기있는<br>제품들을 살펴보세요</span>
            <p class="btnSection">
              <Button class="btn_min_outline" txt="특가" />
              <Button class="btn_min_outline" txt="베스트" />
            </p>
          </div>
        </li>
      </ul>
      -- //no data -->

      <!-- 프로모션 -->
      <h3 class="list_tit">[1+1] 깨끗하게 EASY! 클렌징 티슈 쟁여놓기 (6/1~6/30)</h3>
      <ul class="cart_list">
        <li v-for="(item, idx) in sample_goods.slice(0,4)" :key="idx">
          <CartItem :item="item" />
        </li>
      </ul>
      <!-- <div class="prom_box">
        <div class="info">
          <p class="tit">1개 구매 시 30%, 2개 구매 시 40%, 3개이상 구매 시 50%</p>
          <button type="button" class="btn_link_arrw">프로모션 제품 더보기</button>
          <button type="button" class="btn_text_green" @click="modal.open('modal_prom_noti', 'full')">유의사항</button>
        </div>
        <div class="noti">
          <p>N+% 제품은 같은 행사내 제품들과 교차구매가 가능합니다.</p>
        </div>
      </div>

      <div class="prom_box">
        <div class="info">
          <p class="tit">20개 구매 시 반값할인</p>
          <button type="button" class="btn_link_arrw">프로모션 제품 더보기</button>
          <button type="button" class="btn_text_green">유의사항</button>
        </div>
        <div class="noti">
          <p>N+N 제품은 같은 행사내 제품들과 교차구매가 가능합니다.</p>
        </div>
      </div>

      <div class="prom_box">
        <div class="info">
          <p class="tit">최종결제금액 40,000원 이상 결제시 6,900원에 구매가능</p>
          <button type="button" class="btn_text_green">유의사항</button>
        </div>
      </div> -->
      <!-- //프로모션 -->

    </div>
    <!-- //cart list -->
  </div>

</template>

<script setup>
import { sample_goods } from '~/test/data/publish/dummyData'
import { modal } from '~/assets/js/common-ui.js'

definePageMeta({
layout:'mo-name'
});

const emit = defineEmits(['title']);

onMounted(() => {
  emit('title','장바구니');
});
</script>

<style lang="scss" scoped>
</style>
