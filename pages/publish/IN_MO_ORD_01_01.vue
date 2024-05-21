<template>
  <div class="inner">
    <section class="orderer_info">
      <div class="sub_title_wrap">
        <div>
          <h3>주문자 정보
          </h3>
        </div>
        <div class="btn_wrap">
          <Button txt="변경" class="btn_ change"/>
          <Button txt="닫기" class="btn_ close"/>
        </div>
      </div>
      <span class="name">김이안</span>
      <em>000-0000-5000</em>
      <ul>
        <li>
          <Inputs _type="text" _placeholder="주문자 이름을 입력해주세요." />
        </li>
        <li>
          <Inputs _type="text" _placeholder='휴대폰번호 입력("-"제외)' />
        </li>
        <li>
          <Button txt="변경완료" class="btn_outline"/>
        </li>
      </ul>
    </section>
    <section class="addr_info">
      <div class="sub_title_wrap">
        <div>
          <h3>배송지 정보
          </h3>
        </div>
        <div class="btn_wrap">
          <Button txt="등록/변경" @click="modal.open('ord_addr_change', 'fullMo')"/>
        </div>
      </div>
      <article>
        <dl>
          <dt>
            <em>기본 배송지</em>
            <span class="name">김이안</span>
            <i>010-0000-5000</i>
          </dt>
          <dd>(22275) 서울특별시 강서구 리앙에이지</dd>
        </dl>
        <div>
          <Inputs _type="checkbox" _text="안심번호 사용" /><Icons class="tooltip" @click="modal.open('relief_num', 'alert')" />
        </div>
        <Selectbox
          :options="[
          { val: '', txt: '배송 요청사항을 선택해 주세요.' },
          { val: '부재 시 경비(관리)실에 맡겨주세요.', txt: '부재 시 경비(관리)실에 맡겨주세요.' },
          { val: '부재 시 문 앞에 놓아주세요.', txt: '부재 시 문 앞에 놓아주세요.' },
          { val: '파손의 위험이 있는 제품이 있으니, 배송에 주의해주세요.', txt: '파손의 위험이 있는 제품이 있으니, 배송에 주의해주세요.' },
          { val: '배송 전에 연락주세요.', txt: '배송 전에 연락주세요.' },
          { val: 'directly', txt: '메세지 직접입력' },
        ]" />
        <Inputs _type="text" _placeholder="배송 메세지를 직업 앱력해주세요(최대 20자)" />
      </article>
    </section>

    <section class="order_info">
      <div class="sub_title_wrap">
        <div>
          <h3>주문 제품
          </h3>
        </div>
        <p>3개</p>
      </div>
      <ul>
        <li v-for="(item, idx) in order_info_goods" :key="idx">
          <div>
            <a href="#none"><img src="/_nuxt/public/images/sam/36804_l_S_90.png" alt=""></a>
          </div>
          <dl>
            <dt>
              <span>{{item.title}}</span>
              <em>{{ item.count }}</em>
              <i v-if="item.date">{{ item.date }}</i>
            </dt>
            <dd>
              <em>{{item.point  }}</em>
              <span>{{item.price}}</span>
            </dd>
          </dl>
        </li>
      </ul>
      <article>
        <p>
            친환경 종이 완충재로 포장하여 안전하게 보내드립니다.
          <Icons class="tooltip" @click="modal.open('coupon_info', 'alert')" />
        </p>
        <div class="more_btns">
          <button class="more_list active" @click="show($event)">
            <span>더보기</span>
         </button>
          <button class="more_close" @click="hide($event)">
            <span>닫기</span>
          </button>
      </div>
      </article>
    </section>


    <section class="point">
      <div class="sub_title_wrap">
        <div>
          <h3>쿠폰/포인트
          </h3>
        </div>
        <Icons class="tooltip" @click="modal.open('coupon_info', 'alert')" />
      </div>
      <dl>
        <dt>
          <span>쿠폰</span>
          <em>0장 적용 가능</em>
        </dt>
        <dd>
          <Selectbox
              :options="[
              { val: 'value', txt: '적용 가능한 쿠폰이 없습니다.' },
              { val: 'value', txt: '옵션02' }
          ]" />
        </dd>
      </dl>
      <dl>
        <dt>
          <span>뷰티포인트</span>
          <em>0 P</em>
        </dt>
        <dd>
          <div class="multi_form">
            <Inputs _type="text" _placeholder="" _value="0P" />
            <Button txt="모두 사용" class="btn_outline" />
          </div>
        </dd>
      </dl>
    </section>

    <section class="odgift">
      <div class="sub_title_wrap">
        <div>
          <h3>구매금액대 증정품
          </h3>
        </div>
        <p class="explain">설명글설명글설명글설명글설명글</p>
      </div>
      <ul>
        <li>
          <p>총 상품 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><Icons class="tooltip" /><em>2,500</em>원</strong>
              <p>
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </section>

    <section class="pay_method">
      <div class="sub_title_wrap">
        <div>
          <h3>결제수단
          </h3>
        </div>
        <p class="explain">설명글설명글설명글설명글설명글</p>
      </div>
      <ul>
        <li>
          <p>총 상품 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><Icons class="tooltip" /><em>2,500</em>원</strong>
              <p>
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </section>

    <section class="payment">
      <div class="sub_title_wrap">
        <div>
          <h3>결제 예정 금액
          </h3>
        </div>
      </div>
      <ul>
        <li>
          <p>총 상품 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><em>2,500</em>원</strong>
              <p>
                <Icons class="tooltip" @click="modal.open('beauty_point', 'full')" />
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </section>

    <section class="ord_agree">
      <Inputs _type="checkbox" _text="구매 조건 및 결제 진행 동의" />
      <ul class="bul_list dot">
        <li>
          주문할 제품의 제품명, 제품가격, 배송정보를 확인하였으며, 구매 진행에 동의합니다.(전자상거래법 제8조 제2항)
        </li>
        <li>
          미성년자가 체결한 계약은 법정대리인이 동의하지 않는 경우, 본인 또는 법정대리인이 취소할 수 있습니다.
        </li>
      </ul>
    </section>
  </div>

  <!-- modal -->

  <div class="modal_wrap" id="ord_addr_change">
    <div class="modal_container">
        <div class="modal_header">
            <h2>배송지 등록/변경</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <section>
            <Button class="btn_outline" txt="새배송지 추가" @click="modal.open('address_add_modal', 'fullMo');"/>
          </section>
          <ul class="adress_wrap">
            <li v-for="(item, idx) in adress_list" :key="idx" class="tab_title" @click="tab_click($event)">
              <dl>
                <dt>
                  <span>{{item.name}}</span>
                  <em v-if="item.on">{{ item.on }}</em>
                </dt>
                <dd>
                  <Button class="btn_outline" txt="수정" @click="modal.open('address_modify_modal', 'fullMo');"/>
                  <Button class="btn_outline" txt="삭제" @click="modal.open('delete_modal', 'alert');"/>
                </dd>
              </dl>
              <p>{{item.tel}}</p>
              <span>{{ item.adress }}</span>
            </li>
          </ul>
          <Inputs _type="checkbox" _text="선택한 배송지를 다음에도 사용" />
        </div>
        <div class="modal_footer">
            <Button txt="배송지 선택" class="btn_ confirm" />
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
        <div class="modal_header">
            <h2>배송지 삭제</h2>
        </div>
        <div class="modal_content">
            <div>등록된 배송지를 삭제 하시겠습니까?</div>
        </div>
        <div class="modal_footer">
            <Button class="btn_ confirm" txt="확인" />
            <Button txt="취소" @click="modal.close(this);"/>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" id="address_add_modal">
    <div class="modal_container">
        <div class="modal_header">
            <h2>
              배송지 추가
            </h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <section>
              <Inputs _type="text" _placeholder="도로명, 건물명, 번지로 검색해주세요." />
              <article>
                <a href="#none">CU 편의점 찾기</a>
                <a href="#none">GS 편의점 찾기</a>
                <a href="#none">군부대 배송안내<Icons class="tooltip" @click="modal.open('shippingArmyInfo', 'full')" /></a>
              </article>
          </section>
          <div>
            <h3>
              검색결과
              <span>1건</span>
            </h3>
            <div class="res_address_wrap" @click="[setFilter($event), show_hide()]">
              <p>
                <span class="flag">도로명</span>
                서울특별시 강서구 양천로 551-17
              </p>
              <p>
                <span class="flag">지번</span>
                서울특별시 강서구 가양동 449-4
              </p>
              <a href="#none"></a>
            </div>
          </div>
            <ul>
              <li>
                <Inputs _type="text" _placeholder="상세주소" :isError="false" _err_text="상세주소를 입력해주세요." />
                <span class="error">상세주소를 입력해주세요.</span>
              </li>
              <li>
                <Inputs _type="text" _placeholder="배송지명" :isError="false" _err_text="배송지명을 입력해주세요." />
                <span class="error">배송지명을 입력해주세요.</span>
              </li>
              <li>
                <Inputs _type="text" _placeholder="받으시는 분" :isError="false" _err_text="받으시는 분 이름을 입력해주세요." />
                <span class="error">받으시는 분 이름을 입력해주세요.</span>
              </li>
              <li>
                <Inputs _type="text" _placeholder="휴대폰번호 입력('-')제외" :isError="false" _err_text="휴대폰 번호를 확인해주세요." />
                <span class="error">휴대폰 번호를 확인해주세요.</span>
              </li>
              <li class="chk_address">
                <Inputs _type="checkbox" _text="기본배송지 사용" />
              </li>
              <li class="chk_agree">
                <Inputs _type="checkbox" _text="개인정보 수집동의" /><a @click="modal.open('personalinfo', 'fullMo')">자세히보기</a>
              </li>
            </ul>
        </div>
        <div class="modal_footer">
            <Button txt="배송지 등록" class="btn_ confirm" />
        </div>
    </div>
  </div>


  <div class="modal_wrap" id="shippingArmyInfo">
    <div class="modal_container">
        <div class="modal_header">
            <h2>군부대 배송 안내</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <p>
            <strong>- 사서함 주소</strong>
            <strong>- 배송지 명이 ‘부대’일 시 우체국 택배로 배송되며, 그 외에는 CJ택배로 배송됩니다.</strong>
          </p>
          <ol>
            <li>우체국 택배 서비스는 군부대 배송의 경우에만 가능합니다.</li>
            <li>수신인의 군 부대명 / 사서함 번호를 정확하게 기재하셔야 배송됩니다.</li>
            <li><em>군 부대 발송 택배는 우체국 택배만 가능하기 때문에, 1차 CJ 택배 출고 → 2차 우체국 택배 이관 출고하여
                최종 발송</em> 됩니다. 택배 송장 번호 확인 시, CJ 택배 송장으로 표기되며 최종 우체국 송장 번호는
                고객 상담실로 문의 시 확인 <br>가능합니다. (1:1 상담 혹은 080 유선상담)
                위의 특수한 배송 절차로 인해 일반 배송보다 배송일이 2~3일 정도 더 <br>소요될 수 있음을 안내 드립니다.
            </li>
            <li>
              <em>군부대 배송안내에 따른 기재를 정확하게 하지 않으실 경우, 이니스프리 물류 쪽으로 다시 반입</em>되기 때문에 배송 <br>지연,
              <em>왕복 배송비 5,000원을 입금</em>해 주셔야 합니다. '사서함 주소' 또는 '부대'를 입력해 주세요!
            </li>
            <li>군부대 배송건은 교환/반품접수시 부대 내 택배기사님 방문이 불가하여 직접 반품처리 해주셔야 합니다.<br>
                이점 양해 부탁드립니다.
            </li>
          </ol>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" id="personalinfo">
    <div class="modal_container">
        <div class="modal_header">
            <h2>개인정보 수집동의</h2>
            <button class="btn_close" @click="[modal.close(this)];">닫기</button>
        </div>
        <div class="modal_content">
          <p>㈜이니스프리는 다음과 같이 서비스 제공을 위한 최소한의 이용자의 개인정보를 수집 및 이용하고 있습니다.</p>
          <div class="table_wrap">
            <table>
                <caption>개인정보 수집동의</caption>
                <colgroup>
                    <col style="width:100px;">
                </colgroup>
                <tbody>
                  <tr>
                    <th>수집항목</th>
                    <td>[필수] 이름(상품수령인), 주소(상품수령지), 휴대폰번호</td>
                  </tr>
                  <tr>
                    <th>수집이용/<br>목적</th>
                    <td>배송지 등록 및<br> 주문 편의 목적</td>
                  </tr>
                  <tr>
                    <th>이용/<br>보유기간</th>
                    <td>회원탈외 또는<br> 배송지 정보 삭제 시까지</td>
                  </tr>
                </tbody>
            </table>
          </div>
          <p>※ 귀하는 개인정보 수집 및 이용에 거부할 수 있습니다. 단, 거부하는 경우 제품을 구매 하실 수 없습니다.</p>
        </div>
    </div>
  </div>

  <div class="modal_wrap" id="address_modify_modal">
    <div class="modal_container">
        <div class="modal_header">
            <h2>배송지 수정</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <ul>
            <li>
              <Inputs _type="text" _placeholder="배송지명" :isError="false" _err_text="배송지명을 입력해주세요." />
              <span class="error">배송지명을 입력해주세요.</span>
            </li>
            <li>
              <Inputs _type="text" _placeholder="받으시는분" :isError="false" _err_text="배송지명을 받으시는 분 이름을 입력해주세요." />
              <span class="error">받으시는 분 이름을 입력해주세요.</span>
            </li>
            <li>
              <Inputs _type="text" _placeholder="휴대폰번호 입력('-')제외" :isError="false" _err_text="휴대폰 번호를 확인해주세요." />
              <span class="error">휴대폰 번호를 확인해주세요.</span>
            </li>
            <li>
              <div class="multi_form">
                <Inputs _type="text" _placeholder="문구를 입력해주세요" />
                <Button class="btn_outline" txt="주소검색" />
              </div>
              <Inputs _type="text" _placeholder="" />
            </li>
            <li>
              <Inputs _type="text" _placeholder="" :isError="false" _err_text="상세주소를 입력해주세요." />
              <span class="error">상세주소를 입력해주세요.</span>
            </li>

            <li class="chk_army">
              <a href="#none">군부대 배송안내<Icons class="tooltip" @click="modal.open('shippingArmyInfo', 'full')" /></a>
            </li>
            <li class="chk_agree">
              <div>
                <Inputs _type="checkbox" _text="개인정보 수집동의" />
                <a @click="modal.open('personalinfo', 'fullMo')">자세히보기</a>
              </div>
              <span class="error">개인정보 수집에 동의해주셔야 배송지 저장 가능합니다.</span>
            </li>
          </ul>
        </div>
        <div class="modal_footer">
            <Button txt="배송지 등록" class="btn_ confirm" />
        </div>
    </div>
  </div>

  <div class="modal_wrap" id="relief_num">
    <div class="modal_container">
        <div class="modal_header">
            <h2>안심번호 서비스 안내</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <p>
            고객님의 실제 휴대폰번호와 연락처가 노출되지 않도록 1회성 임시번호(050-000-0000)를 제공하는 서비스 입니다.
          </p>
          <ul class="bul_list dot">
            <li>판매자/택배사에 안심번호로 전달되므로 개인정보 유출을 사전에 방지할 수 있습니다. (택배상자에 안심번호 표시)</li>
            <li>배송완료 후 일정시간이 지나면 안심번호는 자동으로 해제됩니다.</li>
            <li>안심번호 서비스는 LMS/MMS 사용이 불가합니다.</li>
          </ul>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" id="coupon_info">
    <div class="modal_container">
        <div class="modal_header">
            <h2>사용 가능한 쿠폰 안내</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <ul class="bul_list dot">
            <li>쿠폰은 조건에 따라 적용이 되지 않을 수 있습니다.</li>
            <li>쿠폰 사용 후, 최종 결제 금액에 대하여 뷰티포인트가 산정/적립 됩니다. (뷰티포인트 사용분 및 배송비제외)</li>
            <li>쿠폰 사용 요건에 따라 사은품이 지급되지 않을 수 있습니다. 최종 주문 완료 후, &lt;마이페이지-주문내역-사은품 목록&gt;에서사은품 내역을 반드시 확인해주세요.</li>
          </ul>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" id="beauty_point">
    <div class="modal_container">
        <div class="modal_header">
            <h2>뷰티포인트 적립 혜택 안내</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <ul class="bul_list dot">
            <li>뷰티포인트는 수취확인 후 <strong>15일 이후</strong>에 적립됩니다.</li>
            <li>아모레퍼시픽 뷰티포인트 비회원인 경우 적립되지 않습니다.</li>
          </ul>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

