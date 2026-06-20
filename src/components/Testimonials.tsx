import React from 'react';
import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: "1",
      name: "Sarah M.",
      initials: "SM",
      rating: 5,
      review: "Dentist Dude is incredibly thorough and truly listens. For the first time in years, I feel like I have a doctor who genuinely cares about my overall well-being, not just rushing through an appointment."
    },
    {
      id: "2",
      name: "James L.",
      initials: "JL",
      rating: 5,
      review: "The level of personalized care is unmatched. The office environment is calm and professional, and Dentist Dude explains complex medical terms in a way that is easy to understand. Highly recommended."
    },
    {
      id: "3",
      name: "Anonymous Patient",
      initials: "AP",
      rating: 5,
      review: "I came in with a chronic issue that others ignored. Dentist Dude took the time to investigate and created a holistic treatment plan that has changed my life. I'm forever grateful."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
              Patient Stories
            </h2>
            <p className="text-lg text-slate-600">
              Hearing from my patients is the most rewarding part of my practice. Here is what some of them have to say about their experience.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <FadeIn key={test.id} delay={idx * 0.1}>
              <div className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 h-full flex flex-col transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-indigo-900/5 hover:-translate-y-2">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 flex-grow text-lg group-hover:text-slate-800 transition-colors">
                  "{test.review}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center font-bold text-indigo-600 transition-colors duration-500 group-hover:bg-indigo-600 group-hover:text-white">
                    {test.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{test.name}</h4>
                    <p className="text-sm text-slate-500">Verified Patient</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
