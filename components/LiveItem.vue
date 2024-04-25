<template>
    <div class="live_item">
      <div class="img_wrap">
        <a :href="props.link" class="thumb">
          <em><img :src="item.img" /></em>
          <!-- date, view -->
          <div class="notice">
            <span>{{ item.date }}</span>
            <em>{{ item.view }}</em>
          </div>
          <!-- //date, view -->
        </a>
        <EventItem :item="item.relation" :link="item.link" />
      </div>
      <div class="cont">
        <a class="name" :href="props.link" v-html="item.title"></a>
        <Button @click="$router.push(`${props.wining}`)" txt="당첨자 발표" />
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {},
    link: {
        type: String,
        default: '#none'
    },
    wining: {
      type: String,
      default: '#none'
    }
})
</script>

<style lang="scss">
.live_item {
  .img_wrap {
    position:relative;
    &:after {
      background:linear-gradient(0deg, rgba(0, 0, 0, 0) 44.55%, rgba(0, 0, 0, 0.3) 100%);
      content:'';
      position:absolute;
      top:0;
      right:0;
      bottom:0;
      left:0;
    }
    .thumb {
      height:320px;
      display:block;
    }
    .notice {
      padding:13px 15px;
      color:#fff;
      font-size:14px;
      position:absolute;
      top:0;
      right:0;
      left:0;
      z-index:1;
      display:flex;
      justify-content:space-between;
    }
    .event_item {
      background-color:rgba(0,0,0,0.5);
      position:absolute;
      right:15px;
      bottom:15px;
      left:15px;
      z-index:1;
      .item {
        display:flex;
        .thumb {
          width:36px;
          height:48px;
          padding-top:0;
        }
        .cont {
          height:auto;
          margin-top:0;
          padding:6px 10px 6px 25px;
          flex:1;
          display:flex;
          align-items:center;
          strong {
            margin-top:0;
            color:#fff;
            font-size:12px;
            font-weight:300;
            line-height:1.5;
            word-wrap:break-word;
            text-overflow:ellipsis;
            overflow:hidden;
            display:-webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
      &:hover {
        img {
          transform:scale(1);
        }
      }
    }
  }
  .cont {
    padding-bottom:36px;
    position:relative;
    .name {
      padding-top:20px;
      font-size:14px;
      line-height:1.43;
      display:block;
    }
    button {
      height:auto;
      background-color:transparent;
      border:1px solid #000;
      border-radius:1px;
      position:absolute;
      bottom:0;
      left:0;
      em {
        padding:6px 8px;
        color:#000;
        font-size:10px;
        font-weight:600;
      }
    }
  }
}
</style>
