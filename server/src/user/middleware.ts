import { Request, Response, NextFunction } from "express";
import { getSession } from "../auth/session.service";

export async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  try {
    let token = req.cookies.token as string;
    if (token) {
      const [error, user] = await getSession(token);
      if (!error && (user?.role === "admin" || user?.role === "sealer" )) {
        return next();
      }
    }
    res.status(400).json({ message: "No autorizado." });
  } catch (error) {
    console.error({ message: "No autorizado." });
  }
}