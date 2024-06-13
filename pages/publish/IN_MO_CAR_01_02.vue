<template>
  <!-- cart list -->
  <div class="list_wrap">
    <div class="allChk_wrap">
      <Inputs _type="checkbox" _text="전체선택" />
      <div class="btn_wrap">
        <Button class="btn_min_outline" txt="선택삭제" />
      </div>
    </div>

    <!-- no data --
    <ul class="cart_list">
      <li>
        <div class="no_data">
          <strong>장바구니에 담긴 제품이 없습니다.</strong>
          <span>특가혜택 제품과 실시간 가장 인기있는<br>제품들을 살펴보세요</span>
          <p class="btn_wrap">
            <Button class="btn_min_outline" txt="특가" />
            <Button class="btn_min_outline" txt="베스트" />
          </p>
        </div>
      </li>
    </ul>
    -- //no data -->

    <!-- 프로모션 -->
    <section>
      <h3 class="list_tit">[1+1] 깨끗하게 EASY! 클렌징 티슈 쟁여놓기 (6/1~6/30) [1+1] 깨끗하게 EASY! 클렌징 티슈 쟁여놓기 (6/1~6/30)</h3>
      <ul class="cart_list">
        <li v-for="(item, idx) in sample_goods.slice(0,4)" :key="idx">
          <CartItem :item="item" :isMo="true" />
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
    </section>
    <!-- //프로모션 -->


  </div>
  <!-- //cart list -->

  <!-- custom banner -->
  <div class="custom_banner">
    <a href="#none">
      <img src="/_nuxt/public/images/sam/bg_cart_banner.png" alt="">
      <div class="text">
        <div class="t1" style="color:#fff;">토스페이 전용카드로 혜택을~</div>
        <div class="t2" style="color:#fff;">5,000원 결제일 캐시백!!</div>
      </div>
    </a>
  </div>
  <!-- //custom banner -->
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
section {
  padding: 3rem 2.1rem;
}

.list_wrap {
  .allChk_wrap {
    margin: 0 !important;
    padding: 1.2rem 2.1rem;
    border-bottom: 1px solid #eee;

    :deep(.input_wrap) {
      .check > * {
        line-height: 1.8rem;
      }
    }

    .btn_wrap {
      .btn_min_outline {
        height: 2.4rem;
        border-radius: 0;

        :deep(em) {
          padding: 0 .8rem;
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }
  }

  .cart_list {
    border-top: 0;

    & + .cart_list {
      margin-top: 40px;
      border-top: 1px solid #000;
    }
  }

  .list_tit {
    font-size: 1.4rem;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    & + .cart_list {
      margin-top: 1.5rem;
      border-top: 1px solid #000;
    }

    strong {
      padding-left: 10px;
      font-size: 12px;
      line-height: 16px;
      vertical-align: middle;
    }
  }
}

.custom_banner {
  a {
    width: 100%;
    display: block;
    position: relative;

    .text {
      position: absolute;
      left: 2rem;
      top: 50%;
      transform: translateY(-50%);

      .t1 {
        font-size: 1.6rem;
      }

      .t2 {
        padding-top: .2rem;
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
  }
}
</style>
