<script setup lang="ts">
useHead({
  title: 'Innisfree demo',
  script: [
    {
      src: 'https://cdn.tailwindcss.com',
      type: 'text/javascript'
    }
  ]
})
</script>
<template>
<<<<<<< HEAD
  <router-link to="/">Index.</router-link> |
  <router-link to="/main">Main</router-link> |
  <router-link to="/login">Login</router-link> |
=======
  <nuxt-link to="/guide">가이드</nuxt-link> | <nuxt-link to="/guide/components">퍼블 컴포넌트</nuxt-link> |
  <nuxt-link to="/poc">테스트</nuxt-link> | <nuxt-link to="/main?redisUse=Y">샘플 메인</nuxt-link> |
  <nuxt-link to="/component-test">AA 작업 컴포넌트</nuxt-link>
>>>>>>> c300676750c9f428ae515d6a284dd7b822887eda
  <slot />
</template>
