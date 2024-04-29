<template>
  <section>
    <h2>[공통] Title</h2>
    <ul class="explain">
      <li>콘텐츠 타이틀</li>
    </ul>
    <div class="design_box"></div>
    <pre class="code_box"><code>&lt;div class="title_wrap/&gt;
  &lt;h2&gt;Title&lt;/h2&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>[공통] content</h2>
    <ul class="explain">
      <li>[class="inner"] = max-width:1320px; padding-right:20px; padding-left:20px;</li>
      <li>상품 리스트, 이벤트 리스트 등 content 내부에 공통으로 사용하며, pc에서는 넓이의 제한을 주기위해 사용하지만, mo에서는 소스의 통일성을 위해 사용함</li>
    </ul>
    <pre class="code_box"><code>&lt;template&gt;
  &lt;div class="inner"&gt;
    &lt;ul class="list_wrap"&gt;
      &lt;li&gt;list01&lt;//li&gt;
      &lt;li&gt;list02&lt;//li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
  </section>

  <section>
    <h2>pc-category</h2>
    <ul class="explain">
      <li>상품 리스트 레이아웃 [LNB] 노출 여부 선택</li>
    </ul>
    <pre class="code_box"><code>&lt;template&gt;
  &lt;div class="title_wrap" :data-layout="props.layoutType"&gt;
    &lt;h2&gt;Title&lt;/h2&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
definePageMeta({
  layout:'pc-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type:String,
    default:'default'
  }
});
&lt;/script&gt;</code></pre>
  </section>

  <section>
    <h2>Content wrap</h2>
    <ul class="explain">
      <li>content 구성 기본 마크업</li>
    </ul>
    <div class="design_box">
      <div class="content">

        <div class="title_wrap" style="margin:0 auto;">
          <div>
            <h2>Title
              <strong class="badge count"><em>20</em></strong>
            </h2>
          </div>
          <a href="#none" class="btn_link_arrw">링크</a>

        </div>

        <div class="title_wrap" style="margin:40px auto 0;">
          <div>
            <h2>Title
              <strong class="badge count"><em>20</em></strong>
            </h2>
            <p class="explain" style="margin-bottom:0; color:#999;">fsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetetefsetetetete</p>
            <Button class="btn_min_outline mt10" txt="구매 안내사항" />
          </div>

          <div class="pdtSortTab_wrap">
            <div class="sortTab">
              <button class="btn_dropdown">추천순</button>
              <ul>
                <li><a href="#none" class="active">추천순</a></li>
                <li><a href="#none">신제품순</a></li>
                <li><a href="#none">판매량순</a></li>
                <li><a href="#none">낮은 가격순</a></li>
                <li><a href="#none">높은 가격순</a></li>
                <li><a href="#none">리뷰순</a></li>
                <li><a href="#none">판매금액순</a></li>
              </ul>
            </div>
            <button>상세검색</button>
          </div>

        </div>

        <div class="sub_title_wrap" style="margin:0 auto;">
          <h3>Sub title
            <Icons class="tooltip" txt="툴팁" />
          </h3>
          <p class="explain">타이틀 설명 글</p>
          <a href="#none" class="btn_link_arrw">링크</a>
        </div>

        <div class="inner" style="max-width:1320px; margin:0 auto; padding:0 20px;">
          콘텐츠
        </div>

        <div class="sub_title_wrap">
          <h3>Sub title</h3>
          <p class="explain">타이틀 설명 글</p>
          <a href="#none" class="btn_link_arrw">링크</a>
        </div>

        <div class="inner" style="max-width:1320px; margin:0 auto; padding:0 20px;">
          콘텐츠
        </div>

      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="content"&gt;

  &lt;div class="title_wrap"&gt;
    &lt;div&gt;
      &lt;h2&gt;Title
        &lt;strong class="badge count"&gt;&lt;em&gt;20&lt;/em&gt;&lt;/strong&gt;
      &lt;/h2&gt;
      &lt;p class="explain"&gt;설명글설명글설명글설명글설명글&lt;/p&gt;
      &lt;Button class="btn_min_outline mt10" txt="구매 안내사항"/&gt;
    &lt;/div&gt;
    &lt;a href="#none" class="btn_link_arrw"&gt;링크&lt;/a&gt;

  &lt;/div&gt;

  &lt;div class="title_wrap"&gt;
    &lt;div&gt;
      &lt;h2&gt;Title
        &lt;strong class="badge count"&gt;&lt;em&gt;20&lt;/em&gt;&lt;/strong&gt;
      &lt;/h2&gt;
      &lt;p class="explain"&gt;설명글설명글설명글설명글설명글&lt;/p&gt;
      &lt;Button class="btn_min_outline mt10" txt="구매 안내사항" /&gt;
    &lt;/div&gt;

    &lt;div class="pdtSortTab_wrap"&gt;
      &lt;div class="sortTab"&gt;
        &lt;button class="btn_dropdown"&gt;추천순&lt;/button&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href="#none" class="active"&gt;추천순&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#none"&gt;신제품순&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#none"&gt;판매량순&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#none"&gt;낮은 가격순&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#none"&gt;높은 가격순&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#none"&gt;리뷰순&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#none"&gt;판매금액순&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;button&gt;상세검색&lt;/button&gt;
    &lt;/div&gt;

  &lt;/div&gt;

  &lt;div class="sub_title_wrap"&gt;
    &lt;h3&gt;Sub title
      &lt;Icons class="tooltip" txt="툴팁" /&gt;
    &lt;/h3&gt;
    &lt;p class="explain"&gt;설명글설명글설명글설명글설명글&lt;/p&gt;
    &lt;a href="#none" class="btn_link_arrw"&gt;링크&lt;/a&gt;
  &lt;/div&gt;

  &lt;div class="inner"&gt;
    콘텐츠
  &lt;/div&gt;

  &lt;div class="sub_title_wrap"&gt;
    &lt;h3&gt;Sub title&lt;/h3&gt;
    &lt;p class="explain"&gt;타이틀 설명 글&lt;/p&gt;
    &lt;a href="#none" class="btn_link_arrw"&gt;링크&lt;/a&gt;
  &lt;/div&gt;

  &lt;div class="inner"&gt;
    콘텐츠
  &lt;/div&gt;

