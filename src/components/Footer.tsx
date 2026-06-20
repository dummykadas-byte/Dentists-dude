import React from 'react';
import { FadeIn } from './FadeIn';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                D
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Dentist Dude
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Providing compassionate, expert care for your total well-being. Dedicated to modern, holistic medicine.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-slate-400">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all text-slate-400">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Dentist Dude</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">All Services</a></li>
              <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Credentials</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Patient FAQ</a></li>
              <li><a href="#portal" className="hover:text-indigo-400 transition-colors">Patient Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Primary Care</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Consultations</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Preventive Health</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Chronic Management</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Telemedicine</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <Instagram className="text-pink-500" size={24} />
                <span className="font-medium text-white">@dentistdude</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">Follow for weekly health tips, wellness advice, and office updates.</p>
              <a href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">View Instagram Profile &rarr;</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dentist Dude. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
