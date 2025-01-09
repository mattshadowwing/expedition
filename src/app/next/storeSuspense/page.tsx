import { Suspense } from "react";
import { getProduct2, getPrice2 } from "./../db";

import Loading from "./loading";

export default async function ProductPage3() {
  const description = await getProduct2();
  const price = await getPrice2();

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="text-2xl mb-10">base suspense example</div>
      <Suspense fallback={<Loading />}>
        <h1 className="text-blue-500 text-xl">${price}</h1>
        <p className="text-sm">{description}</p>
      </Suspense>
    </div>
  );
}
