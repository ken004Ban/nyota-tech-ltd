import { DM_Mono, DM_Sans, Instrument_Serif } from "next/font/google";

export const fontInstrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: true,
});

export const fontSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

export const fontMono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: true,
});
