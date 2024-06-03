<template>
  <div class="prod_swiper_wrap">
    <ProductDetailSwiper :thumbYN="false" :pagiYN="true" :isMo="true" />  <!-- 제품 이미지 -->
    <div class="swiper_notify"><em>7명의 고객님</em> 동시에 확인중 <button type="button" class="btn_close">닫기</button>
    <!-- <div class="swiper_notify"><em class="type02">품절임박!</em> 재고가 얼마 남지 않았으니 서두르세요! <button type="button" class="btn_close">닫기</button> -->
    </div>
  </div>

  <div class="prod_detail_info">
    <ProductDetailInfo :isMo="true" />  <!-- 제품 정보/리뷰수 -->
  </div>

  <ProductMyPrice />  <!-- 제품 혜택가 -->

  <section>
    <div class="list_wrap">
      <productDetailBenefit />  <!-- 증정혜택 -->
      <!-- 결제 혜택, 관련 이벤트 -->
      <dl class="benefit_list txt">
        <dt>결제/카드 혜택</dt>
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
      <!-- //결제 혜택, 관련 이벤트 -->
    </div>
  </section>

  <!-- 상세 탭 / 컨텐츠 -->
  <div class="prod_detail">
    <productDetailTab :isMo="true" /> <!-- 상세정보 탭 -->

    <div class="tab_contents"> <!-- 탭 컨텐츠 -->
      <!-- 상세 정보 -->
      <div class="tab_cont" style="display: block;">

        <ProductDetailConts :isMo="true" />

        <section>
          <dl class="benefit_list">
            <dt>뷰티포인트</dt>
            <dd>
              결제 금액의 1% 적립
              <Icons class="tooltip" txt="뷰티포인트 안내 자세히 보기" @click="modal.open('modal_beauty_point_tip', 'alert tooltip')" />
              <div id="modal_beauty_point_tip" class="modal_wrap"><!-- 뷰티포인트 적립안내 툴팁 -->
                <div class="modal_container">
                  <button class="btn_close" @click="modal.close(this);">툴팁 닫기</button>
                  <div class="modal_content">
                    <h2>뷰티포인트 안내</h2>
                    <p class="txt">
                      아모레퍼시픽 뷰티포인트 통합회원은 회원 등급과 상관없이 (뷰티포인트 적립 대상상품에 한하여) 포인트가 적립됩니다.<br><br>
                      <strong>포인트 적립률은 제품별, 브랜드별로 상이하며,<br>쿠폰/뷰티포인트 사용 조건과 금액에 따라 상이할 수 있습니다.</strong>
                    </p>
                  </div>
                  <div class="modal_footer">
                    <Button class="btn_big confirm" txt="확인" @click="modal.close(this);" />
                  </div>
                </div>
                <div class="overlay" @click="modal.close(this);"></div>
              </div><!-- //뷰티포인트 적립안내 툴팁 -->
            </dd>
            <dt>배송비</dt>
            <dd>무료배송</dd>
            <dt>유의사항</dt>
            <dd>3.7~9 / 기간 내 5개 / 뷰티포인트 전용, APP 전용 / 할인제외, 증정제외, 구매금액 제외 / 반품교환 불가능 </dd>
          </dl>

          <ProductDetailOnepoint /><!-- 원포인트 -->
        </section>

        <section>
          <ProductReviewSummary :isMo="true" limit="5" :usePhotoList="false" /> <!-- 리뷰 요약 -->
        </section>

        <!-- 리뷰 리스트 -->
        <div class="review_list_wrap">
          <ul class="review_list">
            <li v-for="(item, idx) in sample_review.slice(0,3)" :key="idx">
              <div class="review_header">
                <div class="rate">
                  <Reviewpoint width="90" />
                </div>
                <strong class="buy_cnt"><em>1</em>회 구매</strong>
              </div>

              <div class="review_header">
                <div class="user_info">
                  <span class="name">{{ item.user }}</span>
                  <span class="age">{{ item.age }}</span>
                  <span class="type">{{ item.type }}</span>
                  <span class="date ar">{{ item.date }}</span>
                </div>
              </div>
              <ProductReview :item="item" :isMo="true" /> <!-- 리뷰 -->
              <div class="btn_wrap">
                <button type="button">신고</button>
                <button type="button">차단</button>
              </div>
            </li>
          </ul>
        </div>
        <!-- //리뷰 리스트 -->

      </div>
      <!-- //상세 정보 -->

      <div class="tab_cont tab_cont_review">
        <section>
          <ProductReviewSummary :isMo="true" limit="5" /> <!-- 리뷰 요약 -->

        <!-- 리뷰 옵션 선택 -->
          <div class="review_option">
            <div class="sort">
              <button type="button" class="btn_dropdown" @click="modal.open('review_filter', 'bottom')">전체 리뷰</button>
              <div id="review_filter" class="modal_wrap"><!-- 리뷰 필터 -->
                <div class="modal_container">
                  <div class="modal_header">
                    <button class="btn_close" @click="modal.close(this);"></button>
                  </div>
                  <div class="modal_content">
                    <ul class="select_list">
                      <li class="active"><a href="#none" class="active">전체 리뷰</a></li>
                      <li><a href="#none">포토 리뷰</a></li>
                      <li><a href="#none">한달 사용</a></li>
                      <li><a href="#none">체험단</a></li>
                      <li><a href="#none">샘플마켓</a></li>
                    </ul>
                  </div>
                </div>
                <div class="overlay" @click="modal.close(this);"></div>
              </div>
            </div>

            <div class="sort">
              <button type="button" class="btn_dropdown" @click="modal.open('review_sort', 'bottom')">추천순</button>
              <div id="review_sort" class="modal_wrap"><!-- 리뷰 정렬 -->
                <div class="modal_container">
                  <div class="modal_header">
                    <button class="btn_close" @click="modal.close(this);"></button>
                  </div>
                  <div class="modal_content">
                    <ul class="select_list">
                      <li class="active"><a href="#none" class="active">추천순</a></li>
                      <li><a href="#none">최신순</a></li>
                      <li><a href="#none">평점순</a></li>
                    </ul>
                  </div>
                </div>
                <div class="overlay" @click="modal.close(this);"></div>
              </div>

              <button type="button" class="btn_filter" @click="modal.open('modal_skin_type', 'bottom filter')">피부 정보</button>
              <!-- 피부 속성 필터 모달 -->
              <div id="modal_skin_type" class="modal_wrap">
                <div class="modal_container">
                  <div class="modal_header">
                      <h2>피부 속성 필터</h2>
                      <button class="btn_close_x" @click="modal.close(this);">닫기</button>
                  </div>
                  <div class="modal_content">
                    <p>피부타입(필수 1개)</p>
                    <ul class="pick_list">
                      <li>
                        <Inputs _id="skinType1" _name="skinType" _type="checkbox" class="round_square" _text="건성" />
                      </li>
                      <li>
                        <Inputs _id="skinType2" _name="skinType" _type="checkbox" class="round_square" _text="중성" />
                      </li>
                      <li>
                        <Inputs _id="skinType3" _name="skinType" _type="checkbox" class="round_square" _text="지성" />
                      </li>
                      <li>
                        <Inputs _id="skinType4" _name="skinType" _type="checkbox" class="round_square" _text="민감성" />
                      </li>
                      <li>
                        <Inputs _id="skinType5" _name="skinType" _type="checkbox" class="round_square" _text="복합성" />
                      </li>
                      <li>
                        <Inputs _id="skinType6" _name="skinType" _type="checkbox" class="round_square" _text="약건성" />
                      </li>
                      <li>
                        <Inputs _id="skinType7" _name="skinType" _type="checkbox" class="round_square" _text="트러블성" />
                      </li>
                    </ul>

                    <p>연령대(필수 1개)</p>
                    <ul class="pick_list">
                      <li>
                        <Inputs _id="age1" _name="age" _type="checkbox" class="round_square" _text="10대" />
                      </li>
                      <li>
                        <Inputs _id="age2" _name="age" _type="checkbox" class="round_square" _text="20대" />
                      </li>
                      <li>
                        <Inputs _id="age3" _name="age" _type="checkbox" class="round_square" _text="30대" />
                      </li>
                      <li>
                        <Inputs _id="age4" _name="age" _type="checkbox" class="round_square" _text="40대" />
                      </li>
                      <li>
                        <Inputs _id="age5" _name="age" _type="checkbox" class="round_square" _text="50대 이상" />
                      </li>
                    </ul>

                    <p>피부고민(최대 3개)</p>
                    <ul class="pick_list">
                      <li>
                        <Inputs _id="skinTrb1" _name="skinTrb" _type="checkbox" class="round_square" _text="모공" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb2" _name="skinTrb" _type="checkbox" class="round_square" _text="주름" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb15" _name="skinTrb" _type="checkbox" class="round_square" _text="탄력" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb3" _name="skinTrb" _type="checkbox" class="round_square" _text="블랙헤드" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb4" _name="skinTrb" _type="checkbox" class="round_square" _text="트러블" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb5" _name="skinTrb" _type="checkbox" class="round_square" _text="각질" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb6" _name="skinTrb" _type="checkbox" class="round_square" _text="잡티" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb7" _name="skinTrb" _type="checkbox" class="round_square" _text="피지과다" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb8" _name="skinTrb" _type="checkbox" class="round_square" _text="건조함" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb9" _name="skinTrb" _type="checkbox" class="round_square" _text="민감성" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb10" _name="skinTrb" _type="checkbox" class="round_square" _text="색소침착" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb11" _name="skinTrb" _type="checkbox" class="round_square" _text="피부톤" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb12" _name="skinTrb" _type="checkbox" class="round_square" _text="다크서클" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb13" _name="skinTrb" _type="checkbox" class="round_square" _text="피부결" />
                      </li>
                      <li>
                        <Inputs _id="skinTrb14" _name="skinTrb" _type="checkbox" class="round_square" _text="홍조" />
                      </li>
                    </ul>
                  </div>
                  <div class="modal_footer">
                    <Button class="btn_big btn_reset" txt="초기화" disabled />
                    <Button class="btn_big btn_ confirm" txt="적용하기" disabled />
                  </div>
                </div>
                <div class="overlay" @click="modal.close(this);"></div>
              </div>
              <!-- //피부 속성 필터 -->
            </div>
          </div>
          <!-- //리뷰 옵션 선택 -->
        </section>

        <!-- 리뷰 리스트 -->
        <div class="review_list_wrap">
          <ul class="review_list">
            <li v-for="(item, idx) in sample_review" :key="idx">
              <div class="review_header">
                <div class="rate">
                  <Reviewpoint width="90" />
                </div>
              </div>

              <div class="review_header">
                <div class="user_info">
                  <span class="name">{{ item.user }}</span>
                  <span class="age">{{ item.age }}</span>
                  <span class="type">{{ item.type }}</span>
                  <span class="date ar">{{ item.date }}</span>
                </div>
              </div>
              <ProductReview :item="item" :isMo="true" /> <!-- 리뷰 -->
              <div class="btn_wrap">
                <button type="button">신고</button>
                <button type="button">차단</button>
              </div>
            </li>
          </ul>
        </div>
        <!-- //리뷰 리스트 -->
      </div>

      <!-- 유의사항 -->
      <div class="tab_cont">
        <section>
          <ProductDetailNotice />
        </section>
      </div>
      <!-- //유의사항 -->
    </div>

    <section class="no_r_pd">
      <div class="sub_title_wrap">
        <div>
          <h4>함께 진행하는 기획전 제품</h4>
          <button type="button" @click="modal.open('alert_prod_alert','alert tooltip')">유의사항</button>
        </div>
        <p class="explain">탄탄쫀쫀 콜라겐 꿀 조합 할인 혜택</p>
      </div>

      <div class="swiper_wrap">
        <swiper
          :slides-per-view="'auto'"
        >
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0,10)" :key="idx" class="item">
            <GoodsItem :item="item" :link="item.link" class="type_cart" :useMark="false" />
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="no_r_pd">
      <div class="sub_title_wrap">
        <div>
          <h4>이 제품과 같은 라인</h4>
          <a href="#none" class="btn_link_arrw"><strong>브라이트닝 포어</strong> 라인</a>
        </div>
      </div>

      <div class="swiper_wrap">
        <swiper
          :slides-per-view="'auto'"
        >
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0,10)" :key="idx" class="item">
            <GoodsItem :item="item" :link="item.link" class="type_cart" :useMark="false" />
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="no_r_pd">
      <div class="sub_title_wrap">
        <div>
          <h4>이 제품의 카테고리 BEST</h4>
        </div>
      </div>

      <div class="swiper_wrap goods_list">
        <swiper
          :slides-per-view="'auto'"
        >
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0,10)" :key="idx" class="item">
            <span class="ranking" v-if="idx < 9">{{ '0'+(idx+1) }}</span>
            <span class="ranking" v-else>{{ idx+1 }}</span>
            <GoodsItem :item="item" :link="item.link" class="type_cart" :useMark="false" />
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="no_r_pd">
      <div class="sub_title_wrap">
        <div>
          <h4>이 제품을 본 분들의 관심 제품</h4>
        </div>
      </div>
      <div class="swiper_wrap">
        <swiper
          :slides-per-view="'auto'"
        >
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0,10)" :key="idx" class="item">
            <GoodsItem :item="item" :link="item.link" class="type_cart" :useMark="false" />
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>

  <ProductQnaModal /> <!-- 문의 모달(제품문의 작성) -->
  <ProductReviewPhotoAllModal />  <!-- 포토리뷰 모아보기 모달-->
  <ProductReviewModal :isMo="true" /> <!-- 리뷰보기 모달 -->


  <div id="alert_prod_alert" class="modal_wrap">
    <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this);">닫기</button>
          <h2>기획전 제품 구매 시 유의사항</h2>
          <p class="txt">납작아이브로우 / 컨실러 2개이상 구매시 40%<br>동일 제품 및 교차 구매 가능 / 기간 내 최대 10 구매 가능<br>기간 : 4/14(일) - 5/1(수) 23:59:00까지</p>
        </div>
        <div class="modal_footer">
            <Button class="btn_big confirm" txt="확인" />
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>
<script setup>
import { modal } from '~/assets/js/common-ui'
import { sample_review, sample_goods } from '~/test/data/publish/dummyData'
// import Swiper core and required components
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

