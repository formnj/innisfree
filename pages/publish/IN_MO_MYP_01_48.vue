<template>
    <Tabs tabType="type_01" :item="[{txt:'1&#58;1 문의하기'},{txt:'답변확인'}]" :tabidx="0" />
        <div class="inner">
          <dl class="board_type_toggle single">
            <dt>
              <a href="#none">
                <div>
                  <em class="type_01">답변대기중</em>
                </div>
                <p>뷰티포인트 소멸시기가 궁금합니다.</p>
                <span>2024-04-24 08:22:50</span>
                <em></em>
              </a>
            </dt>
            <dd>
              <p>뷰티포인트 소멸시기가 궁금합니다.</p>
              <div>
                <span>답변</span>
                안녕하세요 고객님. 이니스프리입니다.
                먼저, 저희 이니스프리에 관심을 가져주시고
                이용해 주시는 고객님께 진심으로 감사의 마음을 전합니다.
                구매적립으로 인하여 적립된 뷰티포인트는 최종구매일로부터 1년이나 새용가능하며, 해당 기간 내 미사용시 소멸됩니다.
                이벤트로 인하여 적립된 뷰티포인트는 각 이벤트별로 정해진 기한 내 사용가능하며, 해당 기간 내 미사용시 소멸됩니다.
                고객님의 뷰티포인트 확인시 현재 보유한 뷰티포인트가 없는 것으로 확인되며,
                기존 보유하셨던 뷰티포인트의 소멸기한이 궁금하신 부분이라면
                아모레퍼시픽 뷰티포인트 상담실(080-023-5454/오전 9시 - 6시, 단, 12시 - 1시 점심시간 제외)로 문의부탁드립니다.
                소중한 시간 내어 문의 주신 점 감사 드립니다.
                행복한 하루 보내세요.
                <button class="btn_outline" @click="modal.open('delete_modal', 'alert')">
                  문의취소
                </button>
              </div>
            </dd>
            <dt>
              <a href="#none">
                <div>
                  <em class="type_02">답변완료</em>
                </div>
                <p>뷰티포인트 소멸시기가 궁금합니다.</p>
                <span>2024-04-24 08:22:50</span>
                <em></em>
              </a>
            </dt>
            <dd>
              <p>뷰티포인트 소멸시기가 궁금합니다.</p>
              <div>
                <span>답변</span>
                안녕하세요 고객님. 이니스프리입니다.
                먼저, 저희 이니스프리에 관심을 가져주시고
                이용해 주시는 고객님께 진심으로 감사의 마음을 전합니다.
                구매적립으로 인하여 적립된 뷰티포인트는 최종구매일로부터 1년이나 새용가능하며, 해당 기간 내 미사용시 소멸됩니다.
                이벤트로 인하여 적립된 뷰티포인트는 각 이벤트별로 정해진 기한 내 사용가능하며, 해당 기간 내 미사용시 소멸됩니다.
                고객님의 뷰티포인트 확인시 현재 보유한 뷰티포인트가 없는 것으로 확인되며,
                기존 보유하셨던 뷰티포인트의 소멸기한이 궁금하신 부분이라면
                아모레퍼시픽 뷰티포인트 상담실(080-023-5454/오전 9시 - 6시, 단, 12시 - 1시 점심시간 제외)로 문의부탁드립니다.
                소중한 시간 내어 문의 주신 점 감사 드립니다.
                행복한 하루 보내세요.
              </div>
            </dd>
          </dl>
        </div>

        <div class="modal_wrap" id="delete_modal">
          <div class="modal_container">
              <div class="modal_header">
                  <h2>알림</h2>
                  <button class="btn_close" @click="modal.close(this);">닫기</button>
              </div>
              <div class="modal_content">
                  <div>해당 상담내역을 삭제 하시겠습니까?</div>
              </div>
              <div class="modal_footer">
                  <Button class="btn_ confirm" txt="확인" @click="modal.close(this);"/>
              </div>
          </div>
          <div class="overlay" @click="modal.close(this);"></div>
        </div>


</template>

<script setup>
import { createUnparsedSourceFile } from 'typescript';

definePageMeta({
layout:'mo-category'
});
const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  link: {
      type: String,
      default: '#none'
  }
});

import { modal } from '~/assets/js/common-ui.js'

