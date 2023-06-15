/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  const restaurant = req.body;
  try {
    res.status(200).json(restaurant);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the trip." });
  }
}
