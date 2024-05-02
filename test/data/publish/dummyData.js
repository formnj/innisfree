/**
 * 컴포넌트 테스트용 더미 데이터
 * 테스트 용도이므로 TS 불필요
 * jjy11@amorepacific.com
 */

export const mo_benefit_goods = [
  {
      img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
      overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
      cate:'BEST',
      name:'히알루론 수분 선크림 SPF 50+ PA++++',
      price:'11,000', sale:'~50%', cost:'26,000',
      status:'sold_out',
  },
  {
    img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
    cate:'BEST',
    name:'블랙티 유스 인핸싱 앰플 50ml',
    price:'11,000', sale:'~50%', cost:'26,000',
    hash:['#스킨팩','#화장솜','#순면화장솜'],
    giveaway: {
        modal_id:'giveaway_01',
        modal_type:'bottom',
        img_01:("/_nuxt/assets/images/sam/sam_pre_01.png"),
        img_02:("/_nuxt/assets/images/sam/sam_pre_02.png"),
        img_03:("/_nuxt/assets/images/sam/am_pre_03.png"),
    }
  },
  {
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
  },
  {
      img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
      overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
      cate:'BEST',
      name:'블랙티 유스 인핸싱 앰플 50ml',
      price:'11,000', sale:'~50%', cost:'26,000',
      status:'sold_out',
      giveaway: {
          modal_id:'giveaway_01',
          modal_type:'bottom',
          img_01:("/_nuxt/assets/images/sam/sam_pre_01.png"),
          img_02:("/_nuxt/assets/images/sam/sam_pre_02.png"),
          img_03:("/_nuxt/assets/images/sam/am_pre_03.png"),
      }
  },
]

export const sample_data = [
  {
      sub_title :'립 2개 이상 50%',
      desc:'립 카테고리 전 제품 1개 구매시 30% 2개 이상 구매시 50% 반값!!',
      notice:{
          modal_id:'sample_01',
          title:'“납작아이브로우/컨실러” 기획전 제품 구매 시 유의사항',
          exp:'동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능',
          period:'기간 : 4/14(일) - 5/1(수) 23:59:00까지',
          exception:''
      },
  },

  {
      sub_title :'마스크팩 10개 구매시 50%',
      desc:'에너지마스크팩 10개 담으면 50% 반값!!',
      date:{
          day:15,
          hour:10,
          min:59,
          sec:60
      },
      notice:{
          modal_id:'sample_01',
          title:'“납작아이브로우/컨실러” 기획전 제품 구매 시 유의사항',
          exp:'동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능',
          period:'기간 : 4/14(일) - 5/1(수) 23:59:00까지',
          exception:''
      },
  },
  {
      sub_title :'클렌징폼 3개 이상 구매시 30% 할인',
      desc:'클렌징폼 저렴하게 구할 수 있는 절호의 찬스!',
      date:{
          day:14,
          hour:15,
          min:59,
          sec:60
      },
      notice:{
          modal_id:'sample_02',
          title:'“클렌징오일/워터/크림” 기획전 제품 구매 시 유의사항',
          exp:'동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능',
          period:'기간 : 4/14(일) - 5/1(수) 23:59:00까지',
          exception:'(행사제외 - 블루베리 클렌징 워터)'
      },
  },
]


export const sale_menu = [
  "립 ~50%","마스크팩 ~50%","클렌징 ~30%","립 ~50%","마스크팩 ~50%","클렌징 ~30%","마스크팩 ~50%","클렌징 ~30%","립 ~50%","마스크팩 ~50%","클렌징 ~30%",
]

export const select_list = [
  {
    img:('/_nuxt/assets/images/sam/MYP_01_04_1.jpg'),
    name:'비타C 그린티 엔자임 잡티 토닝 패드 x 2개 패키지',
    price:{
      regular:'56,000원',
      discount:'42,000원'
    }
  },
  {
    img:('/_nuxt/assets/images/sam/MYP_01_04_1.jpg'),
    name:'그린티 씨드 세럼 대용랑+리필',
    price:{
      regular:'78,000원',
      discount:'52,000원'
    }
  },
]

