<template>
  <div class="prod_info">
    <Sticker :item="prodInfo.sticker" />
    <div class="name">
      <p class="top_text">{{ prodInfo.topText }}</p>
      <strong>BEST</strong> {{ prodInfo.name }}
    </div>
    <div class="info_box">
      <div class="price">
        <em>{{ prodInfo.price }}</em>
        <span class="sale">{{ prodInfo.sale }}</span>
        <span class="cost">{{ prodInfo.cost }}</span>
      </div>
      <div class="rate">
        <a href="javascript:void(0);" @click="gotoReview">
          <span class="star_rate">
            <span class="star_wrap"><span class="star" style="width:50%;">별점</span></span>
            <!-- 별점 : .star의 width에 퍼센테이지로 입력 -->
            {{ prodInfo.rate }}
          </span>
          <span class="review_cnt">{{ prodInfo.cntReview }}건 리뷰</span>
        </a>
      </div>
    </div>
    <p class="review_summary">
      {{ prodInfo.summaryReview }}
      <button type="button" @click="gotoReview">더보기</button>
    </p>
  </div>
</template>
<script setup>
import { prodInfo } from '~/test/data/publish/dummyData'
const gotoReview = () => {
  const el = document.getElementsByClassName('tab_cont_review')[0];
  const contPadding = document.getElementsByClassName('gnb_wrap')[0].offsetHeight + document.getElementsByClassName('tab_wrap')[0].offsetHeight;
  const contsTop = el.getBoundingClientRect().y + window.pageYOffset - contPadding;
  window.scrollTo({top:contsTop, behavior: 'smooth'});
}
</script>
<style lang="scss" scoped>
.prod_info {
  width: 680px;

  :deep(.sticker) {
    margin-bottom: 32px;

    em {
      height: 22px;
      font-size: 12px;
      line-height: 1.5em;
    }
  }

  .name {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -0.014px;
    color: #000000;

    .top_text {
      margin-bottom: 5px;
      font-size: 18px;
      line-height: 1.33;
    }

    strong {
      font-weight: 600;
    }
  }

  .info_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 30px;

    .price {
      font-size: 28px;
      line-height: 1.29em;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
        font-size: 20px;
        font-weight: 300;
        line-height: 1.2em;
        letter-spacing: -0.01em;
      }

      em {
        font-weight: 700;
        color: #000;
      }

      .sale {
        color: #ff0000;
      }

      .cost {
        color: #999;
        text-decoration: line-through;
      }
    }
  }

  .review_summary {
    margin-bottom: 30px;
    line-height: 20px;
    font-size: 13px;
    color: #666;

    button {
      margin-left: 20px;
      font-weight: 700;
      text-decoration-line: underline;
    }
  }
}
</style>
