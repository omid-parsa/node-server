"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// routes
const admin_1 = require("./routes/admin");
const shop_1 = require("./routes/shop");
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/admin', admin_1.adminRouter);
app.use(shop_1.shopRouter);
app.use((req, res, next) => {
    res.status(404).send(`
    <H3>Page Not Found!</H3>
  `);
});
app.listen(3000);
//# sourceMappingURL=app.js.map