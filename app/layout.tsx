import { JSX } from "react";
import localFont from 'next/font/local'
import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/Footer";

const poppins = localFont({
  src: [
    { path: '../public/fonts/poppins/poppins-100.woff2', weight: '100', style: 'normal' },
    { path: '../public/fonts/poppins/poppins-200.woff2', weight: '200', style: 'normal' },
    { path: '../public/fonts/poppins/poppins-300.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/poppins/poppins-400.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/poppins/poppins-500.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/poppins/poppins-600.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/poppins/poppins-700.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/poppins/poppins-800.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/poppins/poppins-900.woff2', weight: '900', style: 'normal' },
  ]
});

export const metadata: Metadata = {
  authors: [{ name: 'Philip Jurke' }],
  description: 'Philip Jurke: Insights beyond the profession. Discover my world between work, family, personal and social commitment.',
  icons: {
    icon: '/favicon.svg'
  },
  keywords: [ 'About me', 'Agile Coach', 'Coaching', 'Democracy', 'Liberalism', 'Personal', 'Personal Leadership', 'Philip Jurke', 'Simon Sinek', 'Stephen R. Covey' ],
  title: {
    default: "Philip Jurke",
    template: "%s | Philip Jurke"
  }
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