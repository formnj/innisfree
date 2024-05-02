<template>
    <h2>퍼블리싱 리스트 <Button class="btn_small_outline" txt="MO" @click="change_device()" />
        <ul class="legend">
            <li><span class="badge modal">modal popup</span></li>
            <li><span class="badge com">완료</span></li>
            <li><span class="badge ing">진행중</span></li>
            <li><span class="badge edit">수정요청</span></li>
        </ul>
    </h2>
    <table>
        <colgroup>
            <col />
        </colgroup>
        <thead>
            <tr>
                <th>1Depth</th>
                <th>2Depth</th>
                <th>3Depth</th>
                <th>4Depth</th>
                <th>link</th>
                <th>비고</th>
                <th>시작일</th>
                <th>종료일(예정/실제)</th>
                <th>작업자</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</template>

<script setup>
definePageMeta({
  layout:'guide'
})

/* device check text : 개발 시 제거해주세요. */
const device = ref('MO');

import { onMounted } from 'vue'

const comm_arry = ([
    {
        depth:['공통','Inputs','',''],
        id:'', status:'ing',
        type:'component', note:'/component/Inputs<br/>- 타입별 분리 예정',
        sDate:'', eDate:'', worker:'이종환'
    }, {
        depth:['','Button','',''],
        id:'', status:'ing',
        type:'component', note:'/component/Button',
        sDate:'', eDate:'', worker:'이종환'
    }, {
        depth:['','GoodsItem','',''],
        id:'', status:'ing',
        type:'component', note:'/component/GoodsItem',
        sDate:'', eDate:'', worker:'이종환'
    }, {
        depth:['','Tabs','',''],
        id:'', status:'ing',
        type:'component', note:'/component/Tabs',
        sDate:'', eDate:'/ 2024-04-09', worker:'이종환'
    }
])

