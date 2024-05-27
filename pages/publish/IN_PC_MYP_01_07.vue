<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <h2>멤버십</h2>
  </div>

  <div class="inner">
    <Tabs id="membership_tab" tabType="type_03" :item="[{txt:'멤버십 등급/혜택안내'},{txt:'뷰티포인트 안내'},{txt:'모바일 앱 다운로드'}]" :tabidx="2" />

    <section class="mobile_app">
      <div class="download">
        <h4>모바일 APP으로<br>더 간편하게! 더 특별하게!</h4>
        <ul>
          <li>나에게 맞는 세일/혜택 소식들을 PUSH로 가장 먼저!</li>
          <li>매장에서 구매한 영수증도 APP에서 간편 확인</li>
          <li>오직 APP에서만 진행하는 전용 이벤트</li>
          <li>신규 가입하면 총 70,000원 쿠폰팩 즉시 발급!</li>
        </ul>
        <div class="btn_wrap">
          <Button class="btn_outline_big" txt="Google Play" />
          <Button class="btn_outline_big" txt="App Store" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
definePageMeta({
  layout:'pc-category'
});

onMounted(() => {});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type:String,
    default:'default'
  },
  link: {
      type: String,
      default: '#none'
  }
});

</script>
<style lang="scss" scoped>
.sub_title_wrap {
  margin:100px 0 20px;
  padding:0;
}

.mobile_app {
  .download {
    height:750px;
    padding:0 0 110px 700px;
    margin-top:60px;
    background:url('/_nuxt/public/images/sam/img_app_down.png') no-repeat left top;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    h4 {
      margin-bottom:25px;
      color:#000;
      font-size:32px;
      line-height:1.12em;
    }
    ul {
      li {
        padding-left:12px;
        margin-top:15px;
        color:#666;
        font-size:16px;
        line-height:1.25em;
        position:relative;
        &:before {
          content:'';
          width:2px;
          height:2px;
          background:#666;
          position:absolute;
          top:9px;
          left:0;
        }
        &:first-child {
          margin-top:0;
        }
      }
    }
    .btn_wrap {
      margin:105px 0 44px;
      display:flex;
      gap:0 10px;
      :deep(button) {
        width:285px;
        border-color:#DDD;
        em {
          font-size:0;
        }
        &:first-child {
          background:url('~/assets/images/common/ci_android.png') no-repeat center;
        }
        &:last-child {
          background:url('~/assets/images/common/ci_ios.png') no-repeat center;
        }
      }
    }
  }
}
</style>
