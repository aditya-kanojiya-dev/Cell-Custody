import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

export async function sendOTPEmail(to, otp) {
  await transporter.sendMail({
    from: `"Krish Gandhi" <${process.env.FROM_EMAIL}>`,
    to,
    subject: 'Your OTP Code',
    html: `<p>Your OTP code is: <strong>${otp}</strong></p><p>This will expire in 10 minutes.</p>`,
  });
}
