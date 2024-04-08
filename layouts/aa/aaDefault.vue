<template>
  <div id="wrap" :class="device">
    <InmHeader :device="device" :is-mobile="isMobile" />
    <!-- <HeaderPublish :device="device" /> -->
    <div id="container">
      <slot :device="device" />
    </div>
    <InmFooter :device="device" :is-mobile="isMobile" />
    <!-- <Actionbar device="PC" /> -->
  </div>
</template>
<script setup lang="ts">
const device = ref<string>('PC')
const isMobile = ref<boolean>(false)
</script>
<style lang="scss">
#wrap.PC {
  header {
    border-bottom: 1px solid #f5f5f5;
    position: relative;
    .inner {
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      h1 {
        a {
          display: block;
          img {
            height: 20px;
          }
        }
      }
      .search_wrap {
        width: 400px;
        margin: 30px;
        position: relative;
        .search {
          padding-right: 15px;
          border: 1px solid #00bc70;
          border-radius: 40px;
          overflow: hidden;
          display: flex;
          align-items: center;
          .input {
            input {
              height: 38px;
              padding: 0 10px 0 20px;
              border: 0;
            }
            i {
              font-size: 14px;
            }
          }
          .btn_search {
            width: 24px;
            height: 24px;
            font-size: 0;
            background-color: transparent;
            background-image: url('~/assets/images/common/icon_split.png');
            background-position: 0 -30px;
            background-repeat: no-repeat;
            background-size: 250px auto;
            position: relative;
          }
        }
      }
      .search_layer {
        background-color: #fff;
        border: 2px solid #00bc70;
        border-radius: 10px;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
        overflow: hidden;
        position: absolute;
        top: -1px;
        right: 0;
        left: 0;
        z-index: 10;
        display: none;
        &.active {
          display: block;
        }
        strong {
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: 600;
          position: relative;
          display: flex;
          justify-content: space-between;
          .btn_txt {
            em {
              color: #999;
              font-size: 12px;
            }
          }
        }
        .search {
          border: 0;
          border-bottom: 1px solid #ddd;
          border-radius: 0;
          display: block;
          & > div {
            display: flex;
            align-items: center;
            flex: 1;
          }
        }
        section {
          padding: 28px;
          & + section:before {
            border-top: 1px solid #eee;
            content: '';
            display: block;
            transform: translateY(-28px);
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            &.latest {
              margin-top: -10px;
              margin-left: -5px;
              li:not(.no_data) {
                margin-top: 10px;
                margin-left: 5px;
                padding: 0 15px;
                border: 1px solid #ddd;
                border-radius: 100px;
                div {
                  display: flex;
                  align-items: center;
                }
              }
              li.no_data {
                width: 100%;
                padding: 50px 10px;
                color: #999;
                text-align: center;
              }
              a {
                padding: 7px 0;
                color: #333;
                font-size: 14px;
                font-weight: 400;
                display: block;
              }
              .btn_del {
                width: 12px;
                height: 12px;
                margin-top: 1px;
                margin-left: 10px;
                background-color: transparent;
                position: relative;
                &:before,
                &:after {
                  width: 10px;
                  margin-top: 5px;
                  margin-left: 1px;
                  border-top: 1px solid #999;
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  display: block;
                }
                &:before {
                  transform: rotate(45deg);
                }
                &:after {
                  transform: rotate(135deg);
                }
                em {
                  padding: 0;
                  font-size: 0;
                }
              }
            }
            &.category {
              margin-top: -14px;
              margin-left: -14px;
              li {
                width: 20%;
                padding-top: 14px;
                padding-left: 14px;
                p {
                  margin-top: 8px;
                  color: #888;
                  font-size: 12px;
                  font-weight: 400;
                  text-align: center;
                }
              }
            }
          }
        }
      }
      .keyword_wrap {
        height: 40px;
        font-weight: 600;
        overflow: hidden;
        li > * {
          padding: 11px 0;
          line-height: 18px;
          display: flex;
          align-items: center;
          em {
            width: 22px;
            margin-right: 5px;
            font-size: 13px;
            text-align: center;
          }
          &:after {
            width: 12px;
            height: 12px;
            margin-left: 10px;
            background-image: url('~/assets/images/common/icon_split.png');
            background-position: -20px -60px;
            background-repeat: no-repeat;
            background-size: 250px auto;
            content: '';
            display: block;
          }
          &.up:after {
            background-position: 0 -60px;
          }
          &.down:after {
            background-position: -40px -60px;
          }
          &.new:after {
            background-position: -60px -60px;
          }
        }
      }
      .quick_wrap {
        margin-top: 20px;
        margin-bottom: auto;
        margin-left: auto;
        display: flex;
        ul {
          display: flex;
          &.quick {
            li {
              position: relative;
              & + li:before {
                height: 10px;
                border-left: 1px solid #eee;
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                display: block;
                transform: translateY(-50%);
              }
            }
            a {
              padding: 4px 16px;
              color: #666;
              font-size: 12px;
              display: block;
            }
          }
          &.icon_menu {
            font-size: 0;
            li {
              margin-left: 12px;
            }
            li > * {
              width: 24px;
              height: 24px;
              background-image: url('~/assets/images/common/icon_split.png');
              background-repeat: no-repeat;
              background-size: 250px auto;
              position: relative;
              display: block;
              &.wish {
                background-position: -110px -30px;
              }
              &.mypage {
                background-position: -140px -30px;
              }
              &.delivery {
                background-position: -170px -30px;
              }
              &.cart {
                background-position: -200px -30px;
                em {
                  width: 17px;
                  height: 17px;
                  color: #fff;
                  font-size: 10px;
                  font-weight: 600;
                  line-height: 17px;
                  background-color: #00bc70;
                  border-radius: 50%;
                  position: absolute;
                  right: -5px;
                  bottom: -2px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }
            }
          }
        }
      }
    }
    .gnb_wrap {
      border: 1px solid #f5f5f5;
      border-right: 0;
      border-left: 0;
      .inner {
        & > ul,
        nav > ul {
          position: relative;
          z-index: 1;
          display: flex;
        }
        .btn_category {
          width: 140px;
          height: auto;
          padding: 18px 0 19px;
          background-color: transparent;
          em {
            padding-right: 0;
            padding-left: 34px;
            color: #000;
            font-size: 16px;
            font-weight: 600;
            position: relative;
            &:before,
            &:after {
              border-top: 2px solid #000;
              content: '';
              position: absolute;
              top: 5px;
              left: 4px;
              display: block;
            }
            &:before {
              width: 16px;
              height: 12px;
              border-bottom: 2px solid #000;
              border-right: 0;
              border-left: 0;
            }
            &:after {
              width: 16px;
              margin-top: -1px;
              border-top: 2px solid #000;
              top: 50%;
            }
          }
          &.active {
            padding: 18px 31px 18px 20px;
            border: 1px solid #eee;
            border-top: 0;
            border-bottom: 0;
            box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
            em:before,
            em:after {
              border-color: #00bc70;
            }
          }
        }
        .quick {
          margin-left: auto;
          li + li {
            margin-left: 6px;
          }
          a {
            padding: 6px 12px;
            color: #666;
            font-size: 12px;
            font-weight: 600;
            border: 1px solid #ddd;
            border-radius: 100px;
            display: block;
          }
        }
        .navGnb {
          padding-left: 28px;
          li {
            height: 58px;
            padding: 0 4px;
            display: flex;
            align-items: center;
          }
          a {
            padding: 0 8px;
            font-size: 16px;
            font-weight: 600;
            position: relative;
            display: block;
            &.point {
              padding-right: 18px;
              &:after {
                width: 5px;
                height: 5px;
                background-color: #00bc70;
                border-radius: 50%;
                content: '';
                position: absolute;
                top: 0;
                right: 8px;
                display: block;
              }
            }
          }
        }
      }
      .navCategory {
        background-color: #fff;
        position: absolute;
        top: 100%; //button height
        right: 0;
        left: 0;
        z-index: 1;
        display: none;
        transition: height 0.28s ease-out;
        &.active {
          display: block;
        }
        nav {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
          background-color: #fff;
          position: relative;
          display: flex;
          gap: 40px;
          .nav_wrap {
            display: flex;
            dl {
              & + dl {
                margin-left: 40px;
              }
            }
          }
        }
        .btn_category {
          height: 60px;
          padding: 0 10px 0 30px;
          border: 1px solid #eee;
          border-bottom: 0;
          background-color: #fff;
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(-100%);
          em {
            padding-left: 34px;
            color: #000;
            font-size: 16px;
            font-weight: 600;
            position: relative;
            &:before,
            &:after {
              border-top: 2px solid #00bc70;
              content: '';
              position: absolute;
              top: 5px;
              left: 4px;
              display: block;
            }
            &:before {
              width: 16px;
              height: 12px;
              border-bottom: 2px solid #00bc70;
              border-right: 0;
              border-left: 0;
            }
            &:after {
              width: 16px;
              margin-top: -1px;
              border-top: 2px solid #00bc70;
              top: 50%;
            }
          }
        }
      }
    }
  }
}

