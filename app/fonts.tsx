import { Playfair_Display, Poppins, Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const playfair_display = Playfair_Display({
  weight: ["600"],
  style: ["italic"],
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});