&lt;/div&gt;</code></pre>
  </section>

</template>

<script setup>
definePageMeta({
  layout:'guide'
})
</script>

<style lang="scss" scoped>
.guide_wrap {
    padding:30px 0;
    > section {
        margin:0 20px;
        & + section {
            margin-top:30px;
            padding-top:30px;
            border-top:1px dashed #ababab;
        }
        > h2 {
            margin-bottom:20px;
            padding:10px 10px 10px 20px;
            font-size: 24px;
            font-weight: 700;
            position:relative;
            display:flex;
            &:before {
                height:15px;
                border-left:5px solid #ff7200;
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform:translateY(-50%);
            }
            ul {
                margin-left:auto;
                display:inline-flex;
                li {
                    display:flex;
                    align-items:center;
                    a {
                        color:#222;
                        padding:0 15px;
                        font-size:14px;
                        text-decoration:none;
                        display:block;
                    }
                }
            }
        }
        .explain {
            margin-bottom:20px;
            li {
                padding-left:12px;
                position:relative;
                & + li {
                    margin-top:15px;
                }
                &:before {
                    position:absolute;
                    top:0;
                    left:0;
                    bottom:0;
                    content:'-';
                    display:block;
                }
                strong {
                    margin-bottom:8px;
                    display:block;
                }
            }
        }
        .toolbar {
            background-color:#eee;
            display:flex;
            flex-wrap:wrap;
            li {
                padding:8px;
                > * {
                    padding:8px;
                    border-radius:4px;
                    display:block;
                    transition:background 0.25s;
                    &:hover {
                        background-color:#ddd;
                    }
                    &.current {
                        background-color:#ccc;
                    }
                }
            }
        }
        h3 {
            margin-top:20px;
            margin-bottom:10px;
        }
    }
}
.design_box {
    padding:15px;
    border:1px solid #eee;
}

.code_box {
    padding:15px;
    color:#fff;
    line-height:1.8;
    background-color:#000;
    border:10px solid #f2f2f2;
    overflow:auto;
}

::v-deep .breadcrumb {
    .inner {
        margin:0 !important;
    }
}
</style>
