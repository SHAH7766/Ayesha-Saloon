'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { sendContactMessage } from '@/lib/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactMessage({
        ...formData,
        createdAt: new Date().toISOString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/15 text-[#4A1525] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#D4AF37]/30">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#4A1525]">
          Visit Our Salon in Garden Town
        </h1>
        <p className="text-sm sm:text-base text-[#7A6B5D] leading-relaxed">
          Have questions about bridal packages or appointments? Reach out via WhatsApp or visit us directly in Lahore.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Hours */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-[#E8E2D5] shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#4A1525]">Contact Information</h3>

            <ul className="space-y-5 text-sm text-[#5C5248]">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#4A1525] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="font-bold text-[#4A1525] block text-base">Salon Address</span>
                  <span className="text-xs text-[#7A6B5D] mt-0.5 block">{siteConfig.address}</span>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#4A1525] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <span className="font-bold text-[#4A1525] block text-base">WhatsApp / Phone</span>
                  <a href={siteConfig.whatsappUrl} className="text-xs text-[#25D366] font-semibold mt-0.5 block hover:underline">
                    {siteConfig.phone} (Tap to chat on WhatsApp)
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#4A1525] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="font-bold text-[#4A1525] block text-base">Email Address</span>
                  <span className="text-xs text-[#7A6B5D] mt-0.5 block">{siteConfig.email}</span>
                </div>
              </li>
            </ul>

            <div className="pt-6 border-t border-[#F2ECE1] space-y-4">
              <h4 className="font-serif font-bold text-[#4A1525] text-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D4AF37]" /> Operating Hours
              </h4>
              <div className="flex justify-between text-sm text-[#5C5248] py-2 border-b border-[#F2ECE1]">
                <span>{siteConfig.hours.days}</span>
                <span className="font-bold text-[#4A1525]">{siteConfig.hours.time}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] bg-[#D4AF37]/10 p-3 rounded-xl font-medium border border-[#D4AF37]/30">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{siteConfig.privacyNote}</span>
              </div>
            </div>
          </div>

          {/* Google Map Embed Placeholder */}
          <div className="rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-sm h-72 relative bg-[#FAF7F2]">
            <iframe
              title="Google Map Garden Town Lahore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.599291244585!2d74.3270!3d31.5036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMwJzEzLjAiTiA3NMKwMTknMzcuMiJF!5e0!3m2!1sen!2spk!4v1600000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E2D5] shadow-sm">
          {submitted ? (
            <div className="text-center py-16 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#4A1525]">Message Sent Successfully!</h3>
              <p className="text-sm text-[#7A6B5D] max-w-md mx-auto">
                Thank you for reaching out to Ayesha's Salon. Our team has received your message and will get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
                }}
                className="mt-6 px-8 py-3 rounded-full bg-[#4A1525] text-white text-xs font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#4A1525]">Send Us a Message</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ayesha Malik"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#2C241D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="03XX XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#2C241D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="ayesha@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#2C241D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#2C241D]"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Bridal Booking Inquiry">Bridal Booking Inquiry</option>
                    <option value="Hair & Skin Treatment">Hair & Skin Treatment</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C5248] uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm text-[#2C241D]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-[#4A1525] text-white font-bold text-sm hover:bg-[#380e1b] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
