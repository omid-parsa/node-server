import { Router, Request, Response } from 'express';

const adminRouter = Router();
// admin/add-product => GET
adminRouter.get('/add-product', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <input name="title" type="text"/>
    <button type="submit">Save</button>
  </form>
  `);
});
// admin/add-product => POST
adminRouter.post('/add-product', (req: Request, res: Response) => {
  console.log(req.body);
  res.redirect('/');
});
export { adminRouter };