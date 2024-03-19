<template>
	<!-- header -->
	<header class="iHeader">
		<h1><a ap-click-area="MAIN" ap-click-name="상단" ap-click-data="INNISFREE" href="https://m.innisfree.com/kr/ko/mMain.do"><span class="ir">innisfree</span></a></h1>
		<div class="headerAside">
			<button type="button" class="btn_back" onclick="fnHistroyBack();"><span class="ir">이전 페이지로 이동</span></button>
			<h2 class="hTitle"><button type="button" class="btnNav _btnNav" data-target-id="btmNav">이벤트</button></h2>
		</div>
		<div class="myBox">
			<button type="button" class="btn_search" onclick="location.href='https://m.innisfree.com/kr/ko/mSearchMain.do'" ap-click-area="MAIN" ap-click-name="상단" ap-click-data="검색" ><span class="ir">검색</span></button>
			<button type="button" class="btn_cart" ap-click-area="MAIN" ap-click-name="상단" ap-click-data="장바구니" ><span class="ir">장바구니</span><span id="cartCntTxt" class="count">0</span><span class="ir">개 상품</span></button>
		</div>
	</header>
	<!-- 어바웃어스가 아니면 / 어바웃 어스는 타이틀만 표시-->
	<!-- 공통 NAV bottom -->
	<nav class="headerNav" id="btmNav">
		<div class="dimmed"></div>
		<div class="innerBox">
			<button type="button" class="btnClose"><span class="ir">메뉴 닫힘</span></button>
			<!-- <div class="headerNav"> -->
			<ul class="navList">
				<!-- [ARC 2022_UIIX 메인 개선] - MO WEB 메뉴와 앱 전용 메뉴 분기 처리(앱은 6.0.0 이상일 경우 GNB 표시 처리) -->
				<!-- 임직원몰 20200421 임직원여부 체크하여 임직원몰 메뉴 노출 AC924859 -->
				<li menu_cd="ZZ01" name="li_menu">
				<button ap-click-area="MAIN" ap-click-name="GNB" ap-click-data="특가" data-title="특가" type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mHotdealSpcPrcMain.do';"><span>특가</span></button>
				</li>
				<li class="current" menu_cd="ZZ09" name="li_menu">
				<button ap-click-area="MAIN" ap-click-name="GNB" ap-click-data="이벤트" data-title="이벤트" type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mEvent.do';"><span>이벤트</span></button>
				</li>
				<li menu_cd="ZZ08" name="li_menu">
				<button ap-click-area="MAIN" ap-click-name="GNB" ap-click-data="베스트" data-title="베스트" type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mBestSellerList.do';"><span>베스트</span></button>
				</li>
				<li menu_cd="ZZ17" name="li_menu">
				<button ap-click-area="MAIN" ap-click-name="GNB" ap-click-data="쇼케이스" data-title="쇼케이스" type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mCommunityShowcaseMain.do';"><span>쇼케이스</span></button>
				</li>
				<li menu_cd="COMU" name="li_menu">
				<button ap-click-area="MAIN" ap-click-name="GNB" ap-click-data="에디터" data-title="에디터" type="button" onclick="location.href='/mCommunityEditorListMain.do';"><span>에디터</span></button>
				</li>
				<li menu_cd="LI" name="li_menu">
				<button ap-click-area="MAIN" ap-click-name="GNB" ap-click-data="라이브" data-title="라이브" type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mGripLiveMain.do';"><span>라이브</span></button>
				</li>
				<li menu_cd="ZZ46" name="li_menu">
				<button ap-click-area="MAIN" ap-click-name="GNB" ap-click-data="FOR ME" data-title="FOR ME" type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mForuMain.do';"><span>FOR ME</span></button>
				</li>
			</ul>
		</div>
	</nav>
	<!--// 공통 NAV bottom -->
	<!-- //검색 -->
	<!-- //header -->
	<div class="subWrap">
		<!-- 이벤트 분류 -->
		<div class="cdTag">
			<ul class="list">
				<li id="evt_all"><input ap-click-area="EVENTLIST" ap-click-name="이벤트리스트" ap-click-data="전체" type="radio" id="evtTpAll" name="cdTag" checked onclick="location.href='https://m.innisfree.com/kr/ko/mEvent.do?procStat=2&amp;channelTyp=&amp;evntTpCd='"><label for="evtTpAll">전체</label></li>
				<li id="evt_EC12"><input ap-click-area="EVENTLIST" ap-click-name="이벤트리스트" ap-click-data="체험/리뷰" type="radio" id="EC12" name="cdTag" onclick="location.href='https://m.innisfree.com/kr/ko/mEvent.do?procStat=2&amp;channelTyp=&amp;evntTpCd=EC12'"><label for="EC12">체험/리뷰</label></li>
				<li id="evt_EC11"><input ap-click-area="EVENTLIST" ap-click-name="이벤트리스트" ap-click-data="쇼핑혜택" type="radio" id="EC11" name="cdTag" onclick="location.href='https://m.innisfree.com/kr/ko/mEvent.do?procStat=2&amp;channelTyp=&amp;evntTpCd=EC11'"><label for="EC11">쇼핑혜택</label></li>
				<li id="evt_EC13"><input ap-click-area="EVENTLIST" ap-click-name="이벤트리스트" ap-click-data="제휴혜택 " type="radio" id="EC13" name="cdTag" onclick="location.href='https://m.innisfree.com/kr/ko/mEvent.do?procStat=2&amp;channelTyp=&amp;evntTpCd=EC13'"><label for="EC13">제휴혜택 </label></li>
			</ul>
		</div>
		<!-- 당첨자발표 버튼 분리 -->
		<div class="wrapPrd">
			<div class="innerPrd">
				<div class="aboveList">
				<div class="grpRight">
					<a href="javascript:;" onclick="location.href='https://m.innisfree.com/kr/ko/mNtcList.do?schCl=NC06'" id="cdTag_5" class="btnArr01" ap-click-area="EVENTLIST" ap-click-name="이벤트리스트" ap-click-data="당첨자발표">당첨자발표</a>
				</div>
				</div>
				<!-- 이벤트 배너 리스트([2022_UIIX_모바일 메인 개선] - GA태깅 추가) -->
				<ul class="evtComList">
				<!-- 반복 -->
				<li class="item" id="evtList0">
					<a ap-click-area="EVENTLIST" ap-click-name="《스티븐 해링턴:스테이 멜로》" ap-click-data="스티븐 해링턴 국내 첫,프라이빗 오프닝,전시 초청! / 24.2.19-24.2.20" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3427&amp;procStat=2">
						<span class="sticker04">체험/리뷰</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3427_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">스티븐 해링턴 국내 첫</div>
							<div class="name name_1">프라이빗 오프닝</div>
							<div class="name name_2">전시 초청!</div>
							<div class="date">24.2.19(월) ~ 24.2.20(화)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList1">
					<a ap-click-area="EVENTLIST" ap-click-name="COLORFUL WEEK" ap-click-data="컬러풀 위크,메이크업 BEST 모음,30%에 추가 쿠폰까지 / 24.2.19-24.2.28" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3387&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3387_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">컬러풀 위크</div>
							<div class="name name_1">메이크업 BEST 모음</div>
							<div class="name name_2">30%에 추가 쿠폰까지</div>
							<div class="date">24.2.19(월) ~ 24.2.28(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList2">
					<a ap-click-area="EVENTLIST" ap-click-name="디아일 어드벤처 이니스프리 X" ap-click-data="디아일 어드벤처,이니스프리 x,스티븐 해링턴 / 24.2.13-24.2.28" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3412&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3412_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">디아일 어드벤처</div>
							<div class="name name_1">이니스프리 x</div>
							<div class="name name_2">스티븐 해링턴</div>
							<div class="date">24.2.13(화) ~ 24.2.28(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList3">
					<a ap-click-area="EVENTLIST" ap-click-name="카테고리별 특가템 ~50%" ap-click-data="놓칠수 없는,카테고리별 특가템,~50% 혜택 / 24.2.19-24.2.28" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3380&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3380_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">놓칠수 없는</div>
							<div class="name name_1">카테고리별 특가템</div>
							<div class="name name_2">~50% 혜택</div>
							<div class="date">24.2.19(월) ~ 24.2.28(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList4">
					<a ap-click-area="EVENTLIST" ap-click-name="첫구매 1천원" ap-click-data="첫구매고객만!,1,000원 Get!,쫀쫀탄탄 블랙티 / 24.2.19-24.2.29" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=36961">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3433_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">첫구매고객만!</div>
							<div class="name name_1">1,000원 Get!</div>
							<div class="name name_2">쫀쫀탄탄 블랙티</div>
							<div class="date">24.2.19(월) ~ 24.2.29(목)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList5">
					<a ap-click-area="EVENTLIST" ap-click-name="첫구매 1천원" ap-click-data="첫구매고객만!,1,000원 Get!,수분크림의정석 / 24.2.19-24.2.28" href="https://m.innisfree.com/kr/ko/mProductView.do?prdSeq=35278">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3432_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">첫구매고객만!</div>
							<div class="name name_1">1,000원 Get!</div>
							<div class="name name_2">수분크림의정석</div>
							<div class="date">24.2.19(월) ~ 24.2.28(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList6">
					<a ap-click-area="EVENTLIST" ap-click-name="BC카드 마이태그 하고" ap-click-data="BC카드 마이태그,3만원 결제 시,5천원 결제일 할인 / 24.2.19-24.2.24" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3399&amp;procStat=2">
						<span class="sticker04">제휴혜택 </span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3399_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">BC카드 마이태그</div>
							<div class="name name_1">3만원 결제 시</div>
							<div class="name name_2">5천원 결제일 할인</div>
							<div class="date">24.2.19(월) ~ 24.2.24(토)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList7">
					<a ap-click-area="EVENTLIST" ap-click-name="블루베리 라인 2개 구매 시" ap-click-data="블루베리 라인 ,2개 이상 구매 시,뷰티포인트 2,000점 / 24.2.13-24.2.29" href="https://m.innisfree.com/kr/ko/joinEvent/mViewJoinEvent.do?eventSeq=82">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3416_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">블루베리 라인 </div>
							<div class="name name_1">2개 이상 구매 시</div>
							<div class="name name_2">뷰티포인트 2,000점</div>
							<div class="date">24.2.13(화) ~ 24.2.29(목)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList8">
					<a ap-click-area="EVENTLIST" ap-click-name="겨울엔 한란" ap-click-data="겨울엔 한란,극P의 겨울 보습 케어,한란 활용법 / 24.2.19-24.2.29" href="https://m.innisfree.com/kr/ko/mCommunityShowcaseMain.do">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3434_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">겨울엔 한란</div>
							<div class="name name_1">극P의 겨울 보습 케어</div>
							<div class="name name_2">한란 활용법</div>
							<div class="date">24.2.19(월) ~ 24.2.29(목)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList9">
					<a ap-click-area="EVENTLIST" ap-click-name="이니스프리 사고" ap-click-data="이니스프리,사고,그린카 타자~! / 24.2.13-24.2.29" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3388&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3388_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">이니스프리</div>
							<div class="name name_1">사고</div>
							<div class="name name_2">그린카 타자~!</div>
							<div class="date">24.2.13(화) ~ 24.2.29(목)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList10">
					<a ap-click-area="EVENTLIST" ap-click-name="레티놀 트러블 튜터가 주는" ap-click-data="트러블튜터 령령이 주는,특별한 쿠폰,지금 다운로드! / 24.1.1-24.2.21" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3350&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3350_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">트러블튜터 령령이 주는</div>
							<div class="name name_1">특별한 쿠폰</div>
							<div class="name name_2">지금 다운로드!</div>
							<div class="date">24.1.1(월) ~ 24.2.21(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList11">
					<a ap-click-area="EVENTLIST" ap-click-name="콜라겐 세라마이드 크림으로 " ap-click-data="콜라겐 크림으로,촉촉 보습 탄력!,30mL 및 괄사 증정 / 24.2.19-24.2.28" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3376&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3376_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">콜라겐 크림으로</div>
							<div class="name name_1">촉촉 보습 탄력!</div>
							<div class="name name_2">30mL 및 괄사 증정</div>
							<div class="date">24.2.19(월) ~ 24.2.28(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList12">
					<a ap-click-area="EVENTLIST" ap-click-name="피부 갈증 주의보 발령!" ap-click-data="일주일 후 체감하는,달라진 피부 컨디션,그린티 히알루론산 세럼 / 24.2.1-24.2.28" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3374&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3374_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">일주일 후 체감하는</div>
							<div class="name name_1">달라진 피부 컨디션</div>
							<div class="name name_2">그린티 히알루론산 세럼</div>
							<div class="date">24.2.1(목) ~ 24.2.28(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList13">
					<a ap-click-area="EVENTLIST" ap-click-name="공식몰 판매 1위 레티놀 시카" ap-click-data="공식몰 판매 1위,레티놀 시카,앰플+크림 듀오 / 24.2.19-24.2.28" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3375&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3375_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">공식몰 판매 1위</div>
							<div class="name name_1">레티놀 시카</div>
							<div class="name name_2">앰플+크림 듀오</div>
							<div class="date">24.2.19(월) ~ 24.2.28(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList14">
					<a ap-click-area="EVENTLIST" ap-click-name="디렉터파이S PICK" ap-click-data="디렉터파이S PICK,1등 신상 잡티 세럼,비타C 잡티 토닝 세럼 / 24.2.19-24.2.28" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3373&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3373_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">디렉터파이S PICK</div>
							<div class="name name_1">1등 신상 잡티 세럼</div>
							<div class="name name_2">비타C 잡티 토닝 세럼</div>
							<div class="date">24.2.19(월) ~ 24.2.28(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList15">
					<a ap-click-area="EVENTLIST" ap-click-name="겨울철 쫀쫀광 피부" ap-click-data="겨울철 쫀쫀광 피부,블랙티 앰플,최대 30% 할인! / 24.2.19-24.2.21" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3331&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3331_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">겨울철 쫀쫀광 피부</div>
							<div class="name name_1">블랙티 앰플</div>
							<div class="name name_2">최대 30% 할인!</div>
							<div class="date">24.2.19(월) ~ 24.2.21(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList16">
					<a ap-click-area="EVENTLIST" ap-click-name="지구를 위한 공병대환영" ap-click-data="지구를 위한,공병대환영,공병수거 안내 / 22.8.11-90.12.31" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=2508&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/2508_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">지구를 위한</div>
							<div class="name name_1">공병대환영</div>
							<div class="name name_2">공병수거 안내</div>
							<div class="date">22.8.11(목) ~ 90.12.31(일)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList17">
					<a ap-click-area="EVENTLIST" ap-click-name="붙이는비타C세럼" ap-click-data="붙이는비타C세럼,입고알림 누르고,쿠폰 받으세요! / 24.2.13-24.2.22" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=3413&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3413_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">붙이는비타C세럼</div>
							<div class="name name_1">입고알림 누르고</div>
							<div class="name name_2">쿠폰 받으세요!</div>
							<div class="date">24.2.13(화) ~ 24.2.22(목)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList18">
					<a ap-click-area="EVENTLIST" ap-click-name="클렌징오일 / 워터" ap-click-data="클렌징 오일/워터,2개이상 구매시,50% SALE / 24.2.19-24.2.28" href="https://m.innisfree.com/kr/ko/mHotdealSpcPrcMain.do?inmPromNo=175">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3382_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">클렌징 오일/워터</div>
							<div class="name name_1">2개이상 구매시</div>
							<div class="name name_2">50% SALE</div>
							<div class="date">24.2.19(월) ~ 24.2.28(수)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList19">
					<a ap-click-area="EVENTLIST" ap-click-name="겨울철 피부 고민" ap-click-data="겨울철 피부 고민,피부 각질, 가려움증,해결 방법! / 24.1.1-24.2.29" href="https://m.innisfree.com/kr/ko/mCommunityShowcaseMain.do?inmSwcsNo=10%27">
						<span class="sticker04">체험/리뷰</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3354_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">겨울철 피부 고민</div>
							<div class="name name_1">피부 각질, 가려움증</div>
							<div class="name name_2">해결 방법!</div>
							<div class="date">24.1.1(월) ~ 24.2.29(목)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList20">
					<a ap-click-area="EVENTLIST" ap-click-name="콜라겐 크림 구매하면" ap-click-data="콜라겐 크림 구매하고,아이패드&amp;포인트,득템하자!  / 24.1.1-24.2.29" href="https://m.innisfree.com/kr/ko/joinEvent/mViewJoinEvent.do?eventSeq=80">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3356_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">콜라겐 크림 구매하고</div>
							<div class="name name_1">아이패드&amp;포인트</div>
							<div class="name name_2">득템하자! </div>
							<div class="date">24.1.1(월) ~ 24.2.29(목)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList21">
					<a ap-click-area="EVENTLIST" ap-click-name="취향따라 골라쓰는 핸드크림" ap-click-data="취향따라 골라쓰는,핸드크림!,파우치 속 필수템! / 24.1.17-24.2.29" href="https://m.innisfree.com/kr/ko/mCommunityShowcaseMain.do?inmSwcsNo=11%27">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/3372_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">취향따라 골라쓰는</div>
							<div class="name name_1">핸드크림!</div>
							<div class="name name_2">파우치 속 필수템!</div>
							<div class="date">24.1.17(수) ~ 24.2.29(목)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList22">
					<a ap-click-area="EVENTLIST" ap-click-name="앱푸시 동의 시" ap-click-data="앱푸시 동의 시,1,000원 추가할인,+ 10% 할인 / 23.3.1-24.12.31" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=2824&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/2824_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">앱푸시 동의 시</div>
							<div class="name name_1">1,000원 추가할인</div>
							<div class="name name_2">+ 10% 할인</div>
							<div class="date">23.3.1(수) ~ 24.12.31(화)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList23">
					<a ap-click-area="EVENTLIST" ap-click-name="지금 앱을 열면" ap-click-data="지금 APP을 열면,2만원 할인받고,,2천점 적립까지! / 23.3.20-24.12.31" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=2794&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/2794_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">지금 APP을 열면</div>
							<div class="name name_1">2만원 할인받고,</div>
							<div class="name name_2">2천점 적립까지!</div>
							<div class="date">23.3.20(월) ~ 24.12.31(화)</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList24">
					<a ap-click-area="EVENTLIST" ap-click-name="지금 신규 가입하면?" ap-click-data="첫 구매를 더 즐겁게,신규 가입 시,,70,000원 쿠폰팩 / 21.7.1-" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=2181&amp;procStat=2">
						<span class="sticker04">쇼핑혜택</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/2181_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">첫 구매를 더 즐겁게</div>
							<div class="name name_1">신규 가입 시,</div>
							<div class="name name_2">70,000원 쿠폰팩</div>
							<div class="date">21.7.1(목)  상시 진행</div>
						</div>
					</a>
				</li>
				<li class="item" id="evtList25">
					<a ap-click-area="EVENTLIST" ap-click-name="대표상품 무료 체험 서비스" ap-click-data="이니스프리 대표 상품,무료 체험 서비스,샘플 마켓! / 23.1.1-24.12.31" href="https://m.innisfree.com/kr/ko/mEventView.do?eventSeq=2172&amp;procStat=2">
						<span class="sticker04">체험/리뷰</span>
						<div class="evtImg">
							<img src="https://images.innisfree.co.kr/upload/event/2172_0.jpg?T202402201327" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/160x64.png'" alt="">
						</div>
						<!-- 이미지+텍스트 유형만 타이틀과 기간 표시 -->
						<div class="cnt-area">
							<div class="name name_1">이니스프리 대표 상품</div>
							<div class="name name_1">무료 체험 서비스</div>
							<div class="name name_2">샘플 마켓!</div>
							<div class="date">23.1.1(일) ~ 24.12.31(화)</div>
						</div>
					</a>
				</li>
				</ul>
			</div>
		</div>
		<!-- 이벤트 리스트 없음 -->
	</div>

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
			<!-- <button type="button" class="btn_innisfree" onclick="location.href='https://m.innisfree.com/kr/ko/mMain.do'"><img src="/resources/mobile/images/ui/logo_innisfree_green.png" alt="INNISFREE"><span class="ir">이니스프리</span></button> -->
			<button type="button" class="btn_innisfree" onclick="location.href='https://m.innisfree.com/kr/ko/mMain.do'" ap-click-area="MAIN" ap-click-name="하단" ap-click-data="홈버튼"><img src="https://m.innisfree.com/kr/ko/resources/mobile/images/ui/logo_innisfree_green.png" alt="INNISFREE"><span class="ir">이니스프리</span></button>
			<button type="button" class="btn_category" ap-click-area="MAIN" ap-click-name="하단" ap-click-data="전체메뉴">
			<img src="https://images.innisfree.co.kr/upload/mainMng/mobile/1.png?t202303201137" alt="allNavi" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/125x125.png'"><span>전체메뉴</span>
			</button>
			<button type="button" onclick="location.href='https://m.innisfree.com/kr/ko/mEvent.do'" ap-click-area="MAIN" ap-click-name="하단" ap-click-data="이벤트">
			<img src="https://images.innisfree.co.kr/upload/mainMng/mobile/183_acti.png" alt="event" onerror="this.src='https://m.innisfree.com/kr/ko/resources/error/img/125x125.png'"><span>이벤트</span>
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
<style lang="" scoped>
	
</style>