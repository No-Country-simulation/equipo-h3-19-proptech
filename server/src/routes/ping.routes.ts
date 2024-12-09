import { Response, Router, Request } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Pong!!')
});

export default router;