import client from "../lib/sms/config";

export const sendSMS = async (to: string, message: string) => {
  try {
    const {status} = await client.messages.create({
      body: message,
      to,
      from: process.env.TWILIO_PHONE_NUMBER
    });
    console.log(status);
    return status
  } catch (error) {
    return error
  }
};

export const confirmPhoneNumer = async (to: string, token: number) => {
  const message = `Financial Land: 
  Tu código de verificación es ${token}. 
  Por tu seguridad, no compartas este código con nadie. 
  El código expira en 10 minutos.
  `;
  return sendSMS(to, message);
}