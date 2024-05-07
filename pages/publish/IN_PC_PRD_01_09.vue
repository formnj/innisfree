<template>
  <div class="title_wrap" :data-layout="props.layoutType"></div>

  <div class="prod_detail_wrap">
    <!-- 상세 상단 -->
    <div class="prod_detail_top">
      <!-- 상품 이미지, 결제/카드/이벤트 영역 -->
      <div class="prod_swiper_wrap">
        <productDetailSwiper /> <!-- 상품 이미지 슬라이드 -->

        <!-- 결제/카드/혜택, 이벤트 -->
        <div class="list_wrap">
          <dl class="benefit_list txt">
            <dt>결제/카드 헤택</dt>
            <dd>
              <ul>
                <li><a href="#none">멤버십세일 결제혜택 모음 SAVE 5,000!!</a></li>
                <li><a href="#none">KB Pay 3만원 결제 시, 최대 1만원 혜택</a></li>
                <li><a href="#none">현대카드 M포인트 결제금액 20% 할인</a></li>
              </ul>
            </dd>
          </dl>

          <dl class="benefit_list txt">
            <dt>관련 이벤트</dt>
            <dd>
              <ul>
                <li><a href="#none">24.4.11~24.4.13<span class="title">~50% 멤버십세일 최대 6,000원 추가할인!</span></a></li>
                <li><a href="#none">24.4.11~24.4.13<span class="title">그린티 씨드 세럼 대용량 [지구의달 에디션] 출시!</span></a></li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
      <!-- //상품 이미지, 결제/카드/이벤트 영역 -->

      <div class="prod_detail_info">
        <!-- 상품 정보 -->
        <productDetailInfo />
        <div class="list_wrap">
          <productDetailBenefit />
          <dl class="benefit_list">
            <dt>뷰티포인트</dt>
            <dd>
              결제 금액의 기본 1%, 추가 700원 적립
              <button type="button" class="tooltip" @mouseover="modal.open('modal_beauty_point_tip', 'layer'); modalPositioning();">뷰티포인트 안내 자세히 보기</button>
              <div id="modal_beauty_point_tip" class="modal_wrap"><!-- 뷰티포인트 적립안내 툴팁 -->
                <div class="modal_container">
                  <div class="modal_header">
                    <button class="btn_close" @click="modal.close(this);">툴팁 닫기</button>
                  </div>
                  <div class="modal_content">
                    <h3>뷰티포인트 적립안내</h3>
                    <p>
                      아모레퍼시픽 뷰티포인트 통합회원은 회원 등급과 상관없이<br>(뷰티포인트 적립 대상상품에 한하여) 포인트가 적립됩니다.<br><br>
                      <em>포인트 적립률은 제품별, 브랜드별로 상이하며,<br>쿠폰/뷰티포인트 사용 조건과 금액에 따라 상이할 수 있습니다.</em>
                    </p>
                  </div>
                </div>
                <div class="overlay" @click="modal.close(this);"></div>
              </div><!-- //뷰티포인트 적립안내 툴팁 -->
            </dd>
            <dt>배송비</dt>
            <dd>무료배송</dd>
          </dl>
        </div>
        <!-- 상품 정보 -->

        <!-- 상품 옵션 및 가격 -->
        <div class="prod_option">
          <!-- 단일 옵션 수량 -->
          <dl class="quantity_control">
            <dt>
              <span class="name">수량</span>
              <div class="count">
                <button type="button" class="dec">수량 빼기</button>
                <input id="qty" type="text" value="1" class="ipt_qty">
                <button type="button" class="inc">수량 더하기</button>
              </div>
            </dt>
            <dd>
              <div class="price"><em>56,000</em>원</div>
            </dd>
          </dl>
          <!-- //단일 옵션 수량 -->

          <!-- 옵션 -->
          <div class="option">
            <Inputs _type="checkbox" _text="품절상품 제외" />
            <div class="select_wrap">
              <ProdSelectbox
              :options="[
                { val: 'op1', name: 'op', txt: '1호 샐먼 베이지' },
                { val: 'op2', name: 'op', txt: '2호 피치 베이지' }
              ]" />
            </div>
          </div>
          <!-- //옵션 -->
        </div>
        <div class="totle_price">
          합계<span class="price"><em>5,6000</em>원</span>
        </div>
        <!-- //상품 옵션 및 가격 -->

        <!-- 구매 영역 -->
        <div class="btn_wrap">
          <div class="share_wrap">
            <button class="btn_share" @click="modal.open('modal_share', 'layer')"></button>
            <!-- 공유 모달 -->
            <div id="modal_share" class="modal_wrap">
              <div class="modal_container">
                <div class="modal_header">
                  <h2>공유하기</h2>
                  <button class="btn_close" @click="modal.close(this);">닫기</button>
                </div>
                <div class="modal_content">
                  <div class="img">
                    <a href="#none"><img src="/_nuxt/public/images/sam/icon_sns_facebook.png"></a>
                    <a href="#none"><img src="/_nuxt/public/images/sam/icon_share_url.png"></a>
                  </div>
                </div>
              </div>
              <div class="overlay" @click="modal.close(this);"></div>
            </div>
          </div>
          <button type="button" class="btn_like">찜하기</button>
          <Button class="btn_big" txt="장바구니" />
          <Button class="btn_big buy" txt="바로구매" />
        </div>
        <!-- //구매 영역 -->

        <!-- 네이버 페이 영역 -->
        <div class="naver_pay">
          <div class="txt_area">
            네이버페이 결제 시 회원혜택을 받으실 수 없습니다.
            <button type="button" class="tooltip" @mouseover="modal.open('modal_naver_pay_tip', 'layer'); modalPositioning();">네이버페이 결제 안내 자세히 보기</button>
            <div id="modal_naver_pay_tip" class="modal_wrap"><!-- 네이버 결제 안내 툴팁 -->
              <div class="modal_container">
                <div class="modal_header">
                  <button class="btn_close" @click="modal.close(this);">툴팁 닫기</button>
                </div>
                <div class="modal_content">
                  <h3>네이버페이 결제 안내</h3>
                  <ul class="bul_list">
                    <li>
                      네이버페이를 통해 구매하시면 쿠폰할인, <br>
                      모든 사은품증정(구매금액대 사은품, 지급 사은품) <br>
                      및 뷰티포인트 적립 등의 혜택이 제외됩니다.
                    </li>
                    <li>
                      회원전용 제품은 네이버페이를 통해<br> 구매가 불가능 합니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="overlay" @click="modal.close(this);"></div>
            </div><!-- //네이버 결제 안내 툴팁 -->
          </div>

          <div class="naver_area">
            <div style="text-align:center; background-color:#ddd; line-height: 88px;">네이버 페이</div><!-- 개발시 삭제 -->
          </div>
          <!-- //네이버 페이 영역 -->

        </div>
      </div>
    </div>
    <!-- //상세 상단 -->

    <!-- 원포인트 -->
    <ProductDetailOnepoint />
    <!-- //원포인트 -->

    <!-- 상세 탭 / 컨텐츠 -->
    <div class="prod_detail_cont">

      <productDetailTab /> <!-- 상세 탭 -->

      <div class="tab_contents">  <!-- 상세 탭 컨텐츠 -->
        <!-- 상세 정보 -->
        <div class="tab_cont">
          <ProductDetailConts />
        </div>
        <!-- //상세 정보 -->

        <!-- 리뷰 -->
        <div class="tab_cont review" style="display:block;">

          <ProductReviewSummary /> <!-- 리뷰 요약 -->

          <!-- 리뷰 옵션 선택 -->
          <div class="review_option">
            <div class="sort">
              <button type="button" class="active" @click="setFilter">전체<span>195</span></button>
              <button type="button" @click="setFilter">포토리뷰<span>127</span></button>
              <button type="button" @click="setFilter">한달사용<span>52</span></button>
              <button type="button" @click="setFilter">체험단<span>0</span></button>
              <button type="button" @click="setFilter">샘플<span>10</span></button>
            </div>

            <div class="sort">
              <span>
                <button type="button" @click="setFilter">추천순</button>
                <button type="button" class="tooltip"
                  @click="modal.open('modal_review_standard', 'layer'); modalPositioning();">추천순 리뷰 기준 자세히
                  보기</button>
                <div id="modal_review_standard" class="modal_wrap"><!-- 추천순 리뷰 기준 툴팁 -->
                  <div class="modal_container">
                    <div class="modal_header">
                      <button class="btn_close" @click="modal.close(this);">툴팁 닫기</button>
                    </div>
                    <div class="modal_content">
                      <h3>뷰티포인트 적립안내</h3>
                      <p>
                        아모레퍼시픽 뷰티포인트 통합회원은 회원 등급과 상관없이<br>(뷰티포인트 적립 대상상품에 한하여) 포인트가 적립됩니다.<br><br>
                        <em>포인트 적립률은 제품별, 브랜드별로 상이하며,<br>쿠폰/뷰티포인트 사용 조건과 금액에 따라 상이할 수 있습니다.</em>
                      </p>
                    </div>
                  </div>
                  <div class="overlay" @click="modal.close(this);"></div>
                </div><!-- //추천순 리뷰 기준 툴팁 -->
              </span>
              <button type="button" @click="setFilter">최신순</button>
              <button type="button" @click="setFilter">평점순</button>
              <div class="dropdown">
                <button type="button" class="btn_dropdown" @click="DropDown()">옵션별</button>
                <ul class="prod_select_list">
                  <li>
                    <input id="rv_op00" type="radio" name="v_op"><label for="rv_op00">전체</label>
                    <input id="rv_op01" type="radio" name="v_op"><label for="rv_op01">1호 샐먼 베이지</label>
                    <input id="rv_op02" type="radio" name="v_op"><label for="rv_op02">2호 피치 베이지</label>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div class="review_option">
            <div class="custom">
              <Inputs _type="checkbox" :isswitch="true" _text="프로필 맞춤" /> <span class="txt" style="font-size: 14px; color: #999;">설정된 피부 프로필 없음</span>
            </div>
            <div class="filter">
              <button type="button" @click="modal.open('피부속성필터, full')">피부 속성 필터</button>
            </div>
          </div>
          <!-- //리뷰 옵션 선택 -->

          <!-- 리뷰 리스트 -->
          <div class="review_list_wrap">
            <ul class="review_list">
              <li v-for="(item, idx) in sample_review" :key="idx">
                <div class="review_header">
                  <div class="user_info">
                    <span class="name">{{ item.user }}</span>
                    <span class="age">{{ item.age }}</span>
                    <span class="type">{{ item.type }}</span>
                    <div class="rate">
                      <span class="star_rate">
                        <span class="star_wrap"><span class="star" :style="'width:'+item.rate+'%'">별점</span></span><!-- 별점 : .star의 width에 퍼센테이지로 입력 -->
                      </span>
                    </div>
                    <span class="date">{{ item.date }}</span>
                  </div>
                  <div class="btn_wrap">
                    <button type="button">신고</button>
                    <button type="button">차단하기</button>
                  </div>
                </div>
                <ProductReview :item="item" /> <!-- 리뷰 -->
              </li>
            </ul>
            <div class="paging">
              <div>
                <a href="#none" class="first">처음으로</a>
                <a href="#none">1</a>
                <a href="#none">2</a>
                <a href="#none" class="active">3</a>
                <a href="#none">4</a>
                <a href="#none">5</a>
                <a href="#none" class="last">마지막으로</a>
              </div>
            </div>
          </div>
          <!-- //리뷰 리스트 -->

          <section>
            <h1>이 제품과 같은 라인 <a href="#none" class="btn_link_arrw"><em>노세범</em> 라인</a></h1>
            <div class="swiper_progressbar_wrap">
              <swiper
                :slides-per-view="'auto'"
                :space-between="20"
                :loop="true"
                :auto-height="true"
                :pagination="{
                  type:'progressbar'
                }"
                @swiper="onSwiper"
              >
                <swiper-slide v-for="(item, idx) in sample_goods.slice(0,10)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </swiper-slide>
              </swiper>
              <div class="navigation">
                <button class="swiper-button-prev" @click="swiper_nav.prev"></button>
                <button class="swiper-button-next" @click="swiper_nav.next">Next</button>
              </div>
            </div>
          </section>

        </div>
        <!-- //리뷰 -->

        <div class="tab_cont">유의사항</div>
        <div class="tab_cont">문의</div>
      </div>
      <!-- //상세 컨텐츠 -->
    </div>
  </div>
    <!-- <div class="swiper-notify"><strong>7명의 고객님</strong> 동시에 확인중 <button type="button" class="btn_close">닫기</button></div> -->
