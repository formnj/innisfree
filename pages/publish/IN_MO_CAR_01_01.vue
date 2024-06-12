<template>
  <div class="list_wrap">
    <!-- no data -->
    <ul class="cart_list">
      <li>
        <p class="no_data">
          <strong>장바구니에 담긴 제품이 없습니다.</strong>
          <span>하단의 특가혜택 제품들을 살펴보세요.</span>
        </p>
      </li>
    </ul>
    <!-- //no data -->
  </div>

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

  <div class="inner">
    <div class="title_wrap">
      <h3>이니스프리 혜택모음</h3>
    </div>
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item,idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" :useGiveaway="true" />
        </li>
        <li v-for="(item,idx) in sample_goods.slice(0,8)" :key="idx">
          <GoodsItem :item="item" :link="item.link" :useGiveaway="true" />
        </li>
      </ul>
    </div>
    <a hef="IN_MO_HOM_01_04" class="btn_list_btm">더 많은 특가 혜택 확인하기</a>
  </div>
</template>

<script setup>
import { sample_goods } from '~/test/data/publish/dummyData'
definePageMeta({
layout:'mo-name'
});

const emit = defineEmits(['title']);

onMounted(() => {
  emit('title','장바구니');
});
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem 3rem;
}

.btn_list_btm {
  width: 100%;
  height: 4rem;
  margin-top: 3rem;
  font-size: 1.4rem;
  line-height: 3.8rem;
  text-align: center;
  color: #666;
  border: 1px solid #eee;
  display: block;
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
