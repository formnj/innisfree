<template>
  <!-- IN_MO_PRD_01_09_button 참고 -->
  <div class="btn_wrap">
    <button type="button" class="btn_share"></button>
    <button type="button" class="btn_like" @click="zzimUI">찜하기</button> <!-- 활성화시 on 클래스 추가 -->
    <Button v-if="useCart && !useStock && !useDisabled" class="btn_big" txt="장바구니" @click="modal.open('bottom_cart','bottom bottom_cart')" />
    <Button v-if="useBuy && !useStock && !useDisabled" class="btn_big confirm" txt="바로구매" />
    <Button v-if="useStock" class="btn_big" txt="입고알림 신청" @click="modal.open('modal_stock_list', 'bottom modal_stock_list')" />
    <Button v-if="useDisabled" class="btn_big" txt="구매불가" disabled />
  </div>


  <!-- 찜 토스트 팝업 -->
  <div class="toast_heart">
    <p>찜</p>
  </div>
  <!-- //찜 토스트 팝업 -->

  <!-- 장바구니 -->
  <div id="bottom_cart" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this);">닫기</button>
      </div>
      <div class="modal_content">
        <div class="select_tit">
          <span class="essential">옵션선택 (필수)</span>
          <Inputs _type="checkbox" _text="품절제품제외" />
        </div>
        <ProdSelectbox
          _placeholder="옵션을 선택해주세요"
          :options="[
            { val: 'op1', name: 'op', txt: '베이지' },
            { val: 'op2', name: 'op', txt: '베이비핑크' },
            { val: 'op3', name: 'op', txt: '상품명 상품명 상품명 상품명 상품명', soldout: true, stockAlert: true },
            { val: 'op4', name: 'op', txt: '러브베이지' },
            { val: 'op5', name: 'op', txt: '다크로즈' },
            { val: 'op6', name: 'op', txt: '코랄' },
          ]"
        />

        <div class="select_tit">
          <span>추가구성품할인 (선택)</span>
        </div>
        <ProdSelectbox
          _placeholder="추가구성품을 선택해주세요."
          :options="[
            { val: 'op1', name: 'op', txt: '알로에' },
            { val: 'op2', name: 'op', txt: '상품명 상품명 상품명 상품명 상품명' },
            { val: 'op3', name: 'op', txt: '상품명 상품명 상품명 상품명 상품명', soldout: true, stockAlert: true },
          ]"
        />

        <ul class="selected_list">
          <li v-for="(item, idx) in sample_prod_selected_list" :key="idx">
            <span class="name">{{ item.name}} </span>
            <!-- <span v-if="selectedPriceShow" class="price">37,000원</span> -->
            <span class="price">{{ item.price }}원 <span class="cost">{{ item.cost }}원</span></span>
            <div class="quantity_control">
              <span class="name">수량</span>
              <div class="count">
                <Quantity _id="detail_1" :quantity="1" />
              </div>
            </div>
            <button type="button" class="btn_del">옵션 삭제</button>
          </li>
        </ul>

        <div class="total_price">
          <span>총 수량 <em>2</em>개</span>
          <span>합계금액 <span><em>60,000</em>원</span></span>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="장바구니" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //장바구니 -->

  <!-- 입고알림 신청 리스트 -->
  <div id="modal_stock_list" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this);">닫기</button>
      </div>
      <div class="modal_content">
        <ul class="op_list">
          <li>
            <input id="prd01" type="radio" name="prd">
            <label for="prd01" class="soldout">
              <em>일시품절</em>
              <span class="name">1호 샐먼 베이지 1호 샐먼 베이지 1호 샐먼 베이지 1호 샐먼 베이지</span>
              <button type="button" class="btn_txt"
                @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')">입고알림 신청</button>
            </label>
          </li>
          <li>
            <input id="prd02" type="radio" name="prd">
            <label for="prd02" class="soldout">
              <em>일시품절</em>
              <span class="name">2호 피치 베이지</span>
              <button type="button" class="btn_txt"
                @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')">입고알림 신청</button>
            </label>
          </li>
          <li>
            <input id="prd03" type="radio" name="prd">
            <label for="prd03" class="soldout">
              <em>일시품절</em>
              <span class="name">2호 피치 베이지</span>
              <button type="button" class="btn_txt"
                @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')">입고알림 신청</button>
            </label>
          </li>
        </ul>
        <p class="noti">아래의 입고알림 신청 버튼으로 입고알림을 완료하시면 옵션에 상관 없이 제품이 입고되면 알림을 드립니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="입고알림 신청" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //입고알림 신청 리스트 -->

  <!-- 입고알림 신청 -->
  <div id="modal_stock_alert" class="modal_wrap">
    <div class="modal_container">
      <button class="btn_close" @click="modal.close(this);">닫기</button>
      <div class="modal_content">
        <h2>입고알림 신청</h2>
        <p class="txt">입고알림 신청을 하면 제품이 입고 되어 판매가 시작되는 시점에 회원님의 휴대폰으로 입고알림 메시지를 발송해드립니다.</p>
        <ul class="bul_list star">
          <li>구매자가 많을 경우 메시지 확인 후, 즉시 구매하지 않으면 재고가 소진 될 수 있습니다.</li>
        </ul>

        <h3>제품 및 신청 정보 확인</h3>
        <dl class="gray_box">
          <dt>제품명</dt>
          <dd>리얼핏 매트 리퀴드</dd>
          <dt>옵션</dt>
          <dd>2호 코랄핑크 더블샷</dd>
          <dt>신청자</dt>
          <dd>김이니</dd>
          <dt>연락처</dt>
          <dd>010-1234-5678</dd>
        </dl>
        <ul class="bul_list star">
          <li>연락처 등 개인정보 수정은 내정보 수정 메뉴를 이용해주세요.</li>
          <li>SMS 정보 이용료는 무료입니다.</li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="입고알림 신청" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //입고알림 신청 -->