const PC_arry = ([
    {
        depth:['pc_공통','헤더','',''],
        id:'Header', status:'com',
        type:'component', note:'/component/Header/pc',
        sDate:'', eDate:'', worker:'형민우'
    }, {
        depth:['','검색','',''],
        id:'IN_PC_SRC_01_01', status:'com',
        type:'component', note:'디자인 고도화',
        sDate:'', eDate:'2024-04-24/2024-04-23', worker:'형민우'
    }, {
        depth:['','푸터','',''],
        id:'Footer', status:'com',
        type:'component', note:'/component/Footer/pc<br/> 쇼핑로그 모달팝업 포함',
        sDate:'', eDate:'', worker:'김희경'
    }, {
        depth:['','브래드크럼','',''],
        id:'Breadcrumb', status:'com',
        type:'component', note:'/component/Breadcrumb',
        sDate:'2024-04-15', eDate:'2024-04-15', worker:'김희경'
    }, {
        depth:['홈','','',''],
        id:'IN_PC_HOM_01_01', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-22/2024-04-22' , worker:'이종환'
    }, {
        depth:['','특가(T)','',''],
        id:'IN_PC_HOM_01_04', status:'ing',
        type:'', note:'디자인 고도화 / sticky 시 해당영역 스크롤 바 없이는 좌우 스크롤 불가함<br/> [tooltip 버튼], [layout 모달]',
        sDate:'', eDate:'2024-04-19/2024-04-16', worker:'김희경'
    }, {
        depth:['','이벤트(T)','목록',''],
        id:'IN_PC_HOM_01_05', status:'com',
        type:'', note:'',
        sDate:'2024-04-15', eDate:'2024-04-15', worker:'김희경'
    }, {
        depth:['','','상세',''],
        id:'IN_PC_HOM_01_06', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:'이종환'
    }, {
        depth:['','랭킹(T)','',''],
        id:'IN_PC_HOM_01_07', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','상세',''],
        id:'IN_PC_HOM_01_09', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','베스트','',''],
        id:'IN_PC_HOM_01_00-1', status:'com',
        type:'', note:'swiper 샘플 완료 후 적용',
        sDate:'', eDate:'2024-04-12/ 2024-04-12', worker:'이종환'
    }, {
        depth:['','쇼케이스(T)','',''],
        id:'IN_PC_HOM_01_12', status:'com',
        type:'', note:'공유하기 Layer modal (share_wrap 참조)',
        sDate:'', eDate:'2024-04-26/2024-04-24', worker:'형민우'
    }, {
        depth:['','라이브(T)','',''],
        id:'IN_PC_HOM_01_14', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-05-23/2024-04-25', worker:'이종환'
    }, {
        depth:['','FOR ME(T)','',''],
        id:'IN_PC_HOM_01_15', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-16/', worker:'김나람'
    }, {
        depth:['','임직원샵','목록',''],
        id:'IN_PC_HOM_01_16', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-16/ 2024-04-16', worker:'형민우'
    }, {
        depth:['','쇼핑로그','',''],
        id:'IN_PC_HOM_01_18', status:'com',
        type:'component', note:'footer에 모달, float_menu 삽입 [tooltip 버튼]',
        sDate:'', eDate:'2024-05-29/2024-04-23', worker:'이종환'
    }, {
        depth:['상품','목록','',''],
        id:'IN_PC_PRD_01_01', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-24/2024-04-09', worker:'김희경'
    }, {
        depth:['','상세','',''],
        id:'IN_PC_PRD_01_09', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03/', worker:'김나람'
    }, {
        depth:['장바구니','상품 없음','',''],
        id:'IN_PC_CAR_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10/', worker:'이종환'
    }, {
        depth:['','상품 있음','',''],
        id:'IN_PC_CAR_01_02', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10/', worker:'이종환'
    }, {
        depth:['','적립예정 뷰티포인트','',''],
        id:'IN_PC_CAR_01_03', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10/', worker:'이종환'
    }, {
        depth:['','구매 시 최대할인 안내','',''],
        id:'IN_PC_CAR_01_04', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10/', worker:'이종환'
    }, {
        depth:['주문서','','',''],
        id:'IN_PC_ORD_01_01', status:'',
        type:'', note:'결제하기페이지',
        sDate:'', eDate:'2024-05-24/', worker:''
    }, {
        depth:['','배송지 등록/변경','',''],
        id:'IN_PC_ORD_01_02', status:'com',
        type:'modal', note:'마이페이지 > 배송지관리 > 추가',
        sDate:'2024-04-26', eDate:'2024-05-03/2024-04-26', worker:'김희경'
    }, {
        depth:['','','배송지 수정','ing'],
        id:'IN_PC_ORD_01_03', status:'',
        type:'modal', note:'IN_PC_ORD_01_02 에서 해당 팝업창 확인 가능',
        sDate:'2024-04-26', eDate:'2024-05-03/', worker:'김희경'
    }, {
        depth:['','','배송지 추가','ing'],
        id:'IN_PC_ORD_01_04', status:'',
        type:'modal', note:'IN_PC_ORD_01_02 에서 해당 팝업창 확인 가능',
        sDate:'2024-04-26', eDate:'2024-05-03/', worker:'김희경'
    }, {
        depth:['','안심번호 서비스 안내','',''],
        id:'IN_PC_ORD_01_08', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','배송 포장재 안내','',''],
        id:'IN_PC_ORD_01_09', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','사용 가능한 쿠폰 안내','',''],
        id:'IN_PC_ORD_01_10', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','뷰티포인트 적립 혜택 안내','',''],
        id:'IN_PC_ORD_01_11', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','유의사항 안내','',''],
        id:'IN_PC_ORD_01_12', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','원클릭 결제(T)','',''],
        id:'IN_PC_ORD_01_14', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','신용카드(T)','',''],
        id:'IN_PC_ORD_01_16', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['마이페이지','로그인 전','',''],
        id:'IN_PC_MYP_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','로그인 후','',''],
        id:'IN_PC_MYP_01_02', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','멤버십','멤버십 혜택안내',''],
        id:'IN_PC_MYP_01_04', status:'com',
        type:'', note:'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
        sDate:'', eDate:'2024-05-03/2024-05-02', worker:'형민우'
    }, {
        depth:['','','뷰티포인트 안내(T)','뷰티포인트'],
        id:'IN_PC_MYP_01_05', status:'com',
        type:'', note:'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
        sDate:'', eDate:'2024-05-03/2024-05-02', worker:'형민우'
    }, {
        depth:['','','','VIP 등급안내(T)'],
        id:'IN_PC_MYP_01_06', status:'com',
        type:'', note:'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
        sDate:'', eDate:'2024-05-03/2024-05-02', worker:'형민우'
    }, {
        depth:['','','모바일 앱 다운로드(T)',''],
        id:'IN_PC_MYP_01_07', status:'com',
        type:'', note:'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
        sDate:'', eDate:'2024-05-03/2024-05-02', worker:'형민우'
    }, {
        depth:['','주문내역','목록',''],
        id:'IN_PC_MYP_01_08', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','상세',''],
        id:'IN_PC_MYP_01_11', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-24', worker:''
    }, {
        depth:['','배송내역','목록',''],
        id:'IN_PC_MYP_01_00-1', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','취소/교환/반품','내역',''],
        id:'IN_PC_MYP_01_00-2', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','상세',''],
        id:'IN_PC_MYP_01_00-3', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','리뷰','작성 가능한 리뷰 안내',''],
        id:'IN_PC_MYP_01_19', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:''
    }, {
        depth:['','','작성 가능 리뷰(T)',''],
        id:'IN_PC_MYP_01_20', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:''
    }, {
        depth:['','','작성한 리뷰(T)',''],
        id:'IN_PC_MYP_01_26', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:''
    }, {
        depth:['','임직원 인증/해제','',''],
        id:'IN_PC_MYP_01_28', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-21', worker:''
    }, {
        depth:['','참여한 이벤트 내역','체험단/키트 신청내역',''],
        id:'IN_PC_MYP_01_29', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','이벤트 참여내역',''],
        id:'IN_PC_MYP_01_30', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','개인결제','',''],
        id:'IN_PC_MYP_01_31', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','보유쿠폰','다운로드 가능한 쿠폰(T)',''],
        id:'IN_PC_MYP_01_32', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','보유쿠폰(T)',''],
        id:'IN_PC_MYP_01_35', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','뷰티포인트 내역','',''],
        id:'IN_PC_MYP_01_38', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:''
    }, {
        depth:['','찜한제품','',''],
        id:'IN_PC_MYP_01_40', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03', worker:'김희경'
    }, {
        depth:['','스마트 영수증','목록',''],
        id:'IN_PC_MYP_01_43', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','상세',''],
        id:'IN_PC_MYP_01_44', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','1:1문의','내역',''],
        id:'IN_PC_MYP_01_45', status:'com',
        type:'', note:'답변확인에서 확인가능',
        sDate:'', eDate:'2024-04-26', worker:'김희경'
    }, {
        depth:['','','1:1 문의하기(T)',''],
        id:'IN_PC_MYP_01_46', status:'com',
        type:'', note:'',
        sDate:'2024-04-25', eDate:'2024-04-26/2024-04-25', worker:'김희경'
    }, {
        depth:['','','1:1 답변확인(T)',''],
        id:'IN_PC_MYP_01_48', status:'com',
        type:'', note:'',
        sDate:'2024-04-25', eDate:'2024-04-26/2024-04-26', worker:'김희경'
    }, {
        depth:['','공병수거 현황','내 공병수거 현황(T)','온라인 공병수거 신청'],
        id:'IN_PC_MYP_01_51', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','','공병수거 신청'],
        id:'IN_PC_MYP_01_57', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','공병 프리퀀시(T)',''],
        id:'IN_PC_MYP_01_67', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','개인정보 수정','비밀번호 확인',''],
        id:'IN_PC_MYP_01_68', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:'형민우'
    }, {
        depth:['','','','개인정보 수정'],
        id:'IN_PC_MYP_01_69', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:'형민우'
    }, {
        depth:['','배송지 관리','',''],
        id:'IN_PC_MYP_01_76', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','피부정보 관리','',''],
        id:'IN_PC_MYP_01_81', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','원클릭결제 카드관리','',''],
        id:'IN_PC_MYP_01_82', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','설정','',''],
        id:'IN_PC_MYP_01_84', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','마이샵 관리','',''],
        id:'IN_PC_MYP_01_85', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:'김나람'
    }, {
        depth:['','FAQ','',''],
        id:'IN_PC_MYP_01_87', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','공지사항','',''],
        id:'IN_PC_MYP_01_88', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['고객센터','','',''],
        id:'IN_PC_MYP_01_90', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','FAQ','',''],
        id:'IN_PC_MYP_01_91', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-07-12', worker:''
    }, {
        depth:['','공지사항','',''],
        id:'IN_PC_MYP_01_92', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-07-12', worker:''
    }, {
        depth:['','전자공고','',''],
        id:'IN_PC_MYP_01_93', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['회원','회원가입','',''],
        id:'IN_PC_MYP_01_94', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','로그인','',''],
        id:'IN_PC_MYP_01_95', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','임직원 인증','',''],
        id:'IN_PC_MYP_01_97', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:''
    }, {
        depth:['','비회원 주문조회','주문번호/주문비밀번호 입력',''],
        id:'IN_PC_MYP_01_98', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','','주문번호 찾기'],
        id:'IN_PC_MYP_01_99', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','','주문 비밀번호 찾기'],
        id:'IN_PC_MYP_01_100', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','','비회원 주문 내역 조회'],
        id:'IN_PC_MYP_01_101', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['풋터','ABOUT US(T)','BRAND STORY(T)',''],
        id:'IN_PC_FOO_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','GREEN TEA HERITAGE(T)',''],
        id:'IN_PC_FOO_01_02', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','BETTER FOR EARTH(T)',''],
        id:'IN_PC_FOO_01_03', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','이용약관','',''],
        id:'IN_PC_FOO_01_04', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','개인정보처리방침','',''],
        id:'IN_PC_FOO_01_05', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','영상기기관리방침','',''],
        id:'IN_PC_FOO_01_10', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','위치기반서비스 이용약관','',''],
        id:'IN_PC_FOO_01_12', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','사업자정보 확인','보안문자 입력',''],
        id:'IN_PC_FOO_01_13', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','','사업자정보'],
        id:'IN_PC_FOO_01_14', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','약관 및 법적고지','',''],
        id:'IN_PC_FOO_01_15', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','토스페이먼츠 구매안전 서비스 가입 확인',''],
        id:'IN_PC_FOO_01_16', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }
])

