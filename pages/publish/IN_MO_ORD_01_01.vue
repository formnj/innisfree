<template>
  <div class="inner">
    <section>
      <div class="sub_title_wrap">
        <div>
          <h3>주문/배송 정보
          </h3>
        </div>
        <p class="explain">2024-05-03 17:41:36</p>
      </div>
    </section>
  </div>

  <!-- modal -->
  <div class="modal_wrap" id="my_delivery">
    <div class="modal_container">
        <div class="modal_header">
            <h2>배송조회</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <dl>
            <dt>CJ대한통운</dt>
            <dd>운송장 번호 540189756906</dd>
          </dl>
          <ul>
            <li>
              <div class="bold">
                <strong>배송완료</strong>
                <em>서울 용산</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
            <li>
              <div>
                <strong>간선하차</strong>
                <em>서울 용산</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
            <li>
              <div>
                <strong>간선하차</strong>
                <em>서울 용산</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
            <li>
              <div>
                <strong>간선하차</strong>
                <em>서울 용산</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
            <li>
              <div>
                <strong>집화수리</strong>
                <em>수지직영</em>
              </div>
              <span>2024-05-07 12:22:24</span>
            </li>
          </ul>
        </div>
    </div>
  </div>

</template>

<script setup>
definePageMeta({
layout:'mo-category'
});
import { modal } from '~/assets/js/common-ui.js'
import Button from '../../components/Button.vue';

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});




onMounted(() => {

/**
 * 전체보기버튼을 누르면, dl의 active가 사라진고, 전체보기버튼이 none, 닫기버튼에 active가 추가된다
 * 닫기버튼을 누르면 닫기버튼에 active가 사라지고 전체보기버튼의 active가 추가, dl의 active가 추가된다.
 */


})

</script>

<style lang="scss" scoped>
.inner {
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
    }
  }
}


.modal_wrap {
  &#my_delivery {
    .modal_container {
      .modal_content {
        padding-top:2rem;
        dl {
          margin:0 2rem;
          padding:1.5rem;
          color:#333;
          font-size:1.3rem;
          background-color:#F7F9FA;
          display:flex;
          align-items:center;
          dt {
            height:100%;
            margin-right:0.5rem;
          }
        }
        ul {
          margin: 3rem 2.8rem 0;
          overflow-y:hidden;
          position:relative;
          &::before {
              content:'';
              width:0.2rem;
              height:auto;
              background:#eee;
              position:absolute;
              top:0;
              left:1.2rem;
              bottom:5.0rem;
            }
          li {
            padding:0 0 2.5rem 3.3rem;
            position:relative;
            &:last-of-type {
              margin-bottom:0;
            }
            > * + * {
              margin-top: 0.5rem;
            }
            div {
              color:#333;
              font-size:1.3rem;
              &::before{
                content: "";
                width:1rem;
                height:1rem;
                border:0.2rem solid #ddd;
                border-radius:50%;
                background:#fff;
                box-sizing:border-box;
                position:absolute;
                left:0.8rem;
                top:0.1rem;
              }
              &.bold {
                color:#009D5E;
                &::before {
                  width:1.8rem;
                  height:1.8rem;
                  background-image: url('~/assets/mo_images/common/icon_split.png');
                  background-repeat:no-repeat;
                  background-size:25rem;
                  background-position:-0.4rem -30.6rem;
                  background-color:#00BC70 ;
                  border:0.1rem solid #00BC70;
                  left:0.4rem;
                  display:inline-block;
                }
              }

              strong {
                font-weight:600;
              }
              em {
                margin: 0 0 0 0.5rem;
                padding: 0 0 0 0.6rem;
                font-weight: 400;
                position: relative;
                &::before {
                  content:'';
                  width:0.1rem;
                  height:1rem;
                  background:#ddd;
                  position:absolute;
                  top:50%;
                  left:0;
                  transform:translateY(-50%);
                }
              }
            }
            span {
              color: #aaa;
              display:block;
            }
          }

        }
      }
    }
  }
}


</style>
