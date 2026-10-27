'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, Globe, Instagram } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#4A1525] text-[#FAF7F2] pt-16 pb-12 border-t-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#D4AF37]/20">

          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#4A1525] font-serif font-bold text-xl">
                A
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-[#FAF7F2]">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-[#EFE8DD] leading-relaxed">
              {siteConfig.subTagline}. Providing exquisite beauty services with complete privacy and UK-certified excellence since 1997.
            </p>
            <div className="flex items-center gap-2 text-xs bg-[#D4AF37]/15 px-3 py-1.5 rounded-md border border-[#D4AF37]/30 text-[#D4AF37] font-medium w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>{siteConfig.privacyNote}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#D4AF37] mb-4 tracking-wide">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EFE8DD]">
              <li>
                <Link href="/services" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> All Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> Bridal Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> Our Story & Certifications
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37]">›</span> Client Reviews (4.5★)
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 font-semibold text-[#D4AF37]">
                  <span>›</span> Book Appointment Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#D4AF37] mb-4 tracking-wide flex items-center gap-2">
              <Clock className="w-5 h-5" /> Working Hours
            </h3>
            <div className="space-y-3 text-sm text-[#EFE8DD]">
              <p className="font-medium text-[#FAF7F2]">{siteConfig.hours.days}</p>
              <p className="text-[#D4AF37] font-semibold text-base">{siteConfig.hours.time}</p>
              <p className="text-xs text-[#D8CFC4] pt-2 border-t border-[#D4AF37]/20">
                Appointments recommended, walk-ins subject to availability. Ladies only.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#D4AF37] mb-4 tracking-wide">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm text-[#EFE8DD]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={siteConfig.whatsappUrl} className="hover:text-[#D4AF37] transition-colors font-medium">
                  {siteConfig.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs">{siteConfig.email}</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#4A1525] transition-all"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#4A1525] transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#4A1525] transition-all text-xs font-bold font-serif"
                aria-label="Google Reviews"
              >
                G★
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8CFC4] gap-4">
          <p>© {year} {siteConfig.name}. All rights reserved. Designed with elegance for women in Lahore.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Cancellation</Link>
            <span className="text-[#D4AF37]">UK Accredited Since 1997</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
