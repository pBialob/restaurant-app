/* eslint-disable @typescript-eslint/no-misused-promises */

import { prisma } from "~/server/db";

async function main() {
  const mockRestaurants = [
    {
      name: "Luigi's Pizzeria",
      address: "123 Italian St",
      city: "New York",
      state: "NY",
      zip: "10001",
      cuisine: "Italian",
      userId: "cliwt2kec0000stt0ex93yed0",
    },
    {
      name: "Sushi Oishi",
      address: "456 Ocean Ave",
      city: "San Francisco",
      state: "CA",
      zip: "94103",
      cuisine: "Japanese",
      userId: "cliwt2kec0000stt0ex93yed0",
    },
    {
      name: "The Burger Joint",
      address: "789 Burger Ln",
      city: "Chicago",
      state: "IL",
      zip: "60607",
      cuisine: "American",
      userId: "cliwt2kec0000stt0ex93yed0",
    },
    {
      name: "Panda Express",
      address: "123 Panda Ln",
      city: "New York",
      state: "NY",
      zip: "10001",
      cuisine: "Chinese",
      userId: "cliwt2kec0000stt0ex93yed0",
    },
    {
      name: "Taco Bell",
      address: "456 Taco Ln",
      city: "San Francisco",
      state: "CA",
      zip: "94103",
      cuisine: "Mexican",
      userId: "cliwt2kec0000stt0ex93yed0",
    },
    {
      name: "McDonald's",
      address: "789 McDonald Ln",
      city: "Chicago",
      state: "IL",
      zip: "60607",
      cuisine: "American",
      userId: "cliwt2kec0000stt0ex93yed0",
    },
    {
      name: "Popeyes",
      address: "123 Popeyes Ln",
      city: "New York",
      state: "NY",
      zip: "10001",
      cuisine: "American",
      userId: "cliwt2kec0000stt0ex93yed0",
    },
    {
      name: "KFC",
      address: "456 KFC Ln",
      city: "San Francisco",
      state: "CA",
      zip: "94103",
      cuisine: "American",
      userId: "cliwt2kec0000stt0ex93yed0",
    },
    {
      name: "Burger King",
      address: "789 Burger King Ln",
      city: "Chicago",
      state: "IL",
      zip: "60607",
      cuisine: "American",
      userId: "cliwt2kec0000stt0ex93yed0",
    },
    {
      name: "Wendy's",
      address: "123 Wendy's Ln",
      city: "New York",
      state: "NY",
      zip: "10001",
      cuisine: "American",

      userId: "cliwt2kec0000stt0ex93yed0",
    },
  ];

  for (const restaurant of mockRestaurants) {
    await prisma.restaurant.create({
      data: restaurant,
    });
  }
}

main()
  .catch((e: Error) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
