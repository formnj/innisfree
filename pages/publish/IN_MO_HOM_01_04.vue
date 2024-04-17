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
        </section>

        <div class="benefits_wrap">
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


const sample_goods = [
    {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
        sticker:[
            {txt:'type01', type:'type01'},
            {txt:'type02', type:'type02'},
            {txt:'type03', type:'type03'},
            {txt:'type04', type:'type04'}
        ],
        hash:['#스킨팩','#화장솜','#순면화장솜']
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
        hash:['#스킨팩','#화장솜','#순면화장솜']
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
        hash:['#스킨팩','#화장솜','#순면화장솜']
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
    },
]

const modal = {
    open: (_target, _type) => {
        document.getElementById(_target).classList.add('active', _type);
        const body = document.querySelector("body");
        const pageY = document.body.scrollTop || document.documentElement.scrollTop;

        if (!body.hasAttribute("scrollY")) {
            body.setAttribute("scrollY", String(pageY));
            body.classList.add("lockbody");
        }
        body.addEventListener("touchmove", modal.lockScrollHandle, { passive: false });
    }, close: (_target) => {
        event.target.closest('.modal_wrap').setAttribute('class','modal_wrap');
        const body = document.querySelector("body");

        if (body.hasAttribute("scrollY")) {
            body.classList.remove("lockbody");
            body.scrollTop = Number(body.getAttribute("scrollY"));
            body.removeAttribute("scrollY");
        }

        body.removeEventListener("touchmove", modal.lockScrollHandle, { passive: true });
    }, lockScrollHandle(event) {
        const e = event || window.event;

        // 멀티 터치는 터치 되게 한다
        if (e.touches.length > 1) return;

        // event 초기화 속성이 있음 초기화
        e.preventDefault();
    }
}
/* //component sample data */





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
    > section {
        padding:20px 0;
        border-bottom:1px solid #eee;
        h3 {
            font-size:18px;
            font-weight:600;
        }
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
    }
    >.benefits_wrap {
        padding:60px 0;
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
