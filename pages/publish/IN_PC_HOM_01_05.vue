<template>
    <div class="title_wrap" :data-layout="props.layoutType">
        <h2>이벤트</h2>
        <button>당첨자 발표</button>
    </div>

    <div class="inner">
        <div class="list_wrap">
            <Tabs :item="[{txt:'전체'},{txt:'체험/리뷰'},{txt:'쇼핑혜택'},{txt:'제휴혜택'}]" :tabidx="0" />
            <ul class="event_list">
                <li v-for="(item, idx) in sample_event" :key="idx">
                  <EventItem :item="item" :link="item.link" />
                    <!-- <a :href="props.link">
                        <div>
                            <img :src="item.img">
                            <em class="type04">{{ item.cate }}</em>
                        </div>
                        <dl>
                            <dt>{{ item.data }}</dt>
                            <dd v-if="item.title_01">{{item.title_01}}</dd>
                            <dd v-if="item.title_02">{{item.title_02}}</dd>
                        </dl>
                    </a> -->
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

.inner {
    > div.list_wrap {
        > ul.event_list {
            margin-top:60px;
            display:flex;
            flex-wrap:wrap;
            gap:20px;
            li {
                width:413px;
                height:386px;
                position:relative;
            }
        }
    }
}

</style>
