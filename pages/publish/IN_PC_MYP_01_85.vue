<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <h2>고객센터</h2>
  </div>

  <div class="inner">
    <Tabs tabType="type_03" :item="[{txt:'FAQ'},{txt:'공지사항'},{txt:'1:1 상담'},{txt:'매장안내'},{txt:'창업안내'},{txt:'전자공고'}]"  :tabidx="3" />

    <Tabs tabType="type_04" :item="[{txt:'자주 구매한 매장'},{txt:'지역별 매장안내'}]" :tabidx="0" @click="tabContShow"/>

    <div class="tab_contents">  <!-- 탭 컨텐츠 -->

      <div class="tab_cont" style="display: block;">  <!-- 자주 구매한 매장 -->
        <div class="my_shop_wrap">
          <div class="info">
            <div class="title">
              <h3>MY SHOP이란?</h3>
              <p>내가 선택하는 ‘나의 단골매장’으로<br>내 단골 매장 서비스 소식을 받아보실 수 있습니다.</p>
              <p class="sub_txt">자주가는 매장을 확인하시고 특별한 혜택을 받아가세요!</p>
            </div>
          </div>

          <div class="my_shop">
            <p>MY SHOP으로 등록된 매장이 없습니다.<br>자주가는 매장을 찾아 MY SHOP으로 등록해보세요!</p><!-- 등록된 매장이 없을 경우 -->
            <dl>
              <dt>IF 은평 신사점</dt>
              <dd>
                <span>[03423] 서울특별시 은평구 갈현로 14, 1층 (신사동)</span>
                <Button class="btn_outline btn_min" txt="삭제" />
              </dd>
            </dl>
          </div>
        </div>

        <div class="table">
          <table>
            <caption>자주가는 매장</caption>
            <colgroup>
              <col style="width:15%;">
              <col>
              <col style="width:15%;">
              <col style="width:15%;">
              <col style="width:15%;">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">매장명</th>
                <th scope="col">주소</th>
                <th scope="col">최근 구매 횟수</th>
                <th scope="col">위치</th>
                <th scope="col">마이매장</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="5">자주가는 매장이 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="bul_list ref">
          <li>최근 구매 횟수는 최근 1년간 구매한 횟수 입니다.</li>
          <li>MY SHOP 등록은 오프라인 매장만 가능합니다.</li>
        </ul>
      </div>

      <div class="tab_cont"><!-- 지역별 매장 -->
        <div class="search">
          <div class="box">
            <h4>지역별 검색</h4>
            <div class="multi_form">
              <Selectbox
              :options="[
                { val: 'op1', name: 'op', txt: '광역시/도' },
                { val: 'op2', name: 'op', txt: '강원' },
                { val: 'op3', name: 'op', txt: '경기' },
                { val: 'op4', name: 'op', txt: '경남' },
              ]" />
            <Selectbox
              :options="[
                { val: 'op1', name: 'op2', txt: '시/군/구' },
                { val: 'op2', name: 'op2', txt: '강릉시' },
                { val: 'op3', name: 'op2', txt: '고성군' },
                { val: 'op4', name: 'op2', txt: '동해시' },
              ]" />
              <Button class="btn_outline" txt="검색" />
            </div>
          </div>
          <div class="box">
            <h4>주소 / 매장명 검색</h4>
            <div class="multi_form">
              <Inputs _type="text" _placeholder="검색어를 입력해주세요." />
              <Button class="btn_outline" txt="검색" />
            </div>
          </div>
        </div>
        <div class="table">
          <table>
            <caption>지역별 매장</caption>
            <colgroup>
              <col style="width:16%;">
              <col>
              <col style="width:17%;">
              <col style="width:17%;">
              <col style="width:16%;">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">매장명</th>
                <th scope="col">주소</th>
                <th scope="col">전화번호</th>
                <th scope="col">위치</th>
                <th scope="col">마이매장</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in shop_list" :key="idx">
                <td>{{ item.branch }}</td>
                <td class="ta_l">{{ item.add }}</td>
                <td>{{ item.phone }}</td>
                <td><button type="button" class="btn_link_arrw">지도보기</button></td>
                <td><Inputs _type="radio" _text="선택" _name="map" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { shop_list } from '~/test/data/publish/dummyData'
