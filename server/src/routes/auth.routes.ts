import { Router } from 'express';
import { signinHandler, signupHandler } from '../controllers/auth.controller';
const router = Router();

router.post('/login', signinHandler)

router.post('/register', signupHandler)

export default router;
