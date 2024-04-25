<template>
  <div class="mypage_top">
    <div class="inner">
      <dl>
        <dt><img src="" alt=""></dt>
        <dd>
          <p></p>
          <a href="#none">
            <span>웰컵</span>멤버이네요! 멤버십 혜택을 확인해보세요
          </a>
        </dd>
      </dl>
      <ul>
        <li>
          <a href="#none">
            <strong>뷰티포인트</strong>
            <em>0P</em>
          </a>
        </li>
        <li>
          <a href="#none">
            <strong>보유쿠폰</strong>
            <em>2장</em>
          </a>
        </li>
        <li>
          <a href="#none">
            <strong>이번달 공병수거</strong>
            <em>0개</em>
          </a>
        </li>
        <li>
          <a href="#none">
            <strong>피부정보</strong>
            <em>포인트 받기</em>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="title_wrap" :data-layout="props.layoutType">
      <h2>1:1 문의</h2>
  </div>

  <div class="inner">
    <Tabs :item="[{txt:'1&#58;1 문의하기'},{txt:'답변확인'}]" :tabidx="0" />
    <section>
      <div>
        <img src="" alt="">
        <strong>1:1 문의전에 꼭! 확인해주세요</strong>
        <p>1:1 고객문의 처리시간은 09:00 ~18:00 입니다. (문의는 24시간 언제나 가능합니다.)</p>
        <p>최단시간 내에 접수사항을 조치하여 해결해 드리도록 하겠습니다.</p>
        <p>피해 발생시에는 공정거래위원회 소비자분쟁해결기준에 의거해서 처리됩니다.</p>
        <em>상담내용 본문에는 개인정보를 입력하지 말아주세요. 고객정보 보호를 위해 마스킹 처리될 수 있습니다.<br>
            (예: 성명, 연락처, 이메일주소, 계좌번호 등)</em>
      </div>
      <div class="table_wrap">
        <table>

        </table>
      </div>
    </section>
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
</template>

<script setup>
definePageMeta({
layout: 'pc-category'
});

import {
sample_event
} from '~/test/data/dummyData'

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type:String,
    default:'default'
  }
});
/* //component sample data */
</script>

<style lang="scss" scoped>
.title_wrap {
  padding: 60px 20px;
  display:flex;
  justify-content:space-between;
  button {
      font-size:14px;
      display:flex;
      align-items:center;
      &::after {
          content:'';
          width:16px;
          height:16px;
          background-image:url('/_nuxt/assets/images/common/PC-icon_split.png');
          background-repeat:no-repeat;
          background-size:250px;
          background-position:-110px -58px;
          display:inline-block;
          transform:rotate(-90deg);

      }
  }
}

.list_wrap {
margin-top:60px;
}

</style>
