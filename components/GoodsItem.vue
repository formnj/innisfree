<template>
  <div class="goods_item" :class="item.status">
    <div class="img_wrap">
      <a :href="props.link">
        <span class="thumb">
          <em><img :src="item.img" /></em>
          <em v-if="item.overflip" class="overflip"><img :src="item.overflip" /></em>
        </span>
      </a>
      <ul class="btnIconBox">
        <li><Button class="btn_heart" /></li>
        <li><Button class="btn_cart" @click="modal.open(item.cart_alert.modal_id, item.cart_alert.modal_type);" /></li>
        <li><Button class="btn_buy" /></li>
      </ul>
    </div>
    <a :href="props.link">
      <div class="cont">
        <p class="name">
          <strong>
            <em v-if="item.cate" class="cate">{{ item.cate }}</em>
            {{ item.name }}
          </strong>
        </p>
        <p class="price" v-if="item.price">
          <strong>{{ item.price }}원</strong>
          <span>{{ item.sale }}</span>
          <em>{{ item.cost }}원</em>
        </p>
        <!-- sticker -->
        <Sticker v-if="item.sticker" :item="item.sticker" />
        <!-- //sticker -->
        <!-- Hash -->
        <Hash v-if="item.hash" :item="item.hash" />
        <!-- //Hash -->
        <p v-if="!item.giveaway && item.reviewScore" class="review_score">
          {{ item.reviewScore.rate }}
          <em>({{ item.reviewScore.totalPoint }})</em>
        </p>
      </div>
    </a>
    <button v-if="item.giveaway" class="giveaway" @click="modal.open(item.giveaway.modal_id, props.modal_type);">
      <template v-for="(item, idx) in item.giveaway.goods" :key="idx">
        <img :src="item.img">
      </template>
    </button>
    <p v-if="item.giveaway && item.reviewScore" class="review_score">
      {{ item.reviewScore.rate }}
      <em>({{ item.reviewScore.totalPoint }})</em>
    </p>
  </div>

</template>

<script setup>
const props = defineProps({
    item: {},
    link: {
        type: String,
        default: '#none'
    },
    modal_type: String
})

import { modal } from '~/assets/js/common-ui.js'



</script>

<style lang="scss">
.goods_item {
  a {
    display:block;
  }
  &.sold_out, &.coming_soon {
      .img_wrap:before, .img_wrap:after {
          content:'';
          display:block;
      }
      .img_wrap:before {
          background-color:rgba(0,0,0,0.3);
          background-position:50%;
          background-repeat:no-repeat;
          position:absolute;
          top:0;
          right:0;
          bottom:0;
          left:0;
          z-index:1;
      }
      &.sold_out {
          .img_wrap:before {
              background-image:url('~/assets/images/ui/overlay_soldout.png');
          }
      }
      &.coming_soon {
          .img_wrap:before {
              background-image:url('~/assets/images/ui/overlay_comingsoon.png');
          }
      }
  }
  &.type_cart {
      padding-bottom: 0;
      .img_wrap {
        position: relative !important;
        .thumb {
          width:auto !important;
          height:14.5rem !important;
        }
        .btnIconBox {
          position:absolute;
          bottom:8px !important;
          right:0px;
          justify-content:end !important;
          .btn_heart,
          .btn_buy {
            display: none;
          }
          .btn_cart {
            position:relative;
          }
        }
      }
  }


  .img_wrap {
      position:relative;
      overflow:hidden;
      .thumb {
          height:320px;
          position:relative;
          display:block;
          em {
              position:absolute;
              top:0;
              right:0;
              bottom:0;
              left:0;
              display:flex;
              align-items:center;
              img {
                  width:100%;
                  height:100%;
                  display:block;
                  object-fit:cover;
              }
              &.overflip {
                  opacity:0;
                  top:50%;
                  bottom:50%;
                  transition:all 0.3s ease-out;
              }
          }
      }
      .btnIconBox {
          background-color:#00BC70;
          position:absolute;
          right:0;
          bottom:0;
          left:0;
          z-index:1;
          display:flex;
          justify-content:space-around;
          transform:translateY(100%);
          transition:transform 0.3s ease-out;
          button {
              height:auto;
              padding:14px 5px;
              font-size:0;
              background-color:transparent;
              em {
                  width:32px;
                  height:32px;
                  padding:0;
                  background-image:url('~/assets/images/common/icon_split.png');
                  background-repeat:no-repeat;
              }
              &.btn_heart {
                  em {
                      background-position:-220px 0;
                  }
              }
              &.btn_cart {
                  em {
                      background-position:-280px 0;
                  }
              }
              &.btn_buy {
                  em {
                      background-position:-340px 0;
                  }
              }
          }
      }
      &:hover {
          .overflip {
              opacity:1 !important;
              top:0 !important;
              right:0 !important;
              bottom:0 !important;
              left:0 !important;
          }
          .btnIconBox {
              transform:translateY(0);
          }
      }
  }
  .cont {
      margin-top:20px;
      .cate {
          margin-right:5px;
          font-weight:600;
      }
      .name {
          strong {
              color:#666;
              font-size:14px;
              font-weight:400;
          }
      }
      > .price {
          margin:10px 0 20px 0;
          strong {
              margin-right:10px;
              font-size:20px;
              font-weight:700;
          }
          span {
              margin-right:15px;
              color:#ff0000;
              font-size:20px;
              font-weight:300;
          }
          em {
              color:#999e9c;
              font-size:14px;
              font-weight:300;
              text-decoration:line-through;
          }
      }
  }
  .review_score {
      margin-top:15px;
      color:#999e9c;
      font-size:12px;
      display:flex;
      align-items:center;
      &:before {
          width:12px;
          height:12px;
          margin-right:2px;
          background-image:url('~/assets/images/common/icon_split.png');
          background-position:-400px 0;
          background-repeat:no-repeat;
          content:'';
          display:block;
      }
      em {
          margin-left:5px;
      }
  }
  button.giveaway {
    height:60px;
    padding:8px;
    margin-top:15px;
    border: 1px solid #eee;
    position:relative;
    z-index:2;
    display:flex;
    gap:3px;
    img {
      width:32.3px;
      display:block;
      flex:1;
    }
  }

  &.type_row {
    display:flex;
  }

}
</style>
