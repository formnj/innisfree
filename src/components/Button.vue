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
    color:#fff;
    font-size:14px;
    background-color:#222;
    display:flex;
    align-items:center;
    justify-content:center;
    em {
        padding:0 20px;
        display:block;
    }
    &[class*='_outline'] {
        color:#222;
        background-color:transparent !important;
        border:1px solid #222;
    }
    &[class*='_big'] {
        height:60px;
        font-size:16px;
        font-weight:600;
    }
    &[class*='_mid'] {
        height:50px;
        font-size:14px;
        font-weight:600;
    }
    &[class*='_min'] {
        height:30px;
        font-size:12px;
    }
    &[class*='_small'] {
        height:24px;
        font-size:10px;
    }
    &[class*='_txt'] {
        height:auto;
    }

    /* backgroun-color */
    &[class*='_primary'] {
        background-color:#00BC70;
        color:#fff;
        &[class*='_outline'] {
            color:#00BC70;
            border-color:#00BC70;
        }
    }
}
</style>