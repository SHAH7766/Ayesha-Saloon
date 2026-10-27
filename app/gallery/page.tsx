'use client';

import { useState } from 'react';
import { SafeImg, SafeImage } from '@/components/SafeImage';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { galleryItems } from '@/data/gallery';
import { GalleryItem } from '@/types';

const categories = ['All', 'Bridal', 'Party', 'Hair', 'Mehndi', 'Skin'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 text-[#4A1525] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D4AF37]/30">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Visual Masterpiece</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A1525]">
          Photo Gallery & Portfolio
        </h1>
        <p className="text-sm sm:text-base text-[#7A6B5D] leading-relaxed">
          Browse our exquisite bridal makeovers, hair transformations, and henna art. Click any image to open the high-resolution lightbox.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-12 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setActiveImageIndex(null);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shadow-sm ${
              selectedCategory === cat
                ? 'bg-[#4A1525] text-[#FAF7F2] border border-[#D4AF37]'
                : 'bg-white text-[#5C5248] border border-[#E8E2D5] hover:border-[#D4AF37]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveImageIndex(idx)}
            className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-sm border border-[#E8E2D5] bg-white"
          >
            <SafeImg
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">{item.category}</span>
              <h3 className="text-white font-serif font-bold text-lg mt-1">{item.title}</h3>
              {item.description && (
                <p className="text-xs text-[#EFE8DD] mt-1 line-clamp-2">{item.description}</p>
              )}
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-medium">
                <Eye className="w-3.5 h-3.5" /> View Lightbox
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl h-[75vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <SafeImage
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-md p-4 text-center rounded-b-2xl">
              <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-semibold">{activeItem.category}</span>
              <h3 className="font-serif text-xl font-bold text-white">{activeItem.title}</h3>
              {activeItem.description && (
                <p className="text-xs text-[#EFE8DD] mt-1">{activeItem.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
