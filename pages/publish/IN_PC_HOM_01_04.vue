<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>특가s</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <div class="tab_wrap">
        <ul class="type_02">
            <li v-for="(name, idx) in sale_menu" :key="idx" class="tab_title">
                <Button :txt="name" @click="tab_click($event)"/>
            </li>
            <li class="benefit">
                <label for="skin1" class="setFilter_sample">
                    <input id="skin1" type="checkbox" name="typArr" value="FB" alt="주름/탄력"><span @click="setFilter($event)">혜택</span>
                </label>
            </li>
        </ul>
        <div class="sticky_menu_wrap">
            <ul class="type_02">
                <li v-for="(name, idx) in sale_menu" :key="idx" class="tab_title">
                    <Button :txt="name" @click="tab_click($event)" />
                </li>
            </ul>
            <label for="skin1" class="setFilter_sample">
                    <input id="skin1" type="checkbox" name="typArr" value="FB" alt="주름/탄력"><span @click="setFilter($event)">혜택</span>
            </label>
        </div>
    </div>
  </div>

  <template  v-for="(item, idx) in sample_data" :key="idx">
    <!-- title washed -->
    <div class="sub_title_wrap">
      <h3>{{ item.sub_title }}
        <Icons class="tooltip" txt="툴팁" @click="modal.open('sample_01', 'alert');" />
      </h3>
      <p class="explain">{{item.desc}}</p>
    </div>
    <!-- //title washed -->

    <div class="inner">
      <div class="timer_wrap" v-if="item.date">
          <div class="num">
              <span id="prom_day">{{item.date.day}}</span>
          </div>
          <span class="unit">일</span>
          <div class="num">
              <span id="prom_hh">{{item.date.hour}}</span>
          </div>
          <span class="unit">시</span>
          <div class="num">
              <span id="prom_mm">{{item.date.min}}</span>
          </div>
          <span class="unit">분</span>
          <div class="num">
              <span id="prom_ss">{{item.date.sec}}</span>
          </div>
          <span class="unit">초</span>
      </div>

      <div class="list_wrap">
        <ul class="goods_list">
            <li v-for="(item, idx) in sample_goods" :key="idx">
                <GoodsItem :item="item" :link="item.link" />
            </li>
        </ul>
      </div>
    </div>
  </template>

  <!-- tooltip modal -->
  <div class="modal_wrap" id="sample_01">
    <div class="modal_container">
        <div class="modal_header">
            <h2>프로모션 제품 구매시 유의사항</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <div>
              <p>동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능</p>
              <p>기간 : 4/14(일) - 5/1(수) 23:59:00까지</p>
              <p>(행사제외 - 블루베리 클렌징 워터)</p>
          </div>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //tooltip modal -->

</template>

<script setup>
import { setFilter } from '~/assets/js/common-ui.js'
import { modal } from '~/assets/js/common-ui.js'

