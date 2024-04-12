<template>
  <div class="staff_wrap">
    <section class="staffVisual">
      <span>임직원 전용</span>
      <div>
        이니스프리 임직원<br />
        AP임직원 전용 특가샵
        <span>구매 전 안내사항을 확인해주세요</span>
      </div>
      <Button txt="구매 안내사항" class="btn_notify" />
    </section>
  </div>

  <div class="title_wrap">
    <h2>
      <span class="pdt_count">총 <strong>32</strong>건</span>
    </h2>
    <div class="pdtSortTab_wrap">
      <div class="sortTab">
        <button
          class="btn_dropdown"
          @click="modal.open('sample_modal_sort', 'bottom')">
          추천순
        </button>
      </div>
      <button @click="modal.open('sample_modal_search', 'bottom')">
        상세검색
      </button>
    </div>
  </div>

  <div class="list_wrap">
    <ul class="goods_list">
      <li v-for="(item, idx) in sample_goods" :key="idx">
        <GoodsItem :item="item" :link="item.link" />
      </li>
    </ul>
  </div>
  <div class="modal_wrap" id="sample_modal_sort">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div>
          <ul>
            <li class="active"><a href="#none" class="active">추천순</a></li>
            <li><a href="#none">신제품순</a></li>
            <li><a href="#none">판매량순</a></li>
            <li><a href="#none">낮은 가격순</a></li>
            <li><a href="#none">높은 가격순</a></li>
            <li><a href="#none">리뷰순</a></li>
            <li><a href="#none">판매금액순</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="sample_modal_search">
    <div class="modal_container">
      <div class="modal_header">
        <h2>상세검색</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>Sample Modal</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big btn_type_01" txt="초기화" />
        <Button class="btn_big btn_type_02" txt="검색" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'mo-category'
})

onMounted(() => {})

const sample_goods = [
  {
    img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900',
    overflip:
      'https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900',
    cate: 'BEST',
    name: '히알루론 수분 선크림 SPF 50+ PA++++',
    price: '11,000',
    sale: '~50%',
    cost: '26,000',
    status: 'sold_out',
    sticker: [
      { txt: 'type01', type: 'type01' },
      { txt: 'type02', type: 'type02' },
      { txt: 'type03', type: 'type03' },
      { txt: 'type04', type: 'type04' }
    ],
    hash: ['#스킨팩', '#화장솜', '#순면화장솜']
  },
  {
    img: '/_nuxt/assets/images/sam/sam_goods_list_02.jpg',
    overflip: '/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg',
    cate: 'NEW',
    name: '그린티 씨드 히알루론산 세렘 80ml',
    price: '44,800',
    sale: '~20%',
    cost: '56,000',
    status: 'coming_soon',
    sticker: [
      { txt: '1+1', type: 'type02' },
      { txt: '뷰티포인트전용', type: 'type01' },
      { txt: '첫구매전용', type: 'type01' }
    ]
  },
  {
    img: '/_nuxt/assets/images/sam/sam_goods_list_02.jpg',
    overflip: '/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg',
    cate: 'NEW',
    name: '그린티 씨드 히알루론산 세렘 80ml',
    price: '44,800',
    sale: '~20%',
    cost: '56,000',
    status: 'coming_soon',
    sticker: [
      { txt: '1+1', type: 'type02' },
      { txt: '뷰티포인트전용', type: 'type01' },
      { txt: '첫구매전용', type: 'type01' }
    ]
  },
  {
    img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900',
    overflip:
      'https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900',
    cate: 'BEST',
    name: '블랙티 유스 인핸싱 앰플 50ml',
    price: '11,000',
    sale: '~50%',
    cost: '26,000',
    status: 'sold_out',
    hash: ['#스킨팩', '#화장솜', '#순면화장솜']
  },
  {
    img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900',
    overflip:
      'https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900',
    cate: 'BEST',
    name: '블랙티 유스 인핸싱 앰플 50ml',
    price: '11,000',
    sale: '~50%',
    cost: '26,000',
    status: 'sold_out',
    hash: ['#스킨팩', '#화장솜', '#순면화장솜']
  },
  {
    img: '/_nuxt/assets/images/sam/sam_goods_list_04.jpg',
    overflip:
      'https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900',
    cate: 'BEST',
    name: '블랙티 유스 인핸싱 앰플 50ml',
    price: '11,000',
    sale: '~50%',
    cost: '26,000',
    hash: ['#스킨팩', '#화장솜', '#순면화장솜']
  },
  {
    img: '/_nuxt/assets/images/sam/sam_goods_list_04.jpg'
  },
  {
    img: '/_nuxt/assets/images/sam/sam_goods_list_04.jpg'
  },
  {
    img: '/_nuxt/assets/images/sam/sam_goods_list_04.jpg'
  },
  {
    img: '/_nuxt/assets/images/sam/sam_goods_list_04.jpg'
  },
  {
    img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900'
  },
  {
    img: 'https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900'
  }
]
/* //component sample data */

