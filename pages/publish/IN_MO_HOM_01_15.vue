<template>

  <div>
    <p style="text-align:center; background-color:#ddd; padding:2rem 0;">신규 서비스 랜딩 영역</p> <!-- 개발시 삭제 -->
  </div>


  <section>
    <div class="inner">
      <h2>
        <span><em>주소희</em> 님의 쇼핑로그 <Icons class="tooltip" txt="툴팁" @click="modal.open('log_info', 'alert')" /></span>
        <a href="/publish/IN_MO_HOM_01_18" class="btn_link_arrw">전체보기</a>
      </h2>
      <p class="txt_desc">최근 본 제품, 이벤트, 검색어예요</p>

      <div class="shopping_log">
        <div class="list_wrap">
          <p v-if="sample_log.length < 1" class="no_data">
            <strong>쇼핑로그가 없습니다.</strong>
          </p>
          <!-- list -->
          <ul class="goods_list type_column">
            <li v-for="(item, idx) in sample_log.slice(0,3)" :key="idx">
              <GoodsItem v-if="item.type == 'goods'" :item="item.item[0]" :link="item.item.link" />
              <EventItem v-if="item.type == 'event'" :item="item.item[0]" :link="item.link"/>
            </li>
          </ul>
          <!-- //list -->
        </div>

        <div v-if="sample_log.length < 1">
          <h2>
            <span>추천 키워드</span>
          </h2>
          <ul class="keyword_list">
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;비타C&quot;);">#비타C</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;노세범&quot;);">#노세범</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;모공&quot;);">#모공</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;화산송이&quot;);">#화산송이</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;로션&quot;);">#로션</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;스킨&quot;);">#스킨</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;브라이트닝&quot;);">#브라이트닝</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;히알루론산&quot;);">#히알루론산</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;블랙티&quot;);">#블랙티</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;콜라겐&quot;);">#콜라겐</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;레티놀&quot;);">#레티놀</a>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;씨드세럼&quot;);">#씨드세럼</a>
            </li>
          </ul>
        </div>

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
      <ul class="post_list_vertial">
        <li v-for="(item, idx) in samplePost.slice(0,3)" :key="idx">
          <PostItemVertical :item="item" :link="item.link" class="type_vertical"/>
        </li>
      </ul>
    </div>
  </section>

  <div class="showcase">
    <ShowcaseModalItem v-for="(item, idx) in sampleShowcase.slice(0,1)" :key="idx" :item="item" :link="item.link"/>
    <Button class="btn_min_outline" txt="전체보기" @click="modal.open('modal_showcase_all', 'fullMo')"/>
  </div>

  <!-- 쇼핑로그 안내 모달 -->
  <div id="log_info" class="modal_wrap">
     <div class="modal_container">
        <div class="modal_header">
            <h2>쇼핑로그 안내
              <p class="explain">최근 본 제품, 이벤트, 검색어예요</p>
            </h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <ul class="bullet_list">
            <li>로그인을 하신 고객님들은 30일동안 조회한 최대 100개까지의 쇼핑로그를 확인하실 수 있습니다.</li>
            <li>판매 종료된 제품이나 종료된 이벤트는 쇼핑로그에서 자동으로 삭제됩니다.</li>
          </ul>
        </div>
        <div class="modal_footer">
            <Button class="btn_ confirm" txt="확인" @click="modal.close(this);" />
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //쇼핑로그 안내 모달 -->

  <!-- 쇼케이스 전체보기 모달 -->
  <div id="modal_showcase_all" class="modal_wrap">
    <div class="modal_container">
        <div class="modal_header">
            <h2>전체보기</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <div class="content">
            <ShowcaseModalItem v-for="(item, idx) in banner_list" :key="idx" :item="item" :link="item.link"/>
          </div>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- 쇼케이스 전체보기 모달 -->

</template>

<script setup>
import { modal } from '~/assets/js/common-ui'
import { sample_goods, samplePost, sampleShowcase, sample_log, banner_list } from '~/test/data/publish/dummyData'
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

definePageMeta({
  layout:'mo-default'
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

    .tooltip {
      vertical-align:middle;
    }

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

/* 쇼핑로그 */
.shopping_log {
  margin-top:3rem;
  .no_data {
    padding:3rem 1rem;
    background-color:#f5f5f5;
    &:before {
      display:none;
    }
    strong {
      color:#000;
      font-size:1.6rem;
      font-weight:600;
    }
  }
  .goods_list {
    margin:0 0 3rem;
    position:relative;
    &:after {
      border-left:1px solid #eee;
      content:'';
      position:absolute;
      top:0;
      bottom:0;
      left:3rem;
    }
    > li {
      padding:0;
      position:relative;
      z-index:1;
      & + li {
        margin-top:3rem;
      }
      :deep(.goods_item), :deep(.event_item .item) {
        padding-bottom:0;
        display:flex;
        flex-wrap:wrap;
        .img_wrap, .thumb {
          width:6rem;
        }
        .cont {
          flex:1;
        }
      }
      :deep(.goods_item) {
        .img_wrap {
          margin-right:1.5rem;
          & + a {
            flex:1;
          }
          .thumb {
            height:8rem;
          }
          .btnIconBox {
            right:0;
            bottom:0.5rem;
            left:initial;
            gap:0;
            button {
              display:none;
              &.btn_heart {
                display:block;
              }
            }
          }
        }
        .cont {
          margin-top:0;
          padding-right:3rem;
          .name {
            strong {
              font-size:1.3rem;
            }
          }
          .price {
            display:flex;
            > * {
              font-size:1.2rem;
            }
            em {
              font-size:1rem;
            }
          }
        }
      }
      :deep(.event_item) {
        .item {
          align-items:center;
        }
        .thumb {
          height:4rem;
          margin-right:1.5rem;
          padding-top:0;
        }
        .cont {
          height:auto;
          margin-top:0;
          padding:0;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          strong {
            margin-top:0;
            font-size:1.3rem;
            font-weight:400;
            white-space: nowrap;
            word-break: break-all;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display:block;
          }
        }
      }
    }
  }
  .keyword_list {
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    a {
      padding:0.8rem 1.5rem;
      color:#009d5e;
      font-size:1.3rem;
      border:1px solid #009d5e;
      border-radius:100px;
      display:block;
    }
  }
}

.modal_wrap {
  :deep(.showcase_item) {
    height: 21rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
