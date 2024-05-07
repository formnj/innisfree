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
                  <td class="qa_sms">
                      <div>
                        <Selectbox
                              :options="[
                              { val: 'value', txt: '010' },
                              { val: 'value', txt: '011' }
                          ]" />
                          <span>~</span>
                          <Inputs _type="text" _placeholder="" value="1234"/>
                          <span>~</span>
                          <Inputs _type="text" _placeholder="" value="5678"/>
                      </div>
                  </td>
                </tr>
                <tr>
                  <th>
                      <em>*</em>
                      <span>이메일</span>
                  </th>
                  <td>
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
                        <Button  class="btn_outline" txt="새로운 배송지"/>
                        <Button  class="btn_outline" txt="배송지 관리"/>
                      </p>
                      <dl>
                        <dt>
                          <Inputs _type="radio" _text="Label" />
                        </dt>
                        <dd>
                          <span>김이나 010-1234-5678</span><em>기본배송지</em>
                          서울특별시 리앙에이지
                        </dd>
                      </dl>
                      <Inputs _type="checkbox" _text="안심번호 서비스 사용 안심번호 서비스 안내" />
                    </div>
                    <p class="new_address">
                      <Inputs _type="checkbox" _text="배송지 목록에 추가" />
                      <Inputs _type="checkbox" _text="기본 배송지로 등록" />
                      <Button class="btn_outline" txt="입력취소"/>
                      <ul>
                        <li>
                          <em>*</em>
                          <span>배송지</span>
                          <p>
                            <Inputs _type="text" _placeholder="최대 10자까지 입력가능" />
                          </p>
                        </li>
                        <li>
                          <em>*</em>
                          <span>배송지</span>
                          <p>
                            <Inputs _type="text" _placeholder="최대 10자까지 입력가능" />
                          </p>
                          <Inputs _type="checkbox" _text="주문자 정보와 동일" />
                        </li>
                        <li>
                          <em>*</em>
                          <span>주소</span>
                          <div class="multi_form">
                            <Inputs _type="text" _placeholder="문구를 입력해주세요" />
                            <Button  class="btn_outline" txt="우편번호 검색"/>
                            <Button  class="btn_outline" txt="CU 편의점 찾기"/>
                            <Button  class="btn_outline" txt="GS 편의점 찾기"/>
                          </div>
                          <Inputs _type="checkbox" _text="" />
                          <Inputs _type="checkbox" _text="" />
                          <a href="#none">군부대 배송안내</a>
                        </li>
                        <li>
                          <em>*</em>
                          <span>휴대폰 번호</span>
                          <div>
                            <Selectbox
                                  :options="[
                                  { val: 'value', txt: '010' },
                                  { val: 'value', txt: '011' }
                              ]" />
                              <span>~</span>
                              <Inputs _type="text" _placeholder="" value="1234"/>
                              <span>~</span>
                              <Inputs _type="text" _placeholder="" value="5678"/>
                          </div>
                          <Inputs _type="checkbox" _text="안심번호 서비스 사용" /><Icons class="tooltip" />
                        </li>
                      </ul>
                    </p>
                  </td>
                </tr>
                <tr>
                    <th>
                        <span>배송 요청사항</span>
                    </th>
                    <td>
                      <Selectbox
                          :options="[
                          { val: 'value', txt: '배송 요청사항을 선택 해주세요.' },
                          { val: 'value', txt: '옵션02' }
                      ]" />
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { setFilter } from '~/assets/js/common-ui.js'
import { modal } from '~/assets/js/common-ui.js'

definePageMeta({
layout:'pc-ord'
});
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
        tbody {
            tr {
                th {
                    padding:24px 30px;
                    color:#333;
                    font-size:14px;
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
                    font-weight:500;
                    border-bottom:1px solid #f5f5f5;
                    ::v-deep button.btn_outline {
                        em {
                            font-weight:600;
                        }
                    }
                    label.select {
                        width:30%;
                        display:block !important;
                    }
                    .label_wrap {
                        ::v-deep label.input {
                            input {
                                width:600px !important;
                            }
                            textarea {
                                width:600px;
                                height:200px !important;
                            }
                        }
                    }
                    > div {
                        display:flex;
                        align-items:center;
                    }
                    > dl {
                        margin-top:16px;
                        display:flex;
                        align-items:center;
                        dt {
                            margin-right:30px;
                            font-size:14px
                        }
                        dd {
                            display:flex;
                            gap:15px;
                        }
                    }

                    &.qa_sms {
                        > div {
                            gap:6px;
                            ::v-deep  .input_wrap {
                              flex:0 auto !important;
                              .label_wrap {
                              flex:0 !important;
                                  label.input {
                                      width:150px !important;
                                      input[type='text'] {
                                          width:150px !important;
                                      }
                                  }
                              }
                            }
                        }
                        dl {
                          dd {
                            ::v-deep .input_wrap{
                              flex:0 auto;
                            }
                          }
                        }
                    }
                    &.qa_email {
                        > div {
                            gap:6px;

                            ::v-deep .input_wrap {
                              flex:0 auto !important;
                              .label_wrap {
                              flex:0 !important;
                                  label.input {
                                      width:150px !important;
                                      input[type='text'] {
                                          width:150px !important;
                                      }
                                  }
                              }
                            }
                        }
                        dl {
                          dd {
                            ::v-deep .input_wrap{
                              flex:0 auto;
                            }
                          }
                        }
                    }
                    .error {
                        margin-top:10px;
                        color:#FF0000;
                        font-size:12px;
                        display:block;
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


</style>
