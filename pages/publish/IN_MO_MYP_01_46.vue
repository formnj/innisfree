<template>
    <Tabs tabType="type_01" :item="[{txt:'1&#58;1 문의하기'},{txt:'답변확인'}]" :tabidx="0" />
        <div class="inner">
            <section>
                <dl>
                    <dt>문의제품</dt>
                    <dd>
                    <div class="multi_form">
                    <Inputs _type="text" _placeholder="주문 제품을 선택해주세요" />
                    <Button txt="제품선택" class="btn_outline" />
                    </div>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        문의유형<em class="vital">*</em>
                    </dt>
                    <dd>
                        <Selectbox
                            :options="[
                            { val: 'value', txt: '선택하세요' },
                            { val: 'value', txt: '주문/결제문의' },
                            { val: 'value', txt: '배송문의' },
                            { val: 'value', txt: '취소/반품/교환문의' },
                            { val: 'value', txt: '자주하는 문의/기타' },
                            { val: 'value', txt: '가맹점 개설문의' },
                        ]" />
                        <Selectbox
                            :options="[
                            { val: 'value', txt: '선택해주세요' },
                            { val: 'value', txt: '주문/결제문의' },
                            { val: 'value', txt: '뷰티포인트/쿠폰' }
                        ]" />
                    </dd>
                </dl>
                <dl>
                    <dt>
                        문의내용<em class="vital">*</em>
                    </dt>
                    <dd>
                        <Inputs _type="text" _placeholder="제목을 입력해주세요. (최대 30자 이내)" />
                        <div class="textarea">
                            <textarea name="cnt" id="cnt" cols="3" rows="3"
                            placeholder="내용을 입력해 주세요. 문의 내용 본문에는 개인정보를 입력하지 말아주세요. 고객정보보호를 위해 마스킹 처리될 수 있습니다.(예 : 성명, 연락처, 이메일주소, 계좌번호 등)">
                        </textarea>
                        </div>


                    </dd>
                </dl>
                <Button class="btn_outline" txt="사진 최대 5장(선택)" />
                <hr>
            </section>
            <section>
                <ul>
                    <li>
                        <dl>
                            <dt>답변 결과를 이메일로 받으시겠습니까?</dt>
                            <dd>
                                <Inputs _type="radio" _text="예" _name="email" value="yes"/>
                                <Inputs _type="radio" _text="아니요" _name="email" value="no"/>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>답변 결과를 문자 메시지로 받으시겠습니까?</dt>
                            <dd>
                                <Inputs _type="radio" _text="예" _name="sms" value="yes"/>
                                <Inputs _type="radio" _text="아니요" _name="sms" value="no"/>
                            </dd>
                        </dl>
                    </li>
                </ul>
                <em>
                    *이메일, 휴대전화번호 정보 수정을 원하시는 경우<br>
                    회원정보 수정을 통해 변경해주시기 바랍니다.
                </em>
                <Button txt="문의하기" />
            </section>
        </div>
</template>

<script setup>
definePageMeta({
layout: 'mo-category'
});

import {
  sample_event
} from '~/test/data/dummyData'

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});
</script>

<style lang="scss" scoped>
.tab_wrap {
  margin-left:-21px !important;
  margin-right:-21px !important;
  .type_01 {
      li {
          button {
              > em {
              padding:0px !important;
              }
          }
      }
  }
}

section {
    padding: 3rem 0;
    > dl {
        &:first-of-type {
            dt {
                margin-top:0;
            }
        }
        dt{
            margin:2.4rem 0 1rem 0;
            .vital {
                margin-left:0.2rem;
                color:#FF0000;
            }
        }
        dd{
            display:flex;
            flex-direction:column;
            gap:1rem;
            .textarea {
                textarea {
                    width:100%;
                    height: 14.1rem;
                    margin-bottom:2rem;
                    padding:1.5rem;
                    &::placeholder {
                        color: #aaa;
                        font-size: 12px;
                        font-style: normal;
                        line-height: 18px;
                    }
                }

            }
        }
    }
    > button {
        width:100%;
        margin-top:2rem;
    }
    hr {
        margin-top: 60px;
        margin-left: -21px;
        margin-right: -21px;
        border: 2px solid #eee;
    }
    > ul {
        li {
            dl {
                > * {
                    margin-bottom:1.5rem;
                }
                dt {
                    color: #666;
                }
                dd {
                    label.check {
                        width:13.7rem !important;
                        margin-right:1.7rem !important;
                    }
                }
            }
        }
    }
    em {
        padding-left: 0.5rem;
        color:#FF0000;
        font-size: 1.2rem;
        text-indent: -0.5rem;
        line-height: 1.6rem;
        display: block;
    }
    > button.btn_ {
        color:#fff;
        background-color: #eee;
        &::before {
            content:'';
            width:24px;
            height:24px;
            border:1px solid red;
            background-image: url('../../assets/mo_images/common/icon_split.png');
            background-repeat:no-repeat;
            background-size:250px;
            background-position:0px 0px;


        }
    }
}
</style>
