<template>
  <div class="inner">


    <div class="title_wrap" :data-layout="props.layoutType">
        <h2>찜한 제품</h2>
        <div>
          <Inputs _type="checkbox" _text="전체 선택" />
          <Button class="btn_min_outline" txt="선택 삭제" />
        </div>
    </div>

    <div class="table_wrap">
        <table>
            <caption>찜한 제품</caption>
            <colgroup>
                <col style="width:65px">
                <col style="width:100px">
                <col style="">
                <col style="width:110px">
                <col style="width:350px">
            </colgroup>
            <tbody>
                <tr>
                  <td>
                    <Inputs _type="checkbox" />
                  </td>
                  <td>
                    <a href="#none">
                      <img src="/_nuxt/assets/images/sam/MYP_01_04_1.jpg" alt="">
                    </a>
                  </td>
                  <td class="name">
                    <a href="#none">비타C 그린티 엔자임 잡티 토닝 패드 x 2개 패키지</a>
                  </td>
                  <td class="price">
                    <del>56,000원</del>
                    <span>42,000원</span>
                  </td>
                  <td class="btn">
                    <div class="btn_wrap">
                      <Button class="btn_outline" txt="바로구매" />
                      <Button class="btn_outline" txt="장바구니로 이동" />
                      <a href="#none"></a>
                    </div>
                  </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="paging">
        <div>
            <a href="#none" class="first">처음으로</a>
            <a href="#none">1</a>
            <a href="#none">2</a>
            <a href="#none" class="active">3</a>
            <a href="#none">4</a>
            <a href="#none">5</a>
            <a href="#none" class="last">마지막으로</a>
        </div>
    </div>
    <span>찜한 제품의 구매를 원하시면 해당 제품을 선택 후 ‘장바구니 이동’ 버튼을 통해 구매하실 수 있습니다.</span>
    <span>선택 및 장바구니 이동 불가 : 일시 품절, 모바일/APP 전용 제품(삭제만 가능)</span>

    <Button class="btn_ confirm" txt="장바구니로 이동"/>
  </div>



  <!--modal-->
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
            <Button class="btn_ confirm" txt="확인" />
            <Button txt="취소" @click="modal.close(this);"/>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>







</template>

<script setup>
definePageMeta({
layout:'pc-mypage'
});

import { modal } from '~/assets/js/common-ui.js'

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type:String,
    default:'default'
  }
});


</script>

<style lang="scss" scoped>
.title_wrap {
  padding:0;
  margin-bottom:15px;
  display:flex;
  flex-direction:column;
  h2 {
    margin-bottom:30px;
    font-size:24px !important;
    font-weight:600;
  }
  > div {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ::v-deep .btn_min_outline {
      width:84px !important;;
      em {
        padding:0 14px;
        color:#999;
        font-size:11px;
      }
    }
  }
}

.inner {
  > span {
    margin-top:10px;
    color:#FF0000;
    font-size:12;
    display:block;
  }
}

.table_wrap {
    border-top: 2px solid #000;
    table {
        width:100%;
        border-collapse: collapse;
        border:0;
        table-layout: fixed;
        caption {
            display:none;
        }
        tbody {
            tr {
                td {
                    height:100% !important;
                    padding:30px 0;
                    font-size:16px;
                    border-bottom:1px solid #f5f5f5;
                    text-align:center;
                  &.btn {
                    position:relative;
                    .btn_wrap {
                      display:flex;
                      align-items:center;
                      justify-content:center;
                      gap:8px;
                      ::v-deep button.btn_outline {
                        width:120px;
                        height:30px;
                        font :12px / 40px 'Pretendard', 'SDNeoL', 'notoR';
                        border:1px solid #000;
                        em {
                          color:#000;
                        }
                      }
                      > a {
                        width:24px;
                        height:24px;
                        border:1px solid red;
                        background-image: url('/_nuxt/assets/images/common/icon_split.png');
                        background-repeat:no-repeat;
                        background-size:250px;
                        background-position:-25px -212px;
                        display:block;
                      }
                    }
                  }
                    ::v-deep button.btn_outline {
                        em {
                            padding:0 5px;
                            color:#999;
                            font-weight:600;
                        }
                    }
                    &:first-of-type {
                      vertical-align:top;
                    }
                    &.name {
                      padding-left:20px;
                      text-align:left;
                    }
                    &.price {
                      text-align:right;
                      del {
                        color: #aaa;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 1.29em;
                      }
                      span {
                        margin-top:5px;
                        font-size:18px;
                        font-weight:700;
                        display:inline-block;
                      }
                    }
                }

            }
        }
    }

}

.modal_wrap {
  &#adress_add_modal{
    .modal_container {
      width:720px;
    }
  }
  &#adress_modify_modal {
    .modal_container {
      width:720px;
    }
  }
  &#shippingArmyInfo{
    .modal_container {
      max-width:640px;
      top: 350px;
      left: 560px;
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
        ::v-deep button.btn_outline {
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
}

</style>
