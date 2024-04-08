import { reactive, unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$6 = {
  __name: "Inputs",
  __ssrInlineRender: true,
  props: {
    _id: String,
    //input ID
    _name: String,
    // Input NAME
    _type: String,
    // Input TYPE
    _text: String,
    // checkbox, radio 문구
    _placeholder: String,
    // Input PLACEHOLDER
    _value: null,
    // Input VALUE
    _err_text: String,
    // 오류 시 노출 문구
    isError: false,
    // 오류 여부
    isReadonly: false,
    // readonly 여부
    isDisabled: false,
    // disabled 여부
    isswitch: false,
    // checkbox switch 형태
    isRrequired: false
    // 필수값 여부
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props._type == "checkbox" || __props._type == "radio") {
        _push(`<label${ssrRenderAttrs(mergeProps({
          class: { "check": !__props.isswitch, "check_ani": __props.isswitch }
        }, _attrs))} data-v-ac7fd751><input${ssrRenderAttr("type", __props._type)}${ssrRenderAttr("id", __props._id)}${ssrRenderAttr("name", __props._name)} data-v-ac7fd751><em class="label" data-v-ac7fd751>${ssrInterpolate(__props._text)}</em></label>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "label_wrap" }, _attrs))} data-v-ac7fd751><label class="${ssrRenderClass([{ "err": __props.isError }, "input"])}" data-v-ac7fd751>`);
        if (__props._placeholder && !__props.isDisabled) {
          _push(`<i data-v-ac7fd751>${ssrInterpolate(__props._placeholder)}</i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input${ssrRenderAttr("type", __props._type)}${ssrRenderAttr("id", __props._id)}${ssrRenderAttr("value", __props._value)}${ssrIncludeBooleanAttr(__props.isReadonly) ? " readonly" : ""}${ssrIncludeBooleanAttr(__props.isDisabled) ? " disabled" : ""} data-v-ac7fd751><em class="err_txt" data-v-ac7fd751>${ssrInterpolate(_ctx.err_text)}</em>`);
        if (__props._type != "password") {
          _push(`<button class="icon_del" data-v-ac7fd751>Delete</button>`);
        } else {
          _push(`<!---->`);
        }
        if (__props._type == "password") {
          _push(`<button class="icon_pass" data-v-ac7fd751>password</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label></div>`);
      }
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inputs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-ac7fd751"]]);
const _sfc_main$5 = {
  __name: "Selectbox",
  __ssrInlineRender: true,
  props: {
    options: Array,
    model: String,
    isChange: false,
    isDisabled: false
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "select" }, _attrs))} data-v-68ebe29c><div data-v-68ebe29c><select class="${ssrRenderClass({ "changed": __props.isChange })}"${ssrRenderAttr("v-model", __props.model)}${ssrIncludeBooleanAttr(__props.isDisabled) ? " disabled" : ""} data-v-68ebe29c><!--[-->`);
      ssrRenderList(__props.options, (select, i) => {
        _push(`<option${ssrRenderAttr("value", select.val)} data-v-68ebe29c>${ssrInterpolate(select.txt)}</option>`);
      });
      _push(`<!--]--></select></div></label>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Selectbox.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-68ebe29c"]]);
const _sfc_main$4 = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    class: {
      type: String,
      default: "btn_"
    },
    txt: {
      type: String,
      default: "Button"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: props.class
      }, _attrs))} data-v-97bf20fa><em data-v-97bf20fa>${ssrInterpolate(props.txt)}</em></button>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-97bf20fa"]]);
