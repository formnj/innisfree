<template>
  <div class="inner">
    <div class="title_wrap" :data-layout="props.layoutType">
      <h2>개인정보 처리방침</h2>
    </div>
    <section>
      <p>
        <span>
          개인정보 처리방침이란 ㈜이니스프리를 이용하는 고객님의 개인
          정보를 보호하기 위한 약속입니다.
        </span>
        <span>
          ㈜이니스프리를 이용하실 때 처리되는 개인정보에 대하여 알기
          쉽게 안내해드립니다.
        </span>
        <span>
          상세 내용은 하단의 “개인정보 처리방침“ 전문보기를 통해서 확인하실 수 있습니다.
        </span>
      </p>
      <div class="btn_wrap">
        <Button class="btn_ confirm" txt="이니스프리 개인정보 처리방침 전문보기" @click="modal.open('infor_office', 'fullMo infor_office')" />
        <Button class="btn_ confirm" txt="뷰티포인트 개인정보 처리방침 전문보기" @click="amore_info()" />
      </div>
    </section>
    <section>
      <h3>수집/이용</h3>
      <div class="right_wrap">
        <div class="cont_wrap">
          <strong>회원서비스 제공을 위한 회원가입정보</strong>
          <span>
            회원서비스 이용을 위하여 회원가입시, 본인 확인 등 필요한
            최소한의 개인정보를 수집하고 이용하며, 멤버십 회원관리를
            위하여 서비스 이용과정 중의 정보를 수집합니다.
          </span>
          <div class="bg">
            <ul class="bul_list dot">
              <li>회원가입정보 (아이디, 이름, 본인확인 값, 생년월일, 성별, 휴대전화번호)</li>
              <li>구매 거래 내역, 포인트 적립 내역</li>
            </ul>
          </div>
        </div>
        <div class="cont_wrap">
          <strong>쇼핑몰 주문/결제/배송</strong>
          <span>쇼핑몰에서 상품을 구매하실 때 다음의 개인정보를 수집하고 이용합니다.</span>
          <div class="bg">
            <ul class="bul_list dot">
              <li>대금결제에 필요한 정보(신용카드 종류, 카드번호, 유효기간 등)</li>
              <li>상품 배송을 위한 배송정보(발송인과 수신인의 이름, 주소, 연락처)</li>
            </ul>
          </div>
        </div>
        <div class="cont_wrap">
          <strong>고객과의 의사소통</strong>
          <span>별도 동의한 고객에 한하여 이벤트 제공 및 참여 기회 제공, 경품 배송, 마케팅 프로모션 목적 등으로 개인정보를 이용합니다.</span>
          <div class="bg">
            <ul class="bul_list dot">
              <li>휴대전화번호(선택 : 이메일주소, 주소)</li>
            </ul>
          </div>
        </div>
        <div class="cont_wrap">
          <strong>이벤트 참여 등 마케팅 활동</strong>
          <span>별도 동의한 고객에 한하여 이벤트 제공 및 참여 기회 제공, 경품 배송, 마케팅 프로모션 목적 등으로 개인정보를 이용합니다.</span>
          <div class="bg">
            <ul class="bul_list dot">
              <li>이메일주소, 주소, 휴대전화번호</li>
            </ul>
          </div>
        </div>
        <div class="cont_wrap">
          <strong>서비스 이용 시 필요한 정보</strong>
          <span>특정 서비스 이용과정에서 고객의 선택에 따라 추가적인 정보 집이 발생할 수 있으며, 이 경우 수집ㆍ이용 목적을 안내하고 동의를 받습니다.</span>
        </div>
        <div class="cont_wrap">
          <strong>자동으로 수집되는 정보</strong>
          <span>온라인 서비스 이용이나 사업처리 과정에서 자동으로 생성되는 정보가 수집될 수 있습니다.</span>
          <div class="bg">
            <dl>
              <dt>생성정보</dt>
              <dd>
                <ul class="bul_list dot">
                  <li>IP주소, 방문일시, 서비스 이용기록, 쿠키, 부정 이용 기록 등</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>쿠키란?</dt>
              <dd>
                <p>
                  인터넷 접속 시 자동으로 생성되는 방문기록 정보입니다. 서비스 이용 편의 및 최적화된 서비스 제공을 위해 제한적으로
                  활용하며,<br> 고객님께서는 웹 브라우저 설정에서 쿠키의 저장을
                  허용하거나 거부할 수 있습니다.
                </p>
                <Button txt="쿠기 설치 거부 방법" class="btn_sm_outline"  @click="modal.open('cookei_modal', 'fullMo cookei_modal')"/>
              </dd>
            </dl>
          </div>
        </div>
      </div>

    </section>
    <section>
      <h3>저장</h3>
      <ul class="bul_list dot">
        <li>
          개인정보의 안전한 처리를 위한 내부관리계획을 수립하고 시행
          하며, 교육을 실시합니다.
        </li>
        <li>
          고객의 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 무분별한 접근을 통제하고 접근권한을 제한하며, 접속기록을
          보관합니다.
        </li>
        <li>고객의 개인정보는 안전하게 저장ㆍ전송될 수 있도록 암호화하며, 보안프로그램을 설치하여 침해되는 것을 방지하고 있습니다.</li>
        <li>고객의 개인정보는 보관시설을 마련하고 잠금장치를 설치하는 등 물리적 조치를 통해 철저하게 보호되고 있습니다.</li>
      </ul>
    </section>
    <section>
      <h3>제공ㆍ위탁</h3>
      <div class="right_wrap">
        <div class="cont_wrap">
          <strong>제3자 제공</strong>
          <ul class="bul_list dot">
            <li>
              고객의 동의가 있거나 요금정산 또는 관련법령의 규정에 의한
              경우를 제외하고 고객의 정보를 다른 목적으로 이용하거나 제공
              하지 않습니다.
            </li>
            <li>다양한 서비스 제공을 위해서 고객정보를 제공해야 하는 경우에는 고객으로부터 별도 동의를 받아 제공합니다.</li>
          </ul>
        </div>
        <div class="cont_wrap">
          <strong>개인정보 처리 위탁</strong>
          <span>고객에게 제공하는 서비스의 향상과 원활한 처리를 위하여 고객의 개인정보 처리를 외부 전문 업체에 위탁합니다.</span>
          <Button class="btn_sm_outline" txt="개인정보 처리 위탁 내역 보기" @click="modal.open('infor_office', 'fullMo infor_office')" />
        </div>
        <div class="cont_wrap">
          <strong>개인정보 국외 이전</strong>
          <span>고객에게 보다 다양하고 전문적인 서비스를 제공하기 위해 국외의 사업자에게 개인정보를 위탁하고 있습니다.</span>
        </div>
      </div>
    </section>
    <section>
      <h3>파기</h3>
      <div class="right_wrap">
        <div class="cont_wrap">
          <strong>고객정보의 안전한 파기</strong>
          <span>
            개인정보의 수집 목적을 달성하거나 보유기간이 만료되었을 때
            복원이 불가능한 방식으로 개인정보를 지체없이 파기합니다.
          </span>
        </div>
        <div class="cont_wrap">
          <ol>
            <li>
              <em class="dest_icon_01"></em>
              <span>회원가입 정보</span>
              <p>회원 탈퇴하거나 회원에서 제명된 때<br>파기됩니다.</p>
            </li>
            <li>
              <em class="dest_icon_02"></em>
              <span>대금지급정보</span>
              <p>대금의 완제일 또는 채권소멸 시효<br>기간이 만료된 때 파기됩니다.</p>
            </li>
            <li>
              <em class="dest_icon_03"></em>
              <span>배송정보</span>
              <p>
                물품 또는 서비스가 인도되거나<br>제공된 때 파기됩니다.
              </p>
            </li>
            <li>
              <em class="dest_icon_04"></em>
              <span>설문조사, 이벤트</span>
              <p>
                해당 설문조사, 이벤트가 종료된 때 <br>파기됩니다.
              </p>
            </li>
          </ol>
        </div>
        <div class="cont_wrap">
          <strong>법령에 의한 개인정보 보존</strong>
          <span>
            목적이 달성된 개인정보라 할지라도 전자상거래 등에서의 소비자 보호에 관한 법률, <br> 개인정보 보호법, 통신비밀보호법, 상법, 국세
            기본법 등에 따라 일정기간 보유할 수 있습니다.
          </span>
          <div class="bg">
            <ul class="bul_list dot">
              <li>계약 또는 청약철회 등에 관한 기록 : 5년</li>
              <li>대금결제 및 재화 등 공급에 관한 기록 : 5년</li>
              <li>소비자 불만 또는 분쟁 처리에 관한 기록 : 3년</li>
              <li>웹사이트 방문기록 : 3개월</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3>고객의 권리 보호</h3>
      <div class="right_wrap">
        <div class="cont_wrap">
          <strong>개인정보 자기결정권 보장</strong>
          <ul class="bul_list dot">
            <li>고객은 언제든지 자신의 개인정보 및 이용현황을 확인할 수 있습니다.</li>
            <li>자신의 개인정보를 직접 수정하거나 정정, 동의를 철회할 것을 요청할 수 있습니다.</li>
            <li>㈜이니스프리는 개인정보 수집에 대한 동의철회(회원탈퇴) 시 개인정보를 수집했을 때보다 쉽게 할 수 있도록 필요한 조치를 취하겠습니다.</li>
          </ul>
        </div>
        <div class="cont_wrap">
          <strong>법정대리인의 권리 행사</strong>
          <span>고객은 법정대리인을 통해서도 권리를 행사할 수 있습니다.</span>
        </div>
        <div class="cont_wrap">
          <strong>권리 행사 방법</strong>
          <span>고객과 법정대리인은 개인정보 보호책임자와 책임부서에 연락을 취해 권리를 행사할 수 있습니다.</span>
        </div>
      </div>
    </section>
    <section class="depart_info">
      <dl>
        <dt>개인정보 보호책임부서</dt>
        <dd>
          <ul>
            <li>
              <span>부서명 :</span>
              <em>이니스프리 정보보안센터</em>
            </li>
            <li>
              <span>연락처 :</span>
              <em>
                080-380-0114 (수신자 부담전화)<br>
                <i>(월~금 : 09:00 ~ 18:00, 공휴일 제외)</i>
              </em>
            </li>
            <li>
              <span>이메일 :</span>
              <em>innisfree_privacy@innisfree.com</em>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>개인정보 침해에 따른 신고 및 유관기관</dt>
        <dd>
          <p>개인정보침해신고센터 (국번없이 118)</p>
          <p><a href="http://privacy.kisa.or.kr">http://privacy.kisa.or.kr</a></p>
        </dd>
        <dd>
          <p>경찰청 사이버수사국 (국번없이 182)</p>
          <p><a href="http://ecrm.cyber.go.kr">http://ecrm.cyber.go.kr</a></p>
        </dd>
      </dl>
    </section>
  </div>


