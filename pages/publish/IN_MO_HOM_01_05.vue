<template>
  <Tabs tabType="type_01" :item="[{txt:'전체'},{txt:'체험/리뷰'},{txt:'쇼핑혜택'},{txt:'제휴혜택'}]" :tabidx="0" />

  <!-- title washed -->
  <div class="sub_title_wrap">
    <a href="#none" class="btn_link_arrw">당첨자 발표</a>
  </div>
  <!-- title washed -->

  <div class="inner">
      <div class="list_wrap">
          <ul class="event_list">
              <li v-for="(item, idx) in sample_event" :key="idx">
                  <EventItem :item="item" :link="item.link" type="type_column" /> <!-- 이벤트 아이템 콤포넌트가 추가되어 변경하였습니다. -->
              </li>
          </ul>
      </div>
  </div>
</template>

<script setup>
definePageMeta({
layout:'mo-category'
});

import {
  sample_event
} from '~/test/data/publish/dummyData'

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
.event_list {
  gap: 0.3rem;
  > li {
    width:100% !important;
  }
}
</style>
