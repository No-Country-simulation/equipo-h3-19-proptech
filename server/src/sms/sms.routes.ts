import { Router } from 'express';
import { sendVerificationCode, verifyCode } from './sms.controller';

const router = Router();

router.post('/send-code', sendVerificationCode)
router.post('/verify', verifyCode)

export default router;