<template>
  <div class="sub_title_wrap">
    <h3>뷰티포인트 통합 회원 정보 수정</h3>
    <div class="explain">
      * 이 페이지에서 회원정보 수정, 비밀번호 수정시 뷰티포인트 통합 아이디로 로그인하는 아모레퍼시픽 사이트의 정보가 함께 변경됩니다.
    </div>
  </div>
  <Tabs id="privacy_tab" tabType="type_03" :item="[{txt:'회원정보 수정'},{txt:'비밀번호 수정'}]" :tabidx="0" />
  <div class="sub_title_wrap type_cont"><h3>SNS/Apple ID 계정 연동 관리</h3></div>
  <div class="table sns_table">
    <table>
      <caption>SNS/Apple ID 계정 연동 관리</caption>
      <colgroup>
        <col style="width:170px;">
        <col>
      </colgroup>
      <tbody>
        <tr>
          <th class="facebook">페이스북</th>
          <td>
            <span>연결 정보 없음</span>
          </td>
        </tr>
        <tr>
          <th class="kakao">카카오톡</th>
          <td>
            <div class="connect">
              <span>연결됨</span>
              <Button class="btn_min_outline" txt="연결해제" />
            </div>
          </td>
        </tr>
        <tr>
          <th class="naver">네이버</th>
          <td>
            <span>연결 정보 없음</span>
          </td>
        </tr>
        <tr>
          <th class="apple">Apple</th>
          <td>
            <div class="connect">
              <span>연결됨</span>
              <Button class="btn_min_outline" txt="연결해제" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="sub_title_wrap type_cont">
    <div class="explain">이름 변경(개명)의 경우 이니스프리 고객상담실(080-380-0114)로 문의 부탁드립니다.</div>
  </div>
  <div class="table write_table">
    <table>
      <caption>기본정보</caption>
      <colgroup>
        <col style="width:170px;">
        <col>
      </colgroup>
      <tbody>
        <tr>
          <th>이름</th>
          <td>형민우</td>
        </tr>
        <tr>
          <th>아이디</th>
          <td>gud*******</td>
        </tr>
        <tr>
          <th>생년월일</th>
          <td>1998 년 10 월 29 일</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>
            <div class="email">
              <Inputs _type="text" /> 
              <span>@</span>
              <Inputs _type="text" />
              <Selectbox
                :options="selectOption"
              />
              <Button class="btn_outline" txt="메일 확인" />
            </div>
          </td>
        </tr>
        <tr>
          <th>휴대전화 번호</th>
          <td>
            <div class="phone">
              <Inputs _type="text" _value="010" isDisabled="true" />
              -
              <Inputs _type="text" _value="1234" isDisabled="true" />
              -
              <Inputs _type="text" _value="1234" isDisabled="true" />
              <Button class="btn_outline" txt="변경" />
            </div>
          </td>
        </tr>
        <tr>
          <th>주소</th>
          <td>
            <div class="address">
              <Inputs class="sm" _type="text" _value="04386" isDisabled="true" />
              <Button class="btn_outline" txt="우편번호 검색" />
              <Button class="btn_outline" txt="주소 초기화" />
              <Inputs class="big" _type="text" _value="서울 용산구 한강대로30길 25" isDisabled="true" />
              <Inputs class="big" _type="text" _value="6층" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="sub_title_wrap">
    <h3>※ 반려 정보</h3>
  </div>
  <div class="table pet_table">
    <table>
      <caption>반려 정보</caption>
      <colgroup></colgroup>
      <tbody>
        <tr>
          <td>
            <div class="thumb"><img src="/public/images/sam/temp_pet_nail.png"></div>
            <div class="text">
              <p class="desc">
                이니스프리는 PET케어 제품을 지속적으로 연구개발 하고 있습니다.<br>
                아래 정보를 입력해주시면, PET케어 이벤트 진행시 우선적으로 혜택을 제공해드립니다.
              </p>
              <div class="radio_box">
                <p>· 현재 사랑하는 반려동물(강아지, 고양이)과 함께 살고 있나요?</p>
                <Inputs class="pet" _type="radio" _id="pet_info" _name="pets" _text="네" />
                <Inputs _type="radio" _id="pet_info" _name="pets" _text="아니오" />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <Inputs _type="checkbox" />
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
definePageMeta({
  layout:'pc-mypage',
});

const selectOption = [
  { val: 'value', txt: '직접입력'},
  { val: 'value', txt: '천리안'},
  { val: 'value', txt: '싸이월드'},
  { val: 'value', txt: '다음'},
  { val: 'value', txt: '드림위즈'},
  { val: 'value', txt: '엠팔'},
  { val: 'value', txt: '프리첼'},
  { val: 'value', txt: '지메일'},
  { val: 'value', txt: '하나포스'},
  { val: 'value', txt: '한메일'},
  { val: 'value', txt: '핫메일'},
  { val: 'value', txt: '캐비'},
  { val: 'value', txt: '코리아'},
  { val: 'value', txt: '라이코스'},
  { val: 'value', txt: 'MSN'},
  { val: 'value', txt: '네이트'},
  { val: 'value', txt: '네이버'},
  { val: 'value', txt: '네티앙'},
  { val: 'value', txt: '파란'},
  { val: 'value', txt: '야후'},
];
</script>
<style lang="scss" scoped>
.sub_title_wrap {
  padding:0;
  margin-bottom:24px;
  .explain {
    margin-top:6px;
    color:#888;
    font-size:13px;
  }
  &.type_cont {
    h3 {
      font-size:22px;
    }
    .explain {
      margin-top:0;
      margin-bottom:20px;
      color:#666;
      font-size:14px;
      font-weight:500;
    }
  }
}

