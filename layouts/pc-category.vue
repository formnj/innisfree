<template>

    <div id="wrap">
        <HeaderPc />
        <div id="container">
            <!-- breadcrumb -->
            <Breadcrumb :item="sam_menu" />
            <div class="content_wrap">
                <!-- lnb -->
                <div class="lnb">
                    <h2>스킨케어
                        <a href="#none">전체보기</a>
                    </h2>
                    <ul>
                        <li v-for="(menu, idx) in sam_lnb" :key="idx" @click="lnb_click($event)"><a href="#none">{{ menu }}</a></li>
                    </ul>
                </div>
                <!-- //lnb -->
                <div class="content">
                    <router-view />
                </div>
            </div>
        </div>
        <FooterPc />
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

const sam_lnb = ['에센스/세럼/앰플','로션/크림','스킨/토너/미스트','립/아이케어','선케어','오일/마사지','클렌징','팩/마스크','기획 세트','기타']
/* //device check text : 개발 시 제거해주세요. */


let lnb_click = (event)=>{
  const target = event.currentTarget;
  let target_parent =target.parentNode;
  let all_li = target_parent.querySelectorAll('li')
  all_li.forEach((a)=>{
    a.classList.remove('active');
  })
  target.classList.add('active')
  // 전체 li에 active 클래스 제거
  //클릭한 대상에게 active 클래스 추가
}
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
    padding-bottom:100px;
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
        position:relative;
        display:flex;
        flex-wrap:wrap;
        position:relative;
        .lnb {
            width:200px;
            height:100%;
            margin-right:60px;
            padding-top:60px;
            position:sticky;
            top:60px;
            z-index:1;
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
                    color:#888;
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
                &.active {
                    color:#000 !important;
                    font-weight:600;
                    border-bottom:1px solid #000;
                    position:relative;
                    a {
                        color:#000 !important;
                        &::after{
                        content:'';
                        width:12px;
                        height:12px;
                        background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
                        background-repeat:no-repeat;
                        background-size:250px;
                        background-position:-210px 0px;
                        display:inline-block;
                        position:absolute;
                        top:50%;
                        right:0px;
                        transform:translateY(-50%);

                        }
                    }
                }
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
</style>
