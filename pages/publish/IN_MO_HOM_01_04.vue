<template>
  <div class="inner title_wrap_inner">
      <div class="tab_scroll_wrap">
        <Tabs tabType="type_02" :item="[{txt:'립 ~50%'},{txt:'마스크팩~50%'},{txt:'마스크팩~50%'},{txt:'마스크팩~50%'},{txt:'마스크팩~50%'},{txt:'마스크팩~50%'}]"  :tabidx="0" />
        <label for="skin1" class="setFilter_sample">
          <input id="skin1" type="checkbox" name="typArr" value="FB" alt="주름/탄력"><span @click="setFilter($event)">혜택</span>
        </label>
      </div>
  </div>
  <template  v-for="(item, idx) in sample_data" :key="idx">
    <!-- title washed -->
    <div class="sub_title_wrap">
      <div>
        <h3>{{ item.sub_title }}
          <Icons class="tooltip" txt="툴팁" @click="modal.open('sample_01', 'alert');" />
        </h3>
        <p class="explain">{{item.desc}}</p>
      </div>
    </div>
    <!-- //title washed -->

    <div class="inner">
      <div class="timer_wrap" v-if="item.date">
          <div class="num">
              <span id="prom_day">{{item.date.day}}</span>
          </div>
          <span class="unit">일</span>
          <div class="num">
              <span id="prom_hh">{{item.date.hour}}</span>
          </div>
          <span class="unit">시</span>
          <div class="num">
              <span id="prom_mm">{{item.date.min}}</span>
          </div>
          <span class="unit">분</span>
          <div class="num">
              <span id="prom_ss">{{item.date.sec}}</span>
          </div>
          <span class="unit">초</span>
      </div>

      <div class="list_wrap">
        <ul class="goods_list">
            <li v-for="(item, idx) in sample_goods" :key="idx" >
                <GoodsItem :item="item" :link="item.link" class="type_cart"/>
            </li>
        </ul>
      </div>
    </div>
    <hr>
  </template>

  <div class="sub_title_wrap">
    <div>
      <h3>이니스프리 혜택 모음
        <Icons class="tooltip" txt="툴팁" @click="modal.open('sample_01', 'alert');" />
      </h3>
    </div>
  </div>
  <div class="inner benefis">
    <div class="list_wrap">
      <ul class="goods_list division_02">
          <li v-for="(item, idx) in mo_benefit_goods" :key="idx" >
              <GoodsItem :item="item" :link="item.link" class="type_cart"/>
          </li>
      </ul>
    </div>
  </div>

  <!-- tooltip modal -->
  <div class="modal_wrap" id="sample_01">
    <div class="modal_container">
        <div class="modal_header">
            <h2>프로모션 제품 구매시 유의사항</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <div>
              <p>동일 제품 및 교차 구매 / 기간 내 최대 10개 구매 가능</p>
              <span>기간 : 3/14(목) - 3/31(일) 23:59:00까지</span>
          </div>
        </div>
        <div class="modal_footer">
            <Button txt="확인" class="btn_ confirm"/>
        </div>

    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //tooltip modal -->


  <div class="modal_wrap" id="giveaway_01">
    <div class="modal_container">
        <div class="modal_header">
            <h2>증정품안내</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <dl>
            <dt>
              <img src="/_nuxt/assets/images/sam/giveaway_01.png">
            </dt>
            <dd>
              <p>제주 루트 에너지 마스크[당근] 5매 세트</p>
              <em>24.3.25 ~ 24.3.31</em>
              <span>1개 구매시 1개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/_nuxt/assets/images/sam/giveaway_02.png">
            </dt>
            <dd>
              <p>비타C 세럼 럭키 박스 (30ml + 랜덤기프트)</p>
              <em>23.4.11</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/_nuxt/assets/images/sam/giveaway_03.png">
            </dt>
            <dd>
              <p>레티놀 시카 앰플 포커싱 패치 1ea / 9patches</p>
              <em>24.2.29 ~ 24.3.31</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" id="cart_alert_01">
      <div class="modal_container">
          <div class="modal_header">
              <button class="btn_close" @click="modal.close(this);">닫기</button>
          </div>
          <div class="modal_content">
              <h2>장바구니담기가 완료 되었습니다.</h2>
              <h3>프로모션 제품 입니다!!</h3>
              <p>
                <span>5개</span>더 담으면 <strong>50%</strong>할인 (3/14 ~ 31까지)
              </p>
          </div>
          <div class="modal_footer">
              <Button txt="장바구니가기" />
              <Button txt="제품 더 담기" class="btn_ confirm" />
          </div>
      </div>
      <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" id="cart_alert_02">
      <div class="modal_container">
          <div class="modal_header">
              <button class="btn_close" @click="modal.close(this);">닫기</button>
          </div>
          <div class="modal_content">
            <h2>장바구니담기가 완료 되었습니다.</h2>
            <h3>프로모션 제품 입니다!!</h3>
              <p>
                <span>1개</span>더 담으면 <strong>30%</strong>할인 or
              </p>
              <p>
                <span>2개</span>더 담으면 <strong>50%</strong>할인 (3/14 ~ 31까지)
              </p>
          </div>
          <div class="modal_footer">
              <Button txt="장바구니가기" />
              <Button txt="제품 더 담기" class="btn_ confirm" />
          </div>
      </div>
      <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" id="option_pop">
      <div class="modal_container">
          <div class="modal_header">
              <h2>알림</h2>
              <button class="btn_close" @click="modal.close(this);">닫기</button>
          </div>
          <div class="modal_content">
            옵션을 선택해주세요
          </div>
          <div class="modal_footer">
              <Button txt="확인" class="btn_ confirm" />
          </div>
      </div>
      <div class="overlay" @click="modal.close(this);"></div>
  </div>

