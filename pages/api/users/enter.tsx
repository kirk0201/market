import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const payload = email ? { email } : { phone: +phone };
  const user = await client({
    where: {
      ...payload,
    },
    create: {
      name: "Annoymous",
      ...payload,
    },
    update: {},
  });
  console.log(user);

  return res.status(200).end();
}

export default withHandler("POST", handler);
