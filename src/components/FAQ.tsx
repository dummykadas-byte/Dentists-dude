import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      id: "1",
      question: "How can I book an appointment?",
      answer: "You can book an appointment by filling out the online request form below, calling our office directly during business hours, or using the Patient Portal if you are an existing patient."
    },
    {
      id: "2",
      question: "Are you accepting new patients?",
      answer: "Yes, Dentist Dude is currently accepting new patients for primary care and specialized internal medicine consultations."
    },
    {
      id: "3",
      question: "Do you provide online / telemedicine consultations?",
      answer: "Yes, we offer secure telemedicine appointments for follow-ups, minor concerns, and wellness reviews. Initial consultations generally require an in-person visit."
    },
    {
      id: "4",
      question: "What should I bring to my first visit?",
      answer: "Please bring your photo ID, insurance card, a list of your current medications, and any recent medical records or test results relevant to your visit."
    },
    {
      id: "5",
      question: "What insurances do you accept?",
      answer: "We accept most major insurance plans including BlueCross, Medicare, and UnitedHealthcare. Please contact our front desk to verify your specific coverage."
    },
    {
      id: "6",
      question: "What are your working hours?",
      answer: "Our office is open Monday through Thursday, 8:30 AM to 5:00 PM, and Friday from 8:30 AM to 2:00 PM. We are closed on weekends."
    }
  ];

  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4">Support</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find quick answers to the most common questions about our practice and services.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <FadeIn key={faq.id} delay={idx * 0.05}>
                <div 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'bg-white border-indigo-100 shadow-lg shadow-indigo-900/5' : 'bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-inset rounded-2xl"
                  >
                    <span className={`font-bold font-display text-lg transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-700'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
