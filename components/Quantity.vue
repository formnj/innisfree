<template>
  <div class="count_wrap">
    <Button class="btn_dec" txt="-" @click="decrease" />  <!-- 클릭 불가일 경우 disabled 속성 추가 -->
    <Inputs :_id="_id" :_value="quantity" />
    <Button class="btn_inc" txt="+" @click="increase" />
  </div>
</template>

<script setup>
  const props = defineProps({
    _id: String,
    quantity: {
      type: Number,
      default:0
    }
  });

  const increase = (e) => {
    const inputs = e.currentTarget.closest('.count_wrap').querySelector('input');
    inputs.value = Number(inputs.value)+1;
  }

  const decrease = (e) => {
    const inputs = e.currentTarget.closest('.count_wrap').querySelector('input');
    if(inputs.value > 1) {
      inputs.value = Number(inputs.value)-1;
    }
  }
</script>

<style lang="scss" scoped>
.count_wrap {
  border:1px solid #eee;
  display:flex;
  :deep(button) {
    width:45px;
    background-color:#fff;

    &:disabled {
      background-color:#fff;

      em {
        color: #ddd;
      }
    }

    em {
      font-size: 20px;
      padding:0;
      color:#000;
    }
    &.icon_del {
      display:none !important;
    }
  }
  :deep(input) {
    padding:0;
    border:0;
    text-align:center;
  }
}
</style>
