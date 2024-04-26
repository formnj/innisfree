<template>
    <div class="docTopBanner txtBanner">
        <a :href="mainTopBannerData.url" class="txt" target="_blank">{{mainTopBannerData.bannerText}}</a>
        <button type="button" class="btnClose">닫기</button>
    </div>
    <header>
        <div class="inner">
            <h1><a href="/publish/IN_PC_HOM_01_01"><img src="/assets/images/common/logo_innisfree.png"></a></h1>
            <div class="search_wrap">
                <div class="search">
                    <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                    <Button class="btn_search" />
                </div>
                <!-- search layer -->
                <div class="search_layer">
                    <div class="search">
                        <div>
                            <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                            <Button class="btn_search" />
                        </div>
                    </div>
                    <!-- 최근 검색어 -->
                    <section v-if="isValid === ''">
                        <strong>최근 검색어
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
                    <!-- //최근 검색어 -->
                    <!-- 카테고리 -->
                    <section v-if="isValid === ''">
                        <strong>카테고리</strong>
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
                    </section>
                    <!-- //카테고리 -->
                    <!-- 최근 검색어 : 검색어 입력시 -->
                    <section v-if="isValid !== '' && !isBool">
                        <ul class="auto">
                            <li v-for="item in auto_list" :key="item">
                                <a :href="item.url">
                                    {{ item.word }}
                                    <em>12.29</em>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <!-- //최근 검색어 : 검색어 입력시 -->
                    <!-- 관련상품 : 검색어 입력시 -->
                    <section v-if="isValid !== '' && !isBool">
                        <ul class="key_item goods_list">
                            <li v-for="(item,idx) in prd_list" :key="idx">
                                <GoodsItem :item="item" :link="item.link" />
                            </li>
                        </ul>
                    </section>
                    <!-- 관련상품 : 검색어 입력시 -->
                    <!-- 관련상품X : 검색어 입력시 -->
                    <section v-if="isBool">
                        <div class="no_result">일치하는 결과가 없습니다.</div>
                    </section>
                    <!-- //관련상품X : 검색어 입력시 -->
                </div>
                <!-- //search layer -->
            </div>
            <div class="keyword_wrap">
                <div class="keyword">
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
                        <li>
                            <a href="#none" class="up"><em>1.</em>Keyword Up</a>
                        </li>
                        <li>
                            <a href="#none"><em>2.</em>Keyword default</a>
                        </li>
                    </ol>
                    <div>
                        <p>09:30 기준 인기 검색어</p>
                    </div>
                </div>
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
                        <a href="#none" class="cart">장바구니
                            <em>5</em>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="gnb_wrap">
            <div class="inner">
                <Button class="btn_category" txt="카테고리" @mouseover="cate_layer.open" />
                <nav class="navGnb">
                    <ul>
                        <li>
                            <a href="/publish/IN_PC_HOM_01_05">이벤트</a>
                        </li>
                        <li>
                            <a href="/publish/IN_PC_HOM_01_04" class="point">특가</a>
                        </li>
                        <li>
                            <a href="/publish/IN_PC_HOM_01_00-1">베스트</a>
                        </li>
                        <li>
                            <a href="#none">쿠폰존</a>
                        </li>
                        <li>
                            <a href="/publish/IN_PC_HOM_01_12">쇼케이스</a>
                        </li>
                        <li>
                            <a href="/publish/IN_PC_HOM_01_14">라이브</a>
                        </li>
                        <li>
                            <a href="/publish/IN_PC_HOM_01_15">FOR ME</a>
                        </li>
                        <li>
                            <a href="/publish/IN_PC_HOM_01_16">임직원샵</a>
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
            </div>

            <div class="navCategory" @mouseleave="cate_layer.close">
                <nav>
                    <div class="nav_wrap">
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
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import {
  mainTopBannerData,
  categoryForSearchLayerData,
  sample_goods,
  latestSearchWordData
} from '~/test/data/publish/dummyData'


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
/* //sample data */

