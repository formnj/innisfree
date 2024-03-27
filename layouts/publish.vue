<template>
    <p style="display:flex;" class="device_test">
        Device : <Button class="btn_small_outline" txt="PC" @click="change_device()" />
    </p>
    <div id="wrap" :class="device">
        <HeaderPublish :device="device" />
        <div id="container">
            <slot :device="device" />
        </div>
        <FooterPublish :device="device" />
        <Actionbar :device="device"/>
    </div>
</template>


<script setup>
/* device check text : 개발 시 제거해주세요. */
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

onMounted(()=>{
    const topBanner = document.querySelector('.docTopBanner');
    if(topBanner != undefined){
        
    }
})
/* //device check text : 개발 시 제거해주세요. */
</script>

<style lang="scss">
#wrap {
    &.MO {
        width:620px;
        max-width:100%;
        margin:0 auto;
    }
}

#container {
    padding-bottom:100px;
}
</style>