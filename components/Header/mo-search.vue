<template>
  <header :data-icon="iconType">
    <div class="search_header">
      <Icons class="back" txt="닫기" @click="search_close" />
      <div>
          <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
          <Icons class="btn_search" txt="검색" />
      </div>
      <Icons class="barcode" txt="바코드" />
      <Icons class="cart" txt="50" />
    </div>
  </header>
</template>
<script setup>
const iconType = ref(null);

onMounted(() => {
  if(document.querySelector('.search_wrap').getAttribute('data-search') === 'before') iconType.value = 'ico_barcode';
  else iconType.value = 'ico_cart';
});
</script>
<style lang="scss" scoped>
header {
  .search_header {
      padding:1rem 1.6rem;
      border:0;
      border-radius:0;
      background:#fff;
      display:flex;
      align-items:center;
      & > div {
          height:4rem;
          border:0.1rem solid #000;
          border-radius:5px;
          overflow:hidden;
          display:flex;
          align-items:center;
          flex:1;
      }
      :deep(.input_wrap) {
          .input {
            i, input {
                font-size:1.3rem;
            }
            i {
              left:1.5rem;
            }
            input {
                height:4rem;
                padding-left:1.5rem;
                padding-right:0.5rem;
                border:0;
            }
          }
      }
      .btn_search {
          width:2.4rem;
          height:2.4rem;
          margin-right:0.8rem;
          background-color:transparent;
          background-position:0 -4rem;
      }
      .back {
          margin-right:1rem;
      }
      .barcode, .cart {
          margin-left:1rem;
          display:none;
      }
  }
  &[data-icon="ico_barcode"] {
    .search_header {
      .barcode {
        display:block;
      }
    }
  }
  &[data-icon="ico_cart"] {
    .search_header {
      .cart {
        display:block;
      }
    }
  }
}
</style>
