<template>
    <header>
        <div class="inner">
            <h1><a href="/"><img src="../assets/images/common/logo_innisfree.png"></a> Guide</h1>
            <ul class="gnb">
                <li><a :href="path">list</a></li>
                <li><a :href="path+'components'">Components</a></li>
                <li><a :href="path+'swiper'">Swiper</a></li>
            </ul>
        </div>
    </header>
</template>

<script setup>
let path = '/guide/'

</script>

<style lang="scss" scoped>
    @import url("@/assets/css/common.scss");
    header {
        padding:20px;
        background-color:#fff;
        border-bottom:1px solid #ddd;
        position:sticky;
        top:0;
        z-index:11;
        .inner {
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
        }
        a {
            color:#222;
            text-decoration:none;
        }
        .gnb {
            display:flex;
            li {
                position:relative;
                a {
                    padding:8px 15px;
                    display:block;
                }
            }
            ul {
                display:inline-flex;
                align-items:center;
                li {
                    display:flex;
                    align-items:center;
                }
                li + li:before {
                    height:10px;
                    border-left:1px solid #ccc;
                    content:'';
                    display:block;
                }
            }
        }
    }
</style>