</template>

<script setup>
definePageMeta({
	layout:'pc-category'
});


const props = defineProps({
    layoutType: {
      type:String,
      default:'default'
    }
});

</script>

<style lang="scss" scoped>
.title_wrap {
  margin-bottom:19px;
  justify-content:center;
  h2 {
    color:#000 !important;
    font-size:38px !important;
    font-weight:600 !important;
  }
}

.inner {
  > * + * {
    display:flex;
  }
  section {
    padding-bottom:70px;
    border-bottom:1px solid #EEE;
    &:first-of-type {
      padding-top:70px;
      padding-top:0 !important;
      border-bottom:2px solid #000;
      flex-direction:column;
    }
    > p {
      margin-bottom:40px;
      line-height:20px;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:5px;
     > span {
      color:#666;
      font-size:16px;
      font-weight:400;
      }
    }
    > .btn_wrap {
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:c;
      margin-top:1.5rem;
      gap:10px;
    }
    &:last-of-type {
      border-bottom:0;
    }
    .cont_wrap {
      &:last-of-type {
        &::after {
          display:none;
        }
      }
    }
  }
  > * + * {
    padding-top:70px !important;
  }
  h3 {
    width:calc(100% - 1020px);
    color:#000;
    font-size:24px;
    font-weight:600;
  }
}

