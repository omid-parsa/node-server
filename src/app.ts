import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

// routes
import { adminRouter } from './routes/admin';
import { shopRouter } from './routes/shop';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send(`
    <H3>Page Not Found!</H3>
  `);
})

app.listen(3000);