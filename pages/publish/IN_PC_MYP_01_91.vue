<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <h2>고객센터</h2>
  </div>

  <div class="inner">
    <Tabs tabType="type_03" :item="[{txt:'FAQ'},{txt:'공지사항'},{txt:'1:1상담'},{txt:'매장안내'},{txt:'창업안내'},{txt:'전자공고'}]"  :tabidx="0" />

    <div class="search_wrap">
      <div class="multi_form">
        <Inputs _type="text" _placeholder="궁금하신 내용을 입력해주세요" />
        <Button class="btn_mid confirm" txt="검색" />
      </div>
      <p>
        찾으시는 질문이 없나요? 이니스프리 상담원에게 문의해 주세요.
        <a href="#none">1:1상담하기</a>
      </p>
    </div>
  
    <!-- FAQ 슬라이드 탭 -->
    <Tabs class="faq" tabType="type_04" :item="faq_data" :tabidx="0" />
    <!-- //FAQ 슬라이드 탭 -->
  
    <!-- FAQ 컨텐츠 -->
    <div class="faq_wrap">
      <div class="sub_title_wrap">
        <h3>{{ faq_data[faq_idx].txt }}</h3>
        <Tabs v-if="faq_data[faq_idx].tabs !== undefined" tabType="type_02" :item="faq_data[faq_idx].tabs" />
      </div>
      <ul>
        <li v-for="(item,idx) in faq_data[faq_idx].list" :key="idx">
          <button type="button" @click="accordion_tab">
            <p>{{ item.cate }}</p>
            <span>{{ item.tit }}</span>
          </button>
          <div class="faq_cont">
            <p v-html="item.text"></p>
            <div v-if="item.img" class="img"><img :src="item.img"></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- //FAQ 컨텐츠 -->
  </div>
</template>
<script setup>
import { faq_data } from '/_nuxt/test/data/publish/dummyData'

definePageMeta({
  layout:'pc-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type:String,
    default:'default'
  }
});

onMounted(() => {
  const tabs = document.querySelectorAll('.faq ul li');

  tabs.forEach((el,idx) => {
    el.querySelector('button').addEventListener('click', (e) => {
      if (e.target.closest('li') === el) faq_idx.value = idx;
    });
  })
});

const faq_idx = ref(0);

const accordion_tab = (e) => {
  const tg_li = e.target.closest('li');
  const tg_cont = e.target.nextElementSibling;
  const list = document.querySelectorAll('.faq_wrap ul li');

  tg_cont.style.height = 'auto';
  const height = +(tg_cont.clientHeight*0.1).toFixed(2) + 6;
  tg_cont.style.height = '0';

  list.forEach(el => {
    const el_cont = el.querySelector('.faq_cont');
    
    if (tg_li === el && !tg_li.classList.contains('active')) {
      tg_li.classList.add('active');

      setTimeout(() => {
        tg_cont.style.height = height + 'rem'
        tg_cont.style.paddingTop = '3rem';
        tg_cont.style.paddingBottom = '3rem';
      }, 0)
    }
    else if (tg_li === el && tg_li.classList.contains('active')) {
      tg_li.classList.remove('active');

      tg_cont.style.height = height + 'rem';
      setTimeout(() => {
        tg_cont.style.height = '0rem'
        tg_cont.style.paddingTop = '0rem';
        tg_cont.style.paddingBottom = '0rem';
      }, 0)
    }
    else if (tg_li !== el && el.classList.contains('active')) {
      el.classList.remove('active');
      
      el_cont.style.height = height + 'px';
      setTimeout(() => {
        el_cont.style.height = '0rem'
        el_cont.style.paddingTop = '0rem';
        el_cont.style.paddingBottom = '0rem';
      }, 0)
    }
  });
};

</script>
<style lang="scss" scoped>
  .title_wrap {
    margin-bottom:30px;
  }

  .sub_title_wrap {
    padding-left:0;
    margin-bottom:30px;
    display:flex;
    gap:40px;

    h3 {
      color:#000;
      font-size:22px;
      font-weight:600;
      line-height:1.5;
    }

    :deep(.tab_wrap) {
      ul.type_02 {
        li {
          button {
            font-size:16px;
          }
        }
      }
    }
  }

  :deep(.tab_wrap) {
    ul {
      &.type_03 {
        li {
          button {
            border-color:#A7A7A7;
          }
        }
      }

      &.type_04 {
        margin:60px 0 50px;

        li {
          button {
            color:#666;
            font-size:16px;
            font-weight:600;
          }
        }
      }
    }
  }

  .search_wrap {
      margin-top:30px;
      padding:35px 0;
      border:1px solid #EEE;
      background:#FCFCFD;
      
      .multi_form {
        gap:5px;
        align-items:center;
        justify-content:center;

        :deep(.input_wrap) {
          flex:0 0 400px;
          .input {
            i, input {
              font-size:16px;
              line-height:20px;
            }
            i {
              top:50%;
            }
            input {
              height:50px;
              border-color:#DDD;
            }
          }
        }
  
        :deep(button) {
          width:100px;
  
          em {
            font-size:16px;
            font-weight:600;
            
          }
        }

      }

      >p {
        margin-top:20px;
        color:#999;
        font-size:14px;
        text-align:center;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:40px;

        a {
          color:#000;
          font-weight:600;
          display:flex;
          align-items:center;
          gap:5px;

          &:after {
            content:'';
            width:20px;
            height:20px;
            background:url('~/assets/images/common/icon_split.png') no-repeat -210px -60px;
            background-size:250px auto;
            display:inline-block;
            transform:rotate(90deg);
          }
        }
      }  
  }

  .slide_wrap {
    margin:60px 0 50px;
    border-bottom:1px solid #EEE;
  }

  .faq_wrap {
    ul {
      border-top:2px solid #000;

      li {
        border-bottom:1px solid #EEE;

        >button {
          width:100%;
          min-height:75px;
          padding:25px 30px;
          color:#222;
          font-size:1.4rem;
          line-height:1.8rem;
          display:flex;
          align-items:center;
          justify-content:space-between;

          >p {
            min-width:125px;
            color:#888;
            font-size:16px;
            text-align:left;
          }

          span {
            flex:1;
            padding-left:30px;
            color:#000;
            font-size:16px;
            font-weight:600;
            line-height:24px;
            text-align:left;
            position:relative;

            &:before {
              content:'Q.';
              font-size:18px;
              font-weight:500;
              line-height:24px;
              position:absolute;
              top:0;
              left:0;
            }
          }

          &:after {
            content:'';
            width:2.4rem;
            height:2.4rem;
            background:url('~/assets/mo_images/common/icon_split.png') no-repeat -0.5rem -21.4rem;
            background-size:25rem auto;
            display:block;
            transition:all 0.2s;
          }
        }

        .faq_cont {
          height:0;
          overflow:hidden;
          transition: height 0.5s, padding 0.5s;

          h4 {
            color:#333;
            font-size:1.3rem;
            font-weight:600;
            line-height:1.6rem;
            letter-spacing:-0.01em;
          }

          p {
            color:#666;
            font-size:16px;
            line-height:1.5;
            white-space:pre-line;

            :deep(em) {
              text-decoration:underline;
            }
          }
        }

        &.active {
          >button {
            &:after {
              transform:rotate(-180deg);
            }
          }
        }
      }
    }
  }
</style>