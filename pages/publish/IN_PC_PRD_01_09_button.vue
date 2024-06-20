<template>
  <div class="inner">
    <!-- 단일 옵셥 일시품절 -->
    <div class="prod_detail_info">
      <div class="prod_option">
        <p><strong>블랙티 유스 인핸싱 앰플 30mL</strong></p>
        <dl class="quantity_control">
          <dt>
            <span class="name">수량</span>
            <div class="count">
              <Quantity _id="detail" quantity="0" _disabled="true" />
            </div>
          </dt>
          <dd>
            <strong class="fc_red">일시품절</strong>
            <Button class="btn_outline btn_min" txt="입고알림 신청" />
          </dd>
        </dl>
      </div>
      <div class="total_price">
        <span>총 수량<em>0</em>개</span>
        <span>합계<span><em>0</em>원</span></span>
      </div>
      <ProductBottomButtons :useStock="true" /> <!-- 입고알림 신청 -->
    </div>
    <!-- 단일 옵셥 일시품절 -->


    <!-- 옵션/추가구성품 있음 -->
    <div class="prod_detail_info">
      <div class="prod_option">
        <div class="option">
          <div class="select_tit">
            <span class="essential">옵션선택 (필수)</span>
            <Inputs _type="checkbox" _text="품절제품제외" />
          </div>
          <ProdSelectbox
          _placeholder="옵션을 선택해주세요."
          :options="[
            { val: 'op1', name: 'op', txt: '1호 샐먼 베이지', soldout: true, stockAlert: true },
            { val: 'op2', name: 'op', txt: '2호 피치 베이지' }
          ]" />

          <div class="select_tit">
            <span>추가구성품할인 (선택)</span>
            <span>구매가능수량<em>2</em>개</span>
          </div>
          <ProdSelectbox
            _placeholder="추가구성품을 선택해주세요."
            :options="[
              { val: 'op3', name: 'op1', txt: '알로에', extraPrice: '4,900' },
              { val: 'op4', name: 'op1', txt: '상품명 상품명 상품명 상품명 상품명 상품명 상품명', extraPrice: '9,000' },
              { val: 'op5', name: 'op1', txt: '상품명 상품명 상품명 상품명 상품명', extraPrice: '7,000', soldout: true, stockAlert: true },
            ]"
          />

          <ProdSelectbox _placeholder="추가구성품을 선택해주세요." _disabled="disabled" />
          <ul class="selected_list">
            <li v-for="(item, idx) in sample_prod_selected_list.slice(0,2)" :key="idx">
              <span class="name"><em v-if="item.isExtra">추가구성</em>{{ item.name}}</span>
              <span class="price">{{ item.price }}원 <span class="cost">{{ item.cost }}원</span></span>
              <div class="quantity_control">
                <div class="count">
                  <Quantity _id="detail_1" :quantity="1" />
                </div>
              </div>
              <button type="button" class="btn_del">옵션 삭제</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="total_price">
        <span>총 수량<em>2</em>개</span>
        <span>합계<span><em>60,000</em>원</span></span>
      </div>
      <ProductBottomButtons />  <!-- 기본(장바구니/바로구매) -->
    </div>
    <!-- //옵션/추가구성품 있음 -->


    <!-- 옵션 + 일시품절 -->
    <div class="prod_detail_info">
      <div class="prod_option">
        <div class="option">
          <div class="select_tit">
            <span class="essential">옵션선택 (필수)</span>
            <Inputs _type="checkbox" _text="품절제품제외" />
          </div>
          <ProdSelectbox
          _placeholder="옵션을 선택해주세요."
          :options="[
            { val: 'op1', name: 'op', txt: '1호 샐먼 베이지', soldout: true, stockAlert: true },
            { val: 'op2', name: 'op', txt: '2호 피치 베이지' }
          ]" />
        </div>
      </div>
      <p class="txt fc_red"><strong>일시품절</strong></p>
      <ProductBottomButtons :useStock="true" /> <!-- 입고알림 신청 -->
    </div>
    <!-- //옵션 + 일시품절 -->


    <!-- 출시예정 -->
    <div class="prod_detail_info">
      <p class="txt fc_red"><strong>출시예정</strong></p>
      <ProductBottomButtons :useStock="true" /> <!-- 입고알림 신청 -->
    </div>
    <!-- 출시예정 -->


    <!-- 판매중지 -->
    <div class="prod_detail_info">
      <p class="txt fc_red"><strong>판매중지</strong></p>
      <ProductBottomButtons :useDisabled="true" /> <!-- 구매불가 -->
    </div>
    <!-- 판매중지 -->

  </div>

  <ProductStockAlertModal /> <!-- 입고알림 신청 모달 -->
</template>

<script setup>
import { sample_prod_selected_list } from '~/test/data/publish/dummyData'
import { modal } from '~/assets/js/common-ui'

definePageMeta({
  layout:'pc-sub'
});

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
});
</script>

<style lang="scss" scoped>
.prod_detail_info {
  width: 680px;
  margin-bottom: 100px;

  .prod_option {
    padding: 30px 0;

    p {
      margin-bottom: 10px;
      font-size: 15px;
      line-height: 20px;
      color: #333;
    }

    .option {
      width: 100%;

      label.check {
        font-size: 16px;
        line-height: 20px;
      }
    }

    .prod_select {
      margin-bottom: 10px;
    }
  }

  .total_price {
    padding: 20px 0 30px;
    border-top: 1px solid #f5f5f5;
  }

  :deep(.selected_list) {
    li {
      padding: 1.5rem;
      display: block;
      position: relative;

      .name {
        font-size: 1.3rem;
        display: block;
        em {
          font-size: 1.3rem;
        }
      }

      .price {
        margin: 1rem 0 0;
        text-align: right;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 3rem;
        display: block;
      }

      .cost {
        font-size: 1rem;
        font-weight: 400;
      }

      .quantity_control {
        width: auto;
        margin: 0;
        position: absolute;
        left: 1.5rem;
        bottom: 1.5rem;
      }

      .btn_del {
        position: absolute;
        right: 1rem;
        top: 1rem;
      }
    }
  }

  p.txt {
    padding-bottom: 20px;
    font-size: 18px;
    text-align: right;
  }
}

.quantity_control {
  width: 100%;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .count {
    width: 122px;

    .count_wrap {
      :deep(.input_wrap) {
        .input {
          input {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }

  dd {
    button {
      margin-left: 10px;
    }
  }
}
</style>
