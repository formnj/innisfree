<template>
  <!-- 검색 전 영역 -->
  <section class="search">
    <div class="search_wrap">
      <section>
          <strong>
              인기검색
              <span>3분전 갱신</span>
          </strong>
          <div class="keyword_wrap">
              <div class="keyword">
                  <ol>
                      <li>
                          <a href="#none" class="up"><em>1</em><span>장원영 네컷</span></a>
                      </li>
                      <li>
                          <a href="#none" class="up"><em>2</em><span>노세범</span></a>
                      </li>
                      <li>
                          <a href="#none" class="down"><em>3</em><span>메이크업도구</span></a>
                      </li>
                      <li>
                          <a href="#none"><em>4</em><span>그린티 신상</span></a>
                      </li>
                      <li>
                          <a href="#none"><em>5</em><span>아이라이너</span></a>
                      </li>
                  </ol>
                  <ol>
                      <li>
                          <a href="#none"><em>6</em><span>검색어 최대 9자까지 가능</span></a>
                      </li>
                      <li>
                          <a href="#none" class="down"><em>7</em><span>바디로션</span></a>
                      </li>
                      <li>
                          <a href="#none" class="new"><em>8</em><span>선크림</span></a>
                      </li>
                      <li>
                          <a href="#none"><em>9</em><span>신규 구매 혜택</span></a>
                      </li>
                      <li>
                          <a href="#none" class="up"><em>10</em>이벤트</a>
                      </li>
                  </ol>
              </div>
          </div>
      </section>
      <section>
          <strong>최근검색어
              <Button class="btn_txt" txt="전체삭제" @click="keyword_del_all" />
          </strong>
          <ul class="latest">
              <template  v-if="key_cnt > 0">
                  <li v-for="(item, idx) in latestSearchWordData" :key="idx">
                      <div v-if="key_cnt > 0">
                          <a href="#none">{{ item.word }}</a>
                          <Button class="btn_del" @click="keyword_del" />
                      </div>
                  </li>
              </template>
              <template v-else>
                  <li class="no_data">최근 검색어가 없습니다.</li>
              </template>
          </ul>
      </section>
      <section>
          <div class="cate_wrap">
              <ul class="category">
                  <li v-for="item in categoryForSearchLayerData" :key="item">
                      <a href="#none">
                          <span class="thumb">
                              <em><img :src="item.imageUrl" /></em>
                          </span>
                          <p>{{ item.text }}</p>
                      </a>
                  </li>
              </ul>
          </div>
      </section>
      <!-- 자동완성 영역 -->
      <div class="auto_complete_wrap" :class="{ active:isValid !== '' }">
        <section v-if="!isBool">
            <ul class="auto">
                <li v-for="(item, idx) in auto_list" :key="idx">
                    <a :href="item.url">
                        {{ item.text }}
                        <span>{{ item.latest }}</span>
                    </a>
                </li>
            </ul>
        </section>
        <section v-if="!isBool">
            <ul class="key_item goods_list">
                <li v-for="(item,idx) in key_item_list" :key="idx">
                    <GoodsItem :item="item" :link="item.link" />
                </li>
            </ul>
        </section>
        <section v-if="isBool">
            <div class="no_content">
                일치하는 결과가 없습니다.
            </div>
        </section>
      </div>
      <!-- //자동완성 영역 -->
    </div>
  </section>
  <!-- //검색 전 영역 -->

  <!-- 검색결과 영역 -->
  <section class="keyword">
    <div class="keyword_wrap search_area">
        <h2>
          <button type="button">
            인기검색어
            <span>3분전 갱신</span>
          </button>
        </h2>
        <div class="keyword">
            <ol>
                <li>
                    <a href="#none" class="up"><em>1</em><span>장원영 네컷</span></a>
                </li>
                <li>
                    <a href="#none" class="up"><em>2</em><span>노세범</span></a>
                </li>
                <li>
                    <a href="#none" class="down"><em>3</em><span>메이크업도구</span></a>
                </li>
                <li>
                    <a href="#none"><em>4</em><span>그린티 신상</span></a>
                </li>
                <li>
                    <a href="#none"><em>5</em><span>아이라이너</span></a>
                </li>
                <li>
                    <a href="#none"><em>6</em><span>검색어 최대 9자까지 가능</span></a>
                </li>
                <li>
                    <a href="#none" class="down"><em>7</em><span>바디로션</span></a>
                </li>
                <li>
                    <a href="#none" class="new"><em>8</em><span>선크림</span></a>
                </li>
                <li>
                    <a href="#none"><em>9</em><span>신규 구매 혜택</span></a>
                </li>
                <li>
                    <a href="#none" class="up"><em>10</em>이벤트</a>
                </li>
            </ol>
        </div>
    </div>
  </section>

  <section>
    <div class="no_content">
      일치하는 결과가 없습니다.
    </div>
  </section>

  <section>
    <!-- title washed -->
    <div class="sub_title_wrap">
      <h3>
        <strong class="badge count">제품 <em>23</em></strong>
      </h3>
      <div class="pdtSortTab_wrap">
        <div class="sortTab">
          <button class="btn_dropdown" @click="modal.open('modal_sort', 'bottom')">랭킹순</button>
        </div>
        <button @click="modal.open('modal_search', 'bottom')">필터</button>
      </div>
    </div>
    <!-- //title washed -->

    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </section>

  <section>
    <!-- title washed -->
    <div class="sub_title_wrap">
      <h3>연관이벤트
        <strong>5</strong>
      </h3>
    </div>
    <!-- //title washed -->

    <div class="event_wrap">
      <swiper
        v-bind="swieprOpt.events"
      >
        <swiper-slide v-for="(item, idx) in sample_event.slice(0,5)" :key="idx">
          <EventItem :item="item" :link="item.link" />
        </swiper-slide>
      </swiper>
    </div>
  </section>

  <section>
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </section>

  <section>
      <!-- title washed -->
      <div class="sub_title_wrap">
        <div>
          <h3>
            <strong>주소희</strong>님 이 제품은 어때요?
          </h3>
        </div>
        <a href="#none" class="btn_link_arrw"></a>
      </div>
      <!-- //title washed -->
      <div class="swiper_wrap type_01">
        <swiper
          v-bind="swieprOpt.recommend04"
        >
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0,5)" :key="idx">
            <GoodsItem class="type_cart" :item="item" />
          </swiper-slide>
        </swiper>
      </div>
  </section>

  <div id="modal_sort" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div>
          <ul>
            <li class="active"><a href="#none" class="active">랭킹순</a></li>
            <li><a href="#none">추천순</a></li>
            <li><a href="#none">판매금액순</a></li>
            <li><a href="#none">판매수량순</a></li>
            <li><a href="#none">할인율순</a></li>
            <li><a href="#none">최신순</a></li>
            <li><a href="#none">리뷰많은순</a></li>
            <li><a href="#none">낮은가격순</a></li>
            <li><a href="#none">높은가격순</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_search" class="modal_wrap">
        <div class="modal_container">
            <div class="modal_header">
                <h2>필터</h2>
                <button class="btn_close" @click="modal.close(this);">닫기</button>
            </div>
            <div class="modal_content">
                <dl class="sortList">
                  <dt>혜택별</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">증정</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl class="sortList">
                  <dt>유형별</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">스킨케어</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">메이크업</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">남성</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl class="sortList">
                  <dt>고민별</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">수분/보습/속건조</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">잡티/피부톤</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">각질/피부결</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl class="sortList">
                  <dt>라인별</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">비타C</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">레티놀 시카</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl class="sortList">
                  <dt>기능성</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">자외선차단</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">주름개선</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">미백</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl class="sortList">
                  <dt>공병수거</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox"><span @click="setFilter($event)">공병수거</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
            </div>
            <div class="modal_footer">
                <Button class="btn_big btn_reset" txt="초기화" />
                <Button class="btn_big btn_type_02" txt="검색" />
            </div>
        </div>
        <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //검색결과 영역 -->
