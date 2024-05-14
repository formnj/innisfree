<template>
  <div class="inner">
    <a href="#none">최근 3개월</a>
    <p>
      <span>2024.05.03</span>
    </p>
    <div>
      <p>
        <strong>배송완료</strong>
        <em>21288166</em>
        <button>상세보기</button>
      </p>
      <dl>
        <dt>
          <img src="/_nuxt/public/images/sam/36804_l_S_90.png" alt="">
        </dt>
        <dd>
          <p>
            비타C 그린티 엔자임 잡티 토닝 세럼 체험단
          </p>
          <span>
            <em>+0P</em>
            <span>2,500</span>
          </span>
        </dd>
      </dl>
    </div>
    <Button class="btn_outline" txt="배송조회" @click="modal.open('my_delivery', 'fullMo')" />
  </div>

  <div class="modal_wrap" id="my_delivery">
    <div class="modal_container">
        <div class="modal_header">
            <h2>Modal Title</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
            <!-- modal contents -->
        </div>
        <div class="modal_footer">
            <Button class="btn_outline" txt="cancel" />
            <Button txt="OK" />
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>

<script setup>
definePageMeta({
layout:'mo-category'
});
import { modal } from '~/assets/js/common-ui.js'

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});


onMounted(() => {


})

</script>

<style lang="scss" scoped>
button {
  &.btn_outline {
    width:100%;
    margin-top:2rem;
  }
}

.inner {
  > a {
    padding:1.7rem 0;
    text-align:right;
    display:block;
  }
  > p {
    margin-left:-2.1rem;
    margin-right:-2.1rem;
    padding:1.1rem 2.1rem;
    color:#888;
    background:#F5F5F5;
    span {
      font-size:1.3rem;
    }
  }
  > div {
    > p {
      margin:3rem 0 2rem;
      font-size:1.2rem;
      position:relative;
      strong {
        margin-right:1rem;
        font-size:1.6rem;
        font-weight:600;
      }
      em {
        color:#aaa;
        font-weight:400;
      }
      button {
        font-size:1.2rem;
        position: absolute;
        top:50%;
        right:0;
        display:flex;
        align-items:center;
        transform:translateY(-50%);
        &::after {
          content: '';
          width: 1.6rem;
          height: 1.6rem;
          margin-left:0.5rem;
          display: inline-block;
          background-image: url('~/assets/mo_images/common/icon_split.png');
          background-repeat:no-repeat;
          background-size:25rem;
          background-position:0px -70px;
          transform: rotate(270deg);
        }
      }
    }
    > dl {
      display:flex;
    }
  }
}

</style>
