<template>
    <Tabs tabType="type_01" :item="[{txt:'상세정보'},{txt:'리뷰'},{txt:'유의사항'},{txt:'문의'}]" :tabidx="0" :isProduct="true" :reviewCnt="999" @click="tabContShow" />
</template>
<script setup>
import { modal } from '~/assets/js/common-ui'

onMounted(() => {
  const gnbH = document.getElementsByClassName('gnb_wrap')[0].offsetHeight;
  const target = document.querySelector('.tab_wrap.product');
  window.addEventListener('scroll', () => {
    const contTop = document.getElementsByClassName('tab_contents')[0].getBoundingClientRect().y - gnbH - target.offsetHeight;
    if (contTop < 0) {
      if(!target.classList.contains('sticky')) {
        target.classList.add('sticky');
        target.style.cssText = "top:" + gnbH + "px;";
      }
    }
    else if(contTop > 0){
      target.classList.remove('sticky');
      target.style.cssText = "";
    }
  })
})

const tabContShow = (e) => {
  const el = e.target;
  const clickedLi = el.closest('li');
  const tabIdx = [...el.closest('li').parentElement.children].indexOf(clickedLi);
  const tabConts = [...el.closest('ul').parentElement.nextElementSibling.children];
  const contPadding = document.getElementsByClassName('gnb_wrap')[0].offsetHeight + document.getElementsByClassName('tab_wrap')[0].offsetHeight;

  if(!(tabIdx == 3)){
    for(const i in tabConts) {
      tabConts[i].style.display = "none";
    }

    if(tabIdx == 0 || tabIdx == 1){
      tabConts[0].style.display = "block";
      tabConts[1].style.display = "block";
    }
    tabConts[tabIdx].style.display = "block";
    const contsTop = tabConts[tabIdx].getBoundingClientRect().y + window.pageYOffset - contPadding;
    window.scrollTo({top:contsTop, behavior: 'smooth'});
  }else if(tabIdx == 3) {
    modal.open('prod_qna_wrap', 'full');
  }
}
</script>
<style lang="scss" scoped>
.tab_wrap {
  :deep(em) {
    padding:0;
  }

  &.sticky {
    width: 100%;
    background-color: #fff;
    position: fixed;
    left: 0;
    z-index: 9;

    ul {
      width: 1280px;
      margin: 0 auto;
    }
  }
}
.tab_contents{
  .tab_cont {
    padding: 60px 0;
    display:none;
  }
}
</style>