onMounted(() => {
    /* keyword rolling */
    var keyword_pos = document.querySelector('.keyword_wrap ol'),
    roll_size = keyword_pos.querySelectorAll('li'),
    roll_timer = 3000;

    var i = 1,
    clone_roll = roll_size[0];

    keyword_pos.insertAdjacentHTML('beforeend', '<li>'+clone_roll.innerHTML+'</li>');

    const roll_fn = () => {
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
    };

    let key_rolling = setInterval(roll_fn, roll_timer);
    /* //keyword rolling */

    /* keyword menu */
    const keyword_wrap = document.querySelector('.keyword_wrap');
    const roll_last = keyword_wrap.querySelector('ol').lastChild;
    const keyword_menu = {
      mouseEnter: (e) => {
        e.target.classList.add('active');
        roll_last.style.display='none';
        clearInterval(key_rolling);
        i=1;
        e.target.querySelector('ol').style.cssText='';
      },
      mouseLeave: (e) => {
        e.target.classList.remove('active');
        roll_last.style.display='';
        key_rolling = setInterval(roll_fn, roll_timer)
      }
    }
    keyword_wrap.addEventListener('mouseenter', keyword_menu.mouseEnter);
    keyword_wrap.addEventListener('mouseleave', keyword_menu.mouseLeave);
    /* keyword menu */

    /* header search layer */
    document.querySelector('.search_wrap > .search input').addEventListener('focus', (e)=>{
        document.querySelector('.search_layer').classList.add('active');
        document.querySelector('.search_layer .input input').focus();
    });

    document.querySelector('.search_layer').addEventListener('mouseleave', (e)=>{
        document.querySelector('.search_layer').classList.remove('active');
    });

    window.addEventListener('scroll', () => {
        const target = document.querySelector('.gnb_wrap');
        const rect = target.getBoundingClientRect();

        if (rect.top <= 0) {
            document.querySelector('#wrap').classList.add('fixed');
            document.querySelector('header h1 img').src = '/_nuxt/assets/images/common/logo_innisfree_bk.png';
            document.querySelector('.keyword_wrap').classList.remove('active');
        }
        else {
            document.querySelector('#wrap').classList.remove('fixed');
            document.querySelector('header h1 img').src = '/_nuxt/assets/images/common/logo_innisfree.png';
        }
    })

    const rect = document.querySelector('.gnb_wrap').getBoundingClientRect();
    if (rect.top <= 0) {
        document.querySelector('#wrap').classList.add('fixed');
        document.querySelector('header h1 img').src = '/_nuxt/assets/images/common/logo_innisfree_bk.png';
    }

    document.querySelector('.search_layer .input input').addEventListener('input', auto_complete);
});

const isValid = ref('');
const isBool = ref(false);
const auto_list = ref([]);
const prd_list = ref([]);

