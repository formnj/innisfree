<template>
    <div class="breadcrumb">
        <div class="inner">
            <a href="#none">Home</a>
            <dl v-for="(item, idx) in item" :key="idx" @mouseenter="breadcrumb.open" @mouseleave="breadcrumb.close">
                <dt>
                    <Button class="btn_txt" :txt="item.menuText" />
                </dt>
                <dd>
                    <ul>
                        <li v-for="item in item.subMenuList" :key="item"><a :href="item.url">{{item.menuText}}</a></li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        item: {}
    });

    const breadcrumb = {
        open: (e) => {
            e.target.closest('dl').querySelector('dd').style.cssText = 'height:0; border:1px solid #aaa; display:block';
            let client_H = (e.target.closest('dl').querySelector('ul').clientHeight + 2);
            e.target.closest('dl').querySelector('dd').style.height=client_H+'px';
        }, close: (e) => {
            e.target.closest('dl').querySelector('dd').style.cssText = 'height:0; border:0;';
        }
    }
</script>
<style lang="scss">
.breadcrumb {
    border-bottom:1px solid #ddd;
    .inner {
        display:flex;
        > a {
            font-size:0;
        }
        dl {
            position:relative;
            dt {
                button {
                    em {
                        padding:21px 10px !important;
                        color:#999 !important;
                    }
                }
            }
            dd {
                margin-top:-10px;
                background-color:#fff;
                overflow:hidden;
                position:absolute;
                top:100%;
                left:-5px;
                z-index:2;
                display:none;
                transition:height 0.25s ease-in;
                ul {
                    max-height:200px;
                    overflow-y:auto;
                    &::-webkit-scrollbar {
                        width:2px;
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color:#c9c9c9;
                        border-radius:2px;
                    }
                    &::-webkit-scrollbar-track {
                        background-color:transparent;
                    }
                    a {
                        padding:10px 15px;
                        color:#888;
                        font-size:14px;
                        white-space:nowrap;
                        display:block;
                        &:hover {
                            color:#00BC70;
                            font-weight:600;
                        }
                    }
                }
            }
        }
    }
}
</style>
