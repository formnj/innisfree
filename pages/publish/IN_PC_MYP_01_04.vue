<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <h2>멤버십</h2>
  </div>

  <div class="inner">
    <Tabs id="membership_tab" tabType="type_03" :item="[{txt:'멤버십 등급/혜택안내'},{txt:'뷰티포인트 안내'},{txt:'모바일 앱 다운로드'}]" :tabidx="0" />
    <div class="user_wrap">
      <div class="user_grade">
        <h3>형민우님은 <strong>웰컴</strong> 고객 입니다.</h3>
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
        <div class="grade">
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
          <div>
            뷰티포인트
            <Icons class="tooltip" @mouseenter="modal.open('modal_beauty_point_tip', 'layer');" />
            <div id="modal_beauty_point_tip" class="modal_wrap"><!-- 뷰티포인트 적립안내 툴팁 -->
              <div class="modal_container">
                <div class="modal_header">
                  <button class="btn_close" @click="modal.close(this);">툴팁 닫기</button>
                </div>
                <div class="modal_content">
                  <h3>뷰티 포인트</h3>
                  <p>
                    뷰티 포인트는 쌓을수록 아름다워지는 아모레퍼시픽 통합<br>멤버십 포인트 입니다.<br><br>
                    <em>
                      아모레퍼시픽의 화장품, 생활용품, 건강식품의 모든 브랜드와<br>
                      이니스프리, 에뛰드, 에스쁘아의 고객들에게 제공되는 통합<br>
                      멤버십 서비스입니다. 뷰티포인트는 회원이 제품 구매 시<br>
                      적립해 드리는 뷰티포인트를 모아 브랜드에 관계없이 자유롭게<br>
                      사용할 수 있으며, 다양한 제휴 서비스도 누릴 수 있습니다.
                    </em>
                  </p>
                </div>
              </div>
              <div class="overlay" @click="modal.close(this);"></div>
            </div><!-- //뷰티포인트 적립안내 툴팁 -->
          </div>
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
          <ul>
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
          <img src="/_nuxt/public/images/sam/membership_coupon.jpg">
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
                <span>직전 6개월 결제금액 <em>10만원 이상 20만원 미만</em></span>
              </li>
              <li>
                <p>그린티클럽</p>
                <span>직전 6개월 결제금액 <em>20만원 이상</em></span>
              </li>
            </ul>
            <ul class="bul_list">
              <li>멤버십 등급은 직전 6개월 결제 금액 기준으로 매월 1일 변경</li>
              <li>뷰티포인트 결제 금액도 등급 산정에 포함됨</li>
              <li>할인한도 : 회원 할인 시 정상가 기준 20만원까지 구매 가능 <span>(할인품목&비할인품목 적용제외)</span></li>
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
          <swiper
            class="swiper"
            v-bind="swiper_options"
            @swiper="onSwiper"
          >
            <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx">
              <div class="item">
                <img :src="item.img">
                <p><strong>2023년 하반기</strong> 마리떼 새해웰컴키트</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="con beauty_point">
      <Tabs id="beauty_tab" :item="[{txt:'뷰티포인트'},{txt:'VIP등급안내'}]" :tabidx="0" />
      <div class="con beauty_wrap show">
        <div class="header">
          <h4>뷰티 포인트는 쌓을수록 아름다워지는<br>아모레퍼시픽 통합 멤버십 서비스 입니다.</h4>
          <p>뷰티포인트는 회원이 제품 구매 시 적립해 드리는 뷰티포인트를 모아<br>브랜드에 관계없이 자유롭게 사용할 수 있으며, 다양한 제휴 서비스도 누릴 수 있습니다.</p>
          <span>
            아모레퍼시픽 전 매장&#40;온/오프라인&#41;에서 자유롭게 합산 및 사용하실 수 있습니다.
          </span>
          <Button class="btn_outline btn_shop" txt="사용가능매장" @mouseenter="modal.open('modal_beauty_shop_tip', 'layer');" />
          <div id="modal_beauty_shop_tip" class="modal_wrap"><!-- 뷰티포인트 사용가능매장 툴팁 -->
            <div class="modal_container">
              <div class="modal_header">
                <button class="btn_close" @click="modal.close(this);">툴팁 닫기</button>
              </div>
              <div class="modal_content">
                <h3>사용가능 매장</h3>
                <p>
                  아모레퍼시픽 전 매장(온/오프라인)에서<br>
                  자유롭게 합산 및 사용하실 수 있습니다.<br>
                  아모레퍼시픽, 설화수, 헤라, 라네즈, 마몽드,<br>
                  아이오페, 아리따움, 한율, 프리메라, 리리코스,<br>
                  베리떼, makeON, 이니스프리, 에뛰드, 에스쁘아,<br>
                  오설록, VB프로그램, 롤리타렘피카, ANNICKGOUTAL,<br>
                  려, 미장센, 해피바스, 일리, 오딧세이, 미래파,<br>
                  틴:클리어, 댄트롤, 메디안, 송염
                </p>
              </div>
            </div>
            <div class="overlay" @click="modal.close(this);"></div>
          </div><!-- //뷰티포인트 사용가능매장 툴팁 -->
        </div>
        <h4 class="sub_tit">뷰티포인트 적립안내</h4>
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
                <td>결제금액의 1%<br><span>*할인 구매 시 적립 불가</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="desc_wrap">
          <h5>유의사항</h5>
          <ul>
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
          <span>적립된 뷰티포인트는 <em>P=1</em>원가치를 지니며, 사용처별 세부 기준은 아모레몰 > 뷰티포인트 가이드에서 확인하실 수 있습니다.</span>
        </h4>
        <div class="point_info">
          <ul>
            <li>사용시 명의자 본인 방문<br><span class="sub">&#40;모바일/실물 카드 or 신분증 소지&#41;</span></li>
            <li>제품 결제시 부분 또는 전체 사용<br><span class="sub">&#40;사용처별, 제품별 상이할 수 있음&#41;</span></li>
          </ul>
        </div>
        <div class="help_wrap">
          <ul>
            <li>할인 특가, 염가 판매 등 일부 상품은 뷰티포인트 사용 대상에서 제외될 수 있으며, 뷰티포인트를 사용하여 뷰티포인트로 상품을 교환한 후 구매를 취소할 경우 차감된 포인트는 다시 적립됩니다.</li>
          </ul>
        </div>
        <h4 class="sub_tit">
          뷰티포인트 유효기간 및 소멸안내
          <span>유효기간과 소멸 기준을 확인하여 포인트를 관리하실 수 있습니다.</span>
        </h4>
        <div class="desc_wrap">
          <h5>유의사항</h5>
          <ul>
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
            <li>뷰티포인트 카드 미소지 등의 이유로 현장에서 적립을 받지 못하셨을 경우, 구매일로부터 60일 이내에 제품 구매 매장에 구매 영수증이나 카드대금 청구서를 제시하면 뷰티포인트 적립이 가능합니다.</li>
            <li>내부 심사기준에 따라 특정 브랜드 구매 편중 및 적립 과다로 비정상적으로 판단될 경우 뷰티포인트가 적립되지 않습니다.</li>
            <li>뷰티포인트 적립률은 회사 정책에 따라 사전 고지 후 변동될 수 있습니다.</li>
            <li>뷰티포인트는 제휴사 포인트 전환, 공병으로도 적립하실 수 있습니다. 자세한 내용은 아모레몰 > 뷰티포인트 가이드에서 확인하실 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div class="con vip_wrap">
        <div class="header">
          <h4>VIP 등급 안내 <span>by Amorepacific</span></h4>
          <span>뷰티포인트 회원을 위한 등급별 다양하고 특별한 혜택을 만나보세요!</span>
        </div>
        <h4 class="sub_tit">등급 산정 기준 및 혜택 안내</h4>
        <div class="table">
          <table>
            <caption>등급 산정 기준 및 혜택 안내</caption>
            <colgroup>
              <col style="width:auto" />
              <col style="width:auto" />
              <col style="width:auto" />
              <col style="width:auto" />
              <col style="width:auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">기준 구매 금액</th>
                <th scope="col">승급시 웰컴포인트<br>VIP 선정 전 구매금액</th>
                <th scope="col" colspan="2">리워드 포인트 Ⅰ<br>VIP선정 후 구매금액 (200만원 이상)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PLATINUM 플래티넘</td>
                <td>300만원 이상</td>
                <td>50,000 P</td>
                <td colspan="2" rowspan="4">20,000 P</td>
              </tr>
              <tr>
                <td>GOLD 골드</td>
                <td>150만원 이상</td>
                <td>20,000 P</td>
              </tr>
              <tr>
                <td>SILVER 실버</td>
                <td>100만원 이상</td>
                <td>10,000 P</td>
              </tr>
              <tr>
                <td>GREEN 그린</td>
                <td>50만원 이상</td>
                <td>5,000 P</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="help_wrap">
          <ul>
            <li>GREEN(그린) 등급은 21년 신설된 VIP 등급입니다.</li>
            <li>
              GR21년 VIP 선정 시 기준 기간은 20년 1월~12월입니다.<br>
              · 단, 17년 1월 이후 첫 구매 고객은 첫 구매월로부터 12개월입니다.(예: 17년 3월 첫 구매 고객의 21년 VIP 선정 기간: 20년 3월~21년 2월)<br>
              · 단, 휴면 재거래 고객은 재거래 시작월로부터 12개월입니다.
            </li>
            <li>구매 금액 집계 기간: 웰컴 포인트 - 21년 VIP 선정 전 12개월 / 리워드 포인트 I, II – 21년 VIP 선정 후 12개월</li>
          </ul>
        </div>
        <h4 class="sub_tit">혜택 적립, 소멸 안내</h4>
        <div class="table">
          <table>
            <caption>혜택 적립, 소멸 안내</caption>
            <colgroup>
              <col style="width:16%" />
              <col style="width:auto" />
              <col style="width:auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">포인트</th>
                <th scope="col" colspan="2">적립시점</th>
                <th scope="col" colspan="2">소멸시점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>승급시 웰컴 포인트</td>
                <td colspan="2"><sup>1&#41;</sup>21년 VIP 선정 월 15일 적립</td>
                <td colspan="2">플래티넘, 골드, 실버 : 적립일 포함 90일차 자정 소멸<br>그린 : 적립일로부터 90일</td>
              </tr>
              <tr>
                <td>리워드 포인트 Ⅰ</td>
                <td colspan="2">200만원 구매 월의 익월 15일 자동 적립</td>
                <td colspan="2" rowspan="2">적립일 포함 90일차 자정 소멸</td>
              </tr>
              <tr>
                <td>리워드 포인트 Ⅱ	</td>
                <td colspan="2">250만원 구매 월의 익월 15일 자동 적립</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="help_wrap">
          <ul class="none">
            <li>1&#41; 선정월 15일부터 다음달 15일까지 아모레몰에서 직접 신청</li>
            <li>* 신청방법<br>아모레몰 > 뷰티파우치 > 뷰티포인트 회원등급 > VIP 등급별 혜택 > 웰컴 포인트 적립하기</li>
          </ul>
        </div>
        <div class="desc_wrap">
          <h5>유의사항</h5>
          <ul>
            <li>회원등급 선정 기준 및 등급별 혜택은 회사 사정에 따라 변경될 수 있습니다.</li>
            <li>회원등급은 현금 결제금액&#40;할인 후 금액&#41;과 포인트 결제금액의 합산금액이 반영됩니다.&#40;고객별 집계기간 상이&#41;</li>
            <li>방문판매&#40;방판/리리코스&#41;를 통한 제품 구매 시, 수금금액을 기준으로 반영됩니다.</li>
            <li>ABC회원 혜택을 받기 위해서는 반드시 아모레퍼시픽 멤버십 ‘뷰티포인트’회원&#40;실명인증&#41;이어야 합니다.</li>
            <li>
              내부 심사기준에 따라 아래의 경우 선정이 제한될 수 있습니다.<br>
              <ul>
                <li>선정시점의 통합 탈퇴고객</li>
                <li>휴대번호 비정상&#40;3회 이상 중복, 번호 미기재, 번호오류 등&#41;</li>
                <li>특정 브랜드 구매 편중 및 적립 과다로 비정상적으로 판단될 경우</li>
                <li>직원&#40;판매사원 및 가맹점주&#41;</li>
                <li>카운셀러/뷰레이터 전화번호로 고객이 등록</li>
              </ul>
            </li>
            <li>VIP 선정기준 및 혜택에 대한 더욱 자세한 안내는 아모레몰 > 마이페이지 > 통합 회원 등급 혜택에서 확인하실 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="con mobile_app">
      <div class="download">
        <h4>모바일 APP으로<br>더 간편하게! 더 특별하게!</h4>
        <ul>
          <li>나에게 맞는 세일/혜택 소식들을 PUSH로 가장 먼저!</li>
          <li>매장에서 구매한 영수증도 APP에서 간편 확인</li>
          <li>오직 APP에서만 진행하는 전용 이벤트</li>
          <li>신규 가입하면 총 70,000원 쿠폰팩 즉시 발급!</li>
        </ul>
        <div class="btn_wrap">
          <Button class="btn_outline_big" txt="Google Play" />
          <Button class="btn_outline_big" txt="App Store" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { modal } from '~/assets/js/common-ui'

