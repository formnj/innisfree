<template>
  <div class="title_wrap">
    <div>
      <h2>
        <strong class="badge count">총 <em>32</em>건</strong>
      </h2>
    </div>

    <div class="pdtSortTab_wrap">
        <div class="sortTab">
            <button class="btn_dropdown" @click="modal.open('modal_sort', 'bottom');" >추천순</button>
        </div>
        <button @click="modal.open('sample_modal_search', 'bottom');">필터</button>
    </div>
  </div>
  <div class="list_wrap">
      <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
              <GoodsItem :item="item" :link="item.link" />
          </li>
      </ul>
  </div>
  <div class="modal_wrap" id="modal_sort">
      <div class="modal_container">
          <div class="modal_header">
              <button class="btn_close" @click="modal.close(this);"></button>
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
      <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" id="sample_modal_search">
      <div class="modal_container">
          <div class="modal_header">
              <h2>상세검색</h2>
              <button class="btn_close" @click="modal.close(this);">닫기</button>
          </div>
          <div class="modal_content">
              <dl class="sortList">
                <dt>혜택별</dt>
                <dd>
                  <ul>
                    <li>
                      <label for="benefit1" class="inputChk">
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">증정</span>
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
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">트러블/리페어</span>
                      </label>
                    </li>
                    <li>
                      <label for="benefit1" class="inputChk">
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">영양/토탈안티에이징</span>
                      </label>
                    </li>
                    <li>
                      <label for="benefit1" class="inputChk">
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">잡티/피부톤</span>
                      </label>
                    </li>
                    <li>
                      <label for="benefit1" class="inputChk">
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">주름/탄력</span>
                      </label>
                    </li>
                    <li>
                      <label for="benefit1" class="inputChk">
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">수분/보습/속건조</span>
                      </label>
                    </li>
                    <li>
                      <label for="benefit1" class="inputChk">
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">각질/피부결</span>
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
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">미백</span>
                      </label>
                    </li>
                    <li>
                      <label for="benefit1" class="inputChk">
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">주름개선</span>
                      </label>
                    </li>
                    <li>
                      <label for="benefit1" class="inputChk">
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">비건인증</span>
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
                        <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">공병수거 가능</span>
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
definePageMeta({
	layout:'mo-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
    layoutType: {
      type:String,

    }
});


onMounted(()=>{
})

const sample_goods = [
    {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'BEST 레티놀 시카 앰플 [대용량] 50mL + 콜라겐 펩타이드 탄력 크림 50mL',
        price:'72,740', sale:'24%', cost:'96,000',
        sticker:[
          {txt:'5+5', type:'type02'},
          {txt:'뷰티포인트 전용', type:'type01'}
        ]
    }, {
        img:("/_nuxt/public/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/public/images/sam/sam_goods_list_02-1.jpg"),
        cate:'NEW',
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        status:'coming_soon',
        sticker:[
            {txt:'1+1', type:'type02'},
            {txt:'뷰티포인트전용', type:'type01'},
            {txt:'첫구매전용', type:'type01'}
        ]
    }, {
        img:("/_nuxt/public/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/public/images/sam/sam_goods_list_02-1.jpg"),
        cate:'NEW',
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        status:'coming_soon',
        sticker:[
            {txt:'1+1', type:'type02'},
            {txt:'뷰티포인트전용', type:'type01'},
            {txt:'첫구매전용', type:'type01'}
        ]
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
        hash:['#스킨팩','#화장솜','#순면화장솜']
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
        hash:['#스킨팩','#화장솜','#순면화장솜']
    },
    {
        img:("/_nuxt/public/images/sam/sam_goods_list_04.jpg"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        hash:['#스킨팩','#화장솜','#순면화장솜']
    },
    {
        img:("/_nuxt/public/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/public/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/public/images/sam/sam_goods_list_04.jpg"),
    },
    {
        img:("/_nuxt/public/images/sam/sam_goods_list_04.jpg"),
    },{
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
    },
    {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
    },
]
/* //component sample data */

const modal = {
    open: (_target, _type) => {
        document.getElementById(_target).classList.add('active', _type);
        const body = document.querySelector("body");
        const pageY = document.body.scrollTop || document.documentElement.scrollTop;

        if (!body.hasAttribute("scrollY")) {
            body.setAttribute("scrollY", String(pageY));
            body.classList.add("lockbody");
        }
        body.addEventListener("touchmove", modal.lockScrollHandle, { passive: false });
    }, close: (_target) => {
        event.target.closest('.modal_wrap').setAttribute('class','modal_wrap');
        const body = document.querySelector("body");

        if (body.hasAttribute("scrollY")) {
            body.classList.remove("lockbody");
            body.scrollTop = Number(body.getAttribute("scrollY"));
            body.removeAttribute("scrollY");
        }

        body.removeEventListener("touchmove", modal.lockScrollHandle, { passive: true });
    }, lockScrollHandle(event) {
        const e = event || window.event;

        // 멀티 터치는 터치 되게 한다
        if (e.touches.length > 1) return;

        // event 초기화 속성이 있음 초기화
        e.preventDefault();
    }
}
const setFilter = (event) =>{
  const target = event.currentTarget;
  target.classList.toggle('active')
}
</script>

<style lang="scss" scoped>
.goods_list {
    margin:0;
    gap:4rem 0.3rem;
    justify-content:space-between;
    > li {
        width:16.5rem;
        padding:0;
        :deep(.goods_item) {
          .img_wrap {
            .btnIconBox {
              left:0;
            }
          }
        }
    }
}

.modal_wrap.bottom {
  &#sample_modal_search {
    .modal_container {
      .modal_content {
        padding:30px !important;
        .sortList {
          margin-bottom:20px;
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
      }
    }
  }
    .modal_container {
        z-index:100;
    }
}

#modal_sort {
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
        padding: 0 0 34px !important;
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






@import "~/assets/scss/_mo_mixin.scss";

@include mo_749 {
}

</style>