const _sfc_main$3 = {
  __name: "Sticker",
  __ssrInlineRender: true,
  props: {
    item: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "sticker" }, _attrs))} data-v-29e2dcfb><!--[-->`);
      ssrRenderList(__props.item, (item, idx) => {
        _push(`<li data-v-29e2dcfb><em class="${ssrRenderClass(item.type)}" data-v-29e2dcfb>${ssrInterpolate(item.txt)}</em></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sticker.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-29e2dcfb"]]);
const _sfc_main$2 = {
  __name: "Hash",
  __ssrInlineRender: true,
  props: {
    item: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "hash" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.item, (item, idx) => {
        _push(`<li><button>${ssrInterpolate(item)}</button></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hash.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "GoodsItem",
  __ssrInlineRender: true,
  props: {
    item: Array,
    link: {
      type: String,
      default: "#none"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __nuxt_component_2$1;
      const _component_Sticker = __nuxt_component_1;
      const _component_Hash = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["goods_item", __props.item.status]
      }, _attrs))}><div class="img_wrap"><a${ssrRenderAttr("href", props.link)}><span class="thumb"><em><img${ssrRenderAttr("src", __props.item.img)}></em>`);
      if (__props.item.overflip) {
        _push(`<em class="overflip"><img${ssrRenderAttr("src", __props.item.overflip)}></em>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></a><ul class="btnIconBox"><li>`);
      _push(ssrRenderComponent(_component_Button, { class: "btn_heart" }, null, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Button, { class: "btn_cart" }, null, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Button, { class: "btn_buy" }, null, _parent));
      _push(`</li></ul></div><a${ssrRenderAttr("href", props.link)}><div class="cont">`);
      if (__props.item.cate) {
        _push(`<em class="cate">${ssrInterpolate(__props.item.cate)}</em>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<strong>${ssrInterpolate(__props.item.name)}</strong><p class="price"><strong>${ssrInterpolate(__props.item.price)}</strong><span>${ssrInterpolate(__props.item.sale)}</span><em>${ssrInterpolate(__props.item.cost)}</em></p>`);
      _push(ssrRenderComponent(_component_Sticker, {
        item: __props.item.sticker
      }, null, _parent));
      _push(ssrRenderComponent(_component_Hash, {
        item: __props.item.hash
      }, null, _parent));
      _push(`<p class="review_score"> 4.8 <em>2,655</em></p></div></a></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GoodsItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const select_opt = `[
    { val: 'value', txt: '\uC635\uC15801' },
    { val: 'value', txt: '\uC635\uC15802' }
]`;
const _sfc_main = {
  __name: "components",
  __ssrInlineRender: true,
  setup(__props) {
    const input_opt = reactive(
      {
        Placeholder: "\uBB38\uAD6C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
        type: "text",
        //default type
        isswitch: Boolean,
        opt: '_type="text" _placeholder="\uBB38\uAD6C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"'
      }
    );
    const sample_goods = [
      {
        img: "/_nuxt/assets/images/sam/sam_goods_list_01.jpg",
        overflip: "/_nuxt/assets/images/sam/sam_goods_list_01-1.jpg",
        cate: "BEST",
        name: "\uD788\uC54C\uB8E8\uB860 \uC218\uBD84 \uC120\uD06C\uB9BC SPF 50+ PA++++",
        price: "11,000",
        sale: "~50%",
        cost: "26,000",
        status: "sold_out",
        sticker: [
          { txt: "type01", type: "type01" },
          { txt: "type02", type: "type02" },
          { txt: "type03", type: "type03" },
          { txt: "type04", type: "type04" }
        ],
        hash: ["#\uC2A4\uD0A8\uD329", "#\uD654\uC7A5\uC19C", "#\uC21C\uBA74\uD654\uC7A5\uC19C"]
      },
      {
        img: "/_nuxt/assets/images/sam/sam_goods_list_02.jpg",
        overflip: "/_nuxt/assets/images/sam/sam_goods_list_02-1.jpg",
        name: "\uD788\uC54C\uB8E8\uB860 \uC218\uBD84 \uC120\uD06C\uB9BC SPF 50+ PA++++",
        status: "coming_soon",
        sticker: [
          { txt: "\uC99D\uC815", type: "type02" }
        ]
      },
      {
        img: "/_nuxt/assets/images/sam/sam_goods_list_03.jpg"
      },
      {
        img: "/_nuxt/assets/images/sam/sam_goods_list_04.jpg"
      },
      {
        img: "/_nuxt/assets/images/sam/sam_goods_list_04.jpg"
      }
    ];
    const modal = {
      open: (_target, _type) => {
        (void 0).getElementById(_target).classList.add("active", _type);
        const body = (void 0).querySelector("body");
        const pageY = (void 0).body.scrollTop || (void 0).documentElement.scrollTop;
        if (!body.hasAttribute("scrollY")) {
          body.setAttribute("scrollY", String(pageY));
          body.classList.add("lockbody");
        }
        body.addEventListener("touchmove", modal.lockScrollHandle, { passive: false });
      },
      close: (_target) => {
        event.target.closest(".modal_wrap").setAttribute("class", "modal_wrap");
        const body = (void 0).querySelector("body");
        if (body.hasAttribute("scrollY")) {
          body.classList.remove("lockbody");
          body.scrollTop = Number(body.getAttribute("scrollY"));
          body.removeAttribute("scrollY");
        }
        body.removeEventListener("touchmove", modal.lockScrollHandle, { passive: true });
      },
      lockScrollHandle(event2) {
        const e = event2 || (void 0).event;
        if (e.touches.length > 1)
          return;
        e.preventDefault();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Inputs = __nuxt_component_0;
      const _component_Selectbox = __nuxt_component_1$1;
      const _component_Button = __nuxt_component_2$1;
      const _component_GoodsItem = __nuxt_component_3;
      _push(`<!--[--><section><h2>Inputs</h2><ul class="toolbar"><li><button class="current">Text</button></li><li><button>Password</button></li><li><button>Checkbox</button></li><li><button>Radio</button></li><li><button>Switch</button></li></ul><div class="design_box">`);
      _push(ssrRenderComponent(_component_Inputs, {
        _type: unref(input_opt).type,
        isswitch: unref(input_opt).isswitch,
        _placeholder: unref(input_opt).Placeholder,
        _text: "Label",
        isDisabled: _ctx._disabled
      }, null, _parent));
      _push(`</div><pre class="code_box"><code>&lt;Inputs ${ssrInterpolate(unref(input_opt).opt)} /&gt;</code></pre></section><section><h2>Select</h2><div class="design_box">`);
      _push(ssrRenderComponent(_component_Selectbox, { options: [
        { val: "value", txt: "\uC635\uC15801" },
        { val: "value", txt: "\uC635\uC15802" }
      ] }, null, _parent));
      _push(`</div><pre class="code_box"><code>&lt;Selectbox
    :options=&quot;${ssrInterpolate(select_opt)}&quot; /&gt;</code></pre></section><section><h2>Button</h2><ul class="explain"><li>\uD074\uB798\uC2A4 \uADDC\uCE59 : btn_\uD06C\uAE30_\uD0C0\uC785(\uBCF4\uB354\uC720\uBB34)<br> ex) &lt;Button class=&quot;btn_big_outline&quot; /&gt;] </li><li>size : default = 40 / [_big] = 60 / [_mid] = 50 / [_min] = 30</li></ul><div class="design_box"><div class="multi_form">`);
      _push(ssrRenderComponent(_component_Button, {
        class: "btn_big",
        txt: "btn_big (60px)sss"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: "btn_mid",
        txt: "btn_mid (50px)"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, { txt: "default (40px)" }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: "btn_min",
        txt: "btn_min (30px)"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: "btn_big_outline",
        txt: "btn_big_outline (60px)"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: "btn_mid_outline",
        txt: "btn_mid_outline (50px)"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: "btn_outline",
        txt: "btn_outline (40px)"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: "btn_min_outline",
        txt: "btn_min_outline (30px)"
      }, null, _parent));
      _push(`</div></div><pre class="code_box"><code>&lt;Button /&gt;</code></pre></section><section><h2>Multi form</h2><div class="design_box"><ul class="form_group"><li><p class="form_tit">Input + Button</p><div class="multi_form">`);
      _push(ssrRenderComponent(_component_Inputs, {
        _type: "text",
        _placeholder: "\uBB38\uAD6C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, null, null, _parent));
      _push(`</div></li><li><p class="form_tit">Input + Input</p><div class="multi_form">`);
      _push(ssrRenderComponent(_component_Inputs, {
        _type: "text",
        _placeholder: "\uBB38\uAD6C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Inputs, {
        _type: "text",
        _placeholder: "\uBB38\uAD6C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      }, null, _parent));
      _push(`</div></li></ul></div><pre class="code_box"><code>&lt;div class=&quot;multi_form&quot;&gt;
    &lt;Inputs _type=&quot;text&quot; _placeholder=&quot;\uBB38\uAD6C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694&quot; /&gt;
    &lt;Inputs _type=&quot;text&quot; _placeholder=&quot;\uBB38\uAD6C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694&quot; /&gt;
&lt;/div&gt;</code></pre></section><section><h2>Goods</h2><ul class="explain"><li>sold out, coming soon = status:&#39;sold_out&#39; or &#39;coming_soon&#39;</li></ul><div class="design_box"><div class="list_wrap"><ul class="goods_list"><!--[-->`);
      ssrRenderList(sample_goods, (item, idx) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_GoodsItem, {
          item,
          link: item.link
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div><pre class="code_box"><code>&lt;div class=&quot;list_wrap&quot;&gt;
    &lt;ul class=&quot;goods_list&quot;&gt;
        &lt;li v-for=&quot;(item, idx) in sample_goods&quot; :key=&quot;idx&quot;&gt;
            &lt;GoodsItem :item=&quot;item&quot; :link=&quot;item.link&quot; /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre></section><section><h2>Modal</h2><ul class="explain"><li>Open : modal.open(\uBAA8\uB2EC\uC544\uC774\uB514, \uD0C0\uC785);<br> \uD0C0\uC785 = full / alert</li><li>Close : modal.close();</li></ul><div class="design_box"><div class="multi_form">`);
      _push(ssrRenderComponent(_component_Button, {
        txt: "Modal full",
        onClick: ($event) => {
          modal.open("sample_modal", "full");
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        txt: "Modal alert",
        onClick: ($event) => {
          modal.open("sample_modal", "alert");
        }
      }, null, _parent));
      _push(`</div></div><pre class="code_box"><code>&lt;div class=&quot;modal_wrap&quot; id=&quot;sample_modal&quot;&gt;
    &lt;div class=&quot;modal_container&quot;&gt;
        &lt;div class=&quot;modal_header&quot;&gt;
            &lt;h2&gt;Modal Title&lt;/h2&gt;
            &lt;button class=&quot;btn_close&quot; @click=&quot;modal.close(this);&quot;&gt;\uB2EB\uAE30&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class=&quot;modal_content&quot;&gt;
            &lt;div&gt; Sample Modal &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;modal_footer&quot;&gt;
            &lt;Button class=&quot;btn_outline&quot; txt=&quot;cancel&quot; /&gt;
            &lt;Button txt=&quot;OK&quot; /&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;overlay&quot; @click=&quot;modal.close(this);&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre></section><div class="modal_wrap" id="sample_modal"><div class="modal_container"><div class="modal_header"><h2>Modal Title</h2><button class="btn_close">\uB2EB\uAE30</button></div><div class="modal_content"><div>Sample Modal</div></div><div class="modal_footer">`);
      _push(ssrRenderComponent(_component_Button, {
        class: "btn_outline",
        txt: "cancel"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, { txt: "OK" }, null, _parent));
      _push(`</div></div><div class="overlay"></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/components.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=components-AOKwNsa8.mjs.map
