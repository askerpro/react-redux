import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL.smtpHost,
  port: process.env.MAIL.smtpPort,
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const mailOptions = {
    from: '"Сайт Окна Берта" <calc@okna-berta.ru>', // sender address
    to: process.env.MAIL.to, // list of receivers
    subject: req.body.subject, // Subject line
    html: req.body.message, // html body
  };

  await transporter.sendMail(mailOptions);
  const err = false;
  if (err) {
    res.send({ error: err });
  } else {
    res.send({});
  }
};
