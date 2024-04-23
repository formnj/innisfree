<template>

  <div>
    <p style="text-align:center; background-color:#ddd; padding:2rem 0;">신규 서비스 랜딩 영역</p> <!-- 개발시 삭제 -->
  </div>


  <section>
    <div class="inner">
      <h2>
        <span><em>주소희</em> 님의 쇼핑로그 <Icons class="tooltip" txt="툴팁" /></span>
        <a href="#none" class="btn_link_arrw">전체보기</a>
      </h2>
      <p class="txt_desc">최근 본 제품, 이벤트, 검색어예요</p>
      <div class="list_wrap">
        쇼핑로그 영역
      </div>
    </div>
  </section>


  <section>
    <div class="inner">
      <h2>
        <span><em>주소희</em> 님께 추천해요</span>
      </h2>
      <div class="bubble_wrap">
        <div class="bubble">
          <p>이니스프리몰의 <em>활동 데이터를 기반으로</em> 제품을 추천드려요 ♥</p>
        </div>
      </div>
      <div class="bubble_wrap">
        <div class="bubble">
          <p><em>로그인 후 이니스프리몰 활동 데이터가 쌓이면</em> 취향에 맞는 제품을 추천드려요 ♥</p>
          <a href="#none" class="btn_link_arrw">로그인 하기</a>
        </div>
      </div>
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0,10)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
      <Button class="btn_outline more" txt="10개 더보기" />
    </div>
  </section>


  <section>
    <div class="inner no_r_pd">
      <h2>
        <span><em>왕 벚꽃 글로우 젤리 크림</em>을<br>구매한 고객이 최근 구매한 제품이에요</span>
      </h2>
      <div class="swiper_wrap horizontal">
        <swiper
          :slides-per-view="'auto'"
        >
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0,10)" :key="idx" class="item">
            <GoodsItem :item="item" :link="item.link" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>


  <section>
    <div class="inner no_r_pd">
      <h2>
        <span>찜</span>
        <!--찜 없을 경우
          <span><em>메이크업</em> 카테고리 추천 제품이에요</span>
        -->
      </h2>
      <div class="swiper_wrap">
        <swiper
          :slides-per-view="'auto'"
        >
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0,10)" :key="idx" class="item">
            <GoodsItem :item="item" :link="item.link" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>


  <section>
    <div class="inner">
      <h2>
        <span><em>왕 벚꽃 글로우 젤리 크림</em>과 잘 맞는 제품이에요</span>
      </h2>
      <div class="list_wrap type_cart">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0,6)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
      <button type="button" class="btn_outline more refresh"><em>새로운 추천을 받고 싶어요</em> <span class="page">1/2</span></button>
    </div>
  </section>


  <section>
    <div class="inner">
      <h2>
        <span><em>NEW</em> 포스트</span>
      </h2>
    </div>

    <div class="list_wrap">
      <ul class="post_list">
        <li v-for="(item, idx) in samplePost" :key="idx">
          <PostItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </section>

  <div class="showcase">
    <ShowcaseModalItem v-for="(item, idx) in sampleShowcase.slice(0,1)" :key="idx" :item="item" :link="item.link"/>
    <Button class="btn_min_outline" txt="전체보기" />
  </div>

</template>

<script setup>
import { sample_goods, samplePost, sampleShowcase } from '/test/data/dummyData'
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

definePageMeta({
  layout: 'mo-default'
})
</script>

<style lang="scss" scoped>
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

    & + * {
      margin-top: 2rem;
    }

    & > span {
      display: inline-block;

      em {
        color: #00BC70;
        padding-right: .3rem;
      }

      button {
        line-height: 2rem;
      }
    }
  }

  .txt_desc {
    margin-top: .5rem;
    font-size: 1.2rem;
    color: #999;
  }
}

.list_wrap {
  :deep(.goods_list) {
    margin: 0;
    gap: 4rem 0.3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > li {
      width: 16.5rem;
      padding: 0;
    }
  }

  &.type_cart {
    li {
      width: 10.9rem;

      :deep(.goods_item){
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

  .post_list {
    margin-bottom: 3rem;

    li {
      & + li {
        margin-top: 2.5rem;
      }
    }
  }
}

:deep([class*=btn_][class*=_outline]).more {
  width: 100%;
  margin-top: 3rem;
  font-size: 14px;
  border-color: #eee;

  em {
    color: #666;
  }
}

.refresh {
  height: 4rem;
  border: 1px solid #eee;
  position: relative;

  em{
    display: inline-flex;
    align-items: center;

    &:before {
      content:'';
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 1rem;
      background: url('~/assets/mo_images/common/icon_split.png') -23rem -4rem / 25rem auto no-repeat;
      display: inline-block;
    }
  }

  .page {
    font-size: 1.2rem;
    color: #999;
    position: absolute;
    top: 1.2rem;
    right: 2.1rem;
  }
}

.bubble_wrap {
  margin-bottom: 2rem;
  padding-top: .5rem;
  position: relative;

  .bubble {
    padding: 1.6rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #00BC70;
    border-radius: .8rem;

    &:before {
      content: '';
      width: 1.2rem;
      height: 2.5rem;
      background-color: #00BC70;
      position:absolute;
      top: 0;
      left: 1.4rem;
      transform: rotate(45deg);
    }

    p {
      line-height: 1.6rem;
    }

    a {
      margin-top: 1.2rem;
      padding-top: 1.2rem;
      font-weight: 600;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: block;

      &:after {
        border-color: #fff;
      }
    }

    em {
      font-weight: 600;
      text-decoration: underline;
    }
  }
}

.swiper_wrap{
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

      .review_score{
        display: none;
      }
    }
  }
}

.showcase {
  margin-bottom: -9rem;
  position: relative;

  :deep(.btn_min_outline) {
    background-color: #fff !important;
    border-radius: .1rem;
    border: 0;
    position: absolute;
    bottom: 3rem;
    right: 2.1rem;
    z-index: 2;

    em {
      font-weight: 600;
      color: #666;
      display: inline-flex;
      align-items: center;

      &:after {
        content: '';
        margin-left: .5rem;
        width: 1.6rem;
        height: 1.6rem;
        background: url('~/assets/mo_images/common/icon_split.png') -12.5rem -7rem / 25rem auto no-repeat;
        display: inline-block;
      }
    }
  }
}
</style>