</template>

<script setup>
import { sample_goods } from '~/test/data/publish/dummyData'
import { modal } from '~/assets/js/common-ui'
import {sample_data} from '~/test/data/publish/dummyData.js'
import {mo_benefit_goods} from '~/test/data/publish/dummyData.js'
import { setFilter } from '~/assets/js/common-ui.js'
import { walkUpBindingElementsAndPatterns } from 'typescript'

definePageMeta({
layout:'mo-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
    link: {
        type: String,
        default: '#none'
    }
});

onMounted(() => {
  const header = document.querySelector('header');
  console.log(header)
})


</script>

<style lang="scss" scoped>
hr {
  margin-left: -2.1rem;
  margin-right: -2.1rem;
  border: 2px solid #eee;
}
.sub_title_wrap {
  > div {
    h3 {
      font-size:1.8rem;
      font-weight:600;
    }
    p.explain {
      font-size:1.3rem;
      font-weight:400;
    }
  }
}
.inner {
  &.title_wrap_inner {
    height:100%;
    margin-right:-2.1rem;
    margin-left:-2.1rem;
    padding: 1.6rem 2.1rem;;
    background: #fff;
    box-shadow: 0px 15px 10px -15px rgba(0,0,0,0.15);
    position:sticky;
    top:100px;
    z-index:10;

      .tab_scroll_wrap {
      height:100%;
      display:flex;
      align-items:center;
      gap:1.0rem;
      ::v-deep .tab_wrap {
        width:80%;
        overflow-x:auto;
        &::-webkit-scrollbar{
        display:none;
        }
        .type_02 {
          margin-left: -9px !important;
        }
        .benefit {
          > * {
                border-color:transparent !important;
                background-color:#fff !important;
            }
          }

      }
        .setFilter_sample {
        padding-left: 0;
        display: inline-block;
        cursor: pointer;

        input {
          position: absolute;
          z-indeX: -1;
          opacity: 0;
        }

        span {
          padding: 6px 14px;
          color: #00BC70;
          font-weight: 600;
          font-size: 14px;
          border:2px solid #00BC70;
          border-radius:15px;
          line-height: 1.29em;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;

          &.active {
            color: #FFFFFF;
            background: #00BC70;
          }
        }
      }
    }
  }
  &.benefis {
    border-bottom:0;
  }
  em {
      padding:10px 0 15px;
      color:#999;
      font-size:12px;
      display:inline-block;
  }
  .timer_wrap {
      display:flex;
      align-items:center;
      .num {
          width: 42px;
          height: 48px;
          background-image: url('~/assets/images/common/icon_split.png');
          background-repeat:no-repeat;
          background-size:250px;
          background-position:-117px -142px;
          position:relative;
          display: flex;
          align-items: center;
          justify-content: center;
          &::after {
              content: '';
              width: 100%;
              height: 1px;
              background: #1D1D1D;
              position: absolute;
              left: 1px;
              top: 24px;
              z-index: 2;
              display: block;
              opacity: 0.5;
          }
          span {
              color: #FFFFFF;
              font-size: 18px;
              line-height: 0.83em;
              letter-spacing: -0.01em;
              position: relative;
              z-index: 1;
          }
      }
      .unit {
          padding: 0 10px;
          color: #000000;
          font-size: 14px;
          line-height: 1.33em;
          letter-spacing: -0.01em;
          display: block;
      }
  }
        > button {
            margin-top:20px;
            font-size:12px;
            text-decoration:underline;
        }

    >.benefits_wrap {
        padding:20px 0;
        h3 {
          margin-bottom:40px;
        }
    }
    .modal_wrap.alert {
        .modal_container  {
           max-width:calc(100vw - 60px);
           .modal_header {
                border-bottom:0;
                padding:20px 20px 10px;
                h2 {
                    width: calc(100% - 40px);
                    margin-top:20px;
                    font-size:18px;
                }
                .btn_close {
                    width: 18px;
                    height: 18px;
                }
            }
            .modal_content {
                padding:10px 20px 30px;
                > div {
                    > * + * {
                        margin-top:8px;
                    }
                     p {
                        color:#666;;
                        font-size:13px;
                     }
                }
            }
        }
    }
    .goods_list {
      margin-left: -1rem;
      margin-top:2.0rem;
      &.division_02 {
        margin-left: -1rem;
        margin-right:-1rem;
        > li {
          width:48%;
          ::v-deep .goods_item  {
            .img_wrap {
              a {
                span.thumb {
                  width:16.5rem !important;
                  height:22.0rem !important;
                }
              }
            }
          }
        }
      }
        > li {
            width:33.333%;
            padding-top:0 !important;
            padding-left:1.0rem !important;
        }
    }

}

