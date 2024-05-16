<template>
    <div class="event_item">
      <a :href="props.link" class="item">
        <span class="thumb">
          <em><img :src="item.img"></em>
        </span>
        <div class="cont">
            <em v-if="item.sticker" class="sticker">{{ item.cate }}</em>
            <p v-if="item.date" class="date">{{ item.date }}</p>
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
});
</script>

<style lang="scss" scoped>
.event_item {
  position:relative;
  .thumb {
      width:100%;
      padding-top:65.859564%;
      overflow:hidden;
      position:relative;
      display:block;
      em {
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        display:flex;
        align-items:center;
        img {
            width:100%;
            height:100%;
            display:block;
            object-fit:cover;
            transition:transform 0.3s;
        }
      }
  }
  .cont {
    height:94px;
    margin-top:20px;
    .date {
        color:#666;
        font-size:14px;
        letter-spacing: -0.01em;
        transition:all 0.2s;
    }
    strong {
        margin-top:10px;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        word-wrap: break-word;
        display:block;
        transition:all 0.2s;
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
