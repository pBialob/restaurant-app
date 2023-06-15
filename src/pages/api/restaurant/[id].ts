/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Restaurant, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const restaurant = await prisma.restaurant.findFirstOrThrow({
      where: { id: req.query.id as string },
      include: {
        user: true,
      },
    });
    res.status(200).json(restaurant);
    return restaurant as
      | (Restaurant & {
          user: User;
        })
      | null;
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching restaurant." });
  }
}
