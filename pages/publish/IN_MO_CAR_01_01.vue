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

  <!-- 프로모션 모달 -->
  <div id="modal_promotion" class="modal_wrap active promotion fullMo">
    <div class="modal_container">
        <div class="modal_header">
            <h2>프로모션 제품</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
            <section>
              <button
                class="promo_tit"
                type="button"
                :class="{active: promotion_table}"
                @click="promotion_table = !promotion_table"
              >
                2개 이상 구매 시 최대 [50% 할인]
              </button>
              <div v-if="promotion_table" class="table">
                <table>
                  <caption>프로모션 제품 설명 및 추가</caption>
                  <colgroup>
                    <col width="50%">
                    <col width="50%">
                  </colgroup>
                  <thead>
                    <tr>
                      <th>조건</th>
                      <th>할인액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1개 구매시</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>2개 구매시</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>3개 구매시</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>4개 구매시</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>5개 구매시</td>
                      <td>50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <p class="promo_tit">프로모션 제품 더 담기</p>
              <ul class="cart_list">
                <li v-for="(item, idx) in sample_goods.slice(0,2)" :key="idx">
                  <div class="cart_item" :class="{option_type: idx === 0}">
                    <div class="row">
                      <div class="prod_img">
                        <Inputs _type="checkbox" :isDisabled="item.status ? true : false"/>
                        <a href="#none" class="thumb" :class="item.status">
                          <img :src="item.img" />
                        </a>
                      </div>

                      <div class="prod_info">
                        <a class="name" href="#none"><strong>{{ item.cate }}</strong> {{ item.name }}</a>
                        <p v-if="item.hasNoti" class="fc_red">{{ item.hasNoti }}</p>
                        <button
                          v-if="item.status && item.status == 'sold_out'"
                          type="button"
                          class="btn_text_green"
                          @click="modal.open('modal_stock_alert','full modal_stock_alert')"
                        >
                          입고알림신청
                        </button>
                        <ProdSelectbox
                          v-if="item.hasOption"
                          _placeholder="옵션을 선택해주세요"
                          :options="[
                            { val: 'op1', name: 'op', txt: '베이지' },
                            { val: 'op2', name: 'op', txt: '베이비핑크' },
                            { val: 'op3', name: 'op', txt: '상품명 상품명 상품명 상품명 상품명', soldout: true, stockAlert: true },
                          ]"
                        />
                      </div>

                      <div v-if="!item.status || !item.status == 'sold_out'" class="prod_price">
                        <div class="quantity_area">
                          <Quantity v-if="!item.hasOption" _id="Quantity" quantity="1" />
                          <span v-if="item.isLimited" :class="item.isLimited.over ? 'err' : '' ">최대선택{{ item.isLimited.limit }}개까지</span> <!-- 최대선택 갯수 넘을 경우 err 클래스 추가-->
                        </div>
                        <div v-if="!item.isSample" class="price_wrap">
                          <span class="cost">{{ item.cost }}원</span>
                          <span class="price">{{ item.price }}원</span>
                        </div>
                      </div>

                      <span v-if="item.status && item.status == 'sold_out'">일시품절</span> <!-- 상태 : 일시품절, 판매중지, 출시예정 -->

                      <Icons v-if="item.delete || item.delete === undefined" class="btn_del" />
                    </div>

                    <ul v-if="item.hasOption" class="selected_list">
                      <li v-for="(list, i) in sample_prod_selected_list.slice(0,3)" :key="i">
                        <span class="name">{{ list.name}}</span>
                        <!-- <span v-if="selectedPriceShow" class="price">37,000원</span> -->
                        <span class="price">{{ list.price }}원 <span class="cost">{{ list.cost }}원</span></span>
                        <div class="quantity_control">
                          <div class="count">
                            <Quantity _id="detail_1" :quantity="1" />
                          </div>
                        </div>
                        <button type="button" class="btn_del">옵션 삭제</button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </section>
        </div>
        <div class="modal_footer">
            <Button class="btn_big confirm" txt="장바구니 담기" />
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //프로모션 모달 -->
</template>

<script setup>
import { sample_goods, sample_prod_selected_list } from '~/test/data/publish/dummyData.js'
import { modal } from '~/assets/js/common-ui.js'

definePageMeta({
layout:'mo-cart'
});

const promotion_table = ref(false);

const emit = defineEmits(['title']);

onMounted(() => {
  emit('title','장바구니');
});
</script>

<style lang="scss" scoped>
</style>
