<template>
  <div class="docTopBanner txtBanner">
    <div class="banner_list">
      <ul>
        <li><a :href="mainTopBannerData.url" class="txt" target="_blank">{{mainTopBannerData.bannerText}}</a></li>
        <li><a :href="mainTopBannerData.url" class="txt" target="_blank">{{mainTopBannerData.bannerText}}</a></li>
        <li><a :href="mainTopBannerData.url" class="txt" target="_blank">{{mainTopBannerData.bannerText}}</a></li>
        <li><a :href="mainTopBannerData.url" class="txt" target="_blank">{{mainTopBannerData.bannerText}}</a></li>
        <li><a :href="mainTopBannerData.url" class="txt" target="_blank">{{mainTopBannerData.bannerText}}</a></li>
      </ul>
    </div>
    <button type="button" class="btnClose">닫기</button>
  </div>
</template>
<script setup>
import { mainTopBannerData } from '~/test/data/publish/dummyData'

onMounted(() => {
  /* rolling */
  const banner_list = document.querySelector('.banner_list ul'),
  roll_size = banner_list.querySelectorAll('li'),
  roll_timer = 3000,
  clone_roll = roll_size[0];

  let i = 1;

  banner_list.insertAdjacentHTML('beforeend', '<li style="padding:1rem 0;">'+clone_roll.innerHTML+'</li>');

  const roll_fn = () => {
      banner_list.style.cssText='transform:translateY(-'+(i*3.6)+'rem); transition:all 0.35s ease-in;'
      if(i < (roll_size.length+1)){
          i++;
          if(i == (roll_size.length+1)){
              banner_list.addEventListener('transitionend', () => {
                banner_list.removeAttribute('style');
              }, {once: true});
              i = 1;
          }
      }
  };

  const key_rolling = setInterval(roll_fn, roll_timer);
  /* //rolling */
});
</script>
<style lang="scss" scoped>
.docTopBanner {
  height: 3.6rem;
  padding-right:2.1rem;
  justify-content:space-between;
  .banner_list {
    height:100%;
    overflow:hidden;
  }
  ul {
    display:flex;
    flex-wrap:wrap;
    li {
      width:100%;
      height:3.6rem;
      display:flex;
      align-items:center;
    }
  }
}
</style>
