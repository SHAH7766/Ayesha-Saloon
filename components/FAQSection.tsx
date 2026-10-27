'use client';

import { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "How far in advance should I book my bridal makeup?",
    answer: "We recommend booking your bridal and Walima makeovers at least 3 to 6 months in advance, especially for peak wedding seasons (October to March), to secure your preferred date and time with our senior artists."
  },
  {
    question: "Is the salon 100% ladies-only and private?",
    answer: "Yes, absolutely! Ayesha’s Salon maintains a strict ladies-only environment with complete privacy guaranteed. We also offer private VIP dressing suites for brides and their close family members."
  },
  {
    question: "Do you offer bridal trial sessions?",
    answer: "Yes, we offer dedicated Bridal Trial Sessions where you can test your dream wedding look with our master makeup artists prior to your big day to ensure absolute perfection."
  },
  {
    question: "How do overseas brides book from the UK, USA, Canada, or UAE?",
    answer: "Overseas clients can easily coordinate with us via WhatsApp (+92 315 4254938) or online booking. We offer flexible scheduling, virtual consultations, and hassle-free advance deposits for international brides visiting Lahore."
  },
  {
    question: "What international cosmetic brands do you use?",
    answer: "We use only authentic, premium international cosmetics and skincare products, including MAC, Charlotte Tilbury, Dior, NARS, L'Oréal Professional, and UK-certified HydraFacial medical-grade serums."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Got Questions?</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">Frequently Asked Questions</h2>
        <p className="text-sm text-[#7A6B5D]">
          Everything you need to know about our bridal bookings, privacy policy, and luxury treatments.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E8E2D5] shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif text-lg font-bold text-[#4A1525]">
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full bg-[#FAF7F2] text-[#4A1525] flex items-center justify-center shrink-0 border border-[#D4AF37]/30 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#4A1525] text-white' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm text-[#7A6B5D] leading-relaxed border-t border-[#F2ECE1] pt-4 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
