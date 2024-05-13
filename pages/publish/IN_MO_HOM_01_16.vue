<template>
  <div class="staff_wrap">
    <section class="staffVisual">
      <span>임직원 전용</span>
      <div>
        이니스프리 임직원<br />
        AP임직원 전용 특가샵
        <span>구매 전 안내사항을 확인해주세요</span>
      </div>
      <Button txt="구매 안내사항" class="btn_notify" @click="modal.open('modal_staff', 'full')" />
    </section>
  </div>

  <!-- title washed -->
  <div class="title_wrap">
    <div>
      <h2>
        <strong class="badge count">총 <em>32</em>건</strong>
      </h2>
    </div>
    <div class="pdtSortTab_wrap">
      <div class="sortTab">
        <button
          class="btn_dropdown"
          @click="modal.open('modal_sort', 'bottom')">
          추천순
        </button>
      </div>
      <button @click="modal.open('modal_search', 'bottom')">
        상세검색
      </button>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </div>

  <div id="modal_sort" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div>
          <ul>
            <li class="active"><a href="#none" class="active">추천순</a></li>
            <li><a href="#none">신제품순</a></li>
            <li><a href="#none">판매량순</a></li>
            <li><a href="#none">낮은 가격순</a></li>
            <li><a href="#none">높은 가격순</a></li>
            <li><a href="#none">리뷰순</a></li>
            <li><a href="#none">판매금액순</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_search" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>상세검색</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>Sample Modal</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big btn_type_01" txt="초기화" />
        <Button class="btn_big btn_type_02" txt="검색" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_staff" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>임직원샵 이용안내</h2>
        <button class="btn_close" @click="modal.close(this);">닫기</button>
      </div>
      <div class="modal_content">
        <div class="mdWarning">
          <h4>유의사항</h4>
          <strong>타 프로모션과 중복 적용 불가</strong>
          <ul class="list_num">
            <li><span>1</span> 온·오프 통합 쿠폰 및 기타 할인 쿠폰 중복 적용불가</li>
            <li><span>2</span> 구매 사은품 지급 시, 본 결제 금액은 총 금액합산에서 제외됩니다.</li>
          </ul>
          <strong>구입 수량 제한</strong>
          <ul class="list_num">
            <li><span>1</span> 한정 수량으로 많은 고객님께 혜택을 드리기 위하여 수량 제한하는 점 양해 부탁드립니다.</li>
            <li><span>2</span> 동일 주소지로 여러 ID 분할 구입하시는 고객에 한하여 사전 연락 없이 취소될 수 있습니다.</li>
          </ul>
          <strong>기타</strong>
          <ul class="list_num">
            <li><span>1</span> N+N 제품에 대한 부분 반품 불가합니다.</li>
            <li><span>2</span> 교차 구매 여부는 프로모션에 따라 상이할 수 있습니다.</li>
            <li><span>3</span> 온라인 쇼핑몰 및 오프라인 매장 재고에 따라 판매되는 종류가 다를 수 있습니다.</li>
            <li><span>4</span> 준비된 수량 소진 시에는 사전 예고없이 종료될 수 있습니다.</li>
            <li><span>5</span> 당사 사정에 따라 사전 예고없이 비슷한 혹은 더 나은 수준의 혜택으로 대체 변경 될 수 있습니다.</li>
            <li><span>6</span> 행사 제외 매장 : 면세점, 제주하우스 등</li>
          </ul>
        </div>
        <div class="mdWarning">
          <h4>그 외 이용안내</h4>
          <ul class="list_dot">
            <li>이니스프리 임직원샵은 사내 임직원 전용 복지몰로서 비정상 유통 행위시(유출시) 사규에 의해 징계를 받을 수 있습니다. </li>
            <li>비정상 유통이 발생하지 않도록 임직원 여러분의 많은 협조 당부 드립니다.</li>
            <li>임직원샵 메뉴에서 판매되는 특가 상품은 제조년월이 1년 이상 경과한 구형 제품일 수 있으며, 60~80% 할인된 가격으로 판매합니다.</li>
            <li>임직원샵 메뉴에 등록되지 않은 이니스프리의 일부 품목에 대해서는 임직원 40% 할인이 적용됩니다.</li>
            <li>P포인트 추가 할인은 적용할 수 없습니다. 임직원 여러분들의 양해 부탁드립니다.</li>
            <li>임직원샵 메뉴에 있는 제품은 매월 40만원 한도 내에서 구매할 수 있습니다. </li>
            <li>주문 건 중 임직원샵과 일반 상품을 함께 추가하시는 경우 임직원샵 상품은 별도 배송됨을 안내드립니다.(합배송은 불가능합니다.)</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>
