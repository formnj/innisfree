<template>
  <!-- 포스트 영역 -->
  <div class="post_header">
    <span class="topic">뽀용뽀용☁️️</span>
    <h2>내가 히알루론산 수분 촉촉 선크림에 정착한 이유</h2>
    <span class="post_icons">
      <span class="i clock">2023.3.27</span>
      <span class="i view">0.3k</span>
    </span>

    <div class="post_editor">
      <a href="#none">
        <img src="/_nuxt/public/images/sam/photo_editor_01.png" alt="">
        <span class="info">
          <em>이사배 <span class="mark_editor">Editor</span></em>
          <span>민감성피부 · 주름/탄력/다크써클 고민 · 봄브라이트 · INFJ</span>
        </span>
      </a>
    </div>
  </div>
  <div class="post_detail">
    <!-- 개발 시 아래 div 삭제 -->
    <div style="width: 100%; padding:5rem 0; background-color:#ccc; text-align:center; color:#fff;">포스트 내용</div>
  </div>
  <!-- //포스트 영역 -->

  <!-- 에디터 PICK -->
  <section>
    <div class="inner no_r_pd">
      <h2>
        <span>에디터 PICK</span>
      </h2>
      <div class="swiper_wrap horizontal">
        <swiper :slides-per-view="'auto'">
          <swiper-slide v-for="(item, idx) in sample_goods" :key="idx" class="item type_cart">
            <GoodsItem :item="item" :link="item.link" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <!-- //에디터 PICK -->

  <!-- 답글 -->
  <section>
    <div class="inner">
      <h2><a href="#답글모달" class="btn_link_arrw">답글 <em>3</em></a></h2>
    </div>
    <!-- 답글 없을 경우 -->
    <div>
      등록된 답글이 없습니다.<br>
      답글을 남겨보세요
    </div>
    <!-- //답글 없을 경우 -->

    <div class="inner no_lr_pd">
      <div class="cmnt_list">
        <ul>
          <li v-for="(item, idx) in sampleCmnt" :key="idx">
            <PostComment :item="item" />
          </li>
        </ul>
      </div>
    </div>

    <div class="inner">
      <Inputs _type="text" _placeholder="답글을 남겨보세요" />
    </div>
  </section>
  <!-- //답글 -->

  <!-- 같은 주제 다른 포스트 -->
  <section>
    <div class="inner">
      <h2>같은 주제의 다른 포스트</h2>

      <div class="list_wrap">
        <ul class="post_list">
          <li v-for="(item, idx) in samplePost" :key="idx" class="topic">
            <PostItem  :item="item" :link="link" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- //같은 주제 다른 포스트 -->

  <section>
    <div class="inner">
      <h2><a href="" class="btn_link_arrw"><em>이사배</em> 님의 인기 포스트</a></h2>
    </div>

    <div class="list_wrap">
      <ul class="post_list_vertial">
        <li v-for="(item, idx) in samplePost" :key="idx">
          <PostItemVertical :item="item" :link="item.link" class="type_vertical"/>
        </li>
      </ul>
    </div>
  </section>

  <div id="modal_reply_menu" class="modal_wrap">
    <div class="modal_container">
      메뉴
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>

<script setup>
import { sample_goods, sampleCmnt, samplePost } from '/test/data/dummyData'
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

definePageMeta({
  layout: 'mo-sub'
})
</script>

<style lang="scss" scoped>
.post_header {
  padding: 2rem 2.1rem 3rem;

  .topic {
    padding: .3rem 1rem;
    font-size: 1.3rem;
    color: #009D5E;
    line-height: 1.6rem;
    border: 1px solid #009D5E;
    border-radius: 1.6rem;

    &+h2 {
      margin-top: 1.5rem;
    }
  }

  h2 {
    font-size: 2.4rem;
  }

  :deep(.post_icons) {
    margin: 1rem 0 0;
    padding: 0;
    border-top: 0;
    gap: 1rem;

    .i {
      flex: none;

      &:before {
        margin-right: .2rem;
      }
    }
  }

  .post_editor {
    margin-top: 2rem;

    a {
      gap: 0 1rem;
      display: flex;

      img {
        width: 4rem;
        height: 4rem;
      }

      .info {
        gap: .5rem 0;
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
        color: #999;

        em {
          gap: .8rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: #666;
          display: flex;
          align-items: center;
        }

        &>span {
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
}

:deep(.mark_editor) {
  gap: .2rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
  color: #00BC70;
  display: inline-flex;
  align-items: center;

  &:before {
    content: '';
    width: 2rem;
    height: 2rem;
    background: url(/_nuxt/assets/mo_images/common/icon_split.png) -20.8rem -9.8rem / 25rem auto no-repeat;
    display: inline-block;
    padding: .2rem;
  }
}

section {
  & + section {
    border-top: .5rem solid #f5f5f5;
  }

  .inner {
    padding: 3rem 2.1rem;

    &.no_r_pd {
      padding-right: 0;
    }

    &.no_lr_pd {
      padding: 3rem 0;
    }
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &+* {
      margin-top: 2rem;
    }

    a.btn_link_arrw {
      font-size: 1.8rem;
      display: flex;
      align-items: center;

      &:after {
        margin-left: 1rem;
      }

      em {
        color: #00BC70;
        margin-left: .4rem;
      }
    }
  }
}

.swiper_wrap {
  .item {
    width: 14rem;

    &+.item {
      margin-left: .3rem;
    }

    :deep(.goods_item) {
      position: relative;

      .thumb {
        width: 14rem;
        height: 18.6rem;
      }

      .review_score {
        display: none;
      }
    }

    &.type_cart {
      :deep(.goods_item) {
        padding-bottom: 0;

        .img_wrap {
          position: relative;

          .thumb {
            width: auto;
            height: 14.5rem;
          }

          .btnIconBox {
            justify-content: end;

            .btn_heart,
            .btn_buy {
              display: none;
            }
          }
        }

        .review_score {
          display: none;
        }
      }
    }
  }
}

.cmnt_list {
  border-bottom: 1px solid #f5f5f5;
}
</style>
