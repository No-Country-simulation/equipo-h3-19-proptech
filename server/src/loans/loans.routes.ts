import { isAuthenticated } from './loans.middleware';
import { Router } from 'express';
const router = Router();

router.get('/', isAuthenticated, (req, res) => {
  res.send('Loans');
});

export default router;