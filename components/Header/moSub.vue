<template>
    <div class="docTopBanner txtBanner">
        <a :href="mainTopBannerData.url" class="txt" target="_blank">{{mainTopBannerData.bannerText}}</a>
        <button type="button" class="btnClose">닫기</button>
    </div>
    <header>
        <div class="inner">
            <div class="menu_wrap">
            <Icons class="back" txt="뒤로가기" />
            <h2><Button txt="쇼케이스" @click="modal.open('modal_nav', 'bottom')" /></h2>
            </div>
            <div class="icon_menu">
                <Icons class="home" txt="홈" />
                <Icons class="share" txt="공유" />
                <Icons class="btn_search" txt="검색" />
                <Icons class="cart" txt="50" />
            </div>

            <!-- search layer -->
            <div class="search_layer">
                <div class="search">
                    <Icons class="back" txt="닫기" @click="search_close" />
                    <div>
                        <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                        <Icons class="btn_search" txt="검색" />
                    </div>
                    <Icons class="barcode" txt="바코드" />
                </div>
                <section v-if="isValid === ''" class="keyword_sec">
                    <strong>
                        인기검색
                        <span>3분전 갱신</span>
                    </strong>
                    <div class="keyword_wrap">
                        <div class="keyword">
                            <ol>
                                <li>
                                    <a href="#none" class="up"><em>1</em><span>장원영 네컷</span></a>
                                </li>
                                <li>
                                    <a href="#none" class="up"><em>2</em><span>노세범</span></a>
                                </li>
                                <li>
                                    <a href="#none" class="down"><em>3</em><span>메이크업도구</span></a>
                                </li>
                                <li>
                                    <a href="#none"><em>4</em><span>그린티 신상</span></a>
                                </li>
                                <li>
                                    <a href="#none"><em>5</em><span>아이라이너</span></a>
                                </li>
                            </ol>
                            <ol>
                                <li>
                                    <a href="#none"><em>6</em><span>검색어 최대 9자까지 가능</span></a>
                                </li>
                                <li>
                                    <a href="#none" class="down"><em>7</em><span>바디로션</span></a>
                                </li>
                                <li>
                                    <a href="#none" class="new"><em>8</em><span>선크림</span></a>
                                </li>
                                <li>
                                    <a href="#none"><em>9</em><span>신규 구매 혜택</span></a>
                                </li>
                                <li>
                                    <a href="#none" class="up"><em>10</em>이벤트</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section v-if="isValid === ''">
                    <strong>최근검색어
                        <Button class="btn_txt" txt="전체삭제" @click="keyword_del_all" />
                    </strong>
                    <ul class="latest">
                        <template  v-if="key_cnt > 0">
                            <li v-for="(item, idx) in latestSearchWordData" :key="idx">
                                <div v-if="key_cnt > 0">
                                    <a href="#none">{{ item.word }}</a>
                                    <Button class="btn_del" @click="keyword_del" />
                                </div>
                            </li>
                        </template>
                        <template v-else>
                            <li class="no_data">최근 검색어가 없습니다.</li>
                        </template>
                    </ul>
                </section>
                <section v-if="isValid === ''">
                    <div class="cate_wrap">
                        <ul class="category">
                            <li v-for="item in categoryForSearchLayerData" :key="item">
                                <a href="#none">
                                    <span class="thumb">
                                        <em><img :src="item.imageUrl" /></em>
                                    </span>
                                    <p>{{ item.text }}</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section v-if="isValid !== '' && !isBool">
                    <ul class="auto">
                        <li v-for="(item, idx) in auto_list" :key="idx">
                            <a :href="item.url">
                                {{ item.text }}
                                <span>{{ item.latest }}</span>
                            </a>
                        </li>
                    </ul>
                </section>
                <section v-if="isValid !== '' && !isBool">
                    <ul class="key_item goods_list">
                        <li v-for="(item,idx) in prd_list" :key="idx">
                            <GoodsItem :item="item" :link="item.link" />
                        </li>
                    </ul>
                </section>
                <section v-if="isBool">
                    <div class="no_content">
                        일치하는 결과가 없습니다.
                    </div>
                </section>
            </div>
            <!-- //search layer -->
        </div>
        <div class="gnb_wrap">
            <NavGnb :gnb="gnb_list" />

            <div class="navCategory">
                <!-- mo search -->
                <div class="search">
                    <div>
                        <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                        <Icons class="btn_search" txt="검색" />
                    </div>
                    <Icons class="cart" txt="50" />
                </div>
                <!-- //mo search -->

                <!-- mo banner -->
                <div class="banner">
                    <a href="#none">한정 기간 특가할인 / 사은품 증정 제품 모아보기</a>
                </div>
                <!-- //mo banner -->

                <nav>
                    <div class="nav_wrap">
                        <ul>
                            <li v-for="(item,idx) in global_menu" :key="idx">
                                <a :href="item.link" @click="cate_tab"><span>{{ item.menu }}</span></a>
                            </li>
                        </ul>
                        <div>
                            <section v-for="(item,idx) in global_menu" :key="idx">
                                <a href="#none">{{ item.menu }} 전체</a>
                                <ul class="list">
                                    <li v-for="(item,idx) in item.sub_menu" :key="idx">
                                        <a :href="item.link">
                                            <img :src="item.img">
                                            {{ item.menu }}
                                        </a>
                                    </li>
                                </ul>
                                <ul class="goods" v-if="item.goods">
                                    <li v-for="item in item.goods" :key="item">
                                        <GoodsItem :item="item" />
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div class="quick_wrap">
                        <ul class="quick">
                            <li>
                                <a href="#none">신규가입혜택</a>
                            </li>
                            <li>
                                <a href="#none">멤버십 혜택</a>
                            </li>
                            <li>
                                <a href="#none">ABOUT</a>
                            </li>
                            <li>
                                <a href="#none">공병수거</a>
                            </li>
                            <li>
                                <a href="#none">매장안내</a>
                            </li>
                            <li>
                                <a href="#none">마이샵</a>
                            </li>
                        </ul>
                    </div>
                    <div class="list_wrap">
                        <ul class="event_list">
                            <li v-for="(item, idx) in nav_goods" :key="idx">
                                <!-- <EventItem :item="item" :link="item.link" /> -->
                                <a href="#none">
                                    <div>
                                        <img :src="item.img">
                                        <em class="type04">{{ item.cate }}</em>
                                    </div>
                                    <dl>
                                        <dt></dt>
                                        <dd v-if="item.title_01">{{item.title_01}}</dd>
                                        <dd v-if="item.title_02">{{item.title_02}}</dd>
                                        <dd v-if="item.title_02">{{item.title_03}}</dd>
                                    </dl>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <div id="modal_nav" class="modal_wrap">
        <div class="modal_container">
            <div class="modal_header">
                <button class="btn_close" @click="modal.close(this);">닫기</button>
            </div>
            <div class="modal_content">
                <ul>
                    <li class="active"><a href="#none">특가</a></li>
                    <li><a href="#none">이벤트</a></li>
                    <li><a href="#none">베스트</a></li>
                    <li><a href="#none">쇼케이스</a></li>
                    <li><a href="#none">에디터</a></li>
                    <li><a href="#none">라이브</a></li>
                    <li><a href="#none">FOR ME</a></li>
                </ul>
            </div>
        </div>
        <div div class="overlay" @click="modal.close(this);"></div>
    </div>
