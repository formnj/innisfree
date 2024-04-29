<template>
  <div id="wrap">
    <HeaderPc />
    <div id="container">
        <!-- breadcrumb -->
        <Breadcrumb :item="breadcrumbData" />

        <!-- mypage top -->
        <div class="mypageTop">
          <div class="inner">
            <div class="user_info">
              <!-- 레벨 아이콘 -->
              <em><img src="~/assets/images/common/icon_rank_w2.png" alt="" /></em>
              <!-- //레벨 아이콘 -->
              <div>
                <p>
                  <strong>김이니</strong>님
                  <span>임직원</span>
                </p>
                <a href="#none">
                  <span>웰컴</span> 멤버시네요! 멤버십 혜택을 확인해보세요.
                </a>
              </div>
            </div>
            <ul>
              <li>
                <a href="#none">
                  <span>뷰티포인트</span>
                  <strong>150 P</strong>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>보유쿠폰</span>
                  <strong>7 장</strong>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>이번달 공병수거</span>
                  <strong>0 개</strong>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>피부정보</span>
                  <strong>포인트 받기</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- //mypage top -->

        <div class="content_wrap">
            <!-- lnb -->
            <div class="lnb">
                <ul>
                    <li v-for="(menu, idx) in sam_lnb" :key="idx" @click="lnb_click($event)"><a href="#none">{{ menu }}</a></li>
                </ul>
            </div>
            <!-- //lnb -->
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
    <FooterPc />
  </div>
</template>


<script setup>
import {
  breadcrumbData,
  sam_lnb
} from '~/test/data/publish/dummyData'

let lnb_click = (event)=>{
  const target = event.currentTarget;
  let target_parent =target.parentNode;
  let all_li = target_parent.querySelectorAll('li')
  all_li.forEach((a)=>{
    a.classList.remove('active');
  })
  target.classList.add('active')
  // 전체 li에 active 클래스 제거
  //클릭한 대상에게 active 클래스 추가
}
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
  padding-bottom:100px;
  flex:1 auto;
  :deep(.inner) {
    max-width:1320px;
    margin:0 auto;
    padding:0 20px;
  }
}

.mypageTop {
  background-color:#f5f5f5;
  .inner {
    display:flex;
    justify-content:space-between;
    .user_info {
      display:flex;
      align-items:center;
    }
    ul {
      display:flex;
      li {
        width:200px;
        height:140px;
        a {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}

.content_wrap {
  max-width:1320px;
  margin:0 auto;
  position:relative;
  display:flex;
  flex-wrap:wrap;
  .lnb {
    width:200px;
    height:100%;
    margin-right:40px;
    padding-top:60px;
    padding-left:20px;
    position:sticky;
    top:60px;
    z-index:1;
    display:block;
    a {
      display:block;
    }
    h2 {
      margin-bottom:30px;
      font-size:18px;
      font-weight:600;
      display:flex;
      align-items:center;
      justify-content:space-between;
      a {
          padding-right:21px;
          color:#888;
          font-size:14px;
          position:relative;
          &:before, &:after {
              width:10px;
              margin-top:-1px;
              border-top:2px solid #808080;
              content:'';
              position:absolute;
              top:50%;
              right:0;
              display:block;
          }
          &:after {
              transform:rotate(90deg);
          }
      }
  }
  li {
      &.active {
          color:#000 !important;
          font-weight:600;
          border-bottom:1px solid #000;
          position:relative;
          a {
              color:#000 !important;
              &::after{
              content:'';
              width:12px;
              height:12px;
              background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
              background-repeat:no-repeat;
              background-size:250px;
              background-position:-210px 0px;
              display:inline-block;
              position:absolute;
              top:50%;
              right:0px;
              transform:translateY(-50%);

              }
          }
      }
      & + li {
          margin-top:5px;
      }
      a {
          padding:12px 0;
          color:#888;
          font-size:14px;
      }
  }
  }
  .content {
      flex:1;
  }
}

</style>
