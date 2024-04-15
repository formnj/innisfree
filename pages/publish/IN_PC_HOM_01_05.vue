<template>
  <div>pc이벤트</div>
</template>

<script setup>
definePageMeta({
	layout: 'pc-category'
});

const props = defineProps({ //default값이 'default'가 아니면 lnb 노출 없음
    layoutType: {
      type:String,
      default:''
    }
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


</style>
