<template>
  <div class="title_wrap">
    <div class="prd_tit">
      <h2>봄맞이 핑크템으로<br>생기를 더하세요!</h2>
    </div>
    <Button class="btn_all btn_outline" txt="전체보기" @click="modal.open('modal_all', 'fullMo')" />
  </div>

  <div class="inner">
    <div class="prd_wrap">
      <div><img src="/assets/images/sam/pinkdoc1.jpg"></div>
      <div>
        <img src="/assets/images/sam/pinkdoc2.jpg">
        <div class="video"><img src="/assets/images/sam/colored.gif"></div>
        <div class="overlay"><img src="/assets/images/sam/lipstick.png"></div>
      </div>
    </div>

    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item,idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>

    <div class="banner_wrap">
      <ul>
        <li v-for="(item,idx) in banner_list" :key="idx">
          <a href="#none">
            <div class="img">
              <img :src="item.img">
            </div>
            <span>{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <!-- 전체보기 모달 -->
  <div id="modal_all" class="modal_wrap">
    <div class="modal_container">
        <div class="modal_header">
            <h2>전체보기</h2>
            <button class="btn_close" @click="modal.close(this);">닫기</button>
        </div>
        <div class="modal_content">
          <div class="content">
            <ShowcaseModalItem v-for="(item, idx) in banner_list" :key="idx" :item="item" :link="item.link"/>
          </div>
        </div>
    </div>
    <div class="overlay" @click="modal.close(this);"></div>
  </div>
  <!-- 전체보기 모달 -->
</template>
<script setup>
import { sample_goods } from '~/test/data/dummyData'
import { modal } from '~/assets/js/common-ui'

definePageMeta({
	layout: 'mo-category'
});

onMounted(() => {});

const banner_list = [
  {img: '/_nuxt/assets/images/sam/banner01.jpg', title: '4월은 지구의 달\n공병수거하며 지구를 지켜요!'},
  {img: '/_nuxt/assets/images/sam/banner02.jpg', title: '꾸준히 사랑받는 한란 라인\n활용TIP!'},
  {img: '/_nuxt/assets/images/sam/banner03.jpg', title: '지구 환경도 챙기고\n뷰티포인트도 챙기자!'},
  {img: '/_nuxt/assets/images/sam/banner04.jpg', title: '추운 겨울 내 파우치 속 필수템\n취향따라 골라쓰는 퍼퓸드 핸드크림!'},
  {img: '/_nuxt/assets/images/sam/banner05.jpg', title: '겨울철 가려움, 각질 고민\n완벽 케어 솔루션!'},
  {img: '/_nuxt/assets/images/sam/banner06.jpg', title: '새해맞이!\n안티에이징 홈 케어 제품 추천!'},
  {img: '/_nuxt/assets/images/sam/banner07.jpg', title: '돌아온 보습 레전드\n올리브 라인'},
  {img: '/_nuxt/assets/images/sam/banner08.jpg', title: '이니스프리 직원 추천템\n#이니찐템'},
  {img: '/_nuxt/assets/images/sam/banner09.jpg', title: '반려견들을 위한 산책 뷰티템\n이니스프리 그린펫클럽'},
  {img: '/_nuxt/assets/images/sam/banner10.jpg', title: '이니스프리 FOAM 미쳤다!\n이니스프리 클렌징폼'},
  {img: '/_nuxt/assets/images/sam/banner11.jpg', title: '눈여겨봐야 할\n신상 아이템! UTILITY BAG'},
];

</script>
<style lang="scss" scoped>
.title_wrap {
  padding: 3rem 0 2rem;
  justify-content:space-between;
  .prd_tit {
    h2 {
      color:#000;
      font-size:1.6rem;
      font-weight:600;
      line-height:2rem;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
  }
  :deep(.btn_all) {
    height:fit-content;
    padding:0.6rem 0.8rem;
    display:flex;
    align-items:center;
    gap:0 0.3rem;
    em {
      padding:0;
      font-size:1rem;
      font-weight:600;
      line-height:1.2rem;
    }
    &:after {
      content:'';
      display:inline-block;
      width:1.2rem;
      height:1.2rem;
      background:url('/_nuxt/assets/mo_images/common/icon_split.png') no-repeat -23rem -10rem;
      background-size:25rem auto;
    }
  }
}

.prd_wrap {
  margin:0 -20px;
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

.list_wrap {
  padding:6rem 0;
  .goods_list {
    margin:0;
    gap:2rem 0.3rem;
    justify-content:space-between;
    > li {
      width:16.5rem;
      padding:0;
    }
  }
}

.banner_wrap {
  margin:0 -20px;
  ul {
    display:flex;
    flex-wrap:wrap;
    gap:0.1rem;
    li {
      width:100%;
      height:15rem;
      > a {
        width:100%;
        height:100%;
        display:inline-block;
        position:relative;
        * {
          width:100%;
          height:100%;
        }
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
          width:auto;
          height:auto;
          color:#fff;
          font-size:1.8rem;
          font-weight:600;
          line-height:2.4rem;
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
          left:2.1rem;
          bottom:50%;
          transform:translateY(50%);
        }
      }
    }
  }
}

.modal_wrap {
  .modal_container {
    .modal_content {
      :deep(.showcase_item) {
        height:21rem;
        img {
          width:100%;
          height:100%;
          object-fit:cover;
        }
      }
    }
  }
}
</style>
