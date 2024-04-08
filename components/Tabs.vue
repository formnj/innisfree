<template>
    <div class="tab_wrap">
        <ul>
            <li v-for="(item, idx) in item" :key="idx">
                <Button :txt="item.txt" />
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {},
    idx: Number
});
</script>

<style lang="scss" scoped>
.tab_wrap {
    ul {
        display:flex;
        li {
            margin-left:-1px;
            flex:1;
            ::v-deep > * {
                width:100%;
                font-size:16px;
                background-color:transparent;
                border:1px solid #eee;
                position:relative;
                display:block;
                em {
                    color:#666;
                }
                &.active {
                    border:3px solid red;
                }
            }
        }
    }
}
</style>