</template>
<script setup>
import {
  sample_goods,
  sample_event,
  sample_auto,
  categoryForSearchLayerData,
  latestSearchWordData,
} from '~/test/data/publish/dummyData'
import { modal, setFilter } from '~/assets/js/common-ui'

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

definePageMeta({
  layout:'mo-search'
});


const swieprOpt = {
  events: {
    slidesPerView:'auto',
    loop:false,
    pagination:{
      type:'bullets'
    },
    centeredSlides:true,
    slidesOffsetBefore:1
  },
  recommend04: {
    slidesPerView:'auto',
    spaceBetween:3,
    loop: false,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  }
}

onMounted(() => {
  /* keyword rolling */
  const keyword_pos = document.querySelector('.search_area ol'),
  roll_size = keyword_pos.querySelectorAll('li'),
  roll_timer = 3000;

  let i = 1;
  const clone_roll = roll_size[0];

  keyword_pos.insertAdjacentHTML('beforeend', '<li>'+clone_roll.innerHTML+'</li>');

  const roll_fn = () => {
      keyword_pos.style.cssText='transform:translateY(-'+(i*1.9)+'rem); transition:all 0.35s ease-in;'
      if(i < (roll_size.length+1)){
          i++;

          if(i == (roll_size.length+1)){
              keyword_pos.addEventListener('transitionend', () => {
                  keyword_pos.removeAttribute('style');
              }, {once: true});
              i = 1;
          }
      }
  };

  let key_rolling = setInterval(roll_fn, roll_timer);
  /* //keyword rolling */
  const keyword_wrap = document.querySelector('.keyword_wrap.search_area');
  const roll_last = keyword_wrap.querySelector('ol').lastChild;
  const keyword_act = () => {

    keyword_wrap.classList.toggle('active');
    if (keyword_wrap.classList.contains('active')) {
      roll_last.style.display='none';
      clearInterval(key_rolling);
      i=1;
      keyword_wrap.querySelector('ol').style.cssText='';
    } else {
      roll_last.style.display='';
      key_rolling = setInterval(roll_fn, roll_timer);
    }
  };

  keyword_wrap.addEventListener('click', keyword_act);

  document.querySelector('.search_header .input input').addEventListener('input', auto_complete);
});
const key_item_list = ref([]),
auto_list = ref([]),
isValid = ref(''),
isBool = ref(false),
key_cnt = ref(latestSearchWordData.length);

