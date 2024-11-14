import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "./_widgets/header/header";

import "./globals.css";

const coolveticaRG = localFont({
  src: "./fonts/coolveticaRG.ttf",
  variable: "--font-coolveticaRG",
  weight: "100 400 900",
});

const goghBoldItalic = localFont({
  src: "./fonts/GoghBoldItalic.otf",
  variable: "--font-goghBoldItalic",
  weight: "100 400 900",
});

const manrope = localFont({
  src: "./fonts/Manrope.ttf",
  variable: "--font-Manrope",
  weight: "100 400 900",
});


export const metadata: Metadata = {
  title: "Maklakov Vadim | Frontend",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${coolveticaRG.variable} ${goghBoldItalic.variable} ${manrope.variable}`}>
        <Header />
          {children}
      </body>
    </html>
  );
}
