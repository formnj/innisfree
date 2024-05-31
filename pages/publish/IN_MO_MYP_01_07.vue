<template>
  <Tabs class="membership_tab" tabType="type_01" :item="[{txt:'멤버십 혜택안내'},{txt:'뷰티포인트 안내'},{txt:'모바일 앱 다운로드'}]" :tabidx="2" />
  
  <section class="mobile_app">
    <div class="img"><img src="/_nuxt/public/images/sam/appdown_img.png" alt=""></div>

    <div class="inner">
      <div class="download">
        <h4>모바일 APP으로<br>더 간편하게! 더 특별하게!</h4>
        <Button txt="APP 다운로드" />
        <ul>
          <li>나에게 맞는 세일/혜택 소식들을 PUSH로 가장 먼저!</li>
          <li>매장에서 구매한 영수증도 APP에서 간편 확인</li>
          <li>오직 APP에서만 진행하는 전용 이벤트</li>
          <li>신규 가입하면 총 70,000원 쿠폰팩 즉시 발급!</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

definePageMeta({
  layout:'mo-back-name-search-cart'
});

const membership_link = [ 'IN_MO_MYP_01_04', 'IN_MO_MYP_01_05', 'IN_MO_MYP_01_07', ];

const emit = defineEmits(['title']);

onMounted(() => {
  emit('title', '멤버십');
  
  document.querySelectorAll('.membership_tab li').forEach((el, idx) => {
    el.addEventListener('click', () => {
      router.push(`/publish/${membership_link[idx]}`);
    })
  });
});
</script>
<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

.mobile_app {
  .download {
    padding-top:2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h4 {
      color:#000;
      font-size:2rem;
      line-height:2.4rem;
      text-align:center;
    }
    :deep(button) {
      width:100%;
      height:6rem;
      margin:2rem 2.1rem 0;
      font-family:inherit;
      background:#00BC70;
      em {
        font-size:1.4rem;
        font-weight:600;
      }
    }
    ul {
      width:100%;
      padding-top:2rem;
      li {
        padding-left:0.6rem;
        margin-top:1rem;
        color:#666;
        font-size:1.2rem;
        line-height:1.6rem;
        letter-spacing:-0.01em;
        position:relative;
        &:before {
          content: '';
          width:0.2rem;
          height:0.2rem;
          background: #666;
          position: absolute;
          top:0.7rem;
          left:0;
        }
        &:first-child {
          margin-top:0;
        }
      }
    }
  }
}
</style>
