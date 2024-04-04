<template>
    <h2>퍼블리싱 리스트 <Button class="btn_small_outline" txt="PC" @click="change_device()" />
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
                <th>link</th>
                <th>비고</th>
                <th>시작일</th>
                <th>종료일</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</template>

<script setup>
definePageMeta({
  layout: 'guide'
})

/* device check text : 개발 시 제거해주세요. */
const device = ref('PC');

import { onMounted } from 'vue'

const PC_arry = ([
    {
        depth:['홈','','',''],
        id:'IN_PC_HOM_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:''
    }, {
        depth:['상품','목록','',''],
        id:'IN_PC_PRD_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:''
    }
])

const MO_arry = ([
    {
        depth:['홈','','',''],
        id:'IN_MO_HOM_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:''
    }, {
        depth:['상품','목록','',''],
        id:'IN_MO_PRD_01_01', status:'',
        type:'', note:'',
        sDate:'', eDate:''
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

    if(event.target.textContent == 'Mobile'){
        event.target.textContent = 'PC';
        device.value=PC_arry;
    } else {
        event.target.textContent = 'Mobile'
        device.value=MO_arry;
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

        // device.value

        document.querySelector('tbody').insertAdjacentHTML('beforeend', '<tr class="'+row_chk+'">'
        +   '<th>'+device.value[i].depth[0]+'</th>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[1]+'</td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[2]+'</td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[3]+'</td>'
        +   '<td class="ac '+device.value[i].status+'"><a href="'+link+'" target="_blank" class="'+device.value[i].type+'">'+device.value[i].id+'</a></td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].note+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].sDate+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].eDate+'</td>'
        +'</tr>');
    }
}

onMounted(() => {
    if(device.value == 'PC'){
        device.value = PC_arry;
    } else {
        device.value = MO_arry;
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

        if(device.value[i].id == 'IN_PC_HOM_01_01'){
            link = path
        } else {
            link = path+device.value[i].id
        }

        document.querySelector('tbody').insertAdjacentHTML('beforeend', '<tr class="'+row_chk+'">'
        +   '<th>'+device.value[i].depth[0]+'</th>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[1]+'</td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[2]+'</td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].depth[3]+'</td>'
        +   '<td class="ac '+device.value[i].status+'"><a href="'+link+'" target="_blank" class="'+device.value[i].type+'">'+device.value[i].id+'</a></td>'
        +   '<td class="'+device.value[i].status+'">'+device.value[i].note+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].sDate+'</td>'
        +   '<td class="ac '+device.value[i].status+'">'+device.value[i].eDate+'</td>'
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
table {width:100%; border-spacing:0; border-collapse:collapse;}
::v-deep th, ::v-deep td {padding:8px 10px; font-size:12px;}
thead {background-color:#fcfcfc; border-bottom:1px solid #222;}
thead tr > * + *, ::v-deep td {border-left:1px solid #ddd;}
::v-deep th {background-color:#f2f3f5;}
::v-deep tr.row {border-top:2px solid #222;}
::v-deep td.com {background-color:#ddeeff;}
::v-deep td.ing {background-color:#fff4f4;}
::v-deep td {border-bottom:1px solid #ddd;}
::v-deep td a {font-weight:700; text-decoration:underline; display:block;}
::v-deep td a.modal {padding:4px 5px; color:#fff; font-weight:400; background-color:#0070ba; border:1px solid #0070ba; text-decoration:none; border-radius:4px;}

.content section + section:before {margin:30px -20px; border-top:4px solid #F1F1F1; content:''; display:block;}
</style>