<template>
    <Tabs tabType="type_01" :item="[{txt:'상세정보'},{txt:'리뷰'},{txt:'유의사항'},{txt:'문의'}]" :tabidx="0" @click="tabContShow" />
    <div class="tab_contents">
      <div style="display:block;">
        <ProductDetailConts />
      </div>
      <div>리뷰</div>
      <div>유의사항</div>
      <div>문의</div>
    </div>
</template>
<script setup>
const tabContShow = (e) => {
  const el = e.target;
  const clickedLi = el.closest('li');
  const tabIdx = [...el.closest('li').parentElement.children].indexOf(clickedLi);
  const tabConts = [...el.closest('ul').parentElement.nextSibling.children];
  for(const i in tabConts) {
    tabConts[i].style.display = "none";
  }
  tabConts[tabIdx].style.display = "block";
}
</script>
<style lang="scss" scoped>
.tab_wrap {
  :deep(em) {
    padding:0;
  }
}
.tab_contents{
  & > div {
    display:none;
  }
}
</style>


