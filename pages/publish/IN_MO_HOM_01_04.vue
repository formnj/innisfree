<template>
    <div class="prdnav">
        <button @click="modal.open('sample_modal_sort', 'bottom');">
            <span>전체</span>
        </button>
    </div>
    <div class="inner">
        <section v-for="(item, idx) in sample_data" :key="idx">
            <h3>{{ item.sub_title_01 }}</h3>
            <p>{{ item.sub_title_02 }}</p>
            <em>{{ item.desc }}</em>
            <div class="timer_wrap">
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
            <button @click="modal.open(item.notice.modal_id, 'alert');">유의사항</button>
            <div class="list_wrap">
                <ul class="goods_list">
                    <li v-for="(item, idx) in sample_goods" :key="idx">
                    <GoodsItem :item="item" :link="item.link" />
                    </li>
                </ul>
            </div>
            <hr>
        </section>

        <div class="benefits_wrap">
            <h3>특가 할인 찬스 / 사은품 증정 혜택</h3>
            <div class="list_wrap">
                <ul class="goods_list">
                    <li v-for="(item, idx) in sample_goods" :key="idx">
                    <GoodsItem :item="item" :link="item.link" />
                    </li>
                </ul>
            </div>
        </div>


        <div class="modal_wrap" id="sample_01">
            <div class="modal_container">
                <div class="modal_header">
                    <h2>기획전 제품 구매 유의사항</h2>
                    <button class="btn_close" @click="modal.close(this);">닫기</button>
                </div>
                <div class="modal_content">
                    <div>
                        <span>{{sample_data[0].notice.title}}</span>
                        <p>{{sample_data[0].notice.exp}}</p>
                        <p>{{sample_data[0].notice.period}}</p>
                        <p v-if="sample_data[0].notice.exception">{{sample_data[0].notice.exception}}</p>
                    </div>
                </div>
                <div class="modal_footer">
                    <Button class="btn_type_02" txt="확인" />
                </div>
            </div>
            <div class="overlay" @click="modal.close(this);"></div>
        </div>

        <div class="modal_wrap" id="sample_02">
            <div class="modal_container">
                <div class="modal_header">
                    <h2>기획전 제품 구매 유의사항</h2>
                    <button class="btn_close" @click="modal.close(this);">닫기</button>
                </div>
                <div class="modal_content">
                    <div>
                        <span>{{sample_data[1].notice.title}}</span>
                        <p>{{sample_data[1].notice.exp}}</p>
                        <p>{{sample_data[1].notice.period}}</p>
                        <p v-if="sample_data[1].notice.exception">{{sample_data[1].notice.exception}}</p>
                    </div>
                </div>
                <div class="modal_footer">
                    <Button class="btn_type_02" txt="확인" />
                </div>
            </div>
            <div class="overlay" @click="modal.close(this);"></div>
        </div>


        <div class="modal_wrap" id="sample_modal_sort">
            <div class="modal_container">
                <div class="modal_header">
                    <button class="btn_close" @click="modal.close(this);">닫기</button>
                </div>
                <div class="modal_content">
                    <div>
                        <ul class="discount_list">
                            <li class="active"><a href="#none" class="active">전체</a></li>
                            <li><a href="#none">납작아이브로우/컨실러 2개 이상 구매시 40%</a></li>
                            <li><a href="#none">클렌징오일/워터/크림 2개 이상 구매시 40%</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="overlay" @click="modal.close(this);"></div>
        </div>
    </div>
</template>

<script setup>
import { sample_goods } from '~/test/data/dummyData'
import { modal } from '~/assets/js/common-ui'
definePageMeta({
layout: 'mo-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
    link: {
        type: String,
        default: '#none'
    }
});

