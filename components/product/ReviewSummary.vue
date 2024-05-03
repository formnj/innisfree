<template>
  <div class="prod_detail_review">
    <!-- 평점/리뷰 요약 -->
    <div class="summary">
      <div class="total_point">
        <div class="rate">
          <span class="star_rate">
            <span class="star_wrap"><span class="star" style="width:50%;">별점</span></span><!-- 별점 : .star의 width에 퍼센테이지로 입력 -->
            4.9
          </span>
        </div>
        <div class="emoji_txt"><p class="emoji01">최고! 평생쓸래요</p></div>
      </div>

      <div class="review">
        <p class="txt">고객들은 이 제품이 피부에 빠르게 흡수되고 끈적임 없이 마무리되는 점을 높이 평가했습니다. 또한, 지속적인 보습 효과와 부드러운 피부로의 개선을 경험했다고 합니다. 특히, 민감성 피부를 가진 사용자들도 안심하고 사용할 수 있다는 점에서 만족도가 높았습니다.</p>
        <p class="noti">Chat GPT로 최근 리뷰들을 요약했어요. 기술 수준으로 요약이 정확하지 않거나 표현이 어색할 수 있습니다.</p>

        <!-- 리뷰 요약이 없을 시 안내문구 노출 -->
        <p class="noti">Chat GPT 리뷰 서비스가 제공되는 부분입니다. 해당 서비스는 최근 6개월간의 리뷰를 대상으로 제공됩니다. <br>최근 등록된 제품일 경우 충분한 리뷰가 없어 서비스 제공이 어려울 수 있습니다.</p>
      </div>
    </div>
    <!-- //평점/리뷰 요약 -->

    <!-- 포토 리뷰 요약 -->
    <div class="list_photo_wrap">
      <ul>
        <li v-for="(item, idx) in samplePost" :key="idx" :class="idx == 9 ? 'last' : '' ">  <!-- 마지막 포토에 last 클래스 추가 -->
          <ProductReviewPhotoSummary :item="item" :idx="idx" :link="idx == 9 ? '#none' : ''"/>  <!-- 마지막 포토에 모아보기 모달 열기 -->
        </li>
      </ul>
    </div>
    <!-- //포토 리뷰 요약 -->
  </div>
</template>
<script setup>
import { samplePost } from '~/test/data/publish/dummyData'
import { setFilter } from '~/assets/js/common-ui'
</script>
<style lang="scss" scoped>
.prod_detail_review {

  .summary {
    padding: 34px 40px;
    border: 1px solid #EEE;
    display: flex;

    .total_point {
      min-height: 70px;
      margin-right: 40px;
      padding-right: 40px;
      border-right: 1px solid #eee;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      align-items: flex-start;
      justify-content: space-evenly;

      .star_rate {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.24px;

        .star_wrap {
          padding-left: 150px;
          position: relative;

          &:before {
            content: '';
            width: 140px;
            height: 32px;
            font-size: 0;
            background: url('/assets/images/common/icon_star.png') 0 0 no-repeat;
          }

          .star {
            width: 140px;
            height: 32px;
            font-size: 0;
            background: url('/assets/images/common/icon_star.png') 0 -32px no-repeat;
          }
        }
      }

      .emoji_txt {
        height: 28px;

        p {
          font-size: 20px;
          line-height: 1.4em;
          display: flex;
          align-items: center;
        }

        > *:before {
          content: '';
          width: 24px;
          height: 24px;
          margin-right: 10px;
          background-image: url('/assets/images/common/icon_emoji.png');
          display: inline-block;
        }
      }
    }

    .review {
      .txt {
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        color: #333;
        word-break: keep-all;
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

  .list_photo_wrap {
    margin: 30px 0;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        width: 120px;
        height: 120px;
      }
    }
  }
}
</style>
