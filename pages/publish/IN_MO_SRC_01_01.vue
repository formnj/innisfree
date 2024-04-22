<template>
  <div class="keyword_wrap">
      <h2>
        <Button txt="인기검색어" />
        <span>3분전 갱신</span>
      </h2>
      <div class="keyword">
          <ol>
              <li>
                  <a href="#none" class="up"><em>1</em><span>장원영 네컷</span></a>
              </li>
              <li>
                  <a href="#none" class="up"><em>2</em><span>노세범</span></a>
              </li>
              <li>
                  <a href="#none" class="down"><em>3</em><span>메이크업도구</span></a>
              </li>
              <li>
                  <a href="#none"><em>4</em><span>그린티 신상</span></a>
              </li>
              <li>
                  <a href="#none"><em>5</em><span>아이라이너</span></a>
              </li>
          </ol>
          <ol>
              <li>
                  <a href="#none"><em>6</em><span>검색어 최대 9자까지 가능</span></a>
              </li>
              <li>
                  <a href="#none" class="down"><em>7</em><span>바디로션</span></a>
              </li>
              <li>
                  <a href="#none" class="new"><em>8</em><span>선크림</span></a>
              </li>
              <li>
                  <a href="#none"><em>9</em><span>신규 구매 혜택</span></a>
              </li>
              <li>
                  <a href="#none" class="up"><em>10</em>이벤트</a>
              </li>
          </ol>
      </div>
  </div>
  <div class="inner">

  </div>
</template>
<script setup>
definePageMeta({
  layout: 'mo-category'
});


</script>
<style lang="scss" scoped>
.keyword_wrap {
  h2 {
    padding:17px 21px;
    margin:0 -21px;
    font-size:16px;
    font-weight:600;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    display:flex;
    align-items:center;
    span {
      margin-left:15px;
      color:#999;
      font-size:12px;
      font-weight:300;
    }
    &:after {
      content:'';
      width:14px;
      height:7px;
      margin-left:auto;
      background:url("/_nuxt/assets/images/common/PC-icon_split.png") no-repeat -110px -64px;
      background-size:250px auto;
      display:inline-block;
    }
  }
  .keyword {
    padding:30px 0;
    display:flex;
    ol {
      width:50%;
      display:flex;
      flex-wrap:wrap;
      gap:25px 0;
      li {
        width:100%;
        a {
          display:flex;
          align-items:center;
          gap:27px;
          em {
            min-width:16px;
            font-size:13px;
            font-weight:600;
            line-height:16px;
            text-align:center;
            position:relative;
            &:after {
                content:'';
                width:8px;
                height:8px;
                background: url('/_nuxt/assets/images/common/MO-icon_split.png') no-repeat -10px -130px;
                background-size:250px auto;
                position:absolute;
                top:50%;
                right:-15px;
                transform:translateY(-50%);
            }
          }
          span {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
          }
          &.up {
              em{
                  &:after {
                      background-position:0 -130px;
                  }
              }
          }
          &.down {
              em{
                  &:after {
                      background-position:-20px -130px;
                  }
              }
          }
          &.new {
              em{
                  &:after {
                      background-position:-30px -130px;
                  }
              }
          }
        }
      }
    }
  }
}
</style>
