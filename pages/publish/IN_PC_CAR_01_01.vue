<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>장바구니</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <!-- custom banner -->
    <div class="customBen">
      <a href="#none">
        <div class="img">
							<img src="https://images.innisfree.co.kr/upload/banner/R05_195_0.png?T202404291707" alt="-">
						</div>
      </a>
    </div>
    <!-- //custom banner -->
  </div>
</template>

<script setup>
import { setFilter } from '~/assets/js/common-ui.js'
import { modal } from '~/assets/js/common-ui.js'

definePageMeta({
layout:'pc-cart'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type:String,
    default:'default'
  }
});

const tab_click = (event)=>{
    let tab_title = document.querySelectorAll('.tab_title')
    tab_title.forEach((a)=>{
        a.classList.remove('current')
    })
    const target = event.currentTarget;
    target.parentNode.classList.add('current');
}
</script>

<style lang="scss" scoped>
</style>
