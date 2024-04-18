<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <div class="prd_tit">
      <h2>임직원샵
          <span class="pdt_count"><strong>32</strong></span>
      </h2>
      <span>이니스프리 및 AP 임직원 전용 이니스프리 제품 특가샵입니다. 구매 전 안내사항을 확인해주세요.</span>
      <Button txt="구매 안내사항" class="btn_min_outline" @click="modal.open('modal_staff', 'full');" />
    </div>
    <div class="pdtSortTab_wrap">
      <div class="sortTab">
        <button class="btn_dropdown" @click="Drop_Down()" >추천순</button>
        <ul>
          <li><a href="#none" class="active">추천순</a></li>
          <li><a href="#none">신제품순</a></li>
          <li><a href="#none">판매량순</a></li>
          <li><a href="#none">낮은 가격순</a></li>
          <li><a href="#none">높은 가격순</a></li>
          <li><a href="#none">리뷰순</a></li>
          <li><a href="#none">판매금액순</a></li>
        </ul>
      </div>
      <button @click="modal.open('sample_modal', 'detailSearch');">상세검색</button>
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
    <div class="paging">
        <div>
            <a href="#none" class="first">처음으로</a>
            <a href="#none">1</a>
            <a href="#none">2</a>
            <a href="#none" class="active">3</a>
            <a href="#none">4</a>
            <a href="#none">5</a>
            <a href="#none" class="last">마지막으로</a>
        </div>
    </div>
  </div>
  <div class="modal_wrap" id="sample_modal">
      <div class="modal_container">
          <div class="modal_header">
              <h2>상세검색</h2>
              <button class="btn_close" @click="modal.close(this);">닫기</button>
          </div>
          <div class="modal_content">
            <dl class="sortList">
              <dt>고민별</dt>
              <dd>
                <ul>
                  <li>
                    <label for="skin1" class="inputChk">
                      <input type="checkbox" alt="주름/탄력"><span @click="setFilter($event)">주름/탄력</span>
                    </label>
                  </li>
                  <li>
                    <label for="skin2" class="inputChk">
                      <input type="checkbox" alt="모공/피지/블랙헤드"><span @click="setFilter($event)">모공/피지/블랙헤드</span>
                    </label>
                  </li>
                  <li>
                    <label for="skin3" class="inputChk">
                      <input type="checkbox" alt="영양/토탈안티에이징"><span @click="setFilter($event)">영양/토탈안티에이징</span>
                    </label>
                  </li>
                  <li>
                    <label for="skin4" class="inputChk">
                      <input type="checkbox" alt="트러블/리페어"><span @click="setFilter($event)">트러블/리페어</span>
                    </label>
                  </li>
                  <li>
                    <label for="skin5" class="inputChk">
                      <input type="checkbox" alt="수분/보습/속건조"><span @click="setFilter($event)">수분/보습/속건조</span>
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
                    <label for="fnc1" class="inputChk">
                      <input type="checkbox" alt="미백"><span @click="setFilter($event)">미백</span>
                    </label>
                  </li>
                  <li>
                    <label for="fnc2" class="inputChk">
                      <input type="checkbox" alt="주름개선"><span @click="setFilter($event)">주름개선</span>
                    </label>
                  </li>
                  <li>
                    <label for="fnc3" class="inputChk">
                      <input type="checkbox" alt="자외선차단"><span @click="setFilter($event)">자외선차단</span>
                    </label>
                  </li>
                  <li>
                    <label for="fnc4" class="inputChk">
                      <input type="checkbox" alt="비건인증"><span @click="setFilter($event)">비건인증</span>
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
                    <label for="Benefit3" class="inputChk">
                      <input type="checkbox" alt="공병수거 가능"><span @click="setFilter($event)">공병수거 가능</span>
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
  <div id="modal_staff" class="modal_wrap">
      <div class="modal_container">
          <div class="modal_header">
              <h2>임직원샵 이용안내</h2>
              <button class="btn_close" @click="modal.close(this);">닫기</button>
          </div>
          <div class="modal_content">
            <div class="mdWarning">
              <h4>유의사항</h4>
              <strong>타 프로모션과 중복 적용 불가</strong>
              <ul class="list_num">
                <li>1 온•오프 통합 쿠폰 및 기타 할인 쿠폰 중복 적용이 불가합니다.</li>
                <li>2 구매 증정품 지급 시 본 결제 금액은 총 금액 합산에서 제외됩니다.</li>
              </ul>
              <strong>구입 수량 제한</strong>
              <ul class="list_num">
                <li>1 한정 수량으로 많은 고객님께 혜택을 드리기 위하여 수량 제한하는 점 양해 부탁드립니다</li>
                <li>2 동일 주소지로 여러 ID 분할 구입하시는 고객에 한하여 사전 연락 없이 취소될 수 있습니다</li>
              </ul>
              <strong>기타</strong>
              <ul class="list_num">
                <li>1 N+N 제품은 부분 반품이 불가합니다.</li>
                <li>2 교차 구매 여부는 프로모션에 따라 상이할 수 있습니다.(온라인 쇼핑몰에서는 해당 제품 페이지 옵션 내 제품 교체 구매 가능하며, 프로모션에 따라 교차 구매 여부는 오프라인과 상이할 수 있습니다.)</li>
                <li>3 온라인 쇼핑몰 및 오프라인 매장 재고에 따라 판매되는 종류가 다를 수 있습니다. </li>
                <li>4 준비된 수량 소진 시에는 사전 예고 없이 종료될 수 있습니다. </li>
                <li>5 당사 사정에 따라 사전 예고 없이 비슷한 혹은 더 나은 수준의 혜택으로 대체 변경 될 수 있습니다. </li>
                <li>6 행사 제외 매장 : 면세점, 제주하우스 등</li>
              </ul>
            </div>
            <div class="mdWarning">
              <h4>그 외 이용안내</h4>
              <ul class="list_dot">
                <li>이니스프리 임직원샵은 사내 임직원 전용 복지몰로서 비정상 유통 행위시(유출시) 사규에 의해 징계를 받을 수 있습니다. </li>
                <li>비정상 유통이 발생하지 않도록 임직원 여러분의 많은 협조 당부 드립니다.</li>
                <li>임직원샵 메뉴에서 판매되는 특가 상품은 제조년월이 1년 이상 경과한 구형 제품일 수 있으며, 60~80% 할인된 가격으로 판매합니다.</li>
                <li>임직원샵 메뉴에 등록되지 않은 이니스프리의 일부 품목에 대해서는 임직원 40% 할인이 적용됩니다.</li>
                <li>P포인트 추가 할인은 적용할 수 없습니다. 임직원 여러분들의 양해 부탁드립니다.</li>
                <li>임직원샵 메뉴에 있는 제품은 매월 40만원 한도 내에서 구매할 수 있습니다. </li>
                <li>주문 건 중 임직원샵과 일반 상품을 함께 추가하시는 경우 임직원샵 상품은 별도 배송됨을 안내드립니다.(합배송은 불가능합니다.)</li>
              </ul>
            </div>
          </div>
      </div>
      <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>
