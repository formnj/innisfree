<template>
  <section>
    <h2>Inputs</h2>
    <ul class="explain">
      <li>round_square : checkbox, radio 사용 가능</li>
    </ul>
    <ul class="toolbar">
      <li><button class="current" @click="tool_select('text');">Text</button></li>
      <li><button @click="tool_select('error');">Error</button></li>
      <li><button @click="tool_select('pw');">Password</button></li>
      <li><button @click="tool_select('check');">Checkbox</button></li>
      <li><button @click="tool_select('check2');">Checkbox02</button></li>
      <li><button @click="tool_select('check3');">Round_square</button></li>
      <li><button @click="tool_select('radio');">Radio</button></li>
      <li><button @click="tool_select('isswitch');">Switch</button></li>
    </ul>
    <div class="design_box">
      <Inputs :_type="input_opt.type" :isswitch="input_opt.isswitch" :_placeholder="input_opt.Placeholder" _text="Label"
        :isDisabled="_disabled" :isError="input_opt.isError" :_err_text="input_opt.err_text" :class="input_opt.class"/>
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
    <ul class="explain">
      <li>Error 처리 : isError="true"</li>
      <li>Error 문구 : _err_text</li>
    </ul>
    <div class="design_box">
      <Selectbox :isError="true" _err_text="Error" :options="[
                    { val: 'value', txt: '옵션01' },
                    { val: 'value', txt: '옵션02' }
                ]" />
    </div>
    <pre class="code_box"><code>&lt;Selectbox
    :isError="true" _err_text="에러문구"
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

        <Button txt="disabled" disabled />

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
      <Icons class="del" />
    </div>
    <pre class="code_box"><code>&lt;Icons class="tooltip" /&gt;