</template>

<script setup>
import { sample_prod_selected_list } from '~/test/data/publish/dummyData'
import { modal } from '~/assets/js/common-ui'
const props = defineProps({
  useCart: {
    type: Boolean,
    default: true,
  },
  useBuy: {
    type: Boolean,
    default: true,
  },
  useStock: {
    type: Boolean,
    default: false,
  },
  useDisabled: {
    type: Boolean,
    default: false,
  },
})

const zzimUI = (e) => {
  const btn = e.target;
  const toast = document.getElementsByClassName('toast_heart')[0];

  btn.classList.toggle('on')
  toast.classList.add('active')
  if(btn.classList.contains('on')) {
    toast.classList.add('on')
  }else {
    toast.classList.remove('on')
  }
  setTimeout(()=>{
    toast.classList.remove('active')
  }, 2500)
}
</script>

<style lang="scss" scoped>
.btn_wrap {
  width: 100%;
  display: flex;

  & > button {
    font-size: 1.6rem;
    font-weight: 600;
    flex: 1;
  }

  .btn_share,
  .btn_like {
    width: 6rem;
    height: 6rem;
    font-size: 0;
    text-align: center;
    background: #333;
    flex: none;

    &:before {
      content: '';
      width: 3.2rem;
      height: 3.2rem;
      vertical-align: middle;
      display: inline-block;
    }
  }

  .btn_share:before {
    background: url('~/assets/mo_images/common/icon_split.png') -14rem -36.5rem / 25rem auto no-repeat;
  }

  .btn_like:before {
    background: url('~/assets/mo_images/common/icon_split.png') -17.5rem -36.5rem / 25rem auto no-repeat;
  }

  .btn_like.on:before {
    background: url('~/assets/mo_images/common/icon_split.png') -21rem -36.5rem / 25rem auto no-repeat;
  }

  :deep(.btn_big):disabled {
    background-color: #666;
    em {
      color: #aaa;
    }
  }
}

.toast_heart {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;

  p {
    font-size: 0;
    width: 10rem;
    height: 10rem;
    background: url('~/assets/mo_images/common/toast_heart.png') 0 -10rem / 20rem auto no-repeat;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: heartOn 2.5s ease-in;

    &:before {
      content:'';
      width: 10rem;
      height: 10rem;
      background: url('~/assets/mo_images/common/toast_heart.png') -10rem -10rem / 20rem auto no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      animation: heartBgOn 2.5s ease-in;
    }
  }

  &.active {
    display: block;
  }

  &.on {
    p {
      background: url('~/assets/mo_images/common/toast_heart.png') 0 0 / 20rem auto no-repeat;

      &:before {
        background: url('~/assets/mo_images/common/toast_heart.png') -10rem 0 / 20rem auto no-repeat;
      }
    }
  }
}

