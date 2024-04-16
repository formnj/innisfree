<template>
  <div class="prd_nav">
    <Button txt="전체" />
  </div>

  <div class="inner">
      <section v-for="(item,idx) in sample_promotion" :key="idx">
        <div class="promotion">
          <div class="head">
            <h3 class="title">{{ item.title }}</h3>
            <p class="desc">{{ item.txt }}</p>
            <div :id="`prom_${idx}_`" class="count_wrap">
              <div class="num"><span :id="`prom_${idx}_dd`">0</span></div>
              <span>일</span>
              <div class="num"><span :id="`prom_${idx}_hh`">00</span></div>
              <span>시</span>
              <div class="num"><span :id="`prom_${idx}_mm`">00</span></div>
              <span>분</span>
              <div class="num"><span :id="`prom_${idx}_ss`">00</span></div>
              <span>초</span>
            </div>
            <button @click="modal.open('sample_modal', 'full', idx);">유의사항</button>
          </div>
          <div class="list_wrap">
            <ul class="goods_list">
              <li v-for="(item,idx) in sample_goods" :key="idx">
                <GoodsItem :item="item" :link="item.link" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="product">
          <h3>특가 할인 찬스 / 사은품 증정 혜택</h3>
          <div class="list_wrap">
            <ul class="goods_list">
              <li v-for="(item,idx) in sample_goods" :key="idx">
                <GoodsItem :item="item" :link="item.link" />
              </li>
            </ul>
          </div>
        </div>
      </section>
  </div>

  <div class="modal_wrap" id="sample_modal">
      <div class="modal_container">
          <div class="modal_header">
              <h2>{{ sample_promotion[_idx].modal_tit }}기획전 제품 구매 시 유의사항</h2>
              <button class="btn_close" @click="modal.close($event);">닫기</button>
          </div>
          <div class="modal_content">
            <div>{{ sample_promotion[_idx].modal_txt }}</div>
          </div>
      </div>
      <div class="overlay" @click="modal.close($event);"></div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'mo-category'
});

onMounted(() => {
  countDownTimer("prom_0_", "2024-05-01 23:59:00", "hotdeal");
  countDownTimer("prom_1_", "2024-05-01 23:59:00", "hotdeal");
});

const sample_promotion = [
  {
    title: '납작아이브로우/컨실러\n2개이상 구매시 40%',
    txt: '납작 아이 브로우 펜슬/라이트 피팅 컨실러 1개 30%, 2개 이상 구매시 40%',
    modal_tit: '“납작아이브로우/컨실러”',
    modal_txt: '동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능\n기간 : 4/14(일) - 5/1(수) 23:59:00까지'
  },
  {
    title: '클렌징오일/워터/크림\n2개이상 구매시 40%',
    txt: '클렌징오일/워터/크림 1개 구매시 40% 2개 이상 구매시 40%',
    modal_tit: '“클랜징오일/워터/크림”',
    modal_txt: '동일 제품 및 교차 구매 가능 / 기간 내 최대 10개 구매 가능\n기간 : 4/14(일) - 5/1(수) 23:59:00까지\n(행사제외 - 블루베리 클렌징 워터)'
  }
]

const sample_goods = [
    {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[{txt:'type02', type:'type02'}],
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
        cate:'NEW',
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        sticker:[{txt:'1+1', type:'type02'}]
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
        cate:'NEW',
        name:'그린티 씨드 히알루론산 세렘 80ml',
        price:'44,800', sale:'~20%', cost:'56,000',
        sticker:[{txt:'1+1', type:'type02'}]
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[{txt:'증정', type:'type02'}]
    }, {
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[{txt:'증정', type:'type02'}]
    },
    {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'블랙티 유스 인핸싱 앰플 50ml',
        price:'11,000', sale:'~50%', cost:'26,000',
        sticker:[{txt:'증정', type:'type02'}]
    },
]

