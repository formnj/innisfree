<template>
  <div class="comment_box" :class="item.reply.is ? 'reply' : ''"> <!-- 답글의 답글일 경우 reply 클래스 추가 -->
    <span class="photo"><img :src="item.photo" alt=""></span>

    <div class="comment">
      <span class="info">
        <span v-if="item.isEditor" class="mark_editor">Editor</span> <!-- 에디터일 경우에만 노출 -->
        <span class="name">{{ item.name }}<span class="time">{{ item.time }}</span></span>
      </span>

      <p class="text">
        <span v-if="item.reply.is" class="to">{{ item.reply.to }}</span> <!--답글일 경우에만 노출, '@'는 css로 고정 -->
        {{ item.cmnt }}
      </p>

      <div class="btn_wrap">
        <button type="button">답글 달기</button>
        <button type="button">답글 2개 더보기</button>
      </div>
    </div>
    <button type="button" class="menu" @click="modal.open('modal_reply_menu', 'layer');modalPositioning();">답글 메뉴</button>
  </div>
</template>
<script setup>
import { sampleCmnt } from '/test/data/dummyData'
import { modal } from '~/assets/js/common-ui.js'
const props = defineProps({
  item: {},
})
const modalPositioning = () => {
  const top = window.scrollY + event.target.getBoundingClientRect().top;
  document.getElementById('modal_reply_menu').style.cssText="top:"+top+"px;"
}
</script>
<style lang="scss" scoped>
.comment_box {
  margin-bottom: 2rem;
  padding: 2rem 2.1rem 0;
  border-top: .1rem solid #f5f5f5;
  display: flex;
  gap: 1rem;
  position: relative;

  &.reply {
    padding: 0 2.1rem 0 6.6rem;
    border-top: 0;

    .menu {
      top: 0;
    }
  }

  .photo {
    width: 3.5rem;
    height: 3.5rem;
    background: url(/_nuxt/assets/mo_images/common/icon_split.png) 0rem -14.5rem / 25rem auto no-repeat;
    display: inline-block;
    flex-shrink: 0;
  }

  .comment {
    padding-right: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: .6rem;

    .info {
      display: flex;
      flex-direction: column;

      .mark_editor {
        margin-left: -2.3rem;
      }

      .name {
        font-weight: 600;
        display: flex;
        align-items: center;

        .time {
          padding-left: .4rem;
          font-size: 1.2rem;
          font-weight: 300;
          color: #999;
        }
      }
    }

    .text {
      font-size: 1.3rem;
      color: #333;
      line-height: 2rem;

      .to {
        padding-right: .2rem;
        font-weight: bold;
        color: #00BC70;

        &:before {
          content: '@';
        }
      }
    }

    .btn_wrap {
      display: flex;
      gap: 1rem;

      button {
        font-size: 1.2rem;
        color: #999;
      }
    }
  }

  .menu {
    width: 2.4rem;
    height: 2.4rem;
    font-size: 0;
    background: url(/_nuxt/assets/mo_images/common/icon_split.png) -21rem -7rem / 25rem auto no-repeat;
    position: absolute;
    top: 2rem;
    right: 1.6rem;
  }
}
</style>
