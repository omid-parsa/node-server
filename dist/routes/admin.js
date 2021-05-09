"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const adminRouter = express_1.Router();
exports.adminRouter = adminRouter;
// admin/add-product => GET
adminRouter.get('/add-product', (req, res) => {
    res.send(`
  <form method="POST">
    <input name="title" type="text"/>
    <button type="submit">Save</button>
  </form>
  `);
});
// admin/add-product => POST
adminRouter.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});
//# sourceMappingURL=admin.js.map