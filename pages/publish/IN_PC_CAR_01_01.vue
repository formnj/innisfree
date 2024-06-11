<template>
  <div class="inner flex">
    <div class="cart_area">
      <div class="title_wrap">
        <div>
          <h2>장바구니</h2>
        </div>
      </div>

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
            <p class="no_data">
              <strong>장바구니에 담긴 제품이 없습니다.</strong>
              <span>하단의 특가혜택 제품들을 살펴보세요.</span>
            </p>
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
              <div class="cell count">
                <Quantity _id="Quantity" quantity="32" />
              </div>
              <div class="cell price">
                <span>일시품절</span><!-- 상태 : 일시품절, 판매중지, 출시예정 -->
                <Button class="btn_min_outline" txt="입고알림신청" />
                <p>
                  <strong>52,000 <em>원</em></strong>
                  <span class="point">+529P</span><!-- point -->
                </p>
              </div>
              <div class="cell del">
                <Icons class="del" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- //cart list -->

      <!-- custom banner -->
      <div class="custom_banner">
        <a href="#none" style="background-image:url('/_nuxt/public/images/sam/bg_cart_banner.png')">
          <div class="text">
            <div class="t1" style="color:#333;">토스페이 전용카드로 혜택을</div>
            <div class="t2" style="color:#333;">띄어쓰기 포함 14자 노출 결제일 캐시백!!</div>
          </div>
        </a>
      </div>
      <!-- //custom banner -->
    </div>

    <div class="payment_area">
      <div class="log_box">
        <h4>로그인</h4>
        <p>로그인을 하시면 지 보고있는 제품을<br>나중에도 확인하실 수 있습니다.</p>
        <Button class="btn_outline" txt="로그인하기" />
      </div>

      <div class="payment">
        <h4>결제정보</h4>
        <ul class="bul_list star">
          <li><strong>최종 할인혜택(쿠폰,결제금액조건 할인 등)은 주문서에서 적용됩니다.</strong></li>
          <li style="color:#EB5B54;"><strong>최종결제금액에 따라 증정품 내역이 장바구니와 달라질 수 있습니다.</strong></li>
        </ul>
        <dl>
          <dt>주문금액</dt>
          <dd>
            <strong>103,200</strong>원
          </dd>
        </dl>
        <dl class="desc">
          <dt>제품할인</dt>
          <dd>
            <strong>0</strong>원
          </dd>
        </dl>
        <dl>
          <dt>배송비</dt>
          <dd>무료</dd>
        </dl>
        <div class="total_price">
          <dl>
            <dt>결제예정금액</dt>
            <dd>
              <strong>103,200</strong>원
            </dd>
          </dl>
        </div>
      </div>
      <Button class="btn_big confirm" txt="쇼핑하러 가기" />
    </div>
  </div>

  <div class="inner">
    <div class="title_wrap">
      <h3>이니스프리 혜택모음</h3>
      <a href="IN_PC_HOM_01_04" class="btn_link_arrw">특가 혜택 더보기</a>
    </div>
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item,idx) in sample_goods.slice(0,5)" :key="idx">
          <GoodsItem :item="item" :link="item.link" :useGiveaway="true" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { sample_goods } from '~/test/data/publish/dummyData'
definePageMeta({
  layout:'pc-default'
});
</script>

<style lang="scss" scoped>
.inner {
  width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  &.flex {
    display: flex;
    justify-content: space-between;
  }

  & > .title_wrap {
    width: 100%;
    margin-top: 12px;
  }

  .title_wrap {
    & >  h3 {
      font-size: 24px;
    }

    & > .btn_link_arrw {
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }
  }
}

.cart_area {
  width: 890px;

  .title_wrap {
    margin-bottom: 60px;
  }
}

.payment_area {
  width:320px;
  height:100%;
  margin-top:162px;
  border: 1px solid #eee;
  position:sticky;
  top:100px;

  & > div {
    padding: 30px 25px;

    & + div {
      border-top: 1px solid #eee;
    }
  }

  .log_box {
    background-color: #fcfcfd;
    h4 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;

      &:before {
        content: '';
        width: 20px;
        height: 20px;
        margin-right: 5px;
        background: url('~/assets/images/common/icon_split.png') -480px -220px no-repeat;
        display: inline-block;
        vertical-align: middle;
      }
    }

    p {
      margin: 10px 0 25px;
      line-height: 22px;
    }

    .btn_outline {
      width: 100%;
      background-color: #fff !important;
      border-color: #eee;
    }
  }

  .payment {
    h4 {
      margin-bottom:20px;
      font-size:22px;
      font-weight:600;
    }

    ul {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }

    dl {
      color:#333;
      font-size:16px;
      display:flex;
      justify-content:space-between;
      align-items:center;

      & + dl {
        margin-top:15px;
      }

      &.desc {
        dt {
          font-weight: 400;

          &:before {
            content: '';
            width: 6px;
            height: 6px;
            margin-right: 5px;
            border-left: 1px solid #aaa;
            border-bottom: 1px solid #aaa;
            display: inline-block;
            position: relative;
            top: -4px;
          }
        }
      }

      dt {
        font-weight: 600;
      }

      dd {
        strong {
          font-weight:500;
        }
      }
    }

    .total_price {
      margin-top:25px;
      padding-top:20px;
      border-top:1px solid #eee;
      dt {
        color:#000;
      }
      dd {
        color:#ff0000;
        font-size:18px;
        font-weight:600;
        strong {
          font-size:24px;
          font-weight:700;
        }
      }
    }
  }

  button {
    width: 100%;
  }
}

.custom_banner {
  margin: 100px 0;

  a {
    width: 100%;
    height: 100px;
    display: block;
    padding: 23px 0 0 200px;

    .text {
      .t1 {
        line-height: 24px;
        font-weight: 500;
      }

      .t2 {
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
      }
    }
  }
}
</style>
