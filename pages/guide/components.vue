<template>
    <section>
        <h2>Inputs</h2>
        <ul class="toolbar">
            <li><button class="current" @click="tool_select('text');">Text</button></li>
            <li><button @click="tool_select('error');">Error</button></li>
            <li><button @click="tool_select('pw');">Password</button></li>
            <li><button @click="tool_select('check');">Checkbox</button></li>
            <li><button @click="tool_select('radio');">Radio</button></li>
            <li><button @click="tool_select('isswitch');">Switch</button></li>
        </ul>
        <div class="design_box">
            <Inputs :_type="input_opt.type" :isswitch="input_opt.isswitch" :_placeholder="input_opt.Placeholder"
                _text="Label" :isDisabled="_disabled" :isError="input_opt.isError" :_err_text="input_opt.err_text" />
        </div>
        <pre class="code_box"><code>&lt;Inputs {{ input_opt.opt }} /&gt;</code></pre>
    </section>

    <section>
        <h2>Select</h2>
        <div class="design_box">
            <Selectbox
                :options="[
                    { val: 'value', txt: '옵션01' },
                    { val: 'value', txt: '옵션02' }
                ]" />
        </div>
        <pre class="code_box"><code>&lt;Selectbox
    :options="{{ select_opt }}" /&gt;</code></pre>
    </section>

    <section>
        <h2>Button</h2>
        <ul class="explain">
            <li>클래스 규칙 : btn_크기_타입(보더유무)<br/>
                ex) &lt;Button class="btn_big_outline" /&gt;]
            </li>
            <li>size : default = 40 / [_big] = 60 / [_mid] = 50 / [_min] = 30</li>
        </ul>
        <div class="design_box">
            <div class="multi_form">
                <Button class="btn_big" txt="btn_big (60px)sss" />

                <Button class="btn_mid" txt="btn_mid (50px)" />

                <Button txt="default (40px)" />

                <Button class="btn_min" txt="btn_min (30px)" />

                <Button class="btn_big_outline" txt="btn_big_outline (60px)" />

                <Button class="btn_mid_outline" txt="btn_mid_outline (50px)" />

                <Button class="btn_outline" txt="btn_outline (40px)" />

                <Button class="btn_min_outline" txt="btn_min_outline (30px)" />
            </div>
        </div>
        <pre class="code_box"><code>&lt;Button /&gt;</code></pre>
    </section>

    <section>
        <h2>Multi form</h2>
        <div class="design_box">
            <ul class="form_group">
                <li>
                    <p class="form_tit">Input + Button</p>
                    <div class="multi_form">
                        <Inputs _type="text" _placeholder="문구를 입력해주세요" />
                        <Button />
                    </div>
                </li>
                <li>
                    <p class="form_tit">Input + Input</p>
                    <div class="multi_form">
                        <Inputs _type="text" _placeholder="문구를 입력해주세요" />
                        <Inputs _type="text" _placeholder="문구를 입력해주세요" />
                    </div>
                </li>
            </ul>
        </div>
        <pre class="code_box"><code>&lt;div class="multi_form"&gt;
    &lt;Inputs _type="text" _placeholder="문구를 입력해주세요" /&gt;
    &lt;Inputs _type="text" _placeholder="문구를 입력해주세요" /&gt;
&lt;/div&gt;</code></pre>
    </section>

    <section>
        <h2>Goods Item</h2>
        <ul class="explain">
            <li>sold out, coming soon = status:'sold_out' or 'coming_soon'</li>
        </ul>
        <div class="design_box">
            <div class="list_wrap">
                <ul class="goods_list">
                    <li v-for="(item, idx) in sample_goods" :key="idx">
                        <GoodsItem :item="item" :link="item.link" />
                    </li>
                </ul>
            </div>
        </div>
        <pre class="code_box"><code>&lt;div class="list_wrap"&gt;
    &lt;ul class="goods_list"&gt;
        &lt;li v-for="(item, idx) in sample_goods" :key="idx"&gt;
            &lt;GoodsItem :item="item" :link="item.link" /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>
    </section>

    <section>
        <h2>Modal</h2>
        <ul class="explain">
            <li>Open : modal.open(모달아이디, 타입);<br/> 타입 = full / alert</li>
            <li>Close : modal.close();</li>
        </ul>
        <div class="design_box">
            <div class="multi_form">
                <Button txt="Modal full" @click="modal.open('sample_modal', 'full');" />
                <Button txt="Modal alert" @click="modal.open('sample_modal', 'alert');" />
            </div>
        </div>
        <pre class="code_box"><code>&lt;div class="modal_wrap" id="sample_modal"&gt;
    &lt;div class="modal_container"&gt;
        &lt;div class="modal_header"&gt;
            &lt;h2&gt;Modal Title&lt;/h2&gt;
            &lt;Button class="btn_close" txt="닫기" @click="modal.close(this);" /&gt;
        &lt;/div&gt;
        &lt;div class="modal_content"&gt;
            &lt;div&gt; Sample Modal &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="modal_footer"&gt;
            &lt;Button class="btn_outline" txt="cancel" /&gt;
            &lt;Button txt="OK" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="overlay" @click="modal.close(this);"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </section>

    <!-- modal -->
    <div class="modal_wrap" id="sample_modal">
        <div class="modal_container">
            <div class="modal_header">
                <h2>Modal Title</h2>
                <Button class="btn_close" txt="닫기" @click="modal.close(this);" />
            </div>
            <div class="modal_content">
                <div>Sample Modal</div>
            </div>
            <div class="modal_footer">
                <Button class="btn_outline" txt="cancel" />
                <Button txt="OK" />
            </div>
        </div>
        <div class="overlay" @click="modal.close(this);"></div>
    </div>
    <!-- //modal -->
    
