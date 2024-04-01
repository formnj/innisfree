<template>
  <section>
    <h2>퍼블리싱 컴포넌트 재작업 결과 페이지</h2>
    <h3>[작업 완료 내용]</h3>
    <ol>
      <li>디렉토리 분리 및 프리픽스 추가, 패스 프리픽스 제거</li>
      <li>타입스크립트로 변경</li>
      <li>컴포넌트마다 인터페이스 추가(for typescript)</li>
      <li>불필요 프롭스 제거</li>
      <li>포맷팅 및 린팅 적용</li>
      <li>ES6문법 변경</li>
      <li>DOM 트리 조회 로직 제거 후 데이터 드리븐 방식으로 변경</li>
    </ol>
  </section>

  <section>
    <h2>Inputs</h2>
    <ul class="toolbar">
      <li>
        <button :class="{ current: currentTab === 1 }" @click="tabClick(1)">Text</button>
      </li>
      <li><button :class="{ current: currentTab === 2 }" @click="tabClick(2)">Error</button></li>
      <li>
        <button :class="{ current: currentTab === 3 }" @click="tabClick(3)">Password</button>
      </li>
      <li>
        <button :class="{ current: currentTab === 4 }" @click="tabClick(4)">Checkbox</button>
      </li>
      <li><button :class="{ current: currentTab === 5 }" @click="tabClick(5)">Radio</button></li>
      <li>
        <button :class="{ current: currentTab === 6 }" @click="tabClick(6)">Switch</button>
      </li>
    </ul>

    <div v-if="currentTab === 1">
      <div class="design_box">
        <InmInputText v-model="inputTextValue" placeholder="입력 해주세요." />
        입력한 값: {{ inputTextValue }}
      </div>
      <pre class="code_box"><code >&lt;InmInputText v-model="inputTextValue" placeholder="입력 해주세요." /&gt;</code></pre>

      <div class="design_box">
        <InmInputText model-value="동해물과 백두산이" :is-readonly="true" />
      </div>
      <pre class="code_box"><code >&lt;InmInputText model-value="동해물과 백두산이" :is-readonly="true" /&gt;</code></pre>
    </div>

    <div v-if="currentTab === 2">
      <div class="design_box">
        <InmInputText v-model="inputTextValue" placeholder="입력 해주세요." :is-error="hasText" error-text="실패!!" />
        입력한 값: {{ inputTextValue }}
      </div>
      <pre
        class="code_box"><code >&lt;InmInputText v-model="inputTextValue" placeholder="입력 해주세요." :is-error="hasText" error-text="실패!!" /&gt;</code></pre>
    </div>

    <div v-if="currentTab === 3">
      <div class="design_box">
        <InmInputPassword v-model="inputPasswordValue" placeholder="입력 해주세요." />
        입력한 값: {{ inputPasswordValue }}
      </div>
      <pre class="code_box"><code >&lt;InmInputPassword v-model="inputPasswordValue" placeholder="입력 해주세요." /&gt;</code></pre>
    </div>

    <div v-if="currentTab === 4">
      <div class="design_box">
        <InmInputCheckbox v-model="inputCheckboxValue" text="체크여부" true-value="Y" false-value="N" />
        <div>선택한 값: {{ inputCheckboxValue }}</div>
      </div>
      <pre
        class="code_box"><code >&lt;InmInputCheckbox v-model="inputCheckboxValue" text="체크여부" true-value="Y" false-value="N" /&gt;</code></pre>
    </div>

    <div v-if="currentTab === 5">
      <div class="design_box">
        <InmInputRadio v-model="inputRadioValue" text="1번 선택합니다" value="1번" />
        <InmInputRadio v-model="inputRadioValue" text="2번 선택합니다" value="2번" />
        <div>선택한 값: {{ inputRadioValue }}</div>
      </div>
      <pre
        class="code_box"><code >&lt;InmInputRadio v-model="inputRadioValue" text="1번 선택합니다" value="1번" /&gt;<br>&lt;InmInputRadio v-model="inputRadioValue" text="2번 선택합니다" value="2번" /&gt;</code></pre>
    </div>

    <div v-if="currentTab === 6">
      <div class="design_box">
        <InmInputCheckbox v-model="inputCheckboxValue" text="체크여부" true-value="Y" false-value="N" :is-switch="true" />
        <div>선택한 값: {{ inputCheckboxValue }}</div>
      </div>
      <pre
        class="code_box"><code >&lt;InmInputCheckbox v-model="inputCheckboxValue" text="체크여부" true-value="Y" false-value="N" :is-switch="true" /&gt;</code></pre>
    </div>
  </section>

  <section>
    <h2>Select</h2>
    <div class="design_box">
      <InmSelectbox
        v-model="selectboxValue"
        :options="[
          { value: '1번', text: '1번 선택합니다' },
          { value: '2번', text: '2번 선택합니다' }
        ]" />
      선택된 값 : {{ selectboxValue }}
    </div>
    <pre
      class="code_box"><code >&lt;InmSelectbox v-model="selectboxValue" :options="[{ value: '1번', text: '1번 선택합니다' }, { value: '2번', text: '2번 선택합니다' }]" /&gt;</code></pre>
    <div class="design_box">
      <InmSelectbox
        v-model="selectboxValue"
        :options="[
          { value: '1번', text: '1번 선택합니다' },
          { value: '2번', text: '2번 선택합니다' }
        ]"
        :is-disabled="true" />
    </div>
    <pre
      class="code_box"><code >&lt;InmSelectbox v-model="selectboxValue" :options="[{ value: '1번', text: '1번 선택합니다' }, { value: '2번', text: '2번 선택합니다' }]" :is-disabled="true" /&gt;</code></pre>
  </section>

  <section>
    <h2>Button</h2>
    <ul class="explain">
      <li>
        클래스 규칙 : btn_크기_타입(보더유무)<br />
        ex) &lt;Button class="btn_big_outline" /&gt;]
      </li>
      <li>size : default = 40 / [_big] = 60 / [_mid] = 50 / [_min] = 30</li>
    </ul>
    <div class="design_box">
      <div class="multi_form">
        <InmButton class="btn_big" @click="showAlert">btn_big (60px)</InmButton>
        <InmButton class="btn_mid" @click="showAlert">btn_mid (50px)</InmButton>
        <InmButton @click="showAlert">default (40px)</InmButton>
        <InmButton class="btn_min" @click="showAlert">btn_min (30px)</InmButton>
        <InmButton class="btn_big_outline" @click="showAlert">btn_big_outline (60px)</InmButton>
        <InmButton class="btn_mid_outline" @click="showAlert">btn_mid_outline (50px)</InmButton>
        <InmButton class="btn_outline" @click="showAlert">btn_outline (40px)</InmButton>
        <InmButton class="btn_min_outline" @click="showAlert">btn_min_outline (30px)</InmButton>
      </div>
    </div>
    <pre class="code_box"><code >&lt;InmButton class="btn_big" @click="showAlert"&gt;btn_big (60px)&lt;/InmButton&gt;