.cont_wrap {
  &::after {
    content:'';
    width:100%;
    height:1px;
    margin:30px 0;
    background:#f5f5f5;
    display:block;
  }
  display:flex;
  flex-direction:column;
  > strong {
    margin-bottom:10px;
    color:#000;
    font-size:16px;
    font-weight:600;
  }
  > span {
    color:#333;
    font-size:14px;
    font-weight:400;
    line-height:20px;
    + .btn_ {
      margin-top:1.5rem;
    }
  }
  > .bg {
    margin-top:1.5rem;
    padding:2.0rem;
    background:#FCFCFD;
    border:1px solid #EEEEEE;
    > * + * {
      margin-top:1.5rem;
    }
    ul {
      li {
        color:#666;
        font-size:14px;
        font-weight:400;
      }
    }
    dl {
      > * + * {
        margin-top:0.5rem;
      }
      dt {
        color:#333;
        font-size:14px;
        font-weight:600;
      }
      dd {
        color:#666;
        font-size:14px;
        font-weight:400;
        line-height:20px;;
      }
    }
  }
  > dl {
    margin-bottom:1.5rem;
    display:flex;
    align-items:center;
    &:last-of-type {
      margin-bottom:0;
    }
      dt {
        min-width:6.0rem;
        height:6.0rem;
        margin-right:1.5rem;
        background-image:url('~/assets/mo_images/common/foo_img.png');
        background-position:0rem 0rem;
        background-repeat:no-repeat;
        background-size:30rem auto;
        display:block;
        &.dest_icon_01 {
          background-position:-1rem 0rem;
        }
        &.dest_icon_02 {
          background-position:-8rem 0rem;
        }
        &.dest_icon_03 {
          background-position:-15rem 0rem;
        }
        &.dest_icon_04 {
          background-position:-22rem 0rem;
        }

      }
      dd {
        span {
          color:#333;
          font-size:1.3rem;
          font-weight:500;
        }
        p {
          margin-top:0.5rem;
          color:#666;
          font-size:1.2rem;
          font-weight:400;
        }
      }
  }
  ol {
    padding:40px;
    background:#FCFCFD;
    border:1px solid #EEEEEE;
    display:flex;

    li {
      width:25%;
      text-align:center;
      flex:1;
    }

    em {
      width:48px;
      height:48px;

      background:url('~/assets/images/common/footer_icon.png') 0px 0px / 250px auto no-repeat;;
      display:inline-block;
      &.dest_icon_01 {
      background-position:5px -60px
      }
      &.dest_icon_02 {
        background-position:-42px -61px;
      }
      &.dest_icon_03 {
        background-position:-95px -60px;
      }
      &.dest_icon_04 {
        background-position:-147px -60px;
      }
    }
    span {
      margin:20px 0 5px 0;
      color:#333;
      font-size:14px;
      font-weight:600;
      display:block;
    }
    p {
      color:#666;
      font-size:14px;
      font-weight:400;
      line-height:22px;
    }


  }
}

