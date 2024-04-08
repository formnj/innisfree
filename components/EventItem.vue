<template>
    <div class="item">
        <a :href="props.link">
            <span class="sticker04">쇼핑혜택</span>
            <div class="evtImg">
                <img :src="item.img">
            </div>
            <div class="cnt-area">
                <div class="date">{{ item.date }}</div>
                <div class="name" v-html="item.name"></div>
            </div>
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {},
    link: {
        type: String,
        default: '#none'
    }
})
</script>

<style lang="scss" scoped>
.item {
    width: 413px;

    a {
        position: relative;
        width: 100%;
        height: 100%;

        .sticker04 {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            height: 24px;
            font-size: 14px;
            line-height: 1.29em;
            background-color: #000;
            color: #fff;
            padding: 0 5px;
            display: inline-flex;
            align-items: center;
        }

        .evtImg {
            height: 272px;
            overflow: hidden;
            transition: border .3s;

            img {
                transition: transform .3s;
            }
        }

        .cnt-area {

            &>* {
                transition: color .3s;
            }

            .date {
                display: block;
                margin: 20px 0 5px;
                font-size: 14px;
                line-height: 1.43em;
                letter-spacing: -0.01em;
                color: #666666;
                opacity: 0.8;
            }

            .name {
                margin-top: 5px;
                font-weight: 600;
                font-size: 16px;
                line-height: 1.38em;
                color: #000000;
                overflow: hidden;
                text-overflow: ellipsis;
                word-wrap: break-word;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        &:hover {
            .evtImg {
                border: 1px solid #00BC70;

                img {
                    transform: scale(1.1);
                }
            }

            .cnt-area>* {
                color: #00BC70;
            }
        }
    }
}
</style>