onMounted(() => {

  /* accordion */
function accordion(_target, evt){ // 23.08.18 nextElementSibling 테그가 없는 경우를 위한 수정
    var evt;
    var rotate_icon= document.querySelectorAll('.board_type_toggle dt > a > em');
    console.log(rotate_icon)
    accordion = document.querySelectorAll(_target, evt);
    console.log('accordion :', accordion)
    accordion.forEach(el => {
        console.log('el :', el)
        el.querySelectorAll('.board_type_toggle > dt > a').forEach((el, i) => {
            el.addEventListener(evt, function(){
                if(el.closest('dl').classList.contains('single')){
                    console.log('closet :', el.closest('dl'))
                    const parent_index = Array.from(el.closest('dl').getElementsByTagName('dt')).indexOf(el.parentNode);
                    console.log('parent_index :', parent_index)
                    var j
                    for(j=0; j<el.closest('dl').getElementsByTagName('dt').length; j++){
                        if(i != j && el.closest('dl').getElementsByTagName('dt')[j].nextElementSibling != null){
                            el.closest('dl').getElementsByTagName('dt')[j].nextElementSibling.classList.remove('show');
                            rotate_icon[j].classList.remove('active');
                            console.log('rotate', rotate_icon[j])
                        }
                    }
                }

                if(el.parentNode.nextElementSibling != null){
                    if(el.parentNode.nextElementSibling.classList.contains('show')){
                        el.parentNode.nextElementSibling.style.height = '0px'

                        el.parentNode.nextElementSibling.addEventListener('transitionend', () => {
                            el.parentNode.nextElementSibling.classList.remove('show');
                            console.log('el.parentNode.nextElementSibling', el.parentNode.nextElementSibling)
                            console.log('el.parentNode.firstElementChild.lastElementChild')
                            el.parentNode.firstElementChild.lastElementChild.classList.remove('active')
                        }, {once: true});
                    } else {
                        el.parentNode.nextElementSibling.classList.add('show');
                        el.parentNode.firstElementChild.lastElementChild.classList.add('active')


                        el.parentNode.nextElementSibling.style.height = 'auto'
                        var height = el.parentNode.nextElementSibling.clientHeight + 'px'
                        el.parentNode.nextElementSibling.style.height = '0px'
                        setTimeout(() => {
                            el.parentNode.nextElementSibling.style.height = height
                        });
                    }
                }
            });
        });
    });
}

accordion('.board_type_toggle', 'click')

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

.board_type_toggle {
  dt {
    margin-left:-2.0rem;
    margin-right:-2.0rem;
    padding:3rem 3rem;
    border-bottom: #f4f4f4 solid 0.1rem;
    position:relative;
    a {
      div {
        em {
          padding: 0.2rem 0.5rem;
          color: #fff;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.4rem;
          letter-spacing: 0;
          display:inline-block;
          &.type_01 {
            background:#00BC70;
          }
          &.type_02 {
            background:#1B8DF7;
          }
        }
      }
      p {
        margin-top:1rem;
        color:#333;
        font-size:1.4rem;
        line-height:1.8rem;
      }
      span {
        color:#999;
        padding-top: 0.6rem;
        font-size:1.2rem;
        font-weight:300;
        line-height:1.6rem;
        display:inline-block;
      }
      > em {
      width:24px;
      height:24px;
      background-image: url('~/assets/mo_images/common/icon_split.png');
      background-repeat:no-repeat;
      background-size:250px;
      background-position:-5px -215px;
      position:absolute;
      top:50%;
      right:2rem;
      display:inline-block;
      transform:translateY(-50%);
      transition:all 0.3s;
      &.active {
        transform:translateY(-50%) rotate(180deg);
      }

      }
    }
  }
  dd {
    margin-left:-2.0rem;
    margin-right:-2.0rem;
    padding:3rem 3rem;
    color:#666;
    font-size:13px;
    line-height:20px;
    background:#F5F5F5;
    overflow:hidden;
    display:none;
    transition:height 0.2s ease-out;
    div {
      margin-top:2rem;
      padding-top:2rem;
      border-top:0.1rem solid #ddd;;
      display:flex;
      flex-direction:column;
      span {
        margin-bottom:1rem;
        color: #333;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 1.6rem;
        display: block;
      }
      button {
        &[class*=btn_][class*=_outline]{
          width:5.3rem;
          height:2.5rem;
          margin-left:auto;
          color:#999;
          font-size:1rem;
          border:0.1rem solid #999;
          border-radius:1px;
          display:block;
        }
      }
    }
  }
}
.show {display:block !important;}

</style>
