<template>
  <footer>
    <div class="inner">
      <a href="#none"><img src="../../assets/images/footer/Wordmark.png" alt=""></a>
      <div class="cont_footer">
        <ul>
          <li>
            <span>서울특별시 용산구 한강대로 100(한강로2가) 7층 이니스프리</span>
            <span>대표이사 최민정</span>
          </li>
          <li>
            <span>사업자 등록번호 106-86-68127</span>
            <span>통신판매신고번호 2018-서울용산-0014</span>
            <span>제품 문의 080-380-0114</span>
            <span>FAX 02-6040-7108</span>
          </li>
          <li>
            <span>이메일 주소 <a href="mailto:innisfree@innisfree.com">innisfree@innisfree.com</a></span>
            <span>비즈니스제휴/입점문의 <a href="mailto:partner.biz@innisfree.com">partner.biz@innisfree.com</a></span>
          </li>
          <li>
            <span>이메일 주소 무단 수집 거부</span>
            <span>개인정보 보호책임자 정구화</span>
            <span>호스팅 서비스 제공자 (주)이니스프리</span>
          </li>
        </ul>
        <div class="toss_wrap">
          <span>
            <strong>㈜토스페이먼츠의 에스크로 서비스 가입 :</strong> 저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금 거래에 대해 구매안전서비스를 적용하고 있습니다.
          </span>
          <a href="">토스페이먼츠 구매안전 서비스 가입확인</a>
        </div>
        <p class="copyRight">Copyright ©2023 이니스프리. All Rights Reserved</p>
        <dl>
          <dt>
            <span>고객 서비스 센터 이용안내</span>
            <strong>080-380-0114</strong>
          </dt>
          <dd>
            <span>운영시간 오전 09:00 ~ 오후 18:00 (주말 및 공휴일 휴무)</span>
            <span>점심시간 오후 12:00 ~ 오후 13:00</span>
          </dd>
          <dd>
            <button>1:1 문의하기</button>
          </dd>
        </dl>
      </div>
      <div class="footer_common">
        <ul>
          <li class="mo"><a href="#none">이용약관</a></li>
          <li class="mo"><a href="#none" class="active">개인정보처리방침</a></li>
          <li class="mo"><a href="#none">영상기기관리방침</a></li>
          <li class="mo"><a href="#none">위치기반서비스 이용약관</a></li>
          <li class="mo"><a href="#none">사업자정보확인</a></li>
          <li class="mo"><a href="#none">약관및법적고지확인</a></li>
          <li class="pc"><a href="#none">서비스 이용약관</a></li>
          <li class="pc"><a href="#none" class="active">개인정보처리방침</a></li>
          <li class="pc"><a href="#none">영상정보처리기기 운영/관리 방침</a></li>
          <li class="pc"><a href="#none">공지사항</a></li>
          <li class="pc"><a href="#none">고객센터</a></li>
          <li class="pc"><a href="#none">임직원 서비스</a></li>
        </ul>
        <div class="sns">
          <a href="#none" class="twitter"></a>
          <a href="#none" class="facebook"></a>
          <a href="#none" class="instagram"></a>
          <a href="#none" class="youtube"></a>
          <a href="#none" class="download"></a>
        </div>
      </div>
      <div class="footer_award">
        <span class="web2023">
          <span>
            웹어워드 2023
            모바일마케팅부문 통합대상
          </span>
        </span>
        <span class="smart2023">
          <span>
            스마트앱어워드 2023
            브랜드부문 통합대상
          </span>
        </span>
        <span class="smart2022">
          <span>
            스마트앱어워드 2022
            브랜드부문 통합대상
          </span>
        </span>
      </div>
    </div><!--// inner-->
  </footer>

  <!-- float menu -->
  <div class="flaot_menu">
    <ul>
      <li>
        <Button class="btn_history" txt="쇼핑로그" @click="modal.open('shopping_log', 'detailSearch')" />
      </li>
      <li>
        <Button class="btn_goTop" txt="go top" @click="goTop" />
      </li>
    </ul>
  </div>
  <!-- //float menu -->

  <!-- 쇼핑로그 모달 -->
  <div class="modal_wrap" id="shopping_log">
     <div class="modal_container">
        <div class="modal_header">
            <h2><strong>김이니</strong>님의 쇼핑로그
              <Icons class="tooltip" txt="툴팁" @click="modal.open('log_info', 'alert')" />
            </h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content shopping_log">

          <section class="list_wrap">
            <p v-if="sample_log.length < 1" class="no_data">
              <strong>쇼핑로그가 없습니다.</strong>
              <span>쇼핑로그는 7일 최대 50개까지 보관됩니다.</span>
            </p>
            <!-- list -->
            <ul class="goods_list type_column">
              <li v-for="(item, idx) in sample_log" :key="idx">
                <GoodsItem v-if="item.type == 'goods'" :item="item.item[0]" :link="item.item.link" />
                <EventItem v-if="item.type == 'event'" :item="item.item[0]" :link="item.link"/>
              </li>
            </ul>
            <!-- //list -->
          </section>

          <section>
            <h4>추천 키워드</h4>
            <ul class="keyword_list">
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;비타C&quot;);">#비타C</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;노세범&quot;);">#노세범</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;모공&quot;);">#모공</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;화산송이&quot;);">#화산송이</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;로션&quot;);">#로션</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;스킨&quot;);">#스킨</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;브라이트닝&quot;);">#브라이트닝</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;히알루론산&quot;);">#히알루론산</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;블랙티&quot;);">#블랙티</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;콜라겐&quot;);">#콜라겐</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;레티놀&quot;);">#레티놀</a>
              </li>
              <li>
                <a href="javascript:void(0);" onclick="clickRcmdKey(&quot;씨드세럼&quot;);">#씨드세럼</a>
              </li>
            </ul>
          </section>

        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //쇼핑로그 모달 -->

  <!-- 쇼핑로그 안내 모달 -->
  <div class="modal_wrap" id="log_info">
     <div class="modal_container">
        <div class="modal_header">
            <h2>쇼핑로그 안내
              <p class="explain">최근 본 제품, 이벤트, 검색어예요</p>
            </h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <ul class="bullet_list">
            <li>로그인을 하신 고객님들은 30일동안 조회한 최대 100개까지의 쇼핑로그를 확인하실 수 있습니다.</li>
            <li>판매 종료된 제품이나 종료된 이벤트는 쇼핑로그에서 자동으로 삭제됩니다.</li>
          </ul>
        </div>
        <div class="modal_footer">
            <Button @click="modal.close(this);" class="btn_ confirm" txt="확인" />
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //쇼핑로그 안내 모달 -->
</template>

