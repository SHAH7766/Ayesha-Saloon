'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Service } from '@/types';
import { formatPKR } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
}

function getCategoryFallbackImage(category: string): string {
  switch (category) {
    case 'Bridal Makeup':
      return 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800';
    case 'Party Makeup':
      return 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&q=80&w=800';
    case 'Hair':
      return 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800';
    case 'Skin':
      return 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800';
    case 'Hands & Feet':
      return 'https://images.unsplash.com/photo-1632345031435-8727f6c97d34?auto=format&fit=crop&q=80&w=800';
    case 'Waxing & Threading':
      return 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800';
    case 'Mehndi':
      return 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800';
    default:
      return 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800';
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [imgSrc, setImgSrc] = useState(service.image || getCategoryFallbackImage(service.category));

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Image Container with Relevant Category Fallback */}
      <div className="relative h-52 w-full overflow-hidden bg-[#F4F7FC]">
        <img
          src={imgSrc}
          alt={service.name}
          onError={() => {
            const fallback = getCategoryFallbackImage(service.category);
            if (imgSrc !== fallback) {
              setImgSrc(fallback);
            }
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-transparent pointer-events-none" />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#0A2540] text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-[#D4AF37]/30 z-10">
          {service.category}
        </span>

        {service.popular && (
          <span className="absolute top-3 right-3 bg-[#D4AF37] text-[#0A2540] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 z-10">
            <Sparkles className="w-3 h-3" /> Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {service.duration}
            </span>
            <span className="text-base font-bold font-serif text-[#0A2540]">
              {formatPKR(service.price)}
            </span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#1E293B] group-hover:text-[#0A2540] transition-colors line-clamp-1">
            {service.name}
          </h3>
          <p className="text-sm text-[#64748B] mt-2 line-clamp-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
          <Link
            href={`/book?serviceId=${service.id}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A2540] bg-[#F4F7FC] hover:bg-[#0A2540] hover:text-white px-4 py-2 rounded-xl transition-all border border-[#D4AF37]/30 w-full justify-center group/btn"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
