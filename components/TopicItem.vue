<template>
  <div class="topic_item">
    <a href="#none">
      <span class="thumb">
        <img :src="item.img" alt="">
      </span>
      <span class="info">
        <span class="desc">
          <span class="title">{{  item. title  }}</span>
          <span class="editor">
              <img :src="item.editor.photo">
              <span class="info">
                <em>{{ item.editor.name }}</em>
                <span>{{ item.editor.type }}</span>
              </span>
          </span>
        </span>
        <span class="icons">
          <span class="i view">{{ item.view.cnt }}</span>
          <span class="i like">{{ item.view.like }}</span>
          <span class="i cmnt">{{ item.view.cmnt }}</span>
        </span>
      </span>
    </a>
    <button class="btn_like" @click="setFilter">좋아요</button>
  </div>
</template>
<script setup>
import { setFilter } from '/assets/js/common-ui'
const props = defineProps({
    item: {},
})
</script>
<style lang="scss" scoped>
.topic_item {
  position: relative;

  & span {
    display: block;
  }

  .thumb {
    position: relative;

    img {
      vertical-align: top;
    }
  }

  & a>.info {
    padding: 1.5rem 1.5rem 0 0;
    display: block;
    box-sizing: border-box;

    .desc {
      height: 8rem;

      .title {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.8rem;
        color: #000;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      .editor {
        margin-top: .8rem;
        gap: 0 .8rem;
        display: flex;

        img {
          width: 3.5rem;
          height: 3.5rem;
        }

        .info {
          gap: .5rem 0;
          display: flex;
          flex-direction: column;
          font-size: 1.2rem;
          color: #999;

          em {
            font-size: 1.3rem;
            color: #666;
          }

          span {
            height: 1.6rem;
            line-height: 1.6rem;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
      }
    }

    .icons {
      margin-top: 1rem;
      padding-top: 1rem;
      gap: .4rem;
      border-top: 1px solid #f5f5f5;
      align-items: center;
      display: flex;

      .i {
        font-size: 1.2rem;
        color: #888;
        align-items: center;
        justify-content: space-evenly;
        display: flex;
        flex: 1;

        &:before {
          content: '';
          width: 1.6rem;
          height: 1.6rem;
          background-image: url('/assets/mo_images/common/icon_split.png');
          background-repeat: no-repeat;
          background-size: 25rem auto;
        }

        &.view:before {
          background-position: 0 -10.5rem;
        }

        &.like:before {
          background-position: -2rem -10.5rem;
        }

        &.cmnt:before {
          background-position: -4rem -10.5rem;
        }
      }
    }
  }
}

.btn_like {
  width: 3.4rem;
  height: 3.4rem;
  font-size: 0;
  position: absolute;
  top: 13.3rem;
  right: .2rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  &:before {
    content: '';
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background-image: url('/assets/mo_images/common/icon_split.png');
    background-position: -15rem -7rem;
    background-size: 25rem auto;
    background-repeat: no-repeat;
  }

  &.active:before {
    background-position: -18rem -7rem;
  }
}
</style>
