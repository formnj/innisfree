<template>
  <Breadcrumb :item="breadcrumbData" />
  <div class="content_wrap">
    <div class="title_wrap">
        <h2>스킨케어
            <span class="pdt_count"><strong>32</strong></span>
        </h2>
      <div class="pdtSortTab_wrap">
        <div class="sortTab">
          <button class="btn_dropdown" @click="Drop_Down()" >추천순</button>
          <ul>
            <li><a href="#none" class="active">추천순</a></li>
            <li><a href="#none">신제품순</a></li>
            <li><a href="#none">판매량순</a></li>
            <li><a href="#none">낮은 가격순</a></li>
            <li><a href="#none">높은 가격순</a></li>
            <li><a href="#none">리뷰순</a></li>
            <li><a href="#none">판매금액순</a></li>
          </ul>
        </div>
        <button @click="modal.open('sample_modal', 'detailSearch');">상세검색</button>
      </div>
    </div>
    <div class="list_wrap">
        <ul class="goods_list">
            <li v-for="(item, idx) in sample_goods" :key="idx">
                <GoodsItem :item="item" :link="item.link" />
            </li>
        </ul>
    </div>
    <div class="paging">
        <div>
            <a href="#none" class="first">처음으로</a>
            <a href="#none">1</a>
            <a href="#none">2</a>
            <a href="#none" class="active">3</a>
            <a href="#none">4</a>
            <a href="#none">5</a>
            <a href="#none" class="last">마지막으로</a>
        </div>
    </div>
    <div class="modal_wrap" id="sample_modal">
        <div class="modal_container">
            <div class="modal_header">
                <h2>상세검색</h2>
                <button class="btn_close" @click="modal.close(this);">닫기</button>
            </div>
            <div class="modal_content">
                <dl class="sortList">
                  <dt>혜택별</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">증정</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl class="sortList">
                  <dt>고민별</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">트러블/리페어</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">영양/토탈안티에이징</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">잡티/피부톤</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">주름/탄력</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">수분/보습/속건조</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">각질/피부결</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl class="sortList">
                  <dt>기능성</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">미백</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">주름개선</span>
                        </label>
                      </li>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">비건인증</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl class="sortList">
                  <dt>공병수거</dt>
                  <dd>
                    <ul>
                      <li>
                        <label for="benefit1" class="inputChk">
                          <input type="checkbox" name="srchP_typeArr" id="benefit1" value="N" alt="증정"><span @click="setFilter($event)">공병수거 가능</span>
                        </label>
                      </li>
                    </ul>
                  </dd>
                </dl>
            </div>
            <div class="modal_footer">
                <Button class="btn_big btn_reset" txt="초기화" />
                <Button class="btn_big btn_type_02" txt="검색" />
            </div>
        </div>
        <div class="overlay" @click="modal.close(this);"></div>
    </div>
  </div>
</template>
<script setup>
import { breadcrumbData } from '~/test/data/dummyData'

definePageMeta({
  layout: 'pc-default'
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

const modal = {
    open: (_target, _type) => {
        document.getElementById(_target).classList.add('active', _type);
        const body = document.querySelector("body");
        const pageY = document.body.scrollTop || document.documentElement.scrollTop;

        if (!body.hasAttribute("scrollY")) {
            body.setAttribute("scrollY", String(pageY));
            body.classList.add("lockbody");
        }
        body.addEventListener("touchmove", modal.lockScrollHandle, { passive: false });
    }, close: (_target) => {
        event.target.closest('.modal_wrap').setAttribute('class','modal_wrap');
        const body = document.querySelector("body");

        if (body.hasAttribute("scrollY")) {
            body.classList.remove("lockbody");
            body.scrollTop = Number(body.getAttribute("scrollY"));
            body.removeAttribute("scrollY");
        }

        body.removeEventListener("touchmove", modal.lockScrollHandle, { passive: true });
    }, lockScrollHandle(event) {
        const e = event || window.event;

        // 멀티 터치는 터치 되게 한다
        if (e.touches.length > 1) return;

        // event 초기화 속성이 있음 초기화
        e.preventDefault();
    }
}

const Drop_Down = () => {
    let selet = document.querySelector('.pdtSortTab_wrap ul');
    selet.classList.toggle('active')
    if(selet.classList.contains('active')){
        console.log(selet.clientHeight)
        selet.style.height = '270px';
        selet.style.border="1px solid #888";

        // console.log(selet.clientHeight) + 'px'
    }else {
        selet.style.border = 'none'
        selet.style.height = '0px'
    }
}

const setFilter = (event) =>{
  const target = event.currentTarget;
  target.classList.toggle('active')
}
</script>

<style lang="scss" scoped>
::v-deep.breadcrumb {
  .inner {
    max-width:1320px;
    margin:0 auto;
    padding:0 20px;
    dd {
      z-index:3;
    }
  }
}
.content_wrap {
  max-width:1320px;
  margin:0 auto;
  padding:0 20px;
}
</style>
