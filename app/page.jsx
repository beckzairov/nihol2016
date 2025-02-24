'use client';

import Navbar from '@/app/components/Navbar';
import { useTranslation } from "react-i18next";
import Hero from '@/app/components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import StayInformed from './components/StayInformed';
import ClientTestimonials from './components/ClientTestimonials';

export default function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <Hero/>
      <About/>
      <Partners/>
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('features.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['fast', 'responsive', 'customizable'].map((feature) => (
              <div key={feature} className="p-6 bg-white shadow rounded-lg">
                <h3 className="text-xl font-semibold">{t(`features.${feature}`)}</h3>
                <p className="mt-2 text-gray-600">{t('features.description')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClientTestimonials/>
      <StayInformed/>
    </div>
  );
}