&lt;InmButton class="btn_mid" @click="showAlert"&gt;btn_mid (50px)&lt;/InmButton&gt;
&lt;InmButton @click="showAlert"&gt;default (40px)&lt;/InmButton&gt;
&lt;InmButton class="btn_min" @click="showAlert"&gt;btn_min (30px)&lt;/InmButton&gt;
&lt;InmButton class="btn_big_outline" @click="showAlert"&gt;btn_big_outline (60px)&lt;/InmButton&gt;
&lt;InmButton class="btn_mid_outline" @click="showAlert"&gt;btn_mid_outline (50px)&lt;/InmButton&gt;
&lt;InmButton class="btn_outline" @click="showAlert"&gt;btn_outline (40px)&lt;/InmButton&gt;
&lt;InmButton class="btn_min_outline" @click="showAlert"&gt;btn_min_outline (30px)&lt;/InmButton&gt;</code></pre>
  </section>

  <section>
    <h2>Multi form</h2>
    <div class="design_box">
      <ul class="form_group">
        <li>
          <p class="form_tit">검색어를 입력 하세요</p>
          <InmSingleInputEvent v-model="singleInputEventValue" placeholder="문구를 입력 해주세요." @click="getSingleInputEventValue" />
        </li>
      </ul>
    </div>
    <pre
      class="code_box"><code>&lt;InmSingleInputEvent v-model="singleInputEventValue" placeholder="문구를 입력 해주세요." @click="getSingleInputEventValue"/&gt;</code></pre>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'guide'
})

const inputTextValue: Ref<string | number> = ref('')
const inputPasswordValue: Ref<string | number> = ref('')
const inputCheckboxValue: Ref<boolean | string[]> = ref(false)
const inputRadioValue: Ref<string> = ref('')
const singleInputEventValue: Ref<string> = ref('')

const hasText = computed<boolean>(() => !inputTextValue.value)

const selectboxValue = ref('선택 전')

const showAlert = () => alert('click!!')

const tabClick = (tabNumber) => {
  currentTab.value = tabNumber
}
const currentTab = ref(1)

const getSingleInputEventValue = (value) => {
  if (!value) {
    return
  }
  alert(`input 값은 ${value} 입니다`)
}
</script>
<style lang=""></style>
