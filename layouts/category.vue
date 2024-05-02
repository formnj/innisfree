<template>
    <p style="background-color:#fff; position:fixed; top:0; left:0; z-index:9; display:flex;" class="device_test">
        Device : <Button class="btn_small_outline" txt="PC" @click="change_device()" />
        category
    </p>

    <div id="wrap" :class="device">
        <HeaderPublish :device="device" />
        <div id="container" :class="device">
            <!-- breadcrumb -->
            <Breadcrumb :item="sam_menu" v-if="device == 'PC'" />
            <!-- //breadcrumb -->
            <div class="content_wrap">
                <!-- lnb -->
                <div class="lnb">
                    <h2 v-if="device == 'PC'">스킨케어
                        <a href="#none">전체보기</a>
                    </h2>
                    <ul>
                        <li v-if="device == 'MO'"><a href="#none">전체</a></li>
                        <li v-for="(menu, idx) in sam_lnb" :key="idx"><a href="#none">{{ menu }}</a></li>
                    </ul>
                </div>
                <!-- //lnb -->
                <div class="content">
                    <router-view :device="device" />
                </div>
            </div>
        </div>
        <FooterPublish :device="device" />
        <Actionbar v-if="device == 'MO'"/>
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

const sam_menu = [
    {
        depth01:'카테고리',
        sub_depth:['카테고리','특가','이벤트','베스트','라이브','FOR ME','ABOUT','고객센터','마이페이지','공병수거 캠페인','멤버십']
    },
    {
        depth01:'유형별',
        sub_depth:['유형별','피부고민']
    },
    {
        depth01:'스킨케어',
        sub_depth:['스킨케어','메이크업','남성','헤어/바디/펫','기획 세트','미용소품']
    },
    {
        depth01:'전체',
        sub_depth:['전체','에센스/세럼/앰플','로션/크림','스킨/토너/미스트','립/아이케어','선케어','오일/마사지','클렌징','팩/마스크','기획 세트','기타']
    }
]

const sam_lnb = ['에센스/세럼/앰플','로션/크림','스킨/토너/미스트','립/아이케어','선케어','오일/마사지','클렌징','팩/마스크','기획 세트','기타']
/* //device check text : 개발 시 제거해주세요. */
</script>

<style lang="scss">
#wrap {
    &.MO {
        min-height:100vh;
        max-width:100%;
        margin:0 auto;
        position:relative;
        display:flex;
        flex-direction:column;
    }
}

#container.PC {
    flex:1 auto;
    .inner {
        max-width:1320px;
        margin:0 auto;
        padding:0 20px;
        display:flex;
    }
    .content_wrap {
        max-width:1320px;
        margin:0 auto;
        padding:0 20px;
        display:flex;
        flex-wrap:wrap;
        .lnb {
            width:200px;
            margin-right:60px;
            padding-top:60px;
            a {
                display:block;
            }
            h2 {
                margin-bottom:30px;
                font-size:18px;
                font-weight:600;
                display:flex;
                align-items:center;
                justify-content:space-between;
                a {
                    padding-right:21px;
                    font-size:14px;
                    position:relative;
                    &:before, &:after {
                        width:10px;
                        margin-top:-1px;
                        border-top:2px solid #808080;
                        content:'';
                        position:absolute;
                        top:50%;
                        right:0;
                        display:block;
                    }
                    &:after {
                        transform:rotate(90deg);
                    }
                }
            }
            li {
                & + li {
                    margin-top:5px;
                }
                a {
                    padding:12px 0;
                    color:#888;
                    font-size:14px;
                }
            }
        }
    }
    .content {
        flex:1;
    }
}

#container.MO {
    padding:0 20px;
    .content_wrap {
        .lnb {
            margin:0 -20px;
            overflow:hidden;
            ul {
                overflow-x:auto;
                display:flex;
                &::-webkit-scrollbar {
                    display:none;
                }
                li {
                    a {
                        padding:17px 1.3rem;
                        color:#888;
                        font-size:14px;
                        white-space:nowrap;
                        display:block;
                    }
                }
            }
        }
    }
    .content {
        flex:1;
    }
}
</style>
