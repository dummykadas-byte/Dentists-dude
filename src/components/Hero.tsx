import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { CheckCircle2, Star, HeartPulse } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-teal-50 to-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 backdrop-blur-sm border border-slate-200/50 mb-8">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-800">Accepting New Patients</span>
              <div className="w-1 h-1 rounded-full bg-slate-300 mx-1" />
              <span className="text-sm font-medium text-slate-600">Available for Consultations</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Compassionate, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">Expert Care</span> for <br/>
              Your Total Well-being.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Personalized, patient-focused expertise ensuring professional care for you and the broader community. A holistic approach to modern medicine.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mb-12">
              <motion.a 
                whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                href="#contact" 
                className="bg-slate-900 text-white font-medium text-lg px-8 py-4 rounded-full transition-colors shadow-md text-center"
              >
                Book Appointment
              </motion.a>
              <motion.a 
                whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}
                whileTap={{ scale: 0.98 }}
                href="#about" 
                className="bg-white text-slate-900 border border-slate-200 font-medium text-lg px-8 py-4 rounded-full hover:border-slate-300 transition-colors text-center"
              >
                Learn More
              </motion.a>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1 text-slate-800">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                Board Certified
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>15+ Years Experience</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>10k+ Patients</span>
            </div>
          </FadeIn>
        </div>

        {/* Image Content */}
        <FadeIn delay={0.2} direction="left" className="relative hidden md:block">
          {/* Main Image Base with Aspect Ratio */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 border-8 border-white"
          >
            <img 
              src="/doctor_portrait.png" 
              alt="Dentist Dude" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image generation fails or hasn't completed yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop";
              }}
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
          </motion.div>

          {/* Floating Card - Diagnostic/Treatment */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [-4, 4, -4] }}
            transition={{ 
              scale: { delay: 0.8, duration: 0.6, ease: "easeOut" },
              opacity: { delay: 0.8, duration: 0.6 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }
            }}
            className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl shadow-indigo-900/10 border border-slate-100 flex items-start gap-4 max-w-[260px] z-10"
          >
            <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
              <HeartPulse className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 mb-1">Personalized Treatment</h4>
              <p className="text-xs text-slate-500 leading-snug">Tailored medical plans designed uniquely for your health goals.</p>
            </div>
          </motion.div>

          {/* Floating Card - Name Tag */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [4, -4, 4] }}
            transition={{ 
              scale: { delay: 1, duration: 0.6, ease: "easeOut" },
              opacity: { delay: 1, duration: 0.6 },
              y: { repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.2 }
            }}
            className="absolute top-12 -right-8 bg-white px-6 py-4 rounded-full shadow-xl shadow-indigo-900/10 border border-slate-100 z-10"
          >
            <p className="font-display font-bold text-slate-900">Dentist Dude</p>
            <p className="text-xs font-medium text-slate-500 text-center">Internal Medicine</p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