const modal = {
  open: (_target, _type) => {
    document.getElementById(_target).classList.add('active', _type)
    const body = document.querySelector('body')
    const pageY = document.body.scrollTop || document.documentElement.scrollTop

    if (!body.hasAttribute('scrollY')) {
      body.setAttribute('scrollY', String(pageY))
      body.classList.add('lockbody')
    }
    body.addEventListener('touchmove', modal.lockScrollHandle, {
      passive: false
    })
  },
  close: (_target) => {
    event.target.closest('.modal_wrap').setAttribute('class', 'modal_wrap')
    const body = document.querySelector('body')

    if (body.hasAttribute('scrollY')) {
      body.classList.remove('lockbody')
      body.scrollTop = Number(body.getAttribute('scrollY'))
      body.removeAttribute('scrollY')
    }

    body.removeEventListener('touchmove', modal.lockScrollHandle, {
      passive: true
    })
  },
  lockScrollHandle(event) {
    const e = event || window.event

    // 멀티 터치는 터치 되게 한다
    if (e.touches.length > 1) return

    // event 초기화 속성이 있음 초기화
    e.preventDefault()
  }
}
</script>
<style lang="scss" scoped>
.staff_wrap {
  margin: 0 -20px;
  .staffVisual {
    height: 25em;
    padding:4em 0 0 2.1em;
    background-image: url('/_nuxt/assets/mo_images/common/bg_staff_visual.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    >span {
      padding: 0.2em 0.5em;
      color:#fff;
      font-weight: 400;
      font-size: 1em;
      line-height: 1.4em;
      letter-spacing: 0;
      background:#000;
      display: inline-block;
    }
    >div {
      margin-top: 0.7em;
      font-weight: 600;
      font-size: 2em;
      line-height: 1.3em;
      color: #000;
      span {
        display: block;
        margin-top: 0.5em;
        font-weight: 500;
        font-size: 0.6em;
        line-height: 1.2em;
        color: #888;
      }
    }
    >button {
      height:auto;
      margin-top:2.3em;
      line-height: 1.6em;
      letter-spacing: -0.01em;
      background:none;
      display: flex;
      align-items: center;
      ::v-deep em {
        padding:0;
        color: #000;
        font-weight: 500;
        font-size: 1em;
        font-family:'Pretendard';
      }
      &:before {
        display: inline-block;
        content: "";
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.3rem;
        background: url('/_nuxt/assets/mo_images/common/ico_notify.png') no-repeat right center;
        background-size: 1.6rem 1.6rem;
      }
    }
  }
}

.title_wrap {
  padding: 35px 0 25px;
  position: relative;
  z-index: 1;
  display: flex;
  h2 {
    font-size: 0;
    .pdt_count {
      margin-left: 0;
      padding: 3px 6px;
      color: #000;
      font-size: 13px;
      white-space: nowrap;
      border-radius: 999px;
      background: none;
      position: unset;
      strong {
        color: #2faf63;
      }
    }
  }
  .pdtSortTab_wrap {
    margin-left: auto;
    position: relative;
    display: flex;
    align-items: center;
    button {
      padding: 0 10px;
      font-size: 13px;
      font-weight: 600;
      font-family:'Pretendard';
      line-height: 1.43em;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;
      &::after {
        content: '';
        width: 16px;
        height: 16px;
        margin-left: 5px;
        display: inline-block;
      }
    }
  }
}

.sortTab {
  position: relative;
  > button::after {
    background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
    background-size: 250px;
    background-repeat: no-repeat;
    background-position: -110px -60px;
  }
  & ~ button {
    position: relative;
    &::after {
      background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
      background-size: 250px;
      background-repeat: no-repeat;
      background-position: -130px -60px;
    }
  }
  ul {
    width: 170px;
    height: 0px;
    padding: 10px 0;
    background: #fff;
    position: absolute;
    left: -70px;
    top: 45px;
    z-index: 1;
    overflow: hidden;
    transition: all 0.2s;
    li {
      padding: 10px 15px;
      a {
        color: #888;
        font-size: 14px;
        transition: all 0.1s;
        &.active {
          color: #00bc70;
        }
      }
    }
  }
}

.goods_list {
  margin-top: -40px;
  margin-left: -20px;
  > li {
    width: 50%;
    padding-top: 40px;
    padding-left: 20px;
  }
}

.modal_wrap {
  .modal_container {
    z-index: 100;
  }
  &#sample_modal_sort {
    z-index: 100;
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
      .modal_footer {
      }
    }
  }
  &#sample_modal_search {
    z-index: 100;
    .modal_container {
      .modal_header {
      }
      .modal_contnet {
      }
      .modal_footer {
      }
    }
  }
}

@media (max-width: 639px) {
  .staff_wrap {
    font-size:13.76px;
  }
}
@media (max-width: 519px) {
  .staff_wrap {
    font-size:11.04px;
  }
}
@media (max-width: 413px) {
  .staff_wrap {
    font-size:10.96px;
  }
}
@media (max-width: 410px) {
  .staff_wrap {
    font-size:10px;
  }
}
@media (max-width: 374px) {
  .staff_wrap {
    font-size:10px;
  }
}
@media (max-width: 359px) {
  .staff_wrap {
    font-size:8.5px;
  }
}
</style>