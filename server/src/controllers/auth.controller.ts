import { sign } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { createUser, getUser } from "../services/user.service";
import { compareSync } from "bcryptjs";
import { createSession } from "../services/session.service";

const SECRET = process.env.SECRET as string;

export async function signupHandler(req: Request, res: Response) {
  const { data } = req.body;
  try {
    const user = await createUser(data);
    if (!user) throw new Error("Error creando usuario");
    else {
      const [error, token] = await createSession(user);
      if (error) throw new Error("Error creando usuario");
      return res.status(200).json({ user, token });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
}

export async function signinHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { data } = req.body;
    const [error, userFound, password, id, email] = await getUser(data);
    if (error || !userFound)
      return res.status(400).json({ message: "User Not Found" });
    const matchPassword = compareSync(data.password, `${password}`);
    console.log({ matchPassword });

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });
    const token = sign({ id, email }, SECRET, { expiresIn: "1h" });
    return res.status(200).json({ user: userFound });
  } catch (error) {
    return next(error);
  }
}