const MO_arry = ([
    {
        depth:['mo_공통','헤더','',''],
        id:'Header', status:'com',
        type:'component', note:'/component/Header/mo',
        sDate:'', eDate:'', worker:'형민우'
    }, {
        depth:['','검색','',''],
        id:'IN_MO_SRC_01_01', status:'com',
        type:'component', note:'',
        sDate:'', eDate:'2024-04-24/2024-04-23', worker:'형민우'
    }, {
        depth:['','푸터','',''],
        id:'Footer', status:'com',
        type:'component', note:'/component/Footer/mo',
        sDate:'', eDate:'', worker:'김희경'
    }, {
        depth:['','액션바','',''],
        id:'Actionbar', status:'com',
        type:'component', note:'/component/Actionbar<br/> 쇼핑로그 링크',
        sDate:'', eDate:'', worker:'김희경'
    }, {
        depth:['홈','','',''],
        id:'IN_MO_HOM_01_01', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-22/2024-04-22', worker:'이종환'
    }, {
        depth:['','특가(T)','',''],
        id:'IN_MO_HOM_01_04', status:'ing',
        type:'', note:'디자인 고도화',
        sDate:'', eDate:'2024-04-19/2024-04-16', worker:'김희경'
    }, {
        depth:['','이벤트(T)','목록',''],
        id:'IN_MO_HOM_01_05', status:'com',
        type:'', note:'',
        sDate:'2024-04-15', eDate:'2024-04-16', worker:'김희경'
    }, {
        depth:['','','상세',''],
        id:'IN_MO_HOM_01_06', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:'이종환'
    }, {
        depth:['','랭킹(T)','',''],
        id:'IN_MO_HOM_01_07', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','에디터(T)','목록',''],
        id:'IN_MO_HOM_01_08', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-19/2024-04-19', worker:'김나람'
    }, {
        depth:['','','상세',''],
        id:'IN_MO_HOM_01_09', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03/2024-04-26', worker:'김나람'
    }, {
        depth:['','','에디터별 보기',''],
        id:'IN_MO_HOM_01_10', status:'ing',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03', worker:'김나람'
    }, {
        depth:['','베스트','',''],
        id:'IN_MO_HOM_01_00-1', status:'com',
        type:'', note:'swiper 샘플 완료 후 적용',
        sDate:'', eDate:'2024-04-12/ 2024-04-12', worker:'이종환'
    }, {
        depth:['','쇼케이스(T)','',''],
        id:'IN_MO_HOM_01_12', status:'com',
        type:'', note:'전체보기 mobile full modal (fullMo 참조)',
        sDate:'', eDate:'2024-04-26/2024-04-24', worker:'형민우'
    }, {
        depth:['','','전체보기 팝업',''],
        id:'IN_MO_HOM_01_13', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-26/2024-04-25', worker:'형민우'
    }, {
        depth:['','라이브(T)','',''],
        id:'IN_MO_HOM_01_14', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-26/2024-04-25', worker:'이종환'
    }, {
        depth:['','FOR ME(T)','',''],
        id:'IN_MO_HOM_01_15', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-26/2024-04-25', worker:'김나람'
    }, {
        depth:['','임직원샵','목록',''],
        id:'IN_MO_HOM_01_16', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-16/ 2024-04-16', worker:'형민우'
    }, {
        depth:['','쇼핑로그','',''],
        id:'IN_MO_HOM_01_18', status:'com',
        type:'', note:'goods_item > btnIconBox > btn_heart 노출',
        sDate:'', eDate:'2024-04-23/2024-04-23', worker:'이종환'
    }, {
        depth:['상품','목록','',''],
        id:'IN_MO_PRD_01_01', status:'com',
        type:'', note:'',
        sDate:'', eDate:'2024-04-24/2024-04-11', worker:'김희경'
    }, {
        depth:['','상세','',''],
        id:'IN_MO_PRD_01_09', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03/', worker:'김나람'
    }, {
        depth:['장바구니','상품 없음','',''],
        id:'IN_MO_CAR_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10/', worker:'이종환'
    }, {
        depth:['','상품 있음','',''],
        id:'IN_MO_CAR_01_02', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10/', worker:'이종환'
    }, {
        depth:['','적립예정 뷰티포인트','',''],
        id:'IN_MO_CAR_01_03', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10/', worker:'이종환'
    }, {
        depth:['','구매 시 최대할인 안내','',''],
        id:'IN_MO_CAR_01_04', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10/', worker:'이종환'
    }, {
        depth:['주문서','','',''],
        id:'IN_MO_ORD_01_01', status:'',
        type:'', note:'결제하기페이지',
        sDate:'', eDate:'2024-05-24/', worker:''
    }, {
        depth:['','배송지 등록/변경','',''],
        id:'IN_MO_ORD_01_02', status:'',
        type:'modal', note:'마이페이지 > 배송지관리 > 추가',
        sDate:'', eDate:'2024-05-03', worker:'김희경'
    }, {
        depth:['','','배송지 수정',''],
        id:'IN_MO_ORD_01_03', status:'',
        type:'modal', note:'마이페이지 > 배송지관리 > 추가',
        sDate:'', eDate:'2024-05-03', worker:'김희경'
    }, {
        depth:['','','배송지 추가',''],
        id:'IN_MO_ORD_01_04', status:'',
        type:'modal', note:'마이페이지 > 배송지관리 > 추가',
        sDate:'', eDate:'2024-05-03', worker:'김희경'
    }, {
        depth:['','안심번호 서비스 안내','',''],
        id:'IN_MO_ORD_01_08', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','배송 포장재 안내','',''],
        id:'IN_MO_ORD_01_09', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','사용 가능한 쿠폰 안내','',''],
        id:'IN_MO_ORD_01_10', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','뷰티포인트 적립 혜택 안내','',''],
        id:'IN_MO_ORD_01_11', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','유의사항 안내','',''],
        id:'IN_MO_ORD_01_12', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','원클릭 결제(T)','',''],
        id:'IN_MO_ORD_01_14', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','신용카드(T)','',''],
        id:'IN_MO_ORD_01_16', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['마이페이지','로그인 전','',''],
        id:'IN_MO_MYP_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','로그인 후','',''],
        id:'IN_MO_MYP_01_02', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','바코드','',''],
        id:'IN_MO_MYP_01_03', status:'',
        type:'modal', note:'로그인 > 마이페이지 > 우측 바코드 버튼으로 확인가능',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','멤버십','멤버십 혜택안내',''],
        id:'IN_MO_MYP_01_04', status:'com',
        type:'', note:'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
        sDate:'', eDate:'2024-05-03/2024-05-02', worker:'형민우'
    }, {
        depth:['','','뷰티포인트 안내(T)','뷰티포인트'],
        id:'IN_MO_MYP_01_05', status:'com',
        type:'', note:'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
        sDate:'', eDate:'2024-05-03/2024-05-02', worker:'형민우'
    }, {
        depth:['','','','VIP 등급안내(T)'],
        id:'IN_MO_MYP_01_06', status:'com',
        type:'', note:'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
        sDate:'', eDate:'2024-05-03/2024-05-02', worker:'형민우'
    }, {
        depth:['','','모바일 앱 다운로드(T)',''],
        id:'IN_MO_MYP_01_07', status:'com',
        type:'', note:'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
        sDate:'', eDate:'2024-05-03/2024-05-02', worker:'형민우'
    }, {
        depth:['','주문내역','목록',''],
        id:'IN_MO_MYP_01_08', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','상세',''],
        id:'IN_MO_MYP_01_11', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-24', worker:''
    }, {
        depth:['','배송내역','목록',''],
        id:'IN_MO_MYP_01_00-1', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','취소/교환/반품','내역',''],
        id:'IN_MO_MYP_01_00-2', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','상세',''],
        id:'IN_MO_MYP_01_00-2', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','리뷰','작성 가능한 리뷰 안내',''],
        id:'IN_MO_MYP_01_19', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03', worker:''
    }, {
        depth:['','','작성 가능 리뷰(T)',''],
        id:'IN_MO_MYP_01_20', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03', worker:''
    }, {
        depth:['','','작성한 리뷰(T)',''],
        id:'IN_MO_MYP_01_26', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03', worker:''
    }, {
        depth:['','임직원 인증/해제','',''],
        id:'IN_MO_MYP_01_28', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-21', worker:''
    }, {
        depth:['','참여한 이벤트 내역','체험단/키트 신청내역',''],
        id:'IN_MO_MYP_01_29', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-18', worker:''
    }, {
        depth:['','','이벤트 참여내역',''],
        id:'IN_MO_MYP_01_30', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-18', worker:''
    }, {
        depth:['','개인결제','',''],
        id:'IN_MO_MYP_01_31', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-31', worker:''
    }, {
        depth:['','보유쿠폰','다운로드 가능한 쿠폰(T)',''],
        id:'IN_MO_MYP_01_32', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','보유쿠폰(T)',''],
        id:'IN_MO_MYP_01_35', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','뷰티포인트 내역','',''],
        id:'IN_MO_MYP_01_38', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03', worker:''
    }, {
        depth:['','찜한제품','',''],
        id:'IN_MO_MYP_01_40', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-03', worker:'김희경'
    }, {
        depth:['','스마트 영수증','목록',''],
        id:'IN_MO_MYP_01_43', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','상세',''],
        id:'IN_MO_MYP_01_44', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','1:1문의','내역',''],
        id:'IN_MO_MYP_01_45', status:'com',
        type:'', note:'답변확인에서 확인가능',
        sDate:'', eDate:'2024-04-26', worker:'김희경'
    }, {
        depth:['','','1:1 문의하기(T)',''],
        id:'IN_MO_MYP_01_46', status:'com',
        type:'', note:'',
        sDate:'2024-04-24', eDate:'2024-04-26/2024-04-24', worker:'김희경'
    }, {
        depth:['','','1:1 답변확인(T)',''],
        id:'IN_MO_MYP_01_48', status:'com',
        type:'', note:'',
        sDate:'2024-04-24', eDate:'2024-04-26/2024-04-24', worker:'김희경'
    }
    , {
        depth:['','입고알림 신청내역','',''],
        id:'IN_MO_MYP_01_49', status:'',
        type:'', note:'품절상품 상세에서 알림신청가능 - PC에서도 신청 가능',
        sDate:'', eDate:'2024-05-03', worker:'김희경'
    }, {
        depth:['','공병수거 현황','내 공병수거 현황(T)','온라인 공병수거 신청'],
        id:'IN_MO_MYP_01_51', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','','공병수거 신청'],
        id:'IN_MO_MYP_01_57', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','공병 프리퀀시(T)',''],
        id:'IN_MO_MYP_01_67', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','개인정보 수정','비밀번호 확인',''],
        id:'IN_MO_MYP_01_68', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:'형민우'
    }, {
        depth:['','','','개인정보 수정'],
        id:'IN_MO_MYP_01_69', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:'형민우'
    }, {
        depth:['','배송지 관리','',''],
        id:'IN_MO_MYP_01_76', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','피부정보 관리','',''],
        id:'IN_MO_MYP_01_81', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','원클릭결제 카드관리','',''],
        id:'IN_MO_MYP_01_82', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','설정','',''],
        id:'IN_MO_MYP_01_84', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','마이샵 관리','',''],
        id:'IN_MO_MYP_01_85', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-05-10', worker:'김나람'
    }, {
        depth:['','FAQ','',''],
        id:'IN_MO_MYP_01_87', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','공지사항','',''],
        id:'IN_MO_MYP_01_88', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['고객센터','','',''],
        id:'IN_MO_MYP_01_90', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','FAQ','',''],
        id:'IN_MO_MYP_01_91', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-07-12', worker:''
    }, {
        depth:['','공지사항','',''],
        id:'IN_MO_MYP_01_92', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-07-12', worker:''
    }, {
        depth:['','전자공고','',''],
        id:'IN_MO_MYP_01_93', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['회원','회원가입','',''],
        id:'IN_MO_MYP_01_94', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','로그인','',''],
        id:'IN_MO_MYP_01_95', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','임직원 인증','',''],
        id:'IN_MO_MYP_01_97', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-24', worker:''
    }, {
        depth:['','비회원 주문조회','주문번호/주문비밀번호 입력',''],
        id:'IN_MO_MYP_01_98', status:'',
        type:'', note:'',
        sDate:'', eDate:'2024-06-28', worker:''
    }, {
        depth:['','','','주문번호 찾기'],
        id:'IN_MO_MYP_01_99', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','','주문 비밀번호 찾기'],
        id:'IN_MO_MYP_01_100', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','','비회원 주문 내역 조회'],
        id:'IN_MO_MYP_01_101', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['풋터','ABOUT US(T)','BRAND STORY(T)',''],
        id:'IN_MO_FOO_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','GREEN TEA HERITAGE(T)',''],
        id:'IN_MO_FOO_01_02', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','BETTER FOR EARTH(T)',''],
        id:'IN_MO_FOO_01_03', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','이용약관','',''],
        id:'IN_MO_FOO_01_04', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','개인정보처리방침','',''],
        id:'IN_MO_FOO_01_05', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','영상기기관리방침','',''],
        id:'IN_MO_FOO_01_10', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','위치기반서비스 이용약관','',''],
        id:'IN_MO_FOO_01_12', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','사업자정보 확인','보안문자 입력',''],
        id:'IN_MO_FOO_01_13', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','','사업자정보'],
        id:'IN_MO_FOO_01_14', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','약관 및 법적고지','',''],
        id:'IN_MO_FOO_01_15', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }, {
        depth:['','','토스페이먼츠 구매안전 서비스 가입 확인',''],
        id:'IN_MO_FOO_01_16', status:'',
        type:'', note:'',
        sDate:'', eDate:'', worker:''
    }
])

