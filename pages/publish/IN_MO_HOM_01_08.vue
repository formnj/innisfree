<template>
  <div class="filter_wrap">
    <Tabs tabType="type_02"
      :item="[{ txt: '전체' }, { txt: '최대여덟글자입력' }, { txt: '장원영피부되기' }, { txt: '왓츠인마이백' }, { txt: '인생탬' }, { txt: '메이크업대결' }, { txt: '갈웜뉴트럴추천' }]"
      :tabidx="0" />
    <button type="button" @click="modal.open('modal_topic', 'bottom');">토픽 모달 열기</button>
  </div>

  <div class="inner-cont">
    <div class="list_header">
      <button class="btn_dropdown" @click="modal.open('modal_sort', 'bottom');">추천순</button>
    </div>

    <div class="list_wrap">
      <ul class="post_list">
        <li v-for="(item, idx) in samplePost" :key="idx" class="topic">
          <PostItem  :item="item" :link="link" />
        </li>
      </ul>
    </div>
  </div>

  <!-- 토픽 모달 -->
  <div id="modal_topic" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this);"></button>
      </div>
      <div class="modal_content">
        <div class="filter_wrap">
          <Tabs tabType="type_02"
            :item="[{ txt: '전체' }, { txt: '장원영피부되기' }, { txt: '왓츠인마이백' }, { txt: '인생탬' }, { txt: '인생탬' }, { txt: '메이크업대결' }, { txt: '갈웜뉴트럴추천' }, { txt: '장원영피부되기' }, { txt: '왓츠인마이백' }, { txt: '인생탬' }, { txt: '인생탬' }, { txt: '메이크업대결' }, { txt: '갈웜뉴트럴추천' }]"
            :tabidx="0" />
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <!-- 정렬 모달 -->
  <div id="modal_sort" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this);"></button>
      </div>
      <div class="modal_content">
        <ul class="select_list">
          <li class="active"><a href="#none" class="active">최신순</a></li>
          <li><a href="#none">베스트순</a></li>
          <li><a href="#none">좋아요순</a></li>
          <li><a href="#none">조회수순</a></li>
        </ul>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>

<script setup>
import { modal } from '~/assets/js/common-ui.js'
import { samplePost } from '~/test/data/publish/dummyData'
definePageMeta({
  layout: 'mo-default'
})
</script>

<style lang="scss" scoped>
.inner-cont {
  padding: 0 2.1rem;
}

.filter_wrap {
  padding: 3rem 2.1rem 2rem;
  border-bottom: 1px solid #F5F5F5;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 2rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05), transparent);
    position: absolute;
    top: 0;
    left: 0;
  }

  :deep(.tab_wrap) {
    max-height: 7.2rem;
    overflow: hidden;

    ul.type_02 {
      width: calc(100% - 4rem);
      margin: 0;
      gap: .8rem .5rem;
      flex-wrap: wrap;

      li {
        margin: 0;
        padding: 0;

        &>* {
          background: #fff;
          border-color: #eee;

          em {
            height: 3rem;
            padding: 0 14px;
            line-height: 3rem;
            font-weight: 600;
          }
        }

        &.current {
          &>* {
            border-color: #000;
          }
        }
      }
    }
  }

  button {
    position: absolute;
    bottom: 2rem;
    right: 2.5rem;
    width: 3rem;
    height: 3rem;
    font-size: 0;
    border-radius: 50%;
    background: #fff url(/assets/mo_images/common/icon_split.png) -11.9rem -6.4rem / 25rem auto no-repeat;
    border: 1px solid #eee;
    transition: all .45s;
  }
}

.modal_wrap {
  .filter_wrap {
    padding: 0 2.6rem;
    border-bottom: 0;

    &:before {
      content: none;
    }

    :deep(.tab_wrap) {
      max-height: 40rem;
      overflow-y: scroll;

      ul.type_02 {
        width: 100%;
        gap: .8rem;
      }
    }
  }
}

.list_header {
  padding: 2.2rem 0;
  .btn_dropdown {
    padding: 0 1ren;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    &:after {
      content: "";
      width: 1.6rem;
      height: 1.6rem;
      margin-left: .5rem;
      background: url(/_nuxt/assets/images/common/icon_split.png) -11rem -6rem / 25rem auto no-repeat;
      display: inline-block;
    }
  }
}
</style>
