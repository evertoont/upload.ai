import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clearString(str: string) {
  str = str.replace(/[^\w\s-]/g, "");

  str = str.replace(/\s+/g, "-");

  return str;
}
