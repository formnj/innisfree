<template>
    <div class="docTopBanner txtBanner">
        <a href="#none" class="txt" target="_blank">하나Pay 3만원 결제 시, 하나머니 5천원 적립</a>
        <button type="button" class="btnClose">닫기</button>
    </div>
    <header :class="headers">
        <div class="inner" v-if="headers === 'category'">
          <div class="menu_wrap">
            <Icons cls="back" txt="뒤로가기" />
            <h2><a href="#none">스킨케어</a></h2>
          </div>
          <Search :latest="latest" :category="category" />
          <Icons cls="cart" txt="장바구니" cnt="50" />
        </div>

        <div class="inner" v-if="headers === 'product'">
          <div class="menu_wrap">
            <Icons cls="back" txt="뒤로가기" />
          </div>
          <Icons cls="home" txt="홈" />
          <Search :latest="latest" :category="category" />
          <Icons cls="cart" txt="장바구니" cnt="50" />
        </div>

        <div class="inner" v-if="headers === 'events'">
          <div class="menu_wrap">
            <Icons cls="back" txt="뒤로가기" />
            <h2><a href="#none">쇼케이스</a></h2>
          </div>
          <Icons cls="share" txt="공유" />
          <Search :latest="latest" :category="category" />
          <Icons cls="cart" txt="장바구니" cnt="50" />
        </div>
        <div class="gnb_wrap">
            <div class="inner">
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
            </div>

            <div class="navCategory" @mouseleave="cate_layer.close">
                <!-- mo search -->
                <div class="search">
                    <Button txt="닫기" class="sam_close" @click="cate_layer.close" />
                    <div>
                        <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                        <Button class="btn_search" />
                    </div>
                    <ul class="icon_menu">
                        <li>
                            <a href="#none" class="cart">장바구니
                                <em>5</em>
                            </a>
                        </li>
                    </ul>
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
const props = defineProps({
  headers: String,
})
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
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0) document.querySelector('header').classList.add('fixed');
      if(window.scrollY <= 0) document.querySelector('header').classList.remove('fixed');
    })

    document.querySelector('.btn_search').addEventListener('click',()=>{
        document.querySelector('.search_layer').classList.add('active');
    });
});


/* category layer */
const cate_layer = {
    open: () => {
        document.querySelector('.navCategory').classList.add('active');
    }, close: () => {
        document.querySelector('.navCategory').classList.remove('active');
    }
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
    position:relative;
    &.fixed {
      position:sticky;
      top:0;
      left:0;
      z-index:2;
      &.product {
        background:#fff;
      }
      &.category {
        background:#fff;
        top:-48px;
      }
      &.events {
        background:#fff;
      }
    }
    .inner {
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        :nth-child(2) {
          margin-left:auto;
        }
        >:last-child {
          margin-right:0;
          margin-left:10px;
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
          &::after {
            content:'';
            width:7px;
            height:7px;
            margin-left:15px;
            border-color:#000;
            border-style:solid;
            border-width:0 1px 1px 0;
            display:block;
            transform:rotate(45deg);
          }
        }
        ::v-deep(.icon_menu) {
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
        .menu_wrap {
          display:flex;
          gap:15px;
          .icon_menu {
            margin-right:0;
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
</style>
