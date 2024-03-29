<template>
    <div class="docTopBanner txtBanner">
        <a href="#none" class="txt" target="_blank">하나Pay 3만원 결제 시, 하나머니 5천원 적립</a>
        <button type="button" class="btnClose">닫기</button>
    </div>
    <header>
        <div class="inner">
            <h1><a href="/publish"><img src="/assets/images/common/logo_innisfree.png"></a></h1>
            <div class="search_wrap">
                <div class="search">
                    <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                    <Button class="btn_search" />
                </div>
                <!-- search layer -->
                <div class="search_layer">
                    <div class="search">
                        <Button txt="닫기" class="sam_close" @click="search_close" v-if="props.device == 'MO'" />
                        <div>
                            <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                            <Button class="btn_search" />
                        </div>
                        <ul class="icon_menu" v-if="props.device == 'MO'">
                            <li v-if="props.device=='PC'">
                                <a href="#none" class="wish">관심상품</a>
                            </li>
                            <li v-if="props.device=='PC'">
                                <a href="#none" class="mypage">마이페이지</a>
                            </li>
                            <li v-if="props.device=='PC'">
                                <a href="#none" class="delivery">배송조회</a>
                            </li>
                            <li>
                                <a href="#none" class="cart">장바구니
                                    <em>5</em>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <section>
                        <strong>최근 검색어
                            <Button class="btn_txt" txt="전체삭제" @click="keyword_del_all" />
                        </strong>
                        <ul class="latest">
                            <template  v-if="key_cnt > 0">
                                <li v-for="(item, idx) in latest" :key="idx">
                                    <div v-if="key_cnt > 0">
                                        <a href="#none">{{ item }}</a>
                                        <Button class="btn_del" @click="keyword_del" />
                                    </div>
                                </li>
                            </template>
                            <template v-else>
                                <li class="no_data">최근 검색어가 없습니다.</li>
                            </template>
                        </ul>
                    </section>
                    <section>
                        <strong>카테고리</strong>
                        <ul class="category">
                            <li v-for="item in category" :key="item">
                                <a href="#none">
                                    <span class="thumb">
                                        <em><img :src="item.img" /></em>
                                    </span>
                                    <p>{{ item.txt }}</p>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                <!-- //search layer -->
            </div>
            <div class="keyword_wrap" v-if="props.device == 'PC'">
                <ol>
                    <li>
                        <a href="#none" class="up"><em>1.</em>Keyword Up</a>
                    </li>
                    <li>
                        <a href="#none"><em>2.</em>Keyword default</a>
                    </li>
                    <li>
                        <a href="#none" class="down"><em>3.</em>Keyword down</a>
                    </li>
                    <li>
                        <a href="#none" class="new"><em>4.</em>Keyword new</a>
                    </li>
                </ol>
            </div>
            <div class="quick_wrap">
                <ul class="quick" v-if="props.device == 'PC'">
                    <li>
                        <a href="#none">로그인</a>
                    </li>
                    <li>
                        <a href="#none">회원가입</a>
                    </li>
                    <li>
                        <a href="#none">고객센터</a>
                    </li>
                    <li>
                        <a href="#none">ABOUT</a>
                    </li>
                </ul>
                <ul class="icon_menu">
                    <li v-if="props.device=='PC'">
                        <a href="#none" class="wish">관심상품</a>
                    </li>
                    <li v-if="props.device=='PC'">
                        <a href="#none" class="mypage">마이페이지</a>
                    </li>
                    <li v-if="props.device=='PC'">
                        <a href="#none" class="delivery">배송조회</a>
                    </li>
                    <li>
                        <a href="#none" class="cart">장바구니
                            <em>5</em>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="gnb_wrap">
            <div class="inner">
                <Button class="btn_category" txt="카테고리" @mouseover="cate_layer.open" v-if="props.device == 'PC'" />
                <nav class="navGnb">
                    <ul>
                        <li>
                            <a href="#none">이벤트</a>
                        </li>
                        <li>
                            <a href="#none" class="point">특가</a>
                        </li>
                        <li>
                            <a href="#none">베스트</a>
                        </li>
                        <li>
                            <a href="#none">쿠폰존</a>
                        </li>
                        <li>
                            <a href="#none">쇼케이스</a>
                        </li>
                        <li>
                            <a href="#none">라이브</a>
                        </li>
                        <li>
                            <a href="#none">FOR ME</a>
                        </li>
                        <li>
                            <a href="#none">임직원샵</a>
                        </li>
                    </ul>
                </nav>
                <ul class="quick" v-if="props.device == 'PC'">
                    <li>
                        <a href="#none">신규가입혜택</a>
                    </li>
                    <li>
                        <a href="#none">멤버십 혜택</a>
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

            <div class="navCategory" @mouseleave="cate_layer.close">
                <!-- mo search -->
                <div class="search" v-if="props.device == 'MO'">
                    <Button txt="닫기" class="sam_close" @click="cate_layer.close" v-if="props.device == 'MO'" />
                    <div>
                        <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                        <Button class="btn_search" />
                    </div>
                    <ul class="icon_menu" v-if="props.device == 'MO'">
                        <li v-if="props.device=='PC'">
                            <a href="#none" class="wish">관심상품</a>
                        </li>
                        <li v-if="props.device=='PC'">
                            <a href="#none" class="mypage">마이페이지</a>
                        </li>
                        <li v-if="props.device=='PC'">
                            <a href="#none" class="delivery">배송조회</a>
                        </li>
                        <li>
                            <a href="#none" class="cart">장바구니
                                <em>5</em>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- //mo search -->

                <!-- mo banner -->
                <div class="banner" v-if="props.device == 'MO'">
                    <a href="#none">한정 기간 특가할인 / 사은품 증정 제품 모아보기</a>
                </div>
                <!-- //mo banner -->
                
                <nav>
                    <div class="nav_wrap" v-if="props.device == 'PC'">
                        <Button class="btn_category" txt="카테고리" />
                        <dl v-for="(item,idx) in global_menu" :key="idx">
                            <dt>
                                <a :href="item.link">{{ item.menu }}</a>
                            </dt>
                            <dd>
                                <ul>
                                    <li v-for="(item,idx) in item.sub_menu" :key="idx">
                                        <a :href="item.link">{{ item.menu }}</a>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </div>

                    <div class="nav_wrap" v-else>
                        <ul>
                            <li v-for="(item,idx) in global_menu" :key="idx">
                                <a :href="item.link">{{ item.menu }}</a>
                            </li>
                        </ul>
                        <div>
                            <section v-for="(item,idx) in global_menu" :key="idx">
                                <a href="#none">{{ item.menu }} 전체</a>
                                <ul class="list">
                                    <li v-for="(item,idx) in item.sub_menu" :key="idx">
                                        <a :href="item.link">{{ item.menu }}</a>
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
                </nav>            
            </div>
        </div>
    </header>
