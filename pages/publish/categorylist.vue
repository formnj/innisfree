<template>
    <div class="categorylist" :class="props.device">
        <div class="inner">
            <div class="snb">
                <div class="sub_header">
                    <div class="headerAside">
                        <button class="btn_back" v-if="props.device == 'MO'"></button>
                        <button class="btnNav">스킨케어</button>
                    </div>
                    <div class="myBox" v-if="props.device == 'MO'">
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
            <div class="sub_content">
                <div class="cont_wrap">
                    <div class="title_wrap">
                        <strong v-if="props.device == 'PC'">에센스/세럼/앰플</strong>
                        <span v-if="props.device == 'MO'">총 <strong>32</strong>건</span>
                    </div>
                    <div class="pdtSortTab_wrap">
                        <button class="pdtSortTab" @click="Drop_Down()">추천순</button>
                        <ul>
                            <li><a href="#none" class="active">추천순</a></li>
                            <li><a href="#none">신제품순</a></li>
                            <li><a href="#none">판매량순</a></li>
                            <li><a href="#none">낮은 가격순</a></li>
                            <li><a href="#none">높은 가격순</a></li>
                            <li><a href="#none">리뷰순</a></li>
                            <li><a href="#none">판매금액순</a></li>
                        </ul>
                        <button @click="modal.open('sample_modal', 'full');">상세검색</button>
                    </div>
                </div>
                <div class="list_wrap">
                    <ul class="goods_list">
                        <li v-for="(item, idx) in sample_goods" :key="idx">
                            <GoodsItem :item="item" :link="item.link" />
                        </li>
                    </ul>
                </div>
                <div class="paging" v-if="props.device == 'PC'">
                    <div>
                        <a href="#none" class="first">처음으로</a>
                        <a href="#none">1</a>
                        <a href="#none">2</a>
                        <a href="#none" class="active">3</a>
                        <a href="#none">4</a>
                        <a href="#none">5</a>
                        <a href="#none" class="last">마지막으로</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal_wrap" id="sample_modal">
        <div class="modal_container">
            <div class="modal_header">
                <h2>Modal Title</h2>
                <button class="btn_close" @click="modal.close(this);">닫기</button>
            </div>
            <div class="modal_content">
                <div> Sample Modal </div>
            </div>
            <div class="modal_footer">
                <Button class="btn_outline" txt="cancel" />
                <Button txt="OK" />
            </div>
        </div>
        <div class="overlay" @click="modal.close(this);"></div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'publish'
});
const props = defineProps({
  device: {
    type: String
  }
});



const sample_goods = [
    {
        rang : 1,
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
        sticker:[
            {txt:'type01', type:'type01'},
            {txt:'type02', type:'type02'},
            {txt:'type03', type:'type03'},
            {txt:'type04', type:'type04'}
        ],
        hash:['#스킨팩','#화장솜','#순면화장솜']
    }, {
        rang : 2,
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
        cate:'NEW',
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        status:'coming_soon',
        sticker:[
            {txt:'1+1', type:'type02'},
            {txt:'뷰티포인트전용', type:'type01'},
            {txt:'첫구매전용', type:'type01'}
        ]
    }, {
        rang : 3,
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
        cate:'NEW',
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        status:'coming_soon',
        sticker:[
            {txt:'1+1', type:'type02'},
            {txt:'뷰티포인트전용', type:'type01'},
            {txt:'첫구매전용', type:'type01'}
        ]
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
        hash:['#스킨팩','#화장솜','#순면화장솜']
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
        hash:['#스킨팩','#화장솜','#순면화장솜']
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        hash:['#스킨팩','#화장솜','#순면화장솜']
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    },{
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
    },
    {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
    },
]
/* //component sample data */
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







const Drop_Down = () => {
    let selet = document.querySelector('.pdtSortTab_wrap ul');
    selet.classList.toggle('active')
    if(selet.classList.contains('active')){
        selet.style.display = 'block';
        console.log('if01',selet.clientHeight)
        let c_H = selet.clientHeight;
        selet.style.height = '0px';
        selet.style.border = "1px solid #aaa";
        setTimeout(()=>{
            selet.style.height = c_H + 'px';
        },0);
    }else {
        console.log('else')
        selet.style.height = '0px';
        
        selet.addEventListener('transitionend',()=>{
            selet.removeAttribute('style');
        },{once: true})

    }
}
</script>

