<template>
  <div class="cart_item">
    <div class="row">
      <div class="prod_img">
        <Inputs _type="checkbox" />
        <a href="#none" class="thumb">
          <img :src="item.img" />
        </a>
      </div>
      <div class="prod_info">
        <div v-if="item.cartTag" class="tag">
          <span>{{ item.cartTag }}</span>
        </div>
        <a class="name" href="#none"><strong>{{ item.cate }}</strong> {{ item.name }}</a>
        <Button v-if="item.status && item.status == 'sold_out'" class="btn_min_outline" txt="입고알림신청" />
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
      <div v-if="!item.status || !item.status == 'sold_out'"  class="prod_price">
        <Quantity v-if="!item.hasOption" _id="Quantity" quantity="1" />
        <div class="price_wrap">
          <span class="cost">{{ item.cost }}원</span>
          <span class="price">{{ item.price }}원</span>
        </div>
      </div>
      <span v-if="item.status && item.status == 'sold_out'">일시품절</span> <!-- 상태 : 일시품절, 판매중지, 출시예정 -->
      <Icons class="del" />
    </div>
    <ul v-if="item.hasOption" class="selected_list">
      <li v-for="(item, idx) in sample_prod_selected_list.slice(0,3)" :key="idx">
        <span class="name">{{ item.name}}</span>
        <!-- <span v-if="selectedPriceShow" class="price">37,000원</span> -->
        <div class="quantity_control">
          <span class="name">수량</span>
          <div class="count">
            <Quantity _id="detail_1" :quantity="1" />
          </div>
        </div>
        <span class="price">{{ item.price }}원 <span class="cost">{{ item.cost }}원</span></span>
        <button type="button" class="btn_del">옵션 삭제</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { sample_prod_selected_list } from '~/test/data/publish/dummyData'
const props = defineProps({
    item: {},
})
</script>

<style lang="scss" scoped>
.cart_item {
  padding: 20px 0;
  .row {
    padding-right: 34px;
    display:flex;
    align-items: center;
    gap:20px;
    position: relative;

    .prod_img {
      width:100px;
      height: 133px;
      position: relative;

      .input_wrap {
        position: absolute;
        left: 0;
        top: 0;
      }

      .thumb {
        display: inline-block;
      }
    }

    .prod_info {
      height: 133px;
      padding-right:56px;
      flex:1;

      .tag {
        margin-bottom: 10px;

        span {
          margin-right: 4px;
          padding: 2px 5px;
          font-size: 12px;
          color:#fff;
          background-color: #00bc70;
          display: inline-block;
        }
      }

      .name {
        font-size: 16px;
        line-height: 20px;
      }

      .select {
        margin-top:20px;
        display:block;
      }

      .prod_select {
        width: 200px;
        margin-top: 20px;
      }
    }

    .prod_price {
      display: flex;
      gap: 10px;

      .count_wrap {
        width:122px;
      }

      .price_wrap {
        padding-left: 20px;
        text-align: right;
        display: flex;
        flex-direction: column;

        .cost {
          line-height: 18px;
          color: #aaa;
          text-decoration: line-through;
        }

        .price {
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
          color: #000;
        }
      }
    }

    .del {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .selected_list {
    max-height: none;
    overflow: hidden;
    padding: 0;
  }
}

</style>