<script setup>
import { modal } from '~/assets/js/common-ui'
import { sample_log } from '~/test/data/dummyData'

const scroll_top = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
footer {
  .inner {
    max-width:1320px;
    margin:0 auto;
    padding:107px 20px 30px;
    padding-top:107px;
    position:relative;
    > a {
      width:156.68px;
      height:20px;
      margin-top:40px;
      display:inline-block;
      img {
        width:100%;
      }
    }
    > .cont_footer {
      font-size:12px;
      position:relative;

      > * {
        margin-top:20px;
      }
      ul {
        color:#aaa;
        > * + * {
          margin-top:8px;
        }
        li {
          > span {
            &::after {
              content: '';
              width:1px;
              height:10px;
              margin: 0 10px;
              background: #EEE;
              display:inline-block;
            }
            &:last-of-type {
              &::after {
                display:none;
              }
            }
          }
        }
      }
      .toss_wrap {
        color:#aaa;
        display:flex;
        flex-direction:column;
        line-height:1.5em;
        strong {
          color:#333;
        }
        a {
          color:#666;
          text-decoration:underline;
        }
      }
      dl {
        margin-top:0px;
        padding:45px 58px 45px 40px;
        background:#F5F5F5;
        position:absolute;
        top:-40px;
        right:0;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        dt {
          color:#666;
          display:flex;
          flex-direction:column;
          span {
            font-weight:600;
          }
          strong{
            font-size:20px;
            font-weight:600;
            display:flex;
            align-items:center;
            gap:5px;
            &::after {
            content:'(수신자 부담)';
            color:#999;
            font-size:10px;

            }
          }
          + * {
            margin-top:10px;
            margin-bottom:20px;
          }
        }
        > dd {
          color:#999;
          font-size:10px;
          display:flex;
          flex-direction:column;
          > button {
            padding:6px 8px;
            color:#fff;
            font-size:10px;
            font-weight:600;
            background-color:#999;
          }
        }
      }
      .copyRight {
        color:#aaa;
      }
    }
    > .footer_common {
      padding:41px 0;
      font-size:14px;
      color:#999;
      border-top:1px solid #eee;
      border-bottom:1px solid #eee;
      display:flex;
      align-items:center;
      justify-content:space-between;
      position:absolute;
      top:0;
      left:0;
      right:0;
      ul {
        display:flex;
        align-content:center;
        gap:40px;
        li {
          &[class*="mo"]{
            display:none;
          }
          a {
            &.active {
              color:#333;
              font-weight:600;
            }
          }
        }
      }
      .sns {
        display:flex;
        gap:10px;
        a {
          width:26px;
          height:26px;
          background-image:url('../../assets/images/footer/SNS.png');
          background-repeat:no-repeat;
          background-size: 170px auto;
          display:inline-block;
          &.twitter{
            background-position:0px 0px;
          }
          &.facebook{
            background-position:-38px 0px;
          }
          &.instagram{
            background-position:-74px 0px;
          }
          &.youtube{
            background-position:-110px 0px;
          }
          &.download{
            background-position:-143px 0px;
          }
        }
      }
    }
    > .footer_award {
      margin-top:20px;
      display:flex;
      flex-wrap:wrap;
      gap:15px;
      > span {
        display:flex;
        align-items:center;
        &::before {
        content:'';
        width:28px;
        height:36px;
        margin-right:9px;
        display:block;
        background-size:28px auto;
        }
        &.web2023::before {
          background-image:url('../../assets/images/footer/Award.png');
        }
        &.smart2023::before {
          background-image:url('../../assets/images/footer/Award-1.png');
        }
        &.smart2022::before {
          background-image:url('../../assets/images/footer/Award-2.png');

        }
        > span {
          max-width:90px;
          color:#666;
          font-size:9px;
          display:inline-block;
        }
      }
    }
  }
}

