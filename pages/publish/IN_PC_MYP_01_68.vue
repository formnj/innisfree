<template>
  <div class="inner">
    <div class="sub_title_wrap">
      <h3>뷰티포인트 통합 회원 정보 수정</h3>
      <div class="explain">* 이 페이지에서 회원정보 수정, 비밀번호 수정시 뷰티포인트 통합 아이디로 로그인하는 아모레퍼시픽 사이트의 정보가 함께 변경됩니다.</div>
    </div>
    <Tabs id="membership_tab" tabType="type_03" :item="[{txt:'멤버십 등급/혜택안내'},{txt:'뷰티포인트 안내'},{txt:'모바일 앱 다운로드'}]" :tabidx="0" />
  </div>
</template>
<script setup>
definePageMeta({
  layout:'pc-mypage',
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
layoutType: {
  type:String,
  default:'default'
}
});
</script>
<style lang="scss" scoped>
.sub_title_wrap {
  padding:0;
  margin-bottom:24px;
  .explain {
    margin-top:6px;
    color:#888;
    font-size:13px;
  }
}
</style>
