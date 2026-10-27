import { BridalPackage } from '@/types';

export const bridalPackages: BridalPackage[] = [
  {
    id: 'pkg-classic',
    name: 'Classic Elegance Bridal Package',
    tagline: 'Timeless grace for the modern minimalist bride',
    price: 65000,
    originalPrice: 80000,
    inclusions: [
      'Signature Bridal Makeup (HD / Airbrush)',
      'Professional Bridal Hairstyling & Dupatta Setting',
      'Luxury Mink Eyelashes & Lens Application',
      'Classic Manicure & Pedicure',
      'Full Arms & Legs Rica Wax',
      'Eyebrow & Upper Lip Threading',
      'Complimentary Skin Polishing / Clean-up prior to event'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'pkg-premium',
    name: 'Royal Maharani Bridal Package',
    tagline: 'Our most popular comprehensive royal makeover experience',
    price: 95000,
    originalPrice: 120000,
    popular: true,
    inclusions: [
      'Premium Royal Bridal Makeup (Airbrush + Glitter Glam)',
      'Advanced Bridal Hairstyling, Hair Extensions & Dupatta Setting',
      'UK Certified HydraFacial MD (done 3 days prior)',
      'Royal Spa Manicure & Pedicure with Paraffin Wax',
      'Full Body Rica Wax',
      'Bridal Trial Session Included',
      'Body Polishing & Glow Treatment',
      'Jewelry & Veil Draping Assistance'
    ],
    image: 'https://images.unsplash.com/photo-1545232979-fbf502c3e3af?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'pkg-luxury',
    name: 'Imperial Luxe Complete Bridal Suite',
    tagline: 'The ultimate VIP experience for Baras / Valima with senior artists',
    price: 140000,
    originalPrice: 175000,
    inclusions: [
      'Two Looks (e.g. Barat & Valima OR Engagement & Bridal Day)',
      'Exclusive attention from Senior UK-Certified Lead Stylist Ayesha',
      '24K Gold Glowing Facial + HydraFacial Treatment',
      'Luxury Spa Mani-Pedi & Gelish Extensions',
      'Full Body Organic Sugar & Rica Waxing',
      'Bridal Heavy Arabic Mehndi Included',
      'VIP Private Dressing Suite Access with Refreshments',
      'Post-Wedding Hair Repair Spa Treatment'
    ],
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
  }
];
