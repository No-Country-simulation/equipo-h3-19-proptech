import { Router } from "express";
const router = Router();

import { sendVerificationCode, verifyCode } from './mail.controller';

router.post('/send-verification-code', sendVerificationCode);
router.post('/verify-code', verifyCode);

export default router;