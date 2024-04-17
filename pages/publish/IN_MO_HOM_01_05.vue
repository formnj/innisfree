<template>
  <div>모바일이벤트</div>
</template>

<script setup>
definePageMeta({
layout: 'mo-category'
});

const sample_goods = [
  {
      img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
      overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
      cate:'BEST',
      name:'히알루론 수분 선크림 SPF 50+ PA++++',
      price:'11,000', sale:'~50%', cost:'26,000',
      status:'sold_out',
      sticker:[
          {txt:'type01', type:'type01'},
          {txt:'type02', type:'type02'},
          {txt:'type03', type:'type03'},
          {txt:'type04', type:'type04'}
      ],
      hash:['#스킨팩','#화장솜','#순면화장솜']
  }, {
      img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
      overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
      cate:'NEW',
      name:'그린티 씨드 히알루론산 세렘 80ml',
      price:'44,800', sale:'~20%', cost:'56,000',
      status:'coming_soon',
      sticker:[
          {txt:'1+1', type:'type02'},
          {txt:'뷰티포인트전용', type:'type01'},
          {txt:'첫구매전용', type:'type01'}
      ]
  }, {
      img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
      overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
      cate:'NEW',
      name:'그린티 씨드 히알루론산 세렘 80ml',
      price:'44,800', sale:'~20%', cost:'56,000',
      status:'coming_soon',
      sticker:[
          {txt:'1+1', type:'type02'},
          {txt:'뷰티포인트전용', type:'type01'},
          {txt:'첫구매전용', type:'type01'}
      ]
  }, {
      img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
      overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
      cate:'BEST',
      name:'블랙티 유스 인핸싱 앰플 50ml',
      price:'11,000', sale:'~50%', cost:'26,000',
      status:'sold_out',
      hash:['#스킨팩','#화장솜','#순면화장솜']
  }, {
      img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
      overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
      cate:'BEST',
      name:'블랙티 유스 인핸싱 앰플 50ml',
      price:'11,000', sale:'~50%', cost:'26,000',
      status:'sold_out',
      hash:['#스킨팩','#화장솜','#순면화장솜']
  },
  {
      img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
      overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
      cate:'BEST',
      name:'블랙티 유스 인핸싱 앰플 50ml',
      price:'11,000', sale:'~50%', cost:'26,000',
      hash:['#스킨팩','#화장솜','#순면화장솜']
  },
  {
      img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
  },
  {
      img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
  },
  {
      img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
  },
  {
      img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
  },{
      img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
  },
  {
      img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
  },
]
/* //component sample data */





</script>

<style lang="scss">

<<<<<<< HEAD
=======
        }
    }
}



ul.event_list {
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  li {
      width:100%;
      height:100%;
      position:relative;
      a {
          height:100%;
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          div {
                width:4rem;
                max-width:100%;
                flex:1 auto;

              img {
                  width:100%;
                  height:100%;
              }
              em {
                  padding:2px 5px;
                  font-size:14px;
                  font-weight:400;
                  position:absolute;
                  top:0;
                  left:0;
                  display:block;
                  &.type04 {
                      color:#fff;
                      background-color:#000;
                  }
              }
          }
          dl {
              height:100%;
              padding:0 20px;
              display:flex;
              flex:1;
              flex-direction:column;
              justify-content:space-between;
              > *+* {
                  margin-top:5px;;
              }

              dt {
                  margin-top:20px;
                  color:#666;
                  font-size:1.2rem;
                  letter-spacing: -0.01em;
              }
              dd {
                  color: #000000;
                  font-size:1.4rem;
                  font-weight: 600;
                  word-wrap: break-word;
              }
          }
      }
  }
}

@import "~/assets/scss/_mo_mixin";
@include mobile {

}
>>>>>>> 4de6a999493458a862ded366ad4f1ce8028aa830

</style>
