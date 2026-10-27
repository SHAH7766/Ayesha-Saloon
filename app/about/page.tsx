'use client';

import { SafeImage } from '@/components/SafeImage';
import { Award, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { stylists } from '@/data/stylists';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 text-[#4A1525] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D4AF37]/30">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Established 1997</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A1525] leading-tight">
            Over 25 Years of Excellence in Luxury Beauty
          </h1>
          <p className="text-sm sm:text-base text-[#7A6B5D] leading-relaxed">
            Founded in 1997 by Ayesha Khan, {siteConfig.name} has grown from a boutique styling studio in Garden Town, Lahore into an iconic destination for brides and women seeking world-class beauty care.
          </p>
          <p className="text-sm sm:text-base text-[#7A6B5D] leading-relaxed">
            With UK accredited training, international cosmetic standards, and an uncompromising commitment to privacy and hygiene, we have successfully styled over 5,000 brides from Pakistan, the UK, USA, Canada, and the UAE.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-white rounded-2xl border border-[#E8E2D5] shadow-sm">
              <span className="font-serif text-3xl font-bold text-[#4A1525]">25+</span>
              <p className="text-xs text-[#7A6B5D] mt-1 font-medium">Years Experience</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#E8E2D5] shadow-sm">
              <span className="font-serif text-3xl font-bold text-[#4A1525]">5,000+</span>
              <p className="text-xs text-[#7A6B5D] mt-1 font-medium">Radiant Brides</p>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
          <SafeImage
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000"
            alt="Ayesha Khan Founder"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A1525]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#D4AF37]/40 shadow-xl">
            <p className="font-serif text-lg font-bold text-[#4A1525]">Ayesha Khan</p>
            <span className="text-xs text-[#7A6B5D] font-medium">Founder & Master Bridal Specialist</span>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-[#FAF4ED] border border-[#D4AF37]/40 rounded-3xl p-10 sm:p-14">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <Award className="w-10 h-10 text-[#D4AF37] mx-auto" />
          <h2 className="font-serif text-3xl font-bold text-[#4A1525]">UK Accreditation & International Standards</h2>
          <p className="text-sm text-[#7A6B5D]">
            Our lead artists hold advanced diplomas from London and European academies, ensuring safe, professional, and breathtaking results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E8E2D5] shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="font-serif font-bold text-[#4A1525] text-lg">London School of Makeup</h3>
            <p className="text-xs text-[#7A6B5D] leading-relaxed">
              Certified in advanced bridal airbrushing, high-definition contouring, and photographic makeup techniques.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E8E2D5] shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="font-serif font-bold text-[#4A1525] text-lg">CIDESCO International</h3>
            <p className="text-xs text-[#7A6B5D] leading-relaxed">
              Global standard esthetician and skin therapy certifications guaranteeing clinical safety and hygiene.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E8E2D5] shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="font-serif font-bold text-[#4A1525] text-lg">L'Oréal & Schwarzkopf Expert</h3>
            <p className="text-xs text-[#7A6B5D] leading-relaxed">
              Master colorists certified in chemical hair safety, balayage, and keratin treatments.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Expert Stylists</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">Meet Our Master Artists</h2>
          <p className="text-sm text-[#7A6B5D]">
            Passionate professionals dedicated to bringing out your finest features with warmth and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stylists.map((st) => (
            <div key={st.id} className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-sm flex flex-col group">
              <div className="relative h-72 w-full overflow-hidden bg-[#FAF7F2]">
                <SafeImage
                  src={st.image}
                  alt={st.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">{st.experience} Exp</span>
                  <h3 className="font-serif text-xl font-bold text-[#4A1525] mt-1">{st.name}</h3>
                  <p className="text-xs font-medium text-[#7A6B5D] mt-0.5">{st.role}</p>
                  <p className="text-xs text-[#6B5E53] mt-3 leading-relaxed">{st.bio}</p>
                </div>
                <div className="pt-3 border-t border-[#F2ECE1]">
                  <span className="text-[11px] font-semibold text-[#4A1525] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#D4AF37]/30 block text-center">
                    {st.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