export const adress_list = [
  {
    name:'김이나',
    on:'기본배송지',
    tel:'111-1111-1111',
    adress:'(12345)서울특별시 강서구 양천로 551-17'
  },
  {
    name:'김하나',
    on:'',
    tel:'111-1111-1111',
    adress:'(12345)서울특별시 강서구 양천로 551-17'
  }
]


export const Delivery_data = [
  {
      modal_id:'adress_add_modal',
      check:'yes'
  },
  {
      modal_id:'adress_modify_modal',
  }
]


export const mainTopBannerData = {
  bannerText: '하나Pay 3만원 결제 시, 하나머니 5천원 적립',
  url: 'https://www.innisfree.com/kr/ko'
}

export const searchRankingData = [
  {
    rank: 1,
    url: 'https://www.innisfree.com/kr/ko',
    keyword: 'Keyword Up',
    class: 'up'
  },
  {
    rank: 2,
    url: 'https://www.innisfree.com/kr/ko',
    keyword: 'Keyword default',
    class: ''
  },
  {
    rank: 3,
    url: 'https://www.innisfree.com/kr/ko',
    keyword: 'Keyword down',
    class: 'down'
  },
  {
    rank: 4,
    url: 'https://www.innisfree.com/kr/ko',
    keyword: 'Keyword new',
    class: 'new'
  }
]

export const navigationBarData = [
  {
    menuText: '이벤트',
    url: 'https://www.innisfree.com/kr/ko',
    isPoint: false
  },
  {
    menuText: '특가',
    url: 'https://www.innisfree.com/kr/ko',
    isPoint: true
  },
  {
    menuText: '베스트',
    url: 'https://www.innisfree.com/kr/ko',
    isPoint: false
  },
  {
    menuText: '쿠폰존',
    url: 'https://www.innisfree.com/kr/ko',
    isPoint: false
  },
  {
    menuText: '쇼케이스',
    url: 'https://www.innisfree.com/kr/ko',
    isPoint: false
  },
  {
    menuText: '라이브',
    url: 'https://www.innisfree.com/kr/ko',
    isPoint: false
  },
  {
    menuText: 'FOR ME',
    url: 'https://www.innisfree.com/kr/ko',
    isPoint: false
  },
  {
    menuText: '임직원샵',
    url: 'https://www.innisfree.com/kr/ko',
    isPoint: false
  }
]

export const searchData = {
  placeholder: '새로워진 이니스프리 SHOWCASE'
}

export const latestSearchWordData = [
  { word: '그린티 스킨', url: 'https://www.innisfree.com/kr/ko' },
  { word: '그린티 세럼', url: 'https://www.innisfree.com/kr/ko' },
  { word: '스킨', url: 'https://www.innisfree.com/kr/ko' },
  { word: '세럼', url: 'https://www.innisfree.com/kr/ko' },
  { word: '그린티 히알루론산', url: 'https://www.innisfree.com/kr/ko' },
  { word: '콜라겐', url: 'https://www.innisfree.com/kr/ko' },
  { word: '팩트', url: 'https://www.innisfree.com/kr/ko' },
  { word: '노세범', url: 'https://www.innisfree.com/kr/ko' },
  { word: '파우더', url: 'https://www.innisfree.com/kr/ko' },
  { word: '팩', url: 'https://www.innisfree.com/kr/ko' }
]

export const categoryForSearchLayerData = [
  { imageUrl: '/images/sam/h_cate_01.png', text: '베스트', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: '/images/sam/h_cate_02.png', text: 'Sale 52%', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: '/images/sam/h_cate_03.png', text: '스킨케어', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: '/images/sam/h_cate_04.png', text: '선케어', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: '/images/sam/h_cate_05.png', text: '세럼', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: '/images/sam/h_cate_06.png', text: '팩/마스크', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: '/images/sam/h_cate_07.png', text: '헤어/바디', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: '/images/sam/h_cate_08.png', text: '펫', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: '/images/sam/h_cate_09.png', text: '기획세트', url: 'https://www.innisfree.com/kr/ko' },
  { imageUrl: '/images/sam/h_cate_10.png', text: '미용소품', url: 'https://www.innisfree.com/kr/ko' }
]

