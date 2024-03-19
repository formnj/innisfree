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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
