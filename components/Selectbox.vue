<template>
  <label class="select">
    <div>
      <select :class="{ changed: isChange }" :v-model="model" @change="isChange = true" :disabled="isDisabled">
        <option :value="select.val" v-for="(select, i) in options" :key="i">{{ select.txt }}</option>
      </select>
    </div>
    <!-- 에러문구 -->
    <em v-if="isError" class="err_txt">{{ _err_text }}</em>
    <!-- //에러문구 -->
  </label>
</template>

<script setup>
const props = defineProps({
  options: Array,
  model: String,
  isChange: false,
  isDisabled: false,
  isError: false, // 오류 여부
  _err_text: String
})
</script>

<style lang="scss" scoped>
/* select_form */
select {
  width: 100%;
  height: 40px;
  padding: 11px 40px 11px 12px;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid #aaa;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

label.select {
  & > div {
    position: relative;
    display: block;
    &:after {
      width: 12px;
      height: 12px;
      margin-top: -4px;
      border: 1px solid #222;
      border-top: 0;
      border-left: 0;
      content: '';
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%) rotate(45deg);
    }
    select {
      color: #aaa;
      &:disabled {
        background-color: #eee;
        border-color: #ddd;
      }
      &.changed {
        color: #222;
      }
    }
  }
}
</style>