</template>

<script setup>
import { modal, setFilter } from '~/assets/js/common-ui'
import { sample_review, sample_goods } from '~/test/data/publish/dummyData'
import SwiperCore, { Navigation, Pagination, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, A11y, Controller]);


definePageMeta({
  layout:'pc-category'
});
const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
});

const modalPositioning = () => {
  const el = event.currentTarget;
  setTimeout(()=> {
    const modalW = el.nextSibling.getElementsByClassName('modal_container')[0].offsetWidth;
    const top = el.offsetTop + el.offsetHeight;
    const left = el.offsetLeft - modalW;
    el.nextSibling.style.cssText="top:"+top+"px; left:"+left+"px;";
  }, 100)
}

const DropDown = () => {
  const el = event.currentTarget;
  const list = el.nextElementSibling;
  list.classList.toggle('active');
}

/* swiper custom navigation */
const setSwiper = ref(null);
const onSwiper = (swiper) => setSwiper.value = swiper;
const swiper_nav = {
  prev: () => {
    setSwiper.value.slidePrev();
  },
  next: () => {
    setSwiper.value.slideNext();
  },
};
/* swiper custom navigation */
</script>

<style lang="scss">
.prod_detail_wrap {
  width: 1320px;
  margin: -60px auto 0;
  padding: 0 20px;

  .prod_detail_top {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;

    .prod_swiper_wrap {
      width: 500px;

      .list_wrap {
        margin: 0 35px;

        .benefit_list.txt {
          padding: 0;
          gap: 10px;
          border-top: 0;
          flex-direction: column;

          dt {
            font-weight: 600;
            color: #000;
          }

          dd {
            a {
              width: auto;
              max-width: 100%;
              padding-right: 21px;
              font-size: 13px;
              line-height: 16px;
              color: #666;
              text-overflow: ellipsis;
              white-space: nowrap;
              vertical-align: top;
              display: inline-block;
              overflow: hidden;
              position: relative;

              &::after {
                content: '';
                width: 12px;
                height: 12px;
                margin-left: 8px;
                background: url('/assets/mo_images/common/icon_split.png') -230px 0px / 250px auto no-repeat;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
              }
            }
          }

          &+.benefit_list {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #eee;
          }
        }
      }
    }

    .prod_detail_info {
      .prod_option {
        padding: 30px 0;
        border-bottom: 1px solid #eee;

        &>*+* {
          margin-top: 30px;
        }

        .option {
          width: 100%;

          label.check {
            font-size: 16px;
            line-height: 20px;
          }

          .select_wrap {
            margin-top: 20px;

          }
        }
      }

      .totle_price {
        padding: 20px 0 30px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .price {
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: -0.18px;
          color: #00BC70;

          em {
            margin: 0 3px 0 10px;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
          }
        }
      }

      .btn_wrap {
        display: flex;

        .share_wrap {
          position: relative;
        }

        button {
          font-size: 16px;
          font-weight: 600;
          flex: 1;
        }

        .btn_share,
        .btn_like {
          width: 60px;
          height: 60px;
          font-size: 0;
          text-align: center;
          background: #333;
          flex: none;

          &:before {
            content: '';
            width: 32px;
            height: 32px;
            vertical-align: middle;
            display: inline-block;
          }
        }

        .btn_share:before {
          background: url('~/assets/images/common/icon_split.png') -180px -60px no-repeat;
        }

        .btn_like:before {
          background: url('~/assets/images/common/icon_split.png') -140px -60px no-repeat;
        }

        .btn_big.buy {
          background-color: #00BC70;
        }
      }
    }

  }

  section {
    padding: 50px 0;
  }

  .modal_wrap.layer {
    .modal_container {
      .modal_header {
        padding: 0;
        border-bottom: 0;

        .btn_close {
          width: 18px;
          height: 18px;
          top: 10px;
          right: 10px;

          &:before,
          &:after {
            border-top: 2px solid #000;
          }
        }
      }
    }

    .modal_content {
      padding: 30px 20px;

      h3 {
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #000;
      }

      p {
        font-size: 13px;
        color: #666;
        line-height: 18px;
        white-space: nowrap;

        em {
          font-weight: 600;
        }
      }
    }

  }

  .tab_cont {
    display: none;
    padding: 60px 0;
  }

  .review_option {
    padding: 22px 0 18px;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;

    button {
      color: #666;
      vertical-align: middle;

      &.active {
        font-weight: 600;
        color: #000;
      }

      span {
        padding-left: 5px;
        font-size: 12px;
        color: #888;
        line-height: 15px;
        vertical-align: middle;
      }
    }

    .type {
      display: flex;
      align-items: center;
    }

    .sort {
      display: flex;
      align-items: center;

      &>* {
        &+*:before {
          content: '';
          width: 1px;
          height: 10px;
          margin: 0 15px;
          vertical-align: middle;
          background-color: #EEE;
          display: inline-block;
        }
      }

      .dropdown {
        display: flex;
        align-items: center;
        position: relative;

        &>button {
          display: flex;
          align-items: center;
          gap: 5px;

          &:after {
            content: '';
            width: 8px;
            height: 8px;
            margin-top: -5px;
            border-bottom: 1px solid #000;
            border-right: 1px solid #000;
            transform: rotate(45deg);
            display: inline-block;
          }
        }

        .prod_select_list {
          width: 170px;
          height: 0px;
          padding: 10px 0;
          background: #fff;
          box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.05);
          position: absolute;
          left: -85px;
          top: 40px;
          z-index: 1;
          overflow: hidden;
          transition: all 0.2s;

          &.active {
            height: auto;
            opacity: 1;
          }

          li {
            input {
              &:checked {
                &+label {
                  background: #fff;
                  color: #00BC70;
                }
              }
            }

            label {
              padding: 15px;
            }
          }
        }
      }
    }

    .custom {
      display: flex;
      align-items: center;

      .txt {
        &:before {
          content: '';
          width: 1px;
          height: 10px;
          margin: 0 15px;
          background-color: #EEEEEE;
          display: inline-block;
        }
      }
    }

    .filter {
      button {
        font-weight: 600;
        color: #000;

        &:after {
          content: '';
          width: 16px;
          height: 16px;
          margin-left: 10px;
          background: url(/_nuxt/assets/images/common/icon_split.png) -130px -60px / 250px auto no-repeat;
          vertical-align: middle;
          display: inline-block;
        }
      }
    }
  }
}

