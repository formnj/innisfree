import { useSSRContext, unref } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _imports_0 = "data:image/png;base64,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";
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    let path = "/guide/";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-b42a5e5c><div class="inner" data-v-b42a5e5c><h1 data-v-b42a5e5c><a href="/" data-v-b42a5e5c><img${ssrRenderAttr("src", _imports_0)} data-v-b42a5e5c></a> Guide</h1><ul class="gnb" data-v-b42a5e5c><li data-v-b42a5e5c><a${ssrRenderAttr("href", unref(path))} data-v-b42a5e5c>list</a></li><li data-v-b42a5e5c><a${ssrRenderAttr("href", unref(path) + "components")} data-v-b42a5e5c>Components</a></li></ul></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/guide/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b42a5e5c"]]);
const _sfc_main = {
  __name: "guide",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuideHeader = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_GuideHeader, null, null, _parent));
      _push(`<div id="container"><div class="guide_wrap">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/guide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=guide-BnHAhmLZ.mjs.map
