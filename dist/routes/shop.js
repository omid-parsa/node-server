"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopRouter = void 0;
const express_1 = require("express");
const shopRouter = express_1.Router();
exports.shopRouter = shopRouter;
shopRouter.get('/', (req, res) => {
    res.send(`
  <div>Hello from express!</div>
  `);
});
//# sourceMappingURL=shop.js.map