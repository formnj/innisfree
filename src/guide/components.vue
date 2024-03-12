<template>
    <section>
        <h2>Inputs</h2>
        <ul class="toolbar">
            <li><button class="current" @click="tool_select('text');">Text</button></li>
            <li><button @click="tool_select('pw');">Password</button></li>
            <li><button @click="tool_select('check');">Checkbox</button></li>
            <li><button @click="tool_select('radio');">Radio</button></li>
            <li><button @click="tool_select('isswitch');">Switch</button></li>
        </ul>
        <div class="design_box">
            <Inputs :_type="input_opt.type" :isswitch="input_opt.isswitch" :_placeholder="input_opt.Placeholder"
                _text="Label" />
        </div>
        <pre class="code_box"><code>&lt;Inputs {{ input_opt.opt }} /&gt;</code></pre>
    </section>

    <section>
        <h2>Select</h2>
        <div class="design_box">
            <Selectbox
                :options="[
                    { val: 'value', txt: '배송 전, 연락 바랍니다.' },
                    { val: 'value' , txt: '부재 시, 연락 바랍니다.' },
                    { val: 'value' , txt: '부재 시, 경비실에 맡겨주세요.' },
                    { val: 'value' , txt: '부재 시, 문 앞에 놓아주세요.' },
                    { val: 'value' , txt: '직접 입력' }
                ]" />
        </div>
        <pre class="code_box"><code>&lt;Selectbox :options="{{ select_opt }}" /&gt;</code></pre>
    </section>
</template>

<script setup>
import { reactive } from 'vue'
import Inputs from '@/components/Inputs'
import Selectbox from '@/components/Selectbox'

const input_opt = reactive(
    {
        Placeholder: '문구를 입력해주세요.',
        type: 'text', //default type
        isswitch: Boolean,
        opt: '_type="text" _placeholder="문구를 입력해주세요"'
    }
)

const select_opt = [
    { val: 'value', txt: '배송 전, 연락 바랍니다.' },
    { val: 'value' , txt: '부재 시, 연락 바랍니다.' },
    { val: 'value' , txt: '부재 시, 경비실에 맡겨주세요.' },
    { val: 'value' , txt: '부재 시, 문 앞에 놓아주세요.' },
    { val: 'value' , txt: '직접 입력' }
]

const tool_select = (props) => {

    for (var i = 0; i < event.currentTarget.closest('.toolbar').querySelectorAll('button').length; i++) {
        event.currentTarget.closest('.toolbar').querySelectorAll('button')[i].classList.remove('current');
    }
    event.currentTarget.classList.add('current');

    switch (props) {
        case 'isswitch':
            input_opt.isswitch = true
            input_opt.type = 'checkbox',
                input_opt.opt = '_type="' + input_opt.type + '" :isswitch="' + input_opt.isswitch + '" _text="Label"'
            break;

        case 'pw':
            input_opt.isswitch = false
            input_opt.type = 'password',
                input_opt.Placeholder = '비밀번호를 입력해주세요',
                input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"'
            break;

        case 'check':
            input_opt.isswitch = false
            input_opt.type = 'checkbox',
                input_opt.opt = '_type="' + input_opt.type + '" _text="Label"'
            break;

        case 'radio':
            input_opt.isswitch = false
            input_opt.type = 'radio',
                input_opt.opt = '_type="' + input_opt.type + '" _text="Label"'
            break;

        default:
            input_opt.isswitch = false
            input_opt.type = 'text',
                input_opt.Placeholder = '문구를 입력해주세요',
                input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"'
            break;
    }
}
</script>

<style lang="scss" scoped></style>