const auto_complete = (e) => {
    isValid.value = e.target.value;

    auto_list.value = latestSearchWordData.filter(e => e.word.indexOf(isValid.value) >= 0);
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
#wrap.fixed {
    header {
        .inner {
            h1 {
                a {
                    width:80px;
                    height:80px;
                    position:fixed;
                    top:0;
                    img {
                        width:80px;
                        height:80px;
                        background:#000;
                    }
                }
            }
            .quick_wrap {
                margin-top:28px;
                position:fixed;
                top:0;
                right:50%;
                transform: translateX(640px);
                .quick {
                    li {
                        &:nth-child(3), &:nth-child(4) {
                            display:none;
                        }
                    }
                }
            }
        }
    }
    .gnb_wrap {
        height:80px;
        .inner {
            height:80px;
            .btn_category {
                margin-left:110px;
            }
            .quick {
                display:none;
            }
        }
    }
    .navCategory {
        .btn_category {
            height:80px;
            padding:0 41px 0 30px;
            left:100px;
        }
    }
}
header {
    border-bottom:1px solid #f5f5f5;
    position:sticky;
    top:-101px;
    z-index:3;
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
            :deep() .search {
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
                :deep() .btn_txt {
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
                        :deep() .btn_del {
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
                    &.auto {
                      flex-direction:column;
                      gap:25px;
                      li {
                        a {
                          color:#333;
                          font-size:14px;
                          font-weight:400;
                          display:flex;
                          align-items:center;
                          justify-content:space-between;
                        }
                      }
                    }
                    &.key_item {
                      flex-direction:column;
                      gap:10px;
                      &.goods_list {
                        margin:0;
                        li {
                          width:100%;
                          padding:0;
                          :deep() .goods_item {
                            display:flex;
                            gap:20px;
                            .img_wrap {
                              overflow:visible;
                              .btnIconBox {
                                display:none;
                              }
                              .thumb {
                                width:75px;
                                height:100%;
                              }
                            }
                            .cont {
                              margin-top:0;
                              .price {
                                strong {
                                  margin-right:5px;
                                  font-size:14px;
                                }
                                span {
                                  margin-right:10px;
                                  font-size:14px;
                                }
                                em {
                                  font-size:12px;
                                }
                              }
                              .hash {
                                flex-wrap:nowrap;
                                li {
                                  width:auto;
                                  button {
                                    padding:4px 8px;
                                    font-family:'Pretendard';
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
                .no_result {
                  height:140px;
                  color:#333;
                  font-size:16px;
                  display:flex;
                  align-items:center;
                  justify-content:center;
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
            .keyword {
              > div {
                padding-top:20px;
                margin-bottom:28px;
                border-top:1px solid #eee;
                display:none;
                p {
                  font-size:13px;
                  font-weight:400;
                  text-align:center;
                }
              }
            }
            &.active {
              width:154px;
              .keyword {
                height:auto;
                padding:0 28px;
                border:2px solid #000;
                border-radius:10px;
                background:#fff;
                overflow:hidden;
                position:absolute;
                top:19%;
                right:50%;
                transform:translate(84%,);
                z-index: 3;
                animation: slideDown .5s ease-in forwards;
                ol {
                  margin-top:28px;
                  margin-bottom:20px;
                  li {
                    padding-top:16px;
                    a {
                      padding:2px 0;
                      &:after {
                        margin-left:auto;
                      }
                    }
                    &:first-child {
                      padding-top:0;
                    }
                  }
                }
                >div {
                  display:block;
                }
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
        background-color:#fff;
        .inner {
            & > ul, nav > ul {
                position:relative;
                z-index:1;
                display:flex;
            }
            :deep(.btn_category) {
                width:140px;
                height:auto;
                padding:18px 0 19px;
                background-color:transparent;
                justify-content:flex-start;
                position:relative;
                em {
                    padding-right:0;
                    padding-left:34px;
                    color:#000;
                    font-size:16px;
                    font-weight:600;
                    font-family:'Pretendard';
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
                &:after {
                    content:'';
                    width:1px;
                    height:16px;
                    background-color:#eee;
                    position:absolute;
                    top:50%;
                    right:10px;
                    transform:translateY(-50%);
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
                padding-left:18px;
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
            border-bottom:1px solid #eee;
            box-shadow:0 10px 20px 0 rgba(0,0,0,0.05);
            position:absolute;
            top:100%; //button height
            right:0;
            left:0;
            z-index:2;
            display:none;
            transition:height 0.28s ease-out;
            &.active {
                display:block;
            }
            nav {
                max-width:1320px;
                margin:0 auto;
                padding:40px 20px;
                background-color:#fff;
                position:relative;
                display:flex;
                gap:40px;
                .nav_wrap {
                    display:flex;
                    dl {
                        width: 120px;
                        & + dl {
                            margin-left:40px;
                        }
                        &:nth-child(8) {
                            padding-right:40px;
                            border-right:1px solid #eee;
                        }
                        dt {
                            margin-bottom:20px;
                            border-bottom:1px solid #eee;
                            a {
                                width:100%;
                                padding-bottom:10px;
                                font-size: 16px;
                                font-weight: 600;
                                display:block;
                            }
                            &:hover {
                              border-bottom:1px solid #00BC70;
                              a {
                                color:#00bc70;
                              }
                            }
                        }
                        dd {
                            li {
                                height:31px;
                                margin-bottom:5px;
                                a {
                                    width:100%;
                                    color:#888;
                                    display:block;
                                    &:hover {
                                      color:#000;
                                      font-weight:600;
                                      border-bottom:1px solid #000;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            :deep(.btn_category) {
                height:60px;
                padding:0 31px 0 20px;
                border:1px solid #eee;
                border-bottom:0;
                background-color:#fff;
                position:absolute;
                top:0;
                left:18px;
                transform:translateY(-100%);
                em {
                    padding-left:34px;
                    padding-right:0;
                    color:#000;
                    font-size:16px;
                    font-weight:600;
                    font-family:'Pretendard';
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
                        border-top:2px solid #00BC70;
                        top:50%;
                    }
                }
            }
        }
    }
}

@keyframes slideDown {
  from {
    max-height:0;
  }
  to {
    max-height:500px;
  }
}
</style>
