<template lang="">
  <ol>
    <li><nuxt-link to="/sample/only-csr">only-csr</nuxt-link></li>
    <li><a href="/sample/only-ssr">only-ssr</a></li>
    <li><nuxt-link to="/sample/csr-ssr-combine">csr-ssr-combine</nuxt-link></li>
    <li>
      <nuxt-link to="/sample/external-script-defer">external-script-defer</nuxt-link>
      [ vs ]
      <nuxt-link to="/sample/external-script-no-defer">external-script-no-defer</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/sample/lazy-fetch">lazy-fetch</nuxt-link>
      [ vs ]
      <nuxt-link to="/sample/no-lazy-fetch">no-lazy-fetch</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/sample/link-no-prefetch" no-prefetch>link-no-prefetch</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/sample/include-lazy-component">include-lazy-component</nuxt-link>
    </li>
    <li>
      <nuxt-link href="/main?redisUse=Y">노드서버 호출 / CSR(레디스 적용)</nuxt-link>
    </li>
    <li>
      <nuxt-link href="/main?redisUse=N">노드서버 호출 / CSR(레디스 미적용)</nuxt-link>
    </li>
    <li><a href="/event/event-list">SSR 이동 게이트웨이 직접호출</a></li>
  </ol>
</template>
<script setup></script>
<style></style>
