<template>
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