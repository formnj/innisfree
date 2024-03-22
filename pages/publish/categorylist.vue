<template>
    <div class="categorylist pc">
        <div class="inner">
            <div class="snb">
                <div class="sub_header">
                    <div class="headerAside">
                        <button class="btn_back mo"></button>
                        <button class="btnNav">스킨케어</button>
                    </div>
                    <div class="myBox">
                        <button class="btn_search mo"></button>
                        <button class="btn_cart mo">
                            <span class="count">0</span>
                        </button>
                    </div>
                    <ul>
                        <li class="all"><a href="#none">전체</a></li>
                        <li><a href="#none">에센스/세럼/앰플</a></li>
                        <li><a href="#none">로션/크림</a></li>
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
                    <div class="wrap">
                        <strong>에센스/세럼/앰플</strong>
                        <span>총 <strong>32</strong>건</span>
                    </div>
                    <div class="wrap">
                        <button>추천순</button>
                        <button>상세검색</button>
                    </div>
                </div>
                <div class="list_wrap">
                    <ul class="goods_list">
                        <li v-for="(item, idx) in sample_goods" :key="idx">
                            <GoodsItem :item="item" :link="item.link" />
                        </li>
                    </ul>
                </div>
                <div class="paging">
                    <div>
                        <a href="#none" class="first">처음으로</a>
                        <strong>1</strong>
                        <a href="#none">2</a>
                        <a href="#none">3</a>
                        <a href="#none">4</a>
                        <a href="#none">5</a>
                        <a href="#none" class="last">마지막으로</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'publish'
})

const sample_goods = [
    {
        // img:("/_nuxt/assets/images/sam/sam_goods_list_01.jpg"),
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
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        status:'coming_soon',
        sticker:[
            {txt:'증정', type:'type02'}
        ]
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_03.jpg"),
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    }, {
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
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    }
]
/* //component sample data */

</script>

<style lang="scss" scoped>
</style>