/* 상품 상세 내 공통 사용 */
.bul_list {
  li {
    font-size: 13px;
    color: #666;
  }
}

.naver_pay {
  width: 280px;
  margin: 30px 0 0 auto;

  .txt_area {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.33em;
    color: #999;
  }

  .naver_area {
    width: 100%;
    height: 88px;
    border-top: 2px solid #000;
  }
}

.quantity_control {
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .name {
    display: none;
  }

  .count {
    width: 180px;
    border: 1px solid #eee;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 45px;
      height: 38px;
      background: #fff;
      font-size: 0;
      flex: none;
      position: relative;

      &:before,
      &.inc:after {
        content: '';
        width: 10px;
        height: 1px;
        background-color: #000;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &.inc:after {
        width: 1px;
        height: 10px;
      }
    }

    .ipt_qty {
      width: 24px;
      height: 20px;
      padding: 0;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      color: #000;
      border: none;
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

button.tooltip {
  width: 16px;
  height: 16px;
  margin-left: 6px;
  font-size: 0;
  background: url('~/assets/images/common/icon_split.png') 0px -260px / 250px auto no-repeat;
  vertical-align: middle;
  display: inline-block;
}

.prod_select_list {
  width: 100%;
  max-height: 286px;
  height: 0;
  border: 1px solid #AAA;
  background: #fff;
  overflow-y: auto;
  opacity: 0;
  position: absolute;
  top: 41px;
  left: 0;
  z-index: 1;
  transition: all .2s;

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
      padding: 14px 20px;
      display: block;
      cursor: pointer;
    }
  }
}

