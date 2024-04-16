<template>
    <Tabs tabType="type_01" :item="[{txt:'전체'},{txt:'체험/리뷰'},{txt:'쇼핑혜택'},{txt:'제휴혜택'}]" :tabidx="0" />
    <div class="title_wrap">
        <button>당첨자 발표</button>
    </div>
    <div class="inner">
      <div>특가페이지</div>
    </div>
</template>

<script setup>
definePageMeta({
layout: 'mo-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
    link: {
        type: String,
        default: '#none'
    }
});

const sample_goods = [
 {
      img:("/_nuxt/assets/images/sam/event_list_01.jpg"),
      cate:'제휴혜택',
      title_01:'트러블?수분?탄력?',
      title_02:'고민따라 10% 추가할인 쿠폰위크!!',
      data:'24.4.14(일) ~ 24.4.30(화)',
  },  {
      img:("/_nuxt/assets/images/sam/event_list_02.jpg"),
      cate:'쇼핑혜택',
      title_01:'남성에게도 딱! 맞는',
      title_02:'그린티 씨드 세럼 대용량 출시',
      title:'남성에게도 딱! 맞는 그린티 씨드 세럼 대용량 출시',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_03.jpg"),
      cate:'체험/리뷰',
      title_01:'잡티와 토닝을 한번에! ',
      title_02:'NEW 패드 즉시 증정!',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_04.jpg"),
      cate:'제휴혜택',
      title_01:'자신감 있는 레티놀 앰플',
      title_02:'매일 3,656개 판매! ',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_05.jpg"),
      cate:'체험/리뷰',
      title_01:'이니스프리 공식몰이 처음이라면?',
      title_02:'',
      data:'24.4.14(일) ~ 24.5.1(수)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_06.jpg"),
      cate:'쇼핑혜택',
      title_01:'비타C 1+1 럭키박스',
      title_02:'행운의 주인공은?',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_01.jpg"),
      cate:'제휴혜택',
      title_01:'트러블?수분?탄력?',
      title_02:'고민따라 10% 추가할인 쿠폰위크!!',
      data:'24.4.14(일) ~ 24.4.30(화)',
  },  {
      img:("/_nuxt/assets/images/sam/event_list_02.jpg"),
      cate:'쇼핑혜택',
      title_01:'남성에게도 딱! 맞는',
      title_02:'그린티 씨드 세럼 대용량 출시',
      title:'남성에게도 딱! 맞는 그린티 씨드 세럼 대용량 출시',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_03.jpg"),
      cate:'체험/리뷰',
      title_01:'잡티와 토닝을 한번에! ',
      title_02:'NEW 패드 즉시 증정!',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_04.jpg"),
      cate:'제휴혜택',
      title_01:'자신감 있는 레티놀 앰플',
      title_02:'매일 3,656개 판매! ',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_05.jpg"),
      cate:'체험/리뷰',
      title_01:'이니스프리 공식몰이 처음이라면?',
      title_02:'',
      data:'24.4.14(일) ~ 24.5.1(수)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_06.jpg"),
      cate:'쇼핑혜택',
      title_01:'비타C 1+1 럭키박스',
      title_02:'행운의 주인공은?',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },

]
/* //component sample data */





</script>

<style lang="scss" scoped>

@import "~/assets/scss/_mo_mixin";
@include mobile {

}

</style>
