import { User } from "@prisma/client";
import prisma from "../lib/database";
import { sign } from "jsonwebtoken";
const SECRET = process.env.SECRET || "secret";
type UserWithoutPassword = Omit<User, "password">;

export const createSession = async (user: UserWithoutPassword) => {
  try {
    const {id, role} = user
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
