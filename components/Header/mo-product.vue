<template>
    <header>
        <div class="inner">
            <div class="search_wrap">
                <div class="search">
                    <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
                    <Button class="btn_search" />
                </div>
                <!-- search layer -->
                <!-- 검색 레이어 컴포넌트 추가 필요 -->
                <!-- //search layer -->
            </div>
            <div class="quick_wrap">
                <ul class="icon_menu">
                    <li>
                        <a href="#none" class="cart">장바구니
                            <em>5</em>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
header {
    padding:10px 21px;
    position:relative;
    .inner {
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        .icon_menu {
            font-size:0;
            li > * {
                width:32px;
                height:32px;
                background-image:url('~/assets/mo_images/common/icon_split.png');
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
                    background-image:url("~/assets/mo_images/common/icon_split.png");
                    background-position:0 0;
                    background-repeat:no-repeat;
                    background-size:250px auto;
                    position:relative;
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
}
</style>