<script setup>
import {
  sample_goods
} from '~/test/data/dummyData'

definePageMeta({
	layout: 'pc-category'
});

const props = defineProps({
    layoutType: {
      type:String,
      default:'default'
    }
});
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

const Drop_Down = () => {
    let selet = document.querySelector('.pdtSortTab_wrap ul');
    selet.classList.toggle('active')
    if(selet.classList.contains('active')){
        console.log(selet.clientHeight)
        selet.style.height = '270px';
        selet.style.border="1px solid #888";

        // console.log(selet.clientHeight) + 'px'
    }else {
        selet.style.border = 'none'
        selet.style.height = '0px'
    }
}

const setFilter = (event) =>{
  const target = event.currentTarget;
  target.classList.toggle('active')
}
</script>

<style lang="scss" scoped>
.prd_tit {
  h2 {
    display:inline-block;
  }
  > span {
    width: 100%;
    margin-top: 10px;
    word-wrap: break-word;
    word-break: keep-all;
    color: #999999;
    font-size: 12px;
    display: block;
  }
  >::v-deep button {
    margin-top:10px;
    em {
      color:#000;
      font-size:12px;
      font-weight:600;
      font-family:'Pretendard';
    }
  }
}

.pdtSortTab_wrap {
  margin-top:16px;
  margin-left:auto;
  position:relative;
  display:flex;
  align-items:center;
  button {
    padding:0 20px;
    font-size:14px;
    font-weight:600;
    line-height: 1.43em;
    letter-spacing: -0.01em;
    display:flex;
    align-items:center;
    &::after {
        content:'';
        width:16px;
        height:16px;
        margin-left:10px;
        display:inline-block;
    }
  }
}

.sortTab {
    position:relative;
    > button::after {
        background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
        background-size:250px;
        background-repeat:no-repeat;
        background-position:-110px -60px;
    }
    & ~ button {
        position:relative;
        &::after {
            background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
            background-size:250px;
            background-repeat:no-repeat;
            background-position:-130px -60px;
        }
        &::before {
            content:'';
            width:1px;
            height:14px;
            background:#EEEEEE;
            position:absolute;
            top:50%;
            left:0;
            display:inline-block;
            transform:translateY(-50%);
        }
    }
    ul {
        width:170px;
        height:0px;
        padding:10px 0;
        background:#fff;
        position:absolute;
        left:-70px;
        top:45px;
        z-index:1;
        overflow:hidden;
        transition:all 0.2s;
        li {
            padding:10px 15px;
            a {
                color:#888;
                font-size:14px;
                transition:all 0.1s;
                &.active {
                    color:#00BC70;
                }
            }
        }
    }
}

.goods_list {
  margin-left:-20px;
  > li {
      width:25%;
      padding-left:20px;
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
          cursor:pointer;
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

.modal_wrap#sample_modal {
  .modal_content {
    padding-bottom:0;
  }
  .modal_footer {
    padding-top: 0;
  }
}

.modal_wrap#modal_staff {
  .modal_container {
    width:764px;
    max-height:500px;
    .modal_header {
      h2 {
        font-size:20px;
        font-weight:600;
      }
    }
    .modal_content {
      .mdWarning {
        &+.mdWarning {
          margin-top:30px;
        }
        h4 {
          margin-bottom:17px;
          font-size:18px;
          font-weight:600;
          color:#000;
        }
        strong {
          margin:12px 0;
          font-size:14px;
          font-weight:600;
          color:#666;
          display:block;
        }
        .list_num {
          margin:10px 0px;
          li {
            margin-top:7px;
            padding-left:12px;
            color:#888;
            font-size:12px;
            text-indent:-14px;
            &:first-child {
              margin-top:0;
            }
          }
        }
        .list_dot {
          li {
            margin-top:5px;
            padding-left:7px;
            font-size:14px;
            color:#666;
            position:relative;
            &:before {
              content:'';
              width:2px;
              height:2px;
              background-color:#666;
              display:block;
              position:absolute;
              top:8px;
              left:0;
            }
          }
        }
      }
    }
  }
}
</style>
