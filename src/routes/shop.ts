import { Router, Request, Response } from 'express';

const shopRouter = Router();

shopRouter.get('/', (req: Request, res: Response) => {
  res.send(`
  <div>Hello from express!</div>
  `);
})

export { shopRouter };