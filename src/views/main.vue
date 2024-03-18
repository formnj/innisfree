<template>
    <div class="content main_wrap">
        <section>
            Main swiper
        </section>

        <section>
            <h2>오늘의 추천 제품
                <a href="#none" class="btn_more">더보기</a>
            </h2>
            <swiper class="main" :modules="modules" :loop="true" :slides-per-view="3" :centeredSlides="true" :space-between="40" navigation :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
                    <swiper-slide v-for="(item, idx) in sample_goods" :key="idx">
                        <GoodsItem :item="item" />
                    </swiper-slide>
                </swiper>
            <div class="inner">

                <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
                    <swiper-slide v-for="(item, idx) in sample_goods" :key="idx">
                        <GoodsItem :item="item" />
                    </swiper-slide>
                </swiper>
            </div>
        </section>
    </div>
</template>

<script setup>
import '@/assets/css/main.scss';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import GoodsItem from '@/components/GoodsItem'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};

const modules= [Navigation, Pagination]

const sample_goods = [
    {
        img:require("@/assets/images/sam/sam_goods_list_01.jpg"),
        overflip:require("@/assets/images/sam/sam_goods_list_01-1.jpg"),
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
        img:require("@/assets/images/sam/sam_goods_list_02.jpg"),
        overflip:require("@/assets/images/sam/sam_goods_list_02-1.jpg"),
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        status:'coming_soon',
        sticker:[
            {txt:'증정', type:'type02'}
        ]
    }, {
        img:require("@/assets/images/sam/sam_goods_list_03.jpg"),
    }, {
        img:require("@/assets/images/sam/sam_goods_list_04.jpg"),
    }, {
        img:require("@/assets/images/sam/sam_goods_list_04.jpg"),
    }
]
</script>

<style lang="scss" scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    height:350px;
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.main {
    .swiper-slide {
        width:620px;
    }
}
</style>