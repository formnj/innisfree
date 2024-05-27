<template>
  <Tabs class="membership_tab" tabType="type_01" :item="[{txt:'멤버십 혜택안내'},{txt:'뷰티포인트 안내'},{txt:'모바일 앱 다운로드'}]" :tabidx="0" />
  <div class="inner">
    <div class="user_wrap">
      <div class="user_grade">
        <h3>김이니님은<br>웰컴 고객 입니다.</h3>
        <ul class="user_list">
          <li>
            <span>VIP 승급까지</span>
            <span>61,800 원 부족</span>
          </li>
          <li>
            <span>최근 6개월 구매 금액</span>
            <span>38,200 원</span>
          </li>
          <li>
            <span>다음 등급 산정일</span>
            <span>2024.05.01</span>
          </li>
        </ul>
        <div class="grade wc">
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
      </div>
      <ul>
        <li class="point">
          <p>
            뷰티포인트
          </p>
          <span class="num"><strong>1,000</strong>P</span>
        </li>
        <li class="coupon">
          <p>보유 쿠폰</p>
          <span class="num"><strong>6</strong>장</span>
        </li>
      </ul>
    </div>

    <section class="member_grade">
      <div class="benefit">
        <div class="sub_title_wrap">
          <h4>
            전 등급 공통 혜택
            <p class="explain">가입 즉시 웰컴! VIP, 그린티클럽 되는 날까지~</p>
          </h4>
        </div>
        <div class="benefit_con">
          <ul class="benefit_list">
            <li>
              <p>
                멤버십데이 등급별 할인 쿠폰
                <span>※ 등급별 할인율/할인액 차등 적용, 혜택 월별 변동 가능</span>
              </p>
            </li>
            <li>
              <p>1% 뷰티포인트 적립</p>
            </li>
            <li>
              <p>가입 시 총 70,000원 쿠폰팩 발급</p>
            </li>
          </ul>
        </div>
        <div class="detail_wrap">
          <button type="button" @click="toggle_btn">등급 기준 자세히 알아보기</button>
          <div>
            <ul class="level">
              <li>
                <p>웰컴</p>
                <span><em>가입 즉시</em></span>
              </li>
              <li>
                <p>VIP</p>
                <span>직전 6개월 결제금액<br><em>10만원 이상 20만원 미만</em></span>
              </li>
              <li>
                <p>그린티클럽</p>
                <span>직전 6개월 결제금액<br><em>20만원 이상</em></span>
              </li>
            </ul>
            <ul class="bul_list">
              <li>멤버십 등급은 직전 6개월 결제 금액 기준으로 매월 1일 변경</li>
              <li>뷰티포인트 결제 금액도 등급 산정에 포함됨</li>
              <li>할인한도 : 회원 할인 시 정상가 기준 20만원까지 구매 가능<br><span>&#40;할인품목&비할인품목 적용제외&#41;</span></li>
              <li>시크릿쿠폰 적용 대상 품목과 할인액은 매월 변경됨</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="greentea">
        <div class="sub_title_wrap">
          <h4>
            그린티클럽만 받는 선물
            <p class="explain">연 2회 놓치지 마세요, 그린티클럽 키트</p>
          </h4>
        </div>
        <div class="pdt_wrap">
          <ul>
            <li v-for="(item,idx) in img_sample" :key="idx">
              <div class="img"><img :src="item.img"></div>
              <p>
                <span>{{ item.date }}</span>
                {{ item.text }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

definePageMeta({
  layout:'mo-category'
});

const img_sample = [
  {img:'/_nuxt/public/images/sam/kit_2023_2.png',date:'2023 하반기',text:'마리떼 새해웰컴키트'},
  {img:'/_nuxt/public/images/sam/kit_2023_2.png',date:'2023 상반기',text:'해피 리벌스데이 키트'},
  {img:'/_nuxt/public/images/sam/kit_2023_2.png',date:'2022 하반기',text:'웰컴 그린티 기프트'},
  {img:'/_nuxt/public/images/sam/kit_2023_2.png',date:'2022 상반기',text:'수분충전 키트'},
  {img:'/_nuxt/public/images/sam/kit_2023_2.png',date:'2021 하반기',text:'ECO-TOGETHER KIT'},
  {img:'/_nuxt/public/images/sam/kit_2023_2.png',date:'2021 상반기',text:'올리브 그린 키트'},
];

const membership_link = [ 'IN_MO_MYP_01_04', 'IN_MO_MYP_01_05', 'IN_MO_MYP_01_07', ];

onMounted(() => {
  document.querySelectorAll('.membership_tab li').forEach((el, idx) => {
    el.addEventListener('click', () => {
      router.push(`/publish/${membership_link[idx]}`);
    })
  });
});

const toggle_btn = (e) => {
  e.target.closest('.detail_wrap').classList.toggle('active');
};
</script>
<style lang="scss" scoped>
.membership_tab {
  margin:0 -20px;
  :deep(ul.type_01) {
    li {
      button {
        height: 5rem;
        font-weight: 600;
      }
    }
  }
}

.sub_title_wrap {
  h3 {
    flex-direction: column;
    align-items: flex-start;
  }
}

.user_wrap {
  margin:0 -20px;
  padding:3rem 2.1rem;
  background:#F5F5F5;
  display:flex;
  justify-content:space-between;
  position:relative;
  &.hide {
    display:none;
  }
  .user_grade {
    width:100%;
    h3 {
      font-size:2rem;
      font-weight:600;
      line-height:2.4rem;
    }
    .user_list {
      margin-top:6rem;
      font-size:1.3rem;
      line-height:2rem;
      display:flex;
      flex-direction:column;
      gap:0.5rem;
      li {
        display:flex;
        gap:0.5rem;
        span {
          &:first-child {
            color:#888;
          }
        }
      }
    }
    .grade {
      margin-top:2.8rem;
      &.wc {
        .grade_bar {
          &:before{
            width:0;
          }
          &:after {
            left:-1%;
          }
        }
      }
      &.vip {
        .grade_bar {
          &:before{
            animation: vip_bar 2s forwards;
          }
          &:after {
            animation: vip_bullet 2s forwards;
          }
        }
      }
      &.gtclub {
        .grade_bar {
          &:before{
            animation: gtclub_bar 2s forwards;
          }
          &:after {
            animation: gtclub_bullet 2s forwards;
          }
        }
      }
      .grade_bar {
        height:0.5rem;
        font-size:0;
        background:#EEE;
        position:relative;
        &:before {
          content:'';
          height:100%;
          display:block;
          background:#FFD067;
        }
        &:after {
          content:'';
          width:2rem;
          height:2rem;
          background:#fff;
          border-radius:50%;
          box-shadow: 0 0.1rem 0.3rem rgba(0,0,0,0.2);
          position:absolute;
          top:50%;
          right:-1rem;
          transform:translate(0,-50%);
        }
      }
      .txt {
        margin-top:1.4rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        span {
          color:#AAA;
          font-size:1.2rem;
          line-height:1.6rem;
          &.t2 {
            margin-left:3rem;
          }
        }
      }
    }
  }
  > ul {
    width:15rem;
    margin-top:1rem;
    display:flex;
    gap:0 1.5rem;
    position:absolute;
    top:3rem;
    right:0;
    li {
      display:flex;
      flex-direction:column;
      align-items:center;
      &:before {
        content:'';
        width:2rem;
        height:2rem;
        margin-bottom:0.3rem;
        background:url('~/assets/mo_images/common/icon_split.png') no-repeat;
        background-size:25rem auto;
        display:block;
      }
      &.point{
        &:before {
          background-position:-6.5rem -21rem;
        }
      }
      &.coupon{
        &:before {
          background-position:-8.5rem -21rem;
        }
      }
      p {
        color:#666;
        font-size:1.3rem;
        line-height:1.6rem;
        display:flex;
        align-items:center;
      }
      span {
        color:#1B8DF7;
        font-size:1.2rem;
        font-weight:500;
        line-height:2.4rem;
        strong {
          font-size:1.6rem;
        }
      }
    }
  }
}

.benefit {
  .benefit_con {
    .benefit_list {
      padding:3rem 0;
      border-top:0;
      display:flex;
      flex-direction:column;
      gap:2rem 0;
      li {
        min-height:3.2rem;
        font-size:1.3rem;
        display:flex;
        align-items:center;
        gap:0 1.2rem;
        &:before {
          content:'';
          width:3.2rem;
          height:3.2rem;
          display:inline-block;
        }
        &:nth-child(1):before {
          background:url('~/assets/mo_images/common/icon_split.png') no-repeat 0 -24rem;
          background-size:25rem auto;
        }
        &:nth-child(2):before {
          background:url('~/assets/mo_images/common/icon_split.png') no-repeat -3.5rem -24rem;
          background-size:25rem auto;
        }
        &:nth-child(3):before {
          background:url('~/assets/mo_images/common/icon_split.png') no-repeat -7rem -24rem;
          background-size:25rem auto;
        }
        p {
          display:flex;
          flex-direction:column;
          span {
            margin-top:0.5rem;
            color:#666;
            font-size:1.2rem;
            line-height:1.6rem;
          }
        }
      }
    }
  }
  .detail_wrap {
    padding-bottom: 2rem;
    &.active {
      button {
        &:after {
          transform:rotate(-180deg);
        }
      }
      >div {
        display:block;
      }
    }
    button {
      width:100%;
      height:5.6rem;
      color:#000;
      font-size:1.4rem;
      font-weight:600;
      font-family:inherit;
      border-top:0.1rem solid #EEE;
      border-bottom:0.1rem solid #EEE;
      display:flex;
      align-items:center;
      justify-content:space-between;
      &:after {
        content:'';
        width:2.4rem;
        height:2.4rem;
        background:url('~/assets/mo_images/common/icon_split.png') no-repeat -0.5rem -21.4rem;
        background-size:25rem auto;
        display:block;
        transform:rotate(0deg);
      }
    }
    >div {
      padding-top:2.5rem;
      display:none;
      .level {
        padding:0 0.8rem;
        display:flex;
        li {
          font-size:1.2rem;
          text-align:center;
          line-height:1.6rem;
          border-left:0.1rem solid #F5F5F5;
          &:nth-child(1) {
            width:8rem;
            border-left:0;
          }
          &:nth-child(2) {
            width:13.9rem;
          }
          &:nth-child(3) {
            width:11.4rem;
          }
          p {
            margin-bottom:0.5rem;
            color:#333;
            font-size:1.2rem;
            font-weight:600;
            line-height:1.6rem;
            display:flex;
            align-items:center;
            justify-content:center;
            gap:0.3rem;
            &:before {
              content:'';
              width:1.6rem;
              height:1.6rem;
              vertical-align:middle;
            }
          }
          span {
            color:#666;
            font-size:1.2rem;
          }
          &:nth-child(1) {
            p:before {
              background:url('~/assets/images/common/icon_welcome.png') no-repeat 0 0/cover;
            }
          }
          &:nth-child(2) {
            p:before {
              background:url('~/assets/images/common/icon_vip.png') no-repeat 0 0/cover;
            }
          }
          &:nth-child(3) {
            padding-right:0;
            border-right:0;
            p:before {
              background:url('~/assets/images/common/icon_green.png') no-repeat 0 0/cover;
            }
          }
        }
      }
      .bul_list {
        padding:2rem;
        margin-top:2.5rem;
        border:0.1rem solid #EEE;
        background:#F5F5F5;
        li {
          margin-top:1rem;
          color:#888;
          font-size:1.2rem;
          line-height:1.6rem;
          padding-left:0.6rem;
          position:relative;
          span {
            color:#333;
          }
          &:first-child {
            margin-top:0;
          }
          &:before {
            width:0.2rem;
            height:0.2rem;
            color:#666;
            top:0.6rem;
            left:0;
          }
        }
      }
    }
  }
}

.greentea {
  .pdt_wrap {
    margin:0 -20px;
    ul {
      padding:0 2rem 1rem;
      margin-top:2rem;
      overflow-x:scroll;
      overflow-y:hidden;
      display:flex;
      gap:0.6rem;
      li {
        width:10.9rem;
        vertical-align:top;
        .img {
          width:10.9rem;
          height:14.5rem;
          img {
            width:100%;
            height:100%;
          }
        }
        p {
          margin-top:1rem;
          font-size:1.3rem;
          line-height:1.6rem;
          span {
            display:block;
            margin-bottom:0.3rem;
            font-size:1.2rem;
            color:#00BC70;
          }
        }
      }
    }
  }
}

@keyframes vip_bar {
  0% {
    width:0;
    background:#FFD067;
  }
  100% {
    width:50%;
    background:#FFD067;
  }
}
@keyframes vip_bullet {
  0% {
    left:-1%;
  }
  100% {
    left:50%;
    transform:translate(-50%,-50%);
  }
}
@keyframes gtclub_bar {
  0% {
    width:0;
    background:#FFD067;
  }
  50% {
    background:#FFD067;
  }
  100% {
    width:100%;
    background:#12B560;
  }
}
@keyframes gtclub_bullet {
  0% {
    left:-1%;
  }
  100% {
    left:97%;
  }
}
</style>