export const breadcrumbData = [
  {
    menuText: '카테고리',
    subMenuList: [
      { menuText: '특가', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '이벤트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '베스트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '라이브', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: 'FOR ME', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: 'ABOUT', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '고객센터', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '마이페이지', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '공병수거 캠페인', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '멤버십', url: 'https://www.innisfree.com/kr/ko' }
    ]
  },
  {
    menuText: '유형별',
    subMenuList: [
      { menuText: '피부고민', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '메뉴1', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '메뉴2', url: 'https://www.innisfree.com/kr/ko' }
    ]
  },
  {
    menuText: '스킨케어',
    subMenuList: [
      { menuText: '메이크업', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '남성', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '헤어/바디/펫', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '기획 세트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '미용소품', url: 'https://www.innisfree.com/kr/ko' }
    ]
  },
  {
    menuText: '전체',
    subMenuList: [
      { menuText: '에센스/세럼/앰플', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '로션/크림', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '스킨/토너/미스트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '립/아이케어', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '선케어', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '오일/마사지', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '클렌징', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '팩/마스크', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '기획 세트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '기타', url: 'https://www.innisfree.com/kr/ko' }
    ]
  }
]

export const sample_event = [
 {
      img:("/_nuxt/assets/images/sam/event_list_01.jpg"),
      cate:'제휴혜택',
      title:'트러블?수분?탄력?<br/> 고민따라 10% 추가할인 쿠폰위크!!',
      data:'24.4.14(일) ~ 24.4.30(화)',
  },  {
      img:("/_nuxt/assets/images/sam/event_list_02.jpg"),
      cate:'쇼핑혜택',
      title:'남성에게도 딱! 맞는<br/> 그린티 씨드 세럼 대용량 출시',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_03.jpg"),
      cate:'체험/리뷰',
      title:'잡티와 토닝을 한번에!<br/> NEW 패드 즉시 증정!',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_04.jpg"),
      cate:'제휴혜택',
      title:'자신감 있는 레티놀 앰플<br/> 매일 3,656개 판매! ',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_05.jpg"),
      cate:'체험/리뷰',
      title:'이니스프리 공식몰이 처음이라면?',
      data:'24.4.14(일) ~ 24.5.1(수)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_06.jpg"),
      cate:'쇼핑혜택',
      title:'비타C 1+1 럭키박스<br/> 행운의 주인공은?',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_01.jpg"),
      cate:'제휴혜택',
      title:'트러블?수분?탄력?<br/> 고민따라 10% 추가할인 쿠폰위크!!',
      data:'24.4.14(일) ~ 24.4.30(화)',
  },  {
      img:("/_nuxt/assets/images/sam/event_list_02.jpg"),
      cate:'쇼핑혜택',
      title:'남성에게도 딱! 맞는<br/> 그린티 씨드 세럼 대용량 출시',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_03.jpg"),
      cate:'체험/리뷰',
      title:'잡티와 토닝을 한번에!<br/> NEW 패드 즉시 증정!',
      data:'24.4.1(월) ~ 24.4.30(화)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_04.jpg"),
      cate:'제휴혜택',
      title:'자신감 있는 레티놀 앰플<br/> 매일 3,656개 판매! ',
      data:'24.4.14(일) ~ 24.4.22(월)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_05.jpg"),
      cate:'체험/리뷰',
      title:'이니스프리 공식몰이 처음이라면?',
      data:'24.4.14(일) ~ 24.5.1(수)',
  },
  {
      img:("/_nuxt/assets/images/sam/event_list_06.jpg"),
      cate:'쇼핑혜택',
      title:'비타C 1+1 럭키박스<br/> 행운의 주인공은?',
      data:'24.4.1(월) ~ 24.4.30(화)',
  }

]

//sample visual
export const sampleSlide = [
  {
    img: ("https://images.innisfree.co.kr/upload/event/3481_0.jpg?T202404030957"),
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3463_0.png?T202404030957"),
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3481_0.jpg?T202404030957"),
  },
  {
    img: ("https://images.innisfree.co.kr/upload/event/3463_0.png?T202404030957"),
  }
]

export const sample_goods = [
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
        name:'블랙티 유스 인핸싱 앰플 50ml5',
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

export const sam_lnb = ['에센스/세럼/앰플','로션/크림','스킨/토너/미스트','립/아이케어','선케어','오일/마사지','클렌징','팩/마스크','기획 세트','기타']

export const prodImgData = [
  {
    img: ("https://images.innisfree.co.kr/upload/product/36830_l_S_375.jpg?T202404091127"),
  },
  {
    img: ("https://images.innisfree.co.kr/upload/product/36830_l1_S_375.jpg?T202404091627"),
  },
]

//single item
export const prodInfo = {
  topText: '2개이상 구매시 50%',
  name: '라이트 피팅 컨실러 [다크서클 커버] 7g',
  price: '9,100', sale: '~50%', cost: '13,000',
  sticker: [
    { txt: '증정', type: 'type02' },
  ],
  rate: 4.6,
  cntReview: 145,
  summaryReview: '이 제품을 구매하신 고객 분들은 다크서클과 잡티 커버, 자연스러운 색상, 그리고 사용 편의성이 좋다고 하셨어요!',
}

// main item
export const mainSam = {
  visual : [
      {
        img: ("https://images.innisfree.co.kr/upload/event/3481_0.jpg?T202404030957"),
        tag: ['25%','특가'],
        name: ['단숨에 차오르는 수분', '그린티 씨드 히알루론산 세럼'],
        price: ['25,000','30,700']
      },
      {
        img: ("https://images.innisfree.co.kr/upload/event/3463_0.png?T202404030957"),
        tag: ['25%','사은품'],
        name: ['단숨에 차오르는 수분', '그린티 씨드 히알루론산 세럼'],
        price: ['10,000','18,000']
      },
      {
        img: ("https://images.innisfree.co.kr/upload/event/3481_0.jpg?T202404030957"),
        tag: ['25%','체험단'],
        name: ['단숨에 차오르는 수분', '그린티 씨드 히알루론산 세럼'],
        price: ['25,000','50,000']
      },
      {
        img: ("https://images.innisfree.co.kr/upload/event/3463_0.png?T202404030957"),
        tag: ['25%','특가'],
        name: ['단숨에 차오르는 수분', '그린티 씨드 히알루론산 세럼'],
        price: ['100','1,500']
      }
  ],
  recommend : [
    {
      img:("/_nuxt/public/images/sam/recommend_01.png"),
      title:'최강한파?! 오히려 좋아!<br/> 귀여운 귀마개를 드려요♥',
      txt:'디렉트파이 선정 비타민C TOP OF TOP 세럼!<br/> 특별히 준비한 마리떼 귀마개를 드려요!0',
      hash:['겨울필수아이템','그린펫클럽']
    },
    {
      img:("/_nuxt/public/images/sam/recommend_02.png"),
      title:'원영이의 특별한 피부비결!<br/> 비타C 잡티 토닝 세럼이 정답!',
      txt:'디렉트파이 선정 비타민C TOP OF TOP 세럼!<br/> 특별히 준비한 마리떼 귀마개를 드려요!1',
      hash:['세럼','비타C', '토닝']
    },
    {
      img:("/_nuxt/public/images/sam/recommend_03.png"),
      title:'라이브 단독 쿠폰 & 사은품<br/> 신세계 상품권 10만원 GET!',
      txt:'채팅만 해도 경품을 받는다고?<br/> 구매 인증, 채팅 추첨 경품!',
      hash:['라이브 단독','쿠폰']
    }
  ],
  recommend02 : [
    {
      img:(" /_nuxt/public/images/sam/recommend_01.png"),
      title:'최강한파?! 오히려 좋아!<br/> 귀여운 귀마개를 드려요♥',
      txt:'디렉트파이 선정 비타민C TOP OF TOP 세럼!<br/> 특별히 준비한 마리떼 귀마개를 드려요!0',
      goods:{
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'이니스프리 패딩담요 WITH GREEN PET CLUB',
        price:'11,000', sale:'~50%', cost:'26,000',
      }
    },
    {
      img:("/_nuxt/public/images/sam/recommend_02.png"),
      title:'원영이의 특별한 피부비결!<br/> 비타C 잡티 토닝 세럼이 정답!',
      txt:'디렉트파이 선정 비타민C TOP OF TOP 세럼!<br/> 특별히 준비한 마리떼 귀마개를 드려요!1',
      hash:['세럼','비타C', '토닝'],
      goods:{
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        cate:'NEW',
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
      }
    },
    {
      img:("/_nuxt/public/images/sam/recommend_03.png"),
      title:'라이브 단독 쿠폰 & 사은품<br/> 신세계 상품권 10만원 GET!',
      txt:'채팅만 해도 경품을 받는다고?<br/> 구매 인증, 채팅 추첨 경품!',
      hash:['라이브 단독','쿠폰'],
      goods:{
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
      }
    }
  ],
  event_mo: [
    {
      img: ("https://images.innisfree.co.kr/upload/event/3487_0.jpg?T202404030937"),
      date: '24.3.25(월) ~ 24.4.30(화)',
      title: '남성에게도 딱! 맞는 그린티 <br>씨드 세럼 대용량 출시',
    },
    {
      img: ("https://images.innisfree.co.kr/upload/event/3502_0.jpg?T202404021757"),
      date: '24.4.1(월) ~ 24.4.3(수)',
      title: '신한카드 5천원 캐시백 <br>2만원 이상 결제 시!',
    },
    {
      img: ("https://images.innisfree.co.kr/upload/event/3487_0.jpg?T202404030937"),
      date: '24.3.25(월) ~ 24.4.30(화)',
      title: '남성에게도 딱! 맞는 그린티 <br>씨드 세럼 대용량 출시',
    },
    {
      img: ("https://images.innisfree.co.kr/upload/event/3502_0.jpg?T202404021757"),
      date: '24.4.1(월) ~ 24.4.3(수)',
      title: '신한카드 5천원 캐시백 <br>2만원 이상 결제 시!',
    },
    {
      img: ("https://images.innisfree.co.kr/upload/event/3487_0.jpg?T202404030937"),
      date: '24.3.25(월) ~ 24.4.30(화)',
      title: '남성에게도 딱! 맞는 그린티 <br>씨드 세럼 대용량 출시',
    },
    {
      img: ("https://images.innisfree.co.kr/upload/event/3502_0.jpg?T202404021757"),
      date: '24.4.1(월) ~ 24.4.3(수)',
      title: '신한카드 5천원 캐시백 <br>2만원 이상 결제 시!',
    },
  ]
}

export const sam_menu = [
  {
      depth01:'카테고리',
      sub_depth:['카테고리','특가','이벤트','베스트','라이브','FOR ME','ABOUT','고객센터','마이페이지','공병수거 캠페인','멤버십']
  },
  {
      depth01:'유형별',
      sub_depth:['유형별','피부고민']
  },
  {
      depth01:'스킨케어',
      sub_depth:['스킨케어','메이크업','남성','헤어/바디/펫','기획 세트','미용소품']
  },
  {
      depth01:'전체',
      sub_depth:['전체','에센스/세럼/앰플','로션/크림','스킨/토너/미스트','립/아이케어','선케어','오일/마사지','클렌징','팩/마스크','기획 세트','기타']
  }
]


export const samplePost = [
  {
    sticker:[
      {txt:'에디터 찐템 추천', type:'type02'}
    ],
    img: ("/_nuxt/public/images/sam/img_ed_topic_01.png"),
    title: '내가 하알루론산 수분 무기자차 선크림에 정착한 찐 이유 Top 10',
    editor: {
      photo: ("/_nuxt/public/images/sam/photo_editor_01.png"),
      name: '이사배',
      type: '민감성피부 · 주름/탄력/다크써클 고민 · 봄브라이트 · INFJ',
    },
    view: {
      cnt: '999+',
      like: '123',
      cmnt: '233'
    }
  },
  {
    sticker:[
      {txt:'에디터 찐템 추천', type:'type02'}
    ],
    img: ("/_nuxt/public/images/sam/img_ed_topic_02.png"),
    title: '특별한 이니스프리 경험!',
    editor: {
      photo: ("/_nuxt/public/images/sam/photo_editor_02.png"),
      name: '포니',
      type: '건성피부 · 트러블/건조함/피부톤',
    },
    view: {
      cnt: '152',
      like: '11',
      cmnt: '20'
    }
  },
  {
    sticker:[
      {txt:'에디터 찐템 추천', type:'type02'}
    ],
    img: ("/_nuxt/public/images/sam/img_ed_topic_03.png"),
    title: '텍스트는 최대 두 줄까지 작성이 가능합니다.',
    editor: {
      photo: ("/_nuxt/public/images/sam/photo_editor_03.png"),
      name: '회사원A',
      type: '중성피부 · 색소침착/피지과다/블랙헤드',
    },
    view: {
      cnt: '999+',
      like: '123',
      cmnt: '233'
    }
  },
  {
    sticker:[
      {txt:'에디터 찐템 추천', type:'type02'}
    ],
    img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
    title: '커뮤니티 타이틀 2줄까지 띄워쓰기 포함 최대 몇 자',
    editor: {
      photo: ("/_nuxt/public/images/sam/photo_editor_04.png"),
      name: '레오제이',
      type: '민감성피부 · 주름/탄력/다크써클',
    },
    view: {
      cnt: '152',
      like: '11',
      cmnt: '20'
    }
  },
  {
    sticker:[
      {txt:'에디터 찐템 추천', type:'type02'}
    ],
    img: ("/_nuxt/public/images/sam/img_ed_topic_01.png"),
    title: '내가 하알루론산 수분 무기자차 선크림에 정착한 찐 이유 Top 10',
    editor: {
      photo: ("/_nuxt/public/images/sam/photo_editor_01.png"),
      name: '이사배',
      type: '민감성피부 · 주름/탄력/다크써클 고민 · 봄브라이트 · INFJ',
    },
    view: {
      cnt: '999+',
      like: '123',
      cmnt: '233'
    }
  },
  {
    sticker:[
      {txt:'에디터 찐템 추천', type:'type02'}
    ],
    img: ("/_nuxt/public/images/sam/img_ed_topic_02.png"),
    title: '특별한 이니스프리 경험!',
    editor: {
      photo: ("/_nuxt/public/images/sam/photo_editor_02.png"),
      name: '포니',
      type: '건성피부 · 트러블/건조함/피부톤',
    },
    view: {
      cnt: '152',
      like: '11',
      cmnt: '20'
    }
  },
]
export const sampleShowcase = [
  {
    img: ("/_nuxt/public/images/sam/img_show_01.png"),
    title: '블랙티 유스 인핸싱\n트리트먼트 에센스',
  },
  {
    img: ("/_nuxt/public/images/sam/img_show_02.png"),
    title: '봄맞이 핑크템으로\n생기를 더하세요!',
  },
  {
    img: ("/_nuxt/public/images/sam/img_show_03.png"),
    title: '4월은 지구의 달\n공병수거하며 지구를 지켜요!',
  },
]

export const sample_log = [
  {
    type:'goods',
    item: [
      {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[
            {txt:'type01', type:'type01'},
            {txt:'type02', type:'type02'},
            {txt:'type03', type:'type03'},
            {txt:'type04', type:'type04'}
        ],
        hash:['#스킨팩','#화장솜','#순면화장솜']
      }
    ]
  }, {
    type: 'event',
    item: [
      {
        img:("/_nuxt/assets/images/sam/event_list_01.jpg"),
        cate:'제휴혜택',
        title:'트러블?수분?탄력?<br/> 고민따라 10% 추가할인 쿠폰위크!!',
        data:'24.4.14(일) ~ 24.4.30(화)',
      }
    ]
  }, {
    type: 'event',
    item: [
      {
        img:("/_nuxt/assets/images/sam/event_list_01.jpg"),
        cate:'제휴혜택',
        title:'트러블?수분?탄력?<br/> 고민따라 10% 추가할인 쿠폰위크!!',
        data:'24.4.14(일) ~ 24.4.30(화)',
      }
    ]
  }, {
    type:'goods',
    item: [
      {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[
            {txt:'type01', type:'type01'},
            {txt:'type02', type:'type02'},
            {txt:'type03', type:'type03'},
            {txt:'type04', type:'type04'}
        ],
        hash:['#스킨팩','#화장솜','#순면화장솜']
      }
    ]
  }, {
    type:'goods',
    item: [
      {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[
            {txt:'type01', type:'type01'},
            {txt:'type02', type:'type02'},
            {txt:'type03', type:'type03'},
            {txt:'type04', type:'type04'}
        ],
        hash:['#스킨팩','#화장솜','#순면화장솜']
      }
    ]
  }, {
    type:'goods',
    item: [
      {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[
            {txt:'type01', type:'type01'},
            {txt:'type02', type:'type02'},
            {txt:'type03', type:'type03'},
            {txt:'type04', type:'type04'}
        ],
        hash:['#스킨팩','#화장솜','#순면화장솜']
      }
    ]
  },
]

export const sample_live = [
  {
    img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[0]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[1]',
    relation: {
      img: ("https://images.innisfree.co.kr/upload/product/34506_l_S_240.png?T202404241707"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[2]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[3]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[4]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[5]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[6]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[7]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[8]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[9]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[10]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[11]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[12]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[13]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[14]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[15]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[16]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[17]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[18]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[19]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[20]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[21]',
    relation: {
      img: ("/_nuxt/public/images/sam/img_ed_topic_04.png"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }, {
    img: ("https://images.innisfree.co.kr/upload/live/30_rt.png?T202404241707"),
    date: '24.00.00',
    view: '4,443',
    title: '1분에 1개씩 경품이<br>쏟아지는 콜라겐 라방[22]',
    relation: {
      img: ("https://images.innisfree.co.kr/upload/product/34506_l_S_240.png?T202404241707"),
      title: '콜라겐 그린티 세라마이드 탄력장벽 크림'
    }
  }
]

export const sampleCmnt = [
  {
    photo: "",
    isEditor: false,
    name: "user01****",
    time: "5분전",
    cmnt: "역시 이니스프리 화산송이 폼이 짱이죠!",
    reply: {
      is: false,
      to: ''
    },
    userDelete: true,
    blocked: false,
  },
  {
    photo: "",
    isEditor: false,
    name: "user02****",
    time: "5분전",
    cmnt: "역시 이니스프리 화산송이 폼이 짱이죠!",
    reply: {
      is: false,
      to: ''
    },
    userDelete: false,
    blocked: true,
  },
  {
    photo: ("/_nuxt/public/images/sam/photo_editor_01.png"),
    isEditor: true,
    name: "Leesa****",
    time: "1시간전",
    cmnt: "역시 이니스프리 화산송이 폼이 짱이죠! 성분도 순하고 깔끔하게 클렌징되서 5년째 클렌징은 화산송이 라인만 사용하고 있어요 :)",
    reply: {
      is: false,
      to: ''
    },
    userDelete: false,
    blocked: false,
  },
  {
    photo: ("/_nuxt/public/images/sam/photo_editor_02.png"),
    isEditor: true,
    name: "Pony****",
    time: "10분전",
    cmnt: "에디터 끼리 통한 부분이 있네요!",
    reply: {
      is: true,
      to: 'Leesa****'
    },
    userDelete: false,
    blocked: false,
  },
  {
    photo: "",
    isEditor: false,
    name: "aaa****",
    time: "5분전",
    cmnt: "좋은 정보 감사합니다!!",
    reply: {
      is: true,
      to: 'Pony****'
    },
    userDelete: false,
    blocked: false,
  },
  {
    photo: "",
    isEditor: false,
    name: "user03****",
    time: "1시간전",
    cmnt: "역시 이니스프리 화산송이 폼이 짱이죠! 성분도 순하고 깔끔하게 클렌징되서 5년째 클렌징은 화산송이 라인만 사용하고 있어요 :)",
    reply: {
      is: false,
      to: ''
    },
    userDelete: false,
    blocked: false,
  },
  {
    photo: "",
    isEditor: false,
    name: "lcj****",
    time: "2시간전",
    cmnt: "좋은 정보 감사합니다!!",
    reply: {
      is: false,
      to: ''
    },
    userDelete: false,
    blocked: false,
  },
  {
    photo: "",
    isEditor: false,
    name: "lcj****",
    time: "2시간전",
    cmnt: "좋은 정보 감사합니다!!",
    reply: {
      is: true,
      to: 'lcj****'
    },
    userDelete: false,
    blocked: false,
  },
]


export const banner_list = [
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
