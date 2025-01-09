import { faker } from "@faker-js/faker";

export function getProduct1() {
  return faker.commerce.productName();
}

export function getPrice1() {
  return faker.commerce.price();
}

export async function getProduct2() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return faker.commerce.productName();
}

export async function getPrice2() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return faker.commerce.price();
}

export async function getProductMix() {
  "use cache";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return faker.commerce.productName();
}

export async function getPriceMix() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return faker.commerce.price();
}
