import { User } from "@prisma/client";
import prisma from "../lib/database";
import { sign, decode } from "jsonwebtoken";
const SECRET = process.env.SECRET || "secret";
type UserWithoutPassword = Omit<User, "password">;

export const createSession = async (user: UserWithoutPassword) => {
  try {
    const { id, role } = user
    const isCustomer = role !== "borrower" && role !== "inversor";
    const time = isCustomer ? Date.now() + 3600 : Date.now() + 86400;
    const expiresAt = new Date(time);
    const newswssion = await prisma.session.create({
      data: {
        userId: id,
        expiresAt,
      },
    });
    if (!newswssion) {
      return ["Error creando sesión"];
    } else {
      const token = sign({ id: newswssion.id, user: id }, SECRET);
      return [false, token];
    }
  } catch (error) {
    console.log(error);
    return ["Error creando sesión"];
  }
};

type getSessionResult = [string] | [null, UserWithoutPassword];

export const getSession = async (token: string): Promise<getSessionResult> => {
  try {
    const decoded = decode(token) as { id: string; user: string };
    const session = await prisma.session.findUnique({
      where: { id: decoded.id },
    });
    if (!session) {
      return ["Error obteniendo sesión"];
    } else if (session.expiresAt < new Date()) {
      return ["Sesión expirada"];
    }
    else if (session) {
      const userfound = await prisma.user.findUnique({
        where: { id: session.userId }
      });
      if (!userfound) {
        return ["Error obteniendo usuario"];
      } else {
        const { password, ...user } = userfound;
        return [null, user];
      }
    }
  } catch (error) {
    console.log(error);
    return ["Error obteniendo sesión"];
  }
  return ["Error desconocido"];
}