</template>

<script setup>
definePageMeta({
layout:'mo-category'
});
import { modal, setFilter } from '~/assets/js/common-ui.js'
import Button from '../../components/Button.vue';
import {adress_list, order_info_goods} from '~/test/data/publish/dummyData.js'

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});

const tab_click = (event)=>{
  let tab_title = document.querySelectorAll('.adress_wrap li')
  console.log(tab_title)
  tab_title.forEach((a)=>{
      a.classList.remove('active')
  })
  const target = event.currentTarget;
  target.classList.add('active');
}

const show_hide = ()=>{
  let target = document.querySelector('.res_address_wrap')
  target.parentElement.nextElementSibling.classList.toggle('show')
}


const show = (event) => {
  let list = document.querySelector('.ord_goods_info > dl')
  let close_btn = document.querySelector('.more_btns .more_close')
  let more_list = document.querySelector('.more_btns .more_list')
  list.classList.remove('active')
  more_list.classList.remove('active')
  close_btn.classList.add('active')
}

const hide = (event) => {
  let list = document.querySelector('.ord_goods_info > dl')
  let more_list = document.querySelector('.more_btns .more_list')
  let close_btn = document.querySelector('.more_btns .more_close')
  close_btn.classList.remove('active')
  more_list.classList.add('active')
  list.classList.add('active')
}

