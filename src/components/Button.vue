<template>
    <button :class="props.class">
        <em>{{ props.txt }}</em>
    </button>
</template>

<script setup>
    const props = defineProps({
        class: {
            type: String,
            default: 'btn_'
        }, txt: {
            type: String,
            default: 'Button'
        }
    });
</script>
<style lang="scss" scoped>
/* Button : size = [_big, _mid, min] / border = [_outline] */
[class*='btn_'] {
    height:40px;
    background-color:#222;
    display:flex;
    align-items:center;
    em {
        padding:0 20px;
        color:#fff;
        display:block;
    }
    &[class*='_outline'] {
        background-color:transparent;
        border:1px solid #222;
        em {
            color:#222;
        }
    }
    &[class*='_big'] {
        height:60px;
    }
    &[class*='_mid'] {
        height:50px;
    }
    &[class*='_min'] {
        height:30px;
    }
    &[class*='_txt'] {
        height:auto;
    }
}
</style>