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
      <ul class="cart_list type_default">
        <!-- no data -->
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
        <!-- //no data -->

        <li>
          <div class="row">
            <div class="cell check">
              <Inputs _type="checkbox" />
            </div>
            <div class="cell pdt_img">
              <a href="#none">
                <span class="thumb">
                  <em><img src="https://images.innisfree.co.kr/upload/product/36116_l_S_140.jpg?T202404300927" alt="" /></em>
                </span>
              </a>
            </div>
            <div class="cell pdt_info">
              <div class="name">
                <a href="#none">상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명</a>
                <div class="alt">
                  <span>[4/23 ~ 5/1, 기간내 5개]</span>
                </div>
              </div>
              <Selectbox
                  :options="[
                  { val: 'value', txt: '1호 블랙' },
                  { val: 'value', txt: '옵션02' }
              ]" />
            </div>
            <ul class="addOrder">
              <li>
                <p class="title"> 1호 베이비 핑크</p>
                <div class="opt_wrap">
                  <div class="count">
                    <Quantity quantity="32" />
                  </div>
                  <div class="cell price">
                    <span>일시품절</span><!-- 상태 : 일시품절, 판매중지, 출시예정 -->
                    <p>
                      <strong>52,000 <em>원</em></strong>
                      <span class="point">+529P</span><!-- point -->
                    </p>
                  </div>
                </div>
                <Icons class="del" />
              </li>
              <li>
                <div class="opt_wrap">
                  <div class="count">
                    <Quantity quantity="3" />
                  </div>
                  <div class="cell price">
                    <span>판매중지</span><!-- 상태 : 일시품절, 판매중지, 출시예정 -->
                  </div>
                </div>
              </li>
            </ul>
            <div class="cell del">
              <Icons class="del" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- //cart list -->
  </div>
  <!-- custom banner -->
  <div class="customBen">
    <a href="javascript:void(0);" onclick="BannerLink(&quot;https://www.innisfree.com/kr/ko/EventView.do?eventSeq=3508&quot;, &quot;1&quot;)">
      <div class="img">
        <img src="https://images.innisfree.co.kr/upload/banner/R05_195_0.png?T202404300927" alt="-">
      </div>
      <div class="textWrap">
        <div class="text">
          <div class="t1" style="color:#ffffff; font-family:SDNeoL;">롯데카드 터치하고</div>
          <div class="t2" style="color:#ffffff; font-family:SDNeoL;">최대 8천원 할인</div>
        </div>
      </div>
    </a>
  </div>
  <!-- //custom banner -->
</template>

<script setup>
import { setFilter } from '~/assets/js/common-ui.js'
import { modal } from '~/assets/js/common-ui.js'

definePageMeta({
layout:'mo-cart'
});

const emit = defineEmits(['title']);

onMounted(() => {
  emit('title','장바구니');
});
</script>

<style lang="scss" scoped>
</style>
