<template>
  <div class="prod_swiper_wrap">
    <ProductDetailSwiper :thumbYN="false" :pagiYN="true" :isMo="true" />  <!-- 제품 이미지 -->
    <div class="swiper_notify"><em>7명의 고객님</em> 동시에 확인중 <button type="button" class="btn_close" @click="closeNotify">닫기</button>
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
      <!-- 상세정보 -->
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

          <div class="no_content">등록된 리뷰가 없습니다.</div> <!-- 리뷰없을 경우 -->

          <ul class="review_list has_bd">
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

              <div class="btn_area">
                <button v-if="item.useMore" type="button" class="btn_more" @click="toggleReviewTxt">더보기</button>
                <div class="btn_wrap">
                  <button v-if="!item.writer" type="button">신고</button>
                  <button v-if="!item.writer" type="button">차단</button>
                  <button v-if="item.writer" type="button"><em>수정</em></button>
                  <button v-if="item.writer" type="button"><em>삭제</em></button>
                </div>
              </div>
            </li>
          </ul>

          <div class="btn_wrap">
            <Button class="btn_outline btn_list_btm" txt="리뷰 전체보기" />
          </div>
        </div>
        <!-- //리뷰 리스트 -->

        <section>
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

        <section>
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

        <section>
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

        <section>
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
      <!-- //상세정보 -->

      <!-- 리뷰 -->
      <div class="tab_cont tab_cont_review">

        <section class="no_bd">
          <div class="sub_title_wrap">
            <div>
              <h4>Editor 포스팅</h4>
            </div>
          </div>

          <div class="list_wrap post_list_wrap">
            <ul class="post_list">
              <li v-for="(item, idx) in samplePost" :key="idx">
                <a :href="link">
                  <span class="thumb">
                    <img :src="item.img" alt="">
                  </span>
                  <span class="info">
                    <img :src="item.editor.photo" alt="" class="photo">
                    <span>{{ item.editor.name }}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <ProductReviewSummary :isMo="true" limit="5" /> <!-- 리뷰 요약 -->
        </section>

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
          </div>
        </div>

        <div class="filter_wrap">
          <Tabs tabType="type_02"
            :item="[{ txt: '발림성', Cnt: '1,123' }, { txt: '향', Cnt: '1,123' }, { txt: '피부결', Cnt: '1,123' }, { txt: '가격', Cnt: '1,123' }]"
            :tabidx="0" />
        </div>

        <div class="select_wrap">
          <selectbox
          :options="[
            { val: 'op0', name: 'op', txt: '전체' },
            { val: 'op1', name: 'op', txt: '1호 샐먼 베이지' },
            { val: 'op2', name: 'op', txt: '2호 피치 베이지' }
          ]" />
        </div>
        <!-- //리뷰 옵션 선택 -->

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

              <div class="btn_area">
                <button v-if="item.useMore" type="button" class="btn_more" @click="toggleReviewTxt">더보기</button>
                <div class="btn_wrap">
                  <button v-if="!item.writer" type="button">신고</button>
                  <button v-if="!item.writer" type="button">차단</button>
                  <button v-if="item.writer" type="button"><em>수정</em></button>
                  <button v-if="item.writer" type="button"><em>삭제</em></button>
                </div>
              </div>
            </li>

            <li>
              <p>회원님의 요청으로 차단된 리뷰입니다.</p>
            </li>
          </ul>

          <div class="btn_wrap">
            <Button class="btn_outline btn_list_btm" txt="더보기" />
          </div>
        </div>
        <!-- //리뷰 리스트 -->
      </div>
      <!-- //리뷰 -->

      <!-- 유의사항 -->
      <div class="tab_cont">
        <section>
          <ProductDetailNotice />
        </section>
      </div>
      <!-- //유의사항 -->
    </div>

    <!-- 구매 버튼 영역 : IN_MO_PRD_01_09_button 참고 -->
    <div class="btn_wrap fixed">
      <button type="button" class="btn_share"></button>
      <button type="button" class="btn_like">찜하기</button>  <!-- 활성화시 on 클래스 추가 -->
      <Button class="btn_big" txt="장바구니" />
      <Button class="btn_big confirm" txt="바로구매" />
    </div>
    <!-- //구매 버튼 영역 -->
  </div>

  <ProductQnaModal /> <!-- 문의 모달(제품문의 작성) -->
  <ProductReviewPhotoAllModal />  <!-- 포토리뷰 모아보기 모달-->
  <ProductReviewModal :isMo="true" /> <!-- 리뷰보기 모달 -->


  <div id="alert_prod_alert" class="modal_wrap">
    <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this);">닫기</button>
          <h2>기획전 제품 구매 시 유의사항</h2>
          <p class="txt"><strong>납작아이브로우 / 컨실러 2개이상 구매시 40%</strong><br><br>동일 제품 및 교차 구매 가능 / 기간 내 최대 10 구매 가능<br>기간 : 4/14(일) - 5/1(수) 23:59:00까지</p>
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
import { sample_review, sample_goods, samplePost } from '~/test/data/publish/dummyData'
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

