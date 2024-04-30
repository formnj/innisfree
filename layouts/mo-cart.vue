<template>
  <div id="wrap">
    <HeaderMoSub />
    <div id="container">
        <div class="content_wrap">
            <div class="content">
                <router-view />
            </div>
            <!-- payment -->
            <div class="payment">
              <div class="inner">
                <div>
                  <h4>결제정보</h4>
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
                  <dl>
                    <dt>적립 예정 뷰티포인트
                        <Icons class="tooltip" txt="툴팁" @click="modal.open('accum_point', 'layer')" />
                        <div class="layer_wrap">
                          <!-- layer modal -->
                          <div class="modal_wrap" id="accum_point">
                              <div class="modal_container">
                                  <div class="modal_header">
                                      <h2>뷰티포인트 적립 혜택 안내</h2>
                                      <button class="btn_close" @click="modal.close(this);">닫기</button>
                                  </div>
                                  <div class="modal_content">
                                      <ul class="bullet_list">
                                        <li>뷰티포인트는 수취확인 후 <strong>15일 이후</strong>에 적립됩니다.</li>
                                        <li>아모레퍼시픽 뷰티포인트 비회원인 경우 적립되지 않습니다.</li>
                                        <li>멤버십데이 쿠폰 사용 시 뷰티포인트는 적립되지 않습니다.</li>
                                        <li>일부 쿠폰은 사용 시 뷰티포인트는 적립되지 않습니다.</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="overlay" @click="modal.close(this);"></div>
                          </div>
                          <!-- //layer modal -->
                        </div>
                    </dt>
                    <dd>
                      <strong>1,021</strong> P
                    </dd>
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
  padding:0 20px;
}

</style>
