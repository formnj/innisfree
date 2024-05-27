<template>
    <div id="wrap">
        <HeaderMoSub />
        <div id="container" :class="device">
            <div class="content_wrap">
                <div class="content">
                    <router-view />
                </div>
            </div>
        </div>
        <FooterMo />
        <Actionbar />
    </div>
</template>


<script setup>

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

const sam_lnb = ['에센스/세럼/앰플','로션/크림','스킨/토너/미스트','립/아이케어','선케어','오일/마사지','클렌징','팩/마스크','기획 세트','기타'];
/* //device check text : 개발 시 제거해주세요. */
</script>

<style lang="scss" scoped>
#wrap {
    min-height:100vh;
    max-width:100%;
    margin:0 auto;
    position:relative;
    display:flex;
    flex-direction:column;
}

#container {
    flex:1 auto;
}

#container {
    padding:0 2.1rem;
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

@import "~/assets/scss/mobile.scss";
</style>
