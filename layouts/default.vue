<script setup lang="ts"></script>
<template>
  <router-link to="/product/product-list">테스트</router-link> |
  <router-link to="/event/event-list">게이트웨이 직접호출</router-link> |
  <a href="/product/product-list?redisUse=Y">노드서버 호출(레디스 적용)</a> |
  <a href="/product/product-list?redisUse=N">노드서버 호출(레디스 미적용)</a> |

  <router-link to="/demo/main">데모(메인)</router-link> |
  <router-link to="/demo/event">데모(이벤트)</router-link> |
  <router-link to="/demo/productList">데모(상품목록)</router-link>

  <div id="container">
    <slot />
  </div>
</template>
