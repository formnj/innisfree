import { resolveComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_router_link, { to: "/product/product-list" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\uD14C\uC2A4\uD2B8`);
      } else {
        return [
          createTextVNode("\uD14C\uC2A4\uD2B8")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_router_link, { to: "/event/event-list" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\uAC8C\uC774\uD2B8\uC6E8\uC774 \uC9C1\uC811\uD638\uCD9C`);
      } else {
        return [
          createTextVNode("\uAC8C\uC774\uD2B8\uC6E8\uC774 \uC9C1\uC811\uD638\uCD9C")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | <a href="/product/product-list?redisUse=Y">\uB178\uB4DC\uC11C\uBC84 \uD638\uCD9C(\uB808\uB514\uC2A4 \uC801\uC6A9)</a> | <a href="/product/product-list?redisUse=N">\uB178\uB4DC\uC11C\uBC84 \uD638\uCD9C(\uB808\uB514\uC2A4 \uBBF8\uC801\uC6A9)</a> | `);
  _push(ssrRenderComponent(_component_router_link, { to: "/demo/main" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\uB370\uBAA8(\uBA54\uC778)`);
      } else {
        return [
          createTextVNode("\uB370\uBAA8(\uBA54\uC778)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_router_link, { to: "/demo/event" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\uB370\uBAA8(\uC774\uBCA4\uD2B8)`);
      } else {
        return [
          createTextVNode("\uB370\uBAA8(\uC774\uBCA4\uD2B8)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` | `);
  _push(ssrRenderComponent(_component_router_link, { to: "/demo/productList" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\uB370\uBAA8(\uC0C1\uD488\uBAA9\uB85D)`);
      } else {
        return [
          createTextVNode("\uB370\uBAA8(\uC0C1\uD488\uBAA9\uB85D)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div id="container">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CuhuD3pg.mjs.map
