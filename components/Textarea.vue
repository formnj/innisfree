<template>
    <div class="label_wrap">
        <label class="input" :class="{'err':isError}">
            <i v-if="_placeholder && !isDisabled">{{_placeholder}}</i>
            <textarea :id="_id" :value="_value" @focus="hidePlaceholder" @blur="valueChk" @keyup="input_btn_chk" :readonly="isReadonly" :disabled="isDisabled" />
            <em v-if="isError" class="err_txt">{{_err_text}}</em>
            <button class="icon_del" v-if="_type != 'password'" @click="input_btn_fn">Delete</button>
        </label>
    </div>
</template>

<script setup>
    const props = defineProps({
        _id: String, //input ID
        _name: String, // Input NAME
        _placeholder: String, // Input PLACEHOLDER
        _value: null, // Input VALUE
        _err_text: String, // 오류 시 노출 문구
        isError: false, // 오류 여부
        isReadonly: false, // readonly 여부
        isDisabled:false, // disabled 여부
        isRrequired: false, // 필수값 여부
    });

    const hidePlaceholder = (e) => { //focus시 placeholder 숨김
        if(e.currentTarget.parentElement.querySelectorAll('i').length > 0){
            e.currentTarget.previousSibling.style.display="none"
        }
    }

    const valueChk = (e) => { //blur 시 value 유무 확인하여 placeholder 조절
        console.log(e.currentTarget.value.length);
        if(e.currentTarget.value.length > 0){
            if(e.currentTarget.parentElement.querySelectorAll('i').length > 0){
                e.currentTarget.previousSibling.style.display='none';
            }
        } else {
            if(e.currentTarget.parentElement.querySelectorAll('i').length > 0){
                e.currentTarget.previousSibling.style.removeProperty('display');
            }
        }
    }

    const input_btn_chk = (e) => { //keypress 시 value 유무 확인하여 버튼 노출 조절
        var icon_button = e.currentTarget.closest('.label_wrap').querySelector('button');
        if(e.currentTarget.value.length > 0){
            icon_button.style.cssText="display:block;"
        }else{
            icon_button.style.cssText="display:none;"
        }
    }

    const input_btn_fn = (e) => { //label_wrap의 버튼 클릭 시 각 기능
        var icon_button = e.currentTarget.closest('.label_wrap').querySelector('button');
        if(icon_button.getAttribute('class') == 'icon_del'){ //value 삭제
            e.currentTarget.closest('.label_wrap').querySelector('textarea').value = null;
            icon_button.style.cssText="display:none;"
            if(e.currentTarget.parentElement.querySelectorAll('i').length > 0){
                e.currentTarget.closest('.label_wrap').querySelector('i').style.display='block';
            }
        }
    }
</script>
<style scoped>
em {font-style:normal;}
label.input {position:relative; display:block;}
label.input i {color:#aaa; font-size:16px; font-style:normal; line-height:18px; position:absolute; top:20px; left:15px; transform:translateY(-50%);}/* placeholder */
label.input textarea {width:100%; font-size:16px;; line-height:18px; resize:none;}
label.input .err_txt {margin-top:5px; color:#ff7200; font-size:12px; line-height:18px; display:none;}
label.input.err .err_txt {display:block;}
label.input * {flex:1 auto;}

.label_wrap {position:relative; flex:1;}
.label_wrap button[class*='icon_'] {width:24px; height:24px; font-size:0; background-repeat:no-repeat; border-radius:50%; position:absolute; top:9px; right:15px; z-index:1; display:none;}
.label_wrap button[class*='icon_'] + button[class*='icon_'] {margin-right:34px;}
.label_wrap button[class*='icon_'] {background-image:url('@/assets/images/common/icon_split.png'); background-repeat:no-repeat; background-size:250px auto;}
.label_wrap button.icon_del {background-position:0 0;}
.label_wrap button.icon_pass {background-position:-80px 0;}
.label_wrap button.icon_text {background-position:-40px 0;}
</style>
