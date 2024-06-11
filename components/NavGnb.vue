<template>
  <nav class="navGnb" :class="{ main: type === 'main' }">
    <ul>
      <!-- active: true 면 active 클래스 적용 -->
      <li v-for="(con, idx) in item" :key="idx" :class="{ active: con.active }">
        <!-- admChk: true 면 point 클래스 적용 -->
        <a :href="con.url" :class="{ point: con.admChk }">
          <em>{{ con.tit }}</em>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default() {
      return []
    }
  },
  type: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped>
.navGnb {
  height: 4.6rem;
  padding: 0 2.1rem;
  overflow: auto;
  display: flex;
  align-items: center;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &.shadow {
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.05);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  & > ul {
    display: flex;
    gap: 2rem;
  }

  li {
    display: flex;
    align-items: center;

    a {
      padding: 1.4rem 0;
      font-size: 1.4rem;
      font-weight: 400;
      white-space: nowrap;
      position: relative;
      display: flex;
      
      em {
        color: #999;
        position: relative;
        display: block;
      }

      &.point {
        em:after {
          width: 0.5rem;
          height: 0.5rem;
          background: #00BC70;
          border-radius: 50%;
          content: '';
          position: absolute;
          top: 0;
          right: -0.7rem;
          display: block;
        }
      }
    }

    &.active { // 현재 페이지 표시
      a {
        font-weight: 600;

        &:after {
          content: '';
          width: 100%;
          height: 2px;
          background: #00BC70;
          position: absolute;
          bottom: -0.04rem;
          left: 0;
        }

        em {
          color: #000;
        }
      }
    }
  }

  &.main {
    li {
      a {
        em {
          color: #000;
        }
      }
    }
  }
}
</style>
