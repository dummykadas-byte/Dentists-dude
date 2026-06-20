import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4 border-b border-slate-100/50' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform duration-500 ease-out">
            D
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-indigo-950 transition-colors">
            Dentist Dude
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group py-2"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-600 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out rounded-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.a 
            href="#portal" 
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-4 py-2"
          >
            Patient Portal
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.2)' }}
            whileTap={{ scale: 0.97 }}
            className="text-sm font-medium bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-md"
          >
            Book Visit
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 py-6 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-600 py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full h-px bg-slate-100 my-2" />
              <a href="#portal" className="text-base font-medium text-slate-600 py-2">
                Patient Portal
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl text-center mt-2 shadow-md shadow-indigo-200"
              >
                Book Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
