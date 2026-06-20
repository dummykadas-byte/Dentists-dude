import React from 'react';
import { FadeIn } from './FadeIn';
import { serviceIcons } from './icons';

export function Services() {
  const services = [
    {
      id: "primary",
      icon: "primary",
      title: "Primary Care",
      description: "Comprehensive health assessments, routine check-ups, and ongoing health monitoring."
    },
    {
      id: "consultation",
      icon: "consultation",
      title: "Specialist Consultation",
      description: "In-depth evaluations and expert medical advice for complex health concerns."
    },
    {
      id: "preventive",
      icon: "preventive",
      title: "Preventive Care",
      description: "Screenings, immunizations, and lifestyle planning to keep you healthy before issues arise."
    },
    {
      id: "chronic",
      icon: "chronic",
      title: "Chronic Condition Management",
      description: "Compassionate, consistent support for managing diabetes, hypertension, and more."
    },
    {
      id: "wellness",
      icon: "wellness",
      title: "Wellness Guidance",
      description: "Holistic strategies combining nutrition, mental health, and physical activity."
    },
    {
      id: "followup",
      icon: "followup",
      title: "Follow-up Care",
      description: "Dedicated post-treatment monitoring to ensure optimal recovery and long-term health."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4">Expertise</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
              Comprehensive Health Services
            </h2>
            <p className="text-lg text-slate-600">
              Delivering high-quality, patient-centered care through a variety of specialized and general medical services.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.icon];
            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <div className="group bg-slate-50/50 rounded-3xl p-8 border border-slate-100 transition-all duration-500 ease-out hover:bg-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/5 h-full flex flex-col cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-out">
                    {IconComponent && <IconComponent className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-500 delay-100" />}
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
