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
  name: "Farmacia Resta",
  image: "https://farmaciaresta.it/images/logo_scritta.jpeg",
  url: "https://farmaciaresta.it",
  telephone: "+390257604980",
  email: "info@anticafarmaciadiopera.it",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Resistenza 14/B",
    addressLocality: "Opera",
    addressRegion: "MI",
    postalCode: "20073",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.3733,
    longitude: 9.2067,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday"],
      opens: "14:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "19:30",
    },
  ],
  vatID: "06778670965",
  foundingDate: "1970",
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
