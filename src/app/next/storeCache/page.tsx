"use cache";

import { Suspense } from "react";
import { getProduct2, getPrice2 } from "./../db";
// import { unstable_cacheLife as cacheLife } from "next/cache";

import Loading from "./loading";

export default async function ProductPage3() {
  // cacheLife('days')

  const description = await getProduct2();
  const price = await getPrice2();

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="text-2xl mb-10">Cache example</div>
      <Suspense fallback={<Loading />}>
        <h1 className="text-blue-500 text-xl">${price}</h1>
        <p className="text-sm">{description}</p>
      </Suspense>
    </div>
  );
}
