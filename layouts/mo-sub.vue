<template>
    <div id="wrap">
        <HeaderMoSub />
        <div id="container">
            <router-view />
        </div>
        <FooterMo />
        <Actionbar />
    </div>
</template>


<script setup>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/mobile.scss";

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
