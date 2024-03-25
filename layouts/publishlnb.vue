<template>
    <p style="display:flex;" class="device_test">
        Device : <Button class="btn_small_outline" txt="PC" @click="change_device()" />
    </p>
    <div id="wrap" :class="device">
        <HeaderPublish :device="device" />
        <div id="container" :class="device">
            <div class="inner">
                <!-- lnb 입니다 -->
                <div class="lnb">
                    <div class="lnb_header">
                        <div class="headerAside">
                            <button class="btn_back" v-if="device == 'MO'"></button>
                            <button class="btnNav">스킨케어</button>
                        </div>
                        <div class="myBox" v-if="device == 'MO'">
                            <button class="btn_search"></button>
                            <button class="btn_cart">
                                <span class="count">0</span>
                            </button>
                        </div>
                        <ul>
                            <li><a href="#none" class="all">전체보기</a></li>
                            <li><a href="#none">에센스/세럼/앰플</a></li>
                            <li class="active"><a href="#none">로션/크림</a></li>
                            <li><a href="#none">스킨/토너/미스트</a></li>
                            <li><a href="#none">립/아이케어</a></li>
                            <li><a href="#none">선케어</a></li>
                            <li><a href="#none">오일/마사지</a></li>
                            <li><a href="#none">클렌징</a></li>
                            <li><a href="#none">팩/마스크</a></li>
                            <li><a href="#none">기획 세트</a></li>
                            <li><a href="#none">기타</a></li>
                        </ul>
                    </div>
                </div>
                <!-- //lnb 입니다 -->
                <!-- 컨텐츠 입니다 -->
                <div class="content">
                    <router-view :device="device"></router-view>
                    {{ device }}
                </div>
                <!-- //컨텐츠 입니다 -->
            </div>
        </div>
        <FooterPublish :device="device" />
        <Actionbar :device="device"/>
    </div>
</template>

<script setup>
/* device check text : 개발 시 제거해주세요. */
const device = ref('PC');

const change_device = () => {
    if(event.target.textContent == 'Mobile'){
        event.target.textContent = 'PC';
        device.value='PC';
    } else {
        event.target.textContent = 'Mobile'
        device.value='MO';
    }
}
/* //device check text : 개발 시 제거해주세요. */
</script>

<style lang="scss">
#container{
    &.PC {
        .inner {
        max-width:1280px;
        margin:0 auto;
        display:flex;
        position:relative;
            .lnb {
                width:200px;
                margin: 60px 60px 0 0;
                .lnb_header {
                    position:sticky;
                    top:30px;
                    .headerAside {
                        .btnNav {
                            font-size:18px;
                            font-weight:600;
                        }
                    }
                        > ul {
                        width:100%;
                        color:#888;
                        font-size:14px;
                        display:flex;
                        flex-direction:column;
                        gap:5px;
                        li {
                            width:100%;
                            padding:12px 0;
                            &.active {
                                color:#000;
                                font-weight:600;
                                border-bottom:1px solid #000;
                                position:relative;
                                a {
                                    &::after{
                                    content:'';
                                    width:12px;
                                    height:12px;
                                    background-image: url('/_nuxt/assets/images/categorylist/arr_r12_black.png');
                                    display:inline-block;
                                    position:absolute;
                                    top:50%;
                                    right:5px;
                                    transform:translateY(-50%);
                                    
                                }
                                }
                                
                            }
                            a {
                            &.all {
                                position:absolute;
                                top:5px;
                                right:5px;
                                display:flex;
                                align-items:center;
                                &::after{
                                    content:'';
                                    width:16px;
                                    height:16px;
                                    margin-left:5px;
                                    background-image: url('/_nuxt/assets/images/categorylist/ico_plus16_gray.png');
                                    display:inline-block;
                                    
                                }
                            }
                            }
                        }
                    }
                }
            }
        }
    }
    &.MO{
       .inner {
        padding:20px 21px;
            .lnb{
                height:100%;
                position:relative;
                .lnb_header {
                    height:100%;
                    position:relative;
                    .headerAside {
                        display:flex;
                        align-items:center;
                        gap:12px;
                        .btn_back {
                            width:35px;
                            height:35px;
                            background-image:url('/_nuxt/assets/images/categorylist/ico_back.png');
                            background-repeat:no-repeat;
                            background-size: 32px auto;
                            background-position:0px 2px;
                        }
                        .btnNav {
                            font-size:18px;
                            font-weight:500;
                            display:inline-flex;
                            align-items:center;
                            &::after {
                                content:'';
                                width:20px;
                                height:20px;
                                margin-left:10px;
                                background-image:url('/_nuxt/assets/images/categorylist/arr_drop.png');
                                background-repeat:no-repeat;
                                background-size:cover;
                                display:inline-block;
                            }
                        }
                    }
                    .myBox {
                        position:absolute;
                        top:0;
                        right:0;
                        display:inline-flex;
                        align-content:center;
                        justify-content:center;
                        gap:12px;
                        button {
                            width:35px;
                            height:35px;
                            background-repeat:no-repeat;
                            background-size: 32px auto;
                            display:inline-block;
                        }
                        .btn_search {
                            background-image:url('/_nuxt/assets/images/categorylist/ico_search_black.png');
                        }
                        .btn_cart {
                            background-image:url('/_nuxt/assets/images/categorylist/ico_cart_black.png');
                            position:relative;
                            span {
                                width:20px;
                                height:20px;
                                color:#fff;
                                font-size:12px;
                                font-weight:600;
                                border-radius:50%;
                                background:#000;
                                display:inline-flex;
                                align-items:center;
                                justify-content:center;
                                position:absolute;
                            }
                        }
                    }
                    > ul {
                        margin-left:-21px;
                        margin-right:-21px;
                        padding:0 21px;
                        margin-bottom:30px;
                        border-bottom:1px solid #F5F5F5;
                        position:sticky;
                        top:300px;
                        display:flex;
                        align-items:center;
                        white-space:nowrap;
                        overflow-x:scroll;
                        overflow-y: hidden;
                        -ms-overflow-style: none;
                        &::-webkit-scrollbar{
                            display:none;
                            }
                        li {
                            margin-right:20px;
                            padding:20px 0;
                            font-size:15px;
                            color:#999;
                            letter-spacing: -0.01em;
                            &.active {
                                color:#000;
                                font-weight:700;
                                border-bottom:2px solid #000;
                            }
                        }

                    }
                }
            }
        }
    }
}
</style>