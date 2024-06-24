<template>
  <div class="nav_category">
    <!-- mo search -->
    <div class="search">
      <div>
        <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
        <Icons class="btn_search" txt="검색" />
      </div>
      <Icons class="cart" txt="50" />
    </div>
    <!-- //mo search -->

    <!-- mo banner -->
    <div class="banner">
      <NuxtLink to="#">한정 기간 특가할인 / 사은품 증정 제품 모아보기</NuxtLink>
    </div>
    <!-- //mo banner -->

    <nav>
      <div class="nav_wrap">
        <ul>
          <li v-for="(item, idx) in global_menu" :key="idx">
            <button type="button" @click="cate_tab">
              <span>{{ item.menu }}</span>
            </button>
          </li>
        </ul>
        <div class="nav_list">
          <section v-for="(item, idx) in global_menu" :key="idx">
            <NuxtLink :to="path + 'IN_MO_PRD_01_01'"
              >{{ item.menu }} 전체</NuxtLink
            >
            <ul class="list">
              <li v-for="(item_sub, idx_sub) in item.sub_menu" :key="idx_sub">
                <NuxtLink :to="path + 'IN_MO_PRD_01_01'">
                  <img :src="item_sub.img" />
                  {{ item_sub.menu }}
                </NuxtLink>
              </li>
            </ul>
            <ul v-if="item.goods" class="goods">
              <li v-for="item_sub in item.goods" :key="item_sub">
                <GoodsItem :item="item_sub" />
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="quick_wrap">
        <ul class="quick">
          <li>
            <NuxtLink :to="path + 'IN_MO_HOM_01_05'">신규가입혜택</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="path + 'IN_MO_MYP_01_04'">멤버십 혜택</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'#'">ABOUT</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="'#'">공병수거</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="path + 'IN_MO_MYP_01_85'">매장안내</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="path + 'IN_MO_MYP_01_85'">마이샵</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="list_wrap">
        <ul class="event_list">
          <li v-for="(item, idx) in nav_goods" :key="idx">
            <EventItem
              :item="item"
              :link="path + 'IN_MO_HOM_01_05'"
              type="type_column" />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { global_menu, nav_goods } from '~/test/data/publish/dummyData'

definePageMeta({
  layout: 'mo-nocontent'
})

const path = '/publish/'

const cate_tab = (e) => {
  const lis = [...e.target.closest('ul').children]
  const index = lis.indexOf(e.target.closest('li'))

  const nav_cont = document.querySelector('.nav_list')
  const target = document.querySelectorAll('.nav_list section')[index]

  nav_cont.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
}

onMounted(() => {
  document.querySelector('.nav_wrap > ul li').classList.add('active')
  document.querySelector('.nav_wrap > div').addEventListener('scroll', (e) => {
    ;[...e.target.children].forEach((item, index) => {
      const nav_list = document.querySelectorAll('.nav_wrap > ul li')

      if (
        e.target.scrollTop >= item.offsetTop &&
        e.target.scrollTop <= item.offsetTop + (item.offsetHeight - 1)
      ) {
        nav_list[index].classList.add('active')
      } else {
        nav_list[index].classList.remove('active')
      }
    })
  })
})
</script>

