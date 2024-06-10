<template>
  <div class="inner"></div>

  <!--modal-->
  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
        <div class="modal_header">
            <h2>알림</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
            <div>삭제하시겠습니까?</div>
        </div>
        <div class="modal_footer">
            <Button class="btn_big confirm" txt="확인" />
            <Button class="btn_big" txt="취소" @click="modal.close(this);"/>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

</template>

<script setup>
definePageMeta({
layout:'mo-name-search-cart'
});
import { modal } from '~/assets/js/common-ui.js'
import {select_list} from '~/test/data/publish/dummyData'

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});

const emit = defineEmits(['title']);

onMounted(() => {
  emit('title','개인정보처리방침')

});

</script>

<style lang="scss" scoped>

.inner {
  padding: 2rem 2.1rem;
  h2 {
    margin:2rem 0;
    font-size:1.6rem;
    font-weight:600;
  }
  > dl + dl {
    margin-top:3rem;
  }
  dl {
    dt {
      color:#333;
      font-weight:600;;
    }
    dd {
      margin-top:1rem;
      color:#666;
      font-size:1.3rem;
      font-weight:400;
      span {
        line-height:2rem;
      }
    }
  }
}
ol {
  > * + * {
    margin-top:0.3rem !important;
  }
  li {
    color:#888;
    font-size:1.2rem;
    display:flex;
    &::before {
      content:'1.';
      margin-right:1.5rem;
      width:0;
      top:0;
    }
    &:nth-of-type(2)::before{
      content:'2.';
    }
    &:nth-of-type(3)::before{
      content:'3.';
    }
    &:nth-of-type(4)::before{
      content:'4.';
    }
    &:nth-of-type(5)::before{
      content:'5.';
    }
    &:nth-of-type(6)::before{
      content:'6.';
    }
    &:nth-of-type(7)::before{
      content:'7.';
    }
    &:nth-of-type(8)::before{
      content:'8.';
    }
    &:nth-of-type(9)::before{
      content:'9.';
    }
    &:nth-of-type(10)::before{
      content:'10.';
    }
  }
}


.modal_wrap {
  &#delete_modal {
    .modal_container {
      .modal_header {
        padding:2.0rem;
        h2 {
          font-size:1.8rem;
        }
      }
      .modal_content {
        padding:3.0rem;
      }
    }
  }
}

</style>
