<template>
  <div class="filter_wrap">
    <Tabs tabType="type_02"
      :item="[{ txt: '전체' }, { txt: '피치퍼즈템' }, { txt: '화이트데이' }, { txt: '장원영피부되기' }, { txt: '왓츠인마이백' }, { txt: '피치퍼즈템' }, { txt: '화이트데이' }, { txt: '장원영피부되기' }, { txt: '왓츠인마이백' }]"
      :tabidx="0" />
    <button type="button" class="btn_toggle" @click="filterToggle">영역 펼치기</button>
  </div>
</template>

<script setup>
const filterToggle = (e) => {
  const el = e.target;
  const filterWrap = el.parentElement;

  el.innerText = filterWrap.classList.contains('open') ? '영역 펼치기' : '영역 접기';
  filterWrap.classList.toggle('open');
}
</script>

<style lang="scss" scoped>
.filter_wrap {
  padding: 20px 21px 0;
  position: relative;

  :deep(.tab_wrap) {
    max-height: 72px;
    overflow: hidden;

    ul.type_02 {
      width: calc(100% - 40px);
      margin: 0;
      gap: 8px 5px;
      flex-wrap: wrap;

      li {
        padding: 0;

        &>* {
          background: #fff;
          border-color: #eee;

          em {
            height: 30px;
            padding: 0 12px;
            line-height: 30px;
            font-weight: 600;
          }
        }
      }
    }
  }

  .btn_toggle {
    position: absolute;
    bottom: 0;
    right: 25px;
    width: 30px;
    height: 30px;
    font-size: 0;
    border-radius: 50%;
    background: #fff url(/assets/mo_images/common/icon_split.png) 6px -63px / 250px auto no-repeat;
    border: 1px solid #eee;
    transition: all .45s;
  }

  &.open {
    :deep(.tab_wrap) {
      max-height: max-content;
    }

    .btn_toggle {
      transform: rotate(180deg);
    }
  }
}
</style>
