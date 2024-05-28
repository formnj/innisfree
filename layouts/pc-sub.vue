<template>
    <div id="wrap">
        <HeaderPc />
        <div id="container">
          <Breadcrumb :item="breadcrumbData" />
          <div class="content">
            <router-view />
          </div>
        </div>
        <FooterPc />
    </div>
</template>


<script setup>
import {
  breadcrumbData,
} from '~/test/data/publish/dummyData';
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
  padding-bottom:100px;
  flex:1 auto;
  :deep(.inner) {
    margin:0 auto;
  }
}
</style>
