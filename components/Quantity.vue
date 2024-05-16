<template>
  <div class="count_wrap">
    <Button txt="-" @click="decrease" />
    <Inputs :_id="_id" :_value="quanity" />
    <Button txt="+" @click="increase" />
  </div>
</template>

<script setup>
  const props = defineProps({
    _id: String,
    quanity: {
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
    em {
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