<script setup>
import { sample_goods } from '~/test/data/publish/dummyData'
import { modal } from '~/assets/js/common-ui'

definePageMeta({
  layout:'mo-category'
})

onMounted(() => {})
</script>
<style lang="scss" scoped>
.staff_wrap {
  margin: 0 -20px;
  .staffVisual {
    height: 25rem;
    padding:4rem 0 0 2.1rem;
    letter-spacing: -0.01em;
    background: url('/_nuxt/public/images/sam/bg_staff_visual.png') no-repeat center;
    background-size: cover;
    >span {
      padding: 0.2rem 0.5rem;
      color:#fff;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4rem;
      background:#000;
      display: inline-block;
    }
    >div {
      margin-top: 1.3rem;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.6rem;
      color: #000;
      span {
        display: block;
        margin-top: 0.5rem;
        font-weight: 500;
        font-size: 1.2rem;
        line-height:1.6rem;
        color: #888;
      }
    }
    >button {
      height:auto;
      margin-top:3rem;
      background:none;
      display: flex;
      align-items: center;
      :deep(em) {
        padding:0;
        color: #000;
        font-size: 1.3rem;
        font-weight: 500;
        line-height:1.6rem;
        letter-spacing:-0.01em;
        font-family:'Pretendard';
      }
      &:before {
        display: inline-block;
        content: "";
        width: 16px;
        height: 16px;
        margin-right: 0.3rem;
        background-image: url('~/assets/mo_images/common/icon_split.png');
        background-repeat:no-repeat;
        background-size: 250px auto;
        background-position:-210px -20px;
      }
    }
  }
}

.goods_list {
  margin:0;
  gap:4rem 0.3rem;
  justify-content:space-between;
  > li {
    width:16.5rem;
    padding:0;
  }
}

.modal_wrap {
  &#modal_sort {
    .modal_container {
      border-top-left-radius: 20px 20px;
      border-top-right-radius: 20px 20px;
      .modal_header {
        width: 100%;
        height: 29.4px;
        padding: 0;
        border-bottom: 0;
        position: relative;
        .btn_close {
          top: 50%;
          right: 50%;
          transform: translate(-50%, -50%);
          &::before {
            width: 67px;
            height: 5px;
            border-radius: 100px;
            border-top: 0;
            background-color: #dddddd;
            position: absolute;
            transform: rotate(0deg);
          }
          &::after {
            display: none;
          }
        }
      }
      .modal_content {
        padding: 0;
        height: calc(100% - 29.4px);
        overflow-y: auto;
        div {
          ul {
            li {
              padding: 16px 28px;
              border-bottom: 1px solid #f5f5f5;
              &:last-of-type {
                border-bottom: 0;
              }
              &.active {
                display: flex;
                align-items: center;
                justify-content: space-between;
                &::after {
                  content: '';
                  width: 22.4px;
                  height: 22.4px;
                  background-image: url('~/assets/images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 250px;
                  background-position: -203px -94px;
                  display: inline-block;
                }
                a {
                  color: #00bc70;
                  font-weight: 700;
                }
              }
              a {
                color: #000000;
                font-weight: 300;
                font-size: 16px;
                line-height: 17.5px;
                letter-spacing: -0.14px;
              }
            }
          }
        }
      }
      .modal_footer {
      }
    }
  }
  &#modal_search {
    .modal_container {
      .modal_header {
      }
      .modal_contnet {
      }
      .modal_footer {
      }
    }
  }
  &#modal_staff {
    .modal_container {
      width:100%;
      height:100%;
      max-height:100%;
      .modal_header {
        h2 {
          font-size:18px;
          font-weight:500;
        }
      }
      .modal_content {
        padding: 30px 20px;
        .mdWarning {
          &:last-child {
            margin-top:30px;
          }
          h4 {
            font-size:16px;
            font-weight:500;
          }
          strong {
            margin-top:15px;
            font-size:12px;
            font-weight:600;
            color:#666;
            display:block;
          }
          .list_num {
            margin-top:10px;
            li {
              margin-top:5px;
              color:#888;
              font-size:12px;
              line-height:16px;
              letter-spacing: -0.12px;
              display:flex;
              gap:6px;
              >:first-child {
                width:8px;
              }
            }
          }
          .list_dot {
            margin-top:15px;
            li {
              margin-top:10px;
              padding-left:6px;
              color:#666;
              font-size:13px;
              line-height:20px;
              letter-spacing: -0.14px;
              position:relative;
              &:before {
                content: '';
                width: 2px;
                height: 2px;
                background: #666;
                display: inline-block;
                position:absolute;
                top:6px;
                left:0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
