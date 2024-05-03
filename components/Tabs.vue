<template>
    <div class="tab_wrap" :class="isProduct?'product':''">
        <ul :class="tabType">
            <li v-for="(item, idx) in item" :key="idx" :class="{ current: tabidx == idx }" >
                <Button :txt="item.txt" @click="tabidx = idx" />
                <span v-if="isProduct && item.txt =='리뷰'">{{ reviewCnt }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>

const props = defineProps({
    item: {},
    tabidx: Number,
    tabType: String,
    isProduct: Boolean,
    reviewCnt: Number,
});
</script>

<style lang="scss" scoped>


.tab_wrap {
  ul {
    display:flex;
    li {
        margin-left:-1px;
        flex:1;
        &::v-deep > button {
            width:100%;
            height:51px;
            font-size:16px;
            background-color:transparent;
            border:1px solid #eee;
            position:relative;
            display:block;
            transition:border 0.25s;
            em {
                color:#666;
                transition:color 0.25s;
            }
        }
        &:hover > button {
            border-color:#00BC70;
            z-index:2;
            ::v-deep em {
                color:#00BC70;
            }
        }
        &.current > button {
            border-color:#000;
            z-index:1;
            ::v-deep em {
                color:#000;
                font-weight:600;
            }
        }
    }
    &.type_01 {
        li {
        &::v-deep > button {
            height:60px;
            font-size:14px;
            border:0;
            transition:initial;
            &:after {
              border-bottom:1px solid #f5f5f5;
              content:'';
              position:absolute;
              right:0;
              bottom:0;
              left:0;
            }
            em {
                color:#888;
                transition:initial;
            }
        }
        &.current {
          ::v-deep > button {
            &:after {
              border-bottom:2px solid #000;
            }
            em {
              color:#000;
              font-weight:700;
            }
          }
        }
      }
    }
    &.type_02 {
      margin-top:-10px;
      margin-left:-10px;
      li {
        padding-top:10px;
        padding-left:10px;
        flex:0 auto;
        &::v-deep > button {
          height:auto;
          font-size:14px;
          background-color:#f5f5f5;
          border-color:#f5f5f5;
          border-radius:999px;
          em {
            padding:6px 20px;
            color:#999e9c;
            white-space:nowrap;
          }
        }
        &.current {
          &::v-deep > button {
            background-color:#fff;
            border-color:#000;
            em {
              color:#000;
            }
          }
        }
      }
    }
    &.type_03 {
      li {
        :deep(button) {
          height:62px;
          border-color:#a7a7a7;
          em {
            color:#666;
          }
        }
        &.current {
          background:#000;
          :deep(button) {
            em {
              color:#fff;
            }
          }
        }
      }
    }
    &.type_txt {
      margin-left:-30px;
      position:relative;
      &:after {
        border-bottom:1px solid #eee;
        content:'';
        position:absolute;
        right:0;
        bottom:0;
        left:30px;
      }
      li {
        flex:0 auto;
        &::v-deep > button {
          height:auto;
          padding:0 30px;
          border:0;
          em {
            padding:0 0 19px 0;
            color:#999;
            font-size:16px;
            font-weight:400;
            position:relative;
          }
        }
        &.current {
          ::v-deep > button {
            em {
              color:#000;
              font-weight:600;
              &:after {
                border-bottom:2px solid #000;
                content:'';
                position:absolute;
                right:0;
                bottom:0;
                left:0;
              }
            }
          }
        }
      }

    }
    &.type_03 {
      li {
        margin-left:-1px;
        flex:1;
        &::v-deep > button {
            width:100%;
            height:64px;
            font-size:16px;
            background-color:transparent;
            border:1px solid #eee;
            position:relative;
            display:block;
            transition:border 0.25s;
            em {
                color:#666;
                transition:color 0.25s;
            }
        }
        &.current > button {
            border-color:#000;
            background: #000 !important;
            z-index:1;
            ::v-deep em {
                color:#fff;
                font-weight:600;
            }
        }
      }
    }
  }
  &.product {
    li {
      position: relative;
      span {
        font-size: 10px;
        color: #888;
        position: absolute;
        left: 50%;
        top: 22px;
        transform: translateX(15px)
      }
    }
  }
}
</style>
