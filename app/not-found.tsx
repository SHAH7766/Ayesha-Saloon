'use client';

import Link from 'next/link';
import { Sparkles, Home, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-10 rounded-3xl border border-[#E8E2D5] shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#4A1525] text-[#D4AF37] flex items-center justify-center mx-auto font-serif font-bold text-2xl shadow-inner">
          404
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-bold text-[#4A1525]">Page Not Found</h1>
          <p className="text-sm text-[#7A6B5D]">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="pt-4 flex flex-col gap-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#4A1525] text-[#FAF7F2] font-semibold text-xs shadow hover:bg-[#380e1b] transition-all"
          >
            <Home className="w-4 h-4 text-[#D4AF37]" />
            <span>Return to Home</span>
          </Link>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#25D366] text-[#25D366] bg-green-50 font-semibold text-xs transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Contact via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
