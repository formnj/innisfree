<template>
  <div class="inner">
    <section>
      <span>아이콘</span>
      <p>신청하신 입고 알림 내역이 없습니다</p>
      <div class="btn_wrap">
        <Button  class="btn_min_outline" txt="특가 상품 쇼핑하기" />
        <Button  class="btn_min_outline" txt="개인정보 수정하기"/>
      </div>
    </section>
    <div>
      <ul>
        <li>
          <a href="#none">
            <span>이미지</span>
            <div>
              <em>입고예정</em>
              <p>
                [쿠로미x이니스프리] 노세범 AC 파우더 5g
              </p>
              <span>신청일자:2024-04-29</span>
            </div>
          </a>
          <Button class="btn_outline" txt="알림취소" />
        </li>
      </ul>
    </div>
  </div>


  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
        <div class="modal_header">
            <h2>알려드립니다.</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
            <div>입고 알림 신청을 취소 하시겠습니까?</div>
        </div>
        <div class="modal_footer">
          <Button class="btn_ confirm" txt="확인" @click="modal.close(this);" />
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
  .inner {
    text-align:center;
    section {
      span {
        width:65px;
        height:65px;
        margin-top:10rem;
        text-indent: -9999px;
        background-image:url('/_nuxt/assets/mo_images/common/icon_split.png');
        background-repeat:no-repeat;
        background-size:250px;
        background-position:-63px -98px;
        display:inline-block;
      }
      p {
        padding:2.0rem 0 2rem;
        font-size:1.6rem;
        font-weight:600;
      }
      .btn_wrap {
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
        .btn_min_outline {
          border: 0.1rem solid #999 !important;
          ::v-deep em {
            padding:0 1.5rem;
            color:#999 !important;
            font-size:1.1rem;
            font-weight:600;
            line-height: 3rem;
          }
        }
      }
    }
    > div {
      margin-top:3.0rem
    }

  }
.modal_wrap {
  &#delete_modal {
    .modal_container {
      .modal_header {
        padding:3rem 2rem 1rem 2rem;
        border-bottom:0;
        h2 {
          font-size:1.8rem;
        }
      }
      .modal_content {
        padding:2rem 3rem 3rem 2rem;
        text-align:center;
      }
      .modal_footer {
        padding:0;
        button.btn_ {
          width:100%;
          height:6rem;
        }
      }
    }
  }
}

</style>
