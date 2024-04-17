<template>
  <div class="filter_wrap">
    <Tabs tabType="type_02"
      :item="[{ txt: '전체' }, { txt: '최대여덟글자입력' }, { txt: '장원영피부되기' }, { txt: '왓츠인마이백' }, { txt: '인생탬' }, { txt: '메이크업대결' }, { txt: '갈웜뉴트럴추천' }]"
      :tabidx="0" />
    <button type="button" @click="modal.open('modal_topic', 'bottom');">토픽 모달 열기</button>
  </div>

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



  <!-- <ul class="select_list">
  <li class="active"><a href="#none" class="active">추천순</a></li>
  <li><a href="#none">신제품순</a></li>
  <li><a href="#none">판매량순</a></li>
  <li><a href="#none">낮은 가격순</a></li>
  <li><a href="#none">높은 가격순</a></li>
  <li><a href="#none">리뷰순</a></li>
  <li><a href="#none">판매금액순</a></li>
</ul> -->
</template>

<script setup>
import { modal } from '~/assets/js/common-ui.js'

definePageMeta({
  layout: 'mo-sub'
})
</script>

<style lang="scss" scoped>
.filter_wrap {
  padding: 30px 21px 20px;
  border-bottom: 1px solid #F5F5F5;
  position: relative;

  .filter_wrap:before {
    content: '';
    width: 100%;
    height: 20px;
    background: linear-gradient(180deg, rgba(0,0,0,0.05), transparent);
    position: absolute;
    top: 0;
    left: 0;
  }

  :deep(.tab_wrap) {
    max-height: 72px;
    overflow: hidden;

    ul.type_02 {
      width: calc(100% - 40px);
      margin: 0;
      gap: 8px 5px;
      flex-wrap: wrap;

      li {
        margin: 0;
        padding: 0;

        &>* {
          background: #fff;
          border-color: #eee;

          em {
            height: 30px;
            padding: 0 14px;
            line-height: 30px;
            font-weight: 600;
          }
        }

        &.current {
          &>* {
          border-color:#000;
          }
        }
      }
    }
  }

  button {
    position: absolute;
    bottom: 20px;
    right: 25px;
    width: 30px;
    height: 30px;
    font-size: 0;
    border-radius: 50%;
    background: #fff url(/assets/mo_images/common/icon_split.png) -119px -64px / 250px auto no-repeat;
    border: 1px solid #eee;
    transition: all .45s;
  }
}

.modal_wrap {
  .filter_wrap{
    padding: 0 26px;
    border-bottom: 0;

    &:before {
      content: none;
    }

    :deep(.tab_wrap){
      max-height: 420px;
      overflow-y: scroll;

      ul.type_02 {
        width: 100%;
        gap: 8px;
      }
    }
  }
}
</style>