definePageMeta({
  layout:'pc-category'
});
const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
});

const tabContShow = (e) => {
  const el = e.target;
  const clickedLi = el.closest('li');
  const tabIdx = [...el.closest('li').parentElement.children].indexOf(clickedLi);
  const tabConts = [...el.closest('ul').parentElement.nextElementSibling.children];
  for(const i in tabConts) {
    tabConts[i].style.display = "none";
  }
  tabConts[tabIdx].style.display = "block";
}
</script>
<style lang="scss" scoped>
.title_wrap {
  padding:0 20px;
  margin:60px auto 30px;
}
.inner {
  .tab_wrap + .tab_wrap {
    margin: 60px 0 50px;
  }
  .tab_cont {
    display: none;
  }

  .my_shop_wrap {

    .info {
      margin: 75px 0 0;
      text-align: center;

      .title {
        h3 {
          font-weight: 500;
          font-size: 26px;
          line-height: 40px;
          vertical-align: middle;
          display: inline-block;

          &:before {
            content: '';
            width: 40px;
            height: 40px;
            margin-right: 12px;
            background: url('~/assets/images/common/icon_split.png') -460px -500px no-repeat;
            display: inline-block;
            vertical-align: middle;
          }
        }

        p {
          margin: 20px 0 0;
          font-size: 16px;
          font-weight: 600;
          color: #666;

          &.sub_txt {
            margin: 20px 0 0;
            font-size: 14px;
            line-height: 1.57;
            color: #999;
          }
        }
      }
    }

    .my_shop {
      margin: 30px 0 80px;
      padding: 38px 39px;
      font-size: 14px;
      line-height: 1.57;
      color: #333;
      background: #FCFCFD;
      border: 1px solid #EEEE;

      p {
        text-align: center;
      }

      dl {
        display: flex;
        gap: 20px;

        dt {
          font-weight: 600;
          color: #333;
        }

        dd {
          flex: 1;
          display: flex;

          span {
            flex: 1;
          }

          :deep(button) {
            background-color: #fff !important;

            em {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .search {
    margin-bottom: 40px;
    display: flex;
    gap: 40px;
    justify-content: space-between;

    .box {
      flex: 1;
      h4 {
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 22px;
        line-height: 1.55;
      }

      .multi_form {
        display: flex;

        :deep(label.select) {
          flex: 1;
        }
      }
    }
  }
}



.table {
  border-top:2px solid #000;
  position:relative;
  table {
    width:100%;
    border-collapse:collapse;
    border:0;
    table-layout:fixed;
    caption {
      position:absolute;
      z-index:-1;
      font-size:0;
    }
    th {
      padding:15px 20px;
      border-bottom:1px solid #EEE;
      border-left:1px solid #EEE;
      color:#000;
      font-size:14px;
      font-weight:500;
      line-height:1.5;
      text-align:center;
      background:#F5F5F5;
    }
    td {
      padding:21px 20px;
      color:#333;
      font-size:16px;
      line-height:1.5;
      text-align:center;
      border-left:1px solid #EEE;
      border-bottom:1px solid #EEE;
      span {
        color:#777;
        font-size:14px;
      }
      sup {
        font-size:10px;
        line-height:12px;
      }
    }
    th:first-child,
    td:first-child {
      border-left:0;
    }
    .btn_link_arrw {
      text-decoration: underline;
    }
  }

  & + .bul_list.ref {
    margin-top: 30px;

    li {
      color: #666;
    }
  }
}

.ta_l {
  text-align: left !important;
}
</style>
