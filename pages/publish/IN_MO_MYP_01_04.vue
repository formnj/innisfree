<template>
  <Tabs id="membership_tab" tabType="type_01" :item="[{txt:'멤버십 혜택안내'},{txt:'뷰티포인트 안내'},{txt:'모바일 앱 다운로드'}]" :tabidx="0" />
  <div class="inner">
    <div class="user_wrap">
      <div class="user_grade">
        <h3>형민우님은<br>웰컴 고객 입니다.</h3>
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

    <section class="con member_grade show">
      <div class="benefit">
        <div class="sub_tit">
          <h3>전 등급 공통 혜택</h3>
          <span>가입 즉시 웰컴! VIP, 그린티클럽 되는 날까지~</span>
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
              <li>할인한도 : 회원 할인 시 정상가 기준 20만원까지 구매 가능 <span>&#40;할인품목&비할인품목 적용제외&#41;</span></li>
              <li>시크릿쿠폰 적용 대상 품목과 할인액은 매월 변경됨</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="greentea">
        <div class="sub_tit">
          <h3>그린티클럽만 받는 선물</h3>
          <span>연 2회 놓치지 마세요, 그린티클럽 키트</span>
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

    <section class="con beauty_point">
      <Tabs id="beauty_tab" :item="[{txt:'뷰티포인트'},{txt:'VIP등급안내'}]" :tabidx="0" />
      <div class="con beauty_wrap show">
        <div class="header">
          <h4>뷰티 포인트는</h4>
          <p>쌓을수록 아름다워지는 아모레퍼시픽<br>통합 멤버십 서비스 입니다.</p>
        </div>
        <h4 class="sub_tit mt4">뷰티포인트 적립안내</h4>
        <div class="table">
          <table>
            <caption>포인트 적립안내</caption>
            <colgroup>
              <col style="width:100%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">제품 구매 포인트 적립</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>결제금액의 1%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="desc_wrap">
          <h5>유의사항</h5>
          <ul class="dot_list">
            <li class="point">제품 구매시 연간 적립 가능한 최대 뷰티포인트는 50만 포인트로 초과분에 대해서는 포인트 적립이 되지 않습니다.</li>
            <li>제품 환불 시, 적립된 뷰티포인트도 자동으로 취소됩니다.</li>
            <li>
              AP 및 계열사 쇼핑몰에서 로그인 후 구매 혹은 결제하시면 포인트가 적립됩니다.<br>
              단, 온라인 쇼핑몰의 경우 배송상품의 특성상 상품 수령 후, 해당 온라인 쇼핑몰에서 구매확정 절차인 [수취확인]을 클릭하셔야 포인트가 적립됩니다.
            </li>
            <li>이니스프리 공식 온라인몰은 배송완료 후 15일 후에 포인트가 적립됩니다.</li>
            <li>할인쿠폰/교환권/일부 상품권으로 결제 시 뷰티포인트가 적립되지 않습니다.</li>
            <li>뷰티포인트 카드 미소지 등의 이유로 현장에서 적립을 받지 못하셨을 경우, 구매일로부터 60일 이내에 제품 구매 매장에 구매 영수증이나 카드대금 청구서를 제시하면 뷰티포인트 적립이 가능합니다.</li>
            <li>내부 심사기준에 따라 특정 브랜드 구매 편중 및 적립 과다로 비정상적으로 판단될 경우 뷰티포인트가 적립되지 않습니다.</li>
            <li>뷰티포인트 적립률은 회사 정책에 따라 사전 고지 후 변동될 수 있습니다.</li>
            <li>뷰티포인트는 제휴사 포인트 전환, 공병으로도 적립하실 수 있습니다. 자세한 내용은 아모레몰 > 뷰티포인트 가이드에서 확인하실 수 있습니다.</li>
          </ul>
        </div>
        <h4 class="sub_tit">
          뷰티포인트 사용안내
          <span>적립된 뷰티포인트는 <em>1P=1</em>원가치를 지니며, 사용처별<br>세부 기준은 아모레몰 > 뷰티포인트 가이드에서 확인하실 수 있습니다.</span>
        </h4>
        <div class="point_info">
          <ul>
            <li>사용시 명의자 본인 방문<br>&#40;모바일/실물 카드 or 신분증 소지&#41;</li>
            <li>제품 결제시 부분 또는 전체 사용<br>&#40;사용처별, 제품별 상이할 수 있음&#41;</li>
          </ul>
        </div>
        <ul class="dot_list mt">
          <li>사용시 명의자 본인이 방문해야 하며, 모바일/실물 카드 혹은 신분증을 소지하거나 휴대전화를 통한 본인인증 절차를 거쳐야 합니다.</li>
          <li>결제시 10P 단위로 사용할 수 있습니다. &#40;단, 방문 판매 채널은 1,000P 단위 사용&#41;</li>
          <li>부분 사용시 사용처에 따라 최대 사용 가능한 금액이 다를 수 있습니다. 사용 전, 아모레몰 > 뷰티포인트 가이드를 확인해주세요.</li>
          <li>일부 매장, 일부 제품에 대해서는 사용에 제한이 있을 수 있습니다.</li>
          <li>할인 및 특가 판매 등 일부 제품은 사용 대상에서 제외될 수 있습니다.</li>
        </ul>
        <h4 class="sub_tit">
          뷰티포인트 유효기간 및 소멸안내
          <span>유효기간과 소멸 기준을 확인하여 포인트를 관리하실 수 있습니다.</span>
        </h4>
        <ul class="dot_list">
          <li>
            기본 적립 포인트는 추가 구매 적립이 없는 경우 자동 소멸되며 회사는 별도의 고지에 대한 의무를 부담하지 않습니다.<br>
            소멸 예정 및 소멸 시기 등 관련된 정보는 아모레몰 홈페이지 또는 모바일 앱에서 확인 가능합니다.<br>
            ※ 할인 적용 제품 구매 시에는 포인트가 적립되지 않습니다.<br>
            &#40;단, 아리따움의 경우, 할인 후 실결제금액에 대해 뷰티포인트 적립 가능&#41;
          </li>
          <li>이벤트 포인트의 경우 각 포인트마다 별도 지정된 소멸 일자를 따릅니다.</li>
          <li>포인트 사용 후 취소할 경우 차감된 포인트는 기존 유효기간으로 복구되며 유효기간이 지난 포인트의 경우 취소일로부터 3일간 유효기간이 적용됩니다. &#40;1회에 한함&#41;</li>
          <li>회원 탈퇴, 무거래&#40;1년&#41; 등의 사유로 포인트가 소멸되는 경우 포인트는 현금으로 반환되지 않고 소멸되며, 소멸된 포인트는 복구가 불가능합니다.</li>
          <li>
            포인트 소멸은 소멸 예정일 자정에 완료되므로, 소멸 예정일까지 사용하시기 바랍니다.<br>
            예&#41; 2023.07.30 소멸 예정 포인트 → 2023.07.30에서 2023.07.31로 넘어가는 밤 12시에 소멸
          </li>
        </ul>
      </div>
      <div class="con vip_wrap">
        <div class="header">
          <h4>VIP 등급 안내 <span>by AMOREPACIFIC</span></h4>
          <p>뷰티포인트 회원을 위한 등급별 다양하고<br>특별한 혜택을 만나보세요!</p>
        </div>
        <h4 class="sub_tit">등급 산정 기준 및 혜택 안내</h4>
        <Tabs id="point_tab" :item="[{txt:'PLATINUM\n플래티넘'},{txt:'GOLD\n골드'},{txt:'SILVER\n실버'},{txt:'GREEN\n그린'}]" :tabidx="0" />
        <div class="table row">
          <table>
            <caption>등급 산정 기준 및 혜택 안내</caption>
            <colgroup>
              <col style="width:50.5%" />
              <col/>
            </colgroup>
            <tbody>
              <tr>
                <th>기준 구매 금액</th>
                <td>{{ tb_list[tbidx].price }}만원 이상</td>
              </tr>
              <tr>
                <th>승급시 웰컴 포인트<br>VIP선정 전 구매금액</th>
                <td>{{ tb_list[tbidx].point }} P</td>
              </tr>
              <tr>
                <th>리워드 포인트 Ⅰ<br>VIP선정 후 구매 금액<br>200만원 이상</th>
                <td>20,000 P</td>
              </tr>
              <tr>
                <th>리워드 포인트 Ⅱ<br>VIP선정 후 구매금액<br>250만원 이상</th>
                <td>20,000 P</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="dot_list mt sm">
          <li>GREEN(그린) 등급은 21년 신설된 VIP 등급입니다.</li>
          <li>
            21년 VIP 선정시 기준 기간은 20년 01월~12월 입니다.<br>
            - 단, 17년 1월 이후 첫 구매 고객은 첫구매월로부터 12개월입니다.<br>
            &#40;예: 17년 3월 첫구매 고객의 21년 VIP 선정 기간: 20년 3월~21년 2월&#41;<br>
            - 단, 휴면 재거래 고객은 재거래 시작월로부터 12개월입니다.
          </li>
          <li>
            구매 금액 집계 기간: 웰컴 포인트 - 21년 VIP 선정 전 12개월<br>
            / 리워드 포인트 I, II – 21년 VIP 선정 후 12개월
          </li>
        </ul>
        <h4 class="sub_tit">혜택 적립, 소멸 안내</h4>
        <Tabs id="guide_tab" :item="[{txt:'승급시 웰컴 포인트'},{txt:'리워드 포인트 Ⅰ'},{txt:'리워드 포인트 Ⅱ'}]" :tabidx="0" />
        <div class="tab_con welcome show">
          <div class="table row">
            <table>
              <caption>혜택 적립, 소멸 안내</caption>
              <colgroup>
                <col style="width:33.8%" />
                <col style="width:auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th>적립 시점</th>
                  <td>21년 VIP 선정월 15일 적립<sup>1</sup></td>
                </tr>
                <tr>
                  <th>소멸 시점</th>
                  <td>
                    플래티넘, 골드, 실버:<br>
                    적립일 포함 90일차 자정 소멸<br>
                    그린: 적립일로부터 90일
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="help_wrap">
            <ul>
              <li>1. 선정월 15일부터 다음달 15일까지 아모레몰에서 직접 신청</li>
              <li>* 신청방법<br>아모레몰 > 뷰티파우치 > 뷰티포인트 회원등급 > VIP 등급별 혜택 > 웰컴 포인트 적립하기</li>
            </ul>
          </div>
        </div>
        <div class="tab_con re_one">
          <div class="table row">
            <table>
              <caption>혜택 적립, 소멸 안내</caption>
              <colgroup>
                <col style="width:33.8%" />
                <col style="width:auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th>적립 시점</th>
                  <td>200만원 구매월의 익월 15일 자동 적립</td>
                </tr>
                <tr>
                  <th>소멸 시점</th>
                  <td>적립일 포함 90일차 자정 소멸</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="tab_con re_two">
          <div class="table row">
            <table>
              <caption>혜택 적립, 소멸 안내</caption>
              <colgroup>
                <col style="width:33.8%" />
                <col style="width:auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th>적립 시점</th>
                  <td>250만원 구매월의 익월 15일 자동 적립</td>
                </tr>
                <tr>
                  <th>소멸 시점</th>
                  <td>적립일 포함 90일차 자정 소멸</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h4 class="sub_tit">유의사항</h4>
        <ul class="dot_list">
          <li>회원등급 선정 기준 및 등급별 혜택은 회사 사정에 따라<br>변경될 수 있습니다.</li>
          <li>회원등급은 현금 결제금액(할인 후 금액)과 포인트 결제금액의<br>합산금액이 반영됩니다. (고객별 집계기간 상이)</li>
          <li>방문판매(방판/리리코스)를 통한 제품 구매 시, 수금금액을 기준으로<br>반영됩니다.</li>
          <li>ABC 회원 혜택을 받기 위해서는 반드시 아모레퍼시픽 멤버십<br>'뷰티포인트' 회원(실명인증)이어야 합니다.</li>
          <li>
            내부 심사기준에 따라 아래의 경우 선정이 제한될 수 있습니다.<br>
            <ul>
              <li>- 선정시점의 통합 탈퇴고객</li>
              <li>- 휴대번호 비정상 (3회 이상 중복, 번호 미기재, 번호오류 등)</li>
              <li>- 특정 브랜드 구매 편중 및 적립 과다로 비정상적으로 판단될 경우</li>
              <li>- 직원(판매사원 및 가맹점주)</li>
              <li>- 카운셀러/뷰레이터 전화번호로 고객이 등록된경우</li>
            </ul>
          </li>
          <li>VIP 선정기준 및 혜택에 대한 더욱 자세한 안내는 아모레몰 > 마이페이지 ><br>통합 회원 등급 혜택에서 확인하실 수 있습니다.</li>
        </ul>
      </div>
    </section>

    <section class="con mobile_app">
      <div class="img"><img src="/assets/images/sam/appdown_img.png" alt=""></div>
      <div class="download">
        <h4>모바일 APP으로<br>더 간편하게! 더 특별하게!</h4>
        <Button txt="APP 다운로드" />
        <ul>
          <li>나에게 맞는 세일/혜택 소식들을 PUSH로 가장 먼저!</li>
          <li>매장에서 구매한 영수증도 APP에서 간편 확인</li>
          <li>오직 APP에서만 진행하는 전용 이벤트</li>
          <li>신규 가입하면 총 70,000원 쿠폰팩 즉시 발급!</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup>
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

