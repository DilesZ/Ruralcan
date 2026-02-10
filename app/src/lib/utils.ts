import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function localizeWpHtml(html: string) {
  return html
    .replaceAll("https://ruralcan.com/wp-content/", "/wp-content/")
    .replaceAll("https://ruralcanresidencia.com/wp-content/", "/wp-content/")
    .replaceAll("https://ruralcan.com/", "/")
    .replaceAll("https://ruralcanresidencia.com/", "/")
}
