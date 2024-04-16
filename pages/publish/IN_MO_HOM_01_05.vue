<template>
    <Tabs tabType="type_01" :item="[{txt:'전체'},{txt:'체험/리뷰'},{txt:'쇼핑혜택'},{txt:'제휴혜택'}]" :tabidx="0" />
    <div class="title_wrap">
        <button>당첨자 발표</button>
    </div>
    <div class="inner">
        <div>
            <ul>
                <li v-for="(item, idx) in sample_goods" :key="idx">
                    <a :href="props.link">
                        <div>
                            <img :src="item.img">
                            <em class="type04">{{ item.cate }}</em>
                        </div>
                        <dl>
                            <dd v-if="item.title_01">{{item.title_01}}</dd>
                            <dd v-if="item.title_02">{{item.title_02}}</dd>
                            <dt>{{ item.data }}</dt>
                        </dl>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
layout: 'mo-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
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

.inner {
    > div {
        > ul {
            display:flex;
            flex-wrap:wrap;
            gap:10px;
            li {
                width:100%;
                height:100%;
                position:relative;
                a {
                    height:100%;
                    display:flex;
                    align-items:center;
                    div {
                        width: 170px;
                        max-width:100%;

                        img {
                            width:100%;
                            height:100%;
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
                        height:100%;
                        padding:0 10px;
                        display:flex;
                        flex-direction:column;
                        justify-content:space-between;
                        > *+* {
                            margin-top:5px;;
                        }

                        dt {
                            margin-top:20px;
                            color:#666;
                            font-size:12px;
                            letter-spacing: -0.01em;
                        }
                        dd {
                            color: #000000;
                            font-size: 14px;
                            font-weight: 600;
                            word-wrap: break-word;
                        }
                    }
                }
            }
        }
    }
}

@import "~/assets/scss/_mo_mixin";
@include mobile {

}

</style>