onMounted(() => {

/**
 * 전체보기버튼을 누르면, dl의 active가 사라진고, 전체보기버튼이 none, 닫기버튼에 active가 추가된다
 * 닫기버튼을 누르면 닫기버튼에 active가 사라지고 전체보기버튼의 active가 추가, dl의 active가 추가된다.
 */


})

</script>

<style lang="scss" scoped>


.more_btns {
  margin-top:2rem;
  border-top:0.1rem solid #EEEEEE;
  border-bottom:0.1rem solid #EEEEEE;
  display:flex;
  flex-direction:column;
  justify-content:center;
  button {
    padding:2rem;
    color: #999999;
    span {
      display:flex;
      align-items:center;
      justify-content:center;
      &::after {
        content:'';
        width:1.6rem;
        height:1.6rem;
        margin-left:0.5rem;
        background-image: url('~/assets/mo_images/common/icon_split.png');
        background-repeat:no-repeat;
        background-size:25rem;
        display:inline-block;
      }
    }
    &.more_list {
      display:none;
      span {
        &::after {
          background-position:-5px -328px;
        }
      }
      &.active {
        display:block;
      }
    }
    &.more_close {
      display:none;
      &.active {
        display:block;
      }
      span {
          &::after {
          background-position:-5px -328px;
          transform:rotate(180deg);
          }
        }
      }
  }
}

