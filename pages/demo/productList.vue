<template>
	<header class="iHeader">
		<h1><a ap-click-area="MAIN" ap-click-name="상단" ap-click-data="INNISFREE" href="https://m.innisfree.com/kr/ko/mMain.do"><span class="ir">innisfree</span></a></h1>
		<div class="headerAside">
			<button type="button" class="btn_back" onclick="javascript:history.back();"><span class="ir">이전 페이지로 이동</span></button>
			<h2 class="hTitle"><button type="button" class="btnNav _btnNav" data-target-id="btmNav">스킨케어</button></h2>
		</div>
		<div class="myBox">	
			<button type="button" class="btn_search" onclick="location.href='https://m.innisfree.com/kr/ko/mSearchMain.do'" ap-click-area="MAIN" ap-click-name="상단" ap-click-data="검색"><span class="ir">검색</span></button>	
			<button type="button" class="btn_cart" ap-click-area="MAIN" ap-click-name="상단" ap-click-data="장바구니"><span class="ir">장바구니</span><span id="cartCntTxt" class="count">0</span><span class="ir">개 상품</span></button>
		</div>
	</header>
	<!-- 공통 NAV bottom -->
	<nav class="headerNav" id="btmNav">
		<div class="dimmed"></div>
		<div class="innerBox">
			<button type="button" class="btnClose"><span class="ir">메뉴 닫힘</span></button>
			<!-- 카테고리 --><!-- 현재메뉴 current -->
			<ul class="navList">
				<li class="current">
				<button ap-click-area="MAIN" ap-click-name="GNB" data-title="스킨케어" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA'"><span>스킨케어</span></button>
				</li>
				<li>
				<button ap-click-area="MAIN" ap-click-name="GNB" data-title="메이크업" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=QW'"><span>메이크업</span></button>
				</li>
				<li>
				<button ap-click-area="MAIN" ap-click-name="GNB" data-title="남성" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UB'"><span>남성</span></button>
				</li>
				<li>
				<button ap-click-area="MAIN" ap-click-name="GNB" data-title="헤어/바디/펫" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=QF'"><span>헤어/바디/펫</span></button>
				</li>
				<li>
				<button ap-click-area="MAIN" ap-click-name="GNB" data-title="기획 세트" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UT'"><span>기획 세트</span></button>
				</li>
				<li>
				<button ap-click-area="MAIN" ap-click-name="GNB" data-title="미용소품" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UK'"><span>미용소품</span></button>
				</li>
				<li>
				<button ap-click-area="MAIN" ap-click-name="GNB" data-title="고민별제품" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?tp=3&amp;catCd01=OG&amp;catCd02=OG'"><span>고민별제품</span></button>
				</li>
			</ul>
		</div>
	</nav>
	<div class="subWrap">
		<div class="wrapPrd">
			<div class="navCategory">
				<!-- 1depth 라인별 선택시 2depth 메뉴 히든 -->
				<ul class="list">
				<li id="prod_all" class="current">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA'">전체</button>
				</li>
				<li id="prod_UALB">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UALB'">에센스/세럼/앰플</button>
				</li>
				<li id="prod_UABQ">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UABQ'">로션/크림</button>
				</li>
				<li id="prod_UAGT">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UAGT'">스킨/토너/미스트</button>
				</li>
				<li id="prod_UADK">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UADK'">립/아이케어</button>
				</li>
				<li id="prod_UAKN">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UAKN'">선케어</button>
				</li>
				<li id="prod_UALK">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UALK'">오일/마사지</button>
				</li>
				<li id="prod_UAZM">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UAZM'">클렌징</button>
				</li>
				<li id="prod_UAWV">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UAWV'">팩/마스크</button>
				</li>
				<li id="prod_UAST">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UAST'">기획 세트</button>
				</li>
				<li id="prod_UAHH">
					<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/Product.do?catCd01=UA&amp;catCd02=UAHH'">기타</button>
				</li>
				</ul>
			</div>
			<input type="hidden" id="gradeCd" value="CA99">
			<div class="innerPrd">
				<div class="aboveList">
				<div class="case sortAll">총 <span class="count">104</span>건</div>
				<div class="grpRight">
					<button type="button" class="btnArr02 _btnNav" data-target-id="btmSorting">추천순</button>
					<nav class="headerNav" id="btmSorting">
						<div class="dimmed"></div>
						<div class="innerBox">
							<button type="button" class="btnClose"><span class="ir">메뉴 닫힘</span></button>
							<!-- 정렬 --><!-- 현재메뉴 current -->
							<ul class="navList sort">
							<li data-taget="2" class="current"><button type="button" onclick="goPage('1', '2')"><span>추천순</span></button></li>
							<li data-taget="9"><button type="button" onclick="goPage('1', '9')"><span>판매금액순</span></button></li>
							<li data-taget="3"><button type="button" onclick="goPage('1', '3')"><span>판매수량순</span></button></li>
							<li data-taget="5"><button type="button" onclick="goPage('1', '5')"><span>낮은가격순</span></button></li>
							<li data-taget="6"><button type="button" onclick="goPage('1', '6')"><span>높은가격순</span></button></li>
							<li data-taget="8"><button type="button" onclick="goPage('1', '8')"><span>최신순</span></button></li>
							<li data-taget="4"><button type="button" onclick="goPage('1', '4')"><span>리뷰많은순</span></button></li>
							</ul>
							<!--// 정렬 -->
						</div>
					</nav>
					<button type="button" class="btnCase _btnNav" data-target-id="btmSearching" data-chk-yn="Y">상세검색</button>
					<nav class="headerNav" id="btmSearching">
						<div class="dimmed"></div>
						<div class="innerBox">
							<h3 class="btmTitle">상세검색</h3>
							<button type="button" class="btnClose btnX"><span class="ir">메뉴 닫힘</span></button>
							<!-- 정렬 --><!-- 현재메뉴 current -->
							<dl class="wrapSorting">
							<dt>혜택별</dt>
							<dd>
								<ul class="dsList">
									<li>
										<label for="Benefit1">
										<input type="checkbox" name="srchP_typeArr" id="Benefit1" value="N" alt="증정" onclick="setFilter(this)">
										<span>증정</span>
										</label>
									</li>
								</ul>
							</dd>
							<dt>고민별</dt>
							<dd>
								<ul class="dsList">
									<li>
										<label for="skin1">
										<input type="checkbox" name="typArr" id="skin1" value="OG" alt="수분/보습/속건조" onclick="setFilter(this)">
										<span>수분/보습/속건조</span>
										</label>
									</li>
									<li>
										<label for="skin2">
										<input type="checkbox" name="typArr" id="skin2" value="FA" alt="영양/토탈안티에이징" onclick="setFilter(this)">
										<span>영양/토탈안티에이징</span>
										</label>
									</li>
									<li>
										<label for="skin3">
										<input type="checkbox" name="typArr" id="skin3" value="RU" alt="잡티/피부톤" onclick="setFilter(this)">
										<span>잡티/피부톤</span>
										</label>
									</li>
									<li>
										<label for="skin4">
										<input type="checkbox" name="typArr" id="skin4" value="XE" alt="모공" onclick="setFilter(this)">
										<span>모공</span>
										</label>
									</li>
									<li>
										<label for="skin5">
										<input type="checkbox" name="typArr" id="skin5" value="FB" alt="주름/탄력" onclick="setFilter(this)">
										<span>주름/탄력</span>
										</label>
									</li>
									<li>
										<label for="skin6">
										<input type="checkbox" name="typArr" id="skin6" value="QV" alt="모공/피지/블랙헤드" onclick="setFilter(this)">
										<span>모공/피지/블랙헤드</span>
										</label>
									</li>
									<li>
										<label for="skin7">
										<input type="checkbox" name="typArr" id="skin7" value="KI" alt="진정/민감" onclick="setFilter(this)">
										<span>진정/민감</span>
										</label>
									</li>
									<li>
										<label for="skin8">
										<input type="checkbox" name="typArr" id="skin8" value="XC" alt="트러블" onclick="setFilter(this)">
										<span>트러블</span>
										</label>
									</li>
									<li>
										<label for="skin9">
										<input type="checkbox" name="typArr" id="skin9" value="QR" alt="각질/피부결" onclick="setFilter(this)">
										<span>각질/피부결</span>
										</label>
									</li>
									<li>
										<label for="skin10">
										<input type="checkbox" name="typArr" id="skin10" value="WW" alt="트러블/리페어" onclick="setFilter(this)">
										<span>트러블/리페어</span>
										</label>
									</li>
								</ul>
							</dd>
							<dt>기능성</dt>
							<dd>
								<ul class="dsList">
									<li>
										<label for="fnc1">
										<input type="checkbox" name="lineCate1stArr" id="fnc1" value="FN02" alt="주름개선" onclick="setFilter(this)">
										<span>주름개선</span>
										</label>
									</li>
									<li>
										<label for="fnc2">
										<input type="checkbox" name="lineCate1stArr" id="fnc2" value="FN01" alt="자외선차단" onclick="setFilter(this)">
										<span>자외선차단</span>
										</label>
									</li>
									<li>
										<label for="fnc3">
										<input type="checkbox" name="lineCate1stArr" id="fnc3" value="FN03" alt="미백" onclick="setFilter(this)">
										<span>미백</span>
										</label>
									</li>
									<li>
										<label for="fnc4">
										<input type="checkbox" name="lineCate1stArr" id="fnc4" value="FN04" alt="비건인증" onclick="setFilter(this)">
										<span>비건인증</span>
										</label>
									</li>
								</ul>
							</dd>
							<dt>공병수거</dt>
							<dd>
								<ul class="dsList">
									<li>
										<label for="Benefit3">
										<input type="checkbox" name="lineCate2ndArr" id="Benefit3" value="IA13" alt="공병수거 가능" onclick="setFilter(this)">
										<span>공병수거 가능</span>
										</label>
									</li>
								</ul>
							</dd>
							</dl>
							<!--// 정렬 -->                                
							<div class="btmButton">
							<button type="button" class="btnPri02 icoRefresh" onclick="clearFilter();">초기화</button>
							<button type="button" class="btnPri01" onclick="goPage('1');">검색</button>
							</div>
						</div>
					</nav>
				</div>
				</div>
				<!-- 제품리스트 표시영역 -->
				<div id="prdList">
				<div class="listStyleWrap">
					<input type="hidden" name="totCount" id="totCount" value="104">
					<ul class="product_list01">
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36831">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/36831_p_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
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
								<div class="stickerBox">
									<span class="sticker01">증정</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.9 (12,759)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('36831', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('36831', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34624">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34624_l_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									</strong> 
									블랙티 유스 앰플 30mL + 블랙티 크림 50mL
								</div>
								<div class="priceBox">
									<strong class="price">50,400</strong>																								
									<span class="sale">30%</span>
									<span class="cost">72,000</span>
								</div>
								<div class="stickerBox">
									<span class="sticker01">증정</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.9 (51,414)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34624', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34624', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36056">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/36056_l_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
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
								<div class="starGrade">							
									<span class="grade">4.9 (1,026)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('36056', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('36056', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34617">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34617_l_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
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
								<div class="starGrade">							
									<span class="grade">4.8 (3,578)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34617', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34617', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36791">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/36791_p_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
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
								<div class="starGrade">							
									<span class="grade">4.9 (16,682)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('36791', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('36791', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36437">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/36437_p_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									</strong> 
									레티놀 시카 흔적 앰플 30mL + 레티놀 시카 장벽 크림 50mL
								</div>
								<div class="priceBox">
									<strong class="price">56,250</strong>																								
									<span class="sale">25%</span>
									<span class="cost">75,000</span>
								</div>
								<div class="stickerBox">
									<span class="sticker01">증정</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.8 (8,588)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('36437', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('36437', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36436">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/36436_p_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
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
								<div class="stickerBox">
									<span class="sticker01">증정</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.8 (8,588)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('36436', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('36436', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35223">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/35223_l_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
								<div class="overlay">							
									<span class="soldout"><em class="ir">일시품절</em></span>
								</div>
							</div>
							<div class="info">
								<div class="name">
									<strong>
									BEST
									</strong> 
									히알루론 수분 선크림 SPF 50+ PA++++
								</div>
								<div class="priceBox">
									<strong class="price">20,800</strong>																								
									<span class="sale">20%</span>
									<span class="cost">26,000</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.8 (21,266)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34509">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34509_l_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
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
								<div class="starGrade">							
									<span class="grade">4.8 (2,066)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34509', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34509', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34508">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34508_l_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
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
								<div class="starGrade">							
									<span class="grade">4.8 (2,714)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34508', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34508', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34506">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34506_p_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									BEST
									</strong> 
									레티놀 시카 흔적 앰플[대용량]
								</div>
								<div class="priceBox">
									<strong class="price">42,750</strong>																								
									<span class="sale">25%</span>
									<span class="cost">57,000</span>
								</div>
								<div class="stickerBox">
									<span class="sticker01">증정</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.8 (45,341)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34506', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34506', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34505">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34505_p_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									BEST
									</strong> 
									레티놀 시카 흔적 앰플
								</div>
								<div class="priceBox">
									<strong class="price">30,000</strong>																								
									<span class="sale">25%</span>
									<span class="cost">40,000</span>
								</div>
								<div class="stickerBox">
									<span class="sticker01">증정</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.8 (45,341)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34505', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34505', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34503">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34503_l_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
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
								<div class="starGrade">							
									<span class="grade">4.9 (51,414)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34503', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34503', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34502">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34502_l_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									</strong> 
									블랙티 유스 인핸싱 크림
								</div>
								<div class="priceBox">
									<strong class="price">24,820</strong>																								
									<span class="sale">27%</span>
									<span class="cost">34,000</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.8 (6,545)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34502', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34502', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34496">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34496_l_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									BEST
									</strong> 
									블랙티 유스 인핸싱 앰플
								</div>
								<div class="priceBox">
									<strong class="price">28,500</strong>																								
									<span class="sale">25%</span>
									<span class="cost">38,000</span>
								</div>
								<div class="stickerBox">
									<span class="sticker01">증정</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.9 (51,414)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34496', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34496', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36873">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/36873_l_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									</strong> 
									비타C 그린티 엔자임 잡티 토닝 세럼 기획 세트(30mL+15mL)
								</div>
								<div class="priceBox">
									<strong class="price">28,500</strong>																								
									<span class="sale">25%</span>
									<span class="cost">38,000</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.8 (15,393)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('36873', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('36873', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35256">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/35256_l_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									NEW
									</strong> 
									레티놀 시카 흔적 장벽 크림
								</div>
								<div class="priceBox">
									<strong class="price">27,300</strong>																								
									<span class="sale">22%</span>
									<span class="cost">35,000</span>
								</div>
								<div class="stickerBox">
									<span class="sticker01">증정</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.8 (8,588)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('35256', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('35256', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34896">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34896_p_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									</strong> 
									비타C 그린티 엔자임 잡티 토닝 세럼
								</div>
								<div class="priceBox">
									<strong class="price">28,500</strong>																								
									<span class="sale">25%</span>
									<span class="cost">38,000</span>
								</div>
								<div class="stickerBox">
									<span class="sticker01">증정</span>
								</div>
								<div class="starGrade">							
									<span class="grade">4.8 (15,393)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34896', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34896', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34510">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34510_l_S_240.jpg?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
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
								<div class="starGrade">							
									<span class="grade">4.8 (5,603)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34510', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34510', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
						<!-- INNIFOP-1428 : [ARC] UIUX 2차개선_제품리스트유닛/GNB강조 : 섬네일 수정 S 240!-->
						<li>
							<a href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=34116">
							<div class="nail">
								<div class="img"><img src="https://images.innisfree.co.kr/upload/product/34116_p_S_240.png?T202402201437" alt="" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/140x186.png'"></div>
								<!-- 140*186 -->
							</div>
							<div class="info">
								<div class="name">
									<strong>
									BEST
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
								<div class="starGrade">							
									<span class="grade">4.9 (16,682)</span>
								</div>
							</div>
							</a>
							<div class="btnIconBox">
							<button type="button" class="btnHart " onclick="loginAlert();"><span class="ir">찜</span></button><!-- 비활성 -->
							<button type="button" class="btnCart" onclick="javascript:openPreview('34116', 'mCART');"><span class="ir">장바구니</span></button>
							<button type="button" class="btnBuy" onclick="javascript:openPreview('34116', 'mORDER');"><span class="ir">결재</span></button>
							</div>
						</li>
					</ul>
				</div>
				</div>
			</div>
		</div>
	</div>
	<!--// 공통 NAV bottom -->		
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
	<!-- bottom fixed -->
	<div class="fixBtnWrap">
		<!-- <div> -->
		<div class="fixeBtn">
			<button type="button" id="mainSide" onclick="javascript:sideMenuClose();" class="btn_icon_back" style="display:none"><span class="ir">이전</span></button>
			<button type="button" id="mainSideNo" class="btn_icon_back" onclick="fnHistroyBack();"><span class="ir">이전</span></button>
			<div class="hidsch">
				<div class="schArea">
				<button type="button" class="btn_sort _btnNav" data-target-id="btmSorting">추천순</button>
				<button type="button" class="btn_detail _btnNav" data-target-id="btmSearching" data-chk-yn="Y">상세검색</button>
				</div>
			</div>
			<div class="rightBox">
				<div class="hidBtn hideTop">
				<button type="button" class="btn_icon_history" onclick="getShoppingLog();"><span class="ir" ap-click-area="MAIN" ap-click-name="플로팅" ap-click-data="쇼핑로그">쇼핑로그</span></button>
				<button type="button" class="btn_icon_top" ap-click-area="MAIN" ap-click-name="플로팅" ap-click-data="상단바로가기"><span class="ir">상단으로 이동</span></button>
				</div>
			</div>
		</div>
		<!-- </div> -->
		<div class="fixedMenu ">
			<button type="button" class="btn_innisfree" onclick="location.href='https://m.innisfree.com/kr/ko/mMain.do'" ap-click-area="MAIN" ap-click-name="하단" ap-click-data="홈버튼"><img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/logo_innisfree_green.png" alt="INNISFREE"><span class="ir">이니스프리</span></button>
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
		<div class="dimmed"></div>
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
</template>
<script setup lang="ts">

</script>
<style lang="">
	
</style>