<template>
    <ul class="hash">
        <li v-for="(item,idx) in item" :key="idx"><button>{{ item }}</button></li>
    </ul>
</template>

<script setup>
const props = defineProps({
    item: Array,
})
</script>

<style lang="scss">
.hash {
    display:flex;
    flex-wrap:wrap;
    gap:5px;
    button {
        padding:0 8px;
        color:#009D5E;
        font-size:10px;
        background-color:#EDFFF8;
        border-radius:100px;
    }
}
</style>