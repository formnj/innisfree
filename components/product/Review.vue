<template>
  <div class="review">
    <p v-if="item.option.is" class="option_name">{{ item.option.name }}</p>
    <ul class="review_photo_list">
      <li v-for="(img, idx) in item.imgs" :key="idx" :class="idx == 5 ? 'last' : '' ">
        <a href="#none"><img :src="img" :class="item.user" alt=""></a>
      </li>
    </ul>
    <p class="txt">
      <span v-if="item.usedAmonth" class="mark_month">한달사용</span>{{ item.txt }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  item: {},
})
</script>
<style lang="scss" scoped>
.review {
  .option_name {
    margin: 10px 0 30px;
    font-weight: 600;
    color: #333;
  }

  .review_photo_list {
    display: flex;
    gap: 3px;
    margin-bottom: 30px;

    li {
      width: 120px;
      height: 120px;
      position: relative;

      a {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
      }

      &.last {
        a {
          &:before {
            content:'';
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
          }

          &:after {
            content: '';
            width: 24px;
            height: 24px;
            margin: 0 auto 10px;
            background: url("~/assets/images/common/icon_split.png") -460px -70px no-repeat;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
        }
      }
    }
  }

  .txt {
    line-height: 24px;
    color: #333333;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    .mark_month {
      height: 22px;
      margin-right: 10px;
      padding: 0 5px;
      font-size: 12px;
      color: #FFFFFF;
      background-color: #00BC70;
      display: inline-block;
    }
  }
}
</style>
