<template>
  <div class="inner">
    <section>
      <div class="list_wrap">
        <ul class="cart_list type_default">
          <li v-for="(item, idx) in public_ann" :key="idx">
            <div class="row" @click="link_click()">
              <a :href="item.url" target="_blank">
                <p>{{ item.title }}</p>
                <span>
                  다운
                </span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>


  </div>


</template>
<script setup>
import { public_ann } from '~/test/data/publish/dummyData'

definePageMeta({
  layout:'mo-menu-search-cart'
});

const link_click = ()=>{
  let link_a = document.querySelectorAll('.cart_list li')
  link_a.forEach((a,i)=>{
    a.addEventListener('click',()=>{
      link_a.forEach((b)=>{
        b.classList.remove('active')
      })
      link_a[i].classList.add('active')
    })
  })
};

const emit = defineEmits(['title']);

onMounted(() => {
  emit('title', '전자공고')
});

</script>
<style lang="scss" scoped>
.inner {
  padding:1.2rem 2rem;
}

:deep(.list_wrap) {
  .cart_list  {
    border-top:2px solid #222 !important;
    > li + li {
      border-color:#dcdcdc !important;
    }
    li
    {
      .row {
        margin-top:0;
        margin-bottom:0;
        padding:1.5rem 1.8rem 1.5rem 1.2rem;
        font-size:1.3rem;
        a {
          display:flex;
          align-items:center;
          justify-content:space-between;
          p {
          color:#222;
          font-weight:500;
          }
          span {
            color:#777;
            font-weight:500;
            display:flex;
            align-items:center;
            &::before {
              content:'';
              width:1.2rem;
              height:1.2rem;
              margin-right:1rem;
              background-image:url('~/assets/mo_images/common/icon_split.png');
              background-repeat:no-repeat;
              background-size:25rem;
              background-position:-0.5rem -35.2rem;
              display:inline-block;
            }
          }
        }
      }
      &.active {
        .row {
          a {
            p {
            text-decoration:underline;
            }
            span {
              text-decoration:underline;
              &::before{
                background-position:-0.5rem -37.4rem
              }
            }
          }
        }
      }
    }
  }
}

</style>
