import React from 'react';
import { FadeIn } from './FadeIn';

export function Experience() {
  const experiences = [
    {
      title: "Chief Medical Officer",
      org: "St. Jude Wellness Center",
      period: "2018 - Present",
      description: "Leading a team of 40+ medical professionals. Spearheaded the holistic integration division."
    },
    {
      title: "Senior Attending Physician",
      org: "General Hospital",
      period: "2012 - 2018",
      description: "Specialized in complex internal medicine cases and mentored over 20 resident physicians."
    }
  ];

  const certifications = [
    "American Board of Internal Medicine (ABIM)",
    "Board Certified in Lifestyle Medicine",
    "Advanced Cardiac Life Support (ACLS) Certified",
    "Fellow of the American College of Physicians (FACP)"
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Experience & Credentials
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience Timeline */}
          <div>
            <FadeIn>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-px bg-indigo-600" />
                Work History
              </h3>
            </FadeIn>
            <div className="space-y-12 pl-4 border-l-2 border-slate-200">
              {experiences.map((exp, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="relative">
                    <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-white border-4 border-indigo-600" />
                    <h4 className="text-xl font-bold text-slate-900">{exp.title}</h4>
                    <p className="font-medium text-indigo-600 mb-2">{exp.org}</p>
                    <p className="text-sm text-slate-400 mb-4">{exp.period}</p>
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Certifications and Specialties */}
          <div>
            <FadeIn>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-px bg-purple-600" />
                Certifications
              </h3>
            </FadeIn>
            <div className="grid gap-4 mb-12">
              {certifications.map((cert, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-purple-100 cursor-default">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-purple-100 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-purple-600" />
                    </div>
                    <span className="font-medium text-slate-800 transition-colors group-hover:text-purple-700">{cert}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-px bg-teal-600" />
                Specialties & Awards
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Preventive Medicine', 'Women\'s Health', 'Chronic Disease', 'Top Doctor 2023', 'Patient Choice Award'].map((tag, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-slate-700 font-medium text-sm shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-md hover:-translate-y-0.5 hover:text-teal-700 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
