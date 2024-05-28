<template>
    <DocTopBanner />
    <header>
        <div class="inner">
            <h1><a :href="path+'IN_MO_HOM_01_01'"><img src="/assets/images/common/logo_innisfree.png"></a></h1>
            <div class="icon_menu">
              <a :href="path+'IN_MO_SRC_01_01'">
                <Icons class="btn_search" txt="검색" />
              </a>
              <Icons class="cart" txt="50" />
            </div>
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
                                <EventItem :item="item" :link="item.link" type="type_column" />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import {
    global_menu,
    gnb_list,
    nav_goods
} from '~/test/data/publish/dummyData'

/* path */
const path = '/publish/';

onMounted(() => {
    const header = document.querySelector('header');
    window.scrollY > 0 ? header.classList.add('fixed') : header.classList.remove('fixed');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) header.classList.add('fixed');
        if(window.scrollY <= 0) header.classList.remove('fixed');
    })

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
});

const cate_tab = (e) => {
    const lis = [...e.target.parentElement.parentElement.children];
    const index = lis.indexOf(e.target.parentElement);

    const nav_cont = document.querySelector('.nav_wrap > div');
    const target = document.querySelectorAll('.nav_wrap > div section')[index];

    nav_cont.scrollTo({top: target.offsetTop, behavior: 'smooth'});
};
</script>

<style lang="scss" scoped>
header {
  padding:1rem 2.1rem 0;
  position:sticky;
  top:-50px;
  left:0;
  z-index:10;
  &.fixed {
    background:#fff;
  }
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
            margin-left:auto;
            display:flex;
            gap:10px;
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
                        background-image:url('~/assets/mo_images/common/icon_split.png');
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
                                    background-image:url('~/assets/mo_images/common/icon_split.png');
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
                    padding:4rem 2.1rem 6rem;
                    .event_list {
                        gap:1.6rem;
                        li {
                            width:100%;
                            padding:0;
                            padding-bottom:16px;
                            border-bottom:1px solid #eeeeee;

                            &:last-child {
                                border-bottom:0;
                            }

                            :deep(.event_item) {
                                .item {
                                    .thumb {
                                        width: 18rem;
                                        height: 9.6rem;
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