</template>

<script setup>
/* check device 개발적용 시 제거 */
const props = defineProps({
  device: {
    type: String
  }
});

/* sample data */
const global_menu = [
    {
        link:'#none', menu:'스킨케어',
        sub_menu: [
            {link:'#none', menu:'에센스/세럼/앰플'},
            {link:'#none', menu:'로션/크림'},
            {link:'#none', menu:'선케어'},
            {link:'#none', menu:'클렌징'},
            {link:'#none', menu:'팩/마스크'},
            {link:'#none', menu:'립/아이케어'},
            {link:'#none', menu:'오일/마사지'},
            {link:'#none', menu:'기획세트'},
            {link:'#none', menu:'기타'}
        ],
        goods: [
            {img:'https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900', name: '포레스트 포맨 쉐이빙&클렌징 폼', cate:'BEST'},
            {img:'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900', name: '(스티븐해링턴)레티놀 시카 흔적 앰플 한정판 세트', cate:'NEW'}
        ]
    }, {
        link:'#none', menu:'메이크업',
        sub_menu: [
            {link:'#none', menu:'페이스메이크업'},
            {link:'#none', menu:'아이메이크업'},
            {link:'#none', menu:'립메이크업'},
            {link:'#none', menu:'네일'}
        ]
    }, {
        link:'#none', menu:'남성',
        sub_menu: [
            {link:'#none', menu:'스킨케어'},
            {link:'#none', menu:'클렌징'},
            {link:'#none', menu:'선케어'},
            {link:'#none', menu:'헤어 스타일링'},
            {link:'#none', menu:'기획세트'}
        ]
    }, {
        link:'#none', menu:'헤어/바디',
        sub_menu: [
            {link:'#none', menu:'핸드/풋케어'},
            {link:'#none', menu:'바디 로션/미스트'},
            {link:'#none', menu:'바디 워시/청결제'},
            {link:'#none', menu:'헤어 에센스/미스트'},
            {link:'#none', menu:'샴푸/트리트먼트'}
        ]
    }, {
        link:'#none', menu:'기획세트',
        sub_menu: [
            {link:'#none', menu:'기획세트'}
        ]
    }, {
        link:'#none', menu:'미용소품',
        sub_menu: [
            {link:'#none', menu:'미용소품'},
            {link:'#none', menu:'헤어/바디소품'},
            {link:'#none', menu:'화장솜'}
        ]
    }, {
        link:'#none', menu:'남성',
        sub_menu: [
            {link:'#none', menu:'스킨케어'},
            {link:'#none', menu:'클렌징'},
            {link:'#none', menu:'선케어'},
            {link:'#none', menu:'헤어 스타일링'},
            {link:'#none', menu:'기획세트'}
        ]
    }, {
        link:'#none', menu:'고민별제품',
        sub_menu: [
            {link:'#none', menu:'수분/보습/속건조'},
            {link:'#none', menu:'모공/피지/블랙헤드'},
            {link:'#none', menu:'주름/탄력'},
            {link:'#none', menu:'트러블/리페어'},
            {link:'#none', menu:'각질/피부결'},
            {link:'#none', menu:'영양/토탈 안티에이징'},
            {link:'#none', menu:'진정/민감'}
        ]
    },

]

