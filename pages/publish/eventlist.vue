<template>
  <div class="eventlist">
    <div class="inner">
      <ul>
        <li v-for="(item, idx) in sample_list" :key="idx">
          <EventItem :item="item" :link="item.link"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout:'publish'
});
const props = defineProps({
  device: {
    type: String
  }
});

const sample_list = [
  {
    img: ("https://images.innisfree.co.kr/upload/event/3487_0.jpg?T202404030937"),
    date: '24.3.25(월) ~ 24.4.30(화)',
    name: '남성에게도 딱! 맞는 그린티 <br>씨드 세럼 대용량 출시',
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3502_0.jpg?T202404021757"),
    date: '24.4.1(월) ~ 24.4.3(수)',
    name: '신한카드 5천원 캐시백 <br>2만원 이상 결제 시!',
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3487_0.jpg?T202404030937"),
    date: '24.3.25(월) ~ 24.4.30(화)',
    name: '남성에게도 딱! 맞는 그린티 <br>씨드 세럼 대용량 출시',
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3502_0.jpg?T202404021757"),
    date: '24.4.1(월) ~ 24.4.3(수)',
    name: '신한카드 5천원 캐시백 <br>2만원 이상 결제 시!',
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3487_0.jpg?T202404030937"),
    date: '24.3.25(월) ~ 24.4.30(화)',
    name: '남성에게도 딱! 맞는 그린티 <br>씨드 세럼 대용량 출시',
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3502_0.jpg?T202404021757"),
    date: '24.4.1(월) ~ 24.4.3(수)',
    name: '신한카드 5천원 캐시백 <br>2만원 이상 결제 시!',
  },
]

</script>

<style lang="scss" scoped>
.eventlist{
  width: 1280px;
  margin: 0 auto;

  * {
    box-sizing: border-box;
  }
  ul {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
