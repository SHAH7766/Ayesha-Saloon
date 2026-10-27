'use client';

import { siteConfig } from '@/data/siteConfig';

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <h1 className="font-serif text-4xl font-bold text-[#4A1525]">Terms & Cancellation Policy</h1>
        <p className="text-xs text-[#7A6B5D]">Last updated: October 2026</p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8E2D5] shadow-sm space-y-6 text-sm text-[#5C5248] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-[#4A1525]">1. Appointments & Arrivals</h2>
          <p>
            We recommend booking appointments in advance. Please arrive 10 minutes prior to your scheduled slot to ensure you receive your full service duration.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-[#4A1525]">2. Cancellation & Rescheduling</h2>
          <p>
            If you need to reschedule or cancel your appointment, please notify us at least 24 hours in advance via WhatsApp ({siteConfig.phone}). Bridal booking cancellations require 7 days notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-[#4A1525]">3. Ladies Only Policy</h2>
          <p>
            {siteConfig.name} is strictly a ladies-only salon. Complete privacy and security are maintained at all times for our female patrons.
          </p>
        </section>
      </div>
    </div>
  );
}
