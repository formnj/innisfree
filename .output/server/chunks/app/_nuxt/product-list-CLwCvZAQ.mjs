import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { e as useRoute } from '../server.mjs';
import { u as useFetch } from './fetch-R_A7UsLB.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'ioredis';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "ListView",
  __ssrInlineRender: true,
  props: {
    productList: { type: Array, required: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(props.productList, (product) => {
        _push(`<div class="bg-gray-100 p-4 flex flex-col items-center"><img${ssrRenderAttr("src", product.photoUrl)}${ssrRenderAttr("alt", product.title)} class="mb-4"><h3 class="text-lg font-semibold">${ssrInterpolate(product.title)}</h3><div class="text-sm text-gray-500 mb-2">${ssrInterpolate(product.description)}</div><div class="flex items-center"><span class="text-xl font-bold text-gray-800 mr-2">${ssrInterpolate(product.salePrice)}</span><span class="text-sm font-semibold text-red-500 line-through">${ssrInterpolate(product.price)}</span></div><div class="text-green-600 text-xs mt-1">${ssrInterpolate(product.discountPercentage)}% OFF</div><div class="flex items-center mt-2"><span class="text-yellow-400 text-sm mr-1">\u2605 ${ssrInterpolate(product.rating)}</span><span class="text-gray-500 text-xs">(${ssrInterpolate(product.reviewCount)})</span></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/ListView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "product-list",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { redisUse } = useRoute().query;
    const { data: productList } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/product-list-service", {
      query: { redisUse }
    }, "$C9DDVvMzPA")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductListView = __nuxt_component_0;
      _push(`<!--[--><div class="flex items-center justify-between p-4 border-b"><button class="p-2">\u2630</button><div>\uC11C\uBC84 \uB9AC\uD018\uC2A4\uD2B8 (\uB808\uB514\uC2A4 \uC801\uC6A9\uB428)</div><div class="space-x-4"><button>\u{1F50D}</button><button>\u{1F6CD}\uFE0F</button></div></div><div class="p-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_ProductListView, { "product-list": unref(productList) }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/product-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=product-list-CLwCvZAQ.mjs.map
