<template>
  <div class="content_inner">
    <div class="recommend_area">
      <div class="title_wrap" :data-layout="props.layoutType">
        <div class="prd_tit">
          <h2>FOR ME</h2>
          <h3>추천해요<a href="IN_PC_MYP_01_81" class="btn_link_arrw">피부정보 등록</a></h3>
          <p class="desc">가장 많이 등록된 피부정보 기준으로 보여드려요.</p>
          <div class="btn_wrap">
            <Button txt="건성피부" class="btn_min gray" @click="modal.open('modal_set_skin_type', 'detailSearch modal_set_skin_type')" />
            <Button txt="모공 / 주름 / 탄력" class="btn_min gray" @click="modal.open('modal_set_skin_type', 'detailSearch modal_set_skin_type')" />
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

        <section>
          <h3><em>같은 연령대</em> 고객님들이 가장 많이 검색하고 있어요</h3>

          <Tabs tabType="type_02" :item="[{txt:'전체'},{txt:'10대'},{txt:'20대'},{txt:'30대'},{txt:'40대'},{txt:'50대~'}]"  :tabidx="0" />

          <div class="rank_area">
            <ol class="rank_list">
              <li class="active"><button type="button" class="btn_rank"><span class="num">1</span>레티놀</button></li> <!-- 활성화 li에 active 클래스 추가-->
              <li><button type="button" class="btn_rank"><span class="num">2</span>노세범</button></li>
              <li><button type="button" class="btn_rank"><span class="num">3</span>첫구매</button></li>
              <li><button type="button" class="btn_rank"><span class="num">4</span>클렌징</button></li>
              <li><button type="button" class="btn_rank"><span class="num">5</span>그린티</button></li>
              <li><button type="button" class="btn_rank"><span class="num">6</span>선크림</button></li>
              <li><button type="button" class="btn_rank"><span class="num">7</span>블랙티</button></li>
              <li><button type="button" class="btn_rank"><span class="num">8</span>앰플</button></li>
              <li><button type="button" class="btn_rank"><span class="num">9</span>화산송이</button></li>
              <li><button type="button" class="btn_rank"><span class="num">10</span>비자</button></li>
            </ol>
            <div class="tab_contents">
              <ul class="tab_cont goods_list active"> <!-- 활성화 tab_cont에 active 클래스 추가-->
                <li v-for="(item, idx) in sample_goods.slice(0,3)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
              <ul class="tab_cont goods_list">
                <li v-for="(item, idx) in sample_goods.slice(1,4)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
              <ul class="tab_cont goods_list">
                <li v-for="(item, idx) in sample_goods.slice(2,5)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
              <ul class="tab_cont goods_list">
                <li v-for="(item, idx) in sample_goods.slice(3,6)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
              <ul class="tab_cont goods_list">
                <li v-for="(item, idx) in sample_goods.slice(4,7)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
              <ul class="tab_cont goods_list">
                <li v-for="(item, idx) in sample_goods.slice(0,3)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
              <ul class="tab_cont goods_list">
                <li v-for="(item, idx) in sample_goods.slice(1,4)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
              <ul class="tab_cont goods_list">
                <li v-for="(item, idx) in sample_goods.slice(2,5)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
              <ul class="tab_cont goods_list">
                <li v-for="(item, idx) in sample_goods.slice(3,6)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
              <ul class="tab_cont goods_list">
                <li v-for="(item, idx) in sample_goods.slice(4,7)" :key="idx">
                  <GoodsItem :item="item" :link="item.link" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="shoppinglog_area">
      <div class="inner">
        <h2>
          <em>주소희</em>님의 쇼핑로그 <Icons class="tooltip" txt="툴팁" @click="modal.open('log_info', 'alert')" />
        </h2>
        <p class="txt_desc">최근 본 제품, 이벤트, 검색어예요</p>

        <div class="shopping_log">
          <div class="list_wrap">
            <!-- <p v-if="sample_log.length < 1" class="no_data"> -->
            <p class="no_data">
              <strong>쇼핑로그가 없습니다.</strong>
              <span>쇼핑로그는 7일 최대 50개까지 보관됩니다.</span>
            </p>
            <!-- list -->
            <ul class="goods_list type_column">
              <li v-for="(item, idx) in sample_log.slice(0,6)" :key="idx">
                <GoodsItem v-if="item.type == 'goods'" :item="item.item[0]" :link="item.item.link" />
                <EventItem v-if="item.type == 'event'" :item="item.item[0]" :link="item.link" type="type_column"/>
              </li>
            </ul>
            <!-- //list -->
          </div>

          <div class="keyword_list_wrap">
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

  <!-- 피부타입/고민 설정 모달 -->
  <div id="modal_set_skin_type" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
          <h2>피부타입/고민 설정</h2>
          <button class="btn_close" @click="modal.close(this);">닫기</button>
      </div>
      <div class="modal_content">
        <p>피부타입(필수 1개)</p>
        <ul>
          <li><Inputs _type="radio" _name="skin_type" _id="type01" _text="건성피부" class="round_square" /></li>
          <li><Inputs _type="radio" _name="skin_type" _id="type02" _text="중성피부" class="round_square" /></li>
          <li><Inputs _type="radio" _name="skin_type" _id="type03" _text="지성피부" class="round_square" /></li>
          <li><Inputs _type="radio" _name="skin_type" _id="type04" _text="민감성피부" class="round_square" /></li>
          <li><Inputs _type="radio" _name="skin_type" _id="type05" _text="복합성피부" class="round_square" /></li>
          <li><Inputs _type="radio" _name="skin_type" _id="type06" _text="약건성피부" class="round_square" /></li>
          <li><Inputs _type="radio" _name="skin_type" _id="type07" _text="트리플성피부" class="round_square" /></li>
        </ul>

        <p>피부고민(필수 3개)</p>
        <ul>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb01" _text="모공" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb02" _text="주름" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb03" _text="탄력" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb04" _text="블랙헤드" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb05" _text="트러블" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb06" _text="각질" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb07" _text="잡티" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb07" _text="피지과다" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb07" _text="건조함" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb07" _text="민감성" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb07" _text="색소침착" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb07" _text="피부톤" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb07" _text="다크써클" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb07" _text="피부결" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="skin_trouble" _id="tb07" _text="홍조" class="round_square" /></li>
        </ul>

        <div class="agree_box">
          <Inputs _type="checkbox" _text="내 프로필에도 업데이트하기" />
          <p>피부정보 업데이트 선택 후 적용 시 선택한 피부타입/피부고민이 나의 프로필에 업데이트 됩니다.</p>
        </div>
      </div>
      <div class="modal_footer">
          <Button class="btn_big confirm" txt="적용하기" @click="modal.close(this);" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //피부타입/고민 설정 모달 -->

  <!-- 쇼핑로그 안내 모달 -->
  <div id="log_info" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
          <h2>쇼핑로그 안내</h2>
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
</template>
<script setup>
import { modal } from '~/assets/js/common-ui'
import { sample_goods, sample_log } from '~/test/data/publish/dummyData'
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { onMounted } from 'vue';

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

