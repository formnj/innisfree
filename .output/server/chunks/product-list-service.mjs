import { d as defineEventHandler, g as getQuery, u as useRuntimeConfig, a as useStorage } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'ioredis';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const productListService = defineEventHandler(async (event) => {
  let { redisUse } = getQuery(event);
  redisUse = redisUse === "Y";
  const { innerDomain } = useRuntimeConfig();
  const redis = useStorage("redis");
  const redisKey = "{pd}:productlist";
  let products = redisUse ? await redis.getItem(redisKey) : null;
  if (!products) {
    try {
      ;
      ({
        data: { products }
      } = await $fetch(
        `${innerDomain}/product/getProducts?productId=${redisUse ? 1 : 3e3}`,
        { method: "GET" }
      ));
      redisUse && await redis.setItem(redisKey, products);
    } catch (e) {
      console.error(e);
    }
  }
  return products != null ? products : [];
});

export { productListService as default };
//# sourceMappingURL=product-list-service.mjs.map
