<template>
    <div class="title_wrap" :data-layout="props.layoutType">
        <h2>이벤트</h2>
        <button>당첨자 발표</button>
    </div>

    <div class="inner">
        <div class="list_wrap">
            <Tabs :item="[{txt:'전체'},{txt:'체험/리뷰'},{txt:'쇼핑혜택'},{txt:'제휴혜택'}]" :tabidx="0" />
            <ul class="event_list">
                <li v-for="(item, idx) in sample_goods" :key="idx">
                    <a :href="props.link">
                        <div>
                            <img :src="item.img">
                            <em class="type04">{{ item.cate }}</em>
                        </div>
                        <dl>
                            <dt>{{ item.data }}</dt>
                            <dd v-if="item.title_01">{{item.title_01}}</dd>
                            <dd v-if="item.title_02">{{item.title_02}}</dd>
                        </dl>
                    </a>
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

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
    layoutType: {
      type:String,
      default:'default'
    },
    link: {
        type: String,
        default: '#none'
    }
});

const sample_goods = [
 {
      img:("/_nuxt/assets/images/sam/event_list_01.jpg"),
      cate:'제휴혜택',
      title_01:'트러블?수분?탄력?',
      title_02:'고민따라 10% 추가할인 쿠폰위크!!',
      data:'24.4.14(일) ~ 24.4.30(화)',
  },  {
      img:("/_nuxt/assets/images/sam/event_list_02.jpg"),
      cate:'쇼핑혜택',
      title_01:'남성에게도 딱! 맞는',
      title_02:'그린티 씨드 세럼 대용량 출시',
      title:'남성에게도 딱! 맞는 그린티 씨드 세럼 대용량 출시',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_03.jpg"),
      cate:'체험/리뷰',
      title_01:'잡티와 토닝을 한번에! ',
      title_02:'NEW 패드 즉시 증정!',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_04.jpg"),
      cate:'제휴혜택',
      title_01:'자신감 있는 레티놀 앰플',
      title_02:'매일 3,656개 판매! ',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_05.jpg"),
      cate:'체험/리뷰',
      title_01:'이니스프리 공식몰이 처음이라면?',
      title_02:'',
      data:'24.4.14(일) ~ 24.5.1(수)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_06.jpg"),
      cate:'쇼핑혜택',
      title_01:'비타C 1+1 럭키박스',
      title_02:'행운의 주인공은?',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_01.jpg"),
      cate:'제휴혜택',
      title_01:'트러블?수분?탄력?',
      title_02:'고민따라 10% 추가할인 쿠폰위크!!',
      data:'24.4.14(일) ~ 24.4.30(화)',
  },  {
      img:("/_nuxt/assets/images/sam/event_list_02.jpg"),
      cate:'쇼핑혜택',
      title_01:'남성에게도 딱! 맞는',
      title_02:'그린티 씨드 세럼 대용량 출시',
      title:'남성에게도 딱! 맞는 그린티 씨드 세럼 대용량 출시',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_03.jpg"),
      cate:'체험/리뷰',
      title_01:'잡티와 토닝을 한번에! ',
      title_02:'NEW 패드 즉시 증정!',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_04.jpg"),
      cate:'제휴혜택',
      title_01:'자신감 있는 레티놀 앰플',
      title_02:'매일 3,656개 판매! ',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_05.jpg"),
      cate:'체험/리뷰',
      title_01:'이니스프리 공식몰이 처음이라면?',
      title_02:'',
      data:'24.4.14(일) ~ 24.5.1(수)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_06.jpg"),
      cate:'쇼핑혜택',
      title_01:'비타C 1+1 럭키박스',
      title_02:'행운의 주인공은?',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },

]
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
                a {
                    div {
                        width:100%;
                        overflow:hidden;
                        img {
                            width:100%;
                            transition:transform 0.3s;
                        }
                        em {
                            padding:2px 5px;
                            font-size:14px;
                            font-weight:400;
                            position:absolute;
                            top:0;
                            left:0;
                            display:block;
                            &.type04 {
                                color:#fff;
                                background-color:#000;
                            }
                        }
                    }
                    dl {
                        > * + * {
                            margin-bottom:3px !important;
                        }
                        dt {
                            margin:20px 0 10px;
                            color:#666;
                            font-size:14px;
                            letter-spacing: -0.01em;
                            transition:all 0.2s;
                        }
                        dd {
                            color: #000000;
                            font-size: 16px;
                            font-weight: 600;
                            word-wrap: break-word;
                            transition:all 0.2s;
                            &:last-of-type {
                                margin-bottom:0px !important;
                            }
                        }
                    }
                    &:hover {
                        img {
                            transform:scale(1.1);
                        }
                        dl {
                            dt{
                                color:#00BC70 !important
                            }
                            dd{
                                color:#00BC70 !important
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>