.bul_list  {
  color:#333;
  font-size:16px;
  font-weight:500;
  line-height:24px;
}

.right_wrap {
  flex:1;
  .bul_list  {
    color:#333;
    font-size:14px;
    font-weight:400;
    line-height:22px;
  }
}

.depart_info {
  display:flex;
  justify-content:space-between;
  dl {
    width:49%;
    padding:30px;
    background:#f5f5f5;
    dt {
    margin-bottom:10px;
    color:#333;
    font-size:18px;
    font-weight:600;
    }
    dd {
      margin-bottom:5px;
      color:#666;
      font-size:14px;
      font-weight:400;
      line-height:22px;

      &:last-of-type {
        margin-bottom:0;
      }
      span {
        width:51px;
        display:inline-block;
      }
      i {
        padding-left:51px;
        font-style:normal;
      }
    }
  }

}


:deep(.btn_sm_outline) {
  max-width:185px;
  margin-top:5px;
  border:1px solid #aaa;
  em {
    padding:6px 15px;
    color:#333;
    font-size:12px;
    font-weight:500;
  }
}

.modal_wrap {
  .modal_container {
    .modal_content {
      padding:0 2.1rem;
    }
  }
  &.cookei_modal {
    .modal_container {
      .modal_content {
        h3 {
          margin-bottom:2rem;
          font-size:1.6rem;
          font-weight:600;
        }
        dl {
          margin-bottom:2rem;
          > * + * {
            margin-top:0.5rem;
          }
          &:last-of-type {
            margin-bottom:0;
          }
          dt {
            color:#333;
            font-weight:500;
          }
          dd {
            color:#666;
            font-size:1.3rem;
            font-weight:400;
            line-height:2.0rem;
            > * + * {
              margin-top:0.5rem;
            }
          }
        }
      }
    }

  }
}

</style>