.modal_wrap.bottom {
  &#giveaway_01 {
    ::v-deep .modal_container {
      .modal_header {
        .btn_close {
          width: 24px;
          height: 24px;
          font-size: 0;
          background-color: transparent;
          position: absolute;
          top: 20px !important;
          left:90% !important;
          transform: translate(0,0);
          &::before, &::after{
            width: 100%;
            border-top: 1px solid #222;
            border-radius:0;
            background:none;
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            display: block;
          }
          &::before {
            transform: rotate(45deg);
          }
          &::after {
            transform: rotate(-45deg);
          }
        }
      }
      .modal_content {
        padding:2.0rem 2.1rem;
        border-top:1px solid #eee;
        > * + * {
          margin-top:1.0rem;
        }
        dl {
          border:1px solid #F5F5F5;
          display:flex;
          dt {
            width:8.8rem;
            height:11.7rem;

          }
          dd {
            width:20.4rem;
            padding:1.8rem 0 1.8rem 2.1rem;
            display:flex;
            flex-direction:column;
            p {
              font-size:1.3rem;
            }
            em {
              margin-top:0.5rem;
              color:#666;
              font-size:1.2rem;
            }
            span {
              margin-top:auto;
              margin-bottom:0;
              font-size:1.3rem;
            }
          }
        }
      }
    }
  }
}
.modal_wrap {
  &[id^="cart_alert_"]{
    .modal_container {
      .modal_header {
        padding:10px;
        border-bottom:0;
      }
      .modal_content {
        h2 {
          margin-bottom:0.6rem;
          color:#00BC70;
          font-size:1.3rem;
          font-weight:400;
        }
        h3 {
          margin-bottom:1.0rem;
          font-size:1.8rem;
          font-weight:600;
        }
        p {
          + p {
            margin-top:0.5rem;
          }
          color:#666;
          span, strong {
            color:#00BC70;
            font-size:1.3rem;
            font-weight:700;
          }
          strong {
            color:#666 !important;
          }
        }
      }
    }
  }
  &#sample_01 {
    .modal_container {
      .modal_header {
        border-bottom:0;
        h2 {
          font-size:1.8rem;;
        }
      }
      .modal_content {
        padding:2.0rem;
        p {
          font-size:1.3rem;
        }
        span {
          margin-top:0.8rem;
          color:#666;
          font-size:1.3rem;
          display:inline-block;
        }
      }
    }
  }
}

</style>
