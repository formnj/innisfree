<template>
  <div class="inner">
    <Tabs tabType="type_01" :item="[{txt:'Brand Story'},{txt:'Green Tea Heritage'},{txt:'Better For Earth'}]"  :tabidx="0" />
    <section>
      <dl>
        <dt><img src="/_nuxt/public/images/sam/brandStory_bg0101.png" alt=""></dt>
        <dd>
          <h2>
            Effective, <br>Nature-Powered <br>Skincare Discovered <br>from the Island
          </h2>
          <p>
            무한한 자연의 힘을 담은 다채로운 식물과<br> 생명력 가득한 토양을 품은 대지,<br>그리고 미지의 에너지로 가득한 청록의 바다
          </p>
        </dd>
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
  > dl {
    dt {}
    dd {
      margin-top:-3.5rem;
      margin-left:4rem;
      h2 {
        font-size:3.2rem;
        font-weight:700;
        line-height:3.6rem;
      }
      p {
        margin:1.5rem 0 0 0;
        padding:0 0 8rem;
        font-size:1.6rem;
        font-weight:500;
        line-height:2.4rem;
      }
    }
    &::after {
      content:'';
      width:4rem;
      height:4rem;
      margin-left:4rem;
      background-image:url('~/assets/mo_images/common/icon_split.png');
      background-position:-5.7rem -35rem;
      background-repeat:no-repeat;
      background-size:25rem auto;
      display:block;
    }
  }

}

</style>
