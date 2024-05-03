<template>
  <!-- 프로필 등록 전 -->
  <div class="inner">
    <div class="profile_wrap">
      <div>
        <strong>김이니님, 아직 프로필 등록을 하지 않으셨네요!</strong>
        <p>지금 바로 프로필을 등록하고, 나에게 딱 맞는 맞춤형 정보와 <em>500P</em>까지 챙겨가세요!</p>
      </div>
      <Button class="btn_outline" txt="프로필등록하기" />
    </div>
  </div>
  <!-- //프로필 등록 전 -->

  <!-- title washed -->
  <div class="title_wrap">
    <div>
      <h2>리뷰</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <Tabs tabType="type_03" :item="[{txt:'작성 가능한 리뷰'},{txt:'내가 작성한 리뷰'}]" :tabidx="0" />

    <div class="list_wrap">

      <div class="list_top">
        <Selectbox class="ar"
            :options="[
            { val: 'value', txt: '옵션01' },
            { val: 'value', txt: '옵션02' }
        ]" />
      </div>

      <ul class="review_list">
        <li v-for="(item, idx) in review" :key="idx">
          <div class="user_info">
            <strong>{{item.user}}**</strong>
            <span>{{item.age}}대</span>
            <em>{{item.gender}}</em>
            <Reviewpoint :width="item.point" />
            <em>{{item.date}}</em>

            <div class="btnSection">
              <Button class="btn_txt" txt="수정" />
              <Button class="btn_txt" txt="삭제" />
            </div>
          </div>

          <div class="review_cont">
            <p v-html="item.review"></p>
          </div>

          <GoodsItem :item="item.goods" />
        </li>
      </ul>
    </div>
	</div>
</template>

<script setup>
definePageMeta({
layout:'pc-mypage'
});

import {review} from '~/test/data/publish/dummyData'

import { modal } from '~/assets/js/common-ui.js'
/* //component sample data */
</script>

<style lang="scss" scoped>
.review_list {
  border-top:2px solid #000;
  > li {
    padding:40px 0;
    border-bottom:1px solid #f5f5f5;
  }
}

.list_wrap {
  margin-top:50px;
}

.profile_wrap {
  margin-top:60px;
  padding:50px 35px;
  border:1px solid #eee;
  border-radius:3px;
  box-shadow:0px 2px 5px rgba(0, 0, 0, 0.05);
  display:flex;
  align-items:center;
  justify-content:space-between;
  div {
    strong {
      color:#333;
      font-size:20px;
      font-weight:600;
    }
    p {
      margin-top:10px;
      color:#666;
      font-size:14px;
      em {
        color:#00BC70;
      }
    }
  }
}

.user_info {
  margin-bottom:60px;
  display:flex;
  align-items:center;
  > * {
    display:flex;
    align-items:center;
    & + *:before {
      height:10px;
      margin:0 10px;
      border-left:1px solid #eee;
      content:'';
      display:block;
    }
  }
  .btnSection {
    margin-left:auto;
    display:flex;
    &:before {
      display:none;
    }
    :deep(button) {
      em {
        padding:0 15px;
        color:#999;
        font-size:13px;
      }
    }
    button + button:before {
      height:10px;
      border-left:1px solid #eee;
      content:'';
      display:block;
    }
  }
}

.review_cont {
  padding:0 0 30px;
}

:deep(.goods_item) {
  padding:20px;
  border:1px solid #eee;
  border-radius:0 0 3px 3px;
  position:relative;
  display:flex;
  .img_wrap {
    margin-right:15px;
    position:static;
    .thumb {
      width:68px;
      height:90px;
    }
    .btnIconBox {
      background-color:transparent;
      top:50%;
      right:20px;
      bottom:initial;
      left:initial;
      gap:15px;
      transform:translateY(-50%);
      button {
        padding:0;
        em {
          width:24px;
          height:24px;
          background-size:250px auto;
        }
        &.btn_heart {
          em {
            background-position:0 -300px;
          }
        }
        &.btn_cart {
          em {
            background-position:-30px -300px;
          }
        }
        &.btn_buy {
          em {
            background-position:-60px -300px;
          }
        }
      }
    }
  }
  .cont {
    margin-top:0;
    .price {
      margin-top:15px;
      > * {
        margin-right:0;
        font-size:14px;
        & + * {
          margin-left:5px;
        }
      }
    }
  }
  .review_score {
    display:none;
  }
}
</style>
