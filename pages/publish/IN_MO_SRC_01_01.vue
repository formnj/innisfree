<template>
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

  <div class="title_wrap">
    <h2>
      <span class="pdt_count">제품 <strong>23</strong></span>
    </h2>
    <div class="pdtSortTab_wrap">
      <div class="sortTab">
        <button class="btn_dropdown" @click="modal.open('sample_modal_sort', 'bottom')">랭킹순</button>
      </div>
      <button @click="modal.open('sample_modal_search', 'bottom')">필터</button>
    </div>
  </div>

  <div class="inner">
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
    <div class="event_wrap">
      <h3>
        <span>연관이벤트 <strong>5</strong></span>
      </h3>
      <swiper
        :slides-per-view="'auto'"
        :loop="true"
        :pagination="{
          type: 'bullets'
        }"
        :centered-slides="true"
        :slides-offset-before="1"
      >
        <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx">
          <div class="item">
            <div class="img">
              <strong>체험리뷰</strong>
              <img :src="item.img">
            </div>
            <div class="text">
              <p>
                2024 새해<br>
                콜라겐크림 기획전<br>
                럭키그린박스 + 럭키드로우
              </p>
              <span>23.2.20(월)~23.2.23(수)</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
    <div class="pdt_wrap">
      <h3>
        <button><strong>주소희</strong>님 이 제품은 어때요?</button>
      </h3>
      <ul class="pdt_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </div>

  <div id="sample_modal_sort" class="modal_wrap">
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

  <div class="modal_wrap" id="sample_modal_search">
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
</template>
<script setup>
import { sample_goods, sampleSlide } from '~/test/data/dummyData'
import { modal, setFilter } from '~/assets/js/common-ui'

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

definePageMeta({
  layout: 'mo-category'
});

onMounted(() => {
  /* keyword rolling */
  const keyword_pos = document.querySelector('.search_area ol'),
  roll_size = keyword_pos.querySelectorAll('li'),
  roll_timer = 3000;

  let i = 1;
  const clone_roll = roll_size[0];

  keyword_pos.insertAdjacentHTML('beforeend', '<li>'+clone_roll.innerHTML+'</li>');

  const roll_fn = () => {
      keyword_pos.style.cssText='transform:translateY(-'+(i*16)+'px); transition:all 0.35s ease-in;'
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
});
</script>
<style lang="scss" scoped>
.keyword_wrap {
  position:relative;
  h2 {
    padding:17px 21px;
    margin:0 -21px;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    button {
      width:100%;
      font-size:16px;
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
        width:14px;
        height:7px;
        margin-left:auto;
        background:url("/_nuxt/assets/images/common/PC-icon_split.png") no-repeat -110px -64px;
        background-size:250px auto;
        display:inline-block;
      }
    }
  }
  .keyword {
    width:50%;
    height:16px;
    overflow:hidden;
    position:absolute;
    top:19px;
    left:50%;
    transform:translateX(-45%);
    ol {
      li {
        a {
          display:flex;
          align-items:center;
          gap:27px;
          em {
            min-width:16px;
            font-size:13px;
            font-weight:600;
            line-height:16px;
            text-align:center;
            position:relative;
            &:after {
                content:'';
                width:8px;
                height:8px;
                background: url('/_nuxt/assets/images/common/MO-icon_split.png') no-repeat -10px -130px;
                background-size:250px auto;
                position:absolute;
                top:50%;
                right:-15px;
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
                      background-position:0 -130px;
                  }
              }
          }
          &.down {
              em{
                  &:after {
                      background-position:-20px -130px;
                  }
              }
          }
          &.new {
              em{
                  &:after {
                      background-position:-30px -130px;
                  }
              }
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
      height:241px;
      padding:30px 20px;
      margin:0 -20px;
      border-bottom:1px solid #eee;
      overflow:auto;
      position:unset;
      transform:translateX(0);
      ol {
        width:100%;
        height:100%;
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        gap:25px 0;
        li {
          width:50%;
        }
      }
    }
  }
}
.title_wrap {
  padding:20px 0;
  h2 {
    .pdt_count {
      padding:0;
      margin:0;
      color:#000;
      font-size:14px;
      font-weight:700;
      background:none;
      display:flex;
      align-items:center;
      gap:5px;
      strong {
        color:#666;
        font-size:12px;
        font-weight:400;
      }
    }
  }
  .pdtSortTab_wrap {
    margin-top:0;
    gap:20px;
    .sortTab {
      .btn_dropdown {
        padding:0;
        font-size:12px;
        font-family:inherit;
        &:after {
          margin-left:5px;
        }
      }
    }
    >button {
      padding:0;
      font-size:12px;
      font-family:inherit;
      &:before {
        content:none;
      }
    }
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
  }
  & ~ .list_wrap {
    &:after {
      opacity:0.5;
    }
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

.event_wrap {
  padding:30px 0;
  margin:0 0px 30px;
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
  h3 {
    margin-bottom:20px;
    span {
      font-size:16px;
      font-weight:600;
      strong {
        color:#00BC70;
      }
    }
  }
  .swiper-container {
    padding-bottom:20px;
    ::v-deep .swiper-pagination {
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
  .item {
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:20px;
    .img {
      width:16rem;
      position:relative;
      strong {
        padding:2px 5px;
        color:#fff;
        font-size:10px;
        font-weight:300;
        background:#000;
        position:absolute;
        top:0;
        left:0;
      }
      img {
        width:100%;
        height:100%;
      }
    }
    .text {
      p {
        padding-bottom:16px;
        font-size:14px;
        font-weight:600;
        line-height:18px;
        letter-spacing:-0.1px;
      }
      span {
        color:#999;
        font-size:12px;
        font-weight:300;
        line-height:16px;
      }
    }
  }
}

.pdt_wrap {
  padding-top:30px;
  h3 {
    margin-bottom:20px;
    button {
      width:100%;
      font-size:16px;
      font-weight:600;
      font-family:inherit;
      display:flex;
      align-items:center;
      strong {
        color: #00BC70;
      }
      &:after {
        content: "";
        width:14px;
        height:7px;
        margin-left:auto;
        background:url(/_nuxt/assets/images/common/PC-icon_split.png) no-repeat -111px -65px;
        background-size:250px auto;
        display:inline-block;
        transform:rotate(-90deg);
      }
    }
  }
  .pdt_list {
    margin-right:-20px;
    overflow-x:scroll;
    display:flex;
    gap:3px;
    li {
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
  &#sample_modal_sort {
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
                  background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
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
  &#sample_modal_search {
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

@import "~/assets/scss/_mo_mixin.scss";
@import "~/assets/scss/mobile.scss";
</style>
