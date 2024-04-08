import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2>\uD37C\uBE14\uB9AC\uC2F1 \uB9AC\uC2A4\uD2B8 <ul class="legend"><li><span class="badge modal">modal popup</span></li><li><span class="badge com">\uC644\uB8CC</span></li><li><span class="badge ing">\uC9C4\uD589\uC911</span></li></ul></h2><table><colgroup><col></colgroup><thead><tr><th>1Depth</th><th>2Depth</th><th>3Depth</th><th>4Depth</th><th>ID</th><th>\uBE44\uACE0</th><th>\uC2DC\uC791\uC77C</th><th>\uC885\uB8CC\uC77C</th></tr></thead><tbody></tbody></table><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BMNhVD39.mjs.map
