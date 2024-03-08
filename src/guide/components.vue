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
            <Inputs :_type="form_opt.type" :isswitch="form_opt.isswitch" :_placeholder="form_opt.Placeholder" _text="Label" />
        </div>
        <pre class="code_box"><code>&lt;Inputs {{ form_opt.opt }} /&gt;</code></pre>
    </section>

    <section>
        <h2>Select</h2>
        <div class="design_box">
            
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'
import Inputs from '@/components/Inputs'

const form_opt = reactive(
    {
        Placeholder : '문구를 입력해주세요.',
        type        : 'text', //default type
        isswitch    : Boolean,
        opt         : '_type="text" _placeholder="문구를 입력해주세요"'
    }
)

const tool_select = (props) => {

    for(var i = 0; i<event.currentTarget.closest('.toolbar').querySelectorAll('button').length; i++){
        event.currentTarget.closest('.toolbar').querySelectorAll('button')[i].classList.remove('current');
    }
    event.currentTarget.classList.add('current');

    switch (props) {
        case 'isswitch':
            form_opt.isswitch = true
            form_opt.type = 'checkbox',
            form_opt.opt = '_type="'+ form_opt.type +'" :isswitch="'+ form_opt.isswitch +'" _text="Label"'
            break;

        case 'pw':
            form_opt.isswitch = false
            form_opt.type = 'password',
            form_opt.Placeholder = '비밀번호를 입력해주세요',
            form_opt.opt = '_type="'+ form_opt.type +'" _placeholder="'+ form_opt.Placeholder +'"'
            break;

        case 'check':
            form_opt.isswitch = false
            form_opt.type = 'checkbox',
            form_opt.opt = '_type="'+ form_opt.type +'" _text="Label"'
            break;

        case 'radio':
            form_opt.isswitch = false
            form_opt.type = 'radio',
            form_opt.opt = '_type="'+ form_opt.type +'" _text="Label"'
            break;

        default:
            form_opt.isswitch = false
            form_opt.type = 'text',
            form_opt.Placeholder = '문구를 입력해주세요',
            form_opt.opt = '_type="'+ form_opt.type +'" _placeholder="'+ form_opt.Placeholder +'"'
            break;
    }
}
</script>

<style></style>