var row_chk,
    path,
    link;

const change_device = () => {
    const target = document.querySelector('table tbody');

    while (target.firstElementChild) {
        target.removeChild(target.firstElementChild);
        // key_cnt.value = document.querySelector('.latest').childElementCount;
    }

    if(event.target.textContent == 'MO'){
        event.target.textContent = 'PC';
        device.value=PC_arry;
    } else {
        event.target.textContent = 'MO'
        device.value=MO_arry;
    }

    for (var j=0; j<comm_arry.length; j++){
        document.querySelector('tbody').insertAdjacentHTML('beforeend', '<tr class="'+row_chk+'">'
        +   '<th>'+comm_arry[j].depth[0]+'</th>'
        +   '<td class="'+comm_arry[j].status+'">'+comm_arry[j].depth[1]+'</td>'
        +   '<td class="'+comm_arry[j].status+'">'+comm_arry[j].depth[2]+'</td>'
        +   '<td class="'+comm_arry[j].status+'">'+comm_arry[j].depth[3]+'</td>'
        +   '<td class="ac '+comm_arry[j].status+'"><a href="'+link+'" target="_blank" class="'+comm_arry[j].type+'">'+comm_arry[j].id+'</a></td>'
        +   '<td class="'+comm_arry[j].status+'">'+comm_arry[j].note+'</td>'
        +   '<td class="ac '+comm_arry[j].status+'">'+comm_arry[j].sDate+'</td>'
        +   '<td class="ac '+comm_arry[j].status+'">'+comm_arry[j].eDate+'</td>'
        +   '<td class="ac '+comm_arry[j].status+'">'+comm_arry[j].worker+'</td>'
        +'</tr>');
    }

    for (var i=0; i<device.value.length;i++) {
        /* row 시작 체크 */
        if(device.value[i].depth[0].length != 0){
            row_chk = 'row';
        } else {
            row_chk = '';
        }

        /* path */
        if(device.value[i].type == 'modal'){
            path = '/publish/modal/'
        } else {
            path = '/publish/'
        }

        if(device.value[i].id == 'IN_MO_HOM_01_01'){
            link = path
        } else {
            link = path+device.value[i].id
        }

        if(device.value[i].status == ''){
            device.value[i].status = 'not_link';
        }

        if(device.value[i].type == 'component'){
            device.value[i].status = device.value[i].status+' not_link'
        }

        // device.value

        document.querySelector('tbody').insertAdjacentHTML('beforeend', '<tr class="'+row_chk+'">'
        +   '<th>'+device.value[i].depth[0]+'</th>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[1]+'</td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[2]+'</td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[3]+'</td>'
        +   '<td class="ac '+device.value[i].status+'"><a href="/publish/'+device.value[i].id+'" target="_blank" class="'+device.value[i].type+'">'+device.value[i].id+'</a></td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].note+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].sDate+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].eDate+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].worker+'</td>'
        +'</tr>');
    }
}

