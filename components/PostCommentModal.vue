<template>
  <div id="modal_comment" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this);">닫기</button>
        <h2>답글</h2>
      </div>
      <div class="modal_content">
        <div class="cmnt_list">
          <ul>
            <li v-for="(item, idx) in sampleCmnt" :key="idx">
              <PostComment :item="item" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>

<script setup>
import { sampleCmnt } from '/test/data/dummyData'
import { modal } from '~/assets/js/common-ui.js'
</script>

<style lang="scss" scoped>
:deep(.modal_content) {
  .btn_close {
    top: 1.6rem;
  }

  h2 {
    font-size: 1.8rem;
    text-align: center;
  }

  .cmnt_list {
    li:first-child {
      .comment_box {
        border-top: 0;
      }
    }
  }
}
</style>