definePageMeta({
  layout:'mo-home-search-cart'
});
</script>
<style lang="scss" scoped>
.prod_swiper_wrap {
  position: relative;

  .swiper_notify {
    height: 3rem;
    padding: 0 1rem;
    font-size: 1.3rem;
    color: #fff;
    background-color: #000;
    align-items: center;
    bottom: 0;
    right: 7rem;
    position: absolute;
    z-index: 3;
    display: inline-flex;

    em {
      color: #00BC70;
      padding-right: .4rem;
      font-weight: 600;

      &.type02 {
        color: #FFFF82;
      }
    }

    .btn_close {
      width: 1.6rem;
      height: 1.6rem;
      margin-left: 1rem;
      font-size: 0;
      background: url('/assets/mo_images/common/icon_split.png') -10.5rem -7rem / 25rem auto no-repeat;
      display: inline-block;
    }
  }
}

section {
  padding: 3rem 2.1rem;
  border-top: 0.5rem solid #F5F5F5;

  & + .acco_wrap + section  {
    border-top: 0;
  }

  &.no_r_pd {
    padding-right: 0;

    .sub_title_wrap {
      padding-right: 2.1rem;
    }
  }

  .sub_title_wrap {
    display: block;
    margin: 0 0 2rem;

    > div {
      display: flex;
      justify-content: space-between;

      h4 {
        display: flex;
        justify-content: space-between;
      }

      button {
        color: #000;
        text-decoration: underline;
      }
    }

    .explain {
      margin-top: 0.5rem;
    }
  }
}

