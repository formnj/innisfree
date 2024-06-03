<template>
  <!-- mobile PRD 전용 -->
  <div id="wrap">
      <HeaderMo
          :useBanner="false"
          :useLogo="false"
          :useBack="true"
          :useMenu="true"
          :txt="txt"
          :useNav="false"
      />
      <div id="container">
          <router-view @title="txt = $event" />
      </div>
      <FooterMo />
      <Actionbar />
  </div>
</template>


<script setup>
const txt = ref(null);
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
