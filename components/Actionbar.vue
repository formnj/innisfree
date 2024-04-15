<template>
    <div class="action_bar">
        <div class="fix_btn">
            <Button class="btn_icon_back" txt=""/>
            <div class="pdtSortTab_wrap">
                <div class="sortTab">
                    <button class="btn_dropdown" @click="modal.open('sample_modal_sort', 'bottom');" >추천순</button>
                </div>
                <button @click="modal.open('sample_modal_search', 'bottom');">상세검색</button>
            </div>
            <div class="right_box">
                <Button class="btn_icon_history" txt=""/>
                <Button class="top_btn" txt="" @click="scroll_top()" />
            </div>
        </div>
        <div class="inner">
            <a href="#"><img src="~/assets/images/actionbar/Logo_Motion.png" alt="" /></a>
            <div>
                <button @click="cate_layer.open"><img src="~/assets/images/actionbar/Category.png" alt="" /></button>
                <button class="best"><img src="~/assets/images/actionbar/Best.png" alt="" /></button>
            </div>
            <div>
                <button class="mypage"><img src="~/assets/images/actionbar/MyPage.png" alt="" /></button>
                <button><img src="~/assets/images/actionbar/History.png" alt="" /></button>
            </div>
        </div>
    </div>
    <div class="modal_wrap" id="sample_modal_sort">
        <div class="modal_container">
            <div class="modal_header">
                <button class="btn_close" @click="modal.close(this);"></button>
            </div>
            <div class="modal_content">
                <div>
                    <ul>
                        <li class="active"><a href="#none" class="active">추천순</a></li>
                        <li><a href="#none">신제품순</a></li>
                        <li><a href="#none">판매량순</a></li>
                        <li><a href="#none">낮은 가격순</a></li>
                        <li><a href="#none">높은 가격순</a></li>
                        <li><a href="#none">리뷰순</a></li>
                        <li><a href="#none">판매금액순</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="overlay" @click="modal.close(this);"></div>
    </div>
    <div class="modal_wrap" id="sample_modal_search">
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
</template>

<script setup>


onMounted(() => {
  let preScrollTop = 0
  window.addEventListener('scroll', () => {
    let nextScrollTop = window.scrollY
    let actionbar = document.querySelector('.action_bar')
    let fix_btn = document.querySelector('.fix_btn')
    let pdtSortTab_wrap = document.querySelector('.fix_btn .pdtSortTab_wrap')
    let top_btn = document.querySelector('.top_btn')
    let btn_icon_history = document.querySelector('.btn_icon_history')
    if (preScrollTop < nextScrollTop) {
      actionbar.style.bottom = -(actionbar.offsetHeight + 40) + 'px'
      fix_btn.style.bottom = 90+'px';
      pdtSortTab_wrap.classList.add('active')
      btn_icon_history.classList.add('active')
      top_btn.classList.add('active');
    } else if(nextScrollTop<20){
        console.log(nextScrollTop)
        top_btn.classList.remove('active');
        btn_icon_history.classList.remove('active')
        pdtSortTab_wrap.classList.add('active')
        fix_btn.classList.remove('active')
        pdtSortTab_wrap.classList.remove('active')
    }
    else {
      actionbar.removeAttribute('style');
      fix_btn.removeAttribute('style');
    }
    preScrollTop = nextScrollTop
  })
})
const scroll_top = ()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

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

/* category layer */
const cate_layer = {
  open: () => {
    document.querySelector('.navCategory').classList.add('active')
  },
  close: () => {
    document.querySelector('.navCategory').classList.remove('active')
  }
}
</script>

<style lang="scss" scoped>
.action_bar {
  padding: 15px 25px;
  background: #000;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  transition: bottom 0.25s;

  .inner {
    display: flex;
    justify-content: center;
    gap: 100px;

    > a {
      width: 61px;
      height: 61px;
      position: absolute;
      left: 50%;
      top: -20px;
      display: block;
      transform: translateX(-50%);

      img {
        width: 100%;
      }
    }

    > div {
      display: flex;
      gap: 20px;

      button {
        width: 32px;
        height: 32px;
        display: block;
        color: #fff;

        img {
          width: 100%;
        }
      }
    }
  }
}

.fix_btn {
    margin-bottom:30px;
    position:absolute;
    right:0;
    left:0;
    bottom:60px;
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    button {
        border-radius:7px;
        box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.05);
        background:#fff;
        background-repeat:no-repeat;
        background-size:250px;
    }
    .btn_icon_back {
        width:44px !important;
        height:44px !important;
        background-image:url('/_nuxt/assets/images/common/MO-icon_split.png');
        background-position:-33px -32px;
        position:absolute;
        bottom:0;
        left:20px;
    }

    .pdtSortTab_wrap {
        padding:10px 25px;
        border:1px solid #000;
        border-radius:20px;
        background:#fff;
        overflow:hidden;
        position:absolute;
        bottom:0;
        right:50%;
        display:flex;
        visibility:hidden;
        transform:translateX(50%);
        transition:all 0.2s;
        opacity:0;
        &.active {
            visibility:visible;
            opacity:1;
        }
        button {
            font-size:13px;
            font-weight:600;
            border-radius:0;
        }
        .sortTab {
            position:relative;
            > button {
                margin-right:16px;
                display: flex;
                justify-content:center;
                &::after {
                    content:'';
                    width:17px;
                    height:17px;
                    margin-left:5px;
                    background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
                    background-size:250px;
                    background-repeat:no-repeat;
                    background-position:-110px -60px;
                    display:inline-block;
                }
            }

            & ~ button {
                position:relative;
                display: flex;
                justify-content:center;
                &::before{
                    left:-8px !important;
                }
                &::after {
                    content:'';
                    width:17px;
                    height:17px;
                    margin-left:5px;
                    background-image: url('/_nuxt/assets/images/common/PC-icon_split.png');
                    background-size:250px;
                    background-repeat:no-repeat;
                    background-position:-130px -60px;
                    display:inline-block;
                }
            }
        }
    }
    .right_box {
        position:absolute;
        bottom:0;
        right:20px;
        display:flex;
        flex-direction:column;
        gap:10px;
        .btn_icon_history {
            width:44px !important;
            height:44px !important;
            background-image:url('/_nuxt/assets/images/common/MO-icon_split.png');
            background-position:-66px -29px;
            transform:translateY(54px);
            transition:all 0.2s;
            &.active {
                transform:translateY(0px);
            }
        }
        .top_btn {
            width:44px !important;
            height:44px !important;
            background-image:url('/_nuxt/assets/images/common/MO-icon_split.png');
            background-position:-99px -30px;
            transform:translateX(400px);
            transition:all 0.3s;
            &.active {
                transform:translateX(0px);
            }
            em {
                display:none;
            }
        }
    }
}
</style>
