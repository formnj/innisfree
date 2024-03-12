<template>
    <h2>퍼블리싱 리스트
        <ul class="legend">
            <li><span class="badge modal">modal popup</span></li>
            <li><span class="badge com">완료</span></li>
            <li><span class="badge ing">진행중</span></li>
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
                <th>ID</th>
                <th>비고</th>
                <th>시작일</th>
                <th>종료일</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</template>

<script setup>
import { onMounted } from 'vue'

const page_arry = ([
    {
        depth:['','','',''],
        id:'', status:'',
        type:'', note:'',
        sDate:'', eDate:''
    }
])

onMounted(() => {
    var row_chk,
        path;

    for (var i=0; i<page_arry.length;i++) {
        /* row 시작 체크 */
        if(page_arry[i].depth[0].length != 0){
            row_chk = 'row';
        } else {
            row_chk = '';
        }

        /* path */
        if(page_arry[i].type == 'modal'){
            path = '/modal/'
        } else {
            path = '/'
        }

        document.querySelector('tbody').insertAdjacentHTML('beforeend', '<tr class="'+row_chk+'">'
        +   '<th>'+page_arry[i].depth[0]+'</th>'
        +   '<td class="'+page_arry[i].status+'">'+page_arry[i].depth[1]+'</td>'
        +   '<td class="'+page_arry[i].status+'">'+page_arry[i].depth[2]+'</td>'
        +   '<td class="'+page_arry[i].status+'">'+page_arry[i].depth[3]+'</td>'
        +   '<td class="ac '+page_arry[i].status+'"><a href="'+path+page_arry[i].id+'" target="_blank" class="'+page_arry[i].type+'">'+page_arry[i].id+'</a></td>'
        +   '<td class="'+page_arry[i].status+'">'+page_arry[i].note+'</td>'
        +   '<td class="ac '+page_arry[i].status+'">'+page_arry[i].sDate+'</td>'
        +   '<td class="ac '+page_arry[i].status+'">'+page_arry[i].eDate+'</td>'
        +'</tr>');
    }
})
</script>

<style lang="scss">
.ac {text-align:center;}
h2 {margin:20px 20px 40px; font-size:24px; font-weight:700; text-align:center;}
h2:after {clear:both; content:''; display:block;}
h2 .legend {margin-top:15px; display:flex; justify-content:end; gap:15px;}
h2 .badge {font-size:14px; font-weight:500;}
h2 .badge:before {width:18px; height:18px; margin-right:5px; border-radius:4px; vertical-align:middle; content:''; display:inline-block;}
h2 .badge.modal:before {background-color:#0070ba;}
h2 .badge.com:before {background-color:#ddeeff;}
h2 .badge.ing:before {background-color:#fff4f4;}
table {width:100%; border-spacing:0; border-collapse:collapse;}
th, td {padding:8px 10px; font-size:12px;}
thead {background-color:#fcfcfc; border-bottom:1px solid #222;}
thead tr > * + *, td {border-left:1px solid #ddd;}
th {background-color:#f2f3f5;}
tr.row {border-top:2px solid #222;}
td.com {background-color:#ddeeff;}
td.ing {background-color:#fff4f4;}
td {border-bottom:1px solid #ddd;}
td a {font-weight:700; text-decoration:underline; display:block;}
td a.modal {padding:4px 5px; color:#fff; font-weight:400; background-color:#0070ba; border:1px solid #0070ba; text-decoration:none; border-radius:4px;}

.content section + section:before {margin:30px -20px; border-top:4px solid #F1F1F1; content:''; display:block;}
</style>