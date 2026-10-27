# Ayesha's Salon — Luxury Women's Beauty Salon Website

A complete, premium, responsive frontend-only website for **Ayesha's Salon**, an elite women-only beauty salon established in 1997 located in Garden Town, Lahore, Pakistan.

---

## 🌟 Business Details & Positioning
- **Name:** Ayesha's Salon
- **Tagline:** "Maestros in Makeup | Hair | Skin"
- **Established:** 1997 (25+ years of experience)
- **Positioning:** UK accredited and certified; serves female customers from Lahore and overseas (UK, USA, UAE, Canada)
- **Address:** Plot 80, Babar Block, Garden Town, Lahore, 53000, Pakistan
- **Phone / WhatsApp:** 0315 4254938 (`https://wa.me/923154254938`)
- **Hours:** 11:00 AM to 8:00 PM daily
- **Google Rating:** 4.5 Stars from 262+ Reviews
- **Privacy Policy:** 100% Ladies Only, Complete Privacy Guaranteed

---

## 🛠️ Tech Stack
- **Framework:** Next.js (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations / Confetti:** Canvas Confetti
- **Forms & Validation:** React Hook Form + Zod resolvers
- **Persistence:** In-memory mock data with `localStorage` fallback for bookings and contact messages

---

## 📁 Project Folder Structure

```tree
C:\Users\Shah Hussain\Desktop\Ayesha's Salon\
├── app/
│   ├── about/page.tsx            # About story, UK certifications & master stylists
│   ├── book/page.tsx             # Multi-step booking stepper + WhatsApp confirmation
│   ├── contact/page.tsx          # Contact info, hours table, Google map & message form
│   ├── gallery/page.tsx          # Masonry grid with category filter & modal lightbox
│   ├── packages/page.tsx         # 3 Royal bridal packages with inclusions & WhatsApp links
│   ├── privacy/page.tsx          # Privacy policy
│   ├── reviews/page.tsx          # Client testimonials & Google review link
│   ├── services/page.tsx         # 20+ services across 7 categories with search & PKR pricing
│   ├── terms/page.tsx            # Terms & cancellation policy
│   ├── not-found.tsx             # Custom 404 page
│   ├── globals.css               # Global CSS variables & Tailwind imports
│   ├── layout.tsx                # Root layout, metadata, JSON-LD Schema & Navbar/Footer
│   └── page.tsx                  # Stunning Home page with trust bar, featured services & CTA
├── components/
│   ├── FloatingWhatsApp.tsx      # Floating WhatsApp button on every page
│   ├── Footer.tsx                # Footer with address, hours, contact & social links
│   ├── MobileStickyBar.tsx       # Bottom sticky action bar on mobile devices
│   ├── Navbar.tsx                # Sticky navbar with announcement bar & mobile drawer
│   ├── PackageCard.tsx           # Reusable bridal package card component
│   └── ServiceCard.tsx           # Reusable service card component
├── data/
│   ├── gallery.ts                # 12+ gallery items with high-res Unsplash photos
│   ├── packages.ts               # Classic, Premium & Luxury bridal suites
│   ├── services.ts               # 20+ realistic services with PKR prices & durations
│   ├── siteConfig.ts             # Business info, hours, rating & social links
│   ├── stylists.ts               # Profiles of 4 senior stylists and estheticians
│   └── testimonials.ts           # Client reviews and ratings
├── lib/
│   ├── api.ts                    # Async API abstraction layer (localStorage + mock delay)
│   └── utils.ts                  # Tailwind class merge helper and PKR currency formatter
├── types/
│   └── index.ts                  # TypeScript interfaces (Service, Package, Stylist, Booking, etc.)
└── package.json                  # Project dependencies & scripts
```

---

## 🚀 Setup & Installation Instructions

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install --legacy-peer-deps
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 🔌 Guide: Replacing Mock Data with a Real Backend / API

The codebase is architected with a clean data separation layer located in `/lib/api.ts` and `/data/`. To connect a real backend (e.g., Node.js / Express, PostgreSQL, MongoDB, or Firebase):

1. **Replace `/lib/api.ts` functions:**
   - Swap mock promises (`Promise.resolve(...)`) with actual `fetch('/api/...')` calls.
   - Example:
     ```typescript
     export async function getServices(): Promise<Service[]> {
       const res = await fetch('https://api.ayeshasalon.pk/services');
       return res.json();
     }
     ```
2. **Connect Booking Submissions:**
   - In `app/book/page.tsx`, the `createBooking(data)` function currently saves bookings to `localStorage` and returns a reference ID. Update `createBooking` in `lib/api.ts` to POST to your backend endpoint (e.g., `POST /api/bookings`).
3. **Database Schema Alignment:**
   - Ensure your backend database models match the TypeScript interfaces defined in `types/index.ts`.
4. **Image Assets:**
   - Currently, high-end Unsplash URLs are used as placeholders. To use real salon photos, update the image URLs in `/data/services.ts`, `/data/packages.ts`, `/data/stylists.ts`, and `/data/gallery.ts`, or store images in an S3 / Cloudinary bucket.

---

## 📜 License
© 2026 Ayesha's Salon. All rights reserved. Built with Next.js & TypeScript.
# Ayesha-Saloon