definePageMeta({
  layout:'pc-category'
});

import { sampleSlide } from '~/test/data/publish/dummyData.js'

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

/* swiper option */
const setSwiper = ref(null);
const onSwiper = (swiper) => setSwiper.value = swiper;
const swiper_options = {
  slidesPerView: 'auto',
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay:3000,
    disableOnInteraction:false,
  },
  speed:1000,
  observer:true,
  observeParents:true,
}
/* swiper option */

onMounted(() => {
  document.querySelectorAll('#membership_tab li').forEach((item,idx) => {
    item.addEventListener('click', () => {
      const section = document.querySelectorAll('section.con');
      section.forEach((item) => item.classList.remove('show'));
      section[idx].classList.add('show');

      /* swiper 탭 이동시 autoplay 버그해결 */
      idx === 0 ?setSwiper.value.autoplay.start() : setSwiper.value.autoplay.stop();
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
});

const toggle_btn = (e) => {
  e.target.closest('.detail_wrap').classList.toggle('active');
};

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type:String,
    default:'default'
  },
  link: {
      type: String,
      default: '#none'
  }
});

</script>
<style lang="scss" scoped>
.title_wrap {
  padding:0 20px;
  margin:60px auto 30px;
}

.user_wrap {
  margin-top:30px;
  padding:40px;
  background:#F3F3F3;
  display:flex;
  justify-content:space-between;
  &.hide {
    display:none;
  }
  .user_grade {
    h3 {
      margin-bottom:20px;
      font-size:28px;
      font-weight:300;
      line-height:36px;
    }
    .user_list {
      font-size:14px;
      font-weight:400;
      line-height:1.29em;
      display:flex;
      flex-direction:column;
      gap:10px;
      li {
        display:flex;
        align-items:center;
        span {
          &:first-child {
            width:132px;
            color:#888;
          }
          &:last-child {
            font-weight:500;
          }
        }
      }
    }
    .grade {
      width:720px;
      margin-top:45px;
      &.vip {
        .grade_bar {
          &:before{
            background:#12b560;
            animation: vip_bar 2s forwards;
          }
          &:after {
            animation: vip_bullet 2s forwards;
          }
        }
        .txt {
          span.t1, span.t2 {
            color:#009D5E;
          }
        }
      }
      &.gtclub {
        .grade_bar {
          &:before{
            background:#12b560;
            animation: gtclub_bar 2s forwards;
          }
          &:after {
            animation: gtclub_bullet 2s forwards;
          }
        }
        .txt {
          span.t1, span.t2, span.t3 {
            color:#009D5E;
          }
        }
      }
      .grade_bar {
        height:8px;
        font-size:0;
        background:#EEE;
        position:relative;
        &:before {
          content:'';
          height:100%;
          display:block;
        }
        &:after {
          content:'';
          width:20px;
          height:20px;
          background:#12b560;
          border-radius:50%;
          filter:drop-shadow(0 1px 3px rgba(0,0,0,0.2));
          position:absolute;
          top:-6px;
          left:-10px;
        }
      }
      .txt {
        margin-top:12px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        span {
          color:#999;
          font-size:13px;
          line-height:1.23em;
          &.t1 {
            color:#009D5E;
          }
          &.t2 {
            margin-left:40px;
          }
        }
      }
    }
  }
  > ul {
    margin-top:10px;
    display:flex;
    gap:30px;
    > li {
      min-width:100px;
      display:flex;
      flex-direction:column;
      align-items:center;
      &:before {
        content:'';
        width:40px;
        height:40px;
        margin-bottom:20px;
        background:url('~/assets/images/common/icon_split.png') no-repeat;
        background-size:250px auto;
        display:block;
      }
      &.point{
        &:before {
          background-position:-170px -210px;
        }
        button {
          width:16px;
          height:16px;
          margin-left:6px;
          background-image:url('~/assets/mo_images/common/icon_split.png');
          background-position:-230px -20px;
        }
      }
      &.coupon{
        &:before {
          background-position:-210px -210px;
        }
      }
      > p {
        font-size:14px;
        font-weight:500;
        line-height:1.29em;
        display:flex;
        align-items:center;
      }
      span {
        width:100%;
        margin-top:5px;
        font-size:14px;
        line-height:1.29em;
        text-align:center;
        strong {
          margin-right:5px;
          font-size:24px;
          font-weight:700;
          line-height:29px;
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
    margin:100px 0 20px;
    h3 {
      margin-bottom:5px;
      color:#222;
      font-size:24px;
      font-weight:600;
      line-height:1.33em;
    }
    span {
      color:#666;
      font-size:14px;
      line-height:1.57em;
    }
  }

  .benefit {
    .benefit_con {
      padding:15px 30px;
      border:1px solid #EEE;
      box-shadow:0 2px 5px rgba(0,0,0,0.05);
      border-radius:3px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      position:relative;
      ul {
        li {
          width:670px;
          padding:20px 0;
          font-size:20px;
          border-bottom:1px solid #F5F5F5;
          display:flex;
          align-items:center;
          justify-content:space-between;
          &:after {
            content:'';
            width:48px;
            height:48px;
          }
          &:nth-child(1):after {
            background:url('/_nuxt/public/images/sam/benefitCommon1.png') no-repeat 0 0;
          }
          &:nth-child(2):after {
            background:url('/_nuxt/public/images/sam/benefitCommon2.png') no-repeat 0 0;
          }
          &:nth-child(3):after {
            background:url('/_nuxt/public/images/sam/benefitCommon5.png') no-repeat 0 0;
          }
          p {
            display:flex;
            flex-direction:column;
            span {
              color:#999;
              font-size:13px;
              line-height:1.23em;
            }
          }
        }
      }
    }
    .detail_wrap {
      margin-top:15px;
      border:1px solid #EEE;
      border-radius:3px;
      position:relative;
      &.active {
        button {
          &:after {
            transform:rotate(0deg);
          }
        }
        >div {
          display:block;
        }
      }
      button {
        width:100%;
        padding-left:30px;
        color:#222;
        font-size:16px;
        font-weight:600;
        font-family:inherit;
        line-height:70px;
        background:#FCFCFD;
        display:flex;
        align-items:center;
        justify-content:space-between;
        &:after {
          content:'';
          width:20px;
          height:20px;
          margin-right:30px;
          background:url('~/assets/images/common/icon_split.png') no-repeat -210px -60px;
          background-size:250px auto;
          display:block;
          transform:rotate(-180deg);
        }
      }
      >div {
        padding:30px;
        border-top:1px solid #EEE;
        display:none;
        .level {
          padding:0 100px;
          display:flex;
          justify-content:center;
          gap:60px;
          li {
            flex:1;
            padding-right:60px;
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            align-items:center;
            border-right:1px solid #F5F5F5;
            p {
              margin-bottom:15px;
              color:#333;
              font-size:18px;
              font-weight:600;
              line-height:30px;
              display:flex;
              align-items:center;
              gap:8px;
              &:before {
                content:'';
                width:30px;
                height:30px;
                display:block;
              }
            }
            span {
              color:#666;
              font-size:14px;
              em {
                color:#222;
              }
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
          padding:30px;
          margin-top:30px;
          border:1px solid #EEE;
          background:#FCFCFD;
          li {
            margin-top:5px;
            color:#888;
            font-size:13px;
            line-height:1.54em;
            span {
              color:#EB5B54;
            }
            &:first-child {
              margin-top:0;
            }
            &:before {
              content:'·';
              display:inline-block;
              margin-right:5px;
              color:#888;
            }
          }
        }
      }
    }
  }

  .greentea {
    :deep(.swiper-slide) {
      width:fit-content;
      .item {
        img {
          width:370px;
          height:230px;
        }
        p {
          margin-top:15px;
          color:#333;
          font-size:14px;
          font-weight:500;
          strong {
            color:#00BC70;
            font-weight:600;
          }
        }
      }
    }
  }

  &.beauty_point {
    :deep(.tab_wrap) {
      margin:60px 0 50px;
      border-bottom:1px solid #EEE;
      ul {
        gap:0 60px;
      }
      li {
        flex:unset;
        &.current {
          button {
            border-bottom-color:#009D5E;
            em {
              color:#00BC70;
            }
          }
        }
        button {
          width:auto;
          height:40px;
          font-family:inherit;
          border:0;
          border-bottom:2px solid #fff;
          display:flex;
          align-items:flex-start;
          em {
            height:100%;
            padding:0;
            color:#666;
            font-weight:600;
          }
        }
      }
    }
    .con {
      display:none;
      &.show {
        display:block;
      }
      .header {
        width:700px;
        height:140px;
        margin:10px auto 0;
        padding-left:170px;
        background:url('~/assets/images/common/img_beauty_logo.png') no-repeat 0 0;
        display:flex;
        flex-direction:column;
        justify-content:center;
        letter-spacing: -0.01em;
        position:relative;
        h4 {
          font-size:20px;
          font-weight:600;
          line-height:1.2em;
          >span {
            margin-left:10px;
            color:#333;
            font-size:16px;
            font-weight:400;
            display:inline-block;
          }
        }
        >p {
          margin:10px 0 0;
          font-size:16px;
          line-height:18px;
        }
        span {
          margin:20px 0 0;
          color:#888;
          font-size:14px;
          line-height:18px;
          display:flex;
          align-items:center;
          gap:15px;
        }
        :deep(button.btn_shop) {
          width:68px;
          height:24px;
          color:#999;
          font-size:10px;
          font-family:inherit;
          line-height:22px;
          border-color:#999;
          position:absolute;
          bottom:0;
          right:20px;
          em {
            padding:0;
            color:#999;
            font-size:10px;
            font-weight:600;
          }
        }
      }
      >h4 {
        margin:100px 0 20px;
        color:#000;
        font-size:22px;
        font-weight:600;
        line-height:1.55;
        span {
          margin-top:6px;
          color:#666;
          font-weight:400;
          line-height:1.71em;
          display:block;
          em {
            color:#00BC70;
            font-weight:500;
          }
        }
      }
      .table {
        border-top:2px solid #000;
        position:relative;
        table {
          width:100%;
          border-collapse:collapse;
          border:0;
          table-layout:fixed;
          caption {
            position:absolute;
            z-index:-1;
            font-size:0;
          }
          th {
            padding:15px 20px;
            border-bottom:1px solid #EEE;
            border-left:1px solid #EEE;
            color:#000;
            font-size:14px;
            font-weight:500;
            line-height:1.5;
            text-align:center;
            background:#F5F5F5;
          }
          td {
            padding:21px 20px;
            color:#333;
            font-size:16px;
            line-height:1.5;
            text-align:center;
            border-left:1px solid #EEE;
            border-bottom:1px solid #EEE;
            span {
              color:#777;
              font-size:14px;
            }
            sup {
              font-size:10px;
              line-height:12px;
            }
          }
          th:first-child,
          td:first-child {
            border-left:0;
          }
        }
      }
      .desc_wrap {
        margin-top:20px;
        padding:30px;
        border:1px solid #EEE;
        background:#FCFCFD;
        h5 {
          margin-bottom:20px;
          color:#333;
          font-size:16px;
          font-weight:500;
          line-height:20px;
        }
        ul {
          li {
            padding-left:16px;
            margin-top:10px;
            color:#555;
            line-height:1.43em;
            position:relative;
            &.point {
              color:#EB5B54;
            }
            &:before {
              content:'※';
              color:inherit;
              position:absolute;
              top:0;
              left:0;
            }
            &:first-child {
              margin-top:0;
            }
            >ul {
              margin-top:5px;
              li {
                margin-top:5px;
                color:#888;
                &:first-child {
                  margin-top:0;
                }
                &:before {
                  content: '·';
                }
              }
            }
          }
        }
      }
      .point_info {
        padding:40px 0;
        border:1px solid #EEE;
        background:#FCFCFD;
        ul {
          display:flex;
          li {
            min-height:90px;
            padding-left:115px;
            margin-left:60px;
            font-size: 16px;
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            background:url('/_nuxt/public/images/sam/icon_point01.png') no-repeat 0 0;
            &:last-child {
              background:url('/_nuxt/public/images/sam/icon_point02.png') no-repeat 0 0;
            }
            span {
              line-height:1.2;
            }
          }
        }
      }
      .help_wrap {
        margin-top:15px;
        .none {
          li {
            padding-left:0;
            &:before {
              content:none;
            }
          }
        }
        li {
          padding-left:16px;
          margin-top:5px;
          color:#888;
          font-size:13px;
          line-height:1.54;
          position:relative;
          &:before {
            content:'※';
            position:absolute;
            top:0;
            left:0;
          }
          &:first-child {
            margin-top:0;
          }
        }
      }
    }
  }

  &.mobile_app {
    .download {
      height:750px;
      padding:0 0 110px 700px;
      margin-top:60px;
      background:url('/_nuxt/public/images/sam/img_app_down.png') no-repeat left top;
      display:flex;
      flex-direction:column;
      justify-content:flex-end;
      h4 {
        margin-bottom:25px;
        color:#000;
        font-size:32px;
        line-height:1.12em;
      }
      ul {
        li {
          padding-left:12px;
          margin-top:15px;
          color:#666;
          font-size:16px;
          line-height:1.25em;
          position:relative;
          &:before {
            content:'';
            width:2px;
            height:2px;
            background:#666;
            position:absolute;
            top:9px;
            left:0;
          }
          &:first-child {
            margin-top:0;
          }
        }
      }
      .btn_wrap {
        margin:105px 0 44px;
        display:flex;
        gap:0 10px;
        :deep(button) {
          width:285px;
          border-color:#DDD;
          em {
            font-size:0;
          }
          &:first-child {
            background:url('~/assets/images/common/ci_android.png') no-repeat center;
          }
          &:last-child {
            background:url('~/assets/images/common/ci_ios.png') no-repeat center;
          }
        }
      }
    }
  }
}

.modal_wrap.layer {
  top:unset;
  right:unset;
  bottom:unset;
  left:unset;
  .modal_container {
    .modal_header {
      padding: 0;
      border-bottom: 0;

      .btn_close {
        width: 18px;
        height: 18px;
        top: 10px;
        right: 10px;

        &:before,
        &:after {
          border-top: 2px solid #000;
        }
      }
    }
  }

  .modal_content {
    padding: 30px 20px;

    h3 {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #000;
    }

    p {
      font-size: 13px;
      color: #666;
      line-height: 18px;
      white-space: nowrap;

      em {
        font-weight: 600;
      }
    }
  }
}

@keyframes vip_bar {
  0% {
    width:0;
  }
  100% {
    width:50%;
  }
}
@keyframes vip_bullet {
  0% {
    left:-1%;
  }
  100% {
    left:49%;
  }
}
@keyframes gtclub_bar {
  0% {
    width:0;
  }
  100% {
    width:100%;
  }
}
@keyframes gtclub_bullet {
  0% {
    left:-1%;
  }
  100% {
    left:99%;
  }
}
</style>