</template>

<script setup>
definePageMeta({
  layout: 'guide'
})

/* component sample data */
const input_opt = reactive(
    {
        Placeholder: '문구를 입력해주세요.',
        isswitch: Boolean,
        opt: '_type="text" _placeholder="문구를 입력해주세요"',
        isError: false
    }
)

const select_opt = `[
    { val: 'value', txt: '옵션01' },
    { val: 'value', txt: '옵션02' }
]`

const sample_goods = [
    {
        // img:("/_nuxt/assets/images/sam/sam_goods_list_01.jpg"),
        img:("https://images.innisfree.co.kr/upload/product/36781_l_S_240.jpg?T20240313235900"),
        overflip:("https://images.innisfree.co.kr/upload/product/36781_l1_S_240.jpg?T20240313235900"),
        cate:'BEST',
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        price:'11,000', sale:'~50%', cost:'26,000',
        status:'sold_out',
        sticker:[
            {txt:'type01', type:'type01'},
            {txt:'type02', type:'type02'},
            {txt:'type03', type:'type03'},
            {txt:'type04', type:'type04'}
        ],
        hash:['#스킨팩','#화장솜','#순면화장솜']
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_02.jpg"),
        overflip:("/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg"),
        name:'히알루론 수분 선크림 SPF 50+ PA++++',
        status:'coming_soon',
        sticker:[
            {txt:'증정', type:'type02'}
        ]
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_03.jpg"),
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    }, {
        img:("/_nuxt/assets/images/sam/sam_goods_list_04.jpg"),
    }
]
/* //component sample data */

/* inputs type function */
const tool_select = (props) => {

    for (var i = 0; i < event.currentTarget.closest('.toolbar').querySelectorAll('button').length; i++) {
        event.currentTarget.closest('.toolbar').querySelectorAll('button')[i].classList.remove('current');
    }
    event.currentTarget.classList.add('current');

    switch (props) {
        case 'isswitch':
            input_opt.isswitch = true,
            input_opt.type = 'checkbox',
            input_opt.opt = '_type="' + input_opt.type + '" :isswitch="' + input_opt.isswitch + '" _text="Label"'
            break;

        case 'error':
            input_opt.isswitch = false,
            input_opt.type = 'text',
            input_opt.Placeholder = '문구를 입력해주세요',
            input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"' + '" :isError="' + input_opt.isError + '" _err_text="Error Text"',
            input_opt.isError = true,
            input_opt.err_text = 'Error Text'
            break;

        case 'pw':
            input_opt.isswitch = false,
            input_opt.type = 'password',
            input_opt.Placeholder = '비밀번호를 입력해주세요',
            input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"',
            input_opt.isError = false
            break;

        case 'check':
            input_opt.isswitch = false,
            input_opt.type = 'checkbox',
            input_opt.opt = '_type="' + input_opt.type + '" _text="Label"'
            break;

        case 'radio':
            input_opt.isswitch = false,
            input_opt.type = 'radio',
            input_opt.opt = '_type="' + input_opt.type + '" _text="Label"'
            break;

        default:
            input_opt.isswitch = false,
            input_opt.type = 'text',
            input_opt.Placeholder = '문구를 입력해주세요',
            input_opt.opt = '_type="' + input_opt.type + '" _placeholder="' + input_opt.Placeholder + '"',
            input_opt.isError = false
            break;
    }
}
/* //inputs type function */

const modal = {
    open: (_target, _type) => {
        document.getElementById(_target).classList.add('active', _type);
        const body = document.querySelector("body");
        const pageY = document.body.scrollTop || document.documentElement.scrollTop;

        if (!body.hasAttribute("scrollY")) {
            body.setAttribute("scrollY", String(pageY));
            body.classList.add("lockbody");
        }
        body.addEventListener("touchmove", modal.lockScrollHandle, { passive: false });
    }, close: (_target) => {
        event.target.closest('.modal_wrap').setAttribute('class','modal_wrap');
        const body = document.querySelector("body");

        if (body.hasAttribute("scrollY")) {
            body.classList.remove("lockbody");
            body.scrollTop = Number(body.getAttribute("scrollY"));
            body.removeAttribute("scrollY");
        }

        body.removeEventListener("touchmove", modal.lockScrollHandle, { passive: true });
    }, lockScrollHandle(event) {
        const e = event || window.event;

        // 멀티 터치는 터치 되게 한다
        if (e.touches.length > 1) return;

        // event 초기화 속성이 있음 초기화
        e.preventDefault();
    }
}
</script>

<style lang="scss" scoped></style>