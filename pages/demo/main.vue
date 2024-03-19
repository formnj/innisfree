<template>
    <header class="iHeader mHeader fixed">
        <h1><a ap-click-area="MAIN" ap-click-name="상단" ap-click-data="INNISFREE" href="https://m.innisfree.com/kr/ko/mMain.do"><span class="ir">innisfree</span></a></h1>
        <div class="myBox">
            <button type="button" class="btn_search" onclick="location.href='https://m.innisfree.com/kr/ko/mSearchMain.do'" ap-click-area="MAIN" ap-click-name="상단" ap-click-data="검색"><span class="ir">검색</span></button>     
            <button type="button" class="btn_cart" ap-click-area="MAIN" ap-click-name="상단" ap-click-data="장바구니"><span class="ir">장바구니</span><span id="cartCntTxt" class="count">0</span><span class="ir">개 상품</span></button>
        </div>
    </header>
    <InnisHeader is-main="true"></InnisHeader>
    <div class="fixBtnWrap">
        <!-- <div> -->
        <div class="fixeBtn">
            <button type="button" id="mainSide" onclick="javascript:sideMenuClose();" class="btn_icon_back" style="display:none"><span class="ir">이전</span></button>
            <button type="button" id="mainSideNo" class="btn_icon_back" onclick="fnHistroyBack();" style="display:none"><span class="ir">이전</span></button>
            <div class="hidsch">
            </div>
            <div class="rightBox">
                <div class="hidBtn">
                <button type="button" class="btn_icon_history" onclick="getShoppingLog();"><span class="ir" ap-click-area="MAIN" ap-click-name="플로팅" ap-click-data="쇼핑로그">쇼핑로그</span></button>
                <button type="button" class="btn_icon_top" ap-click-area="MAIN" ap-click-name="플로팅" ap-click-data="상단바로가기"><span class="ir">상단으로 이동</span></button>
                </div>
            </div>
        </div>
        <div class="fixedMenu ani">
            <!-- logo animation -->
            <button type="button" class="btn_innisfree" onclick="location.href='https://m.innisfree.com/kr/ko/mMain.do'" ap-click-area="MAIN" ap-click-name="하단" ap-click-data="홈버튼">
                <ClientOnly>
                    <dotlottie-player autoplay="" controls="" loop="" mode="normal" speed="2" src="https://m.innisfree.com/resources/mobile/images/ui/logo_inni.lottie" style="width:5.9rem;height:5.9rem;" background="transparent"></dotlottie-player>
                </ClientOnly>
            </button>
            <!--// logo animation -->
            <button type="button" class="btn_category" ap-click-area="MAIN" ap-click-name="하단" ap-click-data="전체메뉴">
            <img src="https://images.innisfree.co.kr/upload/mainMng/mobile/1.png?t202303201137" alt="allNavi" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/125x125.png'"><span>전체메뉴</span>
            </button>
            <button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mEvent.do'" ap-click-area="MAIN" ap-click-name="하단" ap-click-data="이벤트">
            <img src="https://images.innisfree.co.kr/upload/mainMng/mobile/183.png" alt="event" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/125x125.png'"><span>이벤트</span>
            </button>
            <button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mHotdealSpcPrcMain.do'" ap-click-area="MAIN" ap-click-name="하단" ap-click-data="특가">
            <img src="https://images.innisfree.co.kr/upload/mainMng/mobile/3.png" alt="spc" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/125x125.png'"><span>특가</span>
            </button>
            <button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mMypage.do'" ap-click-area="MAIN" ap-click-name="하단" ap-click-data="마이페이지">
            <img src="https://images.innisfree.co.kr/upload/mainMng/mobile/5.png" alt="mypage" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/125x125.png'"><span>마이페이지</span>
            </button>
        </div>
    </div>
    <!-- //bottom fixed -->
    <nav class="headerNav" id="btmBarcord">
        <div class="innerBox">
            <h3 class="btmTitle">바코드</h3>
            <button type="button" class="btnClose btnX"><span class="ir">메뉴 닫힘</span></button>
            <!-- 정렬 --><!-- 현재메뉴 current -->
            <div class="barcordBox">
                <div class="img"><img src="" alt="코드"></div>
                <div class="num"><span></span><span></span><span></span><span></span></div>
            </div>
        </div>
    </nav>
    <!-- // 옴니플랫폼 관련 추가 레이어팝업 -->
    <!-- body -->
    <!-- S: [2022_UIIX_모바일 메인 개선] -->
    <div class="main-2">
        <section class="home-visual">
            <div class="slide swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                <ul class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-2580px, 0px, 0px);">
                <li class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="8" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="8,그린카 제휴" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3388&amp;procStat=2">
                        <div class="cnt-area">
                            <div class="tag-card">
                            </div>
                            <div class="name">
                            <span class="prdName_1">이니스프리 X 그린카</span>
                            <span class="prdName_2">참여만 해도 쏟아지는 혜택</span>
                            </div>
                            <div class="price">
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_814_left_mo.jpg?T20240219095946" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="0" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="0,컬러풀위크" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3387">
                        <div class="cnt-area">
                            <div class="tag-card">
                            <span class="cardSt_2">30%할인</span> 
                            </div>
                            <div class="name">
                            <span class="prdName_1">봄맞이 메이크업 인기템</span>
                            <span class="prdName_2">득템 찬스!</span>
                            </div>
                            <div class="price">
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_812_left_mo.jpg?T20240219095927" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="1" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="1,[콜라겐] 특가" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3376&amp;;procStat=2&amp;channelTyp=VU0101">
                        <div class="cnt-area">
                            <div class="tag-card">
                            <span class="cardSt_1">25%</span>
                            <span class="cardSt_2">하트괄사증정</span>    
                            <span class="cardSt_2">증정품</span>   
                            </div>
                            <div class="name">
                            <span class="prdName_1">2주만에 피부나이 -1.8세</span>
                            <span class="prdName_2">콜라겐 크림</span>
                            </div>
                            <div class="price">
                            <span class="tUnit">29,250</span>
                            <span class="tCost">39,000</span>
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_797_left_mo.jpg?T20240216184952" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="2" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="2,[레티놀] 특가" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3375">
                        <div class="cnt-area">
                            <div class="tag-card">
                            <span class="cardSt_1">25%</span>
                            <span class="cardSt_2">증정품</span>   
                            </div>
                            <div class="name">
                            <span class="prdName_1">톤,결,모공,각질</span>
                            <span class="prdName_2">레티놀 시카로 매-끈하게</span>
                            </div>
                            <div class="price">
                            <span class="tUnit">69,000</span>
                            <span class="tCost">92,000</span>
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_790_left_mo.jpg?T20240216185003" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="3" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="3, [블랙티] 특가" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3331">
                        <div class="cnt-area">
                            <div class="tag-card">
                            <span class="cardSt_1">30%</span>
                            <span class="cardSt_2">증정품</span>   
                            </div>
                            <div class="name">
                            <span class="prdName_1">찐후기로 증명하는 </span>
                            <span class="prdName_2">#인생앰플 블랙티 앰플</span>
                            </div>
                            <div class="price">
                            <span class="tUnit">50,400</span>
                            <span class="tCost">72,000</span>
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_791_left_mo.jpg?T20240216185012" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide swiper-slide-prev" data-swiper-slide-index="4" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="4, [비타C] 특가" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3373">
                        <div class="cnt-area">
                            <div class="tag-card">
                            <span class="cardSt_1">35%</span>
                            <span class="cardSt_2">증정품</span>   
                            </div>
                            <div class="name">
                            <span class="prdName_1">2023 디렉터파이</span>
                            <span class="prdName_2">비타민C TOP of TOP</span>
                            </div>
                            <div class="price">
                            <span class="tUnit">49,400</span>
                            <span class="tCost">76,000</span>
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_792_left_mo.jpg?T20240216185021" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide swiper-slide-active" data-swiper-slide-index="5" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="5, [그린티] 특가" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3374">
                        <div class="cnt-area">
                            <div class="tag-card">
                            <span class="cardSt_1">25%</span>
                            <span class="cardSt_2">증정품</span>   
                            </div>
                            <div class="name">
                            <span class="prdName_1">일주일만에 피부건조 해결</span>
                            <span class="prdName_2">그린티 히알루론산 세럼</span>
                            </div>
                            <div class="price">
                            <span class="tUnit">23,250</span>
                            <span class="tCost">31,000</span>
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_793_left_mo.jpg?T20240219002213" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide swiper-slide-next" data-swiper-slide-index="6" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="6,스티븐해링턴티징" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3412">
                        <div class="cnt-area">
                            <div class="tag-card">
                            </div>
                            <div class="name">
                            <span class="prdName_1">이니스프리x스티븐해링턴</span>
                            <span class="prdName_2">COMING SOON!</span>
                            </div>
                            <div class="price">
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_811_left_mo.jpg?T20240219154236" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="7" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="7,블루베리라인" href="https://m.innisfree.com/kr/ko/joinEvent/mViewJoinEvent.do?eventSeq=82">
                        <div class="cnt-area">
                            <div class="tag-card">
                            </div>
                            <div class="name">
                            <span class="prdName_1">블루베리 라인 구매 시</span>
                            <span class="prdName_2">뷰티포인트 2000P GET</span>
                            </div>
                            <div class="price">
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_813_left_mo.jpg?T20240216185913" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="8" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="8,그린카 제휴" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3388&amp;procStat=2">
                        <div class="cnt-area">
                            <div class="tag-card">
                            </div>
                            <div class="name">
                            <span class="prdName_1">이니스프리 X 그린카</span>
                            <span class="prdName_2">참여만 해도 쏟아지는 혜택</span>
                            </div>
                            <div class="price">
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_814_left_mo.jpg?T20240219095946" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 430px;">
                    <a ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="0,컬러풀위크" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3387">
                        <div class="cnt-area">
                            <div class="tag-card">
                            <span class="cardSt_2">30%할인</span> 
                            </div>
                            <div class="name">
                            <span class="prdName_1">봄맞이 메이크업 인기템</span>
                            <span class="prdName_2">득템 찬스!</span>
                            </div>
                            <div class="price">
                            </div>
                        </div>
                        <div class="visualImg">
                            <img src="https://images.innisfree.co.kr/upload/mainMng/BM11_812_left_mo.jpg?T20240219095927" class="swiper-lazy swiper-lazy-loaded" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/375x500.png'">
                            <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/nail_visual.png" alt="">
                        </div>
                    </a>
                </li>
                </ul>
                <!-- page -->
                <div class="fraction swiper-pagination-fraction"><span class="swiper-pagination-current">06</span><span class="swiper-pagination-total">09</span><button type="button" class="btn_banner_list" ap-click-area="MAIN" ap-click-name="메인배너" ap-click-data="전체보기"><span class="ir">전체 배너 보기</span></button></div>
                <!-- <div class="swiper-pagination swiper-progressbar"></div> -->
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
        </section>
        <!-- quck-menu -->
        <div class="sectionBox quick">
            <div class="swPbrBox">
                <div class="quickMenu _autoSwiper swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide swiper-slide-active">
                        <a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35278" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="event"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/188.jpg" alt="event" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                    <li class="swiper-slide swiper-slide-next">
                        <a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36961" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="event"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/189.jpg" alt="event" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="https://m.innisfree.com/kr/ko/mHotdealSpcPrcMain.do?inmPromNo=175" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="cleansing"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/187.jpg" alt="cleansing" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="https://m.innisfree.com/kr/ko/ProductList/skincare/mProduct.do?catCd01=UA" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="skincare"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/14.jpg" alt="skincare" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="https://m.innisfree.com/kr/ko/ProductList/suncare/skincare/mProduct.do?catCd02=UAKN&amp;catCd01=UA" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="suncare"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/104.jpg" alt="suncare" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="https://m.innisfree.com/kr/ko/ProductList/makeup/mProduct.do?catCd01=QW" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="makeup"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/19.jpg" alt="makeup" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="https://m.innisfree.com/kr/ko/ProductList/hair-body-pet/mProduct.do?catCd01=QF" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="hair body"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/20.jpg" alt="hair body" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="https://m.innisfree.com/kr/ko/ProductList/hair-body-pet/PET/mProduct.do?catCd01=QF&amp;catCd02=QFBB" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="pet"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/71.jpg" alt="pet" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="https://m.innisfree.com/kr/ko/ProductList/skincare/skincare-specialset/mProduct.do?catCd01=UA&amp;catCd02=UAST" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="set"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/21.jpg" alt="set" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="https://m.innisfree.com/kr/ko/ProductList/beauty-tool/mProduct.do?catCd01=UK" ap-click-area="MAIN" ap-click-name="모바일바로가기" ap-click-data="beauty props"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/22.jpg" alt="beauty props" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                        </a>
                    </li>
                </ul>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
            <div class="barBanner">
                <a href="https://m.innisfree.com/kr/ko/mCommunityShowcaseMain.do" ap-click-area="MAIN" ap-click-name="모바일바로가기-롱메뉴" ap-click-data="showcase"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/185.jpg" alt="showcase" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/348x63.png'">
                </a>
                <a href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=2181&amp;procStat=2" ap-click-area="MAIN" ap-click-name="모바일바로가기-롱메뉴" ap-click-data="event"><img src="https://images.innisfree.co.kr/upload/mainMng/mobile/184.jpg" alt="event" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/348x63.png'">
                </a>
            </div>
        </div>
        <!-- //quck-menu -->
        <div class="inniMoving"><span>THE NEW ISLE</span><span>THE NEW ISLE</span></div>
        <!-- 텍스트 적용 -->
        <!-- 이벤트강조형 -->
        <ul class="thumbBox">
            <li>
                <a ap-click-area="EVENTLIST" ap-click-name="COLORFUL WEEK 메이크업 BEST템 30%" ap-click-data="컬러풀 위크 메이크업 BEST 모음 30%에 추가 쿠폰까지 / 2.19(월) 오전 12:00" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3387&amp;;procStat=2">
                <div class="imgBox">
                    <img class="img" src="https://images.innisfree.co.kr/upload/event/3387_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="COLORFUL WEEK 메이크업 BEST템 30%">
                </div>
                <div class="infoBox">
                    <span class="date">2.19(월) 오전 12:00</span>
                    <strong class="title">COLORFUL WEEK<br>메이크업 BEST템 30%</strong>
                    <span class="more"><span class="ir">더보기</span></span>
                </div>
                </a>
            </li>
        </ul>
        <!-- 이벤트강조형 -->
        <section class="sectionBox">
            <h2><a class="arr" ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="바로가기" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3387&amp;;procStat=2">COLORFUL WEEK  <br>메이크업 BEST템 30%</a></h2>
            <!-- 이벤트/프로모션 제품 리스트 -->
            <div class="swPbrBox">
                <div class="product_list02 proComList _autoSwiper swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
                <ul class="swiper-wrapper">
                    <!-- product_list02: thumb nail 140*186 -->
                    <li class="swiper-slide attTag swiper-slide-active">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="라이트 피팅 메이크업 베이스" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36874&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36874_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                라이트 피팅 메이크업 베이스
                            </div>
                            <div class="priceBox">
                                <strong class="price">18,200</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">26,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36874', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag swiper-slide-next">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="라이트 피팅 파운데이션" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35816&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/35816_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                NEW
                                </strong> 
                                라이트 피팅 파운데이션
                            </div>
                            <div class="priceBox">
                                <strong class="price">20,300</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">29,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('35816', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="라이트 글로우 쿠션" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35856&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/35856_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                NEW
                                </strong> 
                                라이트 글로우 쿠션
                            </div>
                            <div class="priceBox">
                                <strong class="price">18,200</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">26,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('35856', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="라이트 글로우 쿠션 [리필]" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35977&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/35977_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                NEW
                                </strong> 
                                라이트 글로우 쿠션 [리필]
                            </div>
                            <div class="priceBox">
                                <strong class="price">12,600</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">18,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('35977', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="라이트 피팅 컨실러 [다크서클 커버]" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36830&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36830_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                라이트 피팅 컨실러 [다크서클 커버]
                            </div>
                            <div class="priceBox">
                                <strong class="price">9,100</strong>                                                                                                
                                <span class="sale">30%</span>
                                <span class="cost">13,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36830', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="스컬프팅 파우더 쉐이딩" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36732&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36732_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                스컬프팅 파우더 쉐이딩
                            </div>
                            <div class="priceBox">
                                <strong class="price">10,500</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">15,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36732', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="쉬어 글로이 하이라이터" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36730&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36730_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                쉬어 글로이 하이라이터
                            </div>
                            <div class="priceBox">
                                <strong class="price">12,600</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">18,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36730', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="실키 파우더 블러쉬" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36731&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36731_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                실키 파우더 블러쉬
                            </div>
                            <div class="priceBox">
                                <strong class="price">10,500</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">15,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36731', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="에어리 매트 틴트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35157&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/35157_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                에어리 매트 틴트
                            </div>
                            <div class="priceBox">
                                <strong class="price">11,900</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">17,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('35157', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="프루티 스퀴즈 틴트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35140&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/35140_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                프루티 스퀴즈 틴트
                            </div>
                            <div class="priceBox">
                                <strong class="price">9,800</strong>                                                                                                
                                <span class="sale">30%</span>
                                <span class="cost">14,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('35140', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                </ul>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </section>
        <section class="sectionBox">
            <h2><a class="arr" ap-click-area="MAIN" ap-click-name="특가" ap-click-data="바로가기" href="https://m.innisfree.com/kr/ko/mHotdealSpcPrcMain.do?inmPromNo=175">클렌징오일/워터 2개이상 50% </a></h2>
            <!-- 이벤트/프로모션 제품 리스트 -->
            <div class="swPbrBox">
                <div class="product_list02 proComList _autoSwiper swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
                <ul class="swiper-wrapper">
                    <!-- product_list02: thumb nail 140*186 -->
                    <li class="swiper-slide attTag swiper-slide-active">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="특가" ap-click-data="그린티 아미노 수분 클렌징 오일" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36720&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36720_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                그린티 아미노 수분 클렌징 오일
                            </div>
                            <div class="priceBox">
                                <strong class="price">12,000</strong>                                                                                               
                                <span class="sale">~50%</span>
                                <span class="cost">24,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36720', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag swiper-slide-next">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="특가" ap-click-data="화산송이 모공 바하 클렌징 오일" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=33260&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/33260_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                화산송이 모공 바하 클렌징 오일
                            </div>
                            <div class="priceBox">
                                <strong class="price">11,500</strong>                                                                                               
                                <span class="sale">~50%</span>
                                <span class="cost">23,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('33260', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="특가" ap-click-data="애플씨드 클렌징 오일" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35216&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/35216_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                애플씨드 클렌징 오일
                            </div>
                            <div class="priceBox">
                                <strong class="price">10,500</strong>                                                                                               
                                <span class="sale">~50%</span>
                                <span class="cost">21,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('35216', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="특가" ap-click-data="그린티 아미노 수분 클렌징 워터" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34512&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34512_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                그린티 아미노 수분 클렌징 워터
                            </div>
                            <div class="priceBox">
                                <strong class="price">9,000</strong>                                                                                                
                                <span class="sale">~50%</span>
                                <span class="cost">18,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34512', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                </ul>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </section>
        <section class="sectionBox">
            <h2><a class="arr" ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="바로가기" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3374&amp;;procStat=2">피부 갈증 주의보 발령!  <br>7일만에 피부 건조 해결하기</a></h2>
            <!-- 이벤트/프로모션 제품 리스트 -->
            <div class="swPbrBox">
                <div class="product_list02 proComList _autoSwiper swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
                <ul class="swiper-wrapper">
                    <!-- product_list02: thumb nail 140*186 -->
                    <li class="swiper-slide attTag swiper-slide-active">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 씨드 히알루론산 크림" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35278&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/35278_l_S_140.png?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                그린티 씨드 히알루론산 크림
                            </div>
                            <div class="priceBox">
                                <strong class="price">1,000</strong>                                                                                                
                                <span class="sale">94%</span>
                                <span class="cost">18,000</span>
                            </div>
                            <div class="stickerBox">
                                <span class="sticker03">천원딜 전용</span>
                                <span class="sticker03">첫구매천원딜</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('35278', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag swiper-slide-next">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 씨드 세럼 80mL + 리필 80mL" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36741&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36741_p_S_140.png?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                그린티 씨드 세럼 80mL + 리필 80mL
                            </div>
                            <div class="priceBox">
                                <strong class="price">39,200</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">56,000</span>
                            </div>
                            <div class="stickerBox">
                                <span class="sticker01">증정</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36741', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 씨드 세럼 80mL+ 씨드 크림 50mL" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36791&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36791_p_S_140.png?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                그린티 씨드 세럼 80mL+ 씨드 크림 50mL
                            </div>
                            <div class="priceBox">
                                <strong class="price">37,700</strong>                                                                                               
                                <span class="sale">35%</span>
                                <span class="cost">58,000</span>
                            </div>
                            <div class="stickerBox">
                                <span class="sticker01">증정</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36791', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 히알루론산 스킨케어 2종 세트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36056&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36056_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                그린티 히알루론산 스킨케어 2종 세트
                            </div>
                            <div class="priceBox">
                                <strong class="price">27,740</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">38,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36056', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 씨드 히알루론산 크림" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34510&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34510_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                그린티 씨드 히알루론산 크림
                            </div>
                            <div class="priceBox">
                                <strong class="price">20,250</strong>                                                                                               
                                <span class="sale">25%</span>
                                <span class="cost">27,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34510', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 히알루론산 스킨" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34508&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34508_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                그린티 히알루론산 스킨
                            </div>
                            <div class="priceBox">
                                <strong class="price">13,140</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">18,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34508', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 히알루론산 로션" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34509&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34509_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                그린티 히알루론산 로션
                            </div>
                            <div class="priceBox">
                                <strong class="price">14,600</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">20,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34509', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 히알루론산 미스트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34861&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34861_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                그린티 히알루론산 미스트
                            </div>
                            <div class="priceBox">
                                <strong class="price">12,410</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">17,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34861', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 히알루론산 글로우 아이&amp;페이스볼" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35096&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/35096_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                그린티 히알루론산 글로우 아이&amp;페이스볼
                            </div>
                            <div class="priceBox">
                                <strong class="price">16,790</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">23,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('35096', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 씨드 히알루론산 세럼" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34116&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34116_p_S_140.png?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                그린티 씨드 히알루론산 세럼
                            </div>
                            <div class="priceBox">
                                <strong class="price">23,250</strong>                                                                                               
                                <span class="sale">25%</span>
                                <span class="cost">31,000</span>
                            </div>
                            <div class="stickerBox">
                                <span class="sticker01">증정</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34116', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                </ul>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </section>
        <!-- 이벤트강조형 -->
        <ul class="thumbBox">
            <li>
                <a ap-click-area="EVENTLIST" ap-click-name="레티놀 트러블 튜터가 주는 특별한 쿠폰 다운로드!" ap-click-data="트러블튜터 령령이 주는 특별한 쿠폰 지금 다운로드! / 1.1(월) 오전 12:00" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3350&amp;;procStat=2">
                <div class="imgBox">
                    <img class="img" src="https://images.innisfree.co.kr/upload/event/3350_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="레티놀 트러블 튜터가 주는 특별한 쿠폰 다운로드!">
                </div>
                <div class="infoBox">
                    <span class="date">1.1(월) 오전 12:00</span>
                    <strong class="title">레티놀 트러블 튜터가 주는<br>특별한 쿠폰 다운로드!</strong>
                    <span class="more"><span class="ir">더보기</span></span>
                </div>
                </a>
            </li>
        </ul>
        <!-- 이벤트강조형 -->
        <section class="sectionBox">
            <h2><a class="arr" ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="바로가기" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3380&amp;;procStat=2">카테고리별 특가템 ~50% </a></h2>
            <!-- 이벤트/프로모션 제품 리스트 -->
            <div class="swPbrBox">
                <div class="product_list02 proComList _autoSwiper swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
                <ul class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1191.73px, 0px, 0px);">
                    <!-- product_list02: thumb nail 140*186 -->
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="블랙티 유스 인핸싱 스킨케어 세트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34617&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34617_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                블랙티 유스 인핸싱 스킨케어 세트
                            </div>
                            <div class="priceBox">
                                <strong class="price">37,960</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">52,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34617', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="블랙티 유스 인핸싱 스킨" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34500&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34500_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                블랙티 유스 인핸싱 스킨
                            </div>
                            <div class="priceBox">
                                <strong class="price">18,250</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">25,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34500', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="블랙티 유스 인핸싱 로션" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34501&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34501_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                블랙티 유스 인핸싱 로션
                            </div>
                            <div class="priceBox">
                                <strong class="price">19,710</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">27,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34501', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="블랙티 유스 인핸싱 크림" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34502&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34502_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                블랙티 유스 인핸싱 크림
                            </div>
                            <div class="priceBox">
                                <strong class="price">24,820</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">34,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34502', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="블랙티 유스 인핸싱 오일" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34616&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34616_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                블랙티 유스 인핸싱 오일
                            </div>
                            <div class="priceBox">
                                <strong class="price">29,200</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">40,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34616', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="블랙티 유스 인핸싱 트리트먼트 에센스" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34499&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34499_l_S_140.png?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                블랙티 유스 인핸싱 트리트먼트 에센스
                            </div>
                            <div class="priceBox">
                                <strong class="price">32,850</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">45,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34499', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag swiper-slide-prev">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="블랙티 유스 인핸싱 트리트먼트 에센스 [소용량]" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34498&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34498_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                블랙티 유스 인핸싱 트리트먼트 에센스 [소용량]
                            </div>
                            <div class="priceBox">
                                <strong class="price">19,710</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">27,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34498', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag swiper-slide-active">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 히알루론산 스킨케어 2종 세트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36056&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/36056_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                그린티 히알루론산 스킨케어 2종 세트
                            </div>
                            <div class="priceBox">
                                <strong class="price">27,740</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">38,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36056', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag swiper-slide-next">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 히알루론산 스킨" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34508&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34508_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                그린티 히알루론산 스킨
                            </div>
                            <div class="priceBox">
                                <strong class="price">13,140</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">18,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34508', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <!-- 장바구니 있을 경우 : attTag -->
                        <a ap-click-area="MAIN" ap-click-name="이벤트" ap-click-data="그린티 히알루론산 로션" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34509&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img"><img src="https://images.innisfree.co.kr/upload/product/34509_l_S_140.jpg?T202402200927" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
                            <!-- 140*186 -->
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                그린티 히알루론산 로션
                            </div>
                            <div class="priceBox">
                                <strong class="price">14,600</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">20,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34509', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                </ul>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </section>
        <div class="sectionBox">
            <h2><a href="https://m.innisfree.com/kr/ko/mBestSellerList.do" class="arr" ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="바로가기">지금 제일 잘나가요<em class="liveTime"> 09:20</em></a></h2>
            <div class="swPbrBox">
                <div class="tabBar">
                <ul>
                    <!-- <li class="active"><button type="button" value="ZZ" onclick="javascript:dynamicRank($(this).val())">전체</button></li> -->
                    <li class="active">
                        <button type="button" value="ZZ" onclick="javascript:dynamicRank($(this).val())" ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="전체">전체</button>
                    </li>
                    <li class="">
                        <button type="button" value="UA" onclick="javascript:dynamicRank($(this).val())" ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="스킨케어">스킨케어</button>
                    </li>
                    <li class="">
                        <button type="button" value="QW" onclick="javascript:dynamicRank($(this).val())" ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="메이크업">메이크업</button>
                    </li>
                    <li class="">
                        <button type="button" value="QF" onclick="javascript:dynamicRank($(this).val())" ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="헤어/바디/펫">헤어/바디/펫</button>
                    </li>
                    <li class="">
                        <button type="button" value="UK" onclick="javascript:dynamicRank($(this).val())" ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="미용소품">미용소품</button>
                    </li>
                </ul>
                </div>
                <div class="rankingCont swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                    <li class="swiper-slide swiper-slide-active" style="width: 430px;">
                        <ul class="product_list04 swiper-slide">
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="1 그린티 씨드 히알루론산 크림" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34510">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">1</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/34510_l_S_90.jpg?T20240219000000" alt="그린티 씨드 히알루론산 크림" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        그린티 씨드 히알루론산 크림
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">20,250</strong>                                                                                               
                                        <span class="sale">25%</span>
                                        <span class="cost">27,000</span>
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('34510', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="2 레티놀 시카 앰플[대용량] 50mL + 레티놀 시카 크림 50mL" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36436">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">2</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/36436_p_S_90.png?T20240219111536" alt="레티놀 시카 앰플[대용량] 50mL + 레티놀 시카 크림 50mL" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        레티놀 시카 앰플[대용량] 50mL + 레티놀 시카 크림 50mL
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">69,000</strong>                                                                                               
                                        <span class="sale">25%</span>
                                        <span class="cost">92,000</span>
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('36436', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="3 화산송이 모공 바하 클렌징 오일" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=33260">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">3</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/33260_l_S_90.jpg?T20240212235900" alt="화산송이 모공 바하 클렌징 오일" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        화산송이 모공 바하 클렌징 오일
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">11,500</strong>                                                                                               
                                        <span class="sale">~50%</span>
                                        <span class="cost">23,000</span>
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('33260', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="4 애플씨드 클렌징 오일" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35216">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">4</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/35216_l_S_90.jpg?T20240130111406" alt="애플씨드 클렌징 오일" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        애플씨드 클렌징 오일
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">10,500</strong>                                                                                               
                                        <span class="sale">~50%</span>
                                        <span class="cost">21,000</span>
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('35216', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="5 포레스트 포맨  올인원 에센스" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35097">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">5</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/35097_l_S_90.jpg?T20240219000000" alt="포레스트 포맨  올인원 에센스" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        포레스트 포맨  올인원 에센스
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">23,200</strong>                                                                                               
                                        <span class="sale">20%</span>
                                        <span class="cost">29,000</span>
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('35097', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li class="swiper-slide swiper-slide-next" style="width: 430px;">
                        <ul class="product_list04 swiper-slide">
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="6 콜라겐 그린티 세라마이드 탄력장벽 크림" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36831">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">6</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/36831_p_S_90.png?T20240219130143" alt="콜라겐 그린티 세라마이드 탄력장벽 크림" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        콜라겐 그린티 세라마이드 탄력장벽 크림
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">29,250</strong>                                                                                               
                                        <span class="sale">25%</span>
                                        <span class="cost">39,000</span>
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('36831', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="7 그린티 히알루론산 스킨케어 2종 세트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36056">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">7</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/36056_l_S_90.jpg?T20240219000000" alt="그린티 히알루론산 스킨케어 2종 세트" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        그린티 히알루론산 스킨케어 2종 세트
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">27,740</strong>                                                                                               
                                        <span class="sale">27%</span>
                                        <span class="cost">38,000</span>
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('36056', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="8 블랙티 유스 인핸싱 스킨케어 세트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34617">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">8</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/34617_l_S_90.jpg?T20240218235900" alt="블랙티 유스 인핸싱 스킨케어 세트" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        블랙티 유스 인핸싱 스킨케어 세트
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">37,960</strong>                                                                                               
                                        <span class="sale">27%</span>
                                        <span class="cost">52,000</span>
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('34617', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="9 그린티 씨드 세럼 80mL + 리필 80mL" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36741">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">9</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/36741_p_S_90.png?T20240213003307" alt="그린티 씨드 세럼 80mL + 리필 80mL" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        그린티 씨드 세럼 80mL + 리필 80mL
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">39,200</strong>                                                                                               
                                        <span class="sale">30%</span>
                                        <span class="cost">56,000</span>
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('36741', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                            <li>
                            <a ap-click-area="MAIN" ap-click-name="실시간베스트" ap-click-data="10 퍼펙트 9 인텐시브 스킨케어 세트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34721">
                                <div class="nail">
                                    <div class="sticker">
                                        <span class="sticker05">10</span>
                                    </div>
                                    <div class="img">
                                        <img src="https://images.innisfree.co.kr/upload/product/34721_l_S_90.jpg?T20240218235900" alt="퍼펙트 9 인텐시브 스킨케어 세트" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <strong>
                                        BEST
                                        </strong> 
                                        퍼펙트 9 인텐시브 스킨케어 세트
                                    </div>
                                    <div class="priceBox">
                                        <strong class="price">74,000</strong>                                                                                               
                                    </div>
                                </div>
                            </a>
                            <div class="btnIconBox">
                                <button type="button" class="btnCart" onclick="javascript:openPreview('34721', 'mCART');"><span class="ir">장바구니</span></button>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li class="swiper-slide" id="rankList1_UA" style="width: 430px;">
                    </li>
                    <li class="swiper-slide" id="rankList2_UA" style="width: 430px;">
                    </li>
                    <div id="rankList_new_UA"></div>
                    <li class="swiper-slide" id="rankList1_QW" style="width: 430px;">
                    </li>
                    <li class="swiper-slide" id="rankList2_QW" style="width: 430px;">
                    </li>
                    <div id="rankList_new_QW"></div>
                    <li class="swiper-slide" id="rankList1_QF" style="width: 430px;">
                    </li>
                    <li class="swiper-slide" id="rankList2_QF" style="width: 430px;">
                    </li>
                    <div id="rankList_new_QF"></div>
                    <li class="swiper-slide" id="rankList1_UK" style="width: 430px;">
                    </li>
                    <li class="swiper-slide" id="rankList2_UK" style="width: 430px;">
                    </li>
                    <div id="rankList_new_UK"></div>
                </ul>
                <div class="rankingPage">
                    <span class="dot active"><em class="ir">1</em></span>
                    <span class="dot" id="dot2"><em class="ir">2</em></span>
                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </div>
        <!--// ranking : 변경사항 적용 -->
        <div class="sectionBox evt">
            <!-- event -->
            <ul class="evtComList">
                <li class="item">
                <a ap-click-area="MAIN" ap-click-name="이벤트리스트" ap-click-data="콜라겐 세라마이드 크림으로  촉촉 보습 탄력 케어!" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3376&amp;;procStat=1">
                    <span class="sticker04">쇼핑혜택</span>
                    <div class="evtImg">
                        <img class="img" src="https://images.innisfree.co.kr/upload/event/3376_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="콜라겐 세라마이드 크림으로  촉촉 보습 탄력 케어!">
                    </div>
                    <div class="cnt-area">
                        <div class="name name_1">콜라겐 크림으로</div>
                        <div class="name name_1">촉촉 보습 탄력!</div>
                        <div class="name name_2">30mL 및 괄사 증정</div>
                        <div class="date">24.2.19(월)  ~ 24.2.28(수) </div>
                    </div>
                </a>
                </li>
            </ul>
            <!--// event -->
        </div>
        <div class="sectionBox evt">
            <!-- event -->
            <ul class="evtComList">
                <li class="item">
                <a ap-click-area="MAIN" ap-click-name="이벤트리스트" ap-click-data="겨울철 쫀쫀광 피부 블랙티 앰플 최대 30%할인!" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3331&amp;;procStat=2">
                    <span class="sticker04">쇼핑혜택</span>
                    <div class="evtImg">
                        <img class="img" src="https://images.innisfree.co.kr/upload/event/3331_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="겨울철 쫀쫀광 피부 블랙티 앰플 최대 30%할인!">
                    </div>
                    <div class="cnt-area">
                        <div class="name name_1">겨울철 쫀쫀광 피부</div>
                        <div class="name name_1">블랙티 앰플</div>
                        <div class="name name_2">최대 30% 할인!</div>
                        <div class="date">24.2.19(월)  ~ 24.2.21(수) </div>
                    </div>
                </a>
                </li>
            </ul>
            <!--// event -->
        </div>
        <div class="sectionBox evt">
            <!-- event -->
            <ul class="evtComList">
                <li class="item">
                <a ap-click-area="MAIN" ap-click-name="이벤트리스트" ap-click-data="피부 갈증 주의보 발령! 7일만에 피부 건조 해결하기" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3374&amp;;procStat=2">
                    <span class="sticker04">쇼핑혜택</span>
                    <div class="evtImg">
                        <img class="img" src="https://images.innisfree.co.kr/upload/event/3374_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="피부 갈증 주의보 발령! 7일만에 피부 건조 해결하기">
                    </div>
                    <div class="cnt-area">
                        <div class="name name_1">일주일 후 체감하는</div>
                        <div class="name name_1">달라진 피부 컨디션</div>
                        <div class="name name_2">그린티 히알루론산 세럼</div>
                        <div class="date">24.2.1(목)  ~ 24.2.28(수) </div>
                    </div>
                </a>
                </li>
            </ul>
            <!--// event -->
        </div>
        <div class="sectionBox evt">
            <!-- event -->
            <ul class="evtComList">
                <li class="item">
                <a ap-click-area="MAIN" ap-click-name="이벤트리스트" ap-click-data="디렉터파이S PICK 비타C 잡티 토닝 세럼" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3373&amp;;procStat=2">
                    <span class="sticker04">쇼핑혜택</span>
                    <div class="evtImg">
                        <img class="img" src="https://images.innisfree.co.kr/upload/event/3373_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="디렉터파이S PICK 비타C 잡티 토닝 세럼">
                    </div>
                    <div class="cnt-area">
                        <div class="name name_1">디렉터파이S PICK</div>
                        <div class="name name_1">1등 신상 잡티 세럼</div>
                        <div class="name name_2">비타C 잡티 토닝 세럼</div>
                        <div class="date">24.2.19(월)  ~ 24.2.28(수) </div>
                    </div>
                </a>
                </li>
            </ul>
            <!--// event -->
        </div>
        <div class="sectionBox evt">
            <!-- event -->
            <ul class="evtComList">
                <li class="item">
                <a ap-click-area="MAIN" ap-click-name="이벤트리스트" ap-click-data="공식몰 판매 1위 레티놀 시카 사은품 + 리뷰이벤트" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3375&amp;;procStat=2">
                    <span class="sticker04">쇼핑혜택</span>
                    <div class="evtImg">
                        <img class="img" src="https://images.innisfree.co.kr/upload/event/3375_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="공식몰 판매 1위 레티놀 시카 사은품 + 리뷰이벤트">
                    </div>
                    <div class="cnt-area">
                        <div class="name name_1">공식몰 판매 1위</div>
                        <div class="name name_1">레티놀 시카</div>
                        <div class="name name_2">앰플+크림 듀오</div>
                        <div class="date">24.2.19(월)  ~ 24.2.28(수) </div>
                    </div>
                </a>
                </li>
            </ul>
            <!--// event -->
        </div>
        <!-- 이벤트강조형 -->
        <ul class="thumbBox">
            <li>
                <a ap-click-area="EVENTLIST" ap-click-name="붙이는비타C세럼 입고알림 이벤트" ap-click-data="붙이는비타C세럼 입고알림 누르고 쿠폰 받으세요! / 2.13(화) 오전 12:00" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3413&amp;;procStat=2">
                <div class="imgBox">
                    <img class="img" src="https://images.innisfree.co.kr/upload/event/3413_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="붙이는비타C세럼 입고알림 이벤트">
                    <span class="tag">
                    체험단 
                    </span>
                </div>
                <div class="infoBox">
                    <span class="date">2.13(화) 오전 12:00</span>
                    <strong class="title">붙이는비타C세럼<br>입고알림 이벤트</strong>
                    <span class="more"><span class="ir">더보기</span></span>
                </div>
                </a>
            </li>
        </ul>
        <!-- 이벤트강조형 -->
        <!-- 이벤트강조형 -->
        <ul class="thumbBox">
            <li>
                <a ap-click-area="EVENTLIST" ap-click-name="디아일 어드벤처 이니스프리 X  스티븐해링턴!" ap-click-data="디아일 어드벤처 이니스프리 x 스티븐 해링턴 / 2.13(화) 오전 12:00" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3412&amp;;procStat=2">
                <div class="imgBox">
                    <img class="img" src="https://images.innisfree.co.kr/upload/event/3412_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="디아일 어드벤처 이니스프리 X  스티븐해링턴!">
                </div>
                <div class="infoBox">
                    <span class="date">2.13(화) 오전 12:00</span>
                    <strong class="title">디아일 어드벤처 이니스프리 X<br> 스티븐해링턴!</strong>
                    <span class="more"><span class="ir">더보기</span></span>
                </div>
                </a>
            </li>
        </ul>
        <!-- 이벤트강조형 -->
        <div class="sectionBox evt">
            <!-- event -->
            <ul class="evtComList">
                <li class="item">
                <a ap-click-area="MAIN" ap-click-name="이벤트리스트" ap-click-data="블루베리 라인 2개 구매 시 뷰티포인트 2,000점 적립" href="https://m.innisfree.com/kr/ko/joinEvent/mViewJoinEvent.do?eventSeq=82">
                    <span class="sticker04">쇼핑혜택</span>
                    <div class="evtImg">
                        <img class="img" src="https://images.innisfree.co.kr/upload/event/3416_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="블루베리 라인 2개 구매 시 뷰티포인트 2,000점 적립">
                    </div>
                    <div class="cnt-area">
                        <div class="name name_1">블루베리 라인 </div>
                        <div class="name name_1">2개 이상 구매 시</div>
                        <div class="name name_2">뷰티포인트 2,000점</div>
                        <div class="date">24.2.13(화)  ~ 24.2.29(목) </div>
                    </div>
                </a>
                </li>
            </ul>
            <!--// event -->
        </div>
        <div class="sectionBox evt">
            <!-- event -->
            <ul class="evtComList">
                <li class="item">
                <a ap-click-area="MAIN" ap-click-name="이벤트리스트" ap-click-data="이니스프리 사고 그린카 타자~!" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3388&amp;;procStat=2">
                    <span class="sticker04">쇼핑혜택</span>
                    <div class="evtImg">
                        <img class="img" src="https://images.innisfree.co.kr/upload/event/3388_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="이니스프리 사고 그린카 타자~!">
                    </div>
                    <div class="cnt-area">
                        <div class="name name_1">이니스프리</div>
                        <div class="name name_1">사고</div>
                        <div class="name name_2">그린카 타자~!</div>
                        <div class="date">24.2.13(화)  ~ 24.2.29(목) </div>
                    </div>
                </a>
                </li>
            </ul>
            <!--// event -->
        </div>
        <div class="sectionBox evt">
            <!-- event -->
            <ul class="evtComList">
                <li class="item">
                <a ap-click-area="MAIN" ap-click-name="이벤트리스트" ap-click-data="앱푸시 동의 시 추가할인!" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=2824&amp;;procStat=2">
                    <span class="sticker04">쇼핑혜택</span>
                    <div class="evtImg">
                        <img class="img" src="https://images.innisfree.co.kr/upload/event/2824_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="앱푸시 동의 시 추가할인!">
                    </div>
                    <div class="cnt-area">
                        <div class="name name_1">앱푸시 동의 시</div>
                        <div class="name name_1">1,000원 추가할인</div>
                        <div class="name name_2">+ 10% 할인</div>
                        <div class="date">23.3.1(수)  ~ 24.12.31(화) </div>
                    </div>
                </a>
                </li>
            </ul>
            <!--// event -->
        </div>
        <div class="sectionBox evt">
            <!-- event -->
            <ul class="evtComList">
                <li class="item">
                <a ap-click-area="MAIN" ap-click-name="이벤트리스트" ap-click-data="지금 신규 가입하면? 70,000원 쿠폰팩을 드려요" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=2181&amp;;procStat=2">
                    <span class="sticker04">쇼핑혜택</span>
                    <div class="evtImg">
                        <img class="img" src="https://images.innisfree.co.kr/upload/event/2181_0.jpg?T202402200927" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="지금 신규 가입하면? 70,000원 쿠폰팩을 드려요">
                    </div>
                    <div class="cnt-area">
                        <div class="name name_1">첫 구매를 더 즐겁게</div>
                        <div class="name name_1">신규 가입 시,</div>
                        <div class="name name_2">70,000원 쿠폰팩</div>
                        <div class="date">21.7.1(목)  ~ 24.12.31(화) </div>
                    </div>
                </a>
                </li>
            </ul>
            <!--// event -->
        </div>
        <!-- recommend -->
        <div class="sectionBox">
            <h2><a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="바로가기" href="https://m.innisfree.com/kr/ko/mForuMain.do" class="arr">이 제품 어때요?</a></h2>
            <div class="swPbrBox">
                <div class="proComList _autoSwiper swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-ios">
                <ul class="product_list02 swiper-wrapper">
                    <!-- product_list02: thumb nail 140*186 --> 
                    <li class="swiper-slide attTag swiper-slide-active">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 유스 인핸싱 앰플 스페셜 세트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34503&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/34503_l1_S_240.jpg?T20240219091647" alt="블랙티 유스 인핸싱 앰플 스페셜 세트" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                블랙티 유스 인핸싱 앰플 스페셜 세트
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">42,000</strong>                                                                                               
                                <span class="sale">25%</span>
                                <span class="cost">56,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('#블랙티앰플대용량세트', 'Y');">#블랙티앰플대용량세트</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34503', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag swiper-slide-next">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 유스 인핸싱 앰플" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34496&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/34496_l1_S_240.jpg?T20240219000000" alt="블랙티 유스 인핸싱 앰플" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                블랙티 유스 인핸싱 앰플
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">28,500</strong>                                                                                               
                                <span class="sale">25%</span>
                                <span class="cost">38,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('#항산화안티에이징앰플', 'Y');">#항산화안티에이징앰플</button>
                            <button type="button" onclick="_head_top_search_hash('#안티에이징앰플', 'Y');">#안티에이징앰플</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34496', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="에어리 매트 틴트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35157&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/35157_l1_S_240.jpg?T20240219000000" alt="에어리 매트 틴트" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                에어리 매트 틴트
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">11,900</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">17,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('#매트틴트', 'Y');">#매트틴트</button>
                            <button type="button" onclick="_head_top_search_hash(' #매트립 ', 'Y');"> #매트립 </button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('35157', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 유스 인핸싱 트리트먼트 에센스" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34499&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/34499_l1_S_240.jpg?T20240219000000" alt="블랙티 유스 인핸싱 트리트먼트 에센스" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                블랙티 유스 인핸싱 트리트먼트 에센스
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">32,850</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">45,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('항산화워터에센스', 'Y');">항산화워터에센스</button>
                            <button type="button" onclick="_head_top_search_hash('워터에센스', 'Y');">워터에센스</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34499', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 유스 인핸싱 스킨케어 세트" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34617&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/34617_l1_S_240.jpg?T20240218235900" alt="블랙티 유스 인핸싱 스킨케어 세트" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                블랙티 유스 인핸싱 스킨케어 세트
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">37,960</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">52,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('#블랙티스킨로션세트', 'Y');">#블랙티스킨로션세트</button>
                            <button type="button" onclick="_head_top_search_hash('#스킨로션세트', 'Y');">#스킨로션세트</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34617', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 유스 인핸싱 크림" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34502&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/34502_l1_S_240.jpg?T20240219000000" alt="블랙티 유스 인핸싱 크림" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                블랙티 유스 인핸싱 크림
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">24,820</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">34,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('안티에이징크림', 'Y');">안티에이징크림</button>
                            <button type="button" onclick="_head_top_search_hash('탄력', 'Y');">탄력</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34502', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="한란 아이 크림" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36786&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/36786_l1_S_240.jpg?T20240218235901" alt="한란 아이 크림" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                한란 아이 크림
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">30,000</strong>                                                                                               
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('#탄탄눈가 ', 'Y');">#탄탄눈가 </button>
                            <button type="button" onclick="_head_top_search_hash('#영양크림 ', 'Y');">#영양크림 </button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36786', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 유스 앰플 30mL + 블랙티 에센스 75mL" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=37046&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/37046_l_S_240.jpg?T20240219000119" alt="블랙티 유스 앰플 30mL + 블랙티 에센스 75mL" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                블랙티 유스 앰플 30mL + 블랙티 에센스 75mL
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">45,500</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">65,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('#항산화안티에이징앰플', 'Y');">#항산화안티에이징앰플</button>
                            <button type="button" onclick="_head_top_search_hash('#안티에이징앰플', 'Y');">#안티에이징앰플</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('37046', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 앰플 50mL[대용량] 스페셜 세트 + 블랙티 크림 50mL" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=37050&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/37050_l_S_240.png?T20240219001151" alt="블랙티 앰플 50mL[대용량] 스페셜 세트 + 블랙티 크림 50mL" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                블랙티 앰플 50mL[대용량] 스페셜 세트 + 블랙티 크림 50mL
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">63,000</strong>                                                                                               
                                <span class="sale">30%</span>
                                <span class="cost">90,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('#항산화안티에이징앰플', 'Y');">#항산화안티에이징앰플</button>
                            <button type="button" onclick="_head_top_search_hash('#안티에이징앰플', 'Y');">#안티에이징앰플</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('37050', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="한란 인리치드 크림" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36785&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/36785_l1_S_240.jpg?T20240218235901" alt="한란 인리치드 크림" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                한란 인리치드 크림
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">30,000</strong>                                                                                               
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('#멀티안티에이징크림', 'Y');">#멀티안티에이징크림</button>
                            <button type="button" onclick="_head_top_search_hash(' #탄력 ', 'Y');"> #탄력 </button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('36785', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 유스 인핸싱 스킨" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34500&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/34500_l1_S_240.jpg?T20240219000000" alt="블랙티 유스 인핸싱 스킨" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                블랙티 유스 인핸싱 스킨
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">18,250</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">25,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('탄력수분', 'Y');">탄력수분</button>
                            <button type="button" onclick="_head_top_search_hash('안티에이징스킨', 'Y');">안티에이징스킨</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34500', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 유스 인핸싱 로션" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34501&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/34501_l1_S_240.jpg?T20240219000000" alt="블랙티 유스 인핸싱 로션" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                </strong> 
                                블랙티 유스 인핸싱 로션
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">19,710</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">27,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('탄력윤기 ', 'Y');">탄력윤기 </button>
                            <button type="button" onclick="_head_top_search_hash('안티에이징로션', 'Y');">안티에이징로션</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34501', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                    <li class="swiper-slide attTag">
                        <a ap-click-area="MAIN" ap-click-name="포미" ap-click-data="블랙티 유스 인핸싱 오일" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34616&amp;rccode=mo_main1">
                            <div class="nail">
                            <div class="img">
                                <img src="https://images.innisfree.co.kr/upload/product/34616_l1_S_240.jpg?T20240219000000" alt="블랙티 유스 인핸싱 오일" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'">
                            </div>
                            </div>
                            <div class="info">
                            <div class="name">
                                <strong>
                                BEST
                                </strong> 
                                블랙티 유스 인핸싱 오일
                            </div>
                            <div class="priceBox"> 
                                <strong class="price">29,200</strong>                                                                                               
                                <span class="sale">27%</span>
                                <span class="cost">40,000</span>
                            </div>
                            </div>
                        </a>
                        <div class="hashBox">
                            <button type="button" onclick="_head_top_search_hash('#안티에이징오일', 'Y');">#안티에이징오일</button>
                            <button type="button" onclick="_head_top_search_hash('#비건오일', 'Y');">#비건오일</button>
                        </div>
                        <div class="btnIconBox">
                            <button type="button" class="btnCart" onclick="javascript:openPreview('34616', 'mCART');"><span class="ir">장바구니</span></button>
                        </div>
                    </li>
                </ul>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!-- recommend -->
    </div>
    <!-- //body -->

    <footer class="iFooter">
        <img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/logo_innisfree_gray.png" alt="" class="logoFooter">
        <div class="txtWarning">
            본 사이트와 앱의 모든 정보, 콘텐츠, UI등에 대한 무단 복제, 전송, 배포<br>
            스크래핑 등의 행위는 관련 법령에 의하여 엄격히 금지됩니다.<br>
            Copyright ©2023 이니스프리. All Rights Reserved
        </div>
        <nav class="navUpper">
            <a href="https://m.innisfree.com/kr/ko/mDirectPageAboutUs.do"><span>Be free with INNISFREE</span></a>
            <a href="https://m.innisfree.com/kr/ko/mMypageOnlineOrderList.do"><span>나의 주문내역</span></a>
            <a href="https://m.innisfree.com/kr/ko/mNtcList.do"><span>공지사항</span></a>
            <a href=";" onclick="$.jhead.fnChkLogin();return false;"><span>로그인 / 회원가입</span></a>
            <a href="tel:0803800114"><span>고객센터 : 080-380-0114 (수신자요금부담)</span></a>
        </nav>
        <nav class="navLower">
            <a href="javascript:void(0);" onclick="removeTopBtn();termsOpen('이용약관', 'termsService'); return false;"><span>이용약관</span></a>
            <a href="https://m.innisfree.com/kr/ko/mPrivacyNoti.do"><span>개인정보처리방침</span></a>
            <a href="javascript:void(0);" onclick="removeTopBtn();termsOpen('영상기기관리방침', 'terms20'); return false;"><span>영상기기관리방침</span></a>
            <a href="javascript:void(0);" onclick="removeTopBtn();termsOpen('위치기반서비스 이용약관', 'terms21'); return false;">위치기반서비스 이용약관</a>
            <a href="https://www.ftc.go.kr/bizCommPop.do?key=232&amp;wrkr_no=1068668127" target="_blank" rel="noopener"><span>사업자정보확인</span></a>
            <a href="javascript:void(0);" onclick="removeTopBtn();layerOpen('showProv')"><span>약관및법적고지확인</span></a>
        </nav>
        <ul class="snsIcon">
            <li><a href="https://twitter.com/innisfree_kr" class="twitter"><span class="ir">트위터</span></a></li>
            <li><a href="https://m.facebook.com/innisfreeHQ?`fref=ts" class="facebook"><span class="ir">페이스북</span></a></li>
            <li><a href="https://www.instagram.com/innisfreeofficial/" class="instagram"><span class="ir">인스타그램</span></a></li>
            <li><a href="https://m.youtube.com/user/ecoinnisfree11" class="youtube"><span class="ir">유투브</span></a></li>
            <li><button type="button" onclick="appDownLoad();" class="app"><span class="ir">APP 다운로드</span></button></li>
        </ul>
        <!-- /* 수상마크 추가작업건 ITO0101-3869 */ -->
        <div class="awards">
            <span class="web2023"><span class="txt">웹어워드 2023<br>모바일마케팅부문 통합대상</span></span>
            <span class="smart2023"><span class="txt">스마트앱어워드 2023<br>브랜드부문 통합대상</span></span>
            <span class="smart2022"><span class="txt">스마트앱어워드 2022 <br>브랜드부문 통합대상</span></span>
        </div>
    </footer>
    <!-- //footer -->
</template>
<script>

</script>
<style lang="">
	
</style>