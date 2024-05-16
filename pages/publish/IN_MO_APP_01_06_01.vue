<template>
  <div class="sample_market_top">
    <h2>이니스프리 <em>샘플</em>마켓</h2>
    <p>오직 APP에서만 신청 가능한 이니스프리 샘플 마켓! 보유 샘플포인트로 자유롭게 샘플 신청해보세요~</p>
    <p class="date">신청 가능 기간 : 24.03.01 (수) ~ 24.04.31 (수)</p>

    <div class="point_box">
      <div>보유샘플포인트 <span class="point">10</span></div>
      <div>차감샘플포인트 <span class="point">05</span></div>
    </div>
  </div>

  <div class="inner">
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods.slice(1,2)" :key="idx">
          <div class="goods_item checked" :class="item.status"> <!-- 선택된 샘플일 경우 checked 클래스 추가 -->
            <div class="img_wrap">
              <span class="point">1 P</span>
              <a :href="props.link">
                <span class="thumb">
                  <em><img :src="item.img" /></em>
                </span>
              </a>
            </div>
            <div class="cont">
              <Hash v-if="item.hash" :item="item.hash" />
              <p class="name">{{ item.name }}</p>
              <p class="status_txt">
                <span class="limit em">최대 선택 3개</span>
              </p>
              <Quantity quanity="0" />
            </div>
          </div>
        </li>

        <li v-for="(item, idx) in sample_goods.slice(0,1)" :key="idx"> <!-- 품절일 경우(.sold_out)-->
          <div class="goods_item" :class="item.status">
            <div class="img_wrap">
              <span class="point">1 P</span>
              <a :href="props.link">
                <span class="thumb">
                  <em><img :src="item.img" /></em>
                </span>
              </a>
            </div>
            <div class="cont">
              <Hash v-if="item.hash" :item="item.hash" />
              <p class="name">{{ item.name }}</p>
              <p class="status_txt">
                <span class="em">일시품절</span>
              </p>
              <Quantity quanity="0" />
            </div>
          </div>
        </li>

        <li v-for="(item, idx) in sample_goods.slice(0,6)" :key="idx">
          <div class="goods_item" :class="item.status">
            <div class="img_wrap">
              <span class="point">3 P</span>
              <a :href="props.link">
                <span class="thumb">
                  <em><img :src="item.img" /></em>
                </span>
              </a>
            </div>
            <div class="cont">
              <Hash v-if="item.hash" :item="item.hash" />
              <p class="name">{{ item.name }}</p>
              <p class="status_txt">
                <span class="em">일시품절</span>
                <span class="limit">최대 선택 3개</span>
                <span class="limit em">최대 선택 3개</span>
              </p>
              <Quantity quanity="0" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <section>
    <p class="list_tit">샘플마켓 유의사항</p>
    <ul class="bul_list star">
      <li>샘플마켓은 이니스프리 공식온라인몰 회원만 신청 가능하며, ID기준 신청기간 내 1회만 가능합니다. </li>
      <li>샘플은 신청 가능한 수량 내에서 중복으로 선택 가능합니다. </li>
      <li>샘플은 이니스프리 공식몰 회원만 APP에서 신청 가능한 서비스 입니다. </li>
      <li>샘플마켓 샘플은 0원이며 단독 구매 시 배송비 2,500원이 별도 부과 됩니다. (보유 뷰티포인트가 2,500P 이상일 경우 전액 뷰티포인트 결제 가능 / 무료배송쿠폰 사용불가) </li>
      <li>2만원 이상 구매 시 배송비 무료 기준에 의해 배송비 0원으로 샘플을 신청 하실 수 있습니다. </li>
      <li><em>배송완료 이후 30일 이내에 리뷰를 작성 하실 수 있습니다.<br>본품리뷰와 달리 샘플리뷰는 작성하더라도 뷰티포인트가 따로 적립 되지 않습니다.</em></li>
      <li>샘플마켓에 진행 시 보유 샘플포인트 내에서 구매 가능하며, 보유 샘플포인트를 모두 소진 하지 않아도 신청 가능합니다. </li>
      <li>신청한 샘플내역은 [마이페이지>주문내역] 상세에서 확인 가능합니다. </li>
      <li>APP에서 담은 샘플마켓 샘플은 PC와 모바일웹 장바구니에서 수량수정 및 삭제 후 결제가 가능합니다. (샘플신청은APP에서만 가능) </li>
      <li>샘플마켓에서 신청한 샘플은 취소/반품/교환이 불가하며, 문의사항은 [마이페이지>1:1문의 또는 고객센터 080-380-0114]로 문의 주시기바랍니다.</li>
    </ul>
  </section>

  <div class="btn_wrap">
    <Button class="btn_big" txt="장바구니 담기" />
    <Button class="btn_big confirm" txt="바로 신청하기" />
  </div>
