<template>
  <div class="prod_info">
    <Sticker :item="prodInfo.sticker" />
    <div class="name">
      <p class="top_text">{{ prodInfo.topText }}</p>
      <strong>BEST</strong> {{ prodInfo.name }}
    </div>
    <div class="rate">
      <span class="star_rate">별점</span>
      {{ prodInfo.rate }}
      <span class="cnt_review">{{ prodInfo.cntReview }}건 리뷰</span>
    </div>
    <p class="summary_review">
      {{ prodInfo.summaryReview }}
      <button type="button">더보기</button>
    </p>
    <div class="price">
      <em>{{ prodInfo.price }}</em>
      <span class="sale">{{ prodInfo.sale }}</span>
      <span class="cost">{{ prodInfo.cost }}</span>
    </div>
  </div>
</template>
<script setup>
import { prodInfo } from '../../test/data/dummyData'
</script>
<style lang="scss" scoped>
.prod_info {
  padding:30px 21px;
  border-bottom:5px solid #f5f5f5;
  .name {
    font-size:18px;
    line-height:24px;
    letter-spacing:-1px;
    color:#000;
    .top_text {
      margin-bottom:5px;
      font-size:13px;
      line-height:16px;
    }
    strong {
      font-weight:600;
    }
  }
  .sticker + .name {
    margin-top:10px;
  }
  .rate {
    margin-top:10px;
    font-size:12px;
    .cnt_review {
      margin-left:10px;
      color:#606664;
      text-decoration:underline;
    }
  }
  .summary_review {
    margin-top:10px;
    line-height:20px;
    font-size:13px;
    color:#666;
    button {
      margin-left:10px;
      font-weight:700;
      text-decoration:underline;
    }
  }
  .price {
    margin-top:20px;
    padding-top:20px;
    font-size:20px;
    border-top:1px solid #eee;
    display:flex;
    align-items:center;
    span {
      margin-left:10px;
    }
    em {
      font-weight:700;
      color:#000;
    }
    .sale {
      color:#ff0000;
    }
    .cost {
      font-size:16px;
      font-weight:300;
      color:#999;
      text-decoration:line-through
    }
  }
}
</style>
