<template>
  <!-- 구매 버튼 영역 -->
  <div class="btn_wrap">
    <button type="button" class="btn_share"></button>
    <button type="button" class="btn_like">찜하기</button> <!-- 활성화시 on 클래스 추가 -->
    <Button class="btn_big" txt="장바구니" />
    <Button class="btn_big confirm" txt="바로구매" />
  </div>
  <!-- //구매 버튼 영역 -->

  <div class="btn_wrap">
    <button type="button" class="btn_share"></button>
    <button type="button" class="btn_like on">찜하기</button>
    <Button class="btn_big" txt="장바구니" />
    <Button class="btn_big confirm" txt="바로구매" />
  </div>

  <div class="btn_wrap">
    <button type="button" class="btn_share"></button>
    <button type="button" class="btn_like">찜하기</button>
    <Button class="btn_big" txt="입고알림 신청" @click="modal.open('modal_stock_list', 'bottom modal_stock_list')" />
  </div>

  <div class="btn_wrap">
    <button type="button" class="btn_share"></button>
    <button type="button" class="btn_like">찜하기</button>
    <Button class="btn_big" txt="구매불가" disabled />
  </div>

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
              <button type="button" class="btn_txt" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')">입고알림 신청</button>
            </label>
          </li>
          <li>
            <input id="prd02" type="radio" name="prd">
            <label for="prd02" class="soldout">
              <em>일시품절</em>
              <span class="name">2호 피치 베이지</span>
              <button type="button" class="btn_txt" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')">입고알림 신청</button>
            </label>
          </li>
          <li>
            <input id="prd03" type="radio" name="prd">
            <label for="prd03" class="soldout">
              <em>일시품절</em>
              <span class="name">2호 피치 베이지</span>
              <button type="button" class="btn_txt" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')">입고알림 신청</button>
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
import { modal } from '~/assets/js/common-ui'
definePageMeta({
  layout:'mo-product'
});
</script>
<style lang="scss" scoped>
.btn_wrap {
  display: flex;
  margin-bottom: 2rem;

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
</style>
