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

  <section>
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
  </section>

  <!-- 프로모션 모달 -->
  <div id="modal_promotion" class="modal_wrap">
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
layout:'mo-name'
});

const promotion_table = ref(false);

const emit = defineEmits(['title']);

onMounted(() => {
  emit('title','장바구니');
});
</script>

<style lang="scss" scoped>
section {
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
