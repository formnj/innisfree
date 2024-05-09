<template>
  <div class="prod_swiper_wrap">
    <ProductDetailSwiper :thumbYN="false" :pagiYN="true" :isMo="true" />
    <div class="swiper-notify"><strong>7명의 고객님</strong> 동시에 확인중 <button type="button" class="btn_close">닫기</button>
    </div>
  </div>

  <div class="prod_detail_info">
    <ProductDetailInfo :isMo="true" />
  </div>

  <section>
    <div class="list_wrap">
      <productDetailBenefit />
      <!-- 결제/카드/혜택, 이벤트 -->
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
    <!-- <p class="text_notify">증정품의 한정수량 소진 시 조기 품절될 수 있습니다.</p> -->
  </section>

  <!-- 상세 탭 / 컨텐츠 -->
  <div class="prod_detail">
    <productDetailTab :isMo="true" /> <!-- 상세 탭 -->

    <div class="tab_contents"> <!-- 상세 탭 컨텐츠 -->
      <!-- 상세 정보 -->
      <div class="tab_cont" style="display: block;">

        <ProductDetailConts :isMo="true" />

        <section>
          <dl class="benefit_list">
            <dt>뷰티포인트</dt>
            <dd>
              결제 금액의 기본 1%, 추가 700원 적립
              <button type="button" class="tooltip" @click="modal.open('modal_beauty_point_tip', 'alert');">뷰티포인트 안내 자세히 보기</button>
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
                  <div class="modal_footer">
                    <Button class="btn_big confirm" txt="확인" @click="modal.close(this);" />
                  </div>
                </div>
                <div class="overlay" @click="modal.close(this);"></div>
              </div><!-- //뷰티포인트 적립안내 툴팁 -->
            </dd>
            <dt>배송비</dt>
            <dd>무료배송</dd>
          </dl>

          <ProductDetailOnepoint /><!-- 원포인트 -->
        </section>


      </div>
      <!-- //상세 정보 -->

      <div class="tab_cont tab_cont_review" style="display: block;">
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

              <button type="button" class="btn_filter" @click="modal.open('modal_skin_type', 'bottom')">피부 정보</button>
              <!-- 피부 속성 필터 모달 -->
              <div id="modal_skin_type" class="modal_wrap">
                <div class="modal_container">
                  <div class="modal_header">
                    <h2>피부 속성 필터</h2>
                    <button class="btn_close" @click="modal.close(this);">닫기</button>
                  </div>
                  <div class="modal_content">
                    <div class="list_wrap">
                      <h3>피부타입(필수 1개)</h3>
                      <ul>
                        <li>
                          <Inputs _id="skinType1" _name="skinType" _type="checkbox" class="checkbox02" _text="건성" />
                        </li>
                        <li>
                          <Inputs _id="skinType2" _name="skinType" _type="checkbox" class="checkbox02" _text="중성" />
                        </li>
                        <li>
                          <Inputs _id="skinType3" _name="skinType" _type="checkbox" class="checkbox02" _text="지성" />
                        </li>
                        <li>
                          <Inputs _id="skinType4" _name="skinType" _type="checkbox" class="checkbox02" _text="민감성" />
                        </li>
                        <li>
                          <Inputs _id="skinType5" _name="skinType" _type="checkbox" class="checkbox02" _text="복합성" />
                        </li>
                        <li>
                          <Inputs _id="skinType6" _name="skinType" _type="checkbox" class="checkbox02" _text="약건성" />
                        </li>
                        <li>
                          <Inputs _id="skinType7" _name="skinType" _type="checkbox" class="checkbox02" _text="트러블성" />
                        </li>
                      </ul>

                      <h3>연령대(필수 1개)</h3>
                      <ul>
                        <li>
                          <Inputs _id="age1" _name="age" _type="checkbox" class="checkbox02" _text="10대" />
                        </li>
                        <li>
                          <Inputs _id="age2" _name="age" _type="checkbox" class="checkbox02" _text="20대" />
                        </li>
                        <li>
                          <Inputs _id="age3" _name="age" _type="checkbox" class="checkbox02" _text="30대" />
                        </li>
                        <li>
                          <Inputs _id="age4" _name="age" _type="checkbox" class="checkbox02" _text="40대" />
                        </li>
                        <li>
                          <Inputs _id="age5" _name="age" _type="checkbox" class="checkbox02" _text="50대 이상" />
                        </li>
                      </ul>
                    </div>

                    <div class="list_wrap">
                      <h3>피부고민(최대 3개)</h3>
                      <ul>
                        <li>
                          <Inputs _id="skinTrb1" _name="skinTrb" _type="checkbox" class="checkbox02" _text="모공" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb2" _name="skinTrb" _type="checkbox" class="checkbox02" _text="주름" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb15" _name="skinTrb" _type="checkbox" class="checkbox02" _text="탄력" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb3" _name="skinTrb" _type="checkbox" class="checkbox02" _text="블랙헤드" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb4" _name="skinTrb" _type="checkbox" class="checkbox02" _text="트러블" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb5" _name="skinTrb" _type="checkbox" class="checkbox02" _text="각질" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb6" _name="skinTrb" _type="checkbox" class="checkbox02" _text="잡티" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb7" _name="skinTrb" _type="checkbox" class="checkbox02" _text="피지과다" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb8" _name="skinTrb" _type="checkbox" class="checkbox02" _text="건조함" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb9" _name="skinTrb" _type="checkbox" class="checkbox02" _text="민감성" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb10" _name="skinTrb" _type="checkbox" class="checkbox02" _text="색소침착" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb11" _name="skinTrb" _type="checkbox" class="checkbox02" _text="피부톤" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb12" _name="skinTrb" _type="checkbox" class="checkbox02" _text="다크서클" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb13" _name="skinTrb" _type="checkbox" class="checkbox02" _text="피부결" />
                        </li>
                        <li>
                          <Inputs _id="skinTrb14" _name="skinTrb" _type="checkbox" class="checkbox02" _text="홍조" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="modal_footer">
                    <Button class="btn_outline" txt="초기화" disabled />
                    <Button txt="적용하기" disabled />
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
                  <span class="star_rate">
                    <span class="star_wrap"><span class="star" :style="'width:' + item.rate + '%'">별점</span></span><!-- 별점 : .star의 width에 퍼센테이지로 입력 -->
                  </span>
                </div>
                <div class="user_info">
                  <span class="user">
                    <span class="name">{{ item.user }}</span>
                    <span class="age">{{ item.age }}</span>
                    <span class="type">{{ item.type }}</span>
                  </span>
                  <span class="date">{{ item.date }}</span>
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
  </div>

  <ProductQnaModal /> <!-- 문의 모달(제품문의 작성) -->
  <ProductReviewPhotoAllModal />  <!-- 포토리뷰 모아보기 모달-->
  <ProductReviewModal :isMo="true" /> <!-- 리뷰보기 모달 -->
