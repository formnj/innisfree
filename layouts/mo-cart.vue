<template>
  <div id="wrap">
    <HeaderMo
      :useLogo="false"
      :useBack="true"
      :useName="true"
      :txt="txt"
      :useSearch="false"
      :useCart="false"
      :type="'type_sub'"
    />
    <div id="container">
        <div class="content_wrap">
            <div class="content">
                <router-view @title="txt = $event" />
            </div>
            <!-- payment -->
            <div class="payment">
              <div class="inner">
                <div>
                  <dl>
                    <dt>주문금액</dt>
                    <dd>
                      <strong>103,200</strong>원
                    </dd>
                  </dl>
                  <dl>
                    <dt>배송비</dt>
                    <dd>무료</dd>
                  </dl>
                  <div class="total_price">
                    <dl>
                      <dt>결제 예정 금액</dt>
                      <dd>
                        <strong>103,200</strong>원
                      </dd>
                    </dl>
                  </div>
                </div>

                <Button txt="주문하기" />
              </div>
            </div>
            <!-- //payment -->
        </div>
    </div>
    <FooterMo />
    <Actionbar />
  </div>
</template>


<script setup>
import {
  breadcrumbData,
  sample_goods
} from '~/test/data/publish/dummyData'
import { modal } from '~/assets/js/common-ui.js'

const txt = ref(null);

</script>
<style lang="scss" scoped>
#wrap {
    min-height:100vh;
    max-width:100%;
    margin:0 auto;
    position:relative;
    display:flex;
    flex-direction:column;
}

#container {
  padding:0 2rem;

  :deep(.customBen) {
    margin:0 -2rem;
    overflow:hidden;
    position: relative;
    .img {
      img {
        vertical-align:top;
      }
    }
    .textWrap {
      width: 100%;
      height: 100%;
      position: absolute;
      top:0;
      left:0;
      .text {
        height: 100%;
        margin: 0 2rem;
        color: #fff;
        font-size: 1.7rem;
        line-height: 1.43;
        letter-spacing: -0.7px;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: left;
        .t1, .t2 {
          white-space: nowrap;
        }
      }
    }
  }

  .payment {
    .inner {
      display:flex;
      flex-direction:column;
      gap:15px;
      > div {
        padding:1.5rem 0 12rem;
        flex:1;
        dl {
          color:#333;
          font-size:1.4rem;
          display:flex;
          justify-content:space-between;
          & + dl {
            margin-top:15px;
          }
          dt {
            display:flex;
            align-items:center;
          }
          dd {
            strong {
              font-weight:500;
            }
          }
        }
        .total_price {
          margin-top:25px;
          padding-top:20px;
          border-top:1px solid #eee;
          dt {
            color:#000;
          }
          dd {
            font-size:1.4rem;
            font-weight:600;
            strong {
              font-size:2rem;
              font-weight:600;
            }
          }
        }
      }
    }
  }
}

@import "~/assets/scss/mobile.scss";
</style>