.inner {
  .name {
    color:#333;
    &::after {
      content: '·';
      margin: 0 0.3rem;
      display:inline-block;

    }
  }
  i {
    font-style:normal;
  }
  section {
    margin-left:-2.1rem;
    margin-right:-2.1rem;
    padding-left:2rem;
    padding-right:2rem;
    padding-bottom:2rem;
    border-bottom:0.5rem solid #F5F5F5;
    &:last-of-type {
      border-bottom:0;
    }
    .sub_title_wrap {
      .explain {
        margin-top:0;
        font-size:13px;
        font-weight:400;
      }
      .btn_wrap {
        display:flex;
        :deep(.btn_) {
          min-width:3.4rem;
          height:2.4rem;
          background-color:#999999;
          em {
            padding:0 0.8rem;
            font-size:1.0rem;
            font-weight:600;
          }
        }
      }
    }
    &.orderer_info {
      border-bottom:0;
      .sub_title_wrap {
        .btn_wrap {
          :deep(.btn_) {
            &.change {
              &.hide {
                display:none;
              }
            }
            &.close {
              background-color:#000000;
              display:none;
              &.active {
                display:block;
              }
            }
          }
        }
      }
      ul {
        margin-top:2rem;
        margin-left:-2.1rem;
        margin-right:-2.1rem;
        padding:3.0rem 2.1rem;
        background:#F5F5F5;
        > * {
          margin-bottom:1rem;
          &:last-of-type {
            margin-bottom:0;
          }
          & .btn_outline {
            width:100%;
            background:#fff !important;
          }
        }
      }
      > .name {
        color:#333;
        + em {
          color:#333;
        }
      }
    }
    &.addr_info {
      article {
        dl {
          dt {
            margin-bottom:0.5rem;
            display:flex;
            align-items:center;
            em {
              height: 1.8rem;
              margin-right: 1.0rem;
              padding: 0 0.5rem;
              color: #00BC70;
              font-size: 1.0rem;
              background-color: #E0FBF0;
              line-height: 1.4em;
              display: inline-flex;
              align-items: center;
            }
          }
          dd {
            color: #888888;
          }
          + div {
            margin:2rem 0;
            display:flex;
            align-items:center;
            :deep(.input_wrap) {
              flex:0 auto;
            }
          }
        }
        :deep(label.select) {
         > div {
          margin-bottom:1rem;
          }
        }
      }
    }
    &.order_info {
      padding-bottom:0;
      .sub_title_wrap {
        justify-content:flex-start;
        gap:0.5rem;
        p {
          font-size:1.6rem;
          font-weight:600;
          color:#00BC70;
        }
      }
      > ul {
        li {
          display:flex;
          &:first-of-type {
            padding-bottom:2rem;
          }
          div {
            width:6.9rem;
            height:9.2rem;
            border-radius:0.5rem;
            position:relative;
            a {
              &::after {
                content: '';
                width:100%;
                height:100%;
                border-radius:0.5rem;
                background-color:rgba(34, 34, 34, 0.02);
                position:absolute;
                top:0;
                left:0;
                z-index:1;
                overflow:hidden;
              }
            }
          }
          dl {
            margin-left:1.5rem;
            flex: 1;
            dt {
              display:flex;
              flex-direction:column;
              > * + * {
                margin-top:0.5rem;
              }
              span {
                word-wrap:break-word;
              }
              em {
                color: #999999;
                font-size: 1.2rem;
              }
              i {
                color:#EB5B54;
                font-size:1.2rem;
              }
            }
            dd {
              margin-top:1.5rem;
              display:flex;
              align-items:center;
              justify-content:flex-end;
              em {
                margin-right:0.5rem;
                color:#009D5E;
                font-size:1.2rem;
              }
              span {
                font-size:1.6rem;
                font-weight:600;
              }
            }
          }
        }
        > * + * {
          padding:2.0rem 0;
          border-top:0.1rem solid #F5F5F5;
          display:none !important;
          &.active {
            display:flex !important;
          }
         }
      }
      article {
        > p {
          padding:1.5rem 0;
          color:#666666;
          font-size:1.2rem;
          border: 0.1rem solid #EEEEEE;
          display:flex;
          align-items:center;
          justify-content:center;
          button {
            margin-left:0.5rem;
          }
        }
      }
    }
    &.point {
      .sub_title_wrap {
        justify-content:flex-start;
        .tooltip {
          margin-left:1rem;
        }
      }
      > * + * {
        margin-top:2rem;
        padding-bottom:2rem;
        border-bottom:0.1rem solid #F5F5F5;
      }
      dl {
        dt {
          font-size:1.3rem;
          span {
            color: #666666;
          }
          em {
            margin-left: 0.5rem;
            color: #00BC70;
          }
        }
        dd {
          margin-top:1.0rem;
        }
      }
    }
    &.payment {
      > ul {
        > * + * {
          margin-top:1.5rem;
        }
        li {
          width:100%;
          display:flex;
          justify-content:space-between;
          p {
            color:#666;
          }
          span {
            i {
              color:#ff0000;
              font-style:normal;
            }
            em {
              font-weight:500;
            }
          }
          dl {
            width:100%;
            margin-top:2.0rem;
            padding-top:2.0rem;
            border-top:0.1rem solid #EEEEEE;
            display:flex;
            justify-content:space-between;
            dt {
              color:#333;
              font-weight: 600;
            }
            dd {
              text-align:right;
              strong {
                em {
                  font-size:2.0rem;
                  font-weight:600;
                }
              }
              p {
                margin-top:0.4rem;
                color: #999999;
                font-size: 1.2rem;
                display:flex;
                align-items:center;
                button {
                  margin-right:0.5rem;
                }
                em {
                  color:#009D5E;
                  font-weight:400;
                  font-size:1.2rem;
                  i {
                    margin:0 0.3rem;
                    font-style:normal;
                  }
                }
              }
            }
          }
        }
      }
    }

    &.ord_agree {
      padding-top:3rem;
      :deep(.input_wrap) {
        .check {
          em {
            font-weight:300;
          }
        }
      }
      ul {
        margin-top:2rem;
        color:#888;
        font-size:1.2rem;
      }
    }
  }
}


