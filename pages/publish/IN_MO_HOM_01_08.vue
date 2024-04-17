<template>
  <TabFilter />
  <div class="SortTab_wrap">
      <div class="sort_area">
          <button class="btn_dropdown" @click="modal.open('modal_sort', 'bottom');" >최신순</button>
      </div>
  </div>

  <div id="modal_sort" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this);"></button>
      </div>
      <div class="modal_content">
        <div>
          <ul>
            <li class="active"><a href="#none" class="active">최신순</a></li>
            <li><a href="#none">좋아요순</a></li>
            <li><a href="#none">조회수순</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'mo-sub'
})
</script>

<style lang="scss" scoped>
</style>
