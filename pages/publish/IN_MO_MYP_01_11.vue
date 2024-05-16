<template>
  <div class="inner">
    <article class="ord_addres_info">
      <div class="sub_title_wrap">
        <div>
          <h3>주문/배송 정보
          </h3>
        </div>
        <p class="explain">2024-05-03 17:41:36</p>
      </div>
      <ul>
        <li>
          <span>주문번호</span>
          <p>21288166</p>
        </li>
        <li>
          <span>주문자</span>
          <p>
            <span>김이안</span>
            <em>010-2315-5704</em>
          </p>
        </li>
        <li>
          <span>배송지</span>
          <div>
            <span>김이안</span>
            <em>010-2315-5704</em>
            <p>
							(22819) 인천광역시 서구 원적로7번길 20 하이팰리스 3차 302호
            </p>

          </div>
        </li>
        <li>
          <span>배송 메세지</span>
          <p>부재시 문앞에 놓아주세요.</p>
        </li>
      </ul>
    </article>
    <article class="ord_goods_info">
      <div class="sub_title_wrap">
        <div>
          <h3>주문 제품
          </h3>
        </div>
        <em>총 1건</em>
      </div>
      <dl>
        <dt>
          <div>
            <p>
              <strong>배송완료</strong>
            </p>
            <dl>
              <a @click="$router.push('/publish/IN_MO_MYP_01_11')">
                <dt>
                  <p>
                    <img src="/_nuxt/public/images/sam/36804_l_S_90.png" alt="">
                  </p>
                </dt>
              </a>
              <dd>
                <a @click="$router.push('/publish/IN_MO_MYP_01_11')">
                  <p>
                    비타C 그린티 엔자임 잡티 토닝 세럼 체험단
                    <em>1개</em>
                  </p>
                  <span>0</span>
                </a>
              </dd>
            </dl>
          </div>
        </dt>
        <dd>
          <ul>
            <li>
              <p>일반결제금액</p>
              <span>
                <em>0</em>원
              </span>
            </li>
            <li>
              <p>할인 금액</p>
              <span>
                <em>-0</em>원
              </span>
            </li>
            <li>
              <p>뷰티포인트 사용</p>
              <span>
                <em>-0</em>P
              </span>
            </li>
            <li>
              <p>뷰티포인트 적립</p>
              <span>
                +0 P (기본 0P / 추가 0P)
              </span>
            </li>
          </ul>
        </dd>
      </dl>
      <Button txt="전체보기" />
      <Button txt="닫기" />
      <div class="btn_wrap">
        <Button txt="배송 조회" class="btn_outline" />
        <Button txt="교환 신청" class="btn_outline" />
        <Button txt="반품 신청" class="btn_outline" />
      </div>
    </article>
    <article class="ord_methodpay">
      <div class="sub_title_wrap">
        <div>
          <h3>결제수단
          </h3>
        </div>
      </div>
      <dl>
        <dt>네이버페이</dt>
        <dd>2,500원</dd>
      </dl>
    </article>
    <article class="ord_price">
      <div class="sub_title_wrap">
        <div>
          <h3>결제 금액</h3>
        </div>
      </div>
      <ul class="myord_price">
        <li>
          <p>총 주문 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><em>- 0</em>원</span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong>2,500원</strong>
              <p>
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
      <ol class="bullistType_02">
        <li>뷰티포인트는 배송완료(또는 수취확인) 후 15일째 되는 날 적립됩니다.</li>
        <li>주문접수 상태의 주문은 주문일에서 3일간 보관되며, 이후 자동 취소처리 됩니다.</li>
        <li>결제완료 후 배송지 변경은 어렵습니다. 취소 후 변경 주소로 재 주문하여 주세요.</li>
        <li>상태에 따른 주문 취소 방법
          <p>[결제완료]: 마이페이지에서 취소신청이 가능합니다.</p>
          <p>[상품준비중]: 고객상담실을 통해 문의 시, 출고 확정 전인 경우만 취소가 가능합니다.</p>
        </li>
        <li>샘플마켓 제품은 고객센터(080-380-0114)문의를 통해 교환/반품이 가능합니다.</li>
      </ol>

    </article>
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

})

</script>

<style lang="scss" scoped>
.inner {
  article {
    margin-left:-2.1rem;
    margin-right:-2.1rem;
    padding-left:2rem;
    padding-right:2rem;
    padding-bottom:3rem;
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
    > ul {
      display:flex;
      flex-direction:column;
        li {
          display:flex;
          justify-content:space-between;
        }
    }
    &.ord_addres_info {
      ul {
        gap: 1.5rem;
        li {
          justify-content: flex-start;
           > span {
            width:7rem;
            margin-right: 2.0rem;
            color: #888888;
          }
          > div {
            word-break:break-all;
            flex:1;
          }
        }
      }
    }
    &.ord_goods_info {
      .sub_title_wrap {
        justify-content:flex-start;
        align-items:center;
        h3 {
          margin-right:1rem;
        }
        em {
          color:#888888;
          font-size:1.3rem;
          font-weight:600;
        }
      }
    }
    &.ord_methodpay {}
    &.ord_price {}
  }
}

</style>
