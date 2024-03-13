<template>
    <div class="modal_wrap">
        <div class="modal_container">
            <div class="modal_header">
                <h2 v-if="_title">{{ _title }}</h2>
                <button class="btn_close" @click="$emit('close-modal')">닫기</button>
            </div>
            <div class="modal_content">
                <slot />
            </div>
        </div>
        <div class="overlay" @click="$emit('close-modal')"></div>
    </div>
</template>
<script setup>
const props = defineProps({
    _title: String
})
</script>
<style lang="scss">
.modal_wrap {
    background-color:rgba(0,0,0,0.3);
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    .modal_container {
        background-color:#fff;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        .modal_content {
            padding:20px;
        }
    }
}
</style>