<template>
    <div class="event_item">
      <a :href="props.link">
        <span class="thumb">
            <img :src="item.img">
        </span>
        <div class="cont">
            <em class="sticker">{{ item.cate }}</em>
            <p class="date">{{ item.data }}</p>
            <strong v-html="item.title"></strong>
        </div>
      </a>
  </div>
</template>

<script setup>
const props = defineProps({
    item: {},
    link: {
        type: String,
        default: '#none'
    }
})
</script>

<style lang="scss" scoped>
.event_item {
  .thumb {
      width:100%;
      overflow:hidden;
      display:block;
      img {
          width:100%;
          vertical-align:top;
          transition:transform 0.3s;
      }
  }
  .cont {
      .date {
          margin:20px 0 10px;
          color:#666;
          font-size:14px;
          letter-spacing: -0.01em;
          transition:all 0.2s;
      }
      strong {
          color: #000;
          font-size: 16px;
          font-weight: 600;
          word-wrap: break-word;
          transition:all 0.2s;
          &:last-of-type {
              margin-bottom:0px !important;
          }
      }
      .sticker {
        padding:2px 5px;
        font-size:14px;
        font-weight:400;
        color:#fff;
        background-color:#000;
        position:absolute;
        top:0;
        left:0;
        display:block;
      }
  }
  &:hover {
    img {
        transform:scale(1.1);
    }
    .cont {
      strong, .date {
        color:#00BC70;
      }
    }
  }
}
</style>