const latest = ['그린티 스킨','그린티 세럼','스킨','세럼','그린티 히알루론산','콜라겐','팩트','노세범','파우더','팩']

const category = [
    {img:'/_nuxt/assets/images/sam/h_cate_01.png', txt:'베스트'},
    {img:'/_nuxt/assets/images/sam/h_cate_02.png', txt:'Sale 52%'},
    {img:'/_nuxt/assets/images/sam/h_cate_03.png', txt:'스킨케어'},
    {img:'/_nuxt/assets/images/sam/h_cate_04.png', txt:'선케어'},
    {img:'/_nuxt/assets/images/sam/h_cate_05.png', txt:'세럼'},
    {img:'/_nuxt/assets/images/sam/h_cate_06.png', txt:'팩/마스크'},
    {img:'/_nuxt/assets/images/sam/h_cate_07.png', txt:'헤어/바디'},
    {img:'/_nuxt/assets/images/sam/h_cate_08.png', txt:'펫'},
    {img:'/_nuxt/assets/images/sam/h_cate_09.png', txt:'기획세트'},
    {img:'/_nuxt/assets/images/sam/h_cate_10.png', txt:'미용소품'}
]
/* //sample data */

onMounted(() => {
    /* keyword rolling */
    var keyword_pos = document.querySelector('.keyword_wrap ol'),
    roll_size = keyword_pos.querySelectorAll('li'),
    roll_timer = 3000;

    var i = 1,
    clone_roll = roll_size[0];

    keyword_pos.insertAdjacentHTML('beforeend', '<li>'+clone_roll.innerHTML+'</li>');

    let key_rolling = setInterval(() => {
        keyword_pos.style.cssText='transform:translateY(-'+(i*40)+'px); transition:all 0.35s ease-in;'
        if(i < (roll_size.length+1)){
            i++;

            if(i == (roll_size.length+1)){
                keyword_pos.addEventListener('transitionend', () => {
                    keyword_pos.removeAttribute('style');
                }, {once: true});
                i = 1;
            }
        }
    }, roll_timer);
    /* //keyword rolling */

    /* 개발 시 제거 */
    /* device check keyword_rolling clear */
    document.querySelector('.device_test button').addEventListener('click',()=>{
        if(props.device == 'MO'){
            clearInterval(key_rolling);
        } else {
            var keyword_pos = document.querySelector('.keyword_wrap ol');

            key_rolling = setInterval(() => {
                keyword_pos.style.cssText='transform:translateY(-'+(i*40)+'px); transition:all 0.35s ease-in;'

                if(i < (roll_size.length+1)){
                    i++;

                    if(i == (roll_size.length+1)){
                        keyword_pos.addEventListener('transitionend', () => {
                            keyword_pos.removeAttribute('style');
                        }, {once: true});
                        i = 1;
                    }
                }
            }, roll_timer);
        }
    })
    /* //device check keyword_rolling clear */

    /* header search layer : PC */
    document.querySelector('.search_wrap > .search input').addEventListener('focus', (e)=>{
        document.querySelector('.search_layer').classList.add('active');
        document.querySelector('.search_layer .input input').focus();
    });

    document.querySelector('.search_layer').addEventListener('mouseleave', (e)=>{
        if(props.device == 'PC') {
            document.querySelector('.search_layer').classList.remove('active');
        }
    });

    /* header search layer : MO */
    document.querySelector('.btn_search').addEventListener('click',()=>{
        if(props.device == 'MO') {
            document.querySelector('.search_layer').classList.add('active');
        }
    });
});