#wrap.MO {
  header {
    padding: 10px 21px 0;
    position: relative;
    .inner {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      h1 {
        a {
          display: block;
          img {
            height: 16px;
          }
        }
      }
      .icon_menu {
        font-size: 0;
        li > * {
          width: 32px;
          height: 32px;
          background-image: url('~/assets/mo_images/common/icon_split.png');
          background-repeat: no-repeat;
          background-size: 250px auto;
          position: relative;
          display: block;
          &.cart {
            background-position: -40px 0;
            em {
              height: 17px;
              padding: 0 5px;
              color: #fff;
              font-size: 10px;
              font-weight: 600;
              line-height: 17px;
              background-color: #000;
              border-radius: 100px;
              position: absolute;
              right: -5px;
              bottom: -5px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
      .search_wrap {
        margin-left: auto;
        position: relative;
        & > .search {
          .label_wrap {
            display: none;
          }
          .btn_search {
            width: 32px;
            height: 32px;
            font-size: 0;
            background-color: transparent;
            background-image: url('~/assets/mo_images/common/icon_split.png');
            background-position: 0 0;
            background-repeat: no-repeat;
            background-size: 250px auto;
            position: relative;
          }
        }
      }
      .search_layer {
        background-color: #fff;
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        display: none;
        &.active {
          display: block;
        }
        strong {
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: 600;
          position: relative;
          display: flex;
          justify-content: space-between;
          .btn_txt {
            em {
              color: #999;
              font-size: 12px;
            }
          }
        }
        .search {
          padding: 10px 16px 10px 21px;
          border: 0;
          border-bottom: 1px solid #ddd;
          border-radius: 0;
          display: flex;
          & > div {
            border: 1px solid #000;
            border-radius: 5px;
            overflow: hidden;
            display: flex;
            align-items: center;
            flex: 1;
          }
          .input {
            input {
              padding-right: 5px;
              font-size: 13px;
              border: 0;
            }
            i {
              font-size: 13px;
            }
          }
          .btn_search {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            background-color: transparent;
            background-image: url('~/assets/mo_images/common/icon_split.png');
            background-position: 0 -40px;
            background-repeat: no-repeat;
            background-size: 250px auto;
            display: block;
            em {
              padding: 0;
              font-size: 0;
            }
          }
          .icon_menu {
            margin-left: 10px;
            display: flex;
            align-items: center;
            li + li {
              margin-left: 10px;
            }
          }
        }
        section {
          padding: 28px;
          & + section:before {
            border-top: 1px solid #eee;
            content: '';
            display: block;
            transform: translateY(-28px);
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            &.latest {
              margin-top: -10px;
              margin-left: -5px;
              li:not(.no_data) {
                margin-top: 10px;
                margin-left: 5px;
                padding: 0 15px;
                border: 1px solid #ddd;
                border-radius: 100px;
                div {
                  display: flex;
                  align-items: center;
                }
              }
              li.no_data {
                width: 100%;
                padding: 50px 10px;
                color: #999;
                text-align: center;
              }
              a {
                padding: 7px 0;
                color: #333;
                font-size: 14px;
                font-weight: 400;
                display: block;
              }
              .btn_del {
                width: 12px;
                height: 12px;
                margin-top: 1px;
                margin-left: 10px;
                background-color: transparent;
                position: relative;
                &:before,
                &:after {
                  width: 10px;
                  margin-top: 5px;
                  margin-left: 1px;
                  border-top: 1px solid #999;
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  display: block;
                }
                &:before {
                  transform: rotate(45deg);
                }
                &:after {
                  transform: rotate(135deg);
                }
                em {
                  padding: 0;
                  font-size: 0;
                }
              }
            }
            &.category {
              margin-top: -14px;
              margin-left: -14px;
              li {
                width: 20%;
                padding-top: 14px;
                padding-left: 14px;
                p {
                  margin-top: 8px;
                  color: #888;
                  font-size: 12px;
                  font-weight: 400;
                  text-align: center;
                }
              }
            }
          }
        }
      }
      .keyword_wrap {
        height: 40px;
        font-weight: 600;
        overflow: hidden;
        li > * {
          padding: 11px 0;
          line-height: 18px;
          display: flex;
          align-items: center;
          em {
            width: 22px;
            margin-right: 5px;
            font-size: 13px;
            text-align: center;
          }
          &:after {
            width: 12px;
            height: 12px;
            margin-left: 10px;
            background-image: url('~/assets/images/common/icon_split.png');
            background-position: -20px -60px;
            background-repeat: no-repeat;
            background-size: 250px auto;
            content: '';
            display: block;
          }
          &.up:after {
            background-position: 0 -60px;
          }
          &.down:after {
            background-position: -40px -60px;
          }
          &.new:after {
            background-position: -60px -60px;
          }
        }
      }
      .quick_wrap {
        display: flex;
        ul {
          display: flex;
          &.quick {
            li {
              position: relative;
              & + li:before {
                height: 10px;
                border-left: 1px solid #eee;
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                display: block;
                transform: translateY(-50%);
              }
            }
            a {
              padding: 4px 16px;
              color: #666;
              font-size: 12px;
              display: block;
            }
          }
          &.icon_menu {
            margin-right: 5px;
          }
        }
      }
    }
    .gnb_wrap {
      margin: 6px -21px 0;
      overflow: hidden;
      .inner {
        padding: 0 13px;
        overflow: auto;
        display: flex;
        align-items: center;
        & > ul,
        nav > ul {
          position: relative;
          z-index: 1;
          display: flex;
        }
        .quick {
          margin-left: auto;
          li + li {
            margin-left: 6px;
          }
          a {
            padding: 6px 12px;
            color: #666;
            font-size: 12px;
            font-weight: 600;
            border: 1px solid #ddd;
            border-radius: 100px;
            display: block;
          }
        }
        .navGnb {
          li {
            padding: 0 2px;
            display: flex;
            align-items: center;
          }
          a {
            padding: 15px 8px;
            font-size: 14px;
            font-weight: 400;
            white-space: nowrap;
            position: relative;
            display: block;
          }
        }
      }
      .navCategory {
        background-color: #fff;
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        display: none;
        transition: height 0.28s ease-out;
        &.active {
          display: flex;
          flex-direction: column;
        }
        .search {
          padding: 10px 16px 10px 21px;
          border: 0;
          border-bottom: 1px solid #ddd;
          border-radius: 0;
          display: flex;
          align-items: center;
          & > div {
            border: 1px solid #000;
            border-radius: 5px;
            overflow: hidden;
            display: flex;
            align-items: center;
            flex: 1;
          }
          .input {
            i,
            input {
              font-size: 13px;
            }
            input {
              padding-right: 5px;
              border: 0;
            }
          }
          .btn_search {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            background-color: transparent;
            background-image: url(~/assets/mo_images/common/icon_split.png);
            background-position: 0 -40px;
            background-repeat: no-repeat;
            background-size: 250px auto;
            display: block;
          }
        }
        .icon_menu {
          font-size: 0;
          li {
            margin-left: 12px;
          }
          li > * {
            width: 32px;
            height: 32px;
            background-image: url('~/assets/mo_images/common/icon_split.png');
            background-repeat: no-repeat;
            background-size: 250px auto;
            position: relative;
            display: block;
            &.wish {
              background-position: -110px -30px;
            }
            &.mypage {
              background-position: -140px -30px;
            }
            &.delivery {
              background-position: -170px -30px;
            }
            &.cart {
              background-position: -40px 0;
              em {
                height: 17px;
                padding: 0 5px;
                color: #fff;
                font-size: 10px;
                font-weight: 600;
                line-height: 17px;
                background-color: #000;
                border-radius: 100px;
                position: absolute;
                right: -5px;
                bottom: -5px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
        }
        .banner {
          color: #fff;
          font-size: 12px;
          font-weight: 400;
          background-color: #000;
          a {
            padding: 10px 21px;
            display: flex;
            justify-content: space-between;
            &:after {
              width: 16px;
              height: 16px;
              background-image: url('~/assets/mo_images/common/icon_split.png');
              background-position: -80px 0;
              background-repeat: no-repeat;
              background-size: 250px auto;
              content: '';
              display: block;
            }
          }
        }
        nav {
          overflow: hidden;
          flex: 1;
          .nav_wrap {
            height: 100%;
            display: flex;
            > ul {
              width: 37.333333%;
              background-color: #f5f5f5;
              a {
                padding: 16px 10px 16px 21px;
                color: #999;
                font-size: 14px;
                font-weight: 600;
                display: block;
              }
              .active {
                background-color: #fff;
                a {
                  color: #000;
                }
              }
            }
            > div {
              overflow: auto;
              flex: 1;
              a {
                color: #000;
                font-size: 14px;
                font-weight: 400;
                padding: 16px 21px;
                display: block;
              }
              section {
                > a {
                  font-weight: 600;
                  display: flex;
                  &:after {
                    width: 16px;
                    height: 16px;
                    margin-left: 10px;
                    background-image: url('~/assets/mo_images/common/icon_split.png');
                    background-position: -100px 0;
                    background-repeat: no-repeat;
                    background-size: 250px auto;
                    content: '';
                    display: inline-block;
                  }
                }
                & + section:before {
                  margin-left: 20px;
                  border-top: 1px solid #eee;
                  content: '';
                  display: block;
                }
                .goods {
                  margin: 20px 9px 20px -5px;
                  padding-left: 21px;
                  display: flex;
                  li {
                    width: 50%;
                    padding-left: 5px;
                  }
                  .goods_item {
                    a {
                      padding: 0;
                    }
                    .img_wrap {
                      .thumb {
                        height: auto;
                        padding-top: 133%;
                      }
                    }
                    .btnIconBox {
                      display: none;
                    }
                    .cont {
                      margin-top: 10px;
                      font-size: 12px;
                      .name {
                        strong {
                          color: #000;
                          font-size: 12px;
                          overflow: hidden;
                          display: -webkit-box;
                          -webkit-box-orient: vertical;
                          -webkit-line-clamp: 2;
                        }
                      }
                      .review_score {
                        display: none;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
