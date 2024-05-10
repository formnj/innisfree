<template>
  <div class="shopping_log">

    <section class="list_wrap">
      <h3>
        <strong>김이니</strong>님의 쇼핑로그
        <Icons class="tooltip" txt="툴팁" @click="modal.open('log_info', 'alert')" />
        <p class="explain">최근 본 제품, 이벤트, 검색어예요</p>
      </h3>
      <!-- <p v-if="sample_log.length < 1" class="no_data"> -->
      <p class="no_data">
        <strong>쇼핑로그가 없습니다.</strong>
      </p>
      <!-- list -->
      <ul class="goods_list type_column">
        <li v-for="(item, idx) in sample_log" :key="idx">
          <GoodsItem v-if="item.type == 'goods'" :item="item.item[0]" :link="item.item.link" />
          <EventItem v-if="item.type == 'event'" :item="item.item[0]" :link="item.link"/>
        </li>
      </ul>
      <!-- //list -->
    </section>

    <section>
      <h3>추천 키워드</h3>
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
    </section>

  </div>

  <!-- 쇼핑로그 안내 모달 -->
  <div class="modal_wrap" id="log_info">
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
            <Button @click="modal.close(this);" class="btn_ confirm" txt="확인" />
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //쇼핑로그 안내 모달 -->
</template>
<script setup>
import { modal } from '~/assets/js/common-ui'
import { sample_log } from '~/test/data/publish/dummyData'

definePageMeta({
  layout:'mo-category'
})

onMounted(() => {})
</script>
<style lang="scss" scoped>

.shopping_log {
  section {
    padding-top:40px;
    h3 {
      margin-bottom:20px;
      font-size:1.6rem;
      font-weight:600;
      button {
        margin-left:0.5rem;
        vertical-align:middle;
      }
      .explain {
        margin-top:0.5rem;
        color:#999;
        font-size:1.2rem;
        font-weight:300;
      }
    }
    & + section {
      margin-top:3rem;
    }
  }
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
    margin:0;
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

@import "~/assets/scss/_mo_mixin.scss";
@import "~/assets/scss/mobile.scss";

@include mo_749 {}
</style>