.tab_wrap {
  &#privacy_tab {
    :deep(ul) {
      li {
        button {
          border-color:#A7A7A7;
        }
      }
    }
  }
}

:deep(.input_wrap) {
  .check {
    input[type="radio"] + .label {
      &:before {
        background-color:#DDD;
      }
      &:after {
        width:8px;
        height:8px;
        border-radius:50%;
        background-color:#fff;
        top:6px;
        left:6px;
      }
    }
    input[type="radio"]:checked + .label {
      &:before {
        background-color:#00BC70
      }
      &:after {
        width:8px;
        height:8px;
        background-color:#fff;
        top:6px;
        left:6px;
      }
    }
  }
}

.table {
  margin-top:-1px;
  border-top:2px solid #000;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    caption {
      font-size:0;
      text-indent:-9999px;
    }
    tbody {
      tr {
        th {
          padding:15px 20px;
          font-size:14px;
          font-weight:400;
          border-bottom:1px solid #EEE;
          text-align:left;
        }
        td {
          padding:21px 20px;
          color:#999;
          font-size:16px;
          font-weight:400;
          border-left:1px solid #EEE;
          border-bottom:1px solid #EEE;
        }
      }
    }
  }

  &.sns_table {
    table {
      tbody {
        tr {
          th {
            font-weight:500;
            &:before {
              content:'';
              width:32px;
              height:32px;
              margin-right:16px;
              background:url('/_nuxt/assets/images/common/icon_split.png') no-repeat 0 -330px;
              background-size:250px auto;
              vertical-align:middle;
              display:inline-block;
            }
            &.kakao {
              &:before {
                background-position:-40px -330px;
              } 
            }
            &.naver {
              &:before {
                background-position:0 -365px;
              } 
            }
            &.apple {
              &:before {
                background-position:-40px -365px;
              } 
            }
          }
        }
        td {
          padding:21px 20px;
          color:#999;
          font-size:16px;
          font-weight:400;
          border-left:0;
          border-bottom:1px solid #EEE;
          >* {
            height:30px;
            display:inline-block;
          }
          .connect {
            color:#333;
            font-weight:500;
            display:flex;
            align-items:center;
            gap:5px;
            >:deep(button) {
              border-color:#999;
              em {
                padding:0 16px;
                font-size:12px;
                font-weight:600;
                color:#999;
              }
            }
          }
        }
      }
    }
  }

  &.write_table {
    tbody {
      tr {
        th {
          padding:24px 30px;
          color:#333;
          font-size:14px;
          text-align:left;
          border-bottom:1px solid #F5F5F5;
        }
        td {
          padding:20px 0;
          color:#000;
          font-size:16px;
          font-weight:500;
          border-left:0;
          border-bottom:1px solid #F5F5F5;
          .email {
            display:flex;
            align-items:center;
            gap:24px;
            >span {
              margin:0 -12px;
            }
            >button {
              margin-left:-15px;
            }
            :deep(.select) {
              width:150px;
              >div {
                &:after {
                  width:8px;
                  height:8px;
                  margin-top:-2px;
                }
              }
            }
          }
          .phone {
            display:flex;
            align-items:center;
            gap:15px;
            >button {
              margin-left:-5px;
            }
          }
          .address {
            display:flex;
            flex-wrap:wrap;
            gap:10px 8px;
          }
          :deep(.input_wrap) {
            flex:0 0 150px;
            &.sm {
              flex:0 0 110px;
            }
            &.big {
              flex:0 0 70%;
            }
            .input {
              input {
                border-color:#EEE;
                &:disabled {
                  background:#F5F5F5;
                  border-color:#DDD;
                }
              }
            }
          }
          :deep(button) {
            border-color:#000;
            em {
              padding:0 16px;
              font-weight:600;
              line-height:38px;
            }
          }
        }
      }
    }
  }

  &.pet_table {
    tbody {
      tr {
        td {
          display:flex;
          gap:30px;
          .text {
            .desc {
              margin-bottom:20px;
              color:#666;
              font-size:14px;
            }
            .radio_box {
              display:flex;
              flex-wrap:wrap;
              p {
                width:100%;
                margin-bottom:10px;
                color:#000;
                font-size:16px;
                font-weight:600;
              }
              :deep(.input_wrap) {
                flex:0 0 17%;
                &.pet {
                  &:after {
                    content:'♥';
                    margin-left:5px;
                    color:#00BC70;
                    vertical-align:middle;
                  }
                }
                .check {
                  padding-left:32px;
                  .label {
                    color:#000;
                    font-size:14px;
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
</style>
