<template>
  <button type="button" class="btn_dot_menu" @click="modal.open('modal_pick_my_shop','fullMo');">마이샵 등록하기</button>
  <!-- 마이샵 등록하기 -->
  <div id="modal_pick_my_shop" class="modal_wrap active fullMo">
    <div class="modal_container">
      <div class="modal_header">
          <h2>마이샵 등록하기</h2>
          <button class="btn_close" @click="modal.close(this);">닫기</button>
      </div>
      <div class="modal_content">
          <section>
            <h3><em>최근 방문한 매장</em></h3>
            <ul class="pick_list">
              <li v-for="(item, idx) in shop_list.slice(0,1)" :key="idx" class="selected">
                <Inputs _type="radio" _text="" _name="shop" />
                <div class="shop_wrap">
                  <ShopInfo :item="item" />
                </div>
              </li>
            </ul>
          </section>
          <section>
            <h3><em>가장 가까운 매장</em></h3>
            <ul class="pick_list">
              <li v-for="(item, idx) in shop_list.slice(0,2)" :key="idx" class="selected">
                <Inputs _type="radio" _text="" _name="shop" />
                <ShopInfo :item="item" />
              </li>
            </ul>
          </section>
          <section>
            <h3>매장 검색</h3>
            <ul class="pick_list">
              <li v-for="(item, idx) in shop_list.slice(0,2)" :key="idx" class="selected">
                <Inputs _type="radio" _text="" _name="shop" />
                <ShopInfo :item="item" />
              </li>
            </ul>
          </section>
      </div>
    </div>
  <div class="overlay" @click="modal.close(this);"></div>
</div>
</template>

<script setup>
import { modal } from '~/assets/js/common-ui.js'
import { shop_list } from '~/test/data/publish/dummyData'
definePageMeta({
  layout:'mo-sub'
});
</script>

<style lang="scss" scoped>
#modal_pick_my_shop {
  h3 {
    padding: 2rem 2.1rem 1.5rem;
    em {
      font-size: 1.3rem;
      font-weight: 600;
      color: #00BC70;
      border-bottom: 1px solid #F5F5F5;
    }
  }

  .pick_list {
    li {
      padding: 3rem 2.1rem;
      display: flex;
      gap: 1rem;
      align-content: flex-start;
      position: relative;

      & + li {
        border-top: 1px solid #F5F5F5;
      }

      :deep(.shop_wrap) {
        &.open {
          padding-bottom: 22.4rem;
        }
        .shop {
          padding: 0;
        }
        .map {
          width: 100%;
          position: absolute;
          left: 0;
          margin-top: 3rem;
        }
      }
    }
  }
}
</style>
