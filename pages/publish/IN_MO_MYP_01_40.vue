<template>
  <div class="inner">
    <section>
      <Inputs _type="checkbox" _text="전체선택" />
      <Button class="btn_min_outline" txt="선택 삭제" @click="modal.open('delete_modal', 'alert');"/>
    </section>
    <ul>
      <li v-for="(goods, idx) in select_list" :key="idx">
        <div>
          <Inputs _type="checkbox" _text="" />
          <a href="#none" @click="modal.open('delete_modal', 'alert');">취소</a>
        </div>
        <a href="#none">
          <img :src="goods.img" alt="">
          <dl>
            <dt>{{ goods.name }}</dt>
            <dd>
              <span>{{ goods.price.discount }}</span>
              <del>{{ goods.price.regular }}</del>
            </dd>
          </dl>
        </a>
        <p>
          <button class="cart"></button>
          <button class="order"></button>
        </p>
      </li>
    </ul>

    <div class="paging">
      <div>
        <a href="#none" class="first">처음으로</a>
        <a href="#none">1</a>
        <a href="#none">2</a>
        <a href="#none" class="active">3</a>
        <a href="#none">4</a>
        <a href="#none">5</a>
        <a href="#none" class="last">마지막으로</a>
      </div>
    </div>
  </div>

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
            <Button class="btn_mid confirm" txt="확인" />
            <Button txt="취소" @click="modal.close(this);"/>
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
import {select_list} from '../../test/data/publish/dummyData'

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
  section {
    padding:1.0rem 0;
    border-bottom:0.1rem solid #EEEEEE;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  ul {
    li {
      height:auto;
      padding:3.0rem 0;
      border-bottom:0.1rem solid #F5F5F5;
      > div {
        display:flex;
        align-items:center;
        justify-content:space-between;
        > a {
          width:2.4rem;
          height:2.4rem;
          border:1px solid red;
          display:inline-block;
        }
      }
      > a {

      }
      > p {

      }
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