</template>

<script setup>
import { modal } from '~/assets/js/common-ui'
import {
    mainTopBannerData,
    categoryForSearchLayerData,
    latestSearchWordData,
    sample_goods
} from '~/test/data/publish/dummyData'

/* sample data */
const global_menu = [
    {
        link:'#none', menu:'스킨케어',
        sub_menu: [
            {link:'#none', menu:'에센스/세럼/앰플'},
            {link:'#none', menu:'로션/크림'},
            {link:'#none', menu:'스킨/토너/미스트'},
            {link:'#none', menu:'선케어'},
            {link:'#none', menu:'클렌징'},
            {link:'#none', menu:'팩/마스크'},
            {link:'#none', menu:'립/아이케어'},
            {link:'#none', menu:'오일/마사지'},
            {link:'#none', menu:'기획세트'},
            {link:'#none', menu:'기타'}
        ],
        goods: [
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-1.png', name: '2024 레티놀 앰플 럭키박스', cate:'BEST'},
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-2.png', name: '2024 레티놀 앰플 럭키박스', cate:'BEST'},
        ]
    }, {
        link:'#none', menu:'메이크업',
        sub_menu: [
            {link:'#none', menu:'페이스메이크업'},
            {link:'#none', menu:'아이메이크업'},
            {link:'#none', menu:'립메이크업'},
            {link:'#none', menu:'네일'}
        ],
        goods: [
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-3.png', name: '노세범 블러 프라이머 25mL', cate:'BEST'},
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-4.png', name: '노세범 AC 파우더 5G'},
        ]
    }, {
        link:'#none', menu:'남성',
        sub_menu: [
            {link:'#none', menu:'스킨케어'},
            {link:'#none', menu:'클렌징'},
            {link:'#none', menu:'선케어'},
            {link:'#none', menu:'헤어 스타일링'},
            {link:'#none', menu:'기획세트'}
        ],
        goods: [
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-5.png', name: '포레스트 포맨 쉐이빙&클렌징 폼', cate:'BEST'},
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-6.png', name: '포레스트 프레시 스킨 로션 2종 세트', cate:'BEST'},
        ]
    }, {
        link:'#none', menu:'헤어/바디',
        sub_menu: [
            {link:'#none', menu:'핸드/풋케어'},
            {link:'#none', menu:'바디 로션/미스트'},
            {link:'#none', menu:'바디 워시/청결제'},
            {link:'#none', menu:'헤어 에센스/미스트'},
            {link:'#none', menu:'샴푸/트리트먼트'}
        ],
        goods: [
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-7.png', name: '아일 넘버 바디 앤 핸드 워시 300mL'},
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-8.png', name: '[LTD] 마이퍼퓸드 핸드크림 2종 기획 세트'},
        ]
    }, {
        link:'#none', menu:'기획세트',
        sub_menu: [
            {link:'#none', menu:'기획세트'}
        ],
        goods: [
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-9.png', name: '[LTD] 블랙티 유스 인핸싱 앰플 세트', cate:'BEST'},
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-10.png', name: '[LTD] 비타C 잡티 토닝 세럼 대용량 세트', cate:'BEST'},
        ]
    }, {
        link:'#none', menu:'미용소품',
        sub_menu: [
            {link:'#none', menu:'네일 소품'},
            {link:'#none', menu:'헤어/바디 소품'},
            {link:'#none', menu:'화장솜/면봉/기름종이'},
            {link:'#none', menu:'클렌징 소품'},
            {link:'#none', menu:'기타 소품'},
        ],
        goods: [
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-11.png', name: '패들 헤어 브러시 1EA'},
            {img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-12.png', name: '리스테이 리-스펜서 350mL'},
        ]
    }, {
        link:'#none', menu:'고민별제품',
        sub_menu: [
            {link:'#none', menu:'수분/보습/속건조', img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-13.png'},
            {link:'#none', menu:'모공/피지/블랙헤드', img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-14.png'},
            {link:'#none', menu:'주름/탄력', img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-15.png'},
            {link:'#none', menu:'트러블/리페어', img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-16.png'},
            {link:'#none', menu:'각질/피부결', img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-17.png'},
            {link:'#none', menu:'잡티/피부결', img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-18.png'},
            {link:'#none', menu:'영양/토탈안티에이징', img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-19.png'},
            {link:'#none', menu:'진정/민감', img:'/_nuxt/assets/images/sam/category_sam_goods_list_00-20.png'}
        ]
    },

]

const gnb_list = ['이벤트', '특가', '베스트', '쿠폰존', '쇼케이스', '라이브', 'FOR ME', '임직원샵']

const nav_goods = [
    {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_01.png"),
        cate:'제휴혜택',
        title_01:'2024 새해',
        title_02:'콜라겐크림 기획전',
        title_03:'럭키박스 + 럭키드로우',
    }, {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_02.png"),
        cate:'체험리뷰',
        title_01:'N페이 3만원 결제시',
        title_02:'1만원 적립!',
        title_03:'N페이 5천+뷰티5천',
    }, {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_03.png"),
        cate:'쇼핑혜택',
        title_01:'N페이 3만원 결제시',
        title_02:'1만원 적립!',
        title_03:'N페이 5천+뷰티5천',
    }, {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_04.png"),
        cate:'쇼핑혜택',
        title_01:'단, 8일',
        title_02:'선물같은 혜택',
        title_03:'콜라보 데님 인디고 BAG',
    }, {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_05.png"),
        cate:'체험리뷰',
        title_01:'2023 디렉터파이',
        title_02:'비타민C 앰플',
        title_03:'TOP of TOP 선정!',
    }, {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_01.png"),
        cate:'제휴혜택',
        title_01:'2024 새해',
        title_02:'콜라겐크림 기획전',
        title_03:'럭키박스 + 럭키드로우',
    }, {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_02.png"),
        cate:'체험리뷰',
        title_01:'N페이 3만원 결제시',
        title_02:'1만원 적립!',
        title_03:'N페이 5천+뷰티5천',
    }, {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_03.png"),
        cate:'쇼핑혜택',
        title_01:'N페이 3만원 결제시',
        title_02:'1만원 적립!',
        title_03:'N페이 5천+뷰티5천',
    }, {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_04.png"),
        cate:'쇼핑혜택',
        title_01:'단, 8일',
        title_02:'선물같은 혜택',
        title_03:'콜라보 데님 인디고 BAG',
    }, {
        img:("/_nuxt/assets/images/sam/category_sam_goods_list_05.png"),
        cate:'체험리뷰',
        title_01:'2023 디렉터파이',
        title_02:'비타민C 앰플',
        title_03:'TOP of TOP 선정!',
    },
]

const sample_auto = [
    {text:'그린히알루론산',url:'#none',latest:'3분전'},
    {text:'그린티 세럼', url:'#none',latest:'3시간전'},
    {text:'New 그린티 씨드 히알루론산 세럼', url:'#none',latest:'5일전'},
    {text:'역대급 그티 클럽 키트', url:'#none',latest:'1주전'}
];
/* //sample data */

onMounted(() => {
    const header = document.querySelector('header');
    window.scrollY > 0 ? header.classList.add('fixed') : header.classList.remove('fixed');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) header.classList.add('fixed');
        if(window.scrollY <= 0) header.classList.remove('fixed');
    })

    document.querySelector('.btn_search').addEventListener('click',()=>{
        document.querySelector('.search_layer').classList.add('active');
    });

    document.querySelector('.nav_wrap > ul li').classList.add('active');
    document.querySelector('.nav_wrap > div').addEventListener('scroll', (e) => {
        [...e.target.children].forEach((item,index) => {
            document.querySelectorAll('.nav_wrap > ul li')[index].classList.remove('active');

            if(
                e.target.scrollTop >= item.offsetTop &&
                e.target.scrollTop <= item.offsetTop + (item.offsetHeight-1)
            ) {
                document.querySelectorAll('.nav_wrap > ul li')[index].classList.add('active');
            }
        });
    });

    document.querySelector('.search_layer .input input').addEventListener('input', auto_complete);
});

const isValid = ref('');
const isBool = ref(false);
const auto_list = ref([]);
const prd_list = ref([]);

const auto_complete = (e) => {
    isValid.value = e.target.value;

    auto_list.value = sample_auto.filter(e => e.text.indexOf(isValid.value) >= 0);
    prd_list.value = sample_goods.filter(e => e.name !== undefined && e.name.indexOf(isValid.value) >= 0);

    auto_list.value.length <= 0 ? isBool.value = true : isBool.value = false;
};

/* 최근검색어 삭제 */
let key_cnt = ref(latestSearchWordData.length);
const keyword_del = (e) => {
    e.target.closest('li').remove();
    key_cnt.value = document.querySelector('.latest').childElementCount;
}

const keyword_del_all = (e) => {
    const target = e.target.closest('section').querySelector('.latest');

    if(!target.firstElementChild.classList.contains('no_data')){
        while (target.firstElementChild) {
            target.removeChild(target.firstElementChild);
            key_cnt.value = document.querySelector('.latest').childElementCount;
        }
    }
}

const search_close = (e) => {
    e.target.closest('.search_layer').classList.remove('active')
}

const cate_tab = (e) => {
    const lis = [...e.target.parentElement.parentElement.children];
    const index = lis.indexOf(e.target.parentElement);

    const nav_cont = document.querySelector('.nav_wrap > div');
    const target = document.querySelectorAll('.nav_wrap > div section')[index];

    nav_cont.scrollTo({top: target.offsetTop, behavior: 'smooth'});
}
</script>

<style lang="scss" scoped>
.docTopBanner {
    height: 36px;
    padding-right:21px;
    justify-content:space-between;
}
header {
    padding:10px 21px 0;
    position:sticky;
    top:0;
    left:0;
    z-index:10;
    &.fixed {
        background:#fff;
    }
    .inner {
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        >:nth-child(2) {
            margin-left:auto;
        }
        >:last-child {
            margin-right:0;
        }
        h1 {
            a {
                display:block;
                img {
                    height:16px;
                }
            }
        }
        h2 {
            font-size:18px;
            font-weight:500;
            display:flex;
            align-items:center;
            :deep(button) {
                background:unset;
                &:after {
                content:'';
                width:16px;
                height:16px;
                margin-left:10px;
                background-image:url('~/assets/images/common/icon_split.png');
                background-size:250px;
                background-repeat:no-repeat;
                background-position:-110px -60px;
                display:inline-block;
                }
                em {
                padding:0;
                color:#000;
                font-size:18px;
                font-weight:500;
                font-family:'Pretendard';
                }
            }
        }
        .menu_wrap {
            display:flex;
            align-items:center;
            gap:15px;
            .icon_menu {
                margin-right:0;
            }
        }
        .icon_menu {
            display:flex;
            align-items:center;
            gap:10px;
        }
        .search_layer {
            background:rgba(0,0,0,0.6);
            overflow:auto;
            position:fixed;
            top:0;
            right:0;
            bottom:0;
            left:0;
            z-index:10;
            display:none;
            &.active {
                display:block;
            }
            strong {
                margin-bottom:2rem;
                font-size:1.6rem;
                font-weight:600;
                position:relative;
                display:flex;
                justify-content:space-between;
                :deep(.btn_txt) {
                    em {
                        color:#999;
                        font-size:1.2rem;
                    }
                }
                span {
                    color:#999999;
                    font-size:1.2rem;
                    font-weight:300;
                    line-height:1.6rem;
                }
            }
            .search {
                padding:1rem 1.6rem;
                border:0;
                border-radius:0;
                background:#fff;
                display:flex;
                align-items:center;
                & > div {
                    height:4rem;
                    border:1px solid #000;
                    border-radius:5px;
                    overflow:hidden;
                    display:flex;
                    align-items:center;
                    flex:1;
                }
                :deep(.input) {
                    i, input {
                        font-size:1.3rem;
                    }
                    input {
                        padding-right:0.5rem;
                        border:0;
                    }
                }
                .btn_search {
                    width:2.4rem;
                    height:2.4rem;
                    margin-right:1rem;
                    background-color:transparent;
                    background-position:0 -4rem;
                }
                .back {
                    margin-right:1rem;
                }
                .barcode {
                    margin-left:1rem;
                }
            }
            section {
                padding:3rem 0;
                background:#fff;
                & + section:before {
                    border-top:1px solid #f5f5f5;
                    content:'';
                    display:block;
                    transform:translateY(-30px);
                }
                strong {
                    padding:0 2.2rem;
                    margin-bottom:3rem;
                }
                ul {
                    padding:0 2.2rem;
                    margin-bottom:3.1rem;
                    display:flex;
                    flex-wrap:wrap;
                    gap:0.5rem;
                    &.latest {
                        & + strong {
                            margin-bottom:2rem;
                        }
                        li:not(.no_data) {
                            padding:0 1.5rem;
                            border:1px solid #ddd;
                            border-radius:100px;
                            div {
                                display:flex;
                                align-items:center;
                            }
                        }
                        li.no_data {
                            width:100%;
                            padding:5rem 1rem;
                            color:#999;
                            text-align:center;
                        }
                        a {
                            padding:0.7rem 0;
                            color:#333;
                            font-size:1.4rem;
                            font-weight:400;
                            display:block;
                        }
                        :deep(.btn_del) {
                            width:12px;
                            height:12px;
                            margin-top:1px;
                            margin-left:10px;
                            background-color:transparent;
                            position:relative;
                            &:before, &:after {
                                width:10px;
                                margin-top:5px;
                                margin-left:1px;
                                border-top:1px solid #999;
                                content:'';
                                position:absolute;
                                top:0;
                                left:0;
                                display:block;
                            }
                            &:before {
                                transform:rotate(45deg);
                            }
                            &:after {
                                transform:rotate(135deg);
                            }
                            em {
                                padding:0;
                                font-size:0;
                            }
                        }
                    }
                    &.category {
                        padding:0 2.2rem;
                        margin:0;
                        overflow:auto;
                        flex-wrap:nowrap;
                        gap:1.2rem;
                        scrollbar-width:none;
                        &::-webkit-scrollbar {
                            display:none;
                        }
                        li {
                            .thumb {
                                width:5.7rem;
                                height:5.7rem;
                                display:block;
                            }
                            p {
                                margin-top:0.8rem;
                                color:#888;
                                font-size:1.2rem;
                                font-weight:400;
                                text-align:center;
                                white-space:nowrap;
                            }
                        }
                    }
                    &.auto {
                        gap:2.5rem;
                        li {
                            width:100%;
                            a {
                                font-size:1.4rem;
                                font-weight:400;
                                display:flex;
                                align-items:center;
                                justify-content:space-between;
                                span {
                                    color:#aaa;
                                    font-size:1.2rem;
                                    font-weight:400;
                                }
                            }
                        }
                    }
                    &.key_item {
                        margin:0;
                        gap:0.3rem;
                        li {
                            width:100%;
                            padding:0;
                            :deep(.goods_item) {
                                padding:0;
                                display:flex;
                                align-items:center;
                                gap:2rem;
                                .img_wrap {
                                    width:9rem;
                                    .thumb {
                                        width:9rem;
                                        height:12rem;
                                    }
                                    .btnIconBox {
                                        display:none;
                                    }
                                }
                                >a {
                                    .cont {
                                        width:22rem;
                                        .review_score {
                                            display:none;
                                        }
                                        .price {
                                            strong {
                                                margin-right:0.5rem;
                                            }
                                            span {
                                                margin-right:1rem;
                                            }
                                            em {
                                                display:inline-block;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .cate_wrap {
                    padding:0;
                    margin-bottom:5.8rem;
                    overflow:hidden;
                }
                .keyword_wrap {
                    padding:0 2.2rem 3.1rem;
                    .keyword {
                        display:flex;
                    }
                    ol {
                        width:50%;
                        display:flex;
                        flex-wrap:wrap;
                        gap:2.5rem 0;
                        li {
                            width:100%;
                            a {
                                font-size:1.4rem;
                                font-weight:400;
                                display:flex;
                                align-items:center;
                                gap:2.7rem;
                                em {
                                    min-width:1.6rem;
                                    font-size:1.3rem;
                                    font-weight:600;
                                    line-height:1.6rem;
                                    text-align:center;
                                    position:relative;
                                    &:after {
                                        content:'';
                                        width:1.2rem;
                                        height:1.2rem;
                                        background: url('/_nuxt/assets/mo_images/common/icon_split.png') no-repeat -1.5rem -13rem;
                                        background-size:25rem auto;
                                        position:absolute;
                                        top:50%;
                                        right:-1.8rem;
                                        transform:translateY(-50%);
                                    }
                                }
                                span {
                                    overflow: hidden;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 1;
                                }
                                &.up {
                                    em{
                                        &:after {
                                            background-position:0 -13rem;
                                        }
                                    }
                                }
                                &.down {
                                    em{
                                        &:after {
                                            background-position:-3rem -13rem;
                                        }
                                    }
                                }
                                &.new {
                                    em{
                                        &:after {
                                            background-position:-4.5rem -13rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .gnb_wrap {
        margin:6px -21px 0;
        overflow:hidden;
        .inner {
            padding:0 13px;
            overflow:auto;
            display:flex;
            align-items:center;
            & > ul, nav > ul {
                position:relative;
                z-index:1;
                display:flex;
            }
            .quick {
                margin-left:auto;
                li + li {
                    margin-left:6px;
                }
                a {
                    padding:6px 12px;
                    color:#666;
                    font-size:12px;
                    font-weight:600;
                    border:1px solid #ddd;
                    border-radius:100px;
                    display:block;
                }
            }
            .navGnb {
                li {
                    padding:0 2px;
                    display:flex;
                    align-items:center;
                }
                a {
                    padding:15px 8px;
                    font-size:14px;
                    font-weight:400;
                    white-space:nowrap;
                    position:relative;
                    display:block;
                }
            }
        }
        .navCategory {
            background-color:#fff;
            overflow:hidden;
            position:fixed;
            top:0;
            right:0;
            bottom:0;
            left:0;
            z-index:10;
            display:none;
            transition:height 0.28s ease-out;
            &.active {
                display:flex;
                flex-direction:column;
            }
            .search {
                padding: 10px 16px 10px 21px;
                border: 0;
                border-bottom: 1px solid #ddd;
                border-radius: 0;
                display: flex;
                align-items:center;
                & > div {
                    border: 1px solid #000;
                    border-radius: 5px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    flex: 1;
                }
                :deep(.input) {
                    i, input {
                        font-size:13px;
                    }
                    input {
                        padding-right:5px;
                        border:0;
                    }
                }
                .btn_search {
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                    background-color: transparent;
                    background-position: 0 -40px;
                }
                .back {
                    margin-right:10px;
                }
                .cart {
                    margin-left:10px;
                }
            }
            .banner {
                color:#fff;
                font-size:12px;
                font-weight:400;
                background-color:#000;
                a {
                    padding:10px 21px;
                    display:flex;
                    justify-content:space-between;
                    &:after {
                        width:16px;
                        height:16px;
                        background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
                        background-position:-80px 0;
                        background-repeat:no-repeat;
                        background-size:250px auto;
                        content:'';
                        display:block;
                    }
                }
            }
            nav {
                overflow:hidden;
                overflow-y:scroll;
                flex:1;
                .nav_wrap {
                    height:100%;
                    max-height:385px;
                    display:flex;
                    > ul {
                        width:37.333333%;
                        background-color:#F5F5F5;
                        a {
                            padding:16px 10px 16px 21px;
                            color:#999;
                            font-size:14px;
                            font-weight:600;
                            display:block;
                            position:relative;
                            span {
                                position:relative;
                                z-index:1;
                            }
                            &:before {
                                content:'';
                                width:0;
                                height:100%;
                                background:#fff;
                                position:absolute;
                                top:0;
                                left:0;
                                transition:all 0.2s;
                            }
                            > * {
                                pointer-events:none;
                            }
                        }
                        .active {
                            a {
                                color:#000;
                                &:before {
                                    width:100%;
                                }
                            }
                        }
                    }
                    > div {
                        overflow:auto;
                        flex:1;
                        position:relative;
                        a {
                            color:#000;
                            font-size:14px;
                            font-weight:400;
                            padding:16px 21px;
                            display:block;
                        }
                        section {
                            overflow:hidden;
                            > a {
                                font-weight:600;
                                display:flex;
                                &:after {
                                    width:16px;
                                    height:16px;
                                    margin-left:10px;
                                    background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
                                    background-position:-100px 0;
                                    background-repeat:no-repeat;
                                    background-size:250px auto;
                                    content:'';
                                    display:inline-block;
                                }
                            }
                            & + section:before {
                                margin-left:20px;
                                border-top:1px solid #eee;
                                content:'';
                                display:block;
                            }
                            &:last-child {
                                padding-top:10px;
                                margin-top:10px;
                                &:before {
                                    border-top:0;
                                }
                                > a {
                                    display:none;
                                }
                                .list {
                                    margin:0 9px 50px 21px;
                                    display:flex;
                                    flex-wrap:wrap;
                                    gap:5px;
                                    li {
                                        width:48.7%;
                                        a {
                                            padding:0;
                                            font-size:12px;
                                            text-align: center;
                                            img {
                                            width:100%;
                                            padding-bottom:5px;
                                            }
                                        }
                                    }
                                }
                            }
                            .goods {
                                margin:20px 9px 20px 21px;
                                display:flex;
                                gap:5px;
                                li {
                                    width:50%;
                                    :deep(.goods_item) {
                                        padding-bottom:50px;
                                        a {
                                            padding:0;
                                        }
                                        .img_wrap {
                                            .thumb {
                                                width:10rem;
                                                height:auto;
                                                padding-top:133%;
                                            }
                                        }
                                        .btnIconBox {
                                            display:none;
                                        }
                                        .cont {
                                            margin-top:10px;
                                            font-size:12px;
                                            .name {
                                                strong {
                                                    color:#000;
                                                    font-size:12px;
                                                    overflow: hidden;
                                                    display: -webkit-box;
                                                    -webkit-box-orient: vertical;
                                                    -webkit-line-clamp: 2;
                                                    .cate {
                                                        margin-right:0;
                                                    }
                                                }
                                            }
                                            .review_score {
                                                display:none;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .quick_wrap {
                    border-top:5px solid #EEE;
                    border-bottom:5px solid #F5F5F5;
                    overflow:hidden;
                    .quick {
                        background-color:#F5F5F5;
                        overflow:auto;
                        display:flex;
                        gap:1px;
                        scrollbar-width:none;
                        &::-webkit-scrollbar {
                            display:none;
                        }
                        li {
                            background-color:#fff;
                            a {
                                padding:16px 24px;
                                font-size:14px;
                                font-weight:400;
                                white-space:nowrap;
                                display:block;
                            }
                        }
                    }
                }
                .list_wrap {
                    padding:40px 21px 60px;
                    .event_list {
                        display:flex;
                        flex-wrap:wrap;
                        gap:16px;
                        li {
                            width:100%;
                            padding-bottom:16px;
                            border-bottom:1px solid #eeeeee;
                                &:last-child {
                                padding-bottom:0;
                                border-bottom:0;
                                }
                                a {
                                height:100%;
                                display:flex;
                                align-items:center;
                                justify-content:flex-start;
                                gap:16px;
                                    > div {
                                        width:56%;
                                        height:100%;
                                        position:relative;
                                        img {
                                        width:100%;
                                        height:100%;
                                        }
                                        em {
                                        padding:2px 5px;
                                        color:#fff;
                                        font-size:10px;
                                        font-weight:300;
                                        background-color:#000;
                                        position:absolute;
                                        top:0;
                                        left:0;
                                        }
                                    }
                                    dl {
                                        dd {
                                        color:#000;
                                        font-size:14px;
                                        font-weight:600;
                                        line-height:18px;
                                        letter-spacing:-0.4px;
                                        }
                                    }
                                }
                        }
                    }
                }
            }
        }
    }
}

.modal_wrap {
  &#modal_nav {
    .modal_content {
      padding:0;
      ul {
        li {
          &:first-child {
            a {
              border-top:0;
            }
          }
          &.active {
            a {
              color:#00bc70;
              font-weight:700;
              &::after {
                content:'현재 선택';
                width:16px;
                height:16px;
                color:transparent;
                font-size:0;
                background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
                background-repeat:no-repeat;
                background-position:-80px -70px;
                background-size:250px auto;
                display:block;
              }
            }
          }
          a {
            width:100%;
            padding:15px 26px;
            text-align:left;
            border-top:1px solid #f5f5f5;
            color:#000;
            font-weight:300;
            font-size:16px;
            display:flex;
            align-items:center;
            justify-content:space-between;
          }
        }
      }
    }
  }
}
</style>