</template>
<script setup>
import { modal } from '~/assets/js/common-ui'
import { sample_review } from '~/test/data/publish/dummyData'
definePageMeta({
  layout:'mo-product'
})
</script>
<style lang="scss" scoped>
.prod_swiper_wrap {
  position: relative;

  .swiper-notify {
    height: 3rem;
    padding: 0 1rem;
    font-size: 1.3rem;
    font-weight: 400;
    color: #fff;
    background-color: #000;
    align-items: center;
    bottom: 0;
    right: 7rem;
    position: absolute;
    z-index: 2;
    display: inline-flex;

    strong {
      color: #00BC70;
    }

    .btn_close {
      width: 1.6rem;
      height: 1.6rem;
      margin-left: .1rem;
      font-size: 0;
      background: url('/assets/mo_images/common/icon_split.png') -10.5rem -7rem / 25rem auto no-repeat;
    }
  }
}

section {
  padding: 3rem 2.1rem;
  border-top: 0.5rem solid #F5F5F5;
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
    }

    .review_summary {
      margin-bottom: 0;
    }
  }
}

:deep(.benefit_list) {
  border-top: 0;
  padding: 0;

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
        p {
          font-size: 1.2rem;
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

  .sort {
    display: flex;

    button {
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      align-items: center;

      &:after {
        content: "";
        width: 1.6rem;
        height: 1.6rem;
        margin-left: .5rem;
        background: url(/_nuxt/assets/images/common/icon_split.png) -11rem -6rem / 25rem auto no-repeat;
        display: inline-block;
      }
    }

    .btn_filter {
      &:after {
        content: "";
        background: url(/_nuxt/assets/images/common/icon_split.png) -13rem -6rem / 25rem auto no-repeat;
      }
    }
  }
}

.review_list_wrap {
  border-top: .1rem solid #f5f5f5;
  padding: 0 2.1rem 3rem;

  .review_list {
    & > li {
      padding: 3rem 0;

      .review_header {
        margin-bottom: 0;
        flex-direction: column;
        gap: 1rem;

        .user_info {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .user {
            display: flex;
          }

          span {
            font-size: 1.2rem;
            color: #888;
            display: inline-block;

            &+*:before {
              content: '';
              width: .1rem;
              height: .1rem;
              margin: 0 .1rem;
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

            &.type {
              overflow: hidden;
              white-space: normal;
              text-overflow: ellipsis;
              word-wrap: break-word;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }

            &.date {
              font-weight: 300;
            }
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

#prod_qna_wrap:deep {
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

#modal_photo_review_all:deep {
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

#modal_review:deep {
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

button.tooltip {
  width: 1.6rem;
  height: 1.6rem;
  margin-left: .6rem;
  font-size: 0;
  background: url('~/assets/images/common/icon_split.png') 0 -26rem / 25rem auto no-repeat;
  vertical-align: middle;
  display: inline-block;
}
</style>