.review_list_wrap {
  .review_list {
    &>li {
      padding: 40px 0;
      border-bottom: 1px solid #eee;

      .review_header {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;

        .user_info {
          display: flex;
          align-items: center;

          &>span {
            color: #888;
            display: inline-block;

            &+*:before {
              content: '';
              width: 1px;
              height: 10px;
              margin: 0 10px;
              background-color: #EEE;
              display: inline-block;
            }

            &.name {
              font-weight: 600;
              color: #000;
            }

            &.age {
              color: #000;
            }

            &.date {
              font-weight: 300;
            }
          }
        }

        .btn_wrap {
          display: flex;

          button {
            font-size: 13px;
            color: #999;

            &+button {
              &:before {
                content: '';
                width: 1px;
                height: 10px;
                margin: 0 10px;
                background-color: #EEE;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }

  .paging {
    margin: 60px 0 0;
  }
}

.swiper_progressbar_wrap {
  width: 1280px;
  padding: 30px 0 0;
  margin: 0 auto;
  position: relative;

  .swiper-container {
    .swiper-pagination {
      height: 2px;
      bottom: 0;
      top: unset;
      background: #DDDDDD;

      span {
        background: #000000;
      }
    }

    div[role="button"] {
      &:after {
        color: #000000;
        font-size: 24px;
      }
    }

    .swiper-slide {
      width: 240px;
      // padding-bottom: 61px;
    }
  }

  .navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    button {
      color: #000;
      font-size: 0;
      position: absolute;

      &:after {
        font-size: 22px;
      }

      &.swiper-button-prev {
        left: -65px;

        &:after {
          content: 'prev';
        }
      }

      &.swiper-button-next {
        right: -65px;

        &:after {
          content: 'next';
        }
      }
    }
  }
}
</style>
