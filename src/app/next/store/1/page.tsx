import { getProduct1, getPrice1 } from "../../db";

export default function ProductPage1() {
  const description = getProduct1();
  const price = getPrice1();

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="text-2xl mb-10">synchronous example</div>
      <h1 className="text-blue-500 text-xl">${price}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
}
