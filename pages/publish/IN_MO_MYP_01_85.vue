<template>
<div class="my_shop_wrap">
  <div class="info">
    <div class="title">
      <h3>마이샵이란?</h3>
      <p>내가 선택하는 ‘나의 단골매장’으로<br>내 단골 매장 서비스 소식을 받아보실 수 있습니다.</p>
      <Button class="btn_mid confirm" txt="마이샵 등록하기" />
    </div>
    <div class="my_shop"> <!-- 폐점일 경우 closed 클래스 추가-->
      <dl>
        <dt>등록된 마이샵
          <button type="button" class="btn_dot_menu" @click="modal.open('modal_my_shop_menu','layer');modalPositioning();">마이샵 메뉴</button>
        </dt>
        <dd class="no_shop">등록된 매장이 없습니다.</dd><!-- 등록된 매장이 없을 경우 -->
        <!-- 등록 매장-->
        <dd>
          <em>이마트_IF용산점</em>
          <p>[10500] 경기도 고양시 덕양구 백양로 79 최대한줄로 표시됩니다.</p>
        </dd>
        <!-- //등록 매장-->
      </dl>
    </div>
    <ul class="bul_list dash">
      <li>마이샵은 등록일 기준으로 1개월 이후 변경이 가능합니다.<br>1개월 이내 변경을 원하시면 고객센터 (080-380-0114)로 문의해주세요.</li>
      <li>폐점/폐쇄점 매장의 경우 [삭제] 버튼 클릭 시 삭제되며, 삭제 후 마이샵 재등록이 가능합니다.</li>
    </ul>
  </div>

  <section>
    <h3>매장 안내</h3>
    <div class="multi_form">
       <Selectbox
        :options="[
          { val: 'op1', name: 'op', txt: '광역시/도' },
          { val: 'op2', name: 'op', txt: '강원' },
          { val: 'op3', name: 'op', txt: '경기' },
          { val: 'op4', name: 'op', txt: '경남' },
        ]" />
       <Selectbox
        :options="[
          { val: 'op1', name: 'op2', txt: '시/군/구' },
          { val: 'op2', name: 'op2', txt: '강릉시' },
          { val: 'op3', name: 'op2', txt: '고성군' },
          { val: 'op4', name: 'op2', txt: '동해시' },
        ]" />
    </div>

    <div class="multi_form">
      <Inputs _type="text" _placeholder="매장명" />
      <Button class="btn_outline" txt="검색" />
    </div>
  </section>

  <div class="shop_list">
    <div class="list_header">총 <em>337개</em> 매장</div>

    <ul>
      <li v-for="(item, idx) in shop_list" :key="idx">
        <ShopInfo :item="item" />
      </li>
    </ul>
  </div>
</div>

 <!-- 마이샵 메뉴 -->
 <div id="modal_my_shop_menu" class="modal_wrap">
    <div class="modal_container">
      <ul class="dot_menu">
        <li><button type="button" class="btn_single_menu">변경</button></li>
        <li><button type="button" class="btn_single_menu">삭제</button></li>
      </ul>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //마이샵 메뉴 -->
</template>

<script setup>
import { modal } from '~/assets/js/common-ui.js'
import { shop_list } from '~/test/data/publish/dummyData'
definePageMeta({
  layout:'mo-sub'
});
const modalPositioning = () => {
  const top = window.scrollY + event.target.getBoundingClientRect().top;
  const right = window.outerWidth - event.target.getBoundingClientRect().left + 80; //80은 modal_my_shop_menu 너비
  document.getElementById('modal_my_shop_menu').style.cssText="top:" + top + "px;left:unset;right:" + right + "px;bottom:unset;"
}

onMounted(()=>{
  //마이샵 메뉴 외 영역 클릭 시 메뉴 닫힘
  const body = document.querySelector('body');
  body.addEventListener('click', (event)=>{
    const target = event.target;
    const dotMenuModal = document.getElementById('modal_my_shop_menu');
    if (!target.classList.contains('btn_dot_menu') && dotMenuModal.classList.contains('active') && !target.classList.contains('btn_single_menu')){
      dotMenuModal.classList.remove('active')
    }
  });
})
</script>

<style lang="scss" scoped>
.my_shop_wrap{
  .info {
    padding: 3rem 2.1rem;

    .title {
      margin-bottom: 2rem;
      text-align: center;

      h3 {
        margin-bottom: .5rem;
        font-size: 2rem;
        line-height: 2.4rem;
        color: #000;
      }

      .p {
        font-size: 13rem;
        line-height: 2rem;
        color: #666;
      }

      button.confirm {
        width: 100%;
        margin-top: 2rem;
        justify-content: flex-end;
      }
    }
  }

  .my_shop {
    padding: 2rem;
    background-color: #F7FAFA;
    border: 1px solid #E2EAEA;

    dl {
      dt {
        font-size: 1.2rem;
        color: #00BC70;
        line-height: 1.6rem;
        position: relative;

        .btn_dot_menu {
          width: 2.4rem;
          height: 2.4rem;
          font-size: 0;
          background: url('~/assets/mo_images/common/icon_split.png') -21rem -7rem / 25rem auto no-repeat;
          position: absolute;
          bottom: 0;
          right: -.8rem;
        }

      }

      dd {
        margin-top: 1.6rem;
        line-height: 2rem;

        em {
          font-size: 1.6rem;
          font-weight: 600;
        }

        p {
          margin-top: .8rem;
          font-size: 1.3rem;
          color: #888;
          text-overflow: ellipsis;
          white-space: normal;
          word-wrap: break-word;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        &.no_shop {
          margin-top: .8rem;
          padding-top: 1.6rem;
          font-size: 1.3rem;
          text-align: center;
          color: #666;
          border-top: 1px solid #E2EAEA;
        }
      }
    }

    &.closed {
      background-color: #f5f5f5;
      border-color: #ddd;

      em {
        color: #999;
      }

      p {
        color: #aaa;
      }
    }
  }

  .bul_list.dash {
    margin-top: 1.6rem;
    li {
      color: #888;
      line-height: 1.6rem;
    }
  }

  section {
    padding: 3rem 2.1rem;

    h3 {
      margin-bottom: 2rem;
    }

    .multi_form {
      display: flex;
      gap: .5rem;

      & + .multi_form {
        margin-top: 1rem;
      }

      :deep(label.select) {
        flex: 1;
      }

      :deep(.btn_outline) {
        width: 9rem;
      }
    }
  }
}

.dot_menu {
  border:1px solid #999;

  li {
    width: 8rem;

    & + li {
      border-top: 1px solid #999;
    }

    button {
      padding: 1.2rem 0;
      width:100%;
      font-size: 1.2rem;
      text-align: center;
      line-height: 1.6rem;
      display: block;
    }
  }
}

.shop_list {
  .list_header {
    padding: 0 2.1rem 1.5rem;
    font-weight: 600;

    em {
      color: #00BC70;
    }
  }

  ul {
    border-top: 1px solid #f5f5f5;

    li {
      & + li {
        border-top: 2px solid #f5f5f5;
      }
    }
  }
}
</style>
