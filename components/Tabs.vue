<template>
    <div class="tab_wrap">
        <ul :class="tabType">
            <li v-for="(item, idx) in item" :key="idx"  :class="{ current: tabidx == idx }">
                <Button :txt="item.txt" @click="tabidx = idx" />
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {},
    tabidx: Number,
    tabType: String
});
</script>

<style lang="scss" scoped>
.tab_wrap {
  ul {
      display:flex;
      li {
          margin-left:-1px;
          flex:1;
          ::v-deep > * {
              width:100%;
              height:51px;
              font-size:16px;
              background-color:transparent;
              border:1px solid #eee;
              position:relative;
              display:block;
              transition:border 0.25s;
              em {
                  color:#666;
                  transition:color 0.25s;
              }
          }
          &:hover > * {
              border-color:#00BC70;
              z-index:2;
              ::v-deep em {
                  color:#00BC70;
              }
          }
          &.current > * {
              border-color:#000;
              z-index:1;
              ::v-deep em {
                  color:#000;
                  font-weight:600;
              }
          }
      }
      &.type_01 {
          li {
          ::v-deep > * {
              height:60px;
              font-size:14px;
              border:0;
              transition:initial;
              &:after {
                border-bottom:1px solid #f5f5f5;
                content:'';
                position:absolute;
                right:0;
                bottom:0;
                left:0;
              }
              em {
                  color:#888;
                  transition:initial;
              }
          }
          &.current {
            ::v-deep > * {
              &:after {
                border-bottom:2px solid #000;
              }
              em {
                color:#000;
                font-weight:700;
              }
            }
          }
        }
      }
  }
}
</style>
