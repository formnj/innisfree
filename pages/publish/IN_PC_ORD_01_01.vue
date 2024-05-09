<template>
  <!-- title washed -->
  <div class="title_wrap">
    <div>
      <h2>장바구니</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <section>
      <div class="sub_title_wrap">
        <div>
          <h3>주문/배송정보</h3>
        </div>
      </div>
      <div class="table_wrap">
        <table>
            <caption>주문/배송정보</caption>
            <colgroup>
                <col style="width:170px;">
            </colgroup>
            <tbody>
                <tr>
                  <th><em>*</em>주문자</th>
                  <td>
                    <Inputs _type="text" />
                  </td>
                </tr>
                <tr>
                  <th><em>*</em>연락처</th>
                  <td class="ord_sms">
                      <div>
                        <Selectbox
                              :options="[
                              { val: 'value', txt: '010' },
                              { val: 'value', txt: '011' }
                          ]" />
                          <span>-</span>
                          <Inputs _type="text" _placeholder="" value="1234"/>
                          <span>-</span>
                          <Inputs _type="text" _placeholder="" value="5678"/>
                      </div>
                  </td>
                </tr>
                <tr>
                  <th>
                      <em>*</em>
                      <span>이메일</span>
                  </th>
                  <td class="ord_email">
                    <Inputs _type="text" _placeholder="aaa@rianag.com" />
                  </td>
                </tr>
                <tr>
                  <th>
                      <span>배송지 작성</span>
                  </th>
                  <td>
                    <div class="deliveryList">
                      <p class="btn_wrap">
                        <Button  class="btn_outline" txt="새로운 배송지" @click="change($event)" />
                        <Button  class="btn_outline" txt="배송지 관리" @click="modal.open('add_list_modal', 'alert');" />
                      </p>
                      <div class="list">
                        <dl>
                          <dt>
                            <Inputs _type="radio" _text="" />
                          </dt>
                          <dd>
                            <span>
                              김이나 010-1234-5678
                              <em>기본배송지</em>
                            </span>
                            서울특별시 리앙에이지
                          </dd>
                        </dl>
                      </div>
                      <Inputs _type="checkbox" _text="안심번호 서비스 사용" />
                    </div>
                    <div class="new_address">
                      <p>
                        <Inputs _type="checkbox" _text="배송지 목록에 추가" />
                        <Inputs _type="checkbox" _text="기본 배송지로 등록" />
                        <Button class="btn_min_outline" txt="입력취소" @click="change_res($event)" />
                      </p>
                      <ul>
                        <li>
                          <span>배송지</span>
                          <p>
                            <Inputs _type="text" _placeholder="최대 10자까지 입력가능" />
                          </p>
                        </li>
                        <li>
                          <span>받으실분</span>
                          <p>
                            <Inputs _type="text" _placeholder="최대 10자까지 입력가능" />
                          </p>
                          <Inputs _type="checkbox" _text="주문자 정보와 동일" />
                        </li>
                        <li>
                          <span>주소</span>
                          <div class="multi_form">
                            <Inputs _type="text" _placeholder="문구를 입력해주세요" />
                            <Button  class="btn_outline" txt="우편번호 검색"/>
                            <Button  class="btn_outline" txt="CU 편의점 찾기"/>
                            <Button  class="btn_outline" txt="GS 편의점 찾기"/>
                          </div>
                          <Inputs _type="text" _placeholder="" />
                          <Inputs _type="text" _placeholder="" />
                          <a href="#none" @mouseover="[modal.open('shippingArmyInfo','layer'),]" >군부대 배송안내</a>
                        </li>
                        <li>
                          <span>휴대폰 번호</span>
                          <div class="phone_wrap">
                            <Selectbox
                                  :options="[
                                  { val: 'value', txt: '010' },
                                  { val: 'value', txt: '011' }
                              ]" />
                              <em>-</em>
                              <Inputs _type="text" _placeholder="" value="1234"/>
                              <em>-</em>
                              <Inputs _type="text" _placeholder="" value="5678"/>
                          </div>
                          <div class="checkbox_wrap">
                            <Inputs _type="checkbox" _text="안심번호 서비스 사용" /><Icons class="tooltip" @click="modal.open('layerTooltip', 'layer');"/>
                            <div class="modal_wrap" id="layerTooltip">
                              <div class="modal_container">
                                  <div class="modal_header">
                                      <h2>안심번호 서비스 안내</h2>
                                      <button class="btn_close" @click="modal.close(this);">닫기</button>
                                  </div>
                                  <div class="modal_content">
                                    <span>
                                      고객님의 실제 휴대폰번호와 연락처가 노출되지<br>
                                      않도록 1회성 임시번호(050-000-0000)를 제공하는<br>
                                      서비스 입니다.
                                    </span>
                                    <ul class="bullistType_01">
                                      <li>
                                        판매자/택배사에 안심번호로 전달되므로 개인정보
                                        유출을 사전에 방지할 수 있습니다.
                                        (택배상자에 안심번호 표시)
                                      </li>
                                      <li>배송완료 후 일정시간이 지나면 안심번호는 자동으로
                                          해제됩니다.
                                      </li>
                                      <li>안심번호 서비스는 LMS/MMS 사용이 불가합니다.</li>
                                    </ul>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                    <th>
                        <span>배송 요청사항</span>
                    </th>
                    <td class="shippingMsg">
                      <Selectbox
                          :options="[
                          { val: 'value', txt: '배송 요청사항을 선택 해주세요.' },
                          { val: 'value', txt: '부재시 경비(관리)실에 맡겨주세요.' },
                          { val: 'value', txt: '부재시 문앞에 놓아주세요.' },
                          { val: 'value', txt: '파손의 위험이 있는 상품이 있으니, 배송에 주의해주세요.' },
                          { val: 'value', txt: '배송전에 연락주세요.' },
                          { val: 'value', txt: '메시지 직접 입력' },
                      ]" />
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </section>

    <section class="order_info">
      <div class="sub_title_wrap">
        <div>
          <h3>주문 상품 정보</h3>
        </div>
      </div>
      <div class="table_wrap">
        <table>
            <caption>주문 상품 정보</caption>
            <colgroup>
                <col style="width:100%;">
            </colgroup>
            <tbody>
                <tr>
                  <td>
                    <a href="#none">
                      <img src="/_nuxt/public/images/sam/order_sam_01.png" alt="">
                      <div>
                        <em>5/2~15, 기간내 5개</em>
                        <p>블랙티 앰플 50mL[대용량] 스페셜 세트 + 블랙티 에센스 145mL</p>
                        <span>1개</span>
                      </div>
                    </a>
                    <p>
                      <strong>67,600 <em>원</em></strong>
                      <i>+964 P</i>
                    </p>
                  </td>
                </tr>
                <tr class="col_tr">
                  <td>
                    <a href="#none">
                      <img src="/_nuxt/public/images/sam/order_sam_01.png" alt="">
                      <div>
                        <em>5/2~15, 기간내 5개</em>
                        <p>블랙티 앰플 50mL[대용량] 스페셜 세트 + 블랙티 에센스 145mL</p>
                        <span>1개</span>
                      </div>
                    </a>
                    <p>
                      <strong>67,600 <em>원</em></strong>
                      <i>+964 P</i>
                    </p>
                  </td>
                  <td class="gifts">
                    <dl class="board_type_toggle single">
                      <dt>
                        <a href="#none">
                          그린티 씨드 세럼 대용량 + 씨드크림 (130mL+50mL) 구매 시 드리는 사은품입니다.
                          <em>버튼</em>
                        </a>
                      </dt>
                      <dd>
                        <div>
                          <img src="/_nuxt/public/images/sam/order_list_01.png" alt="">
                          <p>
                            레티놀 시카 흔적 앰플 1mL
                            <em>6개</em>
                          </p>
                        </div>
                        <div>
                          <img src="/_nuxt/public/images/sam/order_list_02.png" alt="">
                          <p>
                            레티놀 시카 흔적 앰플 1mL
                            <em>6개</em>
                          </p>
                        </div>
                      </dd>
                    </dl>

                  </td>
                </tr>
                <tr class="col_tr">
                  <td>
                    <a href="#none">
                      <img src="/_nuxt/public/images/sam/order_sam_01.png" alt="">
                      <div>
                        <em>5/2~15, 기간내 5개</em>
                        <p>블랙티 앰플 50mL[대용량] 스페셜 세트 + 블랙티 에센스 145mL</p>
                        <span>1개</span>
                      </div>
                    </a>
                    <p>
                      <strong>67,600 <em>원</em></strong>
                      <i>+964 P</i>
                    </p>
                  </td>
                  <td class="gifts">
                    <dl class="board_type_toggle single">
                      <dt>
                        <a href="#none">
                          그린티 씨드 세럼 대용량 + 씨드크림 (130mL+50mL) 구매 시 드리는 사은품입니다.
                          <em>버튼</em>
                        </a>
                      </dt>
                      <dd>
                        <div>
                          <img src="/_nuxt/public/images/sam/order_list_01.png" alt="">
                          <p>
                            레티놀 시카 흔적 앰플 1mL
                            <em>6개</em>
                          </p>
                        </div>
                        <div>
                          <img src="/_nuxt/public/images/sam/order_list_02.png" alt="">
                          <p>
                            레티놀 시카 흔적 앰플 1mL
                            <em>6개</em>
                          </p>
                        </div>
                      </dd>
                    </dl>

                  </td>
                </tr>
            </tbody>
        </table>
      </div>
      <article>
        <em>친환경 종이 완충재로 포장하여 안전하게 보내드립니다.</em>
        <Icons class="tooltip" @click="modal.open('ecoTooltip', 'layer');"/>
        <div class="modal_wrap" id="ecoTooltip">
          <div class="modal_container">
              <div class="modal_header">
                  <h2>이니스프리 배송 포장재 안내</h2>
                  <button class="btn_close" @click="modal.close(this);">닫기</button>
              </div>
              <div class="modal_content">
                <span>
                  이니스프리는 환경을 생각하는 마음으로,<br>
                  일반 플라스틱 완충제(에어캡) 대신 친환경 종이<br>
                  완충제(FSC인증)로 제품을 보호하고 있습니다.
                </span>
                <ul class="bullistType_01">
                  <li>
                    업체 배송 및 일부 제품 제외
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </article>
    </section>

    <section class="point">
      <div class="sub_title_wrap">
        <div>
          <h3>쿠폰/포인트 적용</h3>
        </div>
      </div>
      <div class="table_wrap">
        <table>
            <caption>쿠폰/포인트 적용</caption>
            <colgroup>
                <col style="width:214px;">
                <col style="">
            </colgroup>
            <tbody>
                <tr>
                    <th>
                      쿠폰 (<span>사용 가능한 쿠폰</span><em>0장</em>)
                    </th>
                    <td>
                      <Selectbox
                            :options="[
                            { val: 'value', txt: '적용 가능한 쿠폰이 없습니다.' },
                            { val: 'value', txt: '옵션02' }
                        ]" />
                      <Selectbox
                            :options="[
                            { val: 'value', txt: '적용 가능한 더블쿠폰이 없습니다.' },
                            { val: 'value', txt: '옵션02' }
                        ]" />
                      <ul class="bullistType_01">
                        <li>쿠폰은 조건에 따라 적용이 되지 않을 수 있습니다.</li>
                        <li>쿠폰 사용 후, 최종 결제 금액에 대하여 뷰티포인트가 산정/적립 됩니다. (뷰티포인트 사용분 및 배송비제외)</li>
                        <li>쿠폰 사용 요건에 따라 사은품이 지급되지 않을 수 있습니다. 최종 주문 완료 후, &lt;마이페이지-주문내역-사은품 목록&gt; 에서사은품 내역을 반드시 확인해주세요.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>뷰티포인트</th>
                    <td>
                      <div>
                        사용가능 <strong>0</strong>P / 보유 <strong>0</strong> P <Inputs _type="text" _placeholder="" value="0" /> P <Button txt="모두사용" class="btn_outline" />
                      </div>
                    </td>
                  </tr>
            </tbody>
        </table>
      </div>
    </section>

    <section class="pay_method">
      <div class="sub_title_wrap">
        <div>
          <h3>결제수단 선택</h3>
        </div>
      </div>
      <div class="table_wrap">
        <table>
            <caption>결제수단 선택</caption>
            <colgroup>
                <col style="">
            </colgroup>
            <tbody>
                <tr>
                  <td>
                    <Inputs _type="radio" _text="신용카드 결제" _name="pay_method" />
                    <Inputs _type="radio" _text="원클릭 결제" _name="pay_method"/>
                    <Inputs _type="radio" _text="다른 결제 수단" _name="pay_method"/>
                  </td>
                </tr>
            </tbody>
        </table>
      </div>
      <article class="method_card">
        <ul>
          <li></li>
        </ul>
        <a href="#none">무이자할부</a>
        <p class="tosspay">
          <span>저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금/계좌이체 거래에 대해 구매안전서비스를 적용하고 있습니다.</span>
          <Button txt="토스페이먼츠 구매안전 서비스 가입확인" class="btn_min_outline" />
        </p>
      </article>
      <article class="method_onclick">
        <div>
          <button>
            <span>대표카드를 등록해 주세요</span>
          </button>
        </div>
        <p class="tosspay">
          <span>저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금/계좌이체 거래에 대해 구매안전서비스를 적용하고 있습니다.</span>
          <Button txt="토스페이먼츠 구매안전 서비스 가입확인" class="btn_min_outline" />
        </p>
      </article>
      <article class="method_other">
        <ul>
          <li></li>
        </ul>

        <div class="paycont">
          <p>
            <strong></strong>
            <ul>
              <li></li>
            </ul>
          </p>
          <dl>
            <dt>유의사항</dt>
            <dd></dd>
          </dl>
        </div>
        <p class="tosspay">
          <span>저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금/계좌이체 거래에 대해 구매안전서비스를 적용하고 있습니다.</span>
          <Button txt="토스페이먼츠 구매안전 서비스 가입확인" class="btn_min_outline" />
        </p>
      </article>
    </section>

    <section class="soldout">
      <div class="sub_title_wrap">
        <div>
          <h3>품절 시 환불 방법</h3>
        </div>
      </div>
      <div class="table_wrap">
        <table>
            <caption>품절 시 환불 방법</caption>
            <colgroup>
                <col style="">
            </colgroup>
            <tbody>
                <tr>
                  <td>
                    <Inputs _type="radio" _text="결제 수단으로 환불 받기" />
                  </td>
                </tr>
            </tbody>
        </table>
      </div>
    </section>
  </div>



  <!-- modal -->

  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
        <div class="modal_header">
            <h2>배송지 관리</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
            <div>배송지를 삭제 하시겠습니까?</div>
        </div>
        <div class="modal_footer">
            <Button class="btn_ confirm" txt="확인" @click="close($event);"/>
            <Button txt="취소" @click="[modal.close(this), close($event)];"/>
        </div>
    </div>
    <div class="overlay" @click="[modal.close(this)], close($event);"></div>
  </div>

  <div class="modal_wrap" id="add_list_modal">
    <div class="modal_container">
        <div class="modal_header">
            <h2>배송지 목록</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <div class="list">
            <dl>
              <dt>
                <Inputs _type="radio" _text="" _name="address"/>
              </dt>
              <dd>
                <span>
                  김이나 010-1234-5678
                  <em>기본배송지</em>
                </span>
                서울특별시 리앙에이지
              </dd>
              <dd class="btn_wrap">
                <Button class='btn_outline' txt="수정" @click="[modal.open('adress_modify_modal', 'alert'), ord_addr_more($event)]"/>
              </dd>
            </dl>
            <dl>
              <dt>
                <Inputs _type="radio" _text="" _name="address" />
              </dt>
              <dd>
                <span>
                  김이나 010-1234-5678
                  <em>기본배송지</em>
                </span>
                서울특별시 리앙에이지
              </dd>
              <dd class="btn_wrap">
                <Button class='btn_outline' txt="수정" @click="[modal.open('adress_modify_modal', 'alert'), ord_addr_more($event)]"/>
                <Button class='btn_outline' txt="삭제" @click="[modal.open('delete_modal', 'alert'), ord_addr_more($event)]"/>
              </dd>
            </dl>
          </div>
        </div>
        <div class="modal_footer">
            <Button class="btn_ bg_type_02" txt="이번만 배송지 변경" />
            <Button txt="배송지 추가" @click="[modal.open('adress_add_modal', 'alert'), ord_addr_more($event) ]" />
            <Button class="btn_ confirm" txt="기본 배송지로 설정" />
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>

  <div class="modal_wrap" :id="item.modal_id" v-for="(item, idx) in Delivery_data" :key="idx">
    <div class="modal_container">
        <div class="modal_header">
            <h2>배송지 관리</h2>
            <button class="btn_close" @click="[modal.close(this), close($event)];">닫기</button>
        </div>
        <div class="modal_content">
          <Inputs _type="checkbox" _text="내 우편수신처 불러오기(선택)" v-if="item.check"/>
          <div class="table_wrap">
                <table>
                    <caption>1:1 문의작성</caption>
                    <colgroup>
                        <col style="width:170px;">
                    </colgroup>
                    <tbody>
                        <tr>
                          <th>
                            <em>*</em>
                            <span>배송지명</span>
                          </th>
                          <td>
                            <Inputs _type="text" />
                            <span class="error">배송지명을 입력해주세요</span>
                          </td>
                        </tr>
                        <tr>
                            <th>
                                <em>*</em>
                                <span>받으실 분</span>
                            </th>
                            <td>
                              <Inputs _type="text" />
                              <span class="error">받으실 분을 입력해 주세요.</span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <em>*</em>
                                <span>주소</span>
                            </th>
                            <td class="adress">
                              <div class="multi_form">
                                <Inputs _type="text" _placeholder="" />
                                <Button txt="우편번호 검색" class="btn_outline" />
                              </div>
                              <Inputs _type="text" _placeholder="" />
                              <Inputs _type="text" _placeholder="" />
                              <a href="#none" @mouseover="[modal.open('shippingArmyInfo','layer'),]" >군부대 배송안내
                              </a>
                            </td>
                        </tr>
                        <tr>
                            <th>
                              <em>*</em>
                              <span>휴대폰번호</span>
                            </th>
                            <td class="ord_sms">
                                <div>
                                  <Selectbox
                                    :options="[
                                    { val: 'value', txt: '010' },
                                    { val: 'value', txt: '012' }
                                    ]" />
                                    <span>-</span>
                                    <Inputs _type="text" _placeholder="" value="1234"/>
                                    <span>-</span>
                                    <Inputs _type="text" _placeholder="" value="5678"/>
                                </div>
                                <span class="error">휴대폰번호를 입력해 주세요.</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ul>
                  <li>
                    <Inputs _type="checkbox" _text="개인정보 수집 동의" />
                    <a class="info_more" href="#none" @click="[modal.open('personalinfo','layer'), adress_more($event)]">자세히보기</a>
                  </li>
                  <li>
                    <span class="error">개인정보 수집에 동의해주셔야 배송지 저장 가능합니다.</span>
                  </li>
                </ul>
            </div>
        </div>
        <div class="modal_footer">
            <Button txt="저장" class="btn_ confirm" />
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
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
  </div>

  <div class="modal_wrap" id="personalinfo">
    <div class="modal_container">
        <div class="modal_header">
            <h2>개인정보 수집동의</h2>
            <button class="btn_close" @click="[modal.close(this), reset($event)];">닫기</button>
        </div>
        <div class="modal_content">
          <p>㈜이니스프리는 다음과 같이 서비스 제공을 위한 최소한의 이용자의 개인정보를 수집 및 이용하고 있습니다.</p>
          <div class="table_wrap">
            <table>
                <caption>개인정보 수집동의</caption>
                <colgroup>
                    <col style="">
                    <col style="width:145px;">
                    <col style="width:184px">
                </colgroup>
                <thead>
                    <tr>
                        <th>수집항목</th>
                        <th>수집이용/목적</th>
                        <th>이용/보유기간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                          [필수] 이름(상품수령인), 주소(상품수령지), 휴대폰번호
                        </td>
                        <td>배송지 등록 및<br>주문 편의 목적</td>
                        <td>
                          <strong>
                            회원탈퇴 또는<br>
                            배송지 정보 삭제 시까지
                          </strong>
                        </td>
                      </tr>
                </tbody>
            </table>
          </div>
          <p>※ 귀하는 개인정보 수집 및 이용에 거부할 수 있습니다. 단, 거부하는 경우 제품을 구매 하실 수 없습니다.</p>
        </div>
    </div>
  </div>






  <!-- //modal -->

