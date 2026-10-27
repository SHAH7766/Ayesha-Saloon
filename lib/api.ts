import { services } from '@/data/services';
import { bridalPackages } from '@/data/packages';
import { stylists } from '@/data/stylists';
import { testimonials } from '@/data/testimonials';
import { galleryItems } from '@/data/gallery';
import { Service, BridalPackage, Stylist, Testimonial, GalleryItem, BookingData, ContactMessage } from '@/types';

// Mock API layer - easily swappable for real backend endpoints later (e.g. fetch('/api/services'))

export async function getServices(): Promise<Service[]> {
  // Simulate network delay for realistic feel
  return Promise.resolve(services);
}

export async function getServiceById(id: string): Promise<Service | undefined> {
  return Promise.resolve(services.find(s => s.id === id));
}

export async function getPackages(): Promise<BridalPackage[]> {
  return Promise.resolve(bridalPackages);
}

export async function getStylists(): Promise<Stylist[]> {
  return Promise.resolve(stylists);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return Promise.resolve(testimonials);
}

export async function getGallery(): Promise<GalleryItem[]> {
  return Promise.resolve(galleryItems);
}

export async function getAvailableSlots(date: string): Promise<{ time: string; available: boolean }[]> {
  // Opening hours: 11:00 AM to 8:00 PM (20:00)
  // Mock some slots as booked/unavailable based on date string hash or fixed rule
  const slots = [
    { time: '11:00 AM', available: true },
    { time: '11:45 AM', available: true },
    { time: '12:30 PM', available: false }, // booked
    { time: '01:15 PM', available: true },
    { time: '02:00 PM', available: true },
    { time: '02:45 PM', available: false }, // booked
    { time: '03:30 PM', available: true },
    { time: '04:15 PM', available: true },
    { time: '05:00 PM', available: true },
    { time: '05:45 PM', available: false }, // booked
    { time: '06:30 PM', available: true },
    { time: '07:15 PM', available: true },
  ];
  return Promise.resolve(slots);
}

export async function createBooking(data: Omit<BookingData, 'id' | 'createdAt' | 'status'>): Promise<BookingData> {
  const bookingId = 'AYS-' + Math.floor(100000 + Math.random() * 900000);
  const newBooking: BookingData = {
    ...data,
    id: bookingId,
    createdAt: new Date().toISOString(),
    status: 'confirmed',
  };

  // Save to localStorage if in browser
  if (typeof window !== 'undefined') {
    const existing = JSON.parse(localStorage.getItem('ayesha_bookings') || '[]');
    localStorage.setItem('ayesha_bookings', JSON.stringify([newBooking, ...existing]));
  }

  console.log('[API] Created Booking:', newBooking);
  return Promise.resolve(newBooking);
}

export async function getBookings(): Promise<BookingData[]> {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('ayesha_bookings') || '[]');
  }
  return [];
}

export async function sendContactMessage(data: ContactMessage): Promise<{ success: boolean; message: string }> {
  if (typeof window !== 'undefined') {
    const existing = JSON.parse(localStorage.getItem('ayesha_messages') || '[]');
    localStorage.setItem('ayesha_messages', JSON.stringify([ { ...data, createdAt: new Date().toISOString() }, ...existing ]));
  }
  console.log('[API] Contact Message Sent:', data);
  return Promise.resolve({ success: true, message: 'Message sent successfully! We will get back to you shortly.' });
}