.flaot_menu {
  position:fixed;
  right:40px;
  bottom:40px;
  z-index:10;
  li + li {
    margin-top:10px;
  }
  :deep(button) {
    height:auto;
    background-color:transparent;
    em {
      width:40px;
      height:40px;
      padding:0;
      font-size:0;
      background-color:#fff;
      border:1px solid #eee;
      border-radius:50%;
      box-shadow:0 5px 10px 0 rgba(0,0,0,0.05);
      position:relative;
      &:after {
        width:24px;
        height:24px;
        background-image:url('~/assets/images/common/icon_split.png');
        background-repeat:no-repeat;
        background-size:250px auto;
        content:'';
        position:absolute;
        top:50%;
        left:50%;
        display:block;
        transform:translate(-50%, -50%);
      }
    }
    &.btn_history em:after {
      background-position:-200px -130px;
    }
    &.btn_goTop em:after {
      background-position:-180px -60px;
    }
  }
}

/* 쇼핑로그 리스트 */
#shopping_log {
  h2 strong {
    color:#00BC70;
  }
}

.shopping_log {
  section {
    padding-top:40px;
    h4 {
      margin-bottom:20px;
      font-size:16px;
      font-weight:600;
    }
    & + section {
      margin-top:90px;
      border-top:1px solid #eee;
    }
  }
  .no_data {
    padding:50px 0 90px;
  }
  .goods_list {
    margin:0;
    position:relative;
    &:after {
      border-left:1px solid #eee;
      content:'';
      position:absolute;
      top:0;
      bottom:0;
      left:44px;
    }
    > li {
      padding:0;
      position:relative;
      z-index:1;
      & + li {
        margin-top:50px;
      }
      :deep(.goods_item), :deep(.event_item .item) {
        display:flex;
        .img_wrap, .thumb {
          width:90px;
        }
        .cont {
          flex:1;
        }
      }
      :deep(.goods_item) {
        .img_wrap {
           height:120px;
           margin-right:20px;
           .thumb {
            height:100%;
           }
           .btnIconBox {
            display:none;
           }
        }
        .cont {
          margin-top:0;
          .price {
            > * {
              font-size:14px;
            }
            em {
              font-size:13px;
            }
          }
        }
      }
      :deep(.event_item) {
        .item {
          align-items:center;
        }
        .thumb {
          height:60px;
          margin-right:20px;
          padding-top:0;
        }
        .cont {
          height:auto;
          margin-top:0;
          strong {
            margin-top:0;
            font-size:14px;
            font-weight:400;
            white-space: normal;
            word-break: break-all;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
  .keyword_list {
    display:flex;
    flex-wrap:wrap;
    gap:10px 5px;
    a {
      padding:4px 10px;
      color:#009d5e;
      font-size:12px;
      border:1px solid #009d5e;
      border-radius:100px;
      display:block;
    }
  }
}
</style>
