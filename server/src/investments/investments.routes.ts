import { isAuthenticated } from './middleware';
import { Router } from 'express';
const router = Router();

router.get('/', isAuthenticated, (req, res) => {
  res.send('Investments');
});

export default router;