<template>
  <section>
    <h2>Inputs</h2>
    <ul class="toolbar">
      <li><button class="current" @click="tool_select('text');">Text</button></li>
      <li><button @click="tool_select('error');">Error</button></li>
      <li><button @click="tool_select('pw');">Password</button></li>
      <li><button @click="tool_select('check');">Checkbox</button></li>
      <li><button @click="tool_select('radio');">Radio</button></li>
      <li><button @click="tool_select('isswitch');">Switch</button></li>
    </ul>
    <div class="design_box">
      <Inputs :_type="input_opt.type" :isswitch="input_opt.isswitch" :_placeholder="input_opt.Placeholder" _text="Label"
        :isDisabled="_disabled" :isError="input_opt.isError" :_err_text="input_opt.err_text" />
    </div>
    <pre class="code_box"><code>&lt;Inputs {{ input_opt.opt }} /&gt;</code></pre>
  </section>

  <section>
    <h2>Textarea</h2>
    <div class="design_box">
      <Textarea _placeholder="문구를 입력해주세요." />
    </div>
    <pre class="code_box"><code>&lt;Textarea _placeholder="문구를 입력해주세요." /&gt;</code></pre>
  </section>

  <section>
    <h2>Select</h2>
    <div class="design_box">
      <Selectbox :options="[
                    { val: 'value', txt: '옵션01' },
                    { val: 'value', txt: '옵션02' }
                ]" />
    </div>
    <pre class="code_box"><code>&lt;Selectbox
    :options="{{ select_opt }}" /&gt;</code></pre>
  </section>

  <section>
    <h2>Button</h2>
    <ul class="explain">
      <li>클래스 규칙 : btn_크기_타입(보더유무)<br />
        ex) &lt;Button class="btn_big_outline" /&gt;]
      </li>
      <li>size : default = 40 / [_big] = 60 / [_mid] = 50 / [_min] = 30</li>
    </ul>
    <div class="design_box">
      <div class="multi_form">
        <Button class="btn_big" txt="btn_big (60px)sss" />

        <Button class="btn_mid" txt="btn_mid (50px)" />

        <Button txt="default (40px)" />

        <Button class="btn_min" txt="btn_min (30px)" />

        <Button class="btn_big_outline" txt="btn_big_outline (60px)" />

        <Button class="btn_mid_outline" txt="btn_mid_outline (50px)" />

        <Button class="btn_outline" txt="btn_outline (40px)" />

        <Button class="btn_min_outline" txt="btn_min_outline (30px)" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;Button /&gt;</code></pre>
  </section>

  <section>
    <h2>Icons</h2>
    <ul class="explain">
      <li>아이콘 버튼으로 style은 pc베이스로 잡고, 모바일 스타일은 mobile.scss에 선언.</li>
    </ul>
    <div class="design_box">
      <Icons class="tooltip" />
    </div>
    <pre class="code_box"><code>&lt;Icons class="tooltip" /&gt;</code></pre>
  </section>

  <section>
    <h2>Multi form</h2>
    <div class="design_box">
      <ul class="form_group">
        <li>
          <p class="form_tit">Input + Button</p>
          <div class="multi_form">
            <Inputs _type="text" _placeholder="문구를 입력해주세요" />
            <Button />
          </div>
        </li>
        <li>
          <p class="form_tit">Input + Input</p>
          <div class="multi_form">
            <Inputs _type="text" _placeholder="문구를 입력해주세요" />
            <Inputs _type="text" _placeholder="문구를 입력해주세요" />
          </div>
        </li>
      </ul>
    </div>
    <pre class="code_box"><code>&lt;div class="multi_form"&gt;
    &lt;Inputs _type="text" _placeholder="문구를 입력해주세요" /&gt;
    &lt;Inputs _type="text" _placeholder="문구를 입력해주세요" /&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item</h2>
    <ul class="explain">
      <li>sold out, coming soon = status:'sold_out' or 'coming_soon'</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0,5)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Event Item</h2>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="event_list">
          <li v-for="(item, idx) in sample_event.slice(0,3)" :key="idx">
            <EventItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="event_list"&gt;
        &lt;li v-for="(item, idx) in sample_event" :key="idx"&gt;
            &lt;EventItem :item="item" :link="item.link" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Live Item</h2>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_live.slice(0,5)" :key="idx">
            <LiveItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_live" :key="idx"&gt;
            &lt;LiveItem :item="item" :link="item.link" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Breadcrumb</h2>
    <div class="design_box">
      <Breadcrumb :item="sam_menu" />
    </div>
    <pre class="code_box"><code>&lt;Breadcrumb :item="Data" /&gt;</code></pre>
  </section>

  <section>
    <h2>Modal</h2>
    <ul class="explain">
      <li>import { modal } from '~/assets/js/common-ui.js' 선언 후 필요한 스타일만 페이지 하단에 적용</li>
      <li>Open : modal.open(오픈할 모달아이디, 타입);<br /> 타입 = full / alert / bottom : mobile 하단에서 올라오는 팝업 / layer : [tooltip, 공유하기] 등 position absolute 모달</li>
      <li>Close : modal.close(); /* 다중팝업 노출 시 바디스크롤 풀림 처리 예정 */</li>
    </ul>
    <div class="design_box">
      <div class="multi_form">
        <Button txt="Modal full" @click="modal.open('sample_modal', 'full');" />
        <Button txt="Modal alert" @click="modal.open('sample_modal', 'alert');" />
        <Button txt="Modal bottom" @click="modal.open('sample_modal', 'bottom');" />
        <Button txt="Modal detailSearch" @click="modal.open('sample_modal', 'detailSearch');" />
        <Button txt="Modal layer" id="layer" @click="modal.open('sample_modal', 'layer');" />
        <Button txt="Modal fullMo" @click="modal.open('sample_modal', 'fullMo');" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="modal_wrap" id="모달_아이디"&gt;
    &lt;div class="modal_container"&gt;
        &lt;div class="modal_header"&gt;
            &lt;h2&gt;Modal Title&lt;/h2&gt;
            &lt;button class="btn_close" @click="modal.close(this);"&gt;닫기&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="modal_content"&gt;
            &lt;!-- modal contents --&gt;
        &lt;/div&gt;
        &lt;div class="modal_footer"&gt;
            &lt;Button class="btn_outline" txt="cancel" /&gt;
            &lt;Button txt="OK" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="overlay" @click="modal.close(this);"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Tabs</h2>
    <ul class="explain">
      <li>tabType : tab type 클래스 지정</li>
      <li>default : 탭 요소의 넓이가 갯수에 대한 비율로 늘어남.</li>
      <li>tabType="type_01" = 상품상세 정보 탭 / type_02 = 베스트 카테고리 탭</li>
    </ul>
    <div class="design_box">
      <ul class="form_group">
        <li>
          <p class="form_tit">[Default]</p>
          <Tabs tabType="" :item="[{txt:'tab01'},{txt:'tab02'}]" :tabidx="0" />
        </li>
        <li>
          <p class="form_tit">[type_01]</p>
          <Tabs tabType="type_01" :item="[{txt:'tab01'},{txt:'tab02'}]" :tabidx="0" />
        </li>
        <li>
          <p class="form_tit">[type_02]</p>
          <Tabs tabType="type_02"
            :item="[{txt:'tab01'},{txt:'tab02'},{txt:'tab03'},{txt:'tab04'},{txt:'tab05'},{txt:'tab06'},{txt:'tab07'},{txt:'tab08'},{txt:'tab09'},{txt:'tab10'}]"
            :tabidx="0" />
        </li>
      </ul>
    </div>
    <pre
      class="code_box"><code>&lt;Tabs tabType="" :item="[{txt:'tab01'},{txt:'tab02'}]"  :tabidx="0" /&gt;</code></pre>
  </section>

  <section>
    <h2>swiper</h2>
    <div class="design_box">
      <swiper :slides-per-view="'auto'" :space-between="40" :loop="true" navigation :pagination="pagination"
        @swiper="onSwiper" @slideChange="onSlideChange" :centered-slides="true" :slides-offset-before="-310">
        <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx">
          <div class="item">
            <strong></strong>
            <img :src="item.img">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <pre class="code_box"><code>&lt;swiper
  :slides-per-view="'auto'"
  :space-between="40"
  :loop="true"
  navigation
  :pagination="pagination"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
  :centered-slides="true"
  :slides-offset-before="-310"
