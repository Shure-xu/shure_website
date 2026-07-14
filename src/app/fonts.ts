import localFont from "next/font/local";

export const taipeiSans = localFont({
  src: [
    {
      path: "./fonts/TaipeiSansTCBeta-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TaipeiSansTCBeta-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-taipei-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-montserrat-local",
  display: "swap",
  adjustFontFallback: false,
});
