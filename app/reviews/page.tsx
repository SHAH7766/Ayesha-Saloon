'use client';

import { Star, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { siteConfig } from '@/data/siteConfig';
import { SafeImg } from '@/components/SafeImage';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 text-[#4A1525] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D4AF37]/30">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Google Rating 4.5 / 5.0</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A1525]">
          Client Testimonials & Reviews
        </h1>
        <p className="text-sm sm:text-base text-[#7A6B5D] leading-relaxed">
          Read verified feedback from over 262+ brides and clients who trust {siteConfig.name} for their most precious milestones.
        </p>

        <div className="pt-4 flex items-center justify-center gap-2">
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A1525] text-[#FAF7F2] hover:bg-[#380e1b] transition-all text-xs font-semibold shadow border border-[#D4AF37]/50"
          >
            <span>Write a Review on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white p-8 rounded-3xl border border-[#E8E2D5] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs text-[#8C7A6B] font-medium">{t.date}</span>
              </div>
              <p className="text-sm text-[#5C5248] italic leading-relaxed">
                "{t.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
              <div className="flex items-center gap-3">
                {t.image && (
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D4AF37]/50 shrink-0">
                    <SafeImg src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  <h4 className="font-serif font-bold text-[#4A1525] text-base">{t.name}</h4>
                  <span className="text-xs text-[#7A6B5D]">{t.serviceUsed} • {t.location}</span>
                </div>
              </div>
              <span className="text-[11px] text-[#4A1525] bg-[#D4AF37]/20 px-2.5 py-1 rounded-full font-semibold">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
