<template>
    <ul class="sticker">
        <li v-for="(item,idx) in item" :key="idx"><em :class="item.type">{{ item.txt }}</em></li>
    </ul>
</template>

<script setup>
const props = defineProps({
    item: Array,
})
</script>

<style lang="scss" scoped>
.sticker {
    display:flex;
    gap:1px;
    em {
        padding:2px 5px;
        font-size:12px;
        display:block;
        &.type01 {
            color:#666;
            background-color:#eee;            
        }
        &.type02 {
            color:#00bc70;
            background-color:#e0fbf0;
        }
        &.type03 {
            color:#fff;
            background-color:#00BC70;
        }
        &.type04 {
            color:#fff;
            background-color:#000;
        }
    }
}
</style>