</template>

<script setup>
import { modal } from '~/assets/js/common-ui.js'
import {Delivery_data} from '../../test/data/publish/dummyData'

definePageMeta({
layout:'pc-ord'
});


const ord_addr_more = (event) => {
  document.querySelector('.modal_wrap#add_list_modal').classList.remove('active')
  document.querySelector('.modal_wrap#shippingArmyInfo').classList.remove('active')
}
const adress_more = (event) => {
  document.querySelector('#adress_add_modal .modal_container').style.display="none"
  document.querySelector('#adress_modify_modal .modal_container').style.display="none"
  document.querySelector('.modal_wrap#shippingArmyInfo').classList.remove('active')
}
const close = (event) =>{
  document.querySelector('.modal_wrap#add_list_modal').classList.add('active')
}

const reset = (event) => {
  document.querySelector('#adress_add_modal .modal_container').style.display="block"
  document.querySelector('#adress_modify_modal .modal_container').style.display="block"
  document.querySelector('.modal_wrap#shippingArmyInfo').classList.remove('active')
}

const change = (event) => {
  document.querySelector('.deliveryList').classList.add('hide')
  document.querySelector('.new_address').classList.add('active')
}

const change_res = (event) => {
  document.querySelector('.new_address').classList.remove('active')
  document.querySelector('.deliveryList').classList.remove('hide')
}



