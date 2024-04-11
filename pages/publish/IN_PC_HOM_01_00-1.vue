<template>
    <div class="title_wrap" :data-layout="props.layoutType">
      <h2>베스트</h2>
    </div>

    <div class="sort_tab_wrap">
      <Tabs :item="[{txt:'실시간 베스트'},{txt:'주간 베스트'},{txt:'월간 베스트'}]" :tabidx="0" />

      <div class="sub_tab">
        <Tabs tabType="type_02" :item="[{txt:'전체'},{txt:'스킨케어'},{txt:'메이크업'},{txt:'남성'},{txt:'헤어/바디/펫'},{txt:'기획 세트'},{txt:'전체'},{txt:'스킨케어'},{txt:'메이크업'},{txt:'남성'},{txt:'헤어/바디/펫'},{txt:'기획 세트'},{txt:'미용소품'},{txt:'스킨케어'},{txt:'메이크업'},{txt:'남성'},{txt:'헤어/바디/펫'},{txt:'기획 세트'},{txt:'전체'},{txt:'스킨케어'},{txt:'메이크업'},{txt:'남성'},{txt:'헤어/바디/펫'},{txt:'기획 세트'}]" :tabidx="0" />
        <span>2024.03.29 ~ 2024.04.04 기준</span>
      </div>
    </div>

    <div class="list_wrap">
      <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
              <span class="ranking" v-if="idx < 9">{{ '0'+(idx+1) }}</span>
              <span class="ranking" v-else>{{ idx+1 }}</span>
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
                <h2>Modal Title</h2>
                <button class="btn_close" @click="modal.close(this);">닫기</button>
            </div>
            <div class="modal_content">
                <div> Sample Modal </div>
            </div>
            <div class="modal_footer">
                <Button class="btn_outline" txt="cancel" />
                <Button txt="OK" />
            </div>
        </div>
        <div class="overlay" @click="modal.close(this);"></div>
    </div>
</template>

<script setup>
definePageMeta({
	layout: 'pc-category'
});

const props = defineProps({
    layoutType: {
      type:String,
      default:'default'
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
</script>

<style lang="scss">
.title_wrap {
    padding:60px 0;
    position:relative;
    z-index:1;
    display:flex;
    h2 {
        font-size:38px;
        font-weight:300;
        position:relative;
        .pdt_count {
            margin-left:5px;
            padding:3px 6px;
            color:#fff;
            font-size:13px;
            white-space:nowrap;
            background-color:#00BC70;
            border-radius:999px;
            position:absolute;
            top:0;
            left:100%;
            display:block;
        }
    }
    .pdtSortTab_wrap {
        margin-left:auto;
        display:flex;
        align-items:center;
    }
}

.sortTab {
    position:relative;
    ul {
        position:absolute;
        top:100%;
        left:0;
        display:none;
    }
}

.goods_list {
    margin-top:-40px;
    margin-left:-20px;
    > li {
        width:25%;
        padding-top:40px;
        padding-left:20px;
    }
}
</style>