/* 최근검색어 삭제 */
let key_cnt = ref(latest.length);
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

/* category layer */
const cate_layer = {
    open: () => {
        document.querySelector('.navCategory').classList.add('active');
    }, close: () => {
        document.querySelector('.navCategory').classList.remove('active');
    }
}
</script>

<style lang="scss">
#wrap.PC {
    header {
        border-bottom:1px solid #f5f5f5;
        position:relative;
        .inner {
            max-width:1320px;
            margin:0 auto;
            padding:0 20px;
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            h1 {
                a {
                    display:block;
                    img {
                        height:20px;
                    }
                }
            }
            .search_wrap {
                width:400px;
                margin:30px;
                position:relative;
                .search {
                    padding-right:15px;
                    border:1px solid #00BC70;
                    border-radius:40px;
                    overflow:hidden;
                    display:flex;
                    align-items:center;
                    .input {
                        input {
                            height:38px;
                            padding:0 10px 0 20px;
                            border:0;
                        }
                        i {
                            font-size:14px;
                        }
                    }
                    .btn_search {
                        width:24px;
                        height:24px;
                        font-size:0;
                        background-color:transparent;
                        background-image:url('/_nuxt/assets/images/common/icon_split.png');
                        background-position:0 -30px;
                        background-repeat:no-repeat;
                        background-size:250px auto;
                        position:relative;
                    }
                }
            }
            .search_layer {
                background-color:#fff;
                border:2px solid #00BC70;
                border-radius:10px;
                box-shadow:0 10px 20px 0 rgba(0,0,0,0.2);
                overflow:hidden;
                position:absolute;
                top:-1px;
                right:0;
                left:0;
                z-index:10;
                display:none;
                &.active {
                    display:block;
                }
                strong {
                    margin-bottom:20px;
                    font-size:16px;
                    font-weight:600;
                    position:relative;
                    display:flex;
                    justify-content:space-between;
                    .btn_txt {
                        em {
                            color:#999;
                            font-size:12px;
                        }
                    }
                }
                .search {
                    border:0;
                    border-bottom:1px solid #ddd;
                    border-radius:0;
                    display:block;
                    & > div {
                        display:flex;
                        align-items:center;
                        flex:1;
                    }
                }
                section {
                    padding:28px;
                    & + section:before {
                        border-top:1px solid #eee;
                        content:'';
                        display:block;
                        transform:translateY(-28px);
                    }
                    ul {
                        display:flex;
                        flex-wrap:wrap;
                        &.latest {
                            margin-top:-10px;
                            margin-left:-5px;
                            li:not(.no_data) {
                                margin-top:10px;
                                margin-left:5px;
                                padding:0 15px;
                                border:1px solid #ddd;
                                border-radius:100px;
                                div {
                                    display:flex;
                                    align-items:center;
                                }
                            }
                            li.no_data {
                                width:100%;
                                padding:50px 10px;
                                color:#999;
                                text-align:center;
                            }
                            a {
                                padding:7px 0;
                                color:#333;
                                font-size:14px;
                                font-weight:400;
                                display:block;
                            }
                            .btn_del {
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
                            margin-top:-14px;
                            margin-left:-14px;
                            li {
                                width:20%;
                                padding-top:14px;
                                padding-left:14px;
                                p {
                                    margin-top:8px;
                                    color:#888;
                                    font-size:12px;
                                    font-weight:400;
                                    text-align:center;
                                }
                            }
                        }
                    }
                }
            }
            .keyword_wrap {
                height:40px;
                font-weight:600;
                overflow:hidden;
                li > * {
                    padding:11px 0;
                    line-height:18px;
                    display:flex;
                    align-items:center;
                        em {
                            width:22px;
                            margin-right:5px;
                            font-size:13px;
                            text-align:center;
                        }
                    &:after {
                        width:12px;
                        height:12px;
                        margin-left:10px;
                        background-image:url('/_nuxt/assets/images/common/icon_split.png');
                        background-position:-20px -60px;
                        background-repeat:no-repeat;
                        background-size:250px auto;
                        content:'';
                        display:block;
                    }
                    &.up:after {
                        background-position:0 -60px;
                    }
                    &.down:after {
                        background-position:-40px -60px;
                    }
                    &.new:after {
                        background-position:-60px -60px;
                    }
                }
            }
            .quick_wrap {
                margin-top:20px;
                margin-bottom:auto;
                margin-left:auto;
                display:flex;
                ul {
                    display:flex;
                    &.quick {
                        li {
                            position:relative;
                            & + li:before {
                                height:10px;
                                border-left:1px solid #eee;
                                content:'';
                                position:absolute;
                                top:50%;
                                left:0;
                                display:block;
                                transform:translateY(-50%);
                            }
                        }
                        a {
                            padding:4px 16px;
                            color:#666;
                            font-size:12px;
                            display:block;
                        }
                    }
                    &.icon_menu {
                        font-size:0;
                        li {
                            margin-left:12px;
                        }
                        li > * {
                            width:24px;
                            height:24px;
                            background-image:url('/_nuxt/assets/images/common/icon_split.png');
                            background-repeat:no-repeat;
                            background-size:250px auto;
                            position:relative;
                            display:block;
                            &.wish {
                                background-position:-110px -30px;
                            }
                            &.mypage {
                                background-position:-140px -30px;
                            }
                            &.delivery {
                                background-position:-170px -30px;
                            }
                            &.cart {
                                background-position:-200px -30px;
                                em {
                                    width:17px;
                                    height:17px;
                                    color:#fff;
                                    font-size:10px;
                                    font-weight:600;
                                    line-height:17px;
                                    background-color:#00BC70;
                                    border-radius:50%;
                                    position:absolute;
                                    right:-5px;
                                    bottom:-2px;
                                    display:flex;
                                    align-items:center;
                                    justify-content:center;
                                }
                            }
                        }
                    }
                }
            }
        }
        .gnb_wrap {
            border:1px solid #f5f5f5;
            border-right:0;
            border-left:0;
            .inner {
                & > ul, nav > ul {
                    position:relative;
                    z-index:1;
                    display:flex;
                }
                .btn_category {
                    width:140px;
                    height:auto;
                    padding:18px 0 19px;
                    background-color:transparent;
                    em {
                        padding-right:0;
                        padding-left:34px;
                        color:#000;
                        font-size:16px;
                        font-weight:600;
                        position:relative;
                        &:before, &:after {
                            border-top:2px solid #000;
                            content:'';
                            position:absolute;
                            top:5px;
                            left:4px;
                            display:block;
                        }
                        &:before {
                            width:16px;
                            height:12px;
                            border-bottom:2px solid #000;
                            border-right:0;
                            border-left:0;
                        }
                        &:after {
                            width:16px;
                            margin-top:-1px;
                            border-top:2px solid #000;
                            top:50%;
                        }
                    }
                    &.active {
                        padding:18px 31px 18px 20px;
                        border:1px solid #eee;
                        border-top:0;
                        border-bottom:0;
                        box-shadow:3px 3px 3px rgba(0,0,0,0.4);
                        em:before, em:after {
                            border-color:#00BC70;
                        }
                    }
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
                    padding-left:28px;
                    li {
                        height:58px;
                        padding:0 4px;
                        display:flex;
                        align-items:center;
                    }
                    a {
                        padding:0 8px;
                        font-size:16px;
                        font-weight:600;
                        position:relative;
                        display:block;
                        &.point {
                            padding-right:18px;
                            &:after {
                                width:5px;
                                height:5px;
                                background-color:#00BC70;
                                border-radius:50%;
                                content:'';
                                position:absolute;
                                top:0;
                                right:8px;
                                display:block;
                            }
                        }
                    }
                }
            }
            .navCategory {
                background-color:#fff;
                position:absolute;
                top:100%; //button height
                right:0;
                left:0;
                z-index:1;
                display:none;
                transition:height 0.28s ease-out;
                &.active {
                    display:block;
                }
                nav {
                    max-width:1320px;
                    margin:0 auto;
                    padding:0 20px;
                    background-color:#fff;
                    position:relative;
                    display:flex;
                    gap:40px;
                    .nav_wrap {
                        display:flex;
                        dl {
                            & + dl {
                                margin-left:40px;
                            }
                        }
                    }
                }
                .btn_category {
                    height:60px;
                    padding:0 10px 0 30px;
                    border:1px solid #eee;
                    border-bottom:0;
                    background-color:#fff;
                    position:absolute;
                    top:0;
                    left:0;
                    transform:translateY(-100%);
                    em {
                        padding-left:34px;
                        color:#000;
                        font-size:16px;
                        font-weight:600;
                        position:relative;
                        &:before, &:after {
                            border-top:2px solid #00BC70;
                            content:'';
                            position:absolute;
                            top:5px;
                            left:4px;
                            display:block;
                        }
                        &:before {
                            width:16px;
                            height:12px;
                            border-bottom:2px solid #00BC70;
                            border-right:0;
                            border-left:0;
                        }
                        &:after {
                            width:16px;
                            margin-top:-1px;
                            border-top:2px solid #00BC70;
                            top:50%;
                        }
                    }
                }
            }
        }
    }
}