const lpad = (str, padLen, padStr) => {
    if (padStr.length > padLen) {
        console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str;
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str = padStr + str;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
}

const countDownTimer = (id, date, type) => {
	let _vDate = new Date(date); // 전달 받은 일자
	let _second = 1000;
	let _minute = _second * 60;
	let _hour = _minute * 60;
	let _day = _hour * 24;
	let timer;

	const showRemaining = () => {
		let now = new Date();
		let distDt = _vDate - now;
		if (distDt < 0 || date == "") {
			clearInterval(timer);
			$("[id^="+id+"]").remove();
			if(type == "live"){
				location.href=url;
			}
			return;
		}

		const days = Math.floor(distDt / _day);
		const hours = Math.floor((distDt % _day) / _hour);
		const minutes = Math.floor((distDt % _hour) / _minute);
		const seconds = Math.floor((distDt % _minute) / _second);

		if(type == "hotdeal"){
      document.getElementById(id+'dd').innerHTML = days;
      document.getElementById(id+'hh').innerHTML = lpad(hours, 2, "0");
      document.getElementById(id+'mm').innerHTML = lpad(minutes, 2, "0");
      document.getElementById(id+'ss').innerHTML = lpad(seconds, 2, "0");
		}
	}

	timer = setInterval(showRemaining, 1000);
}

const _idx = ref(0);
const modal = {
    open: (_target, _type, idx) => {
        document.getElementById(_target).classList.add('active', _type);
        const body = document.querySelector("body");
        const pageY = document.body.scrollTop || document.documentElement.scrollTop;

        if (!body.hasAttribute("scrollY")) {
            body.setAttribute("scrollY", String(pageY));
            body.classList.add("lockbody");
        }
        body.addEventListener("touchmove", modal.lockScrollHandle, { passive: false });
        _idx.value = idx;
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
</script>
<style lang="scss" scoped>
  .prd_nav {
    padding:10px 21px;
    margin:10px -20px 20px;
    background-color:#fff;
    position:sticky;
    top:50px;
    z-index:2;
    ::v-deep button {
      width:100%;
      height:40px;
      padding:0 15px;
      font-family:inherit;
      border:1px solid #eee;
      background-color:unset;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:20px;
      em {
        padding:0;
        color:#000;
        font-size:13px;
      }
    }
  }
  .inner {
    section {
      margin:0 -20px;
      padding:0 21px 30px 21px;
      border-bottom:5px solid #f5f5f5;
      &:last-child {
        border-bottom:0;
      }
      .promotion {
        .head {
          margin:30px 0 20px;
          .title {
            color:#000;
            font-size:18px;
            font-weight:600;
            white-space:pre-line;
          }
          .desc {
            margin:5px 0 15px;
            color:#888;
            font-size:13px;
            font-weight:400;
          }
          .count_wrap {
            margin:15px 0;
            color:#000;
            font-size:13px;
            display:flex;
            align-items:center;
            .num {
              width:42px;
              height:48px;
              background-image:url('~/assets/images/common/icon_split.png');
              background-repeat:no-repeat;
              background-position:-117px -142px;
              background-size:250px auto;
              display:inline-flex;
              align-items:center;
              justify-content:center;
              position:relative;
              span {
                color:#fff;
                font-size:20px;
                position:relative;
                text-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.25);
                z-index:1;
              }
              &:after {
                content:'';
                width:calc(100% - 2px);
                height:1px;
                background-color: #1D1D1D;
                opacity: 0.5;
                display: block;
                position: absolute;
                left: 1px;
                top: 24px;
                z-index: 2;
              }
            }
            >span {
              margin: 0 6px;
            }
          }
          >button {
            color:#222;
            font-size:13px;
            font-family:inherit;
            text-decoration:underline;
          }
        }
      }
      .list_wrap {
        .goods_list {
          margin-top:0;
          margin-left:0;
          gap:20px 3px;
          >li {
            width:calc(50% - 3px);
            padding-top:0;
            padding-left:0;
            ::v-deep .goods_item {
              .img_wrap {
                .btnIconBox {
                  left:0;
                }
              }
            }
          }
        }
      }
      .product {
        h3 {
          margin:30px 0 20px;
          color:#000;
          font-size:18px;
          font-weight:600;
        }
      }
    }
  }
</style>
