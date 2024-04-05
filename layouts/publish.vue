<template>
    <p style="background-color:#fff; position:fixed; top:0; left:0; z-index:9; display:flex;" class="device_test">
        Device : <Button class="btn_small_outline" txt="PC" @click="change_device()" />
        publish
    </p>

    <div id="wrap" :class="device">
        <HeaderPublish :device="device" />
        <div id="container">
            <slot :device="device" />
        </div>
        <FooterPublish :device="device" />
        <Actionbar v-if="device == 'MO'"/>
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
        min-height:100vh;
        max-width:100%;
        margin:0 auto;
        position:relative;
        display:flex;
        flex-direction:column;
    }
}

#container {
    flex:1 auto;
}
</style>