&lt;Icons class="del" /&gt;</code></pre>
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
    <h2>Goods Item - default</h2>
    <ul class="explain">
      <li>sold out, coming soon = status:'sold_out' or 'coming_soon' or 'end'</li>
      <li>Props<br>useMark(마크/스티커 사용여부, default:true)<br>useHas(해시태그 사용여부, default:false)<br>useScore(별점 사용여부, default:true)<br>useGiveaway(증정품 사용여부, default:false)<br>useBigmark(대용량 마크 사용여부, default:true)</li>
      <li>class<br>type_column, type_cart</li>
      <li>기준 : 기획서 PC, MO 제품목록 참고</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <h3>pc</h3>
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0,2)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
          <li v-for="(item, idx) in sample_goods.slice(3,6)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
        <h3 style="margin-top:40px;">mobile</h3>
        <ul class="goods_list mobile" style="width:100%;">
          <li v-for="(item, idx) in sample_goods.slice(0,2)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
          <li v-for="(item, idx) in sample_goods.slice(3,6)" :key="idx">
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
    <h2>Goods Item - useHash</h2>
    <ul class="explain">
      <li>:useHash="true", default는 false(그 외 props는 default형 설명 참고)</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap" style="display:flex;">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0,1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useHash="true" />
          </li>
        </ul>
        <ul class="goods_list mobile">
          <li v-for="(item, idx) in sample_goods.slice(0,1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useHash="true" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" :useHash="true" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item - useGiveaway</h2>
    <ul class="explain">
      <li>:useGiveaway="true", default는 false(그 외 props는 default형 설명 참고)</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap" style="display:flex;gap:20px;">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0,1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useGiveaway="true" />
          </li>
        </ul>
        <ul class="goods_list mobile"><!--mobile 클래스는 가이드용 -->
          <li v-for="(item, idx) in sample_goods.slice(0,1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useGiveaway="true" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" :useGiveaway="true" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item - type_column</h2>
    <ul class="explain">
      <li>class="type_column"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0,1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" class="type_column" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" class="type_column" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item(Mobile) - type_cart</h2>
    <ul class="explain">
      <li>class="type_cart"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list mobile"><!--mobile 클래스는 가이드용 -->
          <li v-for="(item, idx) in sample_goods.slice(0,1)" :key="idx">
            <GoodsItem :item="item" :link="item.link" class="type_cart" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" class="type_cart" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item(Mobile) - type_column + type_cart</h2>
    <ul class="explain">
      <li>class="type_column type_cart"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list mobile"><!--mobile 클래스는 가이드용 -->
          <li v-for="(item, idx) in sample_goods.slice(0,1)" :key="idx" style="width: 350px;">
            <GoodsItem :item="item" :link="item.link" class="type_column type_cart" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" class="type_column type_cart" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Goods Item(Mobile) - col_3</h2>
    <ul class="explain">
      <li>class="col_3"</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="goods_list mobile col_3"><!--mobile 클래스는 가이드용 -->
          <li v-for="(item, idx) in sample_goods.slice(0,6)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
    </div>
    <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list col_3"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
  </section>

  <section>
    <h2>Event Item</h2>
    <ul class="explain">
      <li>event item type 추가 : default, type_02, type_column &lt;EventItem :item="item" type="타입입력 default는 제외" /&gt;</li>
    </ul>
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
            &lt;EventItem :item="item" :link="item.link" type="타입입력 default는 제외" /&gt;
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
    <h2>Quantity count</h2>
    <ul class="explain">
      <li>quantity : 초기 input 값</li>
    </ul>
    <div class="design_box">
      <div style="width:160px;">
        <Quantity _id="sample" quantity="32" />
      </div>
    </div>
    <pre class="code_box"><code>&lt;Quantity _id="아이디" quantity="초기 input value" /&gt;</code></pre>
  </section>

  <section>
    <h2>Cart list</h2>
    <ul class="explain">
      <li>장바구니 리스트 등 ul, li를 이용한 table Row 형태의 리스트</li>
      <li>class : 하위요소의 넓이 등을 지정 할 클래스명(예: cart_list), type_default : 형태(예: type_default = 기본 리스트 스타일)</li>
    </ul>
    <div class="design_box">
      <div class="list_wrap">
        <ul class="cart_list type_default">
          <li>
            <div class="row">
              <div class="cell check">
                <Inputs _type="checkbox" />
              </div>
              <div class="cell pdt_img">
                <a href="#none">
                  <span class="thumb">
                    <em><img src="https://images.innisfree.co.kr/upload/product/36116_l_S_140.jpg?T202404300927" alt="" /></em>
                  </span>
                </a>
              </div>
              <div class="cell pdt_info">
                <a href="#none" class="name">상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명</a>
                <div class="alt">
                  <span>[4/23 ~ 5/1, 기간내 5개]</span>
                </div>
                <Selectbox
                    :options="[
                    { val: 'value', txt: '1호 블랙' },
                    { val: 'value', txt: '옵션02' }
                ]" />
              </div>
              <div class="cell count">
                <Quantity _id="sample" quantity="32" />
              </div>
              <div class="cell price">
                <span>일시품절</span><!-- 상태 : 일시품절, 판매중지, 출시예정 -->
                <Button class="btn_min_outline" txt="입고알림신청" />
                <p>
                  <strong>52,000</strong>원
                </p>
                <em class="point">+529P</em><!-- point -->
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
      <li>특정 스타일이 필요하여 클래스를 추가할 경우, 특정클래스 추가 가능: ex) Open : modal.open(오픈할 모달아이디, 타입 특정클래스);</li>
      <li>Close : modal.close(); /* 다중팝업 노출 시 바디스크롤 풀림 처리 예정 */</li>
      <li>toast 모달의 경우 import { toast_pop } from '~/assets/js/common-ui.js' 선언 후, 파라미터로 시간 추가하여 진행</li>
      <li>layer 모달의 경우 modal open 버튼과 동일한 위치에 modal_wrap 선언(하단 Modal layer type 주석 참고)</li>
      <li>tooltip 공통 스타일 추가 (하단 Modal tooltip 주석 참고)</li>
    </ul>
    <div class="design_box">
      <div class="multi_form">
        <Button txt="Modal full" @click="modal.open('sample_modal', 'full');" />
        <Button txt="Modal alert" @click="modal.open('sample_modal', 'alert');" />
        <Button txt="Modal bottom" @click="modal.open('sample_modal', 'bottom');" />
        <Button txt="Modal detailSearch" @click="modal.open('sample_modal', 'detailSearch');" />
        <Button id="layer" txt="Modal layer" @click="modal.open('sample_modal', 'layer');" />
        <Button id="tooltip" txt="Modal layer tooltip" @click="modal.open('sample_modal2', 'layer tooltip');" />
        <Button txt="Modal fullMo" @click="modal.open('sample_modal', 'fullMo');" />
        <Button txt="Modal toast" @click="modal.open('sample_modal', 'toast'), toast_pop(3000);" />
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
&lt;/div&gt;</code>
<code>
// Modal layer type
&lt;button @click="modal.open('모달_아이디', 'layer')" &gt;버튼&lt;/button&gt;
&lt;div id="모달_아이디" class="modal_wrap"&gt;
  &lt;div class="modal_container"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;

