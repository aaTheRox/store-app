import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import IProductType from "../../types/product";
import formatPrice from "./formatPrice";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSubtotal(items: IProductType) {
  let total = 0;
  items.forEach((product: IProductType) => {
    total += product.price;
  });

  return formatPrice(total);
}
