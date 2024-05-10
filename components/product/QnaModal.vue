<template>
  <div id="prod_qna_wrap" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>제품문의 작성</h2>
        <button class="btn_close" @click="modal.close(this);">닫기</button>
      </div>
      <div class="modal_content">
        <ul class="bul_list dot">
          <li>문의 내역 및 답변은 마이페이지 &gt; 내 상담내역 또는 답변확인에서 <br> 확인 가능합니다.</li>
          <li>제품문의 처리 시간은 09:00~18:00이며, 문의는 24시간 가능합니다.</li>
          <li>제품과 관련 없는 내용, 홍보, 불건전한 내용의 글은 사전 동의 없이<br> 삭제될 수 있습니다.</li>
          <li><span style="color: #bd1e31;">제품문의 본문에는 개인정보를 입력하지 말아주세요.<br>
            고객정보 보호를 위해 마스킹 처리될 수 있습니다.<br>
            (예: 성명, 연락처, 이메일주소, 계좌번호 등)</span>
          </li>
        </ul>
        <div class="ipt_wrap">
          <Inputs _type="text" _placeholder="제목을 입력하세요. (최대 30자 이내)" />
          <Textarea class="ipt_textarea" _placeholder="내용을 입력하세요." />
          <div class="text_count">0/300자</div>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="문의등록" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>

<script setup>
import { modal } from '~/assets/js/common-ui'
</script>

<style lang="scss" scoped>
.modal_wrap {
  .modal_container {
    max-width: 480px;

    h2 {
      font-size: 20px;
    }

    .modal_content {
      padding: 30px 30px 0;

      .ipt_wrap {
        margin: 20px 0;
        & > * + * {
          margin-top: 7px;
        }

        :deep(label.input){
          i,
          input[type='text'] {
            font-size: 14px;
          }
        }

        .ipt_textarea {
          :deep(label.input) {
            i {
              top: 14px;
              transform: none;
            }

            textarea {
              height: 160px;
              padding: 14px;
            }
          }
        }
      }

      .text_count {
        text-align: right;
        font-weight: 500;
        color: #777;
      }
    }

    .modal_footer {
      padding: 0 30px 30px;

      button {
        width: 100%;
      }
    }
  }
}
</style>