// Modal tooltip
&lt;div id="sample_modal2" class="modal_wrap"&gt;
  &lt;div class="modal_container"&gt;
    &lt;button class="btn_close" @click="modal.close(this);"&gt;닫기&lt;/button&gt;
    &lt;div class="modal_content"&gt;
      &lt;h2&gt;Modal Title&lt;/h2&gt;
      &lt;div&gt;Sample Modal&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="modal_footer"&gt;
      &lt;Button class="btn_outline" txt="cancel" /&gt;
      &lt;Button txt="OK" /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="overlay" @click="modal.close(this);"&gt;&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
  </section>

  <section>
    <h2>Tabs</h2>
    <ul class="explain">
      <li>tabType : tab type 클래스 지정</li>
      <li>default : 탭 요소의 넓이가 갯수에 대한 비율로 늘어남.</li>
      <li>tabType="type_01" = 상품상세 정보 탭 / type_02 = 베스트 카테고리 탭</li>
      <li>카운트(숫자)가 들어가는 경우 데이터에 Cnt 항목 필요</li>
    </ul>
    <div class="design_box">
      <ul class="form_group">
        <li>
          <p class="form_tit">[Default]</p>
          <Tabs tabType="" :item="[{txt:'tab01', Cnt:999},{txt:'tab02'}]" :tabidx="0" />
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
        <li>
          <p class="form_tit">[type_03]</p>
          <Tabs tabType="type_03" :item="[{txt:'tab01'},{txt:'tab02'}]" :tabidx="0" />
        </li>
        <li>
          <p class="form_tit">[type_04]</p>
          <Tabs tabType="type_04" :item="[{txt:'tab01'},{txt:'tab02'}]" :tabidx="0" />
        </li>
        <li>
          <p class="form_tit">[type_05]</p>
          <Tabs tabType="type_05" :item="[{txt:'tab01'},{txt:'tab02'},{txt:'tab03'}]" :tabidx="0" />
        </li>
      </ul>
    </div>
    <pre
      class="code_box"><code>&lt;Tabs tabType="" :item="[{txt:'tab01', Cnt:999},{txt:'tab02'}]"  :tabidx="0" /&gt;</code></pre>
  </section>

  <section>
    <h2>swiper</h2>
    <ul class="explain">
      <li><NuxtLink :to="'https://swiperjs.com/vue'" target="_blank">[API] https://swiperjs.com/vue</NuxtLink></li>
    </ul>
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
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

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

  <section>
    <h2>별점</h2>
    <ul class="explain">
      <li>class="type_big" : 상품상세 리뷰 편점 등 큰 사이즈에 사용</li>
    </ul>
    <div class="design_box">
      <ul class="form_group">
        <li>
          <p class="form_tit">Default</p>
          <Reviewpoint width="90" rate="4.7" />
        </li>
        <li>
          <p class="form_tit">type_big</p>
          <Reviewpoint width="90" rate="4.7" class="type_big" />
        </li>
      </ul>
    </div>
    <pre class="code_box"><code>&lt;Reviewpoint width="퍼센트(숫자)" rate="평점(숫자)" /&gt;</code></pre>
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

  <!-- modal tooltip -->
  <div id="sample_modal2" class="modal_wrap">
    <div class="modal_container">
      <button class="btn_close" @click="modal.close(this);">닫기</button>
      <div class="modal_content">
        <h2>Modal Title</h2>
        <div>Sample Modal</div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //modal tooltip -->

  <!-- 증정품 모달 -->
  <div class="modal_wrap" id="giveaway_01">
    <div class="modal_container">
        <div class="modal_header">
            <h2>증정품안내</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <dl>
            <dt>
              <img src="/_nuxt/public/images/sam/giveaway_01.png">
            </dt>
            <dd>
              <p>제주 루트 에너지 마스크[당근] 5매 세트</p>
              <em>24.3.25 ~ 24.3.31</em>
              <span>1개 구매시 1개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/_nuxt/public/images/sam/giveaway_02.png">
            </dt>
            <dd>
              <p>비타C 세럼 럭키 박스 (30ml + 랜덤기프트)</p>
              <em>23.4.11</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/_nuxt/public/images/sam/giveaway_03.png">
            </dt>
            <dd>
              <p>레티놀 시카 앰플 포커싱 패치 1ea / 9patches</p>
              <em>24.2.29 ~ 24.3.31</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- //증정품 모달 -->

