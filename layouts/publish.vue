<template>
    <p style="display:flex;">
        Device : <Button class="btn_small_outline" txt="PC" @click="change_device()" />
    </p>
    <HeaderPublish />
    <div id="container">
        <router-view></router-view>
    </div>
    <FooterPublish :device="device" />
    <Actionbar :device="device"/>
</template>

<script setup>
const device = ref('PC');

const change_device = () => {
    if(event.target.textContent == 'Mobile'){
        event.target.textContent = 'PC';
        device.value='PC';
    } else {
        event.target.textContent = 'Mobile'
        device.value='MO';
    }
}
</script>

<style lang="scss"></style>