.prod_detail {
  border-top: .5rem solid #f5f5f5;
}

.prod_detail_info {
  padding: 3rem 2.1rem;

  :deep(.prod_info) {
    width: 100%;
    position: relative;

    .sticker {
      margin-bottom: 1rem;
    }

    .name {
      font-size: 1.8rem;
      line-height: 2.4rem;

      .top_text {
        line-height: 1.6rem;
      }

      & + .info_box {
        margin: 1rem 0;
      }
    }

    .review_summary {
      margin-bottom: 0;

      & + .info_box {
        margin: 2rem 0 0;
        padding-top: 2rem;
        border-top: 1px solid #eee;

        .price {
          font-size: 2rem;
          line-height: 2.4rem;

          .cost {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
}

:deep(.benefit_list) {
  &.gift {
    padding: 0;
    border-top: 0;
    flex-direction: column;

    dd {
      width: 100%;
    }
  }

  &.txt {
    dd {
      width: 100%;
    }
  }

}

.tab_cont {
  display: none;
}

:deep(.prod_detail_conts) {
  height: 84rem;
}

:deep(.onepoint) {
  margin-top: 3rem;
  padding: 3rem 0;
  font-size: 1.3rem;
  text-align: center;
  display: block;

  .hash {
    justify-content: center;
  }

  .icons {
    margin: 1rem 0 0;
    justify-content: center;
  }
}

:deep(.prod_detail_review) {
  .summary {
    padding: 0;
    border: 0;
    display: block;

    .total_point {
      min-height: auto;
      margin: 0;
      padding: 0;
      flex-direction: row;
      justify-content: space-between;

      .emoji_txt{
        & > * {
          &:before {
            width: 16px;
            height: 16px;
            background-size: auto 16px;
          }
        }
        p {
          font-size: 1.4rem;
          font-weight: 600;
          color: #000;
        }
      }
    }

    .review {
      .txt {
        margin-top: 1.5rem;
        font-size: 1.3rem;
        line-height: 2rem;
      }

      .noti {
        padding: 1rem 1rem 1rem 3.1rem;
        background-color: #f5f5f5;

        &:before {
          top: 1rem;
          left: 1.1rem;
        }
      }
    }
  }

  .list_photo_wrap {
    ul {
      li {
        width: auto;
        height: 6.4rem;

        img {
          width: auto;
          height: 100%;
        }
      }
    }
  }
}

.review_option {
  display: flex;
  justify-content: space-between;

  & > .sort {
    display: flex;

    & > button {
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      align-items: center;

      &:after {
        content: "";
        width: 1.6rem;
        height: 1.6rem;
        margin-left: .5rem;
        background: url(~/assets/images/common/icon_split.png) -11rem -6rem / 25rem auto no-repeat;
        display: inline-block;
      }
    }

    .btn_filter {
      &:after {
        content: "";
        background: url(~/assets/images/common/icon_split.png) -13rem -6rem / 25rem auto no-repeat;
      }
    }
  }
}

.review_list_wrap {
  // border-top: .1rem solid #f5f5f5;
  padding: 0 2.1rem 3rem;

  .review_list {
    & > li {
      padding: 3rem 0;

      .review_header {
        display: flex;
        justify-content: space-between;

        .buy_cnt {
          font-size: 1.2rem;

          em {
            color: #00BC70;
          }
        }

        .user_info {
          .date:before {
            display:none;
          }
        }
      }

      .btn_wrap {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & >  button {
          font-size: 1.2rem;
          color: #999;

          & + button:before {
            content: '';
            width: 0.1rem;
            height: 1rem;
            margin: 0 1.5rem;
            background-color: #EEE;
            display: inline-block;
          }
        }
      }
    }

    :deep(.review) {
      .option_name {
        margin: 2rem 0;
      }

      .review_photo_list_wrap {
        display: flex;
        margin: 2.0rem -2.1rem 0;
        overflow-x: scroll;
        overflow-y: hidden;

        &::-webkit-scrollbar {
          width: 0;
        }

        .review_photo_list {
          margin: 0 2.1rem;

          li {
            width: 10.9rem;
            height: 10.9rem;
            flex-shrink: 0;
          }
        }
      }
    }
  }
}

.filter {
  .modal_container {
    .modal_footer {
      .confirm {
        flex: 1;
      }
    }
  }
}

.prod_qna_wrap:deep {
  .modal_container {
    .modal_header {
      border-bottom: 0;
    }
    .modal_content {
      padding: 0 2rem;
    }

    .modal_footer {
      padding: 0;
    }
  }
}

.modal_photo_review_all:deep {
  .modal_container {
    width: 100%;
    height: 100%;
    max-height: 100%;

    .modal_content {
      padding: 0 1.6rem;

      .list_photo_wrap {
        ul {
          gap: .3rem;
          li {
            width: 10.9rem;
            height: 10.9rem;
          }
        }
      }
    }
  }
}

.modal_review:deep {
  .modal_container {
    width: 100%;
    height: 100%;
    max-height: 100%;

    .modal_content {
      padding: 0 1.6rem;
      overflow: hidden;

      .review {
        .option_name {
          margin: 2rem 0;
        }

        .review_photo_list_wrap {
          display: flex;
          margin: 2.0rem -2.1rem;
          overflow-x: scroll;
          overflow-y: hidden;

          .review_photo_list {
            margin: 0 2.1rem;

            li {
              width: 10.9rem;
              height: 10.9rem;
              flex-shrink: 0;
            }
          }
        }
      }
    }
  }
}

:deep(.modal_wrap){
  &.alert {
    .modal_content {
      padding: 30px 20px;

      .sub_tit {
        font-size: 13px;
        color: #00BC70;
        margin-bottom: .6rem;
      }

      h2 {
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;

        & + .txt {
          margin-top: 10px;
        }
      }

      .txt {
        font-size: 13px;
        color: #666;
        display: block;

        em {
          color: #00BC70;
          font-weight: bold;
        }
      }
    }
  }
}

.swiper_wrap{
  .item {
    width: 10.9rem;

    &+.item {
      margin-left: .3rem;
    }

    :deep(.goods_item) {
      position: relative;
      width: 10.9rem;

      .review_score {
        display: none;
      }
    }
  }
}
</style>
