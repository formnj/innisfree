<script setup lang="ts">
useHead({ 
  title: 'Innisfree demo', 
  script: [ {
      src: 'https://cdn.tailwindcss.com',
      type: 'text/javascript',
  }, {src: 'https://unpkg.com/@dotlottie/player-component@1.0.0/dist/dotlottie-player.js'}],
  link: [
   { rel: 'stylesheet', href: 'https://images.innisfree.co.kr/resources/fonts/SDGtNeobUni/fonts.css' },
   { rel: 'stylesheet', href: 'https://images.innisfree.co.kr/resources/mobile/css/common.css' },
   { rel: 'stylesheet', href: 'https://images.innisfree.co.kr/resources/mobile/css/ui.css' },
   { rel: 'stylesheet', href: 'https://images.innisfree.co.kr/resources/mobile/css/ui_add.css' },
   { rel: 'stylesheet', href: 'https://images.innisfree.co.kr/resources/mobile/css/ui_mo_arc.css' },
   { rel: 'stylesheet', href: 'https://images.innisfree.co.kr/resources/mobile/css/event_customerEvent.css' }
  ]
})
</script>
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
