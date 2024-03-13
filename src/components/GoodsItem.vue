<template>
    <div class="goods_item">
        <a :href="props.link">
            <span class="thumb">
                <em><img :src="item.img" /></em>
                <em v-if="item.overflip" class="overflip"><img :src="item.overflip" /></em>
            </span>
        </a>
        <ul class="btnIconBox">
            <li><Button class="btn_Heart" /></li>
        </ul>
        <a :href="props.link">
            <div class="cont">
            </div>
        </a>
    </div>
</template>

<script setup>
import Button from '@/components/Button'

const props = defineProps({
    item: Array,
    link: {
        type: String,
        default: '#none'
    }
})
</script>

<style lang="scss" scoped>
.goods_item {
    .thumb {
        height:320px;
        position:relative;
        display:block;
        em {
            position:absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
            display:flex;
            align-items:center;
            img {
                width:100%;
                height:100%;
                display:block;
                object-fit:cover;
            }
        }
    }
    .btnIconBox {
        button {
            font-size:0;
        }
    }
}
</style>