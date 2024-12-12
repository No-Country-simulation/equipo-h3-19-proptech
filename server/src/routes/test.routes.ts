import { Response, Router, Request, NextFunction } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Ok!!')
});

export default router;