</template>

<script setup>
definePageMeta({
  layout:'guide'
})

import { modal, Drop_Down, setFilter, toast_pop} from '~/assets/js/common-ui.js'
import { sample_goods, sam_menu, sampleSlide, sample_event, sample_live } from '~/test/data/publish/dummyData.js'

/* swiper */
// import Swiper core and required components
import SwiperCore from "swiper";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

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
        isError: false,
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
            input_opt.opt = '_type="' + input_opt.type + '" :isswitch="' + input_opt.isswitch + '" _text="Label"',
            input_opt.class = ''

            break;

        case 'error':
            input_opt.isswitch = false,
            input_opt.type = 'text',
            input_opt.Placeholder = '문구를 입력해주세요',
            input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"' + '" :isError="' + input_opt.isError + '" _err_text="Error Text"',
            input_opt.isError = true,
            input_opt.err_text = 'Error Text',
            input_opt.class = ''
            break;

        case 'pw':
            input_opt.isswitch = false,
            input_opt.type = 'password',
            input_opt.Placeholder = '비밀번호를 입력해주세요',
            input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"',
            input_opt.isError = false,
            input_opt.class = ''
            break;

        case 'check':
            input_opt.isswitch = false,
            input_opt.type = 'checkbox',
            input_opt.opt = '_type="' + input_opt.type + '" _text="Label"',
            input_opt.class = ''
            break;

        case 'check2':
            input_opt.isswitch = false,
            input_opt.type = 'checkbox',
            input_opt.opt = '_type="' + input_opt.type + '" _text="Label"' + ' class="checkbox02"'
            input_opt.class = 'checkbox02'
            break;

        case 'check3':
            input_opt.isswitch = false,
            input_opt.type = 'checkbox',
            input_opt.opt = '_type="' + input_opt.type + '" _text="Label"' + ' class="round_square"'
            input_opt.class = 'round_square'
            break;

        case 'radio':
            input_opt.isswitch = false,
            input_opt.type = 'radio',
            input_opt.opt = '_type="' + input_opt.type + '" _text="Label"',
            input_opt.class = ''
            break;

        default:
            input_opt.isswitch = false,
            input_opt.type = 'text',
            input_opt.Placeholder = '문구를 입력해주세요',
            input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"',
            input_opt.isError = false,
            input_opt.class = ''
            break;
    }
}


