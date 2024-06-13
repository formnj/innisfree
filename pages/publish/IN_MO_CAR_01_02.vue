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
      <div class="prom_box">
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
      </div>
    </section>
    <!-- //프로모션 -->

    <!-- 추가구성품할인 -->
    <section>
      <h3 class="list_tit">추가구성품할인</h3>
      <ul class="cart_list">
        <li v-for="(item, idx) in sample_goods.slice(1,2)" :key="idx">
          <CartItem :item="item" :isMo="true" />

          <ul class="cart_list">
            <li v-for="(item2, idx2) in sample_goods.slice(2,5)" :key="idx2">
              <CartItem :item="item2" class="extra" :isMo="true" />
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- //추가구성품할인 -->

    <!-- 첫구매전용, 체험단전용 -->
     <section>
      <ul class="cart_list">
        <li v-for="(item, idx) in sample_goods.slice(8,10)" :key="idx">
          <CartItem :item="item" :isMo="true" />
        </li>
      </ul>
    </section>
    <!-- //첫구매전용, 체험단전용 -->

    <!-- 샘플마켓 -->
    <section>
      <h3 class="list_tit">샘플마켓</h3>
      <ul class="cart_list">
        <li v-for="(item, idx) in sample_goods.slice(6,8)" :key="idx">
          <CartItem :item="item" class="sample" :isMo="true" />
        </li>
      </ul>
    </section>
    <!-- //샘플마켓 -->

    <!-- 판매중지 -->
     <section>
      <h3 class="list_tit">판매중지제품 <strong class="fc_red">※ 구매불가</strong></h3>
      <ul class="cart_list">
        <li v-for="(item, idx) in sample_goods.slice(5,6)" :key="idx">
          <CartItem :item="item" />
        </li>
      </ul>
    </section>
    <!-- //판매중지 -->

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

  & + section {
    border-top: .5rem solid #f5f5f5;
  }
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

    li {
      & + li {
        padding-top: 2rem;
      }

      ul {
        li{
          padding-top: 1.5rem;

          &:last-child {
            .cart_item {
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }

  .list_tit {
    font-size: 1.4rem;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    justify-content: space-between;

    & + .cart_list {
      margin-top: 1.5rem;
      padding-top: 2rem;
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

.fc_red {
  color: #ff0000;
}

.prom_box {
    padding: 1.5rem;
    border: 1px solid #eee;

    & + .prom_box {
      margin-top: 1rem;
    }

    .info {
      position: relative;

      .tit {
        padding-right: 6rem;
        line-height: 2rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .btn_link_arrw {
        margin-top: .5rem;
        font-size: 1.3rem;
        font-weight: 600;
        color: #000;
        text-decoration: underline;

        &:after {
          width: 6px;
          height: 6px;
          border-color: #000;
          position: relative;
          top: -1px;
        }
      }
    }

    .noti {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #f5f5f5;

      p {
        font-size: 1.2rem;
        color: #999;
      }
    }

    .btn_text_green {
      padding: .5rem .7rem;
      font-size: 1rem;
      font-weight: 600;
      position: absolute;
      top: 0;
      right: 0;
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
