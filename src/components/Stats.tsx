import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedCounter } from './AnimatedCounter';
import { Clock, Users, Shield, Trophy } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Clock,
      value: "15+",
      label: "Years Experience",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Patients",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Shield,
      value: "Double",
      label: "Board Certified",
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      icon: Trophy,
      value: "4.9/5",
      label: "Average Rating",
      color: "text-pink-600",
      bg: "bg-pink-50"
    }
  ];

  return (
    <section className="py-12 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:shadow-indigo-900/5 transition-all duration-500 ease-out">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 ${stat.bg} ${stat.color}`}>
                <stat.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight mb-2">
                <AnimatedCounter value={stat.value} />
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
