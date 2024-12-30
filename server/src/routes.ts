import { Router } from "express";
const router = Router();

import userRoutes from "./user/user.routes";
import authRoutes from "./auth/auth.routes";
import investmentsRoutes from "./investments/investments.routes";
import loansRoutes from "./loans/loans.routes";
import smsRoutes from "./sms/sms.routes";

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/investments", investmentsRoutes);
router.use("/loans", loansRoutes);
router.use("/sms", smsRoutes);

export default router;