#wrap.MO {
    header {
        padding:10px 21px 0;
        position:relative;
        .inner {
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            h1 {
                a {
                    display:block;
                    img {
                        height:16px;
                    }
                }
            }
            .icon_menu {
                font-size:0;
                li > * {
                    width:32px;
                    height:32px;
                    background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
                    background-repeat:no-repeat;
                    background-size:250px auto;
                    position:relative;
                    display:block;
                    &.cart {
                        background-position:-40px 0;
                        em {
                            height:17px;
                            padding:0 5px;
                            color:#fff;
                            font-size:10px;
                            font-weight:600;
                            line-height:17px;
                            background-color:#000;
                            border-radius:100px;
                            position:absolute;
                            right:-5px;
                            bottom:-5px;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                        }
                    }
                }
            }
            .search_wrap {
                margin-left:auto;
                position:relative;
                & > .search {
                    .label_wrap {
                        display:none;
                    }
                    .btn_search {
                        width:32px;
                        height:32px;
                        font-size:0;
                        background-color:transparent;
                        background-image:url("/_nuxt/assets/mo_images/common/icon_split.png");
                        background-position:0 0;
                        background-repeat:no-repeat;
                        background-size:250px auto;
                        position:relative;
                    }
                }
            }
            .search_layer {
                background-color:#fff;
                overflow:hidden;
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
                    margin-bottom:20px;
                    font-size:16px;
                    font-weight:600;
                    position:relative;
                    display:flex;
                    justify-content:space-between;
                    .btn_txt {
                        em {
                            color:#999;
                            font-size:12px;
                        }
                    }
                }
                .search {
                    padding:10px 16px 10px 21px;
                    border:0;
                    border-bottom:1px solid #ddd;
                    border-radius:0;
                    display:flex;
                    & > div {
                        border:1px solid #000;
                        border-radius:5px;
                        overflow:hidden;
                        display:flex;
                        align-items:center;
                        flex:1;
                    }
                    .input {
                        input {
                            padding-right:5px;
                            font-size:13px;
                            border:0;
                        }
                        i {
                            font-size:13px;
                        }
                    }
                    .btn_search {
                        width:24px;
                        height:24px;
                        margin-right:10px;
                        background-color:transparent;
                        background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
                        background-position:0 -40px;
                        background-repeat:no-repeat;
                        background-size:250px auto;
                        display:block;
                        em {
                            padding:0;
                            font-size:0;
                        }
                    }
                    .icon_menu {
                        margin-left:10px;
                        display:flex;
                        align-items:center;
                        li + li {
                            margin-left:10px;
                        }
                    }
                }
                section {
                    padding:28px;
                    & + section:before {
                        border-top:1px solid #eee;
                        content:'';
                        display:block;
                        transform:translateY(-28px);
                    }
                    ul {
                        display:flex;
                        flex-wrap:wrap;
                        &.latest {
                            margin-top:-10px;
                            margin-left:-5px;
                            li:not(.no_data) {
                                margin-top:10px;
                                margin-left:5px;
                                padding:0 15px;
                                border:1px solid #ddd;
                                border-radius:100px;
                                div {
                                    display:flex;
                                    align-items:center;
                                }
                            }
                            li.no_data {
                                width:100%;
                                padding:50px 10px;
                                color:#999;
                                text-align:center;
                            }
                            a {
                                padding:7px 0;
                                color:#333;
                                font-size:14px;
                                font-weight:400;
                                display:block;
                            }
                            .btn_del {
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
                            margin-top:-14px;
                            margin-left:-14px;
                            li {
                                width:20%;
                                padding-top:14px;
                                padding-left:14px;
                                p {
                                    margin-top:8px;
                                    color:#888;
                                    font-size:12px;
                                    font-weight:400;
                                    text-align:center;
                                }
                            }
                        }
                    }
                }
            }
            .keyword_wrap {
                height:40px;
                font-weight:600;
                overflow:hidden;
                li > * {
                    padding:11px 0;
                    line-height:18px;
                    display:flex;
                    align-items:center;
                        em {
                            width:22px;
                            margin-right:5px;
                            font-size:13px;
                            text-align:center;
                        }
                    &:after {
                        width:12px;
                        height:12px;
                        margin-left:10px;
                        background-image:url('/_nuxt/assets/images/common/icon_split.png');
                        background-position:-20px -60px;
                        background-repeat:no-repeat;
                        background-size:250px auto;
                        content:'';
                        display:block;
                    }
                    &.up:after {
                        background-position:0 -60px;
                    }
                    &.down:after {
                        background-position:-40px -60px;
                    }
                    &.new:after {
                        background-position:-60px -60px;
                    }
                }
            }
            .quick_wrap {
                display:flex;
                ul {
                    display:flex;
                    &.quick {
                        li {
                            position:relative;
                            & + li:before {
                                height:10px;
                                border-left:1px solid #eee;
                                content:'';
                                position:absolute;
                                top:50%;
                                left:0;
                                display:block;
                                transform:translateY(-50%);
                            }
                        }
                        a {
                            padding:4px 16px;
                            color:#666;
                            font-size:12px;
                            display:block;
                        }
                    }
                    &.icon_menu {
                        margin-right:5px;
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
                    .input {
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
                        background-image: url(/_nuxt/assets/mo_images/common/icon_split.png);
                        background-position: 0 -40px;
                        background-repeat: no-repeat;
                        background-size: 250px auto;
                        display: block;
                    }
                }
                .icon_menu {
                    font-size:0;
                    li {
                        margin-left:12px;
                    }
                    li > * {
                        width: 32px;
                        height: 32px;
                        background-image: url('/_nuxt/assets/mo_images/common/icon_split.png');
                        background-repeat: no-repeat;
                        background-size: 250px auto;
                        position: relative;
                        display: block;
                        &.wish {
                            background-position:-110px -30px;
                        }
                        &.mypage {
                            background-position:-140px -30px;
                        }
                        &.delivery {
                            background-position:-170px -30px;
                        }
                        &.cart {
                            background-position:-40px 0;
                            em {
                                height:17px;
                                padding:0 5px;
                                color:#fff;
                                font-size:10px;
                                font-weight:600;
                                line-height:17px;
                                background-color:#000;
                                border-radius:100px;
                                position:absolute;
                                right:-5px;
                                bottom:-5px;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                            }
                        }
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
                    flex:1;
                    .nav_wrap {
                        height:100%;
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
                            }
                            .active {
                                background-color:#fff;
                                a {
                                    color:#000;
                                }
                            }
                        }
                        > div {
                            overflow:auto;
                            flex:1;
                            a {
                                color:#000;
                                font-size:14px;
                                font-weight:400;
                                padding:16px 21px;
                                display:block;
                            }
                            section {
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
                                .goods {
                                    margin:20px 9px 20px -5px;
                                    padding-left:21px;
                                    display:flex;
                                    li {
                                        width:50%;
                                        padding-left:5px;
                                    }
                                    .goods_item {
                                        a {
                                            padding:0;
                                        }
                                        .img_wrap {
                                            .thumb {
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
            }
        }
    }
}
</style>