import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'ioredis';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const healthcheck = defineEventHandler(async (event) => {
  return {
    code: 200,
    msg: "success",
    body: "OK"
  };
});

export { healthcheck as default };
//# sourceMappingURL=healthcheck.mjs.map
