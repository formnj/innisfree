/* 공통 - 모달 */
export const modal = {
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
    event.target.closest('.modal_wrap').setAttribute('class', 'modal_wrap');
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
/* //공통 - 모달 */


/* PC - 상품 목록 드롭다운 */
export const Drop_Down = () => {
  let selet = document.querySelector('.pdtSortTab_wrap ul');
  selet.classList.toggle('active')
  if(selet.classList.contains('active')){
      //console.log(selet.clientHeight)
      selet.style.height = '270px';
      selet.style.border="1px solid #888";

      // console.log(selet.clientHeight) + 'px'
  }else {
      selet.style.border = 'none'
      selet.style.height = '0px'
  }
}
/* //PC - 상품 목록 드롭다운 */


/* 공통 - 클릭 타겟에 active 클래스 추가(ex-옵션 선택) */
export const setFilter = (event) =>{
  const target = event.currentTarget;
  target.classList.toggle('active')
}
/* //공통 - 클릭 타겟에 active 클래스 추가(ex-옵션 선택) */