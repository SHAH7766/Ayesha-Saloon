import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import { siteConfig } from '@/data/siteConfig';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Ayesha's Salon | Luxury Women's Beauty Salon in Garden Town, Lahore",
  description: "UK accredited and certified luxury women-only beauty salon in Lahore since 1997. Maestros in Bridal Makeup, Hair Transformations, and HydraFacial. Complete privacy guaranteed.",
  keywords: "Ayesha Salon Lahore, Garden Town beauty salon, bridal makeup Lahore, UK accredited salon Lahore, hair salon Lahore, women only salon Pakistan",
  openGraph: {
    title: "Ayesha's Salon | Luxury Women's Beauty Salon in Lahore",
    description: "UK accredited luxury salon providing bridal makeup, hair, and skin treatments since 1997. Garden Town, Lahore.",
    url: 'https://ayeshasalon.pk',
    siteName: "Ayesha's Salon",
    locale: 'en_PK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: siteConfig.name,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    '@id': 'https://ayeshasalon.pk',
    url: 'https://ayeshasalon.pk',
    telephone: siteConfig.phone,
    priceRange: 'PKR 1,000 - PKR 150,000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot 80, Babar Block, Garden Town',
      addressLocality: 'Lahore',
      postalCode: '53000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.5036,
      longitude: 74.3292,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '11:00',
      closes: '20:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating,
      reviewCount: siteConfig.reviewCount,
    },
    areaServed: {
      '@type': 'City',
      name: 'Lahore',
    },
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased selection:bg-[#D4AF37]/30 selection:text-[#4A1525]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  );
}
