'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { SafeImg } from '@/components/SafeImage';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Visual Proof</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">Royal Bridal Transformations</h2>
        <p className="text-sm text-[#7A6B5D]">
          Drag or slide to see the breathtaking transformation by Ayesha Khan and our expert bridal team.
        </p>
      </div>

      <div
        className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] select-none cursor-ew-resize group"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <SafeImg
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1200"
            alt="Bridal Makeup After Transformation"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-6 right-6 bg-[#4A1525]/90 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-[#D4AF37]/40 shadow-lg z-10">
            ✨ Final Royal Look (After)
          </span>
        </div>

        {/* Before Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full" style={{ width: '100vw', maxWidth: '1200px' }}>
            <SafeImg
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200"
              alt="Natural Look Before"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-6 left-6 bg-white/90 text-[#4A1525] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-[#D4AF37]/30 shadow-lg z-10">
            Natural Base (Before)
          </span>
        </div>

        {/* Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#4A1525] border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-bold shadow-xl">
            ↔
          </div>
        </div>
      </div>
    </section>
  );
}