onMounted(() => {
    if(device.value == 'PC'){
        device.value = PC_arry;
    } else {
        device.value = MO_arry;
    }

    for (var j=0; j<comm_arry.length; j++){
        document.querySelector('tbody').insertAdjacentHTML('beforeend', '<tr class="'+row_chk+'">'
        +   '<th>'+comm_arry[j].depth[0]+'</th>'
        +   '<td class="'+comm_arry[j].status+'">'+comm_arry[j].depth[1]+'</td>'
        +   '<td class="'+comm_arry[j].status+'">'+comm_arry[j].depth[2]+'</td>'
        +   '<td class="'+comm_arry[j].status+'">'+comm_arry[j].depth[3]+'</td>'
        +   '<td class="ac '+comm_arry[j].status+'"><a href="'+link+'" target="_blank" class="'+comm_arry[j].type+'">'+comm_arry[j].id+'</a></td>'
        +   '<td class="'+comm_arry[j].status+'">'+comm_arry[j].note+'</td>'
        +   '<td class="ac '+comm_arry[j].status+'">'+comm_arry[j].sDate+'</td>'
        +   '<td class="ac '+comm_arry[j].status+'">'+comm_arry[j].eDate+'</td>'
        +   '<td class="ac '+comm_arry[j].status+'">'+comm_arry[j].worker+'</td>'
        +'</tr>');
    }

    for (var i=0; i<device.value.length;i++) {
        /* row 시작 체크 */
        if(device.value[i].depth[0].length != 0){
            row_chk = 'row';
        } else {
            row_chk = '';
        }

        /* path */
        if(device.value[i].type == 'modal'){
            path = '/publish/modal/'
        } else {
            path = '/publish/'
        }

        // if(device.value[i].id == 'IN_PC_HOM_01_01'){
        //     link = path
        // } else {
        //     link = path+device.value[i].id
        // }

        if(device.value[i].status == ''){
            device.value[i].status = 'not_link';
        }

        if(device.value[i].type == 'component'){
            device.value[i].status = device.value[i].status+' not_link'
        }

        document.querySelector('tbody').insertAdjacentHTML('beforeend', '<tr class="'+row_chk+'">'
        +   '<th>'+device.value[i].depth[0]+'</th>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[1]+'</td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[2]+'</td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[3]+'</td>'
        +   '<td class="ac '+device.value[i].status+'"><a href="/publish/'+device.value[i].id+'" target="_blank" class="'+device.value[i].type+'">'+device.value[i].id+'</a></td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].note+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].sDate+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].eDate+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].worker+'</td>'
        +'</tr>');
    }
})
</script>