<style lang="scss" scoped>
.categorylist{  
    * {
        box-sizing:border-box;
    }
    &.PC{
        .inner {
        max-width:1280px;
        margin:0 auto;
        display:flex;
        position:relative;
            .snb {
                width:200px;
                margin: 60px 60px 0 0;
                .sub_header {
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
            .sub_content {
                flex:1;
                .cont_wrap {
                    margin:60px 0;
                    display:flex;
                    justify-content:space-between;
                    > div {
                        display:flex;
                        strong {
                            font-size:38px;
                            font-weight:300;
                            letter-spacing:-0.01em;
                            position:relative;
                            &::after{
                                content:'34';
                                padding:5px 10px;
                                color:#fff;
                                font-size:12px;
                                font-weight:600;
                                border-radius:15px;
                                background:#00BC70;
                                position:absolute;
                                top:3px;
                                right:-40px;
                                display:inline-block;
                                
                            }
                        }
                        &.pdtSortTab_wrap {
                            position:relative;
                                > button {
                                padding:0 20px;
                                font-weight:600;
                                display:flex;
                                align-items:center;
                                &::after {
                                    content:'';
                                    width:16px;
                                    height:16px;
                                    margin-left:5px;
                                    display:inline-block;
                                }
                                &.pdtSortTab {
                                    &::after {
                                        background-image: url('/_nuxt/assets/images/categorylist/arr_drop.png');
                                        background-repeat: no-repeat;
                                        background-size:contain;
                                    }
                                    & ~ button {
                                    position:relative;
                                        &::after {
                                            background-image: url('/_nuxt/assets/images/categorylist/icon_fix_filter.png');
                                            background-repeat: no-repeat;
                                            background-size:cover;
                                        }
                                        &::before {
                                            content:'';
                                            width:1px;
                                            height:30%;
                                            background:#EEEEEE;
                                            position:absolute;
                                            top:50%;
                                            left:0;
                                            display:inline-block;
                                            transform:translateY(-50%);
                                        } 
                                    }
                                }    
                            }
                            > ul {
                                width:170px;
                                border:1px solid #AAAAAA;
                                background:#fff;
                                position:absolute;
                                left:-70px;
                                top:45px;
                                z-index:999;
                                overflow:hidden;
                                display:none;
                                transition:all 0.2s;
                                li {
                                    padding:10px 15px;
                                    a {
                                        color:#888;
                                        font-size:14px;
                                        transition:all 0.1s;
                                        &.active {
                                            color:#00BC70;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .list_wrap {
                    .goods_list {
                        li {
                            width:25%
                        }
                    }
                }
               
            }

        }
    } //pc
    &.MO{
       .inner {
        padding:20px 21px;

            .snb{
                height:100%;
                position:relative;
                .sub_header {
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
            .sub_content {
                .cont_wrap {
                    margin-bottom:20px;
                    position:relative;
                    z-index:99;
                    display:flex; 
                    align-items:center;
                    justify-content:space-between;
                    .pdtSortTab_wrap{
                        display:flex;
                        > button {
                            font-weight:600;
                            display:flex;
                            align-items:center;
                            &::after {
                                content:'';
                                width:16px;
                                height:16px;
                                margin-left:5px;
                                display:inline-block;
                            }
                            &.pdtSortTab {
                                margin-right:20px;
                                &::after {
                                    background-image: url('/_nuxt/assets/images/categorylist/arr_drop.png');
                                    background-repeat: no-repeat;
                                    background-size:contain;
                                }
                                & ~ button {
                                position:relative;
                                    &::after {
                                        background-image: url('/_nuxt/assets/images/categorylist/icon_fix_filter.png');
                                        background-repeat: no-repeat;
                                        background-size:cover;
                                    }
                                    &::before {
                                        content:'';
                                        width:1px;
                                        height:30%;
                                        background:#EEEEEE;
                                        position:absolute;
                                        top:50%;
                                        left:0;
                                        display:inline-block;
                                        transform:translateY(-50%);
                                    } 
                                }
                            }
                            
                        }
                        > ul {
                            width:170px;
                            background:#fff;
                            position:absolute;
                            right:80px;
                            top:25px;
                            z-index:100;
                            display:none;
                            overflow:hidden;
                            transition: all 0.2s;
                            li {
                                padding:10px 15px;
                                a {
                                    color:#888;
                                    font-size:14px;
                                    &.active {
                                        color:#00BC70;
                                    }
                                }
                            }
                        }

                    }
                    > div {
                        span {
                            strong {
                                color:#00BC70;
                            }
                        }
                        
                    }
                }
                .list_wrap {
                    .goods_list {
                        margin-left: -12px;
                        flex-wrap:wrap;
                        li {
                            width:50%
                        }
                    }
                }
            }
        }
       
    } //mo
    .paging {
        margin-top:60px;
        > div {
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            a {
                width:40px;
                height:40px;
                display:inline-block;
                line-height:40px;
                &.first {
                    width:40px;
                    height:40px;
                    background-image:url('/_nuxt/assets/images/categorylist/arr_last.png');
                    background-repeat:no-repeat;
                    background-size:40px auto;
                    transform: rotate(180deg);
                    text-indent:-9999px;
                }
                &.last {
                    width:40px;
                    height:40px;
                    background-image:url('/_nuxt/assets/images/categorylist/arr_last.png');
                    background-repeat:no-repeat;
                    background-size:40px auto;
                    text-indent:-9999px;
                }
                &.active {
                    position:relative;
                    &::after {
                    content:'';
                    position:absolute;
                    left:50%;
                    bottom:-3px;
                    width:50%;
                    height:3px;
                    background:#00BC70;
                    display:inline-block;
                    transform:translateX(-50%);
                    }
                }
            }
        }
    }
}

</style>