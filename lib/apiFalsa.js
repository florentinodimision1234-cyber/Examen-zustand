import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// Llamada desde servidor
// Llamada desde servidor
export const fetchProductos = async () => {

  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
       
}