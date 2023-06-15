/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { User, Restaurant } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import HeaderLayout from "~/layouts/Header";

const getRestaurant = async (id: string) => {
  const response = await fetch(`/api/restaurant/${id}`);
  const restaurant = await response.json();
  return restaurant as Restaurant & {
    user: User;
  };
};

const Restaurant: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const { id } = router.query;

  const { data: restaurant, isLoading } = useQuery(
    ["restaurant", id as string],
    () => getRestaurant(id as string),
    {
      enabled: !!id,
    }
  );

  return (
    <HeaderLayout>
      <div className="mx-auto min-h-[calc(100vh_-_var(--navigation-height))] w-full max-w-fit bg-white  px-12 pt-[var(--navigation-height)]">
        <div className="flex flex-col">
          {isLoading && <div>Loading...</div>}
          {restaurant && (
            <>
              <div key={restaurant.id}>
                <article className="flex flex-col items-center gap-2">
                  <div className="p-2">
                    <h2 className="my-2 text-6xl font-bold ">
                      {restaurant.name}
                    </h2>
                    <h3>
                      <p className="text-4xl">{restaurant.cuisine}</p>
                    </h3>
                    <p>{restaurant.address}</p>
                    <p>{restaurant.city}</p>
                    <p>{restaurant.state}</p>
                    <p className="mb-6">{restaurant.zip}</p>

                    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                      <img
                        src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/vegetarian-rice-dish_side847307.jpg"
                        alt="Danie 1"
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <h2 className="mb-2 text-xl font-bold">Danie 1</h2>
                        <p className="text-gray-700">
                          Opis dania 1 Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Quo, cumque natus dolorem ad nobis
                          numquam voluptatibus quisquam alias at quae
                          repellendus.
                        </p>
                        <div className="mt-4 flex justify-between">
                          <span className="font-bold text-gray-900">
                            $12.99
                          </span>
                          <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
                            Dodaj do koszyka
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-lg bg-white shadow-lg">
                      <img
                        src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/vegetarian-rice-dish_side847307.jpg"
                        alt="Danie 2"
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <h2 className="mb-2 text-xl font-bold">Danie 2</h2>
                        <p className="text-gray-700">
                          Opis dania 2 Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Quo, cumque natus dolorem ad nobis
                          numquam voluptatibus quisquam alias at quae
                          repellendus.
                        </p>
                        <div className="mt-4 flex justify-between">
                          <span className="font-bold text-gray-900">$9.99</span>
                          <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
                            Dodaj do koszyka
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-lg bg-white shadow-lg">
                      <img
                        src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/vegetarian-rice-dish_side847307.jpg"
                        alt="Danie 2"
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <h2 className="mb-2 text-xl font-bold">Danie 2</h2>
                        <p className="text-gray-700">
                          Opis dania 2 Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Quo, cumque natus dolorem ad nobis
                          numquam voluptatibus quisquam alias at quae
                          repellendus.
                        </p>
                        <div className="mt-4 flex justify-between">
                          <span className="font-bold text-gray-900">$9.99</span>
                          <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
                            Dodaj do koszyka
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-lg bg-white shadow-lg">
                      <img
                        src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/vegetarian-rice-dish_side847307.jpg"
                        alt="Danie 2"
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <h2 className="mb-2 text-xl font-bold">Danie 2</h2>
                        <p className="text-gray-700">
                          Opis dania 2 Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Quo, cumque natus dolorem ad nobis
                          numquam voluptatibus quisquam alias at quae
                          repellendus.
                        </p>
                        <div className="mt-4 flex justify-between">
                          <span className="font-bold text-gray-900">$9.99</span>
                          <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
                            Dodaj do koszyka
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-lg bg-white shadow-lg">
                      <img
                        src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/vegetarian-rice-dish_side847307.jpg"
                        alt="Danie 2"
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <h2 className="mb-2 text-xl font-bold">Danie 2</h2>
                        <p className="text-gray-700">
                          Opis dania 2 Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Quo, cumque natus dolorem ad nobis
                          numquam voluptatibus quisquam alias at quae
                          repellendus.
                        </p>
                        <div className="mt-4 flex justify-between">
                          <span className="font-bold text-gray-900">$9.99</span>
                          <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
                            Dodaj do koszyka
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </>
          )}
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Restaurant;
