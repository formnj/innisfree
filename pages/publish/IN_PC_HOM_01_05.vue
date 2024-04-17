<template>
    <div class="title_wrap" :data-layout="props.layoutType">
        <h2>이벤트</h2>
        <button>당첨자 발표</button>
    </div>

    <div class="inner">
      <Tabs :item="[{txt:'전체'},{txt:'체험/리뷰'},{txt:'쇼핑혜택'},{txt:'제휴혜택'}]" :tabidx="0" />
      <div class="list_wrap">
          <ul class="event_list">
              <li v-for="(item, idx) in sample_event" :key="idx">
                <EventItem :item="item" :link="item.link" />
              </li>
          </ul>
      </div>
    </div>
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
</template>

<script setup>
definePageMeta({
	layout: 'pc-category'
});

import {
  sample_event
} from '~/test/data/dummyData'

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
    layoutType: {
      type:String,
      default:'default'
    }
});
/* //component sample data */
</script>

<style lang="scss" scoped>
.title_wrap {
    padding: 60px 20px;
    display:flex;
    justify-content:space-between;
    button {
        font-size:14px;
        display:flex;
        align-items:center;
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

.list_wrap {
  margin-top:60px;
  .event_list {
    margin-top:-20px;
    margin-left:-20px;
    display:flex;
    flex-wrap:wrap;
    li {
      width:33.3333%;
      padding-top:20px;
      padding-left:20px;
    }
  }
}

</style>