const keyword_del = (e) => {
    e.target.closest('li').remove();
    key_cnt.value = document.querySelector('.latest').childElementCount;
}

const keyword_del_all = (e) => {
    const target = e.target.closest('section').querySelector('.latest');

    if(!target.firstElementChild.classList.contains('no_data')){
        while (target.firstElementChild) {
            target.removeChild(target.firstElementChild);
            key_cnt.value = document.querySelector('.latest').childElementCount;
        }
    }
}

const auto_complete = (e) => {
  isValid.value = e.target.value;

  auto_list.value = sample_auto.filter(e => e.text.indexOf(isValid.value) >= 0);
  key_item_list.value = sample_goods.filter(e => e.name !== undefined && e.name.indexOf(isValid.value) >= 0);

  key_item_list.value.length <= 0 ? isBool.value = true : isBool.value = false;
};
</script>
<style lang="scss" scoped>
section {
  &.search {
    .search_wrap {
        &.active {
            display:block;
        }
        strong {
            margin-bottom:2rem;
            font-size:1.6rem;
            font-weight:600;
            position:relative;
            display:flex;
            justify-content:space-between;
            :deep(.btn_txt) {
                em {
                    color:#999;
                    font-size:1.2rem;
                }
            }
            span {
                color:#999999;
                font-size:1.2rem;
                font-weight:300;
                line-height:1.6rem;
            }
        }
        .search_box {
            padding:1rem 1.6rem;
            border:0;
            border-radius:0;
            background:#fff;
            display:flex;
            align-items:center;
            & > div {
                height:4rem;
                border:0.1rem solid #000;
                border-radius:5px;
                overflow:hidden;
                display:flex;
                align-items:center;
                flex:1;
                .input_wrap {
                  flex:1;
                }
            }
            :deep(.input) {
                i, input {
                    font-size:1.3rem;
                }
                input {
                    height:4rem;
                    padding-right:0.5rem;
                    border:0;
                }
            }
            .btn_search {
                width:2.4rem;
                height:2.4rem;
                margin-right:1rem;
                background-color:transparent;
                background-position:0 -4rem;
            }
            .back {
                margin-right:1rem;
            }
            .barcode {
                margin-left:1rem;
            }
        }
        section {
            padding:3rem 0;
            background:#fff;
            & + section:before {
                border-top:1px solid #f5f5f5;
                content:'';
                display:block;
                transform:translateY(-30px);
            }
            strong {
                padding:0 2.2rem;
                margin-bottom:3rem;
            }
            ul {
                padding:0 2.2rem;
                margin-bottom:3.1rem;
                display:flex;
                flex-wrap:wrap;
                gap:0.5rem;
                &.latest {
                    & + strong {
                        margin-bottom:2rem;
                    }
                    li:not(.no_data) {
                        padding:0 1.5rem;
                        border:1px solid #ddd;
                        border-radius:100px;
                        div {
                            display:flex;
                            align-items:center;
                        }
                    }
                    li.no_data {
                        width:100%;
                        padding:5rem 1rem;
                        color:#999;
                        text-align:center;
                    }
                    a {
                        padding:0.7rem 0;
                        color:#333;
                        font-size:1.4rem;
                        font-weight:400;
                        display:block;
                    }
                    :deep(.btn_del) {
                        width:12px;
                        height:12px;
                        margin-top:1px;
                        margin-left:10px;
                        background-color:transparent;
                        position:relative;
                        &:before, &:after {
                            width:10px;
                            margin-top:5px;
                            margin-left:1px;
                            border-top:1px solid #999;
                            content:'';
                            position:absolute;
                            top:0;
                            left:0;
                            display:block;
                        }
                        &:before {
                            transform:rotate(45deg);
                        }
                        &:after {
                            transform:rotate(135deg);
                        }
                        em {
                            padding:0;
                            font-size:0;
                        }
                    }
                }
                &.category {
                    padding:0 2.2rem;
                    margin:0;
                    overflow:auto;
                    flex-wrap:nowrap;
                    gap:1.2rem;
                    scrollbar-width:none;
                    &::-webkit-scrollbar {
                        display:none;
                    }
                    li {
                        .thumb {
                            width:5.7rem;
                            height:5.7rem;
                            display:block;
                        }
                        p {
                            margin-top:0.8rem;
                            color:#888;
                            font-size:1.2rem;
                            font-weight:400;
                            text-align:center;
                            white-space:nowrap;
                        }
                    }
                }
            }
            .cate_wrap {
                padding:0;
                margin-bottom:5.8rem;
                overflow:hidden;
            }
            .keyword_wrap {
                padding:0 2.2rem 3.1rem;
                .keyword {
                    display:flex;
                }
                ol {
                    width:50%;
                    display:flex;
                    flex-wrap:wrap;
                    gap:2.5rem 0;
                    li {
                        width:100%;
                        a {
                            font-size:1.4rem;
                            font-weight:400;
                            display:flex;
                            align-items:center;
                            gap:2.7rem;
                            em {
                                min-width:1.6rem;
                                font-size:1.3rem;
                                font-weight:600;
                                line-height:1.6rem;
                                text-align:center;
                                position:relative;
                                &:after {
                                    content:'';
                                    width:1.2rem;
                                    height:1.2rem;
                                    background: url('/_nuxt/assets/mo_images/common/icon_split.png') no-repeat -1.5rem -13rem;
                                    background-size:25rem auto;
                                    position:absolute;
                                    top:50%;
                                    right:-1.8rem;
                                    transform:translateY(-50%);
                                }
                            }
                            span {
                                overflow: hidden;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 1;
                            }
                            &.up {
                                em{
                                    &:after {
                                        background-position:0 -13rem;
                                    }
                                }
                            }
                            &.down {
                                em{
                                    &:after {
                                        background-position:-3rem -13rem;
                                    }
                                }
                            }
                            &.new {
                                em{
                                    &:after {
                                        background-position:-4.5rem -13rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .auto_complete_wrap {
          background:rgba(0,0,0,0.6);
          display:none;
          position:fixed;
          top:60px;
          right:0;
          left:0;
          bottom:0;
          z-index:10;
          &.active {
            display:block;
          }
          .auto {
              gap:2.5rem;
              li {
                  width:100%;
                  a {
                      font-size:1.4rem;
                      font-weight:400;
                      display:flex;
                      align-items:center;
                      justify-content:space-between;
                      span {
                          color:#aaa;
                          font-size:1.2rem;
                          font-weight:400;
                      }
                  }
              }
          }
          .key_item {
              margin:0;
              gap:0.3rem;
              li {
                  width:100%;
                  padding:0;
                  :deep(.goods_item) {
                      padding:0;
                      display:flex;
                      align-items:center;
                      gap:2rem;
                      .img_wrap {
                          width:9rem;
                          .thumb {
                              width:9rem;
                              height:12rem;
                          }
                          .btnIconBox {
                              display:none;
                          }
                      }
                      >a {
                          .cont {
                              width:22rem;
                              .review_score {
                                  display:none;
                              }
                              .price {
                                  strong {
                                      margin-right:0.5rem;
                                  }
                                  span {
                                      margin-right:1rem;
                                  }
                                  em {
                                      display:inline-block;
                                  }
                              }
                          }
                      }
                  }
              }
          }
          .no_content {
            padding:0;
            &:after {
              content:unset;
            }
          }
        }
    }
  }

  &.keyword {
    .keyword_wrap {
      position:relative;
      h2 {
        padding:1.7rem 2rem;
        border-top:0.1rem solid #eee;
        border-bottom:0.1rem solid #eee;
        button {
          width:100%;
          font-size:1.6rem;
          font-weight:600;
          font-family:inherit;
          outline:0;
          display:flex;
          align-items:center;
          span {
            display:none;
          }
          &:after {
            content:'';
            width:1.4rem;
            height:0.7rem;
            margin-left:auto;
            background:url("~/assets/images/common/icon_split.png") no-repeat -11rem -6.4rem;
            background-size:25rem auto;
            display:inline-block;
          }
        }
      }
      .keyword {
        width:50%;
        height:1.9rem;
        overflow:hidden;
        position:absolute;
        top:1.9rem;
        left:50%;
        transform:translateX(-45%);
        ol {
          li {
            height:1.9rem;
            display:flex;
            align-items:center;
            a {
              display:flex;
              align-items:center;
              gap:2.7rem;
              em {
                min-width:1.6rem;
                font-size:1.3rem;
                font-weight:600;
                line-height:1.6rem;
                text-align:center;
                position:relative;
                &:after {
                    content:'';
                    width:1.2rem;
                    height:1.2rem;
                    background: url('/_nuxt/assets/mo_images/common/icon_split.png') no-repeat -1.5rem -13rem;
                    background-size:25rem auto;
                    position:absolute;
                    top:50%;
                    right:-15px;
                    transform:translateY(-50%);
                }
              }
              &.up {
                  em{
                      &:after {
                          background-position:0 -13rem;
                      }
                  }
              }
              &.down {
                  em{
                      &:after {
                          background-position:-3rem -13rem;
                      }
                  }
              }
              &.new {
                  em{
                      &:after {
                          background-position:-4.5rem -13rem;
                      }
                  }
              }
              span {
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
              }
            }
          }
        }
      }
      &.active {
        h2 {
          button {
            span {
              margin-left:15px;
              color:#999;
              font-size:12px;
              font-weight:300;
              display:inline-block;
            }
            &:after {
              transform:rotate(180deg);
            }
          }
        }
        .keyword {
          width:auto;
          height:24.1rem;
          padding:3rem 2rem;
          margin:0 -20px;
          border-bottom:0.1rem solid #eee;
          overflow:auto;
          position:unset;
          transform:translateX(0);
          ol {
            width:100%;
            height:100%;
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            gap:2.1rem 0;
            li {
              width:50%;
            }
          }
        }
      }
    }
  }

  .no_content {
    padding:3.7rem 0 5rem;
    position:relative;
    &:after {
      content:'';
      width:calc(100% + 39px);
      height:5px;
      background:#F5F5F5;
      position:absolute;
      bottom:0;
      left:50%;
      transform:translateX(-50%);
    }
  }

  .list_wrap {
    position:relative;
    &:after {
      content:'';
      width:calc(100% + 39px);
      height:5px;
      background:#F5F5F5;
      position:absolute;
      bottom:0;
      left:50%;
      transform:translateX(-50%);
      opacity:0.5;
    }
    .goods_list {
      padding-bottom:30px;
      margin:0;
      gap:4rem 0.3rem;
      justify-content:space-between;
      > li {
        width:16.5rem;
        padding:0;
      }
    }
  }
}

:deep(.goods_item) {
  &.type_cart {
    .img_wrap {
      position:relative;
      .thumb {
        width:100%;
        height:auto;
        padding-top:135%;
      }
      .btnIconBox {
        right:0.8rem;
        bottom:0.8rem;
        left:initial;
        gap:0;
        button {
          display:none;
          &.btn_cart {
            display:block;
          }
        }
      }
    }
    .cont {
      .name {
        strong {
          font-size:1.4rem;
        }
      }
    }
  }
}


.event_wrap {
  padding-bottom:30px;
  margin-bottom:30px;
  position:relative;
  &:after {
    content:'';
    width:calc(100% + 39px);
    height:5px;
    background:#F5F5F5;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
  }
  .swiper-container {
    padding-bottom:30px;
    :deep(.swiper-pagination) {
      bottom:0;
      span {
        width:5px;
        height:5px;
        background:#eee;
        opacity:1;
        &.swiper-pagination-bullet-active {
          background:#000;
        }
      }
    }
  }
  :deep(.event_item){
    .item {
      .date {
        font-weight:300;
      }
    }
  }
}

.swiper_wrap {
  margin:0 -2.1rem;
  .swiper-container{
    padding:0 2.1rem;
  }
  &.type_01 {
    .swiper-slide {
      width:14rem;
    }
  }
}

.sortList {
  margin-bottom:30px;
  dt {
    margin-bottom: 10px;
    color: #999999;
    font-size: 12px;
    line-height: 1.32em;
    letter-spacing: -0.01em;

  }
  dd {
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      li {
        label {
          padding-left: 0;
          input {
            position: absolute;
            z-indeX: -1;
            opacity: 0;
          }
          span {
            height: 30px;
            padding: 0 20px;
            color: #AAAAAA;
            font-weight: 600;
            font-size: 14px;
            border-radius: 5px;
            background-color: #F5F5F5;
            line-height: 1.29em;
            letter-spacing: -0.01em;
            display: flex;
            align-items: center;
            &.active {
              color: #FFFFFF;
              background:#00BC70;
            }
          }
        }
      }
    }
  }
}

.modal_wrap {
  &#modal_sort {
    .modal_container {
      border-top-left-radius: 20px 20px;
      border-top-right-radius: 20px 20px;
      .modal_header {
        width: 100%;
        height: 29.4px;
        padding: 0;
        border-bottom: 0;
        position: relative;
        .btn_close {
          top: 50%;
          right: 50%;
          transform: translate(-50%, -50%);
          &::before {
            width: 67px;
            height: 5px;
            border-radius: 100px;
            border-top: 0;
            background-color: #dddddd;
            position: absolute;
            transform: rotate(0deg);
          }
          &::after {
            display: none;
          }
        }
      }
      .modal_content {
        padding: 0;
        height: calc(100% - 29.4px);
        overflow-y: auto;
        div {
          ul {
            li {
              padding: 16px 28px;
              border-bottom: 1px solid #f5f5f5;
              &:last-of-type {
                border-bottom: 0;
              }
              &.active {
                display: flex;
                align-items: center;
                justify-content: space-between;
                &::after {
                  content: '';
                  width: 22.4px;
                  height: 22.4px;
                  background-image: url('~/assets/images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 250px;
                  background-position: -203px -94px;
                  display: inline-block;
                }
                a {
                  color: #00bc70;
                  font-weight: 700;
                }
              }
              a {
                color: #000000;
                font-weight: 300;
                font-size: 16px;
                line-height: 17.5px;
                letter-spacing: -0.14px;
              }
            }
          }
        }
      }
    }
  }
  &#modal_search {
    .modal_container {
      .modal_header {
        button {
          width:24px;
          height:24px;
          top:20px;
          left:unset;
          right:20px;
          transform:unset;
          &:before,&:after {
            width: 100%;
            height:1px;
            border-top: 1px solid #222;
            border-radius:0;
            background:none;
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            display: block;
          }
          &:before {
            transform:rotate(45deg);
          }
        }
      }
      .modal_content {
        padding:0 26px;
      }
      .modal_footer {}
    }
  }
}
</style>
