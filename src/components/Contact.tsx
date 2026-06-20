import React from 'react';
import { FadeIn } from './FadeIn';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-bl-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-16 items-start relative z-10">
        
        {/* Form Section */}
        <div className="lg:col-span-3">
          <FadeIn>
            <p className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4">Get in Touch</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Request an Appointment
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Fill out the form below and our office will contact you within 24 hours to confirm your appointment time.
            </p>

            <form className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-indigo-900/5 relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-6 pt-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none transition-all duration-300 bg-slate-50 hover:bg-slate-100/50 focus:bg-white" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none transition-all duration-300 bg-slate-50 hover:bg-slate-100/50 focus:bg-white" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none transition-all duration-300 bg-slate-50 hover:bg-slate-100/50 focus:bg-white" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                  <input type="date" id="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none transition-all duration-300 bg-slate-50 hover:bg-slate-100/50 focus:bg-white text-slate-600" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Selection</label>
                <select id="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none transition-all duration-300 bg-slate-50 hover:bg-slate-100/50 focus:bg-white text-slate-700 appearance-none">
                  <option>New Patient Consultation</option>
                  <option>Routine Check-up</option>
                  <option>Follow-up Visit</option>
                  <option>Telemedicine Consultation</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none transition-all duration-300 bg-slate-50 hover:bg-slate-100/50 focus:bg-white resize-none" placeholder="Briefly describe your reason for visit..."></textarea>
              </div>

              <motion.button 
                whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-slate-900 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group"
              >
                Request Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
              
              <p className="text-center text-xs text-slate-400 mt-5 flex items-center justify-center gap-1.5">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Your information is securely encrypted and HIPAA compliant.
              </p>
            </form>
          </FadeIn>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <FadeIn delay={0.2} className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl shadow-indigo-900/20 overflow-hidden relative">
            {/* Subtle bg glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <h3 className="text-2xl font-display font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              <motion.a href="tel:+17233555789" whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <Phone size={20} className="text-indigo-400 group-hover:text-indigo-300" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Call Us Directly</p>
                  <p className="font-medium text-lg tracking-wide group-hover:text-indigo-200 transition-colors">+1 (723) 355-5789</p>
                </div>
              </motion.a>

              <motion.a href="mailto:care@dentistdude.com" whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <Mail size={20} className="text-purple-400 group-hover:text-purple-300" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email Us</p>
                  <p className="font-medium text-lg group-hover:text-purple-200 transition-colors">care@dentistdude.com</p>
                </div>
              </motion.a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Office Location</p>
                  <p className="font-medium text-lg leading-relaxed">
                    124 Healthway Blvd, Suite 300<br/>
                    Boston, MA 02115
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-8 border-t border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Working Hours</p>
                  <p className="font-medium text-lg">Mon - Thu: <span className="text-slate-300">8:30am - 5:00pm</span></p>
                  <p className="font-medium text-lg">Friday: <span className="text-slate-300">8:30am - 2:00pm</span></p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
