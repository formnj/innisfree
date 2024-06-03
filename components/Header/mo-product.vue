<template>
    <DocTopBanner />
    <header>
        <div class="inner">
            <div class="menu_wrap">
                <Icons class="back" txt="뒤로가기" />
            </div>
            <div class="icon_menu">
                <Icons class="home" txt="홈" />
                <Icons class="share" txt="공유" />
                <a :href="path+'IN_MO_SRC_01_01'">
                    <Icons class="btn_search" txt="검색" />
                </a>
                <Icons class="cart" txt="50" />
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

/* path */
const path = '/publish/';

/* sample data */
/* //sample data */

onMounted(() => {
    const header = document.querySelector('header');
    window.scrollY > 0 ? header.classList.add('fixed') : header.classList.remove('fixed');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) header.classList.add('fixed');
        if(window.scrollY <= 0) header.classList.remove('fixed');
    })
});
</script>

<style lang="scss" scoped>
header {
    padding:1rem 2.1rem 0;
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
                background-image:url('~/assets/mo_images/common/icon_split.png');
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
