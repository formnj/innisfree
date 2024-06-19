<template>
  <div id="wrap">
    <HeaderMo
        :useLogo="false"
        :useBack="true"
        :useName="true"
        :useAlarm="true"
        :txt="txt"
        :useNav="false"
        :type="'type_mypage'"
    />
    <div id="container">
        <router-view :type="'is_login'" @title="txt = $event" @page-id="mypage = $event" />
    </div>
    <FooterMo />
    <Actionbar :page-type="mypage" />
  </div>
</template>


<script setup>
const txt = ref(null);
const mypage = ref(null);
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

@import "~/assets/scss/mobile.scss";
</style>
