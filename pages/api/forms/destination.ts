import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  console.log("WHRE" , body)

  res.status(200).json({ data: body})
}