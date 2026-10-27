'use client';

import { Sparkles, Phone, ShieldCheck, Heart } from 'lucide-react';
import { bridalPackages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import { siteConfig } from '@/data/siteConfig';

export default function PackagesPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 text-[#4A1525] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D4AF37]/30">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Royal Wedding Suites</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A1525]">
          Curated Bridal Packages
        </h1>
        <p className="text-sm sm:text-base text-[#7A6B5D] leading-relaxed">
          Designed by senior UK-certified makeup artists. Every bridal suite includes personalized consultation, flawless airbrushing, and complete pampering.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {bridalPackages.map((pkg) => (
          <PackageCard key={pkg.id} bridalPackage={pkg} />
        ))}
      </div>

      {/* Custom Bridal Enquiry Banner */}
      <div className="bg-[#FAF4ED] border-2 border-[#D4AF37]/50 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <div className="w-12 h-12 rounded-full bg-[#4A1525] text-[#D4AF37] flex items-center justify-center mx-auto shadow">
          <Heart className="w-6 h-6 fill-[#D4AF37]" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">
          Looking for a Custom Bridal Package or Group Booking?
        </h2>
        <p className="text-sm sm:text-base text-[#7A6B5D] max-w-2xl mx-auto">
          We specialize in customized bridal parties, engagement events, and destination bride makeovers. Chat with Ayesha directly on WhatsApp for bespoke arrangements.
        </p>
        <div className="pt-2">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] transition-all shadow-lg"
          >
            <Phone className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp ({siteConfig.phone})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
