<template>
  <div class="event_item" :class="type">
    <NuxtLink :to="props.link" class="item">
      <span class="thumb">
        <em><img :src="item.img" /></em>
        <button v-if="type === 'type_down'" class="down">
          <span>쿠폰 다운로드</span>
        </button>
      </span>
      <div class="cont">
        <em v-if="item.sticker" class="sticker">{{ item.cate }}</em>
        <p v-if="item.date" class="date">{{ item.date }}</p>
        <strong v-html="item.title"></strong>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {},
  link: {
    type: String,
    default: '#none'
  },
  type: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.event_item {
  position: relative;

  .thumb {
    width: 100%;
    padding-top: 65.859564%;
    overflow: hidden;
    position: relative;
    display: block;
    em {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 0.3s;
      }
    }
  }
  .cont {
    height: 94px;
    margin-top: 20px;
    .date {
      color: #666;
      font-size: 14px;
      letter-spacing: -0.01em;
      transition: all 0.2s;
    }
    strong {
      margin-top: 10px;
      color: #000;
      font-size: 16px;
      font-weight: 600;
      word-wrap: break-word;
      display: block;
      transition: all 0.2s;
    }
    .sticker {
      padding: 2px 5px;
      font-size: 14px;
      font-weight: 400;
      color: #fff;
      background-color: #000;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
    }
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    .cont {
      strong,
      .date {
        color: #00bc70;
      }
    }
  }

  &.type_02 {
    .thumb {
      padding-top: 53.25%;
    }

    .cont {
      height: auto;
      margin-top: 0;
      padding: 20px;
      background-color: #fff;
      display: flex;
      flex-direction: column-reverse;

      strong {
        min-height: 56px;
        margin-top: 0;
        margin-bottom: 8px;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }

  &.type_column {
    .item {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.6rem;
      .thumb {
        width: 16rem;
        height: 10.6rem;
        padding-top: 0;
      }
      .cont {
        height: auto;
        margin-top: 0;
        display: flex;
        flex: 1;
        flex-direction: column-reverse;
        strong {
          margin-top: 0;
          font-size: 1.4rem;
        }
        .date {
          margin-top: 0.8rem;
          font-size: 1.2rem;
          font-weight: 300;
        }
        .sticker {
          padding: 0.2rem 0.5rem;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.4rem;
        }
      }
    }
  }

  &.type_down {
    .item {
      .thumb {
        .down {
          width: calc(100% - 40px);
          padding: 18px 0;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(0, 0, 0, 0.4);
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);

          span {
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;

            &:after {
              content: '';
              width: 24px;
              height: 24px;
              background: url('~/assets/images/common/icon_split.png') no-repeat -120px -330px;
              background-size: 250px auto;
              display: inline-block;
            }
          }
        }
      }

      .cont {
        .sticker {
          padding: 8px 12px;
          font-size: 24px;
          font-weight: 600;
          left: unset;
          right: 0;
        }
      }
    }
  }
}
</style>
