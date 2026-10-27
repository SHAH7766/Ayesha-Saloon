'use client';

import { useState, useEffect } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import { Service } from '@/types';

const categories = [
  'All',
  'Bridal Makeup',
  'Party Makeup',
  'Hair',
  'Skin',
  'Hands & Feet',
  'Waxing & Threading',
  'Mehndi',
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState<Service[]>(services);

  useEffect(() => {
    let result = services;

    if (selectedCategory !== 'All') {
      result = result.filter((s) => s.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      );
    }

    setFilteredServices(result);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 text-[#4A1525] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D4AF37]/30">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Professional Beauty Menu</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A1525]">
          Services & Transparent Pricing
        </h1>
        <p className="text-sm sm:text-base text-[#7A6B5D] leading-relaxed">
          Explore our comprehensive range of luxury treatments. Select any service to book your appointment instantly online.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-10 space-y-6">
        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7A6B]" />
          <input
            type="text"
            placeholder="Search treatments (e.g., HydraFacial, Keratin, Bridal...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#2C241D] shadow-sm"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
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
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#E8E2D5] p-8">
          <p className="font-serif text-2xl text-[#4A1525]">No services found</p>
          <p className="text-sm text-[#7A6B5D] mt-2">Try searching for something else or reset your category filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-6 px-6 py-2.5 rounded-full bg-[#4A1525] text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