onMounted(() => {
  //쇼핑로그 영역 고정
  const shopLog = document.getElementsByClassName("shoppinglog_area")[0];
  const winH = window.innerHeight;
  shopLog.style.cssText = "height:" + winH + "px";


  //하단 랭킹 UI - 순위 버튼
  const btnRank = document.querySelectorAll(".btn_rank");
  btnRank.forEach((button, index) => {
    button.addEventListener("click", () => {
      rankingTabUI(index);
    });
  });

  //초기 호출
  rankingTabUI();
})

//하단 랭킹 UI
let intervalUI = null;

const rankingTabUI = (e) => {
  const activeTab = document.querySelector('.rank_list li.active');
  const rankTab = [...activeTab.parentElement.children];
  const tabIdx = rankTab.indexOf(activeTab);
  const tabConts = [...activeTab.closest('ol').nextElementSibling.children];
  let nextIdx = tabIdx;

  if (e !== undefined) {
    clearInterval(intervalUI);
    rankTab[nextIdx].classList.remove('active');
    tabConts[nextIdx].classList.remove('active');
    nextIdx = e;
    rankTab[nextIdx].classList.add('active');
    tabConts[nextIdx].classList.add('active');
  }

  intervalUI = setInterval(() => {
    rankTab[nextIdx].classList.remove('active');
    tabConts[nextIdx].classList.remove('active');
    if (nextIdx >= rankTab.length - 1) {
      nextIdx = 0;
    } else {
      nextIdx += 1;
    }
    rankTab[nextIdx].classList.add('active');
    tabConts[nextIdx].classList.add('active');
  }, 2000);
};
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

      &+* {
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

      em {
        display: inline-flex;
        align-items: center;

        &:before {
          content: '';
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

    .swiper-container {
      .swiper-pagination-progressbar {
        width: 760px;
      }
    }
  }

  .rank_area {
    margin-top: 25px;
    display: flex;

    .rank_list {
      width: 170px;
      margin-right: 40px;
      border-top: 1px solid #F5F5F5;

      li {
        border-bottom: 1px solid #F5F5F5;

        button {
          width: 100%;
          padding: 16px 0;
          font-size: 14px;
          line-height: 1.43;
          color: #999;
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: break-word;

          .num {
            display: inline-block;
            width: 32px;
            margin-right: 5px;
            ;
            text-align: center;
          }
        }

        &.active {
          border-bottom: 1px solid #000;
        }

        &.active button {
          font-weight: 600;
          color: #000;
        }
      }
    }

    .tab_contents {
      .tab_cont {
        display: none;

        &.active {
          display: flex;
        }
      }

      .goods_list li {
        width: 170px;
      }

      :deep(.goods_item) {
        .img_wrap {
          .thumb {
            height: 227px;
          }
        }
        .cont {
          & > .price {
            strong {
             font-size: 18px;
            }
            span {
              font-size: 17px;
            }
            em {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}

.shoppinglog_area {
  width: 480px;
  padding: 132px 0 0 40px;
  border: 1px solid #f5f5f5;
  border-width: 0 1px;
  overflow: hidden;
  position: sticky;
  top: 0;

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.33em;
    letter-spacing: -0.01em;

    & + p {
      margin-top: 5px;
      color: #999;
    }

    button.tooltip {
      width: 16px;
      height: 16px;
      vertical-align: middle;
      background-position: 0 -260px;
    }

    em {
      color: #00BC70;
    }
  }

  .inner {
    height: 100%;
  }
}

.shopping_log {
  margin-top: 40px;
  height: calc(100% - 100px);
  overflow-y: scroll;

  &::-webkit-scrollbar{
    width: 8px;
  }

  &::-webkit-scrollbar-thumb{
    background-color: #e2e2e2;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track{
    background-color: transparent;
  }

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

    span {
      margin-top: 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.43;
      color: #999;
      text-align: center;
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
          gap:20px;
        }
        .thumb {
          height:60px;
          padding-top:0;
        }
        .cont {
          strong {
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

  .keyword_list_wrap {
    margin: 0 40px;
    border-top: 1px solid #eee;

    h2 {
      padding: 40px 0 20px;
      font-size: 16px;
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
}

.modal_set_skin_type {
  .modal_content {
    p {
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 1.32em;
      letter-spacing: -0.01em;
      color: #999;
    }

    ul {
      margin-bottom: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .agree_box {
      :deep(.input_wrap){
        em.label {
          color: #666;
        }
      }

      p {
        margin: 5px 0 0 30px;
        font-size: 14px;
        line-height: 1.33em;
        color: #999;
      }
    }
  }

  .modal_footer {
    width: 100%;
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 0;

    .btn_big.confirm {
      width: 100%;
    }
  }
}
</style>
