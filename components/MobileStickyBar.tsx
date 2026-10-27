'use client';

import Link from 'next/link';
import { Calendar, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function MobileStickyBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full z-30 bg-[#4A1525]/95 backdrop-blur-md border-t border-[#D4AF37]/40 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366] text-white font-medium text-xs shadow"
      >
        <Phone className="w-4 h-4 fill-white" />
        <span>WhatsApp Us</span>
      </a>
      <Link
        href="/book"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#D4AF37] text-[#4A1525] font-bold text-xs shadow"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Online</span>
      </Link>
    </div>
  );
}
