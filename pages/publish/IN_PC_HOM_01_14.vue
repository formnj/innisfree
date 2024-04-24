<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <div class="prd_tit">
      <h2>라이브</h2>
    </div>
  </div>

  <div class="inner">
    <section class="live_cont">
      라이브 콘텐츠
    </section>

    <section>
      <h3>이니슾라이브 다시보기</h3>

      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_live" :key="idx">
            <LiveItem :item="item" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup>
import { sample_live } from '~/test/data/dummyData'

definePageMeta({
	layout: 'pc-category'
});

onMounted(() => {
});

const props = defineProps({
    layoutType: {
      type:String,
      default:'default'
    }
});
</script>
<style lang="scss" scoped>

.title_wrap {
  padding: 60px 20px 30px;
  justify-content:space-between;
  .prd_tit {
    h2 {
      margin-bottom:30px;
      font-size:38px;
      font-weight:300;
    }
    p {
      color:#000;
      font-size:24px;
      font-weight:600;
      line-height:31px;
    }
  }
  .share {
    width:32px;
    height:32px;
    background:url('/assets/images/common/icon_split.png') no-repeat -170px -170px;
    background-size:250px auto;
    align-self:flex-end;
  }
}

.prd_wrap {
  padding-top:60px;
  >div {
    max-width:780px;
    margin:0 auto;
    position:relative;
    img {
      vertical-align:top;
    }
    .video {
      position:absolute;
      top:0;
      left:0;
      z-index: 1;
    }
    .overlay {
      position:absolute;
      top:0;
      left:0;
      z-index: 2;
    }
  }
}

.swiper_wrap {
  width:1280px;
  padding:100px 0;
  margin:0 auto;
  position:relative;
  ::v-deep .swiper-container {
    padding-bottom:61px;
    .swiper-pagination {
      height:2px;
      bottom:0;
      top:unset;
      background:#DDDDDD;
      span {
        background:#000000;
      }
    }
    div[role="button"] {
      &:after {
        color:#000000;
        font-size:24px;
      }
    }
    .swiper-slide {
      width:240px;
    }
  }
  .navigation {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    top:50%;
    left:0;
    transform:translateY(-50%);
    button {
      color:#000;
      font-size:0;
      position:absolute;
      &:after {
        font-size:22px;
      }
      &.swiper-button-prev {
        left:-65px;
        &:after {
          content:'prev';
        }
      }
      &.swiper-button-next {
        right:-65px;
        &:after {
          content:'next';
        }
      }
    }
  }
}

.banner_wrap {
  ul {
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    li {
      width:calc(50% - 10px);
      > a {
        position:relative;
        .img {
          position:relative;
          img {
            vertical-align:top;
          }
          &:after {
            content:'';
            width:100%;
            height:100%;
            background:#000;
            opacity:0.25;
            position:absolute;
            top:0;
            left:0;
          }
        }
        span {
          color:#fff;
          font-size:18px;
          font-weight:600;
          line-height:24px;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
          white-space:pre-line;
          position:absolute;
          top:50%;
          left:30px;
          right:30px;
          transform:translateY(-50%);
        }
      }
    }
  }
}

#modal_share {
}
</style>
