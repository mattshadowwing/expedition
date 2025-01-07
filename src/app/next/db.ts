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

export async function getProduct3() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return faker.commerce.productName();
}

export async function getPrice3() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return faker.commerce.price();
}

export async function getProduct4() {
  "use cache";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return faker.commerce.productName();
}

export async function getPrice4() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return faker.commerce.price();
}