<style lang="scss" scoped>
.nav_category {
  .search {
    padding: 1rem 1.6rem 1rem 2.1rem;
    border: 0;
    border-bottom: 0.1rem solid #ddd;
    border-radius: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;

    & > div {
      border: 0.1rem solid #000;
      border-radius: 0.5rem;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex: 1;
    }
    :deep(.input) {
      i,
      input {
        font-size: 1.3rem;
      }
      input {
        padding-right: 0.5rem;
        border: 0;
      }
    }
    .btn_search {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 1rem;
      background-color: transparent;
      background-position: 0 -4rem;
    }
    .back {
      margin-right: 10px;
    }
    .cart {
      margin-left: 10px;
    }
  }
  .banner {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    background-color: #000;
    position: sticky;
    top: 6.2rem;
    z-index: 2;

    a {
      padding: 1rem 2.1rem;
      display: flex;
      justify-content: space-between;
      &:after {
        width: 1.6rem;
        height: 1.6rem;
        background-image: url('~/assets/mo_images/common/icon_split.png');
        background-position: -8rem 0;
        background-repeat: no-repeat;
        background-size: 25rem auto;
        content: '';
        display: block;
      }
    }
  }

  nav {
    overflow: hidden;
    overflow-y: scroll;
    flex: 1;
    .nav_wrap {
      height: 100%;
      max-height: 385px;
      display: flex;
      > ul {
        width: 37.333333%;
        background-color: #f5f5f5;

        li {
          button {
            width: 100%;
            padding: 16px 10px 16px 21px;
            color: #999;
            font-size: 14px;
            font-weight: 600;
            text-align: left;
            display: block;
            position: relative;
            span {
              position: relative;
              z-index: 1;
            }
            &:before {
              content: '';
              width: 0;
              height: 100%;
              background: #fff;
              position: absolute;
              top: 0;
              left: 0;
              transition: all 0.2s;
            }
            > * {
              pointer-events: none;
            }
          }

          &:last-child {
            button {
              color: #333;
            }
          }

          &.active {
            button {
              color: #000;
              &:before {
                width: 100%;
              }
            }
          }
        }
      }

      > div {
        overflow: auto;
        flex: 1;
        position: relative;
        a {
          color: #000;
          font-size: 14px;
          font-weight: 400;
          padding: 16px 21px;
          display: block;
        }
        section {
          overflow: hidden;
          > a {
            font-weight: 600;
            display: flex;
            &:after {
              width: 16px;
              height: 16px;
              margin-left: 10px;
              background-image: url('~/assets/mo_images/common/icon_split.png');
              background-position: -100px 0;
              background-repeat: no-repeat;
              background-size: 250px auto;
              content: '';
              display: inline-block;
            }
          }
          & + section:before {
            margin-left: 20px;
            border-top: 1px solid #eee;
            content: '';
            display: block;
          }
          &:last-child {
            padding-top: 10px;
            margin-top: 10px;
            &:before {
              border-top: 0;
            }
            > a {
              display: none;
            }
            .list {
              margin: 0 9px 50px 21px;
              display: flex;
              flex-wrap: wrap;
              gap: 5px;
              li {
                width: 48.7%;
                a {
                  padding: 0;
                  font-size: 12px;
                  text-align: center;
                  img {
                    width: 100%;
                    padding-bottom: 5px;
                  }
                }
              }
            }
          }

          .goods {
            margin: 20px 9px 70px 21px;
            display: flex;
            gap: 5px;
            li {
              width: 50%;
              :deep(.goods_item) {
                width: 10rem;
                padding: 0;
                a {
                  padding: 0;
                }
                .btnIconBox {
                  display: none;
                }
                .cont {
                  margin-top: 10px;
                  font-size: 12px;
                  .name {
                    strong {
                      color: #000;
                      font-size: 12px;
                      overflow: hidden;
                      .cate {
                        margin-right: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .quick_wrap {
      border-top: 5px solid #eee;
      border-bottom: 5px solid #f5f5f5;
      overflow: hidden;
      .quick {
        background-color: #f5f5f5;
        overflow: auto;
        display: flex;
        gap: 1px;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        li {
          background-color: #fff;
          a {
            padding: 16px 24px;
            font-size: 14px;
            font-weight: 400;
            white-space: nowrap;
            display: block;
          }
        }
      }
    }

    .list_wrap {
      padding: 4rem 2.1rem 6rem;
      .event_list {
        gap: 1.6rem;
        li {
          width: 100%;
          padding: 0;
          padding-bottom: 16px;
          border-bottom: 1px solid #eeeeee;

          &:last-child {
            border-bottom: 0;
          }

          :deep(.event_item) {
            .item {
              .thumb {
                width: 18rem;
                height: 9.6rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>