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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Farmacia Resta SRL",
  "url": "https://www.farmaciavera.it",
  "logo": "https://www.farmaciavera.it/images/logo_scritta.jpeg",
  "image": "https://www.farmaciavera.it/images/logo_scritta.jpeg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Resistenza 14/B",
    "addressLocality": "Opera",
    "addressRegion": "MI",
    "postalCode": "20073",
    "addressCountry": "IT",
  },
  "telephone": "+390257604980",
  "email": "info@anticafarmaciadiopera.it",
  "openingHours": ["Mo 14:30-19:30", "Tu-Sa 08:30-12:30,14:30-19:30"],
  "priceRange": "€€",
  "vatID": "06778670965",
  "sameAs": [
    "https://www.instagram.com/farmacia.resta/",
    "https://www.facebook.com/farmaciavera",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