&gt;
  &lt;swiper-slide v-for="(item, idx) in sampleSlide" :key="idx"&gt;
    &lt;div class="item"&gt;
      &lt;strong&gt;&lt;/strong&gt;
      &lt;img :src="item.img"&gt;
    &lt;/div&gt;
  &lt;/swiper-slide&gt;
&lt;/swiper&gt;

&lt;script setup&gt;
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

const onSwiper = (swiper) => {
  document.querySelector('.swiper-pagination-fraction').style.border="2px solid red"
};
const onSlideChange = () => {
  console.log('slide change');
};
&lt;/script&gt;</code></pre>
  </section>

  <section>
    <h2>Drop_Down</h2>
    <ul class="explain">
      <li>import { Drop_Down } from '~/assets/js/common-ui.js' 선언 후 필요한 스타일만 페이지 하단에 적용</li>
    </ul>
    <div class="design_box">
      <div class="pdtSortTab_wrap">
        <div class="sortTab">
          <button class="btn_dropdown" @click="Drop_Down()">추천순</button>
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
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="pdtSortTab_wrap"&gt;
  &lt;div class="sortTab"&gt;
    &lt;button class="btn_dropdown" @click="Drop_Down()"&gt;추천순&lt;/button&gt;
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
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>setFilter</h2>
    <ul class="explain">
      <li>클릭 요소에 active 클래스 추가</li>
      <li>import { setFilter } from '~/assets/js/common-ui.js' 선언</li>
      <li>@click="setFilter($event)"</li>
      <li style="color:#ff0000;">.active 스타일 별도 적용 필수</li>
    </ul>
    <div class="design_box">
      <label for="skin1" class="setFilter_sample">
        <input id="skin1" type="checkbox" name="typArr" value="FB" alt="주름/탄력"><span @click="setFilter($event)">주름/탄력</span>
      </label>
    </div>
    <pre class="code_box"><code>&lt;label for="skin1" class="setFilter_sample"&gt;
  &lt;input id="skin1" type="checkbox" name="typArr" value="FB" alt="주름/탄력"&gt;&lt;span @click="setFilter($event)"&gt;주름/탄력&lt;/span&gt;
