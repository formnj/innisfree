<template>
  <div class="inner">
    <section>
      <div class="sub_title_wrap">
        <div>
          <h3>주문자 정보
          </h3>
        </div>
        <div class="btn_wrap">
          <Button txt="변경" />
          <Button txt="닫기" />
        </div>
      </div>
      <span class="name">김이안</span>
      <em>000-0000-5000</em>
      <ul>
        <li>
          <Inputs _type="text" _placeholder="문구를 입력해주세요" />
        </li>
        <li>
          <Inputs _type="text" _placeholder="문구를 입력해주세요" />
        </li>
        <li>
          <Button txt="변경완료" class="btn_outline"/>
        </li>
      </ul>
    </section>
    <section>
      <div class="sub_title_wrap">
        <div>
          <h3>배송지 정보
          </h3>
        </div>
        <div class="btn_wrap">
          <Button txt="등록/변경" />
        </div>
      </div>
      <div>
        <dl>
          <dt>
            <em>기본 배송지</em>
            <span class="name">김이안</span>
            <i>010-0000-5000</i>
          </dt>
          <dd></dd>
        </dl>
        <p></p>
      </div>
    </section>

    <section class="order_info">
      <div class="sub_title_wrap">
        <div>
          <h3>주문 제품
          </h3>
        </div>
        <p class="explain">설명글설명글설명글설명글설명글</p>
      </div>
      <ul>
        <li>
          <p>총 상품 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><Icons class="tooltip" /><em>2,500</em>원</strong>
              <p>
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </section>


    <section class="point">
      <div class="sub_title_wrap">
        <div>
          <h3>쿠폰/포인트
          </h3>
        </div>
        <p class="explain">설명글설명글설명글설명글설명글</p>
      </div>
      <ul>
        <li>
          <p>총 상품 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><Icons class="tooltip" /><em>2,500</em>원</strong>
              <p>
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </section>

    <section class="odgift">
      <div class="sub_title_wrap">
        <div>
          <h3>구매금액대 증정품
          </h3>
        </div>
        <p class="explain">설명글설명글설명글설명글설명글</p>
      </div>
      <ul>
        <li>
          <p>총 상품 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><Icons class="tooltip" /><em>2,500</em>원</strong>
              <p>
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </section>

    <section class="pay_method">
      <div class="sub_title_wrap">
        <div>
          <h3>결제수단
          </h3>
        </div>
        <p class="explain">설명글설명글설명글설명글설명글</p>
      </div>
      <ul>
        <li>
          <p>총 상품 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><Icons class="tooltip" /><em>2,500</em>원</strong>
              <p>
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </section>

    <section class="payment">
      <div class="sub_title_wrap">
        <div>
          <h3>결제 예정 금액
          </h3>
        </div>
      </div>
      <ul>
        <li>
          <p>총 상품 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><Icons class="tooltip" /><em>2,500</em>원</strong>
              <p>
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </section>

    <section class="ord_agree">
      <Inputs _type="checkbox" _text="구매 조건 및 결제 진행 동의" />
      <ul class="bul_list dot">
        <li>
          주문할 제품의 제품명, 제품가격, 배송정보를 확인하였으며, 구매 진행에 동의합니다.(전자상거래법 제8조 제2항)
        </li>
        <li>
          미성년자가 체결한 계약은 법정대리인이 동의하지 않는 경우, 본인 또는 법정대리인이 취소할 수 있습니다.
        </li>
      </ul>
    </section>
  </div>

  <!-- modal -->
  <div class="modal_wrap" id="my_delivery">
    <div class="modal_container">
        <div class="modal_header">
            <h2>배송조회</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <dl>
            <dt>CJ대한통운</dt>
            <dd>운송장 번호 540189756906</dd>
          </dl>
          <ul>
            <li>
              <div class="bold">
                <strong>배송완료</strong>
                <em>서울 용산</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
            <li>
              <div>
                <strong>간선하차</strong>
                <em>서울 용산</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
            <li>
              <div>
                <strong>간선하차</strong>
                <em>서울 용산</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
            <li>
              <div>
                <strong>간선하차</strong>
                <em>서울 용산</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
            <li>
              <div>
                <strong>집화수리</strong>
                <em>수지직영</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
          </ul>
        </div>
    </div>
  </div>

