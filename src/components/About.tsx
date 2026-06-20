import React from 'react';
import { FadeIn } from './FadeIn';
import { Heart, Award, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="order-2 lg:order-1">
          <FadeIn>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              A modern approach to holistic, personalized care.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I believe that true healthcare goes beyond treating symptoms—it’s about understanding the whole person. With over 15 years of clinical experience, my philosophy is rooted in compassion, evidence-based medicine, and building lasting partnerships with my patients.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Every body is different, and every treatment plan should be, too. From preventative wellness to chronic disease management, I am dedicated to providing a safe, welcoming environment where you feel heard and supported.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100 text-pink-700 font-medium">
              <Heart size={16} /> Compassion
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-medium">
              <Award size={16} /> Expertise
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-medium">
              <Sparkles size={16} /> Personalization
            </div>
          </FadeIn>
        </div>

        {/* Right Column - Highlight Box */}
        <FadeIn delay={0.2} direction="left" className="order-1 lg:order-2">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">
              Education & Training
            </h3>
            
            <div className="space-y-6">
              <div className="group flex gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-indigo-100">
                  <span className="font-bold text-indigo-600">MD</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">Doctor of Medicine</h4>
                  <p className="text-slate-500 mb-1">Harvard Medical School</p>
                  <p className="text-sm text-slate-400">2005 - 2009</p>
                </div>
              </div>

              <div className="group flex gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-purple-100">
                  <span className="font-bold text-purple-600">Res</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-purple-700 transition-colors">Internal Medicine Residency</h4>
                  <p className="text-slate-500 mb-1">Massachusetts General Hospital</p>
                  <p className="text-sm text-slate-400">2009 - 2012</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">Short Bio</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Dentist Dude has dedicated his career to internal medicine with a special focus on preventive health. He serves on the board of the American Medical Association and regularly speaks on holistic health integration.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
