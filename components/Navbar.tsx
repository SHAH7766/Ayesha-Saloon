'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Bridal Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-[#0A2540] text-[#F9F6F0] text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-[#D4AF37]/30">
        <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse shrink-0" />
        <span>{siteConfig.announcement}</span>
        <span className="hidden md:inline-block ml-4 bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded text-[11px] font-semibold">
          {siteConfig.privacyNote}
        </span>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 bg-[#F4F7FC]/95 backdrop-blur-md border-b ${scrolled ? 'shadow-md border-[#D4AF37]/40 py-3' : 'border-[#D4AF37]/20 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-[#0A2540] flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xl shadow-inner border border-[#D4AF37]">
                A
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wide text-[#0A2540] group-hover:text-[#D4AF37] transition-colors">
                  {siteConfig.name}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#64748B] font-sans font-medium">
                  Garden Town Lahore • Est. 1997
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                      isActive ? 'text-[#0A2540] font-semibold' : 'text-[#475569] hover:text-[#0A2540]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#D4AF37] text-[#0A2540] hover:bg-[#0A2540] hover:text-[#F9F6F0] transition-colors text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A2540] text-[#F4F7FC] hover:bg-[#061526] transition-all shadow-sm text-xs font-semibold tracking-wide border border-[#D4AF37]/50"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Book Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                href="/book"
                className="sm:hidden px-3 py-1.5 rounded-full bg-[#0A2540] text-[#F4F7FC] text-xs font-semibold flex items-center gap-1"
              >
                <Calendar className="w-3 h-3 text-[#D4AF37]" />
                <span>Book</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#0A2540] hover:bg-[#E2E8F0] transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#F4F7FC] border-b border-[#D4AF37]/30 shadow-xl py-5 px-6 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-1.5 text-xs text-[#0A2540] bg-[#D4AF37]/10 p-2 rounded-md font-medium border border-[#D4AF37]/30">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>{siteConfig.privacyNote}</span>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 border-b border-[#E8E2D5] ${
                    pathname === link.href ? 'text-[#4A1525] font-bold pl-2 border-l-4 border-l-[#D4AF37]' : 'text-[#5C5248]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-[#25D366] text-[#25D366] bg-green-50 font-medium text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat on WhatsApp ({siteConfig.phone})</span>
                </a>
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#4A1525] text-[#FAF7F2] font-semibold text-sm shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Book Appointment Online</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
