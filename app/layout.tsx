import { JSX } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900" ]
});

export const metadata: Metadata = {
  title: {
    default: "Philip Jurke",
    template: "%s | Philip Jurke"
  },
  keywords: [ "About me", "Agile Coach", "Coaching", "Democracy", "Liberalism", "Personal Leadership", "Philip Jurke", "Simon Sinek", "Stephen R. Covey" ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>): JSX.Element {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}