.modal_wrap {
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  .chk_agree {
    > div {
      display:flex;
      :deep(.input_wrap) {
        flex:0 auto;
      }

    }
  }
  &#ord_addr_change {
    .modal_container {
      .modal_content {
        overflow-x:hidden;
        section {
          margin-right:-2.1rem;
          margin-left:-2.1rem;
          padding:0rem 4rem 3.0rem;
          border-bottom:0.5rem solid #F5F5F5;
          > button {
              width:100%;
              margin-top:2rem;
              vertical-align:middle;
                &.btn_outline {
                  display:flex;
                  align-items:center;
                  :deep(em) {
                    font-size:1.3rem;
                    display:flex;
                    align-items:center;
                    &::before {
                        content:'';
                        width:16px;
                        height:16px;
                        margin-right:1rem;
                        background-image: url('~/assets/mo_images/common/icon_split.png');
                        background-repeat:no-repeat;
                        background-size:250px;
                        background-position:-228px -98px;
                        display:inline-block;
                    }
                  }
                }
            }
          }
          > ul {
            margin-top:1.0rem;
            padding: 2rem;
            > * + * {
              margin-top:1rem;
            }
              li {
                padding:2.5rem 2.1rem;
                border: 0.1rem solid #EEEEEE;
                &.active {
                  border:0.2rem solid #00BC70;
                }
                  > dl {
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    + p {
                      margin:1rem 0 0.5rem;
                    }

                      dt {
                        display:flex;
                        align-items:center;
                          span {
                            margin-right:1rem;
                            color:#000;
                            font-size:1.6rem;
                            font-weight:600;
                          }
                          em {
                            padding:0.3rem;
                            color:#00BC70;
                            font-size:1.0rem;
                            background: #E0FBF0;
                          }
                      }
                      dd {
                        display:flex;
                        gap:8px;
                        :deep(button.btn_outline) {
                          height:2.4rem;
                          border:0.1rem solid #999 !important;
                          em {
                            padding:0 1rem;
                            color:#999;
                            font-size:1rem;
                            font-weight:600;
                          }
                        }
                      }
                  }
                  p {
                    color:#999;
                    font-size:1.3rem
                  }
                  span {
                    color:#666;
                    font-size:1.4rem;
                  }
              }
          }
          .input_wrap {
            padding:0 2rem;
          }
      }
      .modal_footer {
        padding:0;
        .btn_ {
          width:100%;
          height:6rem;
          background:#12b560;
          &.confirm {
            em {}
          }
        }
      }
    }
  }
  &#delete_modal {
    .modal_container {
      .modal_header {
        padding:3rem 2rem 1rem 2rem;
        border-bottom:0;
        h2 {
          font-size:1.8rem;
        }
      }
      .modal_content {
        padding:2rem 3rem 3rem 2rem;
        text-align:center;
      }
    }
  }
  &#address_modify_modal {
    .modal_container {
      .modal_content {
        overflow:hidden;
        > ul {
          margin-left:-2.1rem;
          margin-right:-2.1rem;
          padding:3rem 4rem;
          > * + * {
            margin-top:0.8rem;
          }
          li {
            font-size:1.3rem;
            > * + * {
              margin-top:0.8rem;
            }
            &.chk_army {
              margin-top:1.5rem;
              a {
                display:flex;
                align-items:center;
                justify-content:flex-end;
              }
            }
            &:last-of-type {
              margin-top:1.5rem;
              display:flex;
              flex-direction:column;

              a {
                margin-left:1rem;
                text-decoration:underline;
              }
            }
            > .multi_form {
              height:100%;
              align-items:center;
              gap:0.5rem;
              :deep(.input_wrap) {
                flex:1;
              }
              .btn_outline {
                display: block;
              }
              + .label_wrap{
                margin-top:0.8rem
              }
            }
              >.error {
                margin-top:1.0rem;
                color:#FF0000;
                font-size:1.2rem;
                display:block;
            }
          }
        }

      }
      .modal_footer {
        padding:0;
        button.btn_ {
          width:100%;
          height:6rem;
        }
      }
    }
  }
  &#address_add_modal {
    .modal_container {
      .modal_content {
        overflow:hidden;
        > section {
          margin-left:-2.1rem;
          margin-right:-2.1rem;
          padding:2rem 4.0rem 1.5rem;
          border-bottom: 0.5rem solid #F5F5F5;
          :deep(div.label_wrap) {
            &::after {
              content:'';
              width: 2.4rem;
              height: 2.4rem;
              background-image: url('~/assets/mo_images/common/icon_split.png');;
              background-repeat:no-repeat;
              background-position:0 -40px;
              background-size: 250px;
              position:absolute;
              top:50%;
              right:2.1rem;
              display:inline-block;
              transform:translateY(-50%);
            }
          }
          article {
            display:flex;
            a {
            margin:1.5rem 0rem;
            font-size:1.3rem;
            display:flex;
            align-content:center;
              &::after {
                content: '';
                width: 0.1rem;
                height: 1.4rem;
                margin: 0 1.5rem;
                background-color: #EEEEEE;
                display: block;
              }
              &:last-of-type {
                &::after {
                  display:none;
                }
              }
            }
          }
        }
        > div {
          margin-left:-2.1rem;
          margin-right:-2.1rem;
          padding:2.5rem 2.1rem 2.0rem;
          border-bottom:0.1rem solid #F5F5F5;
          position:relative;
          a {
              width: 1.6rem;
              height: 1.6rem;
              background-image: url('~/assets/mo_images/common/icon_split.png');;
              background-repeat:no-repeat;
              background-position:-1px -70px;
              background-size: 250px;
              position:absolute;
              bottom:2rem;
              right:4rem;
              display:inline-block;
              transition:all 0.2s;
              transform: rotate(0deg);
          }
          h3 {
            margin-left:-2.1rem;
            margin-right:-2.1rem;
            padding:0 4rem 2.5rem;
            font-size:1.6rem;
            border-bottom:0.1rem solid #F5F5F5;
            display:flex;
            align-items:center;
            > span {
              margin-left: 1.0rem;
              color: #00BC70;
              font-size: 1.3rem;
            }
          }
          .res_address_wrap {
            margin-top:2.5rem;
            > * + * {
              margin-top:0.8rem;
            }
              p {
              padding:0 2.1rem;
              display:flex;
              align-items:center;
              gap:1.0rem;
              span {
                width:3.6rem;
                height:1.6rem;
                color:#666;
                font-size:1rem;
                background:#eee;
                text-align:center;
                display:inline-block;
              }
            }
            &.active {
              a {
                transform:rotate(180deg);
              }
            }
          }
        }
        > ul {
          margin-left:-2.1rem;
          margin-right:-2.1rem;
          padding:2.5rem 4rem 2.0rem;
          background:#F5F5F5;
          display:none;
          &.show{
            display:block;
          }
          > * + * {
            margin-top:0.8rem;
          }
          li {
            font-size:1.3rem;
            &.chk_address {
              margin-top:1.5rem;
            }
            &:last-of-type {
              margin-top:1.5rem;
              display:flex;
              align-items:center;
              a {
                margin-left:1rem;
                text-decoration:underline;
              }
            }
              >.error {
                margin-top:1.0rem;
                color:#FF0000;
                font-size:1.2rem;
                display:block;
            }
          }
        }

      }
      .modal_footer {
        padding:0;
        button.btn_ {
          width:100%;
          height:6rem;
        }
      }
    }
  }
  &#shippingArmyInfo{
    z-index:20;
    .modal_container {
      .modal_header {
        border-bottom:0;
        h2 {
          padding-top:1.5rem;
          font-size:1.8rem;
        }
      }
      .modal_content {
        padding:0px 20px 30px;
        p {
          color: #666666;
          font-size: 13px;
          line-height: 1.54em;
          letter-spacing: -0.01em;
          display:flex;
          flex-direction:column;
          strong {
            font-weight:600;
          }
        }
        ol {
          margin:10px 0 0 15px;
          > * + * {
            margin-top:5px;
          }
          li {
            color:#888;
            font-size:13px;
            list-style-type:decimal;
              em {
              color:#d72137 !important;
            }
          }
        }
      }
    }
  }
  &#personalinfo{
    z-index:20;
    .modal_container {
      padding:3rem 2rem 3rem 2rem;
      .modal_header {
        padding: 0;
      }
      .modal_content {
        padding-top:3rem;
        p {
          color:#222;
          font-size:1.3rem;
        }
        .table_wrap {
          margin:2rem 0;
          table {
            caption {
              display:none;
            }

            tbody {
              tr {
                &:first-of-type {
                  th {
                    border-top:0.1rem solid #999;
                  }
                  td {
                    border-top:0.1rem solid #999;
                  }
                }
                &:last-of-type {
                    td {
                      color:#ff3131;
                    }
                }
                > * {
                  text-align:left;
                }
                th {
                  padding:1.1rem 1rem;
                  color:#666;
                  font-weight:normal;
                  font-size:1.2rem;
                  border-bottom: 0.1rem solid #eee;
                  background:#F5F5F5;
                }
                td {
                  padding:1.5rem 1rem;
                  color:#777777;
                  font-size: 1.3rem;
                  border-left: 0.1rem solid #eee;
                  border-bottom: 0.1rem solid #eee;
                }
              }
            }
          }
        }
      }
    }
  }
  &#relief_num, &#coupon_info, &#beauty_point {
    .modal_container {
      width: 32.3rem;
      .modal_header {
        border-bottom:0;
        h2 {
          font-size:1.8rem;
        }
      }
      .modal_content {
        padding:1rem 2rem 3rem;
        color: #666;
        p {
          font-size: 1.3rem;
          line-height: 2rem;
        }
        ul {
          margin-top:1rem;
          font-size: 1.2rem;
          li {
            line-height: 1.6rem;
          }
        }
      }
    }
  }


}


</style>
