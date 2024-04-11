<template>
    <div class="docTopBanner txtBanner">
        <a href="#none" class="txt" target="_blank">하나Pay 3만원 결제 시, 하나머니 5천원 적립</a>
        <button type="button" class="btnClose">닫기</button>
    </div>
    <header>
        <div class="inner">
          <div class="menu_wrap">
            <Icons class="back" txt="뒤로가기" />
            <h2><Button txt="쇼케이스" @click="modal.open('sample_modal', 'bottom')" /></h2>
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
                  <Icons class="cart" txt="50" />
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
        <div class="gnb_wrap">
            <NavGnb :gnb="gnb_list" />

            <div class="navCategory">
                <!-- mo search -->
                <div class="search">
                    <Icons class="back" txt="닫기" @click="cate_layer.close" />
                    <div>
                        <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                        <Icons class="btn_search" />
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
                    <div class="quick_wrap">
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
                    <div class="prd_wrap">
                      <h2>
                        <a href="#none">한정기간 특가할인 / 사은품 혜택</a>
                      </h2>
                      <div class="list_wrap">
                        <ul class="goods_list">
                          <swiper-container
                            slides-per-view="auto"
                            grab-cursor="true"
                            space-between="3"
                          >
                            <swiper-slide v-for="(item, idx) in sample_goods" :key="idx" class="item">
                              <li>
                                <GoodsItem :item="item" :link="item.link" />
                              </li>
                            </swiper-slide>
                          </swiper-container>
                        </ul>
                      </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <div class="modal_wrap" id="sample_modal">
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
      <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
register();
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

const gnb_list = ['이벤트', '특가', '베스트', '쿠폰존', '쇼케이스', '라이브', 'FOR ME', '임직원샵']

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

const sample_goods = [
    {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[
            {txt:'증정', type:'type02'},
        ],
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        sticker:[
            {txt:'증정', type:'type02'},
        ]
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        sticker:[
            {txt:'증정', type:'type02'},
        ]
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[
            {txt:'증정', type:'type02'},
        ]
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[
            {txt:'증정', type:'type02'},
        ]
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[
            {txt:'증정', type:'type02'},
        ]
    },
]
/* //component sample data */

onMounted(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0) document.querySelector('header').classList.add('fixed');
      if(window.scrollY <= 0) document.querySelector('header').classList.remove('fixed');
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
    })
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
    close: () => {
        document.querySelector('.navCategory').classList.remove('active');
    }
}

const cate_tab = (e) => {
    const lis = [...e.target.parentElement.parentElement.children];
    const index = lis.indexOf(e.target.parentElement);

    const nav_cont = document.querySelector('.nav_wrap > div');
    const target = document.querySelectorAll('.nav_wrap > div section')[index];

    nav_cont.scrollTo({top: target.offsetTop, behavior: 'smooth'});
}

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
      background:#fff;
      position:sticky;
      top:0;
      left:0;
      z-index:10;
      &.category {
        background:#fff;
        top:-48px;
      }
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
          button::v-deep {
            background:unset;
            em {
              padding:0;
              color:#000;
              font-size:18px;
              font-weight:500;
              font-family:'Pretendard';
            }
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
              ::v-deep .btn_txt {
                  em {
                      color:#999;
                      font-size:12px;
                  }
              }
          }
          .search {
              padding:10px 16px;
              border:0;
              border-bottom:1px solid #ddd;
              border-radius:0;
              display:flex;
              align-items:center;
              & > div {
                  border:1px solid #000;
                  border-radius:5px;
                  overflow:hidden;
                  display:flex;
                  align-items:center;
                  flex:1;
                  ::v-deep .icon_menu {
                    margin:0;
                  }
              }
              ::v-deep .input {
                  i, input {
                      font-size:13px;
                  }
                  input {
                      padding-right:5px;
                      border:0;
                  }
              }
              ::v-deep .btn_search {
                  width:24px;
                  height:24px;
                  margin-right:10px;
                  background-color:transparent;
                  background-position:0 -40px;
                  ::v-deep em {
                      padding:0;
                      font-size:0;
                  }
              }
              .back {
                margin-right:10px;
              }
              .cart {
                margin-left:10px;
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
                      ::v-deep .btn_del {
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
                    .label_wrap::v-deep  {
                      i {
                        font-size:13px;
                      }
                      input {
                        font-size:13px;
                        border-right:0;
                      }
                    }
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
                .quick_wrap {
                    border-top:5px solid #EEE;
                    border-bottom:5px solid #EEE;
                    overflow:hidden;
                    .quick {
                      overflow:auto;
                      display:flex;
                      -ms-overflow-style:none;
                      scrollbar-width:none;
                        &::-webkit-scrollbar {
                          display:none;
                        }
                        li {
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
                .prd_wrap {
                  padding:40px 0 40px 21px;
                  h2 {
                    margin-right:21px;
                    margin-bottom:20px;
                    a {
                      font-size:16px;
                      font-weight:600;
                      display:flex;
                      align-items:center;
                      justify-content:space-between;
                      &:after {
                        content:'';
                        width:9px;
                        height:9px;
                        border-color:#000;
                        border-style:solid;
                        border-width:0 0 1px 1px;
                        display:inline-block;
                        transform:rotate(225deg);
                      }
                    }
                  }
                  .goods_list {
                    margin:0;
                    .item {
                      width:38%;
                      display:block;
                      li {
                        width: 100%;
                        ::v-deep(.goods_item) {
                          .img_wrap {
                            .thumb {
                              height:190px;
                            }
                            &:hover {
                              .btnIconBox {
                                transform:translateY(100%);
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
    }
}
.modal_wrap {
  z-index:100;
  .modal_container {
    border-radius:12px 12px 0 0;
  }
  .modal_header {
    padding:0;
    border-radius:100px;
    border-bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
    > .btn_close {
      width:100%;
      height:21px;
      position:relative;
      top:0;
      left:0;
      right:0;
      &::before {
        width:61px;
        height:5px;
        border:0;
        border-radius:4px;
        background-color:#ddd;
        transform:none;
        top:100%;
        left:50%;
        transform:translate(-50%,-100%);
      }
      &::after {
        border:0;
      }
    }
  }
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
              background-position:-80px -40px;
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
</style>
