<template>
  <div id="modal_review" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>제품명</h2>
        <button class="btn_close" @click="modal.close(this);">닫기</button>
      </div>
      <div class="modal_content">
        <div v-for="(item, idx) in sample_review.slice(0, 1)" :key="idx" class="review_list">
          <div class="review_header">
            <div class="user_info">
              <span class="name">{{ item.user }}</span>
              <div class="rate">
                <Reviewpoint :width="item.rate" />
              </div>
              <span class="date">{{ item.date }}</span>
            </div>

            <div class="btn_wrap">
              <button type="button" class="btn_share">공유하기</button>
            </div>
          </div>
          <div class="review_header">
            <div class="user_info">
              <span class="age">{{ item.age }}</span>
              <span class="type">{{ item.type }}</span>
            </div>
            <div class="btn_wrap">
              <button type="button">신고</button>
              <button type="button">차단하기</button>
            </div>
          </div>
          <ProductReview :item="item" :isModal="true" :isMo="isMo"/> <!-- 리뷰 -->
        </div>

        <div v-if="!isMo">
          <div v-for="(item2, idx2) in sample_log.slice(0, 1)" :key="idx2" class="goods">
            <GoodsItem :item="item2.item[0]" :link="item2.item.link" />
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
</template>
<script setup>
import { modal } from '~/assets/js/common-ui'
import { sample_review, sample_log } from '~/test/data/publish/dummyData'
const props = defineProps({
  item: {},
  idx: Number,
  isModal: {
    type: Boolean,
    default: false
  },
  isMo: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" scoped>
.modal_wrap {
  .modal_container {
    width: 540px;

    .modal_content {
      padding: 20px 30px;
      max-height: 700px;

      .review_list {
        .review_header {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;

          .user_info {
            display: flex;
            align-items: center;

            &>span {
              color: #888;
              display: inline-block;

              &+*:before {
                content: '';
                width: 1px;
                height: 10px;
                margin: 0 10px;
                background-color: #EEE;
                display: inline-block;
              }

              &.name {
                font-weight: 600;
                color: #000;
              }

              &.age {
                color: #000;
              }

              &.date {
                font-weight: 300;
              }
            }
          }

          .btn_wrap {
            display: flex;

            button {
              font-size: 13px;
              color: #999;

              &+button {
                &:before {
                  content: '';
                  width: 1px;
                  height: 10px;
                  margin: 0 10px;
                  background-color: #EEE;
                  display: inline-block;
                }
              }

              &.btn_share {
                width: 24px;
                height: 24px;
                font-size: 0;
                background: url("~/assets/images/common/icon_split.png") -470px -140px no-repeat;
              }
            }
          }
        }

        :deep(.review) {
          .option_name {
            color: #888;
            font-weight: 400;

            em {
              font-weight: 600;
              color: #333;
              vertical-align: middle;

              &:before {
                content: '';
                width: 1px;
                height: 10px;
                margin: 0 10px;
                background-color: #EEE;
                display: inline-block;
              }
            }
          }

          .txt {
            font-size: 13px;
            line-height: 20px;
          }
        }
      }

      .goods {
        margin-top: 30px;
        padding-top: 30px;
        border-top: 1px solid #eee;
        position: relative;

        :deep(.goods_item),
        :deep(.event_item .item) {
          display: flex;

          .img_wrap,
          .thumb {
            width: 90px;
          }

          .cont {
            flex: 1;
          }
        }

        :deep(.goods_item) {
          align-items: center;

          .img_wrap {
            height: 120px;
            margin-right: 20px;

            .thumb {
              height: 100%;
            }

            .btnIconBox {
              display: none;
            }
          }

          .cont {
            margin-top: 0;

            .price {
              margin-bottom: 0;
              >* {
                font-size: 14px;
              }

              em {
                font-size: 13px;
              }
            }
          }

          .sticker,
          .hash,
          .review_score {
            display: none;
          }
        }
      }
    }
  }
}
</style>
