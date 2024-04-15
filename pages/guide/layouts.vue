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
  layout: 'pc-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type:String,
    default:'default'
  }
});
&lt;/script&gt;</code></pre>
  </section>

</template>

<script setup>
definePageMeta({
  layout: 'guide'
})
</script>

<style lang="scss" scoped>
.guide_wrap {
    padding:30px 0;
    section {
        margin:0 20px;
        & + section {
            margin-top:30px;
            padding-top:30px;
            border-top:1px dashed #ababab;
        }
        h2 {
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
