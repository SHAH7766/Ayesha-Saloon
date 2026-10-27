'use client';

import { SafeImg, SafeImage } from '@/components/SafeImage';
import Link from 'next/link';
import { Calendar, Phone, Star, ShieldCheck, Award, Heart, Sparkles, CheckCircle2, ArrowRight, Instagram, Globe, Video } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/services';
import { bridalPackages } from '@/data/packages';
import { testimonials } from '@/data/testimonials';
import { galleryItems } from '@/data/gallery';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  const featuredServices = services.filter(s => s.popular).slice(0, 6);
  const previewGallery = galleryItems.slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0A2540] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <SafeImg
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=2000"
            alt="Ayesha's Salon Luxury Bridal"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-[#0A2540]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-4 py-2 rounded-full text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>{siteConfig.subTagline}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF7F2] leading-[1.1]">
              Maestros in <span className="text-[#D4AF37] italic">Makeup</span>, Hair & Skin
            </h1>

            <p className="text-base sm:text-lg text-[#EFE8DD] max-w-2xl font-light leading-relaxed">
              Serving royal brides and elegant women from all over the world in Garden Town, Lahore since 1997. Experience unmatched UK-certified expertise with 100% privacy guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D4AF37] text-[#4A1525] hover:bg-[#e6c152] transition-all font-bold text-base shadow-xl hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-all font-semibold text-base shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>WhatsApp Us ({siteConfig.phone})</span>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-xs text-[#D8CFC4] font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Ladies Only, Complete Privacy
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D4AF37]" /> UK Accredited
              </span>
            </div>
          </div>

          {/* Hero Right Badge Card */}
          <div className="hidden lg:block relative w-80 h-96 rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
            <SafeImg
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
              alt="Bridal Makeup Lahore"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Over 25 Years</span>
              <p className="font-serif text-2xl font-bold mt-1">Excellence in Beauty</p>
              <div className="mt-3 inline-flex items-center gap-1 bg-[#D4AF37] text-[#0A2540] px-3 py-1 rounded-full text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-[#0A2540]" /> 4.5 Stars (262+ Reviews)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-[#E8E2D5] py-8 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center p-3">
            <span className="font-serif text-3xl font-bold text-[#4A1525]">Since 1997</span>
            <span className="text-xs text-[#7A6B5D] font-medium mt-1">25+ Years of Trust in Lahore</span>
          </div>
          <div className="flex flex-col items-center p-3 border-l border-[#E8E2D5]">
            <span className="font-serif text-3xl font-bold text-[#4A1525] flex items-center gap-1">
              4.5 <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            </span>
            <span className="text-xs text-[#7A6B5D] font-medium mt-1">262+ Verified Google Reviews</span>
          </div>
          <div className="flex flex-col items-center p-3 border-l border-[#E8E2D5]">
            <span className="font-serif text-3xl font-bold text-[#4A1525]">UK Certified</span>
            <span className="text-xs text-[#7A6B5D] font-medium mt-1">Accredited Beauty Experts</span>
          </div>
          <div className="flex flex-col items-center p-3 border-l border-[#E8E2D5]">
            <span className="font-serif text-3xl font-bold text-[#4A1525]">100% Private</span>
            <span className="text-xs text-[#7A6B5D] font-medium mt-1">Ladies Only Exclusive Salon</span>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Exquisite Treatments</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">Featured Signature Services</h2>
          <p className="text-sm text-[#7A6B5D]">
            Discover our most sought-after beauty treatments crafted with premium international products and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#4A1525] text-[#FAF7F2] hover:bg-[#380e1b] transition-all text-sm font-semibold shadow-md border border-[#D4AF37]/50"
          >
            <span>Explore All 20+ Services & Pricing</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>
      </section>

      {/* Bridal Packages Teaser */}
      <section className="bg-[#FAF4ED] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Bridal Excellence</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">Royal Bridal Packages</h2>
            <p className="text-sm text-[#7A6B5D]">
              Make your big day truly magical with our curated bridal suites designed for brides in Lahore and overseas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bridalPackages.map((pkg) => (
              <PackageCard key={pkg.id} bridalPackage={pkg} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#4A1525] hover:text-[#D4AF37] transition-colors"
            >
              <span>View full bridal package comparison & custom details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">The Ayesha's Standard</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525] leading-tight">
              Why Discerning Women Choose Us Since 1997
            </h2>
            <p className="text-sm text-[#7A6B5D] leading-relaxed">
              Located in the heart of Garden Town, Lahore, Ayesha’s Salon is synonymous with luxury, hygiene, and uncompromising quality. We take pride in making every woman feel radiant, confident, and completely at ease.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8E2D5] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-[#4A1525] text-base">UK Accredited & Certified</h4>
                  <p className="text-xs text-[#7A6B5D] mt-1">Trained by international beauty standards with elite certifications.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8E2D5] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-[#4A1525] text-base">Complete Privacy</h4>
                  <p className="text-xs text-[#7A6B5D] mt-1">100% ladies-only environment with dedicated private bridal suites.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8E2D5] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-[#4A1525] text-base">Premium Products</h4>
                  <p className="text-xs text-[#7A6B5D] mt-1">Authentic international brands (MAC, Charlotte Tilbury, L'Oréal).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8E2D5] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-[#4A1525] text-base">25+ Years Experience</h4>
                  <p className="text-xs text-[#7A6B5D] mt-1">Trusted by thousands of brides across Pakistan and overseas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
            <SafeImage
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000"
              alt="Salon Interior Lahore"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A1525]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#D4AF37]/40 shadow-xl">
              <p className="font-serif text-lg font-bold text-[#4A1525]">"We don't just transform your look, we elevate your confidence."</p>
              <span className="block text-xs font-medium text-[#7A6B5D] mt-2">— Ayesha Khan, Founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-[#FAF7F2] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Visual Masterpiece</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525] mt-1">Our Recent Work</h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A1525] text-[#FAF7F2] hover:bg-[#380e1b] transition-all text-xs font-semibold shadow"
            >
              <span>View Full Gallery & Lightbox</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewGallery.map((item) => (
              <div key={item.id} className="relative h-64 rounded-2xl overflow-hidden group shadow-sm border border-[#E8E2D5]">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1525]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">{item.category}</span>
                  <p className="text-white text-sm font-serif font-bold mt-0.5">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Client Love</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">What Our Brides Say</h2>
          <div className="flex items-center justify-center gap-1 text-[#D4AF37] pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
            ))}
            <span className="text-sm font-bold text-[#4A1525] ml-2">4.5 / 5.0 (262+ Google Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-3xl border border-[#E8E2D5] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
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
                <span className="text-[11px] text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-2.5 py-1 rounded-full">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#4A1525] text-[#4A1525] hover:bg-[#4A1525] hover:text-white transition-all text-xs font-semibold"
          >
            <span>Read All 262+ Reviews & Write on Google</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Social Links Banner */}
      <section className="bg-[#4A1525] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Stay Connected</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">Follow Our Daily Transformations</h2>
          <p className="text-sm text-[#EFE8DD] max-w-xl mx-auto">
            Check out our latest bridal looks, behind-the-scenes reels, and makeup tutorials on Facebook and TikTok.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-[#4A1525] font-bold text-xs hover:bg-[#e6c152] transition-all shadow-lg"
            >
              <Globe className="w-4 h-4" />
              <span>Facebook Page</span>
            </a>
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#D4AF37] text-[#FAF7F2] hover:bg-white/10 transition-all text-xs font-semibold"
            >
              <Video className="w-4 h-4 text-[#D4AF37]" />
              <span>TikTok (@ayeshabeautysalon20)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Before / After Transformation Slider */}
      <BeforeAfterSlider />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-r from-[#4A1525] to-[#631c31] rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#D4AF37]/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Book Your Glow Today</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Ready for Your Dream Transformation?
            </h2>
            <p className="text-sm sm:text-base text-[#EFE8DD]">
              Secure your appointment at Lahore’s premier luxury ladies salon. Enjoy complete privacy and expert care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] text-[#4A1525] font-bold text-sm hover:bg-[#e6c152] transition-all shadow-lg"
              >
                Book Appointment Online
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Chat on WhatsApp ({siteConfig.phone})
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
