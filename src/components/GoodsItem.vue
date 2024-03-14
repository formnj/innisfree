<template>
    <div class="goods_item" :class="item.status">
        <div class="img_wrap">
            <a :href="props.link">
                <span class="thumb">
                    <em><img :src="item.img" /></em>
                    <em v-if="item.overflip" class="overflip"><img :src="item.overflip" /></em>
                </span>
            </a>
            <ul class="btnIconBox">
                <li><Button class="btn_heart" /></li>
                <li><Button class="btn_cart" /></li>
                <li><Button class="btn_buy" /></li>
            </ul>
        </div>
        <a :href="props.link">
            <div class="cont">
                <em v-if="item.cate" class="cate">{{ item.cate }}</em>
                <strong>{{ item.name }}</strong>
                <p class="price">
                    <strong>{{ item.price }}</strong>
                    <span>{{ item.sale }}</span>
                    <em>{{ item.cost }}</em>
                </p>
                <!-- sticker -->
                <Sticker :item="item.sticker" />
                <!-- //sticker -->
                <!-- Hash -->
                <Hash :item="item.hash" />
                <!-- //Hash -->
                <p class="review_score">
                    4.8
                    <em>2,655</em>
                </p>
            </div>
        </a>
    </div>
</template>

<script setup>
import Button from '@/components/Button'
import Sticker from '@/components/Sticker'
import Hash from '@/components/Hash'

const props = defineProps({
    item: Array,
    link: {
        type: String,
        default: '#none'
    }
})
</script>

<style lang="scss">
.goods_item {
    &.sold_out, &.coming_soon {
        .img_wrap:before, .img_wrap:after {
            content:'';
            display:block;
        }
        .img_wrap:before {
            background-color:rgba(0,0,0,0.3);
            position:absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
            z-index:1;
        }
        .img_wrap:after {
            color:#fff;
            position:absolute;
            top:50%;
            left:50%;
            z-index:1;
            transform:translate(-50%, -50%);
        }
        &.sold_out {
            .img_wrap:after {
                content:'sold out';
            }
        }
        &.coming_soon {
            .img_wrap:after {
                content:'coming soon';
            }
        }
    }
    .img_wrap {
        position:relative;
        overflow:hidden;
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
                &.overflip {
                    opacity:0;
                    top:50%;
                    bottom:50%;
                    transition:all 0.3s ease-out;
                }
            }
        }
        .btnIconBox {
            background-color:#00BC70;
            position:absolute;
            right:0;
            bottom:0;
            left:0;
            z-index:1;
            display:flex;
            justify-content:space-around;
            transform:translateY(100%);
            transition:transform 0.3s ease-out;
            button {
                height:auto;
                padding:14px 5px;
                font-size:0;
                background-color:transparent;
                em {
                    width:32px;
                    height:32px;
                    padding:0;
                    background-image:url('@/assets/images/common/icon_split.png');
                    background-repeat:no-repeat;
                }
                &.btn_heart {
                    em {
                        background-position:-220px 0;
                    }
                }
                &.btn_cart {
                    em {
                        background-position:-280px 0;
                    }
                }
                &.btn_buy {
                    em {
                        background-position:-340px 0;
                    }
                }
            }
        }
        &:hover {
            .overflip {
                opacity:1 !important;
                top:0 !important;
                right:0 !important;
                bottom:0 !important;
                left:0 !important;
            }
            .btnIconBox {
                transform:translateY(0);
            }
        }
    }
    .review_score {
        color:#999e9c;
        font-size:12px;
        display:flex;
        align-items:center;
        &:before {
            width:12px;
            height:12px;
            margin-right:2px;
            background-image:url('@/assets/images/common/icon_split.png');
            background-position:-400px 0;
            background-repeat:no-repeat;
            content:'';
            display:block;
        }
    }    
}
</style>