const tbidx = ref(0);
const tb_list = [
  {price:'300',point:'50,000'},
  {price:'150',point:'20,000'},
  {price:'100',point:'10,000'},
  {price:'50',point:'5,000'},
];

onMounted(() => {
  document.querySelectorAll('#membership_tab li').forEach((item,idx) => {
    item.addEventListener('click', () => {
      const section = document.querySelectorAll('section.con');
      section.forEach((item) => item.classList.remove('show'));
      section[idx].classList.add('show');

      /* 모바일 앱 다운로드 탭 이동시 user_wrap 숨김처리 */
      idx === 2 ? document.querySelector('.user_wrap').classList.add('hide') : document.querySelector('.user_wrap').classList.remove('hide');
    })
  });

  document.querySelectorAll('#beauty_tab li').forEach((item,idx) => {
    item.addEventListener('click', () => {
      const beauty = document.querySelectorAll('.beauty_point .con')
      beauty.forEach((item) => item.classList.remove('show'));
      beauty[idx].classList.add('show');
    })
  });

  document.querySelectorAll('#point_tab li').forEach((item,idx) => {
    item.addEventListener('click', () => {
      tbidx.value = idx;
    });
  });

  document.querySelectorAll('#guide_tab li').forEach((item,idx) => {
    item.addEventListener('click', () => {
      const tab_con = document.querySelectorAll('.tab_con');
      tab_con.forEach((item) => item.classList.remove('show'));
      tab_con[idx].classList.add('show');
    });
  });
});

