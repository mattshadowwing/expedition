import { Suspense } from "react";
import { getProductMix, getPriceMix } from "./../db";

export default async function ProductPage3() {
  const description = await getProductMix();

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="text-2xl mb-10">Mix suspense and cache example</div>
      <Suspense
        fallback={<h1 className="text-blue-500 text-xl">Fetching price</h1>}
      >
        <Price />
      </Suspense>
      <p className="text-sm">{description}</p>
    </div>
  );
}

async function Price() {
  const price = await getPriceMix();
  return <h1 className="text-blue-500 text-xl">${price}</h1>;
}
