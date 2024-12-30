import { Router } from 'express';
import { sendVerificationCode, verifyCode } from './sms.controller';

const router = Router();

router.post('/send-verification-code', sendVerificationCode)
router.post('/verify-code', verifyCode)

export default router;