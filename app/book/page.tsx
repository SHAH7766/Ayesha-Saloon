'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SafeImage } from '@/components/SafeImage';
import { Sparkles, Check, Clock, Calendar, User, Phone, Mail, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { services } from '@/data/services';
import { stylists } from '@/data/stylists';
import { getAvailableSlots, createBooking } from '@/lib/api';
import { formatPKR } from '@/lib/utils';
import { Service, BookingData } from '@/types';
import { siteConfig } from '@/data/siteConfig';

function BookForm() {
  const searchParams = useSearchParams();
  const preselectedServiceId = searchParams.get('serviceId');

  const [step, setStep] = useState(1);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(
    preselectedServiceId ? [preselectedServiceId] : []
  );
  const [selectedStylistId, setSelectedStylistId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [timeSlots, setTimeSlots] = useState<{ time: string; available: boolean }[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [confirmedBooking, setConfirmedBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    setSelectedDate(tomorrow);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      getAvailableSlots(selectedDate).then(setTimeSlots);
    }
  }, [selectedDate]);

  const selectedServices = services.filter((s) => selectedServiceIds.includes(s.id));
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter((sId) => sId !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const validatePhone = (p: string) => {
    const clean = p.replace(/\s+/g, '');
    const regex = /^((\+92)?(0)?3\d{9})$/;
    return regex.test(clean);
  };

  const handleNextStep = () => {
    if (step === 1 && selectedServiceIds.length === 0) return;
    if (step === 3 && !selectedTimeSlot) return;
    if (step === 4) {
      if (!customerName || !phone) return;
      if (!validatePhone(phone)) {
        setPhoneError('Please enter a valid Pakistani mobile number (e.g. 0315 4254938)');
        return;
      }
      setPhoneError('');
    }
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handleConfirmBooking = async () => {
    setLoading(true);
    try {
      const bookingPayload = {
        serviceIds: selectedServiceIds,
        stylistId: selectedStylistId,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        customerName,
        phone,
        email,
        notes,
        totalPrice,
        totalDuration: `${selectedServices.length * 45} mins`,
      };

      const result = await createBooking(bookingPayload);
      setConfirmedBooking(result);
      setStep(5);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4A1525', '#D4AF37', '#FAF7F2']
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppConfirmationLink = () => {
    if (!confirmedBooking) return '#';
    const serviceNames = selectedServices.map(s => s.name).join(', ');
    const msg = encodeURIComponent(
      `Hello Ayesha's Salon, I have booked an appointment online!\n\n` +
      `Reference ID: ${confirmedBooking.id}\n` +
      `Name: ${customerName}\n` +
      `Services: ${serviceNames}\n` +
      `Date: ${selectedDate} at ${selectedTimeSlot}\n` +
      `Total: ${formatPKR(totalPrice)}\n\nPlease confirm my slot.`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Stepper Progress Bar */}
      {step < 5 && (
        <div className="mb-10 bg-white p-4 rounded-2xl border border-[#E8E2D5] shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-[#7A6B5D] mb-2">
            <span className={step >= 1 ? 'text-[#4A1525] font-bold' : ''}>1. Services</span>
            <span className={step >= 2 ? 'text-[#4A1525] font-bold' : ''}>2. Stylist</span>
            <span className={step >= 3 ? 'text-[#4A1525] font-bold' : ''}>3. Date & Time</span>
            <span className={step >= 4 ? 'text-[#4A1525] font-bold' : ''}>4. Your Details</span>
          </div>
          <div className="w-full bg-[#E8E2D5] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#D4AF37] h-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="bg-white rounded-3xl border border-[#E8E2D5] shadow-xl p-6 sm:p-10">
        {/* STEP 1: Select Services */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-[#4A1525]">Select Service(s)</h3>
              <span className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                {selectedServiceIds.length} Selected
              </span>
            </div>

            <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
              {services.map((service) => {
                const isSelected = selectedServiceIds.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'border-[#4A1525] bg-[#FAF4ED] ring-1 ring-[#4A1525]'
                        : 'border-[#E8E2D5] bg-white hover:border-[#D4AF37]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#4A1525] border-[#4A1525] text-white' : 'border-[#8C7A6B]'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-[#2C241D] text-base">{service.name}</h4>
                        <span className="text-xs text-[#7A6B5D]">{service.category} • {service.duration}</span>
                      </div>
                    </div>
                    <span className="font-serif font-bold text-[#4A1525] text-base shrink-0">
                      {formatPKR(service.price)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[#F2ECE1] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#7A6B5D] block">Running Total</span>
                <span className="font-serif text-2xl font-bold text-[#4A1525]">{formatPKR(totalPrice)}</span>
              </div>
              <button
                onClick={handleNextStep}
                disabled={selectedServiceIds.length === 0}
                className="px-8 py-3.5 rounded-full bg-[#4A1525] text-white font-bold text-sm hover:bg-[#380e1b] transition-all disabled:opacity-50 flex items-center gap-2 shadow"
              >
                <span>Continue to Stylist</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Choose Stylist */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="font-serif text-2xl font-bold text-[#4A1525]">Choose Preferred Stylist</h3>
            <p className="text-sm text-[#7A6B5D]">Select a specific master expert or let us assign the best available artist.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setSelectedStylistId('any')}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                  selectedStylistId === 'any'
                    ? 'border-[#4A1525] bg-[#FAF4ED] ring-1 ring-[#4A1525]'
                    : 'border-[#E8E2D5] bg-white hover:border-[#D4AF37]'
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-[#4A1525] text-[#D4AF37] flex items-center justify-center font-serif font-bold text-xl">
                  ★
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#4A1525] text-base">Any Available Expert</h4>
                  <p className="text-xs text-[#7A6B5D] mt-0.5">Fastest slot availability</p>
                </div>
              </div>

              {stylists.map((st) => {
                const isSelected = selectedStylistId === st.id;
                return (
                  <div
                    key={st.id}
                    onClick={() => setSelectedStylistId(st.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                      isSelected
                        ? 'border-[#4A1525] bg-[#FAF4ED] ring-1 ring-[#4A1525]'
                        : 'border-[#E8E2D5] bg-white hover:border-[#D4AF37]'
                    }`}
                  >
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-[#D4AF37]">
                      <SafeImage src={st.image} alt={st.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-[#4A1525] text-base">{st.name}</h4>
                      <p className="text-xs text-[#7A6B5D] line-clamp-1">{st.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[#F2ECE1] flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-full border border-[#4A1525] text-[#4A1525] text-xs font-semibold flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={handleNextStep}
                className="px-8 py-3.5 rounded-full bg-[#4A1525] text-white font-bold text-sm hover:bg-[#380e1b] transition-all flex items-center gap-2 shadow"
              >
                <span>Continue to Date & Time</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Pick Date and Time Slot */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="font-serif text-2xl font-bold text-[#4A1525]">Select Date & Time Slot</h3>
            <p className="text-sm text-[#7A6B5D]">Our salon operates daily from 11:00 AM to 8:00 PM.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                  Appointment Date *
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C241D] font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                  Available Time Slots *
                </label>
                <div className="grid grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTimeSlot === slot.time;
                    return (
                      <button
                        key={slot.time}
                        disabled={!slot.available}
                        onClick={() => setSelectedTimeSlot(slot.time)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border ${
                          !slot.available
                            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through'
                            : isSelected
                            ? 'bg-[#4A1525] text-[#FAF7F2] border-[#D4AF37] shadow'
                            : 'bg-white text-[#5C5248] border-[#E8E2D5] hover:border-[#D4AF37]'
                        }`}
                      >
                        {slot.time} {!slot.available && '(Booked)'}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F2ECE1] flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-full border border-[#4A1525] text-[#4A1525] text-xs font-semibold flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!selectedTimeSlot}
                className="px-8 py-3.5 rounded-full bg-[#4A1525] text-white font-bold text-sm hover:bg-[#380e1b] transition-all disabled:opacity-50 flex items-center gap-2 shadow"
              >
                <span>Continue to Your Details</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Customer Details & Confirmation Review */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="font-serif text-2xl font-bold text-[#4A1525]">Your Contact Details</h3>
            <p className="text-sm text-[#7A6B5D]">We will send your booking reference and confirmation details.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mahnoor Khan"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C241D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                    Pakistani Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0315 4254938"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError('');
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C241D]"
                  />
                  {phoneError && <span className="text-xs text-red-500 mt-1 block font-medium">{phoneError}</span>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="mahnoor@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C241D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                  Special Notes or Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. bridal timing requirements, skin sensitivity notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] text-sm text-[#2C241D]"
                />
              </div>
            </div>

            {/* Summary Box */}
            <div className="bg-[#FAF4ED] p-5 rounded-2xl border border-[#D4AF37]/40 space-y-3">
              <h4 className="font-serif font-bold text-[#4A1525] text-base">Appointment Summary</h4>
              <ul className="text-xs text-[#5C5248] space-y-1.5">
                <li><span className="font-semibold">Services:</span> {selectedServices.map(s => s.name).join(', ')}</li>
                <li><span className="font-semibold">Date & Time:</span> {selectedDate} at {selectedTimeSlot}</li>
                <li><span className="font-semibold">Total Price:</span> <span className="font-bold text-[#4A1525]">{formatPKR(totalPrice)}</span></li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#F2ECE1] flex items-center justify-between">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-full border border-[#4A1525] text-[#4A1525] text-xs font-semibold flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={handleConfirmBooking}
                disabled={loading || !customerName || !phone}
                className="px-8 py-3.5 rounded-full bg-[#4A1525] text-white font-bold text-sm hover:bg-[#380e1b] transition-all disabled:opacity-50 flex items-center gap-2 shadow"
              >
                {loading ? <span>Confirming...</span> : <span>Confirm Appointment</span>}
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: Success Screen */}
        {step === 5 && confirmedBooking && (
          <div className="text-center space-y-6 animate-fadeIn py-8">
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Booking Confirmed Successfully</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">
                We Are Excited to Welcome You, {customerName}!
              </h2>
              <p className="text-sm text-[#7A6B5D]">
                Your booking reference ID is <span className="font-mono font-bold text-[#4A1525]">{confirmedBooking.id}</span>
              </p>
            </div>

            <div className="bg-[#FAF4ED] p-6 rounded-3xl border border-[#D4AF37]/40 max-w-lg mx-auto text-left space-y-3">
              <h4 className="font-serif font-bold text-[#4A1525] text-base border-b border-[#D4AF37]/30 pb-2">
                Booking Details
              </h4>
              <ul className="text-xs text-[#5C5248] space-y-2">
                <li><span className="font-semibold">Reference ID:</span> {confirmedBooking.id}</li>
                <li><span className="font-semibold">Services:</span> {selectedServices.map(s => s.name).join(', ')}</li>
                <li><span className="font-semibold">Date & Time:</span> {selectedDate} at {selectedTimeSlot}</li>
                <li><span className="font-semibold">Location:</span> {siteConfig.address}</li>
                <li><span className="font-semibold">Total Amount:</span> <span className="font-bold text-[#4A1525] text-sm">{formatPKR(totalPrice)}</span></li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={getWhatsAppConfirmationLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba59] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Confirm on WhatsApp ({siteConfig.phone})</span>
              </a>
              <a
                href="/"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#4A1525] text-[#4A1525] font-semibold text-sm hover:bg-[#4A1525] hover:text-white transition-all text-center"
              >
                Return to Home Page
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 text-[#4A1525] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D4AF37]/30">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Online Appointment Booking</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">
          Book Your Salon Experience
        </h1>
        <p className="text-sm text-[#7A6B5D]">
          Garden Town, Lahore • Ladies Only Complete Privacy
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-20 font-serif text-xl text-[#4A1525]">Loading booking form...</div>}>
        <BookForm />
      </Suspense>
    </div>
  );
}
