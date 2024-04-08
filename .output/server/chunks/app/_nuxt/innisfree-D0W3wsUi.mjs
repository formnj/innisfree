import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><header class="flex justify-between items-center p-4 bg-white"><h1 class="text-xl font-bold">Innisfree</h1><div><span class="p-2">Search</span><span class="p-2">Cart(0)</span></div></header><main class="my-4 mx-auto max-w-2xl"><section class="text-center"><img src="https://via.placeholder.com/150" alt="Product Image" class="mx-auto"><h2 class="text-2xl font-bold my-2"> Vitamin C Green Tea Brightening Serum </h2><p class="text-lg">2023 Retailer of the Year - Top of Top</p><p class="text-xl text-gray-800 my-2"><span class="line-through text-gray-500">76,000</span> 49,400 </p><button class="bg-yellow-400 px-4 py-2 my-2">+ Add to Cart</button></section><nav class="flex justify-around bg-white p-4 my-4"><a href="#" class="flex-1 text-center">Skin Care</a><a href="#" class="flex-1 text-center">Makeup</a><a href="#" class="flex-1 text-center">Hair &amp; Body</a><a href="#" class="flex-1 text-center">Men</a></nav><section class="my-4"><div class="bg-yellow-400 p-4 text-white"><h3 class="text-lg font-bold">Special Offers</h3><p>Up to 50% off - Limited Time Offer</p></div><div class="bg-green-500 p-4 text-white"><h3 class="text-lg font-bold">Free Gifts</h3><p>With purchases over 70,000</p></div></section></main><footer class="flex justify-around items-center bg-white p-4"><a href="#" class="flex-1 text-center">Home</a><a href="#" class="flex-1 text-center">Events</a><a href="#" class="flex-1 text-center">Coupons</a><a href="#" class="flex-1 text-center">My Page</a></footer><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/innisfree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const innisfree = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { innisfree as default };
//# sourceMappingURL=innisfree-D0W3wsUi.mjs.map