@keyframes heartOn {
  10% {
    transform: translate(-50%, -50%) scale(1.1);
  }

  40% {
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes heartBgOn {
  10% {
    transform: scale(1.05);
    opacity: 1;
  }

  40% {
    transform: scale(1);
    opacity: 1;
  }

  90% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
}


.modal_wrap {
  &.alert {
    .modal_content {
      padding: 3rem 2rem;

      .sub_tit {
        font-size: 1.3rem;
        color: #00BC70;
        margin-bottom: .6rem;
      }

      h2 {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.4rem;

        & + .txt {
          margin-top: 1rem;
        }
      }

      .txt {
        font-size: 1.3rem;
        color: #666;
        line-height: 2rem;
        display: block;

        em {
          color: #00BC70;
          font-weight: bold;
        }
      }
    }
  }
}

.modal_stock_alert {
  .bul_list.star {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #888;
    li {
      line-height: 1.4rem;
    }
  }

  h3 {
    margin: 2.5rem 0 1rem;
    padding-top: 2.5rem;
    font-size: 1.4rem;
    border-top: 1px solid #eee;
  }

  .gray_box {
    padding: 1rem 1.5rem 1.5rem;
    background-color: #f5f5f5;
  }

  dl {
    width: 100%;
    font-size: 1.3rem;

    & > * {
      margin-top: .5rem;
      line-height: 2rem;
      display: inline-block;
      vertical-align: top;
    }

    dt {
      width: 5rem;
      color: #666;
      margin-right: 1.6rem;
    }

    dd {
      width: calc(100% - 6.6rem);
      color: #000;
    }
  }
}

.modal_stock_list {
  .modal_container {
    .modal_content {
      padding: 0 2.1rem 3rem;

      .op_list {
        li {
          &+li {
            border-top: 1px solid #f5f5f5;
          }

          input {
            display: none;

            &:checked+label {
              background: #f3f3f3;
            }
          }

          label {
            width: 100%;
            font-size: 13px;
            padding: 14px 0;
            display: flex;
            align-items:center;
            cursor: pointer;

            &.soldout {
              color: #aaa;
            }

            .name {
              flex: 1;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }

            em {
              padding-right: 5px;
              font-size: 12px;
              color: #ff0000;
            }

            .btn_txt {
              padding-left: 5px;
              font-weight: 600;
              font-size: 12px;
              line-height: 16px;
              letter-spacing: -0.12px;
              color: #000;
              text-decoration: underline;
              position: relative;
              z-index: 3;
            }
          }
        }
      }

      .noti {
        margin-top: 10px;
        padding-left: 21px;
        font-size: 12px;
        line-height: 16px;
        color: #999;
        position: relative;

        &:before {
          content: '';
          width: 16px;
          height: 16px;
          background: url("~/assets/images/common/icon_split.png") -400px -20px no-repeat;
          display: inline-block;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
}

.bottom_cart {
  .modal_content {
    max-height: 54rem;
  }
  .select_tit {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    & > span {
      font-weight: 600;
      color: #888;

      &.essential {
        &:after {
          content:'*';
          color: #ff0000;
          padding-left: 5px
        }
      }
    }

    .input_wrap {
      flex: none;
    }
  }

  .total_price {
    padding: 15px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      color: #000;

      & > span {
        padding-left: 10px;
        font-size: 18px;
        color: #00BC70;

        em {
          padding-right: 4px;
          font-size: 20px;
        }
      }
    }

    em {
      font-weight: 600;
      color: #00BC70;
    }
  }
}

:deep(.prod_select) {
  margin-bottom: 15px;
}

.selected_list {
  max-height: 230px;
  margin: 10px 0 0;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    width: 4px;
  }

  &::-webkit-scrollbar-thumb{
    background-color: #e2e2e2;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track{
    background-color: transparent;
  }

  li {
    padding: 10px 15px;
    background-color: #F7FAFA;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + li {
      margin-top: 3px;
    }

    & > * {
      flex-shrink: 0;
    }

    .name {
      font-size: 14px;
      line-height: 24px;
      color: #666;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex: 1;
    }

    .price {
      margin-left: 10px;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      color: #000;
      flex: none;
    }

    .quantity_control {
      width: auto;
      margin-left: 20px;
      background-color: #fff;
      display: inline-block;

      .name {
        display: none;
      }

      .count {
        width: 100px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;

        :deep(button) {
          width: 28px;
          height: 28px;
          background: #fff;
          font-size: 0;
          flex: none;
          position: relative;

          &:before,
          &.btn_inc:after {
            content: '';
            width: 8px;
            height: 1px;
            background-color: #000;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }

          &.btn_inc:after {
            width: 1px;
            height: 8px;
          }
        }
        :deep(.count_wrap) {
          flex:1;
          input {
            height: 28px;
            padding: 0;
            font-weight: 600;
            font-size: 13px;
            text-align: center;
            color: #000;
            border: none;
          }
        }
      }

      dd {
        .price {
          font-weight: 600;
          font-size: 13px;
          line-height: 20px;
          letter-spacing: -0.16px;
          display: inline-flex;
          align-items: center;

          em {
            font-size: 16px;
            margin-right: 3px;
          }
        }
      }
    }

    .btn_del {
      width: 20px;
      height: 20px;
      margin-left: 10px;
      font-size: 0;
      background: url("~/assets/images/common/icon_split.png") -460px -40px no-repeat;
      flex: none;
    }
  }
}
</style>
