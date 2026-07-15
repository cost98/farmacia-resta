import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
// CLOUDFLARE: Analytics disabilitato (funziona solo su Vercel)
// import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Farmacia Resta - Opera (MI) | Servizi Farmaceutici e Diagnostica",
  description:
    "Farmacia Resta a Opera (MI): servizi diagnostici, holter cardiaco, elettrocardiogramma, preparazioni galeniche, foratura lobi e molto altro. Dal 1970 al servizio della comunità.",
  keywords: [
    "farmacia opera",
    "farmacia resta",
    "holter cardiaco opera",
    "elettrocardiogramma milano",
    "farmacia diagnostica",
    "preparazioni galeniche",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${caveat.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        {/* CLOUDFLARE: Analytics disabilitato (funziona solo su Vercel) */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