</template>

<script setup>
import { sample_goods } from '~/test/data/publish/dummyData'
definePageMeta({
  layout:'mo-default'
});
const props = defineProps({
    link: {
        type: String,
        default: '#none'
    }
})

</script>

<style lang="scss" scoped>
.sample_market_top {
  padding: 3rem 2.1rem;
  background: url("~/assets/mo_images/common/bg_top_sample_market.png");
  background-size: cover;
  letter-spacing: -.1rem;

  h2 {
    margin-bottom: 1.2rem;
    font-size: 2.8rem;
    line-height: 3.6rem;
    color: #fff;

    em {
      color: #ffff82;
    }
  }

  p {
    width: 20rem;
    color: #fff;
    font-size: 1.4rem;
    line-height: 1.8rem;

    &.date {
      width: 100%;
      margin-top: 1.6rem;
    }
  }

  .point_box {
    margin-top: 3.8rem;
    padding: 1.5rem 2.5rem;
    background-color: #000;
    border-radius: .5rem;
    color: #fff;
    display: flex;

    & > div {
      flex: 1;

      & + div {
        margin-left: 2.5rem;
        padding-left: 2.5rem;
        border-left: .1rem solid #fff;
      }

      .point {
        width: 2.4rem;
        height: 2.4rem;
        margin-left: .8rem;
        text-align: center;
        line-height: 2.4rem;
        background-color: #00BC70;
        border-radius: 1.2rem;
        display: inline-block;
      }
    }
  }
}

.inner {
  padding:3rem 2.1rem;

  .list_wrap {
    .goods_list {
      margin: 0;
      justify-content: space-between;
      gap: 4rem 0;

      li {
        width: 16.5rem;
        padding: 0;

        :deep(.goods_item) {
          &.sold_out  {
            .count_wrap {
              display: none;
            }
          }

          &.checked {
            .img_wrap {
              a {
                position:relative;

                &:before {
                  content:'';
                  background:url('~/assets/images/ui/overlay_checked.png') center / 10rem 10rem no-repeat;
                  position:absolute;
                  top:0;
                  right:0;
                  bottom:0;
                  left:0;
                  z-index:1;
                }
              }
            }
          }

          .point {
            padding: .4rem .5rem;
            font-size: 1.2rem;
            color: #fff;
            background-color: #000;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
          }

          .cont {
            margin-top: 1.5rem;
            font-size: 1.4rem;

            .hash {
              button {
                padding: 0;
                font-size: 1.2rem;
                line-height: 1.6rem;
                background-color: transparent;
              }
            }

            .name {
              margin-top: .5rem;
            }

            .status_txt {
              margin: 1.5rem 0;

              & > span {
                color: #999;
                font-size: 1.2rem;
                display: block;
              }

              .limit {
                padding-left: 1.7rem;
                position:relative;

                &:before,
                &:after {
                  content: "";
                  width: 1px;
                  height: 8px;
                  background-color: #999;
                  display: inline-block;
                  position: absolute;
                  left: .4rem;
                  top: 50%;
                  transform: translateY(-50%);
                }

                &:after {
                  left: .4rem;
                  transform: translateY(-50%) rotate(90deg);
                }

                &.em {
                  &:before {
                    width: .6rem;
                    height: .9rem;
                    border-right: .1rem solid #ff0000;
                    border-bottom: .1rem solid #ff0000;
                    background-color: transparent;
                    transform: translateY(-60%) rotate(45deg);
                  }

                  &:after {
                    content: none;
                  }
                }
              }

              .em {
                color: #ff0000;
                font-weight: 600;
              }
            }

            .count_wrap {
              width: 10rem;
              button {
                width: 3rem;
                height: 3rem;
                font-size: 2rem;
              }

              .label_wrap input[type=text] {
                height: 3rem;
              }
            }
          }
        }
      }
    }
  }
}

section {
  padding: 3rem 2.1rem;
  border-top: .5rem solid #f5f5f5;

  .list_tit {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
  }

  .bul_list {
    li {
      font-size: 1.2rem;
      color: #888;
      line-height: 1.6rem;

      &:before {
        top: .23rem;
      }

      & + li {
        margin-top: 1rem;
      }

      em {
        color: #00BC70;
      }
    }
  }
}

.btn_wrap {
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9;
  button {
    flex: 1
  }
}
</style>