/* modal layer type sample position */
onMounted(()=>{
  document.getElementById('layer').addEventListener('click', (event)=>{
    document.getElementById('sample_modal').style.cssText="top:"+event.currentTarget.offsetTop+"px; left:"+event.currentTarget.offsetLeft+"px;"
  });

  document.getElementById('tooltip').addEventListener('click', (event)=>{
    document.getElementById('sample_modal2').style.cssText="top:"+event.currentTarget.offsetTop+"px; left:"+event.currentTarget.offsetLeft+"px;"
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

:deep(.breadcrumb) {
    .inner {
        margin:0 !important;
    }
}

:deep(.swiper-slide) {
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




/* goodsItem */
.mobile {
  :deep(.goods_item) {
    width: 16.5rem;
    padding-bottom:calc(24px + 1rem);
    position: relative;

    .img_wrap {
      position:static;
      &:before {
        display:none !important;
      }
      .top_sticker {
        height: 2.4rem;
        line-height: 2.4rem;
      }
      .thumb {
        width:100%;
        height:22.0rem;
      }
      .btnIconBox {
        background-color:transparent;
        position:absolute;
        bottom:0;
        gap:1rem;
        justify-content:start;
        transform:translateY(0);
        button {
          padding:0;
          em {
            width:24px;
            height:24px;
            padding:0;
            background-image:url('~/assets/mo_images/common/icon_split.png');
            background-size:250px auto;
          }
          &.btn_heart {
            em {
              background-position:-140px -40px;
            }
            &.on {
              em {
                background-position:-180px -70px;
              }
            }
          }
          &.btn_cart em {
            background-position:-170px -40px;
          }
          &.btn_buy em {
            background-position:-200px -40px;
          }
        }
      }
    }
    &.sold_out, &.coming_soon, &.end {
      .img_wrap {
        a {
          position:relative;
          &:before, &:after {
            content:'';
            display:block;
          }
          &:before {
            background-color:rgba(0,0,0,0.3);
            background-position:50%;
            background-repeat:no-repeat;
            background-size: 60%;
            position:absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
            z-index:1;
          }
        }
      }
    }
    &.sold_out {
      .img_wrap a:before {
          background-image:url('~/assets/images/ui/overlay_soldout.png');
      }
    }
    &.coming_soon {
      .img_wrap a:before {
          background-image:url('~/assets/images/ui/overlay_comingsoon.png');
      }
    }
    &.end {
      .img_wrap a:before {
          background-image:url('~/assets/images/ui/overlay_end.png');
      }
    }
    .cont {
      > .price {
        margin-top:0.6rem;
        margin-bottom:1rem;
        strong {
          margin-right:0.5rem;
          font-size:1.4rem;
        }
        span {
          font-size:1.2rem;
        }
        em {
          font-size:1rem;
          display:block;
        }
      }
      .name {
        font-size:1.4rem;
        strong {
          color:#000;
          .cate {
            margin:0;
          }
        }
      }
      .review_score {
        margin-top:1.0rem;
        font-size:1.0rem;
      }
      .sticker em {
        padding:3px 5px;
        font-size:1rem;
      }
    }

    &.type_column {
      width: 100%;
      padding-bottom: 0;

      .img_wrap {
        .thumb {
          width: 9rem;
          height: 12rem;
        }
      }
      .cont {
        .price {
          em {
            display: inline;
          }
        }
      }

      &.type_cart { /* .type_column.type_cart */
        .img_wrap {
          position: static;
          .btnIconBox {
            display: flex;
            position: absolute;
            top: 50%;
            transform: translate(-50%);
            bottom: auto;
            right: 0;
            left: auto;
            z-index: 2;
            gap: 0;
          }
        }
      }
    }

    &.type_cart { /* .type_cart */
      padding-bottom: 0;

      .img_wrap {
        position: relative;

        .btnIconBox {
          position: absolute;
          bottom: .5rem;
          right: 0px;
          justify-content: end;
          gap: .5rem;

          .btn_heart,
          .btn_buy {
            display: none;
          }
        }
      }
    }
  }
}
/* //goodsItem */

/* goods list */
:deep(.goods_list).mobile {
  width:375px;
  &.col_3 {
    display: flex;
    gap: 2rem .3rem;
    > li {
      width: 10.9rem;
      .goods_item {
        width: 10.9rem;
        .img_wrap {
          .thumb {
            height: 14.5rem;
          }
        }
      }
    }
  }
}

@import "~/assets/scss/_mo_mixin";

@include mo_749 {
  @import "~/assets/scss/mobile.scss";
}
</style>
