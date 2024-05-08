<template>
  <div class="input_wrap" :class="{err:isError}">
    <label v-if="_type == 'checkbox' || _type == 'radio'" :class="{'check': !isswitch, 'check_ani': isswitch}">
        <input :type="_type" :id="_id" :name="_name" />
        <em class="label" v-html="_text"></em><!-- Edit 2024-05-08 텍스트 줄바꿈 등 활용을 위한 수정 -->
    </label>
    <div v-else class="label_wrap">
        <label class="input">
            <i v-if="_placeholder && !isDisabled">{{_placeholder}}</i>
            <input
              :id="_id"
              :type="_type"
              :value="_value"
              :readonly="isReadonly"
              :disabled="isDisabled"
              @focus="hidePlaceholder"
              @blur="valueChk"
              @keyup="input_btn_chk" />
            <button class="icon_del" v-if="_type != 'password'" @click="input_btn_fn">Delete</button>
            <button class="icon_pass" v-if="_type == 'password'" @click="input_btn_fn">password</button>
        </label>
    </div>
    <!-- 에러문구 -->
    <em v-if="isError" class="err_txt">{{_err_text}}</em>
    <!-- //에러문구 -->
  </div>

</template>

<script setup>
    const props = defineProps({
        _id: String, //input ID
        _name: String, // Input NAME
        // _type: String, // Input TYPE
        _type: {
            type: String,
            default: 'text'
        }, // Input TYPE
        _text: String, // checkbox, radio 문구
        _placeholder: String, // Input PLACEHOLDER
        _value: null, // Input VALUE
        _err_text: String, // 오류 시 노출 문구
        isError: false, // 오류 여부
        isReadonly: false, // readonly 여부
        isDisabled:false, // disabled 여부
        isswitch: false, // checkbox switch 형태
        isRrequired: false, // 필수값 여부
    });

    const hidePlaceholder = (e) => { //focus시 placeholder 숨김
        if(e.currentTarget.parentElement.querySelectorAll('i').length > 0){
            e.currentTarget.previousSibling.style.display="none"
        }
    }

    const valueChk = (e) => { //blur 시 value 유무 확인하여 placeholder 조절
        // console.log(e.currentTarget.value.length);
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
            e.currentTarget.closest('.label_wrap').querySelector('input').value = null;
            icon_button.style.cssText="display:none;"
            if(e.currentTarget.parentElement.querySelectorAll('i').length > 0){
                e.currentTarget.closest('.label_wrap').querySelector('i').style.display='block';
            }
        } else if(icon_button.getAttribute('class') == 'icon_pass') { //비밀번호 보기
            e.currentTarget.closest('.label_wrap').querySelector('input').setAttribute('type','text');
            icon_button.setAttribute('class', 'icon_text');
        } else { //비밀번호 숨기기
            e.currentTarget.closest('.label_wrap').querySelector('input').setAttribute('type','password');
            icon_button.setAttribute('class', 'icon_pass');
        }
    }
</script>
<style lang="scss" scoped>
.input_wrap {
  flex:1;
  .err_txt {
    margin-top:5px;
    color:#12b560;
    font-size:12px;
    line-height:18px;
    font-style:normal;
    display:none;
  }
  &.err {
    .err_txt {
      display:block;
    }
  }
  .check {
    min-height:20px;
    padding-left:26px;
    line-height:1;
    position:relative;
    display:inline-block;
    cursor:pointer;
    > * {
      line-height:1.4;
      vertical-align:middle;
      display:inline-block;
    }
    input {
      margin:0 0 0 1px;
      position:absolute;
    }
    .label:before, .label:after {
      content:'';
      position:absolute;
      display:inline-block;
    }
    input[type='radio'], input[type='checkbox'] {
      opacity:0;
    }
    input[type='radio'], input[type='radio'] + .label:before {
      width:20px;
      height:20px;
      background-color:#fff;
      border:1px solid #ccc;
      border-radius:50%;
      box-sizing:border-box;
      top:0;
      left:0;
    }
    input[type='radio']:checked + .label:after {
      width:14px;
      height:14px;
      background-color:#333;
      border-radius:50%;
      box-sizing:border-box;
      top:3px;
      left:3px;
    }
    input[type='checkbox'], input[type='checkbox'] + .label:before {
      width:20px;
      height:20px;
      background-color:#ddd;
      box-sizing:border-box;
      top:0;
      left:0;
      transition:all .2s;
    }
    input[type='checkbox'] + .label:after {
      width:6px;
      height:9px;
      border:2px solid #fff;
      border-top:0;
      border-left:0;
      top:4px;
      left:7px;
      -webkit-transform:rotate(45deg);
      transform:rotate(45deg);
    }
    input[type='checkbox']:checked, input[type='checkbox']:checked + .label:before {
      background-color:#00BC70;
    }
    input[type='checkbox']:disabled, input[type='checkbox']:disabled + .label:before {
      background-color:#f5f5f5;
    }
  }
  .check_ani {
    position:relative;
    display:inline-block;
    input {
      margin:0 0 0 1px;
      position:absolute;
      opacity:0;
      &[type='checkbox'] {
        opacity:0;
        & + .label:after {
          width:16px;
          height:16px;
          background-color:#fff;
          border-radius:50%;
          content:'';
          position:absolute;
          top:50%;
          left:2px;
          z-index:1;
          display:block;
          transform:translateY(-50%);
          transition:all 0.2s;
          box-shadow:0px 1px 4px rgba(0, 0, 0, 0.25);
        }
        &:checked + .label:before {
          background-color:#12b560;
        }
        &:checked + .label:after {
          left:17px;
        }
      }
    }
    .label {
      min-height:20px;
      padding-left:48px;
      font-size:16px;
      position:relative;
      display:block;
      &:before {
        width:35px;
        height:20px;
        background-color:#dcdcdc;
        border:0;
        border-radius:60px;
        content:'';
        position:absolute;
        top:0;
        left:0;
        display:inline-block;
      }
    }
  }
  label.input, label.select > div {
    position:relative;
    display:block;
  }
  label.input {
    i {
      color:#aaa;
      font-size:16px;
      font-style:normal;
      line-height:18px;
      position:absolute;
      top:20px;
      left:15px;
      transform:translateY(-50%);
    }
    input[type='text'], input[type='password'], input[type='number'] {
      width:100%;
      font-size:16px;
      line-height:18px;
    }
    * {
      flex:1 auto;
    }
  }
}

.label_wrap {
  position:relative; flex:1;
  button[class*='icon_'] {
    width:24px;
    height:24px;
    font-size:0;
    background-image:url('@/assets/images/common/icon_split.png');
    background-repeat:no-repeat;
    background-size:250px auto;
    border-radius:50%;
    position:absolute;
    top:9px;
    right:15px;
    z-index:1;
    display:none;
    & + button[class*='icon_'] {
      margin-right:34px;
    }
    &.icon_del {background-position:0 0;}
    &.icon_pass {background-position:-80px 0;}
    &.icon_text {background-position:-40px 0;}
  }
}
</style>
