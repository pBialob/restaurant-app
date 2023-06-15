/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import {
  type Hastag,
  type Photo,
  type User,
  Trip,
  Order,
} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import HeaderLayout from "~/layouts/Header";

const getOrders = async (id: string) => {
  const response = await fetch(`/api/user/orders/${id}`);
  const orders = await response.json();
  return orders as Array<
    Order & {
      user: User;
    }
  >;
};

const UserOrders: NextPage = () => {
  const { data: sessionData } = useSession();

  const { data: orders, isLoading } = useQuery(
    ["user", "orders", sessionData?.user.id as string],
    () => getOrders(sessionData?.user.id as string),
    {
      enabled: !!sessionData?.user.id,
    }
  );

  return (
    <HeaderLayout>
      <div className="mx-auto min-h-[calc(100vh_-_var(--navigation-height))] w-full max-w-fit bg-white  px-12 pt-[var(--navigation-height)]">
        <div className="flex flex-col">
          {isLoading && <div>Loading...</div>}
          <div className="mt-40 flex justify-center">
            {orders?.length === 0 && (
              <h1 className="text-4xl">Brak zamówień</h1>
            )}
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default UserOrders;
