import type { Metadata } from "next";
import { Merienda, Protest_Revolution, Yatra_One } from "next/font/google";

import "./globals.css";

const protestRevolution = Protest_Revolution({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-protest-revolution',
});

const yatraOne = Yatra_One({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-yatra-one',
});

const merienda = Merienda({
  subsets: ["latin"],
  variable: '--font-merienda',
});

export const metadata: Metadata = {
  title: "Infested Side",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${protestRevolution.variable} ${yatraOne.variable} ${merienda.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
