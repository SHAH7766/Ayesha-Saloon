'use client';

import { Check, Sparkles, Phone, Calendar } from 'lucide-react';
import { BridalPackage } from '@/types';
import { formatPKR } from '@/lib/utils';
import { siteConfig } from '@/data/siteConfig';

interface PackageCardProps {
  bridalPackage: BridalPackage;
}

export default function PackageCard({ bridalPackage }: PackageCardProps) {
  const whatsappMsg = encodeURIComponent(
    `Hello Ayesha's Salon, I would like to enquire about or book the "${bridalPackage.name}" (${formatPKR(bridalPackage.price)}). Please share available dates.`
  );
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className={`bg-white rounded-3xl overflow-hidden border ${bridalPackage.popular ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-xl' : 'border-[#E2E8F0] shadow-md'} flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 relative`}>
      {bridalPackage.popular && (
        <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0A2540] text-xs font-bold px-4 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1 z-10">
          <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice
        </div>
      )}

      <div>
        {/* Guaranteed Reliable Luxury Header Block */}
        <div className="p-7 bg-[#0A2540] text-white relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#D4AF37]/15 blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-1.5">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Bridal Suite</span>
            <h3 className="font-serif text-2xl font-bold text-white">{bridalPackage.name}</h3>
            <p className="text-xs text-[#E2E8F0]">{bridalPackage.tagline}</p>
          </div>
        </div>

        {/* Pricing & Inclusions */}
        <div className="p-7 space-y-6">
          <div className="flex items-baseline gap-3 pb-6 border-b border-[#F1F5F9]">
            <span className="text-3xl font-serif font-bold text-[#0A2540]">
              {formatPKR(bridalPackage.price)}
            </span>
            {bridalPackage.originalPrice && (
              <span className="text-sm text-[#64748B] line-through">
                {formatPKR(bridalPackage.originalPrice)}
              </span>
            )}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Package Inclusions:</h4>
            <ul className="space-y-2.5">
              {bridalPackage.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1E293B]">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#0A2540] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#0A2540]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-7 pt-0 flex flex-col sm:flex-row gap-3">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-all text-sm font-semibold shadow"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Enquire on WhatsApp</span>
        </a>
        <a
          href={`/book`}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A2540] text-[#F4F7FC] hover:bg-[#061526] transition-all text-sm font-semibold shadow border border-[#D4AF37]/40"
        >
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span>Book</span>
        </a>
      </div>
    </div>
  );
}
