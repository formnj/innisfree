<template>
  <div class="inner">
      <nav class="navGnb">
          <ul>
              <li v-for="(item,idx) in props.gnb " :key="idx">
                  <a href="#none">{{ item }}</a>
              </li>
          </ul>
      </nav>
  </div>
</template>
<script setup>
const props = defineProps({
  gnb: {
    type: Array,
    default() {
      return []
    }
  },
})
</script>

<style lang="scss" scoped>
.inner {
    padding:0 13px;
    overflow:auto;
    display:flex;
    align-items:center;
    -ms-overflow-style:none;
    scrollbar-width:none;
    &::-webkit-scrollbar {
      display:none;
    }
    & > ul, nav > ul {
        position:relative;
        z-index:1;
        display:flex;
    }
    .navGnb {
        li {
            padding:0 10px;
            display:flex;
            align-items:center;
            &.active {
              a {
                font-weight:700;
                border-bottom:2px solid #000;
              }
            }
        }
        a {
            padding:15px 0;
            font-size:14px;
            font-weight:400;
            white-space:nowrap;
            position:relative;
            display:block;
        }
    }
}
</style>
