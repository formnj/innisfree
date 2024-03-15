<template>
    <div>
        <Inputs _type="checkbox" _text="Label" />
        <div class="list_wrap">
            <ul class="goods_list">
                <li v-for="(item, idx) in sample_goods" :key="idx">
                    <GoodsItem :item="item" :link="item.link" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
import test from './test.vue';
import Inputs from '../components/Inputs.vue'
import GoodsItem from '../components/GoodsItem.vue'

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
div {
    height:calc(100vh - 157px);
    font-size:44px;
    font-weight:700;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:20px;
}



</style>