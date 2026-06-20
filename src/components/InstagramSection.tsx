import React from 'react';
import { FadeIn } from './FadeIn';
import { Instagram, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function InstagramSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="relative rounded-[3rem] p-10 md:p-16 overflow-hidden bg-slate-900 text-white text-center shadow-2xl shadow-indigo-900/10">
            {/* Abstract gradient background to evoke Instagram branding subtly but keep it premium */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/0 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true }}
                className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[2px] mb-8"
              >
                <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center">
                  <Instagram size={34} className="text-white" />
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
                Wellness, delivered daily.
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
                Join our growing community. Discover bite-sized health tips, mindfulness practices, and behind-the-scenes updates from the clinic.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  className="bg-white text-slate-900 font-bold text-base md:text-lg px-8 py-4 rounded-full flex items-center gap-2 group hover:shadow-lg transition-all focus-visible:ring-indigo-600 focus-visible:outline-none"
                >
                  Follow @dentistdude
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-2"><Heart size={16} className="text-pink-400" /> Holistic Advice</span>
                <span className="flex items-center gap-2"><Sparkles size={16} className="text-amber-400" /> Daily Inspiration</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
