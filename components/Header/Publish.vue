<template>
    <div class="docTopBanner txtBanner">
        <a href="#none" class="txt" target="_blank">하나Pay 3만원 결제 시, 하나머니 5천원 적립</a>
        <button type="button" class="btnClose">닫기</button>
    </div>
    <header>
        <div class="inner">
            <h1><a href="/publish"><img src="/assets/images/common/logo_innisfree.png"></a></h1>
            <div class="search_wrap">
                <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                <Button />
            </div>
            <div class="keyword_wrap">
                <ol>
                    <li>
                        <a href="#none" class="up">1. 장원영 네컷</a>
                    </li>
                </ol>
            </div>
            <div class="quick_wrap">
                <ul class="quick">
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
                    <li>
                        <a href="#none" class="wish">관심상품</a>
                    </li>
                    <li>
                        <a href="#none" class="mypage">마이페이지</a>
                    </li>
                    <li>
                        <a href="#none" class="delivery">배송조회</a>
                    </li>
                    <li>
                        <a href="#none" class="cart">장바구니</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="gnb_wrap">
            <Button class="btn_category" txt="카테고리" />
            <nav>
                <ul>
                    <li>
                        <a href="#none">특가</a>
                    </li>
                    <li>
                        <a href="#none">이벤트</a>
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
            <ul class="quick">
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

            <div class="navCategory">
                <nav>
                    <dl v-for="(item,idx) in global_menu" :key="idx">
                        <dt>
                            <a :href="item.link">{{ item.menu }}</a>
                        </dt>
                        <dd v-for="(item,idx) in item.sub_menu" :key="idx">
                            <a :href="item.link">{{ item.menu }}</a>
                        </dd>
                    </dl>
                </nav>            
            </div>
        </div>
    </header>
</template>

<script setup>
onMounted(() => {
    var el = document.querySelector('.navCategory');
    document.querySelector('.btn_category').addEventListener('mouseover', () => {
        el.classList.add('show');

        // el.style.height = 'auto'
        // var height = el.clientHeight + 'px';
        // el.style.height = '0px'
        // setTimeout(() => {
        //     el.style.height = height
        // });
    });

    el.addEventListener('mouseleave', () => {
        // el.style.height = '0px'

        // el.addEventListener('transitionend', () => {
            el.classList.remove('show');
        // }, {once: true});
    });
});

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
</script>

<style lang="scss" scoped>
    header {
        border-bottom:1px solid #ddd;
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
                margin:30px;
                display:flex;
            }
            .quick_wrap {
                margin-top:20px;
                margin-bottom:auto;
                margin-left:auto;
                display:flex;
                ul {
                    display:flex;
                }
            }
        }
        .gnb_wrap {
            max-width:1320px;
            margin:0 auto;
            padding:0 20px;
            display:flex;
            align-items:center;
            & > ul, nav > ul {
                position:relative;
                z-index:1;
                display:flex;
            }
            .quick {
                margin-left:auto;
            }
            .navCategory {
                padding-top:40px;
                overflow:hidden;
                position:absolute;
                top:calc(100% - 40px); //button height
                right:0;
                left:0;
                display:none;
                transition:height 0.28s ease-out;
                &.show {
                    display:block;
                }
                nav {
                    max-width:1320px;
                    margin:0 auto;
                    padding:0 20px;
                    display:flex;
                    gap:40px;
                }               
            }
        }
    }
</style>