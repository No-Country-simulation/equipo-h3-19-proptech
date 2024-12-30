import transporter from '../lib/mails/config';
import { getConfirmEmailTemplate } from '../lib/mails/templates/confirm-email.template';

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html
    });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const confirmEmail = async (to: string, token: string) => {
  const subject = 'Confirma tu email';
  const html = getConfirmEmailTemplate(token);
  return sendEmail(to, subject, html);
}