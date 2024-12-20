import { Response, Router, Request, NextFunction } from 'express';
import { isAuthenticated } from '../middlewares/auth';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  isAuthenticated(req)
  res.send('Ok!!')
});

export default router;