onMounted(() => {
  let target = document.querySelectorAll('.board_type_toggle dt a');
  let rotate = document.querySelectorAll('.board_type_toggle dt a em');
  let i
  target.forEach((a,i)=>{
    a.addEventListener('click', function(){

      if(a.parentNode.nextElementSibling.classList.contains('show')){
        a.parentNode.nextElementSibling.style.height = '0px'
        a.parentNode.nextElementSibling.addEventListener('transitionend', () => {
          a.parentNode.nextElementSibling.classList.remove('show');
          rotate[i].classList.remove('active')
        }, {once: true});
      }
      else{
        a.parentNode.nextElementSibling.classList.add('show');
        rotate[i].classList.add('active')
        a.parentNode.nextElementSibling.style.height = 'auto'
        var height = a.parentNode.nextElementSibling.clientHeight + 'px'
        a.parentNode.nextElementSibling.style.height = '0px'
        setTimeout(() => {
          a.parentNode.nextElementSibling.style.height = height
        });
      }
    })
  })

})

</script>

<style lang="scss" scoped>

.sub_title_wrap {
  padding:0 !important;
}
.table_wrap {
    border-top: 2px solid #000;
    table {
        width: 100%;
        border-collapse: collapse;
        border: 0;
        table-layout: fixed;
        caption {
            display:none;
        }
        thead {
          th {
            padding:15px 20px;
            color:#000;
            font-size:14px;
            border-bottom:1px solid #eee;
            background:#F5F5F5;
            &:not(:first-of-type){
                border-left:1px solid #eee;
            }
          }
        }
        tbody {
            tr {
                th {
                    padding:24px 30px;
                    color:#333;
                    font-size:14px;
                    font-weight:300;
                    border-bottom:1px solid #f5f5f5;
                    text-align:left;
                    vertical-align:top;
                    em {
                        margin-left:-10px;
                        margin-right:3px;
                        color:#FF0000;
                    }
                }
                td {
                    padding:20px 0;
                    font-size:16px;
                    font-weight:300;
                    border-bottom:1px solid #f5f5f5;
                    :deep(button.btn_outline) {
                        em {
                            font-weight:600;
                        }
                    }
                    .input_wrap {
                      width:21%;
                      flex:0 auto;
                    }

                    &.ord_sms {
                      > div {
                        label.select {
                          width:21%;
                        }
                        span {
                          margin:0 10px;
                        }
                      }
                    }
                    &.ord_email {
                      .input_wrap {
                        width:90%;
                      }
                    }
                    &.shippingMsg {
                      label.select {
                          width:75% !important;
                          display:inline-block;
                        }
                    }
                    > div {
                      display:flex;
                      align-items:center;
                      &.deliveryList {
                        width:100%;
                        padding:0 25px 0 0;
                        flex-direction:column;
                        align-items:flex-start;
                        gap:12px;
                        .btn_wrap {
                          display:flex;
                          gap:4px;
                          :deep(button.btn_outline) {
                            height: 30px;
                            em {
                              padding:0 16px;
                              color: #000;
                              font-size: 12px;
                            }
                          }
                        }
                        :deep(.input_wrap) {
                          width:100%;
                          em.label {
                            color: #777;
                          }
                        }
                        &.hide {
                          display:none;
                        }
                      }

                    }
                    > .new_address {
                      padding:25px 25px 25px 0;
                      display: none;
                      > p {
                        width:100%;
                        margin-bottom:15px;
                        display:flex;
                        gap:20px;
                        button.btn_min_outline {
                          margin-left:auto;
                          margin-right:0;
                        }
                        :deep(.input_wrap) {
                          label.check {
                            em {
                              color:#333;
                              font-size:14px;
                              font-weight:400;
                            }
                          }
                        }
                      }
                      &.active {
                        display:block;
                      }
                    }
                    ul {
                      padding:25px;
                      border:1px solid #EEE;
                      > * + * {
                        margin:30px 0 10px;
                      }
                      li {
                        font-size:13px;
                        span {
                          display:inline-block;
                          &::before {
                            content:'*';
                            margin-right:5px;
                            color:#ff0000;
                            font-size:16px;
                            vertical-align:middle;
                          }
                        }
                        .input_wrap {
                          width:100%;
                          margin-top:10px;
                        }
                        .multi_form {
                          margin-top:10px;
                          gap:0px;
                          .input_wrap {
                            margin-top:0px;
                            margin-right:10px;
                            flex:1;
                          }
                          :deep(button.btn_outline) {
                            width:110px;
                            margin-right:5px;
                            em {
                              padding:0 10px;
                              color:#333;
                              font-size:13px;
                              font-weight:500;
                            }
                          }
                        }
                        a {
                          margin-top:10px;
                          padding: 4px 0;
                          color: #666;
                          font-size: 13px;
                          text-decoration: underline;
                          position: relative;
                          display: inline-block;
                          &::after {
                            content: "";
                            width: 12px;
                            height: 12px;
                            background-image: url(/_nuxt/assets/images/common/icon_split.png);
                            background-repeat: no-repeat;
                            background-size: 250px;
                            background-position: -67px -146px;
                            vertical-align: middle;
                            position: absolute;
                            top: 48%;
                            right: -15px;
                            transform: translateY(-50%) rotate(270deg) !important;
                          }
                        }
                        > .phone_wrap {
                          margin-top:10px;
                          display:flex;
                          align-items:center;
                          label.select {
                            width:21%;
                            display:inline-block
                          }
                          .input_wrap {
                            width:21% !important;
                            margin-top:0;
                          }
                          em {
                            margin:0 10px;
                          }
                        }
                        .checkbox_wrap {
                          margin-top:10px;
                          position:relative;
                          display:flex;
                          align-items:center;
                          .input_wrap {
                            width:22% !important;
                            margin-top:0;
                          }
                        }
                      }
                    }

                }

            }
        }
    }
    > em {
        width:100%;
        margin-top:10px;
        font-size:16px;
        color:#d72137 !important;
        display:block;
    }

}
div.list {
  width:100%;
    dl {
    width:100%;
    padding:25px;
    border: 1px solid #eee;
    background: #FCFCFD;
    display:flex;
    dt {
      margin-right:10px;
    }
    dd {
      font-size:14px;
      display:flex;
      flex-direction:column;
      span {
        margin-bottom:3px;
        font-size:14px;
        em {
          width: 65px;
          margin: 0 0 0 10px;
          padding: 2px 0;
          color: #00BC70;
          font-size: 12px;
          font-weight:normal;
          line-height: 1.5;
          background: #E0FBF0;
          text-align: center;
          display: inline-block;
        }
      }
      &.btn_wrap {
        margin-left:auto;
        margin-right:0;
        display:flex;
        flex-direction:row;
        gap:5px;
        :deep(button.btn_outline) {
          width:34px;
          height:24px;
          em {
            padding:0px !important;
            font-size:10px;
            font-weight:600;
          }
        }
      }
    }
  }
}
.modal_wrap {

  .modal_container {
    .modal_content {
      .table_wrap {
        tbody {
          tr {
            td {
              :deep(.input_wrap){
                width: 29%;
              }
              &.ord_sms {
                > div {
                  label.select { width:29% !important;}
                  span {
                    margin:0 10px;
                  }
                }
              }
            }
          }
        }
      }
      ul {
        li {
          :deep(.input_wrap){
            flex:0 auto;
          }
        }
      }
    }
  }


  &#adress_add_modal{
    .modal_container {
      width:720px;
      .modal_content {
        .table_wrap {
          margin-top:10px;
          tbody {
            tr {
              td {
                &.adress {
                  > * + * {
                    margin-top:8px;
                  }
                  .multi_form {
                    :deep(.input_wrap) {
                      flex:0 auto;
                    }
                  }
                  > .input_wrap {
                    width:100%;
                  }
                  > a {
                    padding: 4px 0;
                    color: #666;
                    font-size: 13px;
                    text-decoration: underline;
                    position: relative;
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
        ul {
          li {
            :deep(.input_wrap){
              flex:0 auto;
            }
          }
        }
      }
    }
  }

  &#adress_modify_modal {
    .modal_container {
      width:720px;
      .table_wrap {
          tbody {
            tr {
              td {
                &.adress {
                  > * + * {
                    margin-top:8px;
                  }
                  .multi_form {
                    :deep(.input_wrap) {
                      flex:0 auto;
                    }
                  }
                  > .input_wrap {
                    width:100%;
                  }
                  > a {
                    padding: 4px 0;
                    color: #666;
                    font-size: 13px;
                    text-decoration: underline;
                    position: relative;
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
    }
  }
  &#shippingArmyInfo{
    z-index:15;
    &.active {
      display:block;
    }
    .modal_container {
      max-width:640px;
      left: 794px;
      @media screen and (min-width:1921px) {
        top:800px;
      }
      @media screen and (min-width:3840px) {
        top:900px;
      }
      @media screen and (max-width:1920px) {
        top:800px;
      }
      @media screen and (max-width:1280px) {
        top:195px;
      }
      .modal_header {
        border-bottom:0;
      }
      .modal_content {
        padding:30px 20px;
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
    .modal_container {
      width:720px !important;
      position:fixed;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      .modal_content {
        p {
          color:#888;
          font-size:13px;
        }
        .table_wrap {
          margin:10px 0;
          table {
            thead {
              th {
                color:#888;
                font-size:13px;
              }
            }
            tbody {
              tr {
                > * + * {
                  text-align:center;
                }
                td {
                  padding:10px;
                  color:#888;
                  font-size:13px;
                  strong {
                    font-size:17px;
                    font-weight:normal;
                    text-decoration: underline;
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
    .modal_content {
      > .check {
        margin-bottom:20px;
        color:#000;
        font-weight:500;
      }
      .error {
            margin:10px 0;
            color:#FF0000;
            font-size:12px;
            display:block;
        }
        ul {
          margin-top:10px;
          li {
            display:flex;
            align-items:center;
            a {
              margin-left:20px;
              color:#666;
              font-size:14px;
              text-decoration:underline;
            }
          }
        }
        :deep(button.btn_outline) {
          border:1px solid #000;
          box-sizing:border-box;
          em {
              padding:0 20px;
              color:#000;
              font-size:12px;
              font-weight:600;
          }
        }
    }
  }

  &#add_list_modal {
    .modal_container {
      width:540px;
      .modal_header {
        border-bottom:0;
      }
      .modal_content {
        div.list {
          border:1px solid #eee;
          dl {
            border: 0 !important;;
          }
        }
      }
      .modal_footer {
        button.bg_type_02 {
          background:#333;
        }
      }
    }
  }
  &#layerTooltip {
    .modal_container {
      width:330px;
      top: 60%;
      left: 35%;
      .modal_header{
        border-bottom:0;
      }
      .modal_content{
        padding-top:0;
        font-size: 13px;
        line-height: 1.54em;
        letter-spacing: -0.01em;
        span {
          color: #666666;
          &::before {
            content:none;
          }
        }
        ul {
          > * + * {
            margin-top:5px;
          }
          margin-top:0;
          padding:0;
          border:0;
          li {
            color: #666666;
          }
        }
      }
    }
  }
  &#ecoTooltip{
    left:315px;
    .modal_header {
      color:#000;
      border-bottom:0;
    }
    .modal_content {
      color:#666666;
      padding-top:0;
    }
  }

}

.bullistType_01 {
  margin-left:8px;
  li {
    color:#888;
    position:relative;
    &::after {
      content: "";
      width: 3px;
      height: 3px;
      background: #999E9C;
      position: absolute;
      top: 8px;
      left: -8px;
    }
  }
}

.point {
  .table_wrap {
    table {
      tbody {
        th {
          padding:30px 0 16px 10px;
          color:#000;
          span {color:#999;}
          em {
            margin-left:3px;
            margin-right:0px;
            color: #009D5E !important;
          }
        }
        td {
          > * + * {
            margin-top:12px;
          }
          label.select {
            display:block;
          }
          ul {
            padding:0;
            border:0;
            > * + * {
              margin-top:12px;
              margin-bottom:0;
            }
          }
          > div {
            font-weight:500;
            strong {
              margin:0 5px;;
              color:#00BC70
            }
            .input_wrap {
              width:90px;
              margin:0 5px 0 15px;
            }
            button.btn_outline {
              margin-left:10px;
            }
          }
        }
      }
    }
  }
}

.order_info {
 .table_wrap {
  table {
    tbody {
      tr {
        display:flex;
        align-items:center;
        justify-content: space-between;
        td {
          width:100%;
          padding:40px 0;
          display:flex;
          align-items:center;
            a {
            display: flex;
            align-items:flex-start;
            gap:20px;
            img {
              width: 100px;
              height: 133px;
            }
            > div {
              em {
                padding:2px 5px;
                color:#00BC70;
                font-size:12px;
                background:#E0FBF0
              }
              p {
                margin:10px 0;
                font-size:16px;
                font-weight:400;
              }
              span {
                color:#888;
                font-size:14px;
              }
            }
          }
          > p {
            margin-left:auto;
            margin-right:0;
            text-align:right;
            display:flex;
            flex-direction:column;
            strong {
              font-size:18px;;
              em {
                font-size:14px;;
                font-weight:normal;
              }
            }
            i {
              margin-top: 5px;
              color: #009D5E;
              font-size: 13px;
              font-style:normal;
              line-height: 1.23;
              display: block;
            }
          }
        }
        &.col_tr {
          flex-direction:column;
        }
        td {
          &:first-of-type {
            border-bottom:0;
          }
          &.gifts {
            width:100%;
            dl {
              width:100%;
              dt {
                height:69px;
                padding:0 20px;
                color: #333;
                font-weight:600;
                font-size:16px;
                border:1px solid #eee;
                border-radius: 3px;
                background:#FCFCFD;
                position:relative;
                display:flex;
                align-items: center;
                a {
                  width:100%;
                }
                em {
                  width:40px;
                  height:40px;
                  background-image: url('~/assets/images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 250px;
                  background-position: -200px -60px;
                  text-indent: -9999px;
                  position:absolute;
                  top:15%;
                  right:10px;
                  transform:rotate(180deg);
                  transition:all 0.5s;
                  &.active {
                    transform:translateY(40%) rotate(0deg);
                  }
                }
              }
              dd {
                width:100%;
                padding: 25px 19px;
                border:1px solid #eee;
                border-top:0;
                display:none;
                align-items:center;
                gap:25px;
                overflow:hidden;
                transition:height 0.2s ease-out;
                div {
                  width:390px;
                  display:flex;
                  align-items:center;
                  img {
                    width:68px;
                    height:90px;
                    margin-right:15px;
                  }
                  p {
                    font-size:14px;
                    font-weight:400;
                    display:flex;
                    flex-direction:column;
                    gap:10px;
                    em {
                      color:#666;
                      font-size:13px;;
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
 }
 > article {
    position: relative;
    margin-top:20px;
    color:#888;
    font-size:13px;
    display:flex;
    align-items:center;
    em {
    &::before {
      content:'※';
      margin-right:5px;
      display:inline-block;
    }
  }
 }
}
.show {display:flex !important;}
button.tooltip {
  width: 16px;
  height: 16px;
  margin-left:5px;
  background-position: 0px -260px;
}

.pay_method {
  .table_wrap {
    table {
      tbody {
        tr {
          td {
            display:flex;
            .input_wrap {
              width:18%;
            }
          }
        }
      }
    }
  }
  article {
    padding:40px 0 0;
    &.method_card {}
    &.method_onclick{
      > div {
        width:100%;
        button {
          width:300px;
          height:180px;
          margin:0 auto;
          color:#000;
          font-size:16px;
          line-height:1.25;
          border:1px dashed #DDDDDD;
          border-radius:5px;
          background: #F5F5F5;
          display:block;
          span {
            &::before {
              content:'';
              width:24px;
              height:25px;
              margin:0 auto;
              border:1px solid red;
              background-image: url('/_nuxt/assets/images/common/icon_split.png');
              background-repeat:no-repeat;
              background-size:250px;
              background-position:0px 0px;
              display:block;
            }
          }
        }
      }
    }
    &.method_other{}
  }
  .tosspay {
    margin:40px 0 0;
    padding:20px 0 0;
    border-top:1px solid #eee;
  }
}

</style>
