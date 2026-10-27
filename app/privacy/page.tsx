'use client';

import { siteConfig } from '@/data/siteConfig';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <h1 className="font-serif text-4xl font-bold text-[#4A1525]">Privacy Policy</h1>
        <p className="text-xs text-[#7A6B5D]">Last updated: October 2026</p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8E2D5] shadow-sm space-y-6 text-sm text-[#5C5248] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-[#4A1525]">1. Our Commitment to Privacy</h2>
          <p>
            At {siteConfig.name}, located in Garden Town, Lahore, we hold your privacy and confidentiality with the utmost respect. As an exclusive ladies-only salon, we ensure complete privacy during all treatments, bridal prep, and consultations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-[#4A1525]">2. Information We Collect</h2>
          <p>
            When you book an appointment online or via WhatsApp, we collect your name, phone number, email address, and service preferences. This information is solely used to manage your appointments and communicate service updates.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-[#4A1525]">3. Data Security & Local Storage</h2>
          <p>
            Your booking records are stored securely. We do not sell, trade, or transfer your personal information to outside parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-[#4A1525]">4. Contact Us</h2>
          <p>
            If you have any questions regarding our privacy practices, please contact us at {siteConfig.phone} or {siteConfig.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
