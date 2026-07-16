import { Roboto, Sora, Vollkorn } from "next/font/google";

export const sora = Sora({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
  variable: "--font-headline",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "700"],
  variable: "--font-body",
  display: "swap",
});

export const vollkorn = Vollkorn({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-quote",
  display: "swap",
});
