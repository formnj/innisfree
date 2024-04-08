import { i as defineNuxtRouteMiddleware, b as navigateTo } from '../server.mjs';
import 'vue';
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
import 'vue/server-renderer';

const checkout = defineNuxtRouteMiddleware((to, from) => {
  {
    return navigateTo("/login");
  }
});

export { checkout as default };
//# sourceMappingURL=checkout-ZDE3F5QH.mjs.map
