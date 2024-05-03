<template>
  <div class="onepoint">
    <div class="txt">
      <p>가볍지만 확실한 밀착력으로 결점 컬러 별 맞춤 커버가 가능한 다크서클 전용 컨실러</p>
      <Hash v-for="(item, idx) in sample_goods.slice(0,1)" :key="idx" hashType="round" :item="item.hash" />
    </div>
    <div class="icons">
      <span class="onepoint01">미백</span>
      <span class="onepoint02">자외선차단</span>
      <span class="onepoint03">주름개선</span>
      <span class="onepoint04">공병수거</span>
      <span class="onepoint05">비건인증</span>
    </div>
  </div>
</template>
<script setup>
import { sample_goods } from '~/test/data/publish/dummyData'
</script>
<style lang="scss" scoped>
.onepoint {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 60px 0;
  border-top: 1px solid #EEE;

  .txt {
    p{
      margin-bottom: 20px;
      font-size: 18px;
      color: #000;
      display: block;
    }
  }

  .icons {
    flex: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-left: 100px;

    & > span {
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      &:before {
        content: '';
        width: 60px;
        height: 60px;
        margin-bottom: 10px;
        border-radius: 100%;
        background-image: url('~/assets/images/common/onepoint_split.png');
        background-color: #F5F5F5;
        background-repeat: no-repeat;
        flex: none;
        display: block;
      }

      &.onepoint01:before {
        background-position: 0;
      }

      &.onepoint02:before {
        background-position: -60px 0;
      }

      &.onepoint03:before {
        background-position: -120px 0;
      }

      &.onepoint04:before {
        background-position: -180px 0;
      }

      &.onepoint05:before {
        background-position: -240px 0;
      }
    }
  }
}
</style>
