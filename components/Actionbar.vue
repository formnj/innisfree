<template>
  <div class="action_bar">
    <div class="inner">
      <a href="#"><img src="/_nuxt/assets/images/actionbar/Logo_Motion.png" alt=""></a>
      <div>
        <button><img src="/_nuxt/assets/images/actionbar/Category.png" alt=""></button>
        <button class="best"><img src="/_nuxt/assets/images/actionbar/Best.png" alt=""></button>
      </div>
      <div>
        <button class="mypage"><img src="/_nuxt/assets/images/actionbar/MyPage.png" alt=""></button>
        <button><img src="/_nuxt/assets/images/actionbar/History.png" alt=""></button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  device: {
    type: String
  }
});

onMounted(()=>{
  let preScrollTop = 0;
  window.addEventListener('scroll', () => {
      let nextScrollTop = window.scrollY;
      let actionbar = document.querySelector('.action_bar')
      if (preScrollTop < nextScrollTop) {
        actionbar.style.bottom = -((actionbar.offsetHeight)+40) + 'px'
      }
      else {
        actionbar.removeAttribute('style');
      }
      preScrollTop = nextScrollTop;
  });
})

</script>

<style lang="scss" scoped>
.action_bar {
  padding:10px 25px;
  background:#000;
  position:fixed;
  right:0;
  bottom:0;
  left:0;
  z-index:99; 
  transition:bottom 0.25s;
    .inner {
      display:flex;
      justify-content:center;
      gap:100px;
      > a {
        width:61px;
        height:61px;
        position:absolute;
        left:50%;
        top:-20px;
        display:block;
        transform:translateX(-50%);
        img {
          width:100%;
        }
      }
      > div {
        display:flex;
        gap:20px;
        button {
          width:32px;
          height:32px;
          display:block; 
          color:#fff;
          img{
            width:100%;
          }
        }
      }
    }
  }
</style>