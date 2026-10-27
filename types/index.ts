export interface Service {
  id: string;
  name: string;
  category: 'Bridal Makeup' | 'Party Makeup' | 'Hair' | 'Skin' | 'Hands & Feet' | 'Waxing & Threading' | 'Mehndi';
  description: string;
  price: number; // in PKR
  duration: string; // e.g. "45 mins"
  image?: string;
  popular?: boolean;
}

export interface BridalPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  inclusions: string[];
  image: string;
  popular?: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  certifications: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  date: string;
  location?: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Party' | 'Hair' | 'Mehndi' | 'Skin';
  image: string;
  description?: string;
}

export interface BookingData {
  id?: string;
  serviceIds: string[];
  stylistId: string; // 'any' or specific ID
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g. "11:30 AM"
  customerName: string;
  phone: string;
  email?: string;
  notes?: string;
  totalPrice: number;
  totalDuration: string;
  createdAt?: string;
  status: 'confirmed' | 'pending';
}

export interface ContactMessage {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
  createdAt: string;
}
