<template>
    <Tabs tabType="type_01" :item="[{txt:'1&#58;1 문의하기'},{txt:'답변확인'}]" :tabidx="0" />
        <div class="inner">
            <section>
                <dl>
                    <dt>문의제품</dt>
                    <dd>
                    <div class="multi_form">
                    <Inputs _type="text" _placeholder="주문 제품을 선택해주세요" />
                    <Button txt="제품선택" class="btn_outline" @click="modal.open('choice_modal', 'fullMo');" />
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
                        <!-- 24-04-25 Add -->
                        <Textarea _placeholder="내용을 입력해 주세요. 문의 내용 본문에는 개인정보를 입력하지 말아주세요. 고객정보보호를 위해 마스킹 처리될 수 있습니다.(예 : 성명, 연락처, 이메일주소, 계좌번호 등)" />
                        <!-- //24-04-25 Add -->
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
                <Button txt="문의하기" class="btn_ active" @click="modal.open('check_modal', 'full');"/>
            </section>
        </div>

        <div class="modal_wrap" id="choice_modal">
            <div class="modal_container">
                <div class="modal_header">
                    <h2>주문제품 선택</h2>
                    <button class="btn_close" @click="modal.close(this);">닫기</button>
                </div>
                <div class="modal_content">
                    <div class="inner">
                        <ul class="modal_tab_wrap">
                            <li><button class="active" @click="tab_click($event)">1개월</button></li>
                            <li><button @click="tab_click($event)">2개월</button></li>
                            <li><button @click="tab_click($event)">3개월</button></li>
                            <li><button @click="tab_click($event)">6개월</button></li>

                        </ul>
                        <div class="date_wrap">
                            <div class="date">
                                <input type="date" id="dpSttlDt1" required="required" value="2024-03-24">
                                <div class="dataValue">
                                    2024-03-24
                                </div>
                                <em></em>
	                          </div>
                            <div>~</div>
                            <div class="date">
                                <input type="date" id="dpSttlDt1" required="required" value="2024-03-24">
                                <div class="dataValue">
                                    2024-03-24
                                </div>
                                <em></em>
	                          </div>

                        </div>
                        <p class="alt">
                            최근 1년 구매내역만 검색 가능합니다
                        </p>
                        <Button class="btn_outline" txt="검색"/>
                    </div>
                    <section>
                        <div>
                            검색 내역이 없습니다.
                        </div>
                    </section>
                </div>
                <div class="modal_footer">
                </div>
            </div>
        </div>


        <div class="modal_wrap" id="check_modal">
          <div class="modal_container">
              <div class="modal_header">
                  <h2>알려드립니다.</h2>
              </div>
              <div class="modal_content">
                  1:1문의 작성이 완료되었습니다.
              </div>
              <div class="modal_footer">
                  <Button txt="확인" />
              </div>
          </div>
          <div class="overlay" @click="modal.close(this);"></div>
      </div>
</template>

<script setup>
definePageMeta({
layout: 'mo-category'
});
import { modal } from '~/assets/js/common-ui.js'

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});

const tab_click = (event)=>{
    let tab_title = document.querySelectorAll('.inner .modal_tab_wrap li button')
    console.log(tab_title)
    tab_title.forEach((a)=>{
        a.classList.remove('active')
    })
    const target = event.currentTarget;
    target.classList.add('active');
}

onMounted(() => {


})

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
            :deep(.input) {
                textarea {
                    height: 14.1rem;
                    margin-bottom:2rem;
                    padding:1.5rem;
                    resize: none;
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
        &.btn_outline {

            &::before {
                content:'';
                width:16px;
                height:16px;
                margin-right:-10px;
                background-image: url('../../assets/mo_images/common/icon_split.png');
                background-repeat:no-repeat;
                background-size:250px;
                background-position:-170px -135px;
            }
        }
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
        display: inline-block;
    }
    > button.btn_ {
        color:#fff;
        background-color: #eee;
        &::before {
            content:'';
            width:24px;
            height:24px;
            margin-right:-10px;
            background-image: url('../../assets/mo_images/common/icon_split.png');
            background-repeat:no-repeat;
            background-size:250px;
            background-position:-138px -130px;
        }
      &.active {
        background-color: #000;
        &::before {
          background-image: url('../../assets/mo_images/common/icon_split.png');
            background-repeat:no-repeat;
            background-size:250px;
            background-position:-138px -162px;
        }
      }
    }
}

#choice_modal {
    .modal_container {
        width:100% !important;
        max-height:100% !important;
        top:0;
        left:0;
        right:0;
        bottom:0;
        transform:translate(0px, 0px);
        .modal_header {
            h2 {
                font-size: 1.8rem;
                font-weight: 500;
                line-height: 2.4rem;
            }
        }
        .modal_content {
            .inner {
                padding: 0rem 1rem 2.4rem 1rem;
                border-bottom: 0.5rem solid #F5F5F5;
                ul {
                    display:flex;
                    align-items:center;
                    justify-content: space-between;
                    li {
                        width:25%;
                        &:first-of-type {
                            border-left: 0.1rem solid #ddd;
                        }
                        button {
                            width: 100%;
                            height: 4rem;
                            color: #999;
                            font-size: 1.2rem;
                            border: 0.1rem solid #ddd;
                            border-width: 0.1rem 0.1rem 0.1rem 0rem;
                            background: #f4f4f4;
                            text-align: center;
                            position: relative;
                            &.active {
                                color: #000;
                                border:0;
                                background:#fff;
                                &::before {
                                    content: "";
                                    width: 100%;
                                    height: 100%;
                                    border: 0.1rem solid #000;
                                    position: absolute;
                                    left:0;
                                    top:0;
                                }
                            }
                        }

                    }
                }
                .tab_wrap {
                    margin-left:0 !important;
                    margin-right:0 !important;
                     ul {
                         li {
                            &::v-deep > * {
                                height:40px !important;
                                font-size:1.3rem !important;
                            }
                        }
                    }
                }
                .date_wrap {
                    margin-top: 1.6rem;
                    overflow: hidden;
                    display:flex;
                    align-items: center;
                    justify-content:space-between;
                    .date {
                        width: calc(50% - 1.35rem);
                        height: 4rem;
                        padding: 0 1.5rem;
                        border: 0.1rem solid #eee;
                        align-items: center;
                        position: relative;
                        display: flex;
                        justify-content:space-between;
                        input {
                            position: absolute;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            left: 0;
                            z-index: 10;
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                            color: #000;
                        }
                        > em {
                            width:16px;
                            height:16px;
                            background-image: url('../../assets/mo_images/common/icon_split.png');
                            background-repeat:no-repeat;
                            background-size:250px;
                            background-position:-195px -135px;
                        }
                    }
                }
                .alt {
                    margin: 1rem 0 0;
                    color: #888;
                    font-size: 1.2rem;
                    &::before {
                        content: "*";
                        margin-right: 0.2rem;
                        display: inline-block;
                    }
                }
                > .btn_outline {
                    width:100%;
                    margin: 1.6rem auto 0 auto;
                }
            }
            section {
                div {
                    padding: 10rem 0;
                    text-align:center;
                }
            }
        }
    }
}

#check_modal {
  .modal_container {
    .modal_header {
      font-size:1.2rem;
      border-bottom:0;
    }
    .modal_content {
      padding:30px 30px 30px 20px;
    }
    .modal_footer {
      padding:0;
      button.btn_ {
        width:100%;
        padding:30px !important;
        background: #00BC70;
      }
    }
  }
}
</style>
