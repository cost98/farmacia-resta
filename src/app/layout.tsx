import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  const disableAllLinks = true;

  return (
    <html lang="it">
      <body className={`${inter.variable} font-sans antialiased ${disableAllLinks ? "links-disabled" : ""}`.trim()}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
