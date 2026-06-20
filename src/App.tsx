/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { InstagramSection } from './components/InstagramSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Experience />
        <Testimonials />
        <FAQ />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
