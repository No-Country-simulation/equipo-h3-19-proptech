import { generateVerificationCode } from "../lib/sms/verification-code.generator";
import { confirmPhoneNumer } from "./sms.service";
import { Request, Response } from "express";
import prisma from '../lib/database'

export const sendVerificationCode = async (req: Request, res: Response) => {
  try {
    const { data: { to } } = req.body;
    const verificationCode = generateVerificationCode();
    const status = await confirmPhoneNumer(to, verificationCode);
    if (status === 'queued') {
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
      const { id } = await prisma.token.create({
        data: {
          token: verificationCode,
          expiresAt
        }
      });
      if (id) {
        return res.json({ message: "Código de verificación enviado", tkn: id });
      }
    }
    // res.json({ message: "Error enviando código de verificación" });
  } catch (error) {
    console.error('Error sending verification code:', error);
    res.json({ message: "Error enviando código de verificación" });
  }
}

export const verifyCode = async (req: Request, res: Response) => {
  const { id, code } = req.body.data
  try {
    const retrievedToken = await prisma.token.findUnique({
      where: { id }
    })
    if (retrievedToken) {
      console.log(retrievedToken.token === code);
      if (retrievedToken?.token === code && retrievedToken?.expiresAt > new Date()) {
        await prisma.token.delete({ where: { id } })
        return res.json({ message: 'Código correcto' })
      }
    }
    return res.json({ message: "Error verificando código" });
  } catch (error) {
    console.error('Error verifying code:', error);
    res.json({ message: "Error verificando código" });
  }
}