const sample_data = [
    {
        sub_title_01 :'납작브로우 컨실러',
        sub_title_02 :'2개이상 구매시 40%',
        desc:'납작 아이 브로우 펜슬/라이트 피팅 컨실러 1개 30%, 2개 이상 구매시 40%',
        date:{
            day:15,
            hour:10,
            min:59,
            sec:60
        },
        notice:{
            modal_id:'sample_01',
            title:'납작아이브로우/컨실러 2개이상 구매시 40%',
            exp:'동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능',
            period:'기간 : 4/14(일) - 5/1(수) 23:59:00까지',
            exception:''
        },
    },
    {
        sub_title_01 :'클렌징오일/워터/크림',
        sub_title_02 :'2개이상 구매시 40%',
        desc:'클렌징오일/워터/크림 1개 구매 시 30%, 2개 이상 구매 시 40%',
        date:{
            day:14,
            hour:15,
            min:59,
            sec:60
        },
        notice:{
            modal_id:'sample_02',
            title:'클렌징오일/워터/크림 2개이상 구매시 40%',
            exp:'동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능',
            period:'기간 : 4/14(일) - 5/1(수) 23:59:00까지',
            exception:'(행사제외 - 블루베리 클렌징 워터)'
        },
    },
]
</script>

<style lang="scss" scoped>

.prdnav {
    width:100%;
    height:100%;
    margin-top:10px;
    position:sticky;
    top:100px;
    z-index:5;
    button {
        width:inherit;
        padding:10px;
        border: 1px solid #EEE;
        background:#fff;
        display:inline-block;
        span {
            width:inherit;
            display:flex;
            align-items:center;
            justify-content:space-between;
            &::after {
                content:'';
                width:16px;
                height:16px;
                background-image: url('/_nuxt/assets/images/common/MO-icon_split.png');
                background-repeat:no-repeat;
                background-size:250px;
                background-position:0px -69px;;
                display:inline-block;

            }
        }
    }
}
.inner {
    height:100%;
    h3 {
            font-size:18px;
            font-weight:600;
        }
    > section {
        padding:20px 0;
        p {
            font-size:18px;
            font-weight:600;
        }
        em {
            padding:10px 0 15px;
            color:#999;
            font-size:12px;
            display:inline-block;
        }
        .timer_wrap {
            display:flex;
            align-items:center;
            .num {
                width: 42px;
                height: 48px;
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
                    width: 100%;
                    height: 1px;
                    background: #1D1D1D;
                    position: absolute;
                    left: 1px;
                    top: 24px;
                    z-index: 2;
                    display: block;
                    opacity: 0.5;
                }
                span {
                    color: #FFFFFF;
                    font-size: 18px;
                    line-height: 0.83em;
                    letter-spacing: -0.01em;
                    position: relative;
                    z-index: 1;
                }
            }
            .unit {
                padding: 0 10px;
                color: #000000;
                font-size: 14px;
                line-height: 1.33em;
                letter-spacing: -0.01em;
                display: block;
            }
        }
        > button {
            margin-top:20px;
            font-size:12px;
            text-decoration:underline;
        }
        > .list_wrap {
            margin-top:40px;
        }
        hr {
          margin-top: 60px;
          margin-left: -21px;
          margin-right: -21px;
          border: 2px solid #eee;
        }
    }
    >.benefits_wrap {
        padding:20px 0;
        h3 {
          margin-bottom:40px;
        }
    }
    .modal_wrap.alert {
        .modal_container  {
           max-width:calc(100vw - 60px);
           .modal_header {
                border-bottom:0;
                padding:20px 20px 10px;
                h2 {
                    width: calc(100% - 40px);
                    margin-top:20px;
                    font-size:18px;
                }
                .btn_close {
                    width: 18px;
                    height: 18px;
                }
            }
            .modal_content {
                padding:10px 20px 30px;
                > div {
                    > * + * {
                        margin-top:8px;
                    }
                     p {
                        color:#666;;
                        font-size:13px;
                     }
                }
            }
        }
    }
    .goods_list {
    margin-top:-20px;
    margin-left:-15px;
        > li {
            width:50%;
            padding-top:20px;
            padding-left:15px;
        }
    }

}

</style>