definePageMeta({
layout:'pc-category'
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

const sample_data = [
    {
        sub_title :'립 2개 이상 50%',
        desc:'립 카테고리 전 제품 1개 구매시 30% 2개 이상 구매시 50% 반값!!',
        notice:{
            modal_id:'sample_01',
            title:'“납작아이브로우/컨실러” 기획전 제품 구매 시 유의사항',
            exp:'동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능',
            period:'기간 : 4/14(일) - 5/1(수) 23:59:00까지',
            exception:''
        },
    },

    {
        sub_title :'마스크팩 10개 구매시 50%',
        desc:'에너지마스크팩 10개 담으면 50% 반값!!',
        date:{
            day:15,
            hour:10,
            min:59,
            sec:60
        },
        notice:{
            modal_id:'sample_01',
            title:'“납작아이브로우/컨실러” 기획전 제품 구매 시 유의사항',
            exp:'동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능',
            period:'기간 : 4/14(일) - 5/1(수) 23:59:00까지',
            exception:''
        },
    },
    {
        sub_title :'클렌징폼 3개 이상 구매시 30% 할인',
        desc:'클렌징폼 저렴하게 구할 수 있는 절호의 찬스!',
        date:{
            day:14,
            hour:15,
            min:59,
            sec:60
        },
        notice:{
            modal_id:'sample_02',
            title:'“클렌징오일/워터/크림” 기획전 제품 구매 시 유의사항',
            exp:'동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능',
            period:'기간 : 4/14(일) - 5/1(수) 23:59:00까지',
            exception:'(행사제외 - 블루베리 클렌징 워터)'
        },
    },
    {
        sub_title :'이니스프리 혜택 모음',
        notice:{
            modal_id:'sample_02',
            title:'“클렌징오일/워터/크림” 기획전 제품 구매 시 유의사항',
            exp:'동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능',
            period:'기간 : 4/14(일) - 5/1(수) 23:59:00까지',
            exception:'(행사제외 - 블루베리 클렌징 워터)'
        },
    },
]



const sample_goods = [
    {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
        cate:'NEW',
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        status:'coming_soon',
        sticker:[
            {txt:'1+1', type:'type02'},
            {txt:'뷰티포인트전용', type:'type01'},
            {txt:'첫구매전용', type:'type01'}
        ]
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
        cate:'NEW',
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        status:'coming_soon',
        sticker:[
            {txt:'1+1', type:'type02'},
            {txt:'뷰티포인트전용', type:'type01'},
            {txt:'첫구매전용', type:'type01'}
        ]
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
        giveaway: {
            modal_id:'giveaway_01',
            img_01:("/_nuxt/assets/images/sam/sam_pre_01.png"),
            img_02:("/_nuxt/assets/images/sam/sam_pre_02.png"),
            img_03:("/_nuxt/assets/images/sam/am_pre_03.png"),
        }
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
        hash:['#스킨팩','#화장솜','#순면화장솜']
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        hash:['#스킨팩','#화장솜','#순면화장솜'],
        giveaway: {
            modal_id:'giveaway_02',
            img_01:("/_nuxt/assets/images/sam/sam_pre_01.png"),
            img_02:("/_nuxt/assets/images/sam/sam_pre_02.png"),
            img_03:("/_nuxt/assets/images/sam/am_pre_03.png"),
        }
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    },{
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
    },
    {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        giveaway: {
            img_01:("/_nuxt/assets/images/sam/sam_pre_01.png"),
            img_02:("/_nuxt/assets/images/sam/sam_pre_02.png"),
            img_03:("/_nuxt/assets/images/sam/am_pre_03.png"),
        },
    },
]

const sale_menu = [
    "립 ~50%","마스크팩 ~50%","클렌징 ~30%","립 ~50%","마스크팩 ~50%","클렌징 ~30%","마스크팩 ~50%","클렌징 ~30%","립 ~50%","마스크팩 ~50%","클렌징 ~30%",
]

/* //component sample data */

const tab_click = (event)=>{
    let tab_title = document.querySelectorAll('.tab_title')
    tab_title.forEach((a)=>{
        a.classList.remove('current')
    })
    const target = event.currentTarget;
    target.parentNode.classList.add('current');
}

onMounted(() => {
    window.addEventListener('scroll', () => {
        const target = document.querySelector('.tab_wrap > .type_02');
        const y = window.scrollY

        if (y >=200) {
            target.style.display="none";
            document.querySelector('.title_wrap').style.display="none";
            document.querySelector('.sticky_menu_wrap').style.display="flex";

        }
        else {
            document.querySelector('.title_wrap').style.display="block";
            target.style.display="flex";
            document.querySelector('.sticky_menu_wrap').style.display="none";
        }
    })
})




</script>

<style lang="scss" scoped>
.timer_wrap {
  margin-bottom:40px;
  display:flex;
  align-items:center;
  .num {
      width:42px;
      height:48px;
      background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
      background-repeat:no-repeat;
      background-size:250px;
      background-position:-117px -142px;
      position:relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
          content: '';
          width:40px;
          height:1px;
          background: #1D1D1D;
          position:absolute;
          left:1px;
          top:24px;
          z-index: 2;
          display: block;
          opacity: 0.5;
      }
      span {
          color: #FFFFFF;
          font-size: 24px;
          line-height: 1px;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 1;
      }
  }
  .unit {
      padding: 0 10px;
      color: #000000;
      font-size: 18px;
      line-height: 1.33em;
      letter-spacing: -0.01em;
      display: block;
  }
}

.inner {
    .tab_wrap {
        height:100%;
        margin-bottom:40px;
        padding:20px 0;
        background:#fff;
        position:sticky;
        top:79px;
        z-index:3;
        ul {
            display:flex;
            &.type_02 {
                margin-top:-10px;
                margin-left:-10px;
                flex-wrap:wrap;
                li {
                    padding-top:10px;
                    padding-left:10px;
                    flex:0 auto;
                        &::v-deep > * {
                        height:auto;
                        font-size:14px;
                        background-color:#f5f5f5;
                        border-color:#f5f5f5;
                        border-radius:999px;
                        em {
                            padding:6px 20px;
                            color:#999e9c;
                            white-space:nowrap;
                        }
                        }
                        &.current {
                        &::v-deep > * {
                            background-color:#fff;
                            border-color:#000;
                            em {
                            color:#000;
                            font-weight:600;
                            }
                        }
                    }
                }
            }
            li {
                > * {
                    border:1px solid #eee;
                }
                &.benefit {
                    > * {
                        border-color:transparent !important;
                        background-color:#fff !important;
                    }
                }
            }
        }
        .sticky_menu_wrap {
            width:100%;
            height:100%;
            margin-left:-10px;
            display:none;
            align-items:center;
            justify-content:space-between;
            overflow:hidden;
            ul {
                max-width:94%;
                overflow-x:auto;
                white-space: nowrap;
                flex-wrap:nowrap;
                &::-webkit-scrollbar {
                    display: none;
                }
            }
        }
    }



    .setFilter_sample {
        display: inline-block;
        cursor: pointer;

        input {
            position: absolute;
            z-indeX: -1;
            opacity: 0;
        }

        span {

            padding: 6px 24px;
            color: #00BC70;
            font-weight: 600;
            font-size: 14px;
            border:2px solid #00BC70;
            border-radius: 999px;
            line-height: 1.29em;
            letter-spacing: -0.01em;
            display: flex;
            align-items: center;

            &.active {
            color: #FFFFFF;
            background: #00BC70;
            }
        }
    }

    > section {
        padding:60px 0;
        border-top:1px solid #eee;
        p {
            font-size:24px;
            font-weight:600;
        }
        em {
            padding:10px 0 40px;
            color:#999;
            font-size:14px;
            display:inline-block;
        }
        > .list_wrap {
            margin-top:40px;
        }
    }
    >.benefits_wrap {
        border-top:1px solid #eee;
        padding:60px 0;
        h3 {
          margin-bottom:40px;
        }
    }
    .modal_wrap{
      &.layer {
        .modal_container  {
            .modal_header {
              margin-top:20px;
              padding:20px;
              border-bottom:0;
                h2 {
                    font-size:18px;
                    font-weight:600;
                }
            }
            .modal_content {
              padding:20px 20px 30px;
                > div {
                  > * + * {
                    margin-top:8px;
                  }
                     p {
                        color:#666;
                        font-size:13px;
                        line-height:20px;
                     }
                }
            }
        }
      }
        &[id^="giveaway_"]{
            .modal_container {
                width:500px;
                .modal_content {
                    display:flex;
                    flex-direction:column;
                    gap:15px;
                    dl {
                        border:1px solid #F5F5F5;
                        display:flex;
                        gap:16px;
                        dt {
                                width:100px;
                                height:133px;
                                background:#eee;
                        }
                        dd {
                            padding:18px 0;
                            display:flex;
                            flex-direction:column;
                            justify-content:space-between;
                            div {
                                p {
                                    margin-bottom:5px;
                                    font-size:14px;
                                    font-weight:400;
                                }
                                em {
                                    color:#666;
                                    font-size:12px;
                                    font-weight:300;
                                }
                            }
                            span {
                                font-size:14px;
                                font-weight:400;
                            }

                        }
                    }
                }
            }
        }
    }
}


</style>
