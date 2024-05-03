<template>
    <Tabs tabType="type_01" :item="[{txt:'상세정보'},{txt:'리뷰'},{txt:'유의사항'},{txt:'문의'}]" :tabidx="0" :isProduct="true" :reviewCnt="999" @click="tabContShow" />
</template>
<script setup>
const tabContShow = (e) => {
  const el = e.target;
  const clickedLi = el.closest('li');
  const tabIdx = [...el.closest('li').parentElement.children].indexOf(clickedLi);
  const tabConts = [...el.closest('ul').parentElement.nextElementSibling.children];
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
  .tab_cont {
    padding: 60px 0;
    display:none;
  }
}
</style>


