<template>
  <!-- 검색결과 영역 -->
  <div class="search_wrap" data-search="after">
    <section class="keyword">
      <div class="keyword_wrap search_area">
          <h2>
            <button type="button">
              인기검색어
              <span>3분전 갱신</span>
            </button>
          </h2>
          <div class="keyword_list">
              <ol ref="roll_ele">
                  <li v-for="(item, idx) in keyword_list" :key="idx">
                      <a href="#none" :class="item.type"><em>{{ item.num }}</em><span>{{ item.name }}</span></a>
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
        <h3><p class="badge count">제품 <em>23</em></p></h3>
        <div class="pdtSortTab_wrap">
          <div class="sortTab">
            <button class="btn_dropdown" @click="modal.open('modal_sort', 'bottom modal_sort')">랭킹순</button>
          </div>
          <button @click="modal.open('modal_filter', 'bottom filter')">필터</button>
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
        <h4>연관이벤트 <em>5</em></h4>
      </div>
      <!-- //title washed -->

      <div class="event_wrap">
        <swiper
          v-bind="swieprOpt.events"
        >
          <swiper-slide v-for="(item, idx) in sample_event.slice(0,5)" :key="idx">
            <EventItem :item="item" :link="item.link" type="type_column" />
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
            <h4><em>주소희</em>님 이 제품은 어때요?</h4>
          </div>
          <a href="#none" class="btn_link_arrw"></a>
        </div>
        <!-- //title washed -->
        <div class="swiper_wrap">
          <swiper
            v-bind="swieprOpt.recommend04"
          >
            <swiper-slide v-for="(item, idx) in sample_goods.slice(0,5)" :key="idx">
              <GoodsItem class="type_cart" :item="item" :useHash="true" />
            </swiper-slide>
          </swiper>
        </div>
    </section>
  </div>

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

  <div id="modal_filter" class="modal_wrap">
        <div class="modal_container">
            <div class="modal_header">
                <h2>필터</h2>
                <button class="btn_close" @click="modal.close(this);"><span>닫기</span></button>
            </div>
            <div class="modal_content">
              <p>혜택별</p>
              <ul class="pick_list">
                <li><Inputs _type="checkbox" _name="filter" _id="a00" _text="증정" class="round_square" /></li>
              </ul>

              <p>유형별</p>
              <ul class="pick_list">
                <li><Inputs _type="checkbox" _name="filter" _id="a01" _text="스킨케어" class="round_square" /></li>
                <li><Inputs _type="checkbox" _name="filter" _id="a02" _text="메이크업" class="round_square" /></li>
                <li><Inputs _type="checkbox" _name="filter" _id="a03" _text="남성" class="round_square" /></li>
              </ul>

              <p>고민별</p>
              <ul class="pick_list">
                <li><Inputs _type="checkbox" _name="filter" _id="a04" _text="수분/보습/속건조" class="round_square" /></li>
                <li><Inputs _type="checkbox" _name="filter" _id="a05" _text="잡티/피부톤" class="round_square" /></li>
                <li><Inputs _type="checkbox" _name="filter" _id="a06" _text="각질/피부결" class="round_square" /></li>
              </ul>

              <p>라인별</p>
              <ul class="pick_list">
                <li><Inputs _type="checkbox" _name="filter" _id="a07" _text="비타C" class="round_square" /></li>
                <li><Inputs _type="checkbox" _name="filter" _id="a08" _text="레티놀 시카" class="round_square" /></li>
              </ul>

              <p>기능성</p>
              <ul class="pick_list">
                <li><Inputs _type="checkbox" _name="filter" _id="a09" _text="자외선차단" class="round_square" /></li>
                <li><Inputs _type="checkbox" _name="filter" _id="a10" _text="주름개선" class="round_square" /></li>
                <li><Inputs _type="checkbox" _name="filter" _id="a11" _text="미백" class="round_square" /></li>
              </ul>

              <p>공병수거</p>
              <ul class="pick_list">
                <li><Inputs _type="checkbox" _name="filter" _id="a12" _text="공병수거" class="round_square" /></li>
              </ul>
            </div>
            <div class="modal_footer">
                <Button class="btn_big btn_reset" txt="초기화" />
                <Button class="btn_big btn_type_02" txt="99개 제품보기" />
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
  keyword_list
} from '~/test/data/publish/dummyData'
import { modal } from '~/assets/js/common-ui'

// import Swiper core and required components
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

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
};

definePageMeta({
  layout:'mo-search'
});

const emit = defineEmits(['icons']);

const roll_ele = ref(null);
const roll_idx = ref(0);
const roll_time = ref(3000);
const roll_fn = () => {
    const roll_child = roll_ele.value.querySelectorAll('li');
    const roll_height = roll_child[0].clientHeight;

    roll_idx.value++;
    roll_ele.value.style.cssText = `transform: translateY(-${roll_height * roll_idx.value}px); transition: all 0.35s ease-in`;

    roll_ele.value.addEventListener('transitionend', () => {
        if (roll_idx.value >= roll_child.length - 1) {
            roll_ele.value.style.cssText = `transform: translateY(0); transition: unset;`
            roll_idx.value = 0;
        }
    });
}

onMounted(() => {
  emit('icons', 1);

  roll_ele.value.append(roll_ele.value.children[0].cloneNode(true));
  let key_rolling = setInterval(roll_fn, roll_time.value);

  /* //keyword rolling */
  const keyword_wrap = document.querySelector('.keyword_wrap.search_area');
  const roll_last = keyword_wrap.querySelector('ol').lastChild;
  const keyword_act = () => {

    keyword_wrap.classList.toggle('active');
    if (keyword_wrap.classList.contains('active')) {
      roll_last.style.display='none';
      clearInterval(key_rolling);
      roll_idx.value = 0;
      keyword_wrap.querySelector('ol').style.cssText='';
    } else {
      roll_last.style.display='';
      key_rolling = setInterval(roll_fn, roll_time.value);
    }
  };

  keyword_wrap.addEventListener('click', keyword_act);
});
</script>
<style lang="scss" scoped>
section {
  padding:3rem 2.1rem;

  & + section {
    border-top: .5rem solid #f5f5f5;
  }

  .sub_title_wrap {
    margin-top: 0;
  }
}
.keyword {
  width:100%;
  padding:0;
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
    .keyword_list {
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
                  background: url('~/assets/mo_images/common/icon_split.png') no-repeat -1.5rem -13rem;
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
      .keyword_list {
        width:auto;
        height:24.1rem;
        padding:3rem 2rem;
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
  position:relative;
}

.list_wrap {
  position:relative;
}

.event_wrap {
  position:relative;
  .swiper {
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
      gap:2rem;
      .thumb{
        height: 10.6rem;
      }
    }
  }
}

.swiper_wrap {
  margin:0 -2.1rem;
  .swiper{
    padding:0 2.1rem;
  }
  .swiper-slide {
    width:14rem;

    .goods_item {
      width:14rem;
    }
  }
}

.modal_wrap {
  &.modal_sort {
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
                  width:1.6rem;
                  height:1.6rem;
                  background-image: url('~/assets/mo_images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 25rem;
                  background-position: -8.05rem -7rem;
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
}
</style>
