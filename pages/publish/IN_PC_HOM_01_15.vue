<template>
  <div class="content_inner">
    <div class="recommend_area">
      <div class="title_wrap" :data-layout="props.layoutType">
        <div class="prd_tit">
          <h2>FOR ME</h2>
          <h3>추천해요<a class="btn_link_arrw">피부정보 등록</a></h3>
          <p class="desc">가장 많이 등록된 피부정보 기준으로 보여드려요.</p>
          <div class="btn_wrap">
            <Button txt="건성피부" class="btn_min gray" @click="modal.open('shopping_log', 'detailSearch')" />
            <Button txt="모공 / 주름 / 탄력" class="btn_min gray" @click="modal.open('shopping_log', 'detailSearch')" />
          </div>
        </div>
      </div>
      <div class="inner">
        <section>
          <h3><em>오후 3시</em>에 고객님들이 가장 많이 찾고 있어요.</h3>
          <ProductDetailSwiperProgressBar />
        </section>

        <section>
          <h3>고객님들이 가장 많이 찾으신<em>남성</em>에서 추천드려요</h3>
          <p class="desc">최근 본 제품, 이벤트, 검색어예요</p>
          <ProductDetailSwiperProgressBar />
        </section>

        <section>
          <h3><em>모공</em>고민의 <em>건성피부</em> 고객님들이 가장 많이 구매했어요</h3>
          <div class="list_wrap">
            <ul class="goods_list">
              <li v-for="(item, idx) in sample_goods.slice(0,6)" :key="idx">
                <GoodsItem :item="item" :link="item.link" />
              </li>
            </ul>
          </div>
          <button type="button" class="btn_outline more refresh"><em>새로운 추천을 받고 싶어요</em> <span class="page">1/2</span></button>
        </section>

        <section>
          <h3><em>주름</em>고민의 <em>건성피부</em> 고객님들이 가장 많이 구매했어요</h3>
          <div class="list_wrap">
            <ul class="goods_list">
              <li v-for="(item, idx) in sample_goods.slice(0,6)" :key="idx">
                <GoodsItem :item="item" :link="item.link" />
              </li>
            </ul>
          </div>
          <button type="button" class="btn_outline more refresh"><em>새로운 추천을 받고 싶어요</em> <span class="page">1/2</span></button>
        </section>

        <section>
          <h3><em>탄력</em>고민의 <em>건성피부</em> 고객님들이 가장 많이 구매했어요</h3>
          <div class="list_wrap">
            <ul class="goods_list">
              <li v-for="(item, idx) in sample_goods.slice(0,6)" :key="idx">
                <GoodsItem :item="item" :link="item.link" />
              </li>
            </ul>
          </div>
          <button type="button" class="btn_outline more refresh"><em>새로운 추천을 받고 싶어요</em> <span class="page">1/2</span></button>
        </section>
      </div>
    </div>

    <div class="shoppinglog_area">
      <div class="inner">
        <h2>
          <span><em>주소희</em> 님의 쇼핑로그 <Icons class="tooltip" txt="툴팁" @click="modal.open('log_info', 'alert')" /></span>
          <a href="/publish/IN_MO_HOM_01_18" class="btn_link_arrw">전체보기</a>
        </h2>
        <p class="txt_desc">최근 본 제품, 이벤트, 검색어예요</p>

        <div class="shopping_log">
          <div class="list_wrap">
            <!-- <p v-if="sample_log.length < 1" class="no_data"> -->
            <p class="no_data">
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
    </div>
  </div>
</template>
<script setup>
import { sample_goods, sample_log } from '~/test/data/publish/dummyData'
import SwiperCore, { Navigation, Pagination, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, A11y, Controller]);

definePageMeta({
  layout:'pc-category'
});
const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
});
</script>

<style lang="scss" scoped>
.content_inner {
  width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .inner {
    padding: 0 !important;
  }
}
.recommend_area {
  width: 800px;

  .title_wrap {
    .prd_tit {
      width: 100%;
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;

      h2 {
        margin-bottom: 30px;
      }

      h3 {
        margin-bottom: 10px;
        font-size: 22px;
        line-height: 1.55;
        position: relative;

        .btn_link_arrw {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }

    .btn_wrap {
      margin-top: 10px;
      display: flex;
      gap: 5px;

      :deep(button) {
        background-color: #999;
        em {
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }

  .desc {
    font-size: 14px;
    color: #999;
  }

  .inner {
    section {
      &:first-child {
        h3 {
          margin: 60px 0 0;
        }
      }
    }

    h3 {
      margin: 100px 0 0;
      font-size: 24px;

      em {
        color: #00BC70;
      }

      & + * {
        margin-top: 30px;

        &.desc {
          margin: 10px 0 30px;
        }
      }
    }

    .goods_list {
      li {
        width: 240px;
      }
    }

    :deep([class*=btn_][class*=_outline]).more {
      width: 340px;
      margin: 30px auto 0;
      font-size: 14px;
      border-color: #eee;
      display: block;

      em {
        color: #666;
      }
    }

    .refresh {
      height: 40px;
      border: 1px solid #eee;
      position: relative;

      em{
        display: inline-flex;
        align-items: center;

        &:before {
          content:'';
          width: 16px;
          height: 16px;
          margin-right: 10px;
          background: url('~/assets/images/common/icon_split.png') -114px -63px / 167px auto no-repeat;
          display: inline-block;
        }
      }

      .page {
        font-size: 12px;
        color: #999;
        position: absolute;
        top: 12px;
        right: 21px;
      }
    }
  }

  :deep(.swiper_progressbar_wrap) {
    width: 100%;

    .navigation {
      display: none;
    }
  }
}

.shoppinglog_area {
 width: 480px;
 padding: 132px 0 0 40px;
 border: 1px solid #f5f5f5;
 border-width: 0 1px;
}

.shopping_log {
  section {
    padding-top:40px;
    h4 {
      margin-bottom:20px;
      font-size:16px;
      font-weight:600;
    }
    & + section {
      margin-top:90px;
      border-top:1px solid #eee;
    }
  }
  .no_data {
    padding:50px 0 90px;
  }
  .goods_list {
    margin:0;
    position:relative;
    &:after {
      border-left:1px solid #eee;
      content:'';
      position:absolute;
      top:0;
      bottom:0;
      left:44px;
    }
    > li {
      padding:0;
      position:relative;
      z-index:1;
      & + li {
        margin-top:50px;
      }
      :deep(.goods_item), :deep(.event_item .item) {
        display:flex;
        .img_wrap, .thumb {
          width:90px;
        }
        .cont {
          flex:1;
        }
      }
      :deep(.goods_item) {
        .img_wrap {
           height:120px;
           margin-right:20px;
           .thumb {
            height:100%;
           }
           .btnIconBox {
            display:none;
           }
        }
        .cont {
          margin-top:0;
          .price {
            > * {
              font-size:14px;
            }
            em {
              font-size:13px;
            }
          }
        }
      }
      :deep(.event_item) {
        .item {
          align-items:center;
        }
        .thumb {
          height:60px;
          margin-right:20px;
          padding-top:0;
        }
        .cont {
          height:auto;
          margin-top:0;
          strong {
            margin-top:0;
            font-size:14px;
            font-weight:400;
            white-space: normal;
            word-break: break-all;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
  .keyword_list {
    display:flex;
    flex-wrap:wrap;
    gap:10px 5px;
    a {
      padding:4px 10px;
      color:#009d5e;
      font-size:12px;
      border:1px solid #009d5e;
      border-radius:100px;
      display:block;
    }
  }
}
</style>