const toggle_btn = (e) => {
  e.target.closest('.detail_wrap').classList.toggle('active');
};
</script>
<style lang="scss" scoped>
#membership_tab {
  margin:0 -20px;
  :deep(ul) {
    li {
      height:5rem;
      button {
        height:100%;
        font-family:inherit;
        em {
          padding:0;
          font-size:1.4rem;
          font-weight:600;
          letter-spacing:-0.01em;
        }
      }
      &.current {
        button {
          em {
            font-weight:700;
          }
        }
      }
    }
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
        background:url('/_nuxt/assets/mo_images/common/icon_split.png') no-repeat;
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

section {
  display:none;
  &.show {
    display:block;
  }
  .sub_tit {
    padding-top:3rem;
    h3 {
      margin-bottom:0.5rem;
      color:#000;
      font-size:1.6rem;
      font-weight:600;
      line-height:2rem;
    }
    span {
      color:#aaa;
      font-size:1.3rem;
      line-height:1.6rem;
    }
  }

  .benefit {
    .benefit_con {
      .benefit_list {
        padding:3rem 0;
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
        margin-bottom:2rem;
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
              content:'·';
              color:#666;
              position:absolute;
              top:0;
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

  &.beauty_point {
    :deep(.tab_wrap) {
      border-bottom:0.1rem solid #EEE;
      margin:0 -20px;
      li {
        flex:1;
        height:5rem;
        &.current {
          button {
            border-bottom-width:0.2rem;
            border-bottom-color:#000;
            em {
              color:#000;
            }
          }
        }
        button {
          width:100%;
          height:100%;
          font-family:inherit;
          border:0;
          border-bottom:0.1rem solid #fff;
          em {
            padding:0;
            color:#888;
            font-size:1.4rem;
            font-weight:600;
          }
        }
      }
      &#point_tab,&#guide_tab {
        margin:1.5rem 0 1rem;
        background:#F8F8F8;
        ul {
          li {
            width:25%;
            height:5.5rem;
            border:0.1rem solid #EEE;
            &.current {
              border:0.1rem solid #00BC70;
              button {
                color:#fff;
                background:#00BC70;
                em {
                  font-weight:600;
                }
              }
            }
            button {
              color:#000;
              border-bottom:0;
              em {
                color:inherit;
                font-size:1.3rem;
                font-weight:400;
                line-height:1.6rem;
                white-space:pre-line;
              }
            }
          }
        }
      }
    }
    .tab_con {
      display:none;
      &.show {
        display:block;
      }
    }
    .con {
      display:none;
      &.show {
        display:block;
      }
      .header {
        padding-left:8rem;
        margin-top:3rem;
        position:relative;
        &:before {
          content:'';
          width:7rem;
          height:7rem;
          background:url('~/assets/images/common/img_beauty_logo.png') no-repeat left top;
          background-size:100%;
          position:absolute;
          top:0;
          left:0;
        }
        h4 {
          font-size:1.4rem;
          font-weight:500;
          line-height:1.8rem;
          >span {
            margin:0;
            color:#999;
            font-size:1.2rem;
            font-weight:400;
            line-height:1.6rem;
            display:block;
          }
        }
        p {
          margin-top:0.5rem;
          color:#666;
          font-size:1.3rem;
          line-height:2rem;
        }
      }
      >h4.sub_tit {
        padding:0;
        margin:5rem 0 2rem;
        color:#222;
        font-size:1.6rem;
        font-weight:600;
        line-height:2rem;
        &.mt4 {
          margin-top:4rem;
        }
        span {
          margin-top:2rem;
          color:#666;
          font-size:1.3rem;
          font-weight:400;
          line-height:2rem;
          display:block;
          em {
            color:#00BC70;
            font-weight:400;
          }
        }
      }
      .table {
        border-top:0.1rem solid #999;
        position:relative;
        table {
          width:100%;
          border-collapse:collapse;
          border:0;
          caption {
            position:absolute;
            z-index:-1;
            font-size:0;
            text-indent:-99999px;
          }
          th {
            padding:1.1rem 1rem;
            color:#666;
            font-size:1.2rem;
            font-weight:400;
            line-height:1.6rem;
            border-bottom:0.1rem solid #EEE;
            border-left:0.1rem solid #EEE;
            background:#F5F5F5;
          }
          td {
            padding:1.5rem 1rem;
            color:#000;
            font-size:1.3rem;
            line-height:1.6rem;
            text-align:center;
            border-left:0.1rem solid #EEE;
            border-bottom:0.1rem solid #EEE;
            sup {
              line-height:1;
            }
          }
          th:first-child,
          td:first-child {
            border-left:0;
          }
        }
        &.row {
          th,td {
            text-align:left;
          }
        }
      }
      .desc_wrap {
        h5 {
          margin:2rem 0 1rem;
          color:#333;
          font-size:1.3rem;
          font-weight:600;
          line-height:1.8rem;
        }
        .dot_list {
          margin-top:0;
        }
      }

      ul.dot_list {
        margin-top:1.5rem;
        &.mt {
          li {
            margin-top:0.5rem;
          }
        }
        &.sm {
          li {
            color:#888;
            font-size:1.2rem;
          }
        }
        >li {
          padding-left:0.7rem;
          margin-top:1rem;
          color:#666;
          font-size:1.3rem;
          line-height:1.53em;
          letter-spacing:-0.01em;
          position:relative;
          &.point {
            color:#FF0000;
          }
          &:before {
            content:'';
            width:0.2rem;
            height:0.2rem;
            background:#666;
            position:absolute;
            top:0.8rem;
            left:0;
          }
          &:first-child {
            margin-top:0;
          }
          >ul {
            li {
              color:#999;
            }
          }
        }
      }
      .point_info {
        margin-top:1.5rem;
        padding:2rem;
        border:0.1rem solid #EEE;
        background:#FCFCFD;
        ul {
          display:flex;
          flex-wrap:wrap;
          gap:1rem;
          li {
            width:100%;
            padding-left:2.5rem;
            color:#666;
            font-size:1.3rem;
            line-height:1.8rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
            position:relative;
            &:before {
              content:'';
              width:2rem;
              height:2.5rem;
              background:url('~/assets/mo_images/common/icon_split.png') no-repeat;
              background-size:25rem auto;
              background-position:-10.5rem -24rem;
              position:absolute;
              top:0;
              left:0;
            }
            &:last-child {
              &:before {
                width:2rem;
                height:2rem;
                background-position:-10.5rem -21rem;
              }
            }
            span {
              line-height:1.2;
            }
          }
        }
      }
      .help_wrap {
        margin-top:1.5rem;
        li {
          margin-top:0.5rem;
          color:#888;
          font-size:1.2rem;
          line-height:1.53em;
          &:first-child {
            margin-top:0;
          }
        }
      }
    }
  }

  &.mobile_app {
    .img {
      margin:0 -20px;
    }
    .download {
      padding-top:2rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      h4 {
        color:#000;
        font-size:2rem;
        line-height:2.4rem;
        text-align:center;
      }
      :deep(button) {
        width:100%;
        height:6rem;
        margin:2rem 2.1rem 0;
        font-family:inherit;
        background:#00BC70;
        em {
          font-size:1.4rem;
          font-weight:600;
        }
      }
      ul {
        width:100%;
        padding-top:2rem;
        li {
          padding-left:0.6rem;
          margin-top:1rem;
          color:#666;
          font-size:1.2rem;
          line-height:1.6rem;
          letter-spacing:-0.01em;
          position:relative;
          &:before {
            content: '';
            width:0.2rem;
            height:0.2rem;
            background: #666;
            position: absolute;
            top:0.7rem;
            left:0;
          }
          &:first-child {
            margin-top:0;
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
