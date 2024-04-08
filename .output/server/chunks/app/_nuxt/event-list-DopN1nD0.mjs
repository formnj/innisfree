import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
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
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "ListView",
  __ssrInlineRender: true,
  props: {
    eventList: { type: Array, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.eventList, (event) => {
        _push(`<div class="bg-white p-4 shadow rounded-lg"><div class="flex flex-col items-center"><img${ssrRenderAttr("src", event.photoUrl)}${ssrRenderAttr("alt", event.title)} class="rounded-lg mb-2"><h3 class="text-lg font-semibold text-gray-800">${ssrInterpolate(event.title)}</h3><p class="text-sm text-gray-600 mt-1">${ssrInterpolate(event.description)}</p></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/event/ListView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "event-list",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data: {
        value: { data: eventList }
      }
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://dev-inm-gateway.apddev.com/event/getEvents", "$O67NzPEmuP")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EventListView = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-screen-lg mx-auto" }, _attrs))}><div class="flex items-center justify-between p-4"><div>\u{1F50D}</div><div>\u{1F45C}</div></div><div class="bg-white p-4 shadow rounded-lg"><div class="flex flex-col items-center justify-center"><h1 class="text-2xl font-bold text-gray-800">Innisfree</h1><div class="flex items-center py-2"><span class="text-lg font-semibold text-gray-500 line-through mr-2">\u20A976,000</span><span class="text-xl font-bold text-green-500">\u20A949,400</span></div><p class="text-sm text-gray-600">Vitamin C Green Tea Enzyme</p></div></div><div class="mt-6"><h2 class="text-xl font-bold text-gray-800 px-4">Events</h2><div class="grid grid-cols-1 gap-4 p-4">`);
      _push(ssrRenderComponent(_component_EventListView, { "event-list": unref(eventList) }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/event-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=event-list-DopN1nD0.mjs.map
