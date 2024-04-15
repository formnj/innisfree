<template>
  <div class="list_wrap">
    <dl class="banefit_list gift">
      <dt>증정혜택</dt>
      <dd>
        <ul>
          <li>
            <span class="thum">
              <img src="https://images.innisfree.co.kr/upload/freegift/7014_1.png?T202404120947" alt="">
            </span>
            <span class="info">
              <span>4월 멤버십세일 쓰리데이즈박스</span>
              <span class="date">24.4.11 ~ 24.4.13</span>
              <span>1개 구매시 1개 증정</span>
            </span>
          </li>
          <li>
            <span class="thum">
              <img src="https://images.innisfree.co.kr/upload/freegift/7014_1.png?T202404120947" alt="">
            </span>
            <span class="info">
              <span>4월 멤버십세일 쓰리데이즈박스</span>
              <span class="date">24.4.11 ~ 24.4.13</span>
              <span>1개 구매시 1개 증정</span>
            </span>
          </li>
        </ul>
        <p class="text_notify">증정품의 한정수량 소진 시 조기 품절될 수 있습니다.</p>
      </dd>
    </dl>

    <dl class="banefit_list">
      <dt>결제/카드 헤택</dt>
      <dd>
        <ul>
          <li><a href="#none">멤버십세일 결제혜택 모음 SAVE 5,000!!</a></li>
          <li><a href="#none">KB Pay 3만원 결제 시, 최대 1만원 혜택</a></li>
          <li><a href="#none">현대카드 M포인트 결제금액 20% 할인</a></li>
        </ul>
      </dd>
    </dl>

    <dl class="banefit_list">
      <dt>관련 이벤트</dt>
      <dd>
        <ul>
          <li><a href="#none">24.4.11~24.4.13<span class="title">~50% 멤버십세일 최대 6,000원 추가할인!</span></a></li>
          <li><a href="#none">24.4.11~24.4.13<span class="title">그린티 씨드 세럼 대용량 [지구의달 에디션] 출시!</span></a></li>
        </ul>
      </dd>
    </dl>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.list_wrap {
  padding:0 21px;
  border-bottom:5px solid #f5f5f5;
  .banefit_list {
    margin:30px 0;
    & + .banefit_list {
      padding-top:30px;
      border-top:1px solid #eee;
    }
    dt {
      margin-bottom: 10px;
      font-weight: 600;
      color: #000000;
    }
    dd {
      ul {
        gap:10px;
        flex-direction:column;
        display:flex;
        a {
          max-width:100%;
          padding-right:17px;
          font-size:13px;
          font-weight:300;
          color:#666;
          text-overflow:ellipsis;
          overflow:hidden;
          white-space:nowrap;
          position:relative;
          display:inline-block;
          &::after {
            content:'';
            width:12px;
            height:12px;
            margin-left:8px;
            background:url('../assets/mo_images/common/icon_split.png') -230px 0px;
            background-size:250px auto;
            position:absolute;
            right:0;
            top:50%;
            transform:translateY(-50%);
          }
          .title {
            margin-left:5px;
            font-weight:400;
            color:#000;
          }
        }
      }
    }
    &.gift {
      ul{
        gap:10px;
        flex-direction:column;
        display:flex;
        li{
          height:117px;
          border:1px solid #f5f5f5;
          gap:20px;
          align-items:center;
          justify-content:space-between;
          display:flex;
          .thum{
            width:88px;
            height:100%;
            flex:none;
            img{
              width:100%;
              height:100%;
            }
          }
          .info {
            flex:1;
            span {
              font-size:13px;
              color:#000;
              display:block;
              &.date {
                font-size:12px;
                color:#666;
                margin-bottom:28px;
              }
            }
          }
        }
      }
    }
  }
  .text_notify {
    margin-top:10px;
    font-size:13px;
    color:#999;
    align-items:center;
    display:flex;
    &::before {
      content: '';
      width: 16px;
      height: 16px;
      margin-right:5px;
      background: url('./../assets/mo_images/common/icon_split.png') -210px 0;
      background-size: 250px auto;
      display: inline-block;
    }
  }
}
</style>