const closeNotify = () => {
  document.querySelector('.swiper_notify').style.display = "none";
}

const toggleReviewTxt = (e) => {
  const el = e.target;
  const txt = el.parentElement.parentElement.querySelector('.txt');
  txt.classList.toggle('open');
  el.classList.toggle('open');
  if(el.classList.contains('open')) {
    el.innerText = "접기"
  }else {
    el.innerText = "더보기"
  }
}
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

  &.no_bd {
    border-top: 0;
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
    margin-bottom: 0;
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
  padding: 0 2.1rem;
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
  }
}

.review_list_wrap {
  padding: 0 2.1rem 3rem;

  .no_content {
    margin: 3rem 0 5rem;
  }

  .review_list {
    &.has_bd {
      border-top: 1px solid #eee;
    }

    & > li {
      padding: 3rem 0;
      border-bottom: .1rem solid #eee;

      &:last-child {
        border-bottom: 0;
      }

      & > p {
        text-align: center;
      }

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

      .btn_area {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          font-size: 1.2rem;
          color: #999;

          &.btn_more {
            &:after {
              content: '';
              width: .8rem;
              height: .8rem;
              margin-left: .8rem;
              border-bottom: 1px solid #999;
              border-left: 1px solid #999;
              display: inline-block;
              transform: rotate(-45deg);
              position: relative;
              top: -.2rem;
              transition: all .3s;
            }

            &.open {
              &:after {
                transform: rotate(135deg);
                top: .2rem;
              }
            }
          }

          em {
            color: #000;
            font-weight: 600;
          }
        }

        .btn_wrap {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-left: auto;

          & >  button {
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

.swiper_wrap{
  margin: 0 -2.1rem;

  .swiper {
    padding-left: 2.1rem;
  }

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

:deep([class*=btn_][class*=_outline]).btn_list_btm {
  width: 100%;
  font-size: 14px;
  border-color: #eee;

  em {
    color: #666;
  }
}

.btn_wrap.fixed {
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9;

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

.post_list_wrap {
  margin: 0 -2.1rem;
  padding: 0 2.1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display:none;
  }

  .post_list {
    flex-wrap: nowrap;

    li {
      width: 10.9rem;
      flex-shrink: 0;

      a, span {
        display: inline-block;
      }

      .info {
        margin-top: .8rem;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: .8rem;

        .photo {
          width: 2.4rem;
        }
      }
    }
  }
}

.filter_wrap {
  margin: 1.6rem 0 0;
  padding: 0 2.1rem 2.2rem;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display:none;
  }

  :deep(.tab_wrap) {
    ul.type_02 {
      margin: 0;
      gap: .8rem .5rem;
      flex-wrap: nowrap;

      li {
        margin: 0;
        padding: 0;

        &>* {
          padding: .7rem 1.5rem;
          font-size: 1.2rem;
          background: #fff;
          border-color: #eee;

          em {
            height: 3rem;
            padding: 0 14px;
            line-height: 3rem;
            font-weight: 600;
          }

          span {
            font-size: 1.2rem;
          }
        }

        &.current {
          &>* {
            border-color: #000;
            span {
              color: #00BC70;
            }
          }
        }
      }
    }
  }
}

.select_wrap {
  margin-top: 2rem;
  padding: 0 2.1rem;
}
</style>