<style lang="scss" scoped>
.ac {text-align:center;}
h2 {margin:20px 20px 40px; font-size:24px; font-weight:700; text-align:center;}
h2:after {clear:both; content:''; display:block;}
h2 .legend {margin-top:15px; display:flex; justify-content:end; gap:15px;}
h2 .badge {font-size:14px; font-weight:500;}
h2 .badge:before {width:18px; height:18px; margin-right:5px; border-radius:4px; vertical-align:middle; content:''; display:inline-block;}
h2 .badge.modal:before {background-color:#0070ba;}
h2 .badge.com:before {background-color:#ddeeff;}
h2 .badge.ing:before {background-color:#fff4f4;}
h2 .badge.edit:before {background-color:yellow;}
table {width:100%; border-spacing:0; border-collapse:collapse;}
::v-deep th, ::v-deep td {padding:8px 10px; font-size:12px;}
thead {background-color:#fcfcfc; border-bottom:1px solid #222;}
thead tr > * + *, ::v-deep td {border-left:1px solid #ddd;}
::v-deep th {background-color:#f2f3f5;}
::v-deep tr.row {border-top:2px solid #222;}
::v-deep td.com {background-color:#ddeeff;}
::v-deep td.ing {background-color:#fff4f4;}
::v-deep td.edit {background-color:yellow;}
::v-deep td {border-bottom:1px solid #ddd;}
::v-deep td a {font-weight:700; text-decoration:underline; display:block;}
::v-deep td a.modal {padding:4px 5px; color:#fff; font-weight:400; background-color:#0070ba; border:1px solid #0070ba; text-decoration:none; border-radius:4px;}

.content section + section:before {margin:30px -20px; border-top:4px solid #F1F1F1; content:''; display:block;}

::v-deep .not_link a {cursor: default; pointer-events: none;}
</style>