</template>

<script setup>
definePageMeta({
layout:'mo-category'
});
import { modal } from '~/assets/js/common-ui.js'
import Button from '../../components/Button.vue';

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});




onMounted(() => {

/**
 * 전체보기버튼을 누르면, dl의 active가 사라진고, 전체보기버튼이 none, 닫기버튼에 active가 추가된다
 * 닫기버튼을 누르면 닫기버튼에 active가 사라지고 전체보기버튼의 active가 추가, dl의 active가 추가된다.
 */


})

</script>

<style lang="scss" scoped>
.inner {
  i {
    font-style:normal;
  }
  section {
    margin-left:-2.1rem;
    margin-right:-2.1rem;
    padding-left:2rem;
    padding-right:2rem;
    padding-bottom:2rem;
    border-bottom:0.5rem solid #F5F5F5;
    &:last-of-type {
      border-bottom:0;
    }
    .sub_title_wrap {
      .explain {
        margin-top:0;
        font-size:13px;
        font-weight:400;
      }
    }
    &.ord_agree {
      padding-top:3rem;
      :deep(.input_wrap) {
        .check {
          em {
            font-weight:300;
          }
        }
      }
      ul {
        margin-top:2rem;
        color:#888;
        font-size:1.2rem;
      }
    }
  }
}


.modal_wrap {
  &#my_delivery {
    .modal_container {
      .modal_content {
        padding-top:2rem;
        dl {
          margin:0 2rem;
          padding:1.5rem;
          color:#333;
          font-size:1.3rem;
          background-color:#F7F9FA;
          display:flex;
          align-items:center;
          dt {
            height:100%;
            margin-right:0.5rem;
          }
        }
        ul {
          margin: 3rem 2.8rem 0;
          overflow-y:hidden;
          position:relative;
          &::before {
              content:'';
              width:0.2rem;
              height:auto;
              background:#eee;
              position:absolute;
              top:0;
              left:1.2rem;
              bottom:5.0rem;
            }
          li {
            padding:0 0 2.5rem 3.3rem;
            position:relative;
            &:last-of-type {
              margin-bottom:0;
            }
            > * + * {
              margin-top: 0.5rem;
            }
            div {
              color:#333;
              font-size:1.3rem;
              &::before{
                content: "";
                width:1rem;
                height:1rem;
                border:0.2rem solid #ddd;
                border-radius:50%;
                background:#fff;
                box-sizing:border-box;
                position:absolute;
                left:0.8rem;
                top:0.1rem;
              }
              &.bold {
                color:#009D5E;
                &::before {
                  width:1.8rem;
                  height:1.8rem;
                  background-image: url('~/assets/mo_images/common/icon_split.png');
                  background-repeat:no-repeat;
                  background-size:25rem;
                  background-position:-0.4rem -30.6rem;
                  background-color:#00BC70 ;
                  border:0.1rem solid #00BC70;
                  left:0.4rem;
                  display:inline-block;
                }
              }

              strong {
                font-weight:600;
              }
              em {
                margin: 0 0 0 0.5rem;
                padding: 0 0 0 0.6rem;
                font-weight: 400;
                position: relative;
                &::before {
                  content:'';
                  width:0.1rem;
                  height:1rem;
                  background:#ddd;
                  position:absolute;
                  top:50%;
                  left:0;
                  transform:translateY(-50%);
                }
              }
            }
            span {
              color: #aaa;
              display:block;
            }
          }

        }
      }
    }
  }
}


</style>
