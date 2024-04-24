<template>
  <Tabs tabType="type_01" :item="[{txt:'전체'},{txt:'체험/리뷰'},{txt:'쇼핑혜택'},{txt:'제휴혜택'}]" :tabidx="0" />
  <div class="title_wrap">
      <button>당첨자 발표</button>
  </div>
  <div class="inner">
      <div class="list_wrap">
          <ul class="event_list">
              <li v-for="(item, idx) in sample_event" :key="idx">
                  <EventItem :item="item" :link="item.link" /> <!-- 이벤트 아이템 콤포넌트가 추가되어 변경하였습니다. -->
              </li>
          </ul>
      </div>
  </div>
</template>

<script setup>
definePageMeta({
layout: 'mo-category'
});

import {
  sample_event
} from '~/test/data/dummyData'

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});
</script>

<style lang="scss" scoped>
.tab_wrap {
  margin-left:-21px !important;
  margin-right:-21px !important;
  .type_01 {
      li {
          button {
              > em {
              padding:0px !important;
              }
          }
      }
  }
}
.event_list > li {
  width:100% !important;
}
.title_wrap {
  padding: 30px 0px;
  position:relative;
  button {
      font-size:12px;
      text-align:right;
      position:absolute;
      top:50%;
      right:0px;
      display:flex;
      align-items:center;
      transform:translateY(-50%);
      &::after {
          content:'';
          width:16px;
          height:16px;
          background-image:url('/_nuxt/assets/images/common/PC-icon_split.png');
          background-repeat:no-repeat;
          background-size:250px;
          background-position:-110px -58px;
          display:inline-block;
          transform:rotate(-90deg);

      }
  }
}
</style>