&lt;/label&gt;</code></pre>
  </section>

  <!-- modal -->
  <div id="sample_modal" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>Modal Title</h2>
        <button class="btn_close" @click="modal.close(this);">닫기</button>
      </div>
      <div class="modal_content">
        <div>Sample Modal</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_outline" txt="cancel" />
        <Button txt="OK" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //modal -->

</template>

<script setup>
definePageMeta({
  layout: 'guide'
})

import { modal, Drop_Down, setFilter } from '~/assets/js/common-ui.js'
import { sample_goods, sam_menu, sampleSlide, sample_event, sample_live } from '~/test/data/dummyData.js'

/* swiper */
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

const pagination = {
  type:'fraction',
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 2) + '</span>';
  }
}
/* //swiper */

/* component sample data */
const input_opt = reactive(
    {
        Placeholder: '문구를 입력해주세요.',
        isswitch: Boolean,
        opt: '_type="text" _placeholder="문구를 입력해주세요"',
        isError: false
    }
)

const select_opt = `[
    { val: 'value', txt: '옵션01' },
    { val: 'value', txt: '옵션02' }
]`
const tabidx= 0;
/* //component sample data */

/* inputs type function */
const tool_select = (props) => {

    for (var i = 0; i < event.currentTarget.closest('.toolbar').querySelectorAll('button').length; i++) {
        event.currentTarget.closest('.toolbar').querySelectorAll('button')[i].classList.remove('current');
    }
    event.currentTarget.classList.add('current');

    switch (props) {
        case 'isswitch':
            input_opt.isswitch = true,
            input_opt.type = 'checkbox',
            input_opt.opt = '_type="' + input_opt.type + '" :isswitch="' + input_opt.isswitch + '" _text="Label"'
            break;

        case 'error':
            input_opt.isswitch = false,
            input_opt.type = 'text',
            input_opt.Placeholder = '문구를 입력해주세요',
            input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"' + '" :isError="' + input_opt.isError + '" _err_text="Error Text"',
            input_opt.isError = true,
            input_opt.err_text = 'Error Text'
            break;

        case 'pw':
            input_opt.isswitch = false,
            input_opt.type = 'password',
            input_opt.Placeholder = '비밀번호를 입력해주세요',
            input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"',
            input_opt.isError = false
            break;

        case 'check':
            input_opt.isswitch = false,
            input_opt.type = 'checkbox',
            input_opt.opt = '_type="' + input_opt.type + '" _text="Label"'
            break;

        case 'radio':
            input_opt.isswitch = false,
            input_opt.type = 'radio',
            input_opt.opt = '_type="' + input_opt.type + '" _text="Label"'
            break;

        default:
            input_opt.isswitch = false,
            input_opt.type = 'text',
            input_opt.Placeholder = '문구를 입력해주세요',
            input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"',
            input_opt.isError = false
            break;
    }
}

/* modal layer type sample position */
onMounted(()=>{
  document.getElementById('layer').addEventListener('click', (event)=>{
    document.getElementById('sample_modal').style.cssText="top:"+event.currentTarget.offsetTop+"px; left:"+event.currentTarget.offsetLeft+"px;"
  });
});
/* //inputs type function */
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

::v-deep .swiper-slide {
  width:620px !important;
  opacity:0.2;
  filter:grayscale(1);
  transition:opacity 0.25s;

  &.swiper-slide-active {
    opacity:1;
    filter:grayscale(0);
  }
  &.swiper-slide-active + .swiper-slide {
    opacity:1;
    filter:grayscale(0);
  }
}

:deep(.pdtSortTab_wrap){
  justify-content:right;
}

.setFilter_sample {
  padding-left: 0;
  display: inline-block;
  cursor: pointer;

  input {
    position: absolute;
    z-indeX: -1;
    opacity: 0;
  }

  span {
    height: 30px;
    padding: 0 20px;
    color: #AAAAAA;
    font-weight: 600;
    font-size: 14px;
    border-radius: 5px;
    background-color: #F5F5F5;
    line-height: 1.29em;
    letter-spacing: -0.01em;
    display: flex;
    align-items: center;

    &.active {
      color: #FFFFFF;
      background: #00BC70;
    }
  }
}
</style>
