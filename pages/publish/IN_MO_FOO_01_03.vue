<template>
  <div class="inner">
    <Tabs tabType="type_01" :item="[{txt:'Brand Story'},{txt:'Green Tea Heritage'},{txt:'Better For Earth'}]"  :tabidx="0" />
    <section class="current">
      <dl>
        <dt><img src="/_nuxt/public/images/sam/brandStory_bg0101.png" alt=""></dt>
        <dd></dd>
      </dl>
    </section>
  </div>


</template>

<script setup>
definePageMeta({
layout:'mo-name-search-cart'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});

const emit = defineEmits(['title']);

onMounted(() => {
  emit('title','ABOUT')

});

</script>

<style lang="scss" scoped>

.inner {
  padding: 2rem 2.1rem;
  :deep(.tab_wrap) {
    margin-left:-2.1rem;
    margin-right:-2.1rem;
    ul {
      &.type_01 {
        li {
          button {
            height:5.1rem !important;
          }
        }
      }
    }
  }
}

section {
  margin-left:-2.1rem;
  margin-right:-2.1rem;
  display:none;
  &.current {
    display:block;
  }
}

</style>
