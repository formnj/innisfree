<template>
    <p style="background-color:#fff; position:fixed; top:0; left:0; z-index:9; display:flex;" class="device_test">
        Device : <Button class="btn_small_outline" txt="PC" @click="change_device()" />
        publish
    </p>

    <div id="wrap">
        <HeaderPc />
        <div id="container">
            <router-view />
        </div>
        <FooterPc />
    </div>
</template>


<script setup>
</script>

<style lang="scss" scoped>
#wrap {
    min-height:100vh;
    max-width:100%;
    margin:0 auto;
    position:relative;
    display:flex;
    flex-direction:column;
}

#container {
    flex:1 auto;
}
</style>