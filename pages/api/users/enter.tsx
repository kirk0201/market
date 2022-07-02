import twilio from "twilio";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const user = email ? { email } : phone ? { phone: +phone } : null;
  if (!user) return res.status(400).json({ ok: false });
  const random = Math.floor(100000 + Math.random() * 9000000) + "";
  const token = await client.token.create({
    data: {
      token: random,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Annoymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  if (phone) {
    await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      // to: 수신자 번호로 input에서 받은 phone을 해야하지만 Trial계정으로 제한되기에 내 폰번호로 지정
      to: process.env.MY_PHONE!,
      body: `Your login token is ${random}`,
    });
  }

  return res.json({ ok: true });
}

export default withHandler("POST", handler);
