<template>
  <div class="inner">
      <nav class="navGnb">
          <ul>
              <li v-for="(item,idx) in props.gnb" :key="idx" :class="item.type">
                  <a :href="item.url" :class="{'point':item.admChk}">
                    <em>{{ item.tit }}</em>
                  </a>
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
  }
});
</script>

<style lang="scss" scoped>
.inner {
    padding:0 1.3rem;
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
            padding:0 1rem;
            display:flex;
            align-items:center;
            a {
                padding:1.5rem 0;
                font-size:1.4rem;
                font-weight:400;
                white-space:nowrap;
                position:relative;
                display:flex;
                em {
                  position:relative;
                  display:block;
                }
                &.point {
                  em:after {
                    width:0.5rem;
                    height:0.5rem;
                    background:#00BC70;
                    border-radius:50%;
                    content:'';
                    position:absolute;
                    top:0;
                    right:-0.7rem;
                    display:block;
                  }
                }
            }
            &.active {
              a {
                font-weight:700;
                &:after {
                  border-bottom:0.2rem solid #00BC70;
                  content:'';
                  position:absolute;
                  right:0;
                  bottom:0;
                  left:0;
                }
              }
            }
        }
    }
}
</style>
