<template>
  <div class="search_wrap">
    <Inputs _type="text" _placeholder="궁금하신 내용을 입력해주세요" />
    <Icons class="btn_search" txt="검색" />
  </div>

  <!-- FAQ 슬라이드 탭 -->
  <div class="slide_wrap">
    <ul>
      <li class="active"><button>TOP10</button></li>
      <li><button>제품관련</button></li>
      <li><button>배송관련</button></li>
      <li><button>환불/반품/교환관련</button></li>
      <li><button>주문/결제관련</button></li>
      <li><button>이벤트/쿠폰/포인트</button></li>
      <li><button>사이트이용/기타</button></li>
      <li><button>회원가입/정보변경</button></li>
    </ul>
  </div>
  <!-- //FAQ 슬라이드 탭 -->

  <div class="faq_wrap">
    <ul>
      <li v-for="item in faq_data" :key="item">
        <button type="button" @click="accordion_tab">
          <span>{{ item.tit }}</span>
        </button>
        <div class="faq_cont">
          <h4>답변</h4>
          <p>{{ item.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
definePageMeta({
  layout:'mo-sub'
});

const faq_data = [
  {
    tit: '주문건에 대해 결제 금액 영수증을 출력하고 싶어요.',
    text: '공식 온라인몰 주문건에 대한 문의주신 결제 금액 영수증 출력은 [마이페이지 > 주문/배송현황 > 증빙서류 발급] 을 통해 영수증 출력 가능합니다.\n(PC접속을 통해서만 가능하며, 이니스프리 APP을 통해서는 서비스 이용 불가한 점 양해 부탁드립니다.)'
  },
  {
    tit: '오프라인 매장 구매 내용을 확인하고 싶어요.',
    text: '공식 온라인몰 주문건에 대한 문의주신 결제 금액 영수증 출력은 [마이페이지 > 주문/배송현황 > 증빙서류 발급] 을 통해 영수증 출력 가능합니다.\n(PC접속을 통해서만 가능하며, 이니스프리 APP을 통해서는 서비스 이용 불가한 점 양해 부탁드립니다.)'
  },
];

const accordion_tab = (e) => {
  const tg = e.target.closest('li');
  const list = document.querySelectorAll('.faq_wrap ul li');

  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove('active');
  }

  tg.classList.add('active');
};

</script>
<style lang="scss" scoped>
  .search_wrap {
      height:4rem;
      margin:2rem 2.1rem 1rem;
      border:0.1rem solid #EEE;
      overflow:hidden;
      display:flex;
      align-items:center;
      flex:1;
  
      :deep(.input_wrap) {
          .input {
            i, input {
                font-size:1.3rem;
            }
            i {
              left:1.5rem;
            }
            input {
                height:4rem;
                padding-left:1.5rem;
                padding-right:0.5rem;
                border:0;
            }
          }
      }
      .btn_search {
          width:2.4rem;
          height:2.4rem;
          margin-right:0.8rem;
          background-color:transparent;
          background-position:0 -4rem;
      }
      .back {
          margin-right:1rem;
      }
      .barcode, .cart {
          margin-left:1rem;
          display:none;
      }
  }

  .slide_wrap {
    height:5rem;
    border-bottom:0.1rem solid #F5F5F5;

    ul {
      height:100%;
      padding:0 2.1rem;
      display:flex;
      gap:2.6rem;
      overflow-y:hidden;
      overflow-x:scroll;

      &::-webkit-scrollbar {
        display:none;
      }

      li {
        display:flex;
        flex-direction:column;
        align-items:center;

        button {
          flex:1;
          color:#999;
          font-size:1.4rem;
          line-height:1.8rem;
          letter-spacing:-0.01em;
          white-space:nowrap;
        }

        &.active {
          button {
            color:#000;
            font-weight:700;
            border-bottom:0.2rem solid #000;
          }
        }
      }
    }
  }

  .faq_wrap {
    ul {
      li {
        border-bottom:0.1rem solid #F5F5F5;

        >button {
          width:100%;
          padding:3rem 2.1rem;
          color:#222;
          font-size:1.4rem;
          line-height:1.8rem;
          display:flex;
          align-items:center;
          justify-content:space-between;

          span {
            overflow: hidden;
            white-space: normal;
            text-overflow: ellipsis;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }

          &:after {
            content:'';
            width:2.4rem;
            height:2.4rem;
            background:url('~/assets/mo_images/common/icon_split.png') no-repeat -0.5rem -21.4rem;
            background-size:25rem auto;
            display:block;
            transition:all 0.2s;
          }
        }

        .faq_cont {
          padding:3rem 2.6rem;
          background:#F5F5F5;
          overflow:hidden;

          h4 {
            margin-bottom:1rem;
            color:#333;
            font-size:1.3rem;
            font-weight:600;
            line-height:1.6rem;
            letter-spacing:-0.01em;
          }

          p {
            color:#666;
            font-size:1.3rem;
            line-height:2rem;
          }
        }

        &.active {
          >button {
            &:after {
              transform:rotate(-180deg);
            }
          }
        }